"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { getFeatureImportance } from "../lib/analytics";

export default function AnalyticsPage() {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {

    getFeatureImportance()
      .then((res) => {

        const top10 = res.slice(0, 10);

        setData(top10);

      })
      .catch(console.error);

  }, []);

  return (
    <div>

      {/* Header */}

      <h1 className="
        text-5xl
        font-extrabold
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        bg-clip-text
        text-transparent
        mb-8
      ">
        Fraud Intelligence Analytics
      </h1>

      {/* KPI Overview */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="
          bg-slate-900
          border border-cyan-500/20
          p-6
          rounded-xl
        ">
          <p className="text-gray-400">
            Model Accuracy
          </p>

          <h2 className="text-3xl font-bold text-cyan-400">
            99.94%
          </h2>
        </div>

        <div className="
          bg-slate-900
          border border-emerald-500/20
          p-6
          rounded-xl
        ">
          <p className="text-gray-400">
            Precision
          </p>

          <h2 className="text-3xl font-bold text-emerald-400">
            100%
          </h2>
        </div>

        <div className="
          bg-slate-900
          border border-amber-500/20
          p-6
          rounded-xl
        ">
          <p className="text-gray-400">
            Recall
          </p>

          <h2 className="text-3xl font-bold text-amber-400">
            95.47%
          </h2>
        </div>

        <div className="
          bg-slate-900
          border border-violet-500/20
          p-6
          rounded-xl
        ">
          <p className="text-gray-400">
            F1 Score
          </p>

          <h2 className="text-3xl font-bold text-violet-400">
            97.65%
          </h2>
        </div>

      </div>

      {/* Threat Insights Banner */}

      <div className="
        bg-cyan-500/10
        border border-cyan-500
        rounded-xl
        p-4
        mb-8
      ">
        <h2 className="font-bold text-cyan-400">
          📊 Explainable AI Insights
        </h2>

        <p className="text-gray-300 mt-2">
          Feature importance scores reveal the strongest
          fraud indicators identified by the XGBoost model.
          These variables contribute most to mule account
          detection and suspicious transaction classification.
        </p>
      </div>

      {/* Chart */}

      <div className="
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        border
        border-cyan-500/20
        rounded-2xl
        p-8
        shadow-lg
        shadow-cyan-500/10
      ">

        <h2 className="text-2xl font-bold mb-6">
          Top Fraud Indicators (XGBoost)
        </h2>

        <ResponsiveContainer
          width="100%"
          height={500}
        >

          <BarChart data={data}>

            <XAxis
              dataKey="feature"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={120}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="importance"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}