import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Synthetic training data (trend learning only)
data = {
    "total_officers": [80, 100, 120, 150, 180, 200],
    "crime_intensities": [1, 2, 3, 4, 5, 6],
    "allocations": [5, 12, 25, 40, 55, 70]
}

df = pd.DataFrame(data)

X = df[["total_officers", "crime_intensities"]]
y = df["allocations"]

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "model.pkl")
