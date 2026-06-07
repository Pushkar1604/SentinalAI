import pandas as pd
import numpy as np
import joblib
import os
import json

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score
)

from xgboost import XGBClassifier


# =========================
# CONFIG
# =========================

MODEL_PATH = "app/models/fraud_model.pkl"
METRICS_PATH = "app/models/model_metrics.json"


# =========================
# TRAIN MODEL
# =========================

def train_model():

    df = pd.read_csv("app/data/DataSet.csv")
    if "Unnamed: 0" in df.columns:
        df = df.drop(columns=["Unnamed: 0"])
        get_feature_importance()

    print("\nDataset Shape:")
    print(df.shape)

    print("\nLast 10 Columns:")
    print(df.columns[-10:])

    target_column = df.columns[-1]

    X = df.drop(columns=[target_column])
    y = df[target_column]

    # Convert object columns to numeric
    object_cols = X.select_dtypes(include=["object"]).columns

    for col in object_cols:
        X[col] = pd.to_numeric(
            X[col],
            errors="coerce"
        )

    X = X.fillna(0)

    print("\nRemaining Object Columns:")
    print(
        X.select_dtypes(
            include=["object"]
        ).columns.tolist()
    )

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    model = XGBClassifier(
        n_estimators=100,
        max_depth=6,
        learning_rate=0.1,
        random_state=42
    )

    model.fit(
        X_train,
        y_train
    )

    predictions = model.predict(X_test)

    accuracy = accuracy_score(
        y_test,
        predictions
    )

    precision = precision_score(
        y_test,
        predictions
    )

    recall = recall_score(
        y_test,
        predictions
    )

    f1 = f1_score(
        y_test,
        predictions
    )

    os.makedirs(
        "app/models",
        exist_ok=True
    )

    joblib.dump(
        model,
        MODEL_PATH
    )

    metrics = {
        "accuracy": round(float(accuracy), 4),
        "precision": round(float(precision), 4),
        "recall": round(float(recall), 4),
        "f1": round(float(f1), 4)
    }

    with open(METRICS_PATH, "w") as f:
        json.dump(metrics, f)

    return {
        "accuracy": metrics["accuracy"],
        "precision": metrics["precision"],
        "recall": metrics["recall"],
        "f1_score": metrics["f1"],
        "features": X.shape[1],
        "target_column": target_column
    }


# =========================
# MODEL METRICS
# =========================

def get_model_metrics():

    if not os.path.exists(METRICS_PATH):
        return {
            "error": "Train model first"
        }

    with open(METRICS_PATH, "r") as f:
        return json.load(f)


# =========================
# PREDICT FRAUD
# =========================

def predict_fraud(features):

    model = joblib.load(
        MODEL_PATH
    )

    data = np.array(
        features
    ).reshape(1, -1)

    prediction = model.predict(data)[0]

    probability = model.predict_proba(data)[0][1]

    risk_score = round(
        probability * 100,
        2
    )

    if risk_score < 30:
        risk_level = "Low"

    elif risk_score < 60:
        risk_level = "Medium"

    elif risk_score < 80:
        risk_level = "High"

    else:
        risk_level = "Critical"

    return {
        "prediction": int(prediction),
        "fraud_probability": float(probability),
        "risk_score": risk_score,
        "risk_level": risk_level
    }


# =========================
# DATASET INFO
# =========================

def get_dataset_info():

    df = pd.read_csv(
        "app/data/DataSet.csv"
    )

    return {
        "rows": int(df.shape[0]),
        "columns": int(df.shape[1]),
        "features": int(df.shape[1] - 1),
        "target_column": df.columns[-1],
        "column_names": df.columns.tolist()[:20]
    }


# =========================
# FEATURE IMPORTANCE
# =========================

def get_feature_importance():

    model = joblib.load(
        MODEL_PATH
    )

    df = pd.read_csv(
        "app/data/DataSet.csv"
    )

    features = df.columns[:-1]

    importance = model.feature_importances_

    result = []

    for feature, score in zip(
        features,
        importance
    ):
        result.append({
            "feature": feature,
            "importance": float(score)
        })

    result = sorted(
        result,
        key=lambda x: x["importance"],
        reverse=True
    )

    return result[:20]

def predict_demo():

    return {
        "prediction": 1,
        "fraud_probability": 0.97,
        "risk_score": 91,
        "risk_level": "Critical"
    }