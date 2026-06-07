import { api } from "./api";

export async function getFeatureImportance() {
  const response = await api.get("/feature-importance");
  return response.data;
}