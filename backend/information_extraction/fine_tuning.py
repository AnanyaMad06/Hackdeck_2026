import json

import numpy as np

from datasets import Dataset
from seqeval.metrics import f1_score
from transformers import AutoTokenizer, AutoModelForTokenClassification
from transformers import DataCollatorForTokenClassification
from transformers import EarlyStoppingCallback, Trainer, TrainingArguments

with open("/training_data.json") as f:
  train_data = json.load(f)

with open("/evaluation_data.json") as f:
  val_data = json.load(f)

train_ds = Dataset.from_list(train_data)
val_ds = Dataset.from_list(val_data)

labels = [
    "O",
    "B-CRIME", "I-CRIME",
    "B-LOCATION", "I-LOCATION"
]

label2id = {l: i for i, l in enumerate(labels)}
id2label = {i: l for i, l in enumerate(labels)}

model_name = "distilroberta-base"

tokenizer = AutoTokenizer.from_pretrained(
    model_name,
    add_prefix_space=True
)

model = AutoModelForTokenClassification.from_pretrained(
    model_name,
    num_labels=len(labels),
    id2label=id2label,
    label2id=label2id
)

def tokenize_and_align(examples):

    tokenized = tokenizer(
        examples["tokens"],
        truncation=True,
        is_split_into_words=True
    )

    aligned_labels = []

    for i, labels in enumerate(examples["ner_tags"]):
        word_ids = tokenized.word_ids(i)

        prev = None
        label_ids = []

        for wid in word_ids:

            if wid is None:
                label_ids.append(-100)

            elif wid != prev:
                label_ids.append(label2id[labels[wid]])

            else:
                # inside same word → I- tag
                tag = labels[wid]

                if tag.startswith("B-"):
                    tag = tag.replace("B-", "I-")

                label_ids.append(label2id[tag])

            prev = wid

        aligned_labels.append(label_ids)

    tokenized["labels"] = aligned_labels

    return tokenized

train_ds = train_ds.map(tokenize_and_align, batched=True)
val_ds = val_ds.map(tokenize_and_align, batched=True)

collator = DataCollatorForTokenClassification(tokenizer)

def compute_metrics(eval_pred):

    logits, labels = eval_pred

    preds = np.argmax(logits, axis=-1)

    true_labels = []
    true_preds = []

    for pred, lab in zip(preds, labels):

        t_lab = []
        t_pred = []

        for p, l in zip(pred, lab):

            if l != -100:

                t_lab.append(id2label[l])
                t_pred.append(id2label[p])

        true_labels.append(t_lab)
        true_preds.append(t_pred)

    return {
        "f1": f1_score(true_labels, true_preds)
    }

args = TrainingArguments(
    output_dir="./ner_model",
    eval_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    learning_rate=1.5e-5,
    per_device_train_batch_size=32,
    per_device_eval_batch_size=16,
    num_train_epochs=20,
    warmup_ratio = 0.1,
    weight_decay=0.01,
    logging_steps=50,
    report_to="none"
)

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=train_ds,
    eval_dataset=val_ds,
    data_collator=collator,
    compute_metrics=compute_metrics,
    callbacks=[EarlyStoppingCallback(early_stopping_patience=3)],
)

trainer.train()
trainer.save_model("./fine-tuned-model")
