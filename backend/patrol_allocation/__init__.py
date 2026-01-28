from pathlib import Path

import pandas as pd
import joblib

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "model.pkl"

model = joblib.load(MODEL_PATH)

def allocate(total_officers, crime_intensities, min_allocation):
    n = len(crime_intensities)

    # ---- Step 1: Predict relative risk per zone ----
    raw_scores = []
    for intensity in crime_intensities:
        X = pd.DataFrame(
            [[total_officers, intensity]],
            columns=["total_police", "intensity"]
        )
        score = model.predict(X)[0]
        raw_scores.append(max(score, 0))

    # ---- Step 2: Minimum police constraint ----
    min_required = min_allocation * n
    if total_officers < min_required:
        raise ValueError(
            f"Total police ({total_officers}) < minimum required ({min_required})"
        )

    base_allocations = [min_allocation] * n
    remaining = total_officers - min_required

    # ---- Step 3: Proportional redistribution ----
    total_score = sum(raw_scores)

    if total_score == 0:
        return base_allocations

    scaled = [
        (score / total_score) * remaining
        for score in raw_scores
    ]

    allocations = [
        int(base_allocations[i] + scaled[i])
        for i in range(n)
    ]

    # ---- Step 4: Fix rounding drift ----
    diff = total_officers - sum(allocations)
    order = sorted(range(n), key=lambda i: raw_scores[i], reverse=True)

    for i in range(abs(diff)):
        allocations[order[i % n]] += 1 if diff > 0 else -1

    return allocations
