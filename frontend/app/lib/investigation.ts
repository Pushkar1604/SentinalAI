import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function generateReport() {
  const response = await axios.post(
    `${API_URL}/generate-report`,
    {
      risk_score: 91,
      fraud_probability: 0.97,
      risk_level: "Critical",
    }
  );

  return response.data;
}