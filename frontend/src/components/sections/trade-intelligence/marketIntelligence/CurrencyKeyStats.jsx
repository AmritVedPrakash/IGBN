import React from "react";
import { motion } from "framer-motion";

export default function CurrencyKeyStats({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        lg:p-5
      "
    >
      <h2 className="text-[15px] font-semibold text-[#E9ECEF] sm:text-[17px]">
        KEY {data.code} STATS
      </h2>

      <div className="mt-4 space-y-2">
        {data.keyStats.map(([label, value]) => (
          <div
            key={label}
            className="
              flex
              justify-between
              gap-4
              border-b border-[#102435]
              pb-1
              text-[11px]
              sm:text-[14px]
            "
          >
            <span className="text-[#AAB4BC]">{label}</span>

            <span className="text-right text-[#DCE1E5]">{value}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-right text-[15px] text-[#667783]">
        Source: Global Market Intelligence
      </p>
    </motion.div>
  );
}
