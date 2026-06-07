from pydantic import BaseModel

class ReportRequest(BaseModel):

    risk_score: float
    fraud_probability: float
    risk_level: str