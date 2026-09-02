import React from "react";

import LiveTradeAlerts from "./LiveTradeAlerts";
import TopExportOpportunities from "./TopExportOpportunities";
import WeeklyTradeReport from "./WeeklyTradeReport";

export default function LiveTradeAlertsSection() {
  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1650px]
          grid-cols-1
          gap-3
          xl:grid-cols-[0.92fr_1.65fr_0.92fr]
        "
      >
        {/* =========================================
            LIVE TRADE ALERTS
        ========================================= */}

        <LiveTradeAlerts />

        {/* =========================================
            TOP EXPORT OPPORTUNITIES
        ========================================= */}

        <TopExportOpportunities />

        {/* =========================================
            WEEKLY TRADE REPORT
        ========================================= */}

        <WeeklyTradeReport />
      </div>
    </section>
  );
}
