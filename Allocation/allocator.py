import pandas as pd
import joblib

model = joblib.load("police_allocator_model.pkl")

def allocate_police(total_police, intensities, min_police=5):
    n = len(intensities)

    # ---- Step 1: Predict relative risk per zone ----
    raw_scores = []
    for intensity in intensities:
        X = pd.DataFrame(
            [[total_police, intensity]],
            columns=["total_police", "intensity"]
        )
        score = model.predict(X)[0]
        raw_scores.append(max(score, 0))

    # ---- Step 2: Minimum police constraint ----
    min_required = min_police * n
    if total_police < min_required:
        raise ValueError(
            f"Total police ({total_police}) < minimum required ({min_required})"
        )

    base_allocation = [min_police] * n
    remaining = total_police - min_required

    # ---- Step 3: Proportional redistribution ----
    total_score = sum(raw_scores)

    if total_score == 0:
        return base_allocation

    scaled = [
        (score / total_score) * remaining
        for score in raw_scores
    ]

    allocation = [
        int(base_allocation[i] + scaled[i])
        for i in range(n)
    ]

    # ---- Step 4: Fix rounding drift ----
    diff = total_police - sum(allocation)
    order = sorted(range(n), key=lambda i: raw_scores[i], reverse=True)

    for i in range(abs(diff)):
        allocation[order[i % n]] += 1 if diff > 0 else -1

    return allocation
