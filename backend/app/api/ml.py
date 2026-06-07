from fastapi import APIRouter
import traceback

from app.schemas.predict import PredictionRequest
from app.schemas.report import ReportRequest
from app.services.ml_service import predict_demo
from fastapi.responses import FileResponse
from app.services.pdf_service import create_pdf_report

from app.services.gemini_service import generate_report

from app.services.ml_service import (
    train_model,
    predict_fraud,
    get_dataset_info,
    get_feature_importance,
    get_model_metrics
)

router = APIRouter()


# =========================
# TRAIN MODEL
# =========================

@router.post("/train-model")
def train():
    try:
        result = train_model()

        return {
            "message": "Model trained successfully",
            "metrics": result
        }

    except Exception as e:
        traceback.print_exc()

        return {
            "error": str(e)
        }


# =========================
# PREDICT FRAUD
# =========================

@router.post("/predict")
def predict(request: PredictionRequest):

    return predict_fraud(
        request.features
    )


# =========================
# DATASET INFO
# =========================

@router.get("/dataset-info")
def dataset_info():

    return get_dataset_info()


# =========================
# FEATURE IMPORTANCE
# =========================

@router.get("/feature-importance")
def feature_importance():

    return get_feature_importance()


# =========================
# MODEL METRICS
# =========================

@router.get("/model-metrics")
def model_metrics():

    return get_model_metrics()


# =========================
# AI INVESTIGATION REPORT
# =========================

@router.post("/generate-report")
def report(request: ReportRequest):

    try:

        report = generate_report(
            request.risk_score,
            request.fraud_probability,
            request.risk_level
        )

        return {
            "report": report
        }

    except Exception as e:

        return {
            "error": str(e)
        }
    

@router.get("/predict-demo")
def demo_prediction():

    return predict_demo()
@router.post("/download-report")
def download_report(request: ReportRequest):

    report = generate_report(
        request.risk_score,
        request.fraud_probability,
        request.risk_level
    )

    report_text = str(report)

    filename = "investigation_report.pdf"

    create_pdf_report(
        report_text,
        filename
    )

    return FileResponse(
        filename,
        media_type="application/pdf",
        filename="SentinelAI_Report.pdf"
    )