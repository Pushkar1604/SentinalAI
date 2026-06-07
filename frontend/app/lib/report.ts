import { api } from "./api";

export async function generateReport() {

  const response = await api.post(
    "/generate-report",
    {
      risk_score: 91,
      fraud_probability: 0.97,
      risk_level: "Critical"
    }
  );

  return response.data;
}