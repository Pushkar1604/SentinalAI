import { api } from "./api";

export async function getDemoPrediction() {
  const response = await api.get("/predict-demo");
  return response.data;
}