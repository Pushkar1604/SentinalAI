"use client";

import { useEffect, useState } from "react";
import KPICard from "../components/KPICard";
import { getModelMetrics } from "../lib/metrics";

export default function Dashboard() {

  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {

    getModelMetrics()
      .then(setMetrics)
      .catch(console.error);

  }, []);

  if (!metrics) {
    return <div>Loading...</div>;
  }


return (
  <div>

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
      SentinelAI Command Center
    </h1>

    {/* Threat Banner */}

    <div className="
      mb-8
      bg-red-500/10
      border
      border-red-500
      rounded-xl
      p-4
    ">
      <h2 className="text-red-400 font-bold text-lg">
        🔴 Critical Threat Monitoring Active
      </h2>

      <p className="text-gray-300 mt-2">
        Real-time fraud intelligence, mule account detection,
        graph analytics and AI-powered investigation reporting.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">

        <KPICard
          title="Accuracy"
          value={`${(
            metrics.accuracy * 100
          ).toFixed(2)}%`}
        />

        <KPICard
          title="Precision"
          value={`${(
            metrics.precision * 100
          ).toFixed(2)}%`}
        />

        <KPICard
          title="Recall"
          value={`${(
            metrics.recall * 100
          ).toFixed(2)}%`}
        />

        <KPICard
          title="F1 Score"
          value={`${(
            metrics.f1 * 100
          ).toFixed(2)}%`}
        />

      </div>

    </div>
  );
}