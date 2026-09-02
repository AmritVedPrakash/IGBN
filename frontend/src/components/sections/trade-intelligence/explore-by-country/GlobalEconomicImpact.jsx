import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function GlobalEconomicImpact({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
          Global Event & Economic Impact Analysis
        </h2>

        <button className="text-[14px] text-[#68859D] hover:text-[#D69A2B]">
          View All →
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {data.globalEvents.map((item, index) => {
          const positive = item.impact === "Positive";

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                flex
                gap-3
                border-b
                border-[#102536]
                pb-3
                last:border-0
              "
            >
              <div className="flex h-[48px] w-[60px] shrink-0 items-center justify-center rounded-[5px] bg-[#0A1A28]">
                {positive ? (
                  <ArrowUpRight size={22} className="text-[#83B43D]" />
                ) : (
                  <ArrowDownRight size={22} className="text-[#D69A2B]" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-semibold text-[#D9DEE2]">
                  {item.title}
                </p>

                <p className="mt-1 text-[14px] leading-[1.5] text-[#82919B]">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-[14px] text-[#697985]">
                  Overall Impact
                </span>

                <p
                  className={`
                    mt-1
                    text-[15px]
                    font-semibold
                    ${positive ? "text-[#83B43D]" : "text-[#D69A2B]"}
                  `}
                >
                  {item.impact}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
