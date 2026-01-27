from transformers import (
    AutoTokenizer,
    AutoModelForTokenClassification,
    pipeline
)

MODEL_PATH = "./fine-tuned-model/"   # best checkpoint you kept

def build_pipeline():
    tokenizer = AutoTokenizer.from_pretrained(
        MODEL_PATH,
        add_prefix_space=True
    )

    model = AutoModelForTokenClassification.from_pretrained(MODEL_PATH)

    return pipeline(
        "token-classification",
        model=model,
        tokenizer=tokenizer,
        aggregation_strategy="simple"   # groups B/I spans
    )
