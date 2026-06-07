import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center max-w-4xl">

        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            AI-Powered Fraud Intelligence Platform
          </span>
        </div>

        <h1
          className="
          text-7xl
          md:text-8xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          SentinelAI
        </h1>

        <p className="text-2xl text-gray-300 mt-8">
          Detect Fraud. Uncover Mule Networks.
          Generate AI Investigations.
        </p>

        <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-8">
          SentinelAI combines Machine Learning,
          Graph Intelligence, Risk Scoring,
          and Generative AI to identify
          fraudulent transactions and hidden
          mule account networks in real time.
        </p>

        <div className="flex justify-center gap-6 mt-12">

          <Link
            href="/dashboard"
            className="
            bg-cyan-500
            hover:bg-cyan-600
            px-8
            py-4
            rounded-xl
            font-bold
            text-lg
            transition
            "
          >
            Launch Dashboard
          </Link>

          <Link
            href="/predict"
            className="
            border
            border-cyan-500
            text-cyan-400
            hover:bg-cyan-500/10
            px-8
            py-4
            rounded-xl
            font-bold
            text-lg
            transition
            "
          >
            Try Prediction
          </Link>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-3xl font-bold">
              99.94%
            </h3>

            <p className="text-gray-400 mt-2">
              Accuracy
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-green-400 text-3xl font-bold">
              9082
            </h3>

            <p className="text-gray-400 mt-2">
              Transactions
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-red-400 text-3xl font-bold">
              97%
            </h3>

            <p className="text-gray-400 mt-2">
              Fraud Detection
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-purple-400 text-3xl font-bold">
              AI
            </h3>

            <p className="text-gray-400 mt-2">
              Investigation Engine
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}