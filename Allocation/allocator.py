import pandas as pd
import joblib

# Load trained model
model = joblib.load("police_allocator_model.pkl")

def allocate_police(total_police, intensities, min_police=5):
    n = len(intensities)

    # Step 1: ML predictions
    raw_scores = []
    for intensity in intensities:
        df = pd.DataFrame(
            [[total_police, intensity]],
            columns=["total_police", "intensity"]
        )
        pred = model.predict(df)[0]
        raw_scores.append(max(0, pred))

    # Step 2: Minimum allocation
    base = [min_police] * n
    remaining = total_police - (min_police * n)

    if remaining < 0:
        raise ValueError("❌ Not enough police for minimum allocation")

    # Step 3: Proportional distribution
    total_raw = sum(raw_scores)
    scaled = [
        (r / total_raw) * remaining if total_raw > 0 else 0
        for r in raw_scores
    ]

    allocation = [
        int(base[i] + scaled[i])
        for i in range(n)
    ]

    # Step 4: Fix rounding
    diff = total_police - sum(allocation)
    order = sorted(range(n), key=lambda i: raw_scores[i], reverse=True)

    for i in range(abs(diff)):
        allocation[order[i % n]] += 1 if diff > 0 else -1

    return allocation
