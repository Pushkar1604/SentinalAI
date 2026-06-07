import Link from "next/link";

import {
  LayoutDashboard,
  Search,
  BarChart3,
  Network,
  ShieldAlert,
  Bell
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 bg-slate-950 border-r border-slate-800 p-8 flex flex-col h-screen">

      {/* Logo */}

      <div>
        <h1 className="text-cyan-400 text-5xl font-extrabold">
          SentinelAI
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Fraud Intelligence Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="mt-12 flex flex-col gap-6">

        <Link
          href="/dashboard"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/investigation"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <Search size={22} />
          <span>Investigation</span>
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <BarChart3 size={22} />
          <span>Analytics</span>
        </Link>

        <Link
          href="/network"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <Network size={22} />
          <span>Network</span>
        </Link>

        <Link
          href="/predict"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <ShieldAlert size={22} />
          <span>Predict</span>
        </Link>

        <Link
          href="/alerts"
          className="flex items-center gap-4 text-lg hover:text-cyan-400 transition"
        >
          <Bell size={22} />
          <span>Alerts</span>
        </Link>

      </nav>

      {/* Status Card */}

      <div className="mt-auto">

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">

          <p className="text-green-400 font-bold">
            ● System Online
          </p>

          <p className="text-xs text-gray-400 mt-1">
            XGBoost + Gemini Active
          </p>

        </div>

        <div className="mt-4 text-xs text-gray-500">
          SentinelAI v1.0
        </div>

      </div>

    </div>
  );
}