import React from "react";
import { motion } from "framer-motion";

export default function CommodityKeyStats({ data }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="
        rounded-[9px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        sm:p-5
      "
    >
      <h2 className="text-[18px] font-semibold text-[#E9ECEF] sm:text-[20px]">
        KEY {data.shortName} STATS
      </h2>

      <div className="mt-4 divide-y divide-[#102536]">
        {data.keyStats.map(([label, value]) => (
          <div
            key={label}
            className="
              flex
              items-center
              justify-between
              gap-4
              py-2.5
              text-[12px]
              sm:text-[16px]
            "
          >
            <span className="text-[#8E9AA4]">{label}</span>

            <span className="text-right font-medium text-[#DCE2E6]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
