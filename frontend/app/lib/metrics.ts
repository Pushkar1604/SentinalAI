import { api } from "./api";

export async function getModelMetrics() {
  const response = await api.get("/model-metrics");
  return response.data;
}