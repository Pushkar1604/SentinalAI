import axios from "axios";

export async function downloadReport() {

  const response = await axios.post(
    "http://127.0.0.1:8000/download-report",
    {
      risk_score: 91,
      fraud_probability: 0.97,
      risk_level: "Critical"
    },
    {
      responseType: "blob"
    }
  );

  const url = window.URL.createObjectURL(
    new Blob([response.data])
  );

  const link = document.createElement("a");

  link.href = url;

  link.setAttribute(
    "download",
    "SentinelAI_Report.pdf"
  );

  document.body.appendChild(link);

  link.click();
}