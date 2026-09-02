import React from "react";
import { motion } from "framer-motion";

export default function CommoditySupplyDemand({
  data,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[9px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        sm:p-5
      "
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[17px] font-semibold text-[#E9ECEF] sm:text-[20px]">
          SUPPLY & DEMAND (2026/27)
        </h2>

        <span className="text-[15x] text-[#687985]">
          Source: Market Data
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-[#193249] text-[16px] text-[#7F8C97]">
              <th className="pb-3">Metric</th>
              <th className="pb-3">2025/26</th>
              <th className="pb-3">2026/27</th>
              <th className="pb-3">YoY Change</th>
            </tr>
          </thead>

          <tbody>
            {data.supplyDemand.map(
              ([metric, oldValue, newValue, change]) => {
                const negative =
                  change.startsWith("-");

                return (
                  <tr
                    key={metric}
                    className="border-b border-[#102536] text-[12px] sm:text-[16px]"
                  >
                    <td className="py-6 text-[#C6CED4]">
                      {metric}
                    </td>

                    <td className="py-5 text-[#AEB8C0]">
                      {oldValue}
                    </td>

                    <td className="py-5 text-[#DCE2E6]">
                      {newValue}
                    </td>

                    <td
                      className={`py-3 font-semibold ${
                        negative
                          ? "text-[#D65353]"
                          : "text-[#83B43D]"
                      }`}
                    >
                      {change}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}