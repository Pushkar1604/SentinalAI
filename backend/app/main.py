from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.ml import router as ml_router

app = FastAPI(
    title="FraudShield AI"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ml_router)

@app.get("/")
def root():
    return {
        "message": "FraudShield AI Running"
    }