import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# 1. Training data
data = {
    "total_police": [100, 120, 150, 200, 180],
    "intensity":    [1, 2, 3, 4, 5],
    "allocation":   [5, 15, 30, 45, 60]
}

df = pd.DataFrame(data)

X = df[["total_police", "intensity"]]
y = df["allocation"]

# 2. Train model
model = LinearRegression()
model.fit(X, y)

# 3. Save model
joblib.dump(model, "police_allocator_model.pkl")

print("✅ Model trained and saved as police_allocator_model.pkl")
