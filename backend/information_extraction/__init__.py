from pathlib import Path

from transformers import (
    AutoTokenizer,
    AutoModelForTokenClassification,
    pipeline
)

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "fine-tuned-model"

def build_pipeline():

    tokenizer = AutoTokenizer.from_pretrained(
        str(MODEL_PATH),
        add_prefix_space=True
    )

    model = AutoModelForTokenClassification.from_pretrained(
        str(MODEL_PATH),
        use_safetensors=True   # 👈 IMPORTANT
    )

    ner = pipeline(
        "token-classification",
        model=model,
        tokenizer=tokenizer,
        aggregation_strategy="simple"
    )

    return ner
