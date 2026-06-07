export default function AlertsPage() {
  const alerts = [
    {
      id: "ALT-001",
      risk: 91,
      level: "Critical",
      account: "Mule Account",
      status: "Active",
    },

    {
      id: "ALT-002",
      risk: 84,
      level: "High",
      account: "Account C",
      status: "Investigating",
    },

    {
      id: "ALT-003",
      risk: 76,
      level: "Medium",
      account: "Account D",
      status: "Monitoring",
    },
  ];

  return (
    <div>

      <h1
        className="
        text-5xl
        font-extrabold
        bg-gradient-to-r
        from-red-400
        to-orange-500
        bg-clip-text
        text-transparent
        mb-8
      "
      >
        Fraud Alert Center
      </h1>

      <div className="space-y-6">

        {alerts.map((alert) => (

          <div
            key={alert.id}
            className="
            bg-slate-900
            border
            border-red-500/20
            rounded-xl
            p-6
            "
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {alert.id}
                </h2>

                <p className="text-gray-400">
                  Linked Account: {alert.account}
                </p>

              </div>

              <div className="text-right">

                <p className="text-red-400 font-bold">
                  Risk Score: {alert.risk}
                </p>

                <p className="text-orange-400">
                  {alert.level}
                </p>

              </div>

            </div>

            <div className="mt-4">

              <span
                className="
                px-4
                py-2
                rounded-full
                bg-red-500/20
                text-red-400
                "
              >
                {alert.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}