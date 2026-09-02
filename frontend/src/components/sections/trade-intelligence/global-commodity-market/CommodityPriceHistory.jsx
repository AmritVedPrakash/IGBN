import React from "react";
import { motion } from "framer-motion";

export default function CommodityPriceHistory({ data }) {
  const max = Math.max(...data.priceHistory.values);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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
      <h2 className="text-[17px] font-semibold text-[#E9ECEF] sm:text-[20px]">
        PRICE HISTORY ({data.unit})
      </h2>

      <div className="mt-5 flex h-[220px] items-end justify-between gap-2">
        {data.priceHistory.values.map((value, index) => {
          const height = (value / max) * 150;

          return (
            <div
              key={data.priceHistory.labels[index]}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              <span className="mb-2 text-[10px] font-semibold text-[#C9D0D5] sm:text-[15px]">
                {value}
              </span>

              <motion.div
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
                className="
                    w-[55%]
                    min-w-[18px]
                    rounded-t-[2px]
                    bg-[#24466B]
                  "
              />

              <span className="mt-3 text-center text-[9px] text-[#8996A0] sm:text-[15px]">
                {data.priceHistory.labels[index]}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-right text-[10px] text-[#667783]">
        Source: Market Data
      </p>
    </motion.div>
  );
}
