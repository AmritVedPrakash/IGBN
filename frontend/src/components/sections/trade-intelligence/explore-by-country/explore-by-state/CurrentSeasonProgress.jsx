import React from "react";
import { motion } from "framer-motion";

export default function CurrentSeasonProgress({ data }) {
  const progress = [
    {
      label: "Crop Condition",
      value: data.seasonProgress.condition,
      sub: data.seasonProgress.conditionLabel,
    },
    {
      label: "Harvest Progress",
      value: data.seasonProgress.harvestProgress,
      sub: "Current",
    },
    {
      label: "Crop Development",
      value: data.seasonProgress.cropDevelopment,
      sub: "Current",
    },
    {
      label: "Days Suitable",
      value: data.seasonProgress.daysSuitable,
      sub: "Last Week",
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
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#E9ECEF] sm:text-[20px]">
          CURRENT SEASON PROGRESS
        </h2>

        <span className="text-[11px] text-[#748795]">Latest Week</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {progress.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
            className="
              rounded-[6px]
              border
              border-[#22394C]
              bg-[#071522]
              p-3
            "
          >
            <p className="text-[14px] text-[#7C8E9C]">{item.label}</p>

            <p className="mt-2 text-[20px] font-semibold text-[#DCE2E6]">
              {item.value}
            </p>

            <p className="mt-1 text-[14px] text-[#82A83D]">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
