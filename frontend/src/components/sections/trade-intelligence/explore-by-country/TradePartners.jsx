import React from "react";
import { motion } from "framer-motion";

function PartnerList({ title, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[14px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
        {title}
      </h2>

      <div className="mt-4 space-y-2.5">
        {data.map(([country, amount], index) => (
          <div key={country} className="flex items-center gap-2">
            <span className="w-[12px] text-[16px] text-[#657783]">
              {index + 1}
            </span>

            <span className="w-[105px] shrink-0 truncate text-[10px] text-[#CBD2D7] sm:text-[16px]">
              {country}
            </span>

            <div className="h-[9px] flex-1 overflow-hidden rounded-full bg-[#0A1D2C]">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${100 - index * 7}%`,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                className="h-full rounded-full bg-[#284D7B]"
              />
            </div>

            <span className="w-[45px] text-right text-[14px] font-semibold text-[#AEB9C1]">
              {amount}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TradePartners({ data }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <PartnerList title="Top Import Partners" data={data.imports} />

      <PartnerList title="Top Export Partners" data={data.exports} />
    </div>
  );
}
