"use client";

import { useState } from "react";
import { generateReport } from "../lib/investigation";

export default function InvestigationPage() {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);

    try {
      const data = await generateReport();
      setReport(data.report);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        AI Investigation Center
      </h1>

      <button
        onClick={handleGenerate}
        className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold mb-8"
      >
        {loading
          ? "Generating..."
          : "Generate AI Report"}
      </button>

      {report && (
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-cyan-400 text-xl">
              Case Status
            </h2>

            <p className="mt-3">
              {report.case_status}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-red-400 text-xl">
              Threat Level
            </h2>

            <p className="mt-3">
              {report.threat_level}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-yellow-400 text-xl">
              Risk Assessment
            </h2>

            <p className="mt-3">
              {report.risk_assessment}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-green-400 text-xl">
              AI Confidence
            </h2>

            <p className="mt-3">
              {report.confidence_score}%
            </p>
          </div>

        </div>
      )}
    </div>
  );
}