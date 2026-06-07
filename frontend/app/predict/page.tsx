"use client";

import { useState } from "react";
import { getDemoPrediction } from "../lib/predict";
import { generateReport } from "../lib/report";
import { downloadReport } from "../lib/downloadReport";

export default function PredictPage() {
  const [result, setResult] = useState<any>(null);
  const [report, setReport] = useState<any>(null);
  const [loadingReport, setLoadingReport] = useState(false);

  async function handlePredict() {
    try {
      const data = await getDemoPrediction();

      setResult(data);
      setReport(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleReport() {
    try {
      setLoadingReport(true);

      const data = await generateReport();

      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReport(false);
    }
  }

  return (
    <div>

      {/* Header */}

      <h1
        className="
        text-5xl
        font-extrabold
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        bg-clip-text
        text-transparent
        mb-8
      "
      >
        Fraud Prediction Console
      </h1>

      {/* Prediction Section */}

      <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500/20">

        <p className="text-gray-400 mb-4">
          Analyze a suspicious transaction using the AI Fraud Engine.
        </p>

        <button
          onClick={handlePredict}
          className="
          bg-cyan-500
          hover:bg-cyan-600
          px-8
          py-3
          rounded-lg
          text-white
          font-semibold
          transition
          "
        >
          Analyze Transaction
        </button>

      </div>

      {/* Prediction Results */}

      {result && (

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Prediction
            </h2>

            <p className="text-3xl font-bold mt-2">
              {result.prediction === 1
                ? "Fraud"
                : "Legitimate"}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Fraud Probability
            </h2>

            <p className="text-3xl font-bold mt-2 text-red-400">
              {(result.fraud_probability * 100).toFixed(2)}%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Risk Score
            </h2>

            <p className="text-3xl font-bold mt-2">
              {result.risk_score}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Threat Level
            </h2>

            <p className="text-3xl font-bold mt-2 text-red-500">
              {result.risk_level}
            </p>
          </div>

        </div>

      )}

      {/* Generate Report */}

      {result && (

        <button
          onClick={handleReport}
          className="
          mt-8
          bg-red-500
          hover:bg-red-600
          px-8
          py-3
          rounded-lg
          font-semibold
          transition
          "
        >
          Generate AI Investigation Report
        </button>

      )}

      {/* Loading */}

      {loadingReport && (

        <div className="bg-slate-900 p-8 rounded-xl mt-8">

          <p className="text-cyan-400">
            Generating AI Report...
          </p>

        </div>

      )}

      {/* Investigation Report */}

      {report && (

        <div className="
          bg-slate-900
          p-8
          rounded-xl
          mt-8
          border
          border-red-500
        ">

          <h2 className="
            text-3xl
            font-bold
            mb-6
            text-red-400
          ">
            AI Investigation Report
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Case Status
              </h3>

              <p>
                {report.report.case_status}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Risk Assessment
              </h3>

              <p>
                {report.report.risk_assessment}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Threat Level
              </h3>

              <p className="text-red-500 font-bold">
                {report.report.threat_level}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Confidence Score
              </h3>

              <p>
                {report.report.confidence_score}%
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Mule Indicators
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                {report.report.mule_indicators?.map(
                  (item: string, index: number) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-2">
                Recommended Actions
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                {report.report.recommended_actions?.map(
                  (item: string, index: number) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {report.report.fallback && (

              <div className="
                bg-yellow-900/30
                border
                border-yellow-500
                p-4
                rounded-lg
              ">

                <p className="text-yellow-300">
                  AI fallback report generated because
                  Gemini quota was temporarily unavailable.
                </p>

              </div>

            )}

            {/* PDF Download */}

            <div className="pt-6">

              <button
                onClick={downloadReport}
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                📄 Download PDF Report
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}