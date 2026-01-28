import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Synthetic training data (trend learning only)
data = {
    "total_police": [80, 100, 120, 150, 180, 200],
    "intensity":    [1, 2, 3, 4, 5, 6],
    "allocation":   [5, 12, 25, 40, 55, 70]
}

df = pd.DataFrame(data)

X = df[["total_police", "intensity"]]
y = df["allocation"]

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "police_allocator_model.pkl")

print("✅ Model trained and saved")
