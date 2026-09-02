import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function GeopoliticalImpact({ data }) {
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
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-[14px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
          <Globe2
            size={15}
            className="text-[#D69A2B]"
          />

          War & Geopolitical Impact
        </h2>

        <button className="text-[14px] text-[#68859D] hover:text-[#D69A2B]">
          View All →
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {data.geopolitical.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.07,
            }}
            className="
              grid
              grid-cols-[40px_1fr_65px]
              items-center
              gap-3
              border-b
              border-[#102536]
              py-2
              last:border-0
            "
          >
            <div className="flex h-[34px] w-[40px] items-center justify-center rounded-[5px] bg-[#0A1B2A]">
              <Globe2
                size={18}
                className="text-[#547899]"
              />
            </div>

            <div>
              <p className="text-[16px] font-semibold text-[#D5DCE0]">
                {item.title}
              </p>

              <p className="mt-1 text-[15px] leading-[1.4] text-[#7E8E9A]">
                {item.description}
              </p>
            </div>

            <div className="text-right">
              <span className="text-[14px] text-[#758590]">
                Impact on {data.name}:
              </span>

              <p
                className={`
                  mt-1
                  text-[14px]
                  font-semibold
                  ${
                    item.impact === "Positive"
                      ? "text-[#83B43D]"
                      : item.impact === "Moderate"
                        ? "text-[#D69A2B]"
                        : "text-[#83B43D]"
                  }
                `}
              >
                {item.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}