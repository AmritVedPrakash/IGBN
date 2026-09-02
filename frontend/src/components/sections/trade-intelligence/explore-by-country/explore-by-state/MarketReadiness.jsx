import React from "react";
import { motion } from "framer-motion";

export default function MarketReadiness({ data }) {
  const items = [
    {
      label: "Current Demand",
      value: data.marketReadiness.currentDemand,
    },
    {
      label: "Pack Availability",
      value: data.marketReadiness.packAvailability,
    },
    {
      label: "Market Trend",
      value: data.marketReadiness.marketTrend,
    },
    {
      label: "Price Outlook",
      value: data.marketReadiness.priceOutlook,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[16px] font-semibold text-[#E9ECEF]">
        MARKET READINESS
      </h2>

      <p className="mt-1 text-[10px] text-[#748795]">
        {data.name} market conditions
      </p>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="
              border-b
              border-[#142A3B]
              pb-3
              last:border-b-0
            "
          >
            <p className="text-[10px] text-[#748795]">{item.label}</p>

            <p className="mt-1 text-[13px] font-semibold text-[#DCE2E6]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[6px] border border-[#35542D] bg-[#101D14] p-3">
        <p className="text-[10px] text-[#7EAF48]">MARKET SCORE</p>

        <div className="mt-1 flex items-end gap-2">
          <span className="text-[25px] font-semibold text-[#83B43D]">
            {data.economicStats.marketScore}
          </span>

          <span className="pb-1 text-[10px] text-[#6F8372]">/ 100</span>
        </div>
      </div>
    </motion.div>
  );
}
