"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 350, y: 0 },
    data: { label: "🟢 Victim Account" },
    style: {
      background: "#22c55e",
      color: "white",
      border: "2px solid #4ade80",
      fontWeight: "bold",
      padding: 10,
    },
  },

  {
    id: "2",
    position: { x: 350, y: 150 },
    data: { label: "🔴 Mule Account" },
    style: {
      background: "#ef4444",
      color: "white",
      border: "2px solid #f87171",
      fontWeight: "bold",
      padding: 10,
    },
  },

  {
    id: "3",
    position: { x: 100, y: 330 },
    data: { label: "🟠 Account B" },
    style: {
      background: "#f97316",
      color: "white",
      fontWeight: "bold",
      padding: 10,
    },
  },

  {
    id: "4",
    position: { x: 350, y: 330 },
    data: { label: "🟠 Account C" },
    style: {
      background: "#f97316",
      color: "white",
      fontWeight: "bold",
      padding: 10,
    },
  },

  {
    id: "5",
    position: { x: 600, y: 330 },
    data: { label: "🟠 Account D" },
    style: {
      background: "#f97316",
      color: "white",
      fontWeight: "bold",
      padding: 10,
    },
  },

  {
    id: "6",
    position: { x: 350, y: 550 },
    data: { label: "🟣 Offshore Account" },
    style: {
      background: "#7c3aed",
      color: "white",
      border: "2px solid #a78bfa",
      fontWeight: "bold",
      padding: 10,
    },
  },
];

const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    animated: true,
    label: "₹50,000",
    style: { stroke: "#ef4444" },
  },

  {
    id: "e2",
    source: "2",
    target: "3",
    animated: true,
    label: "₹15,000",
    style: { stroke: "#f97316" },
  },

  {
    id: "e3",
    source: "2",
    target: "4",
    animated: true,
    label: "₹20,000",
    style: { stroke: "#f97316" },
  },

  {
    id: "e4",
    source: "2",
    target: "5",
    animated: true,
    label: "₹15,000",
    style: { stroke: "#f97316" },
  },

  {
    id: "e5",
    source: "4",
    target: "6",
    animated: true,
    label: "International Transfer",
    style: { stroke: "#7c3aed" },
  },
];

export default function NetworkPage() {
  return (
    <div>

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
        Fraud Network Intelligence
      </h1>

      <div
        className="
        bg-red-500/10
        border
        border-red-500
        rounded-xl
        p-4
        mb-8
      "
      >
        <h2 className="text-red-400 font-bold">
          🚨 Suspicious Mule Account Network Detected
        </h2>

        <p className="text-gray-300 mt-2">
          Graph Intelligence has identified a potential
          laundering path involving multiple beneficiary
          accounts and an offshore transfer destination.
        </p>
      </div>

      <div
        className="
        h-[80vh]
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        rounded-2xl
        border
        border-cyan-500/20
      "
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <MiniMap />
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}