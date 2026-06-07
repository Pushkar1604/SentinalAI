from dotenv import load_dotenv
import os
import json
import google.generativeai as genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_report(
    risk_score,
    fraud_probability,
    risk_level
):

    prompt = f"""
    You are a banking fraud investigation AI.

    Risk Score: {risk_score}
    Fraud Probability: {fraud_probability}
    Risk Level: {risk_level}

    Return ONLY valid JSON.

    {{
      "case_status": "",
      "risk_assessment": "",
      "mule_indicators": [],
      "threat_level": "",
      "recommended_actions": [],
      "confidence_score": 0
    }}

    Rules:
    - confidence_score must be between 0 and 100
    - Do not include markdown
    - Do not include explanations
    - Do not include ```json
    - Return raw JSON only
    """

    try:

        response = model.generate_content(prompt)

        cleaned = response.text.strip()

        if cleaned.startswith("```json"):
            cleaned = cleaned.replace("```json", "")
            cleaned = cleaned.replace("```", "")

        return json.loads(cleaned)

    except Exception as e:

        print("Gemini Error:", str(e))

        # Fallback report for demo/hackathon
        return {
            "case_status": "Open Investigation",

            "risk_assessment":
            f"""
            Transaction exhibits extremely high fraud risk.
            Risk Score: {risk_score}
            Fraud Probability: {fraud_probability}
            Immediate analyst review recommended.
            """,

            "mule_indicators": [
                "Rapid Fund Transfers",
                "Multiple Beneficiaries",
                "Layering Activity",
                "Suspicious Account Network"
            ],

            "threat_level": risk_level,

            "recommended_actions": [
                "Freeze Account",
                "Escalate To Fraud Team",
                "Perform AML Review",
                "File Suspicious Activity Report",
                "Monitor Linked Accounts"
            ],

            "confidence_score": int(
                fraud_probability * 100
            ),

            "fallback": True,

            "error": str(e)
        }