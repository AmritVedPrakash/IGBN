import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function CountryMetrics({ data }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-8">
      {data.metrics.map((item, index) => {
        const Icon =
          item.direction === "up"
            ? TrendingUp
            : item.direction === "down"
              ? TrendingDown
              : Minus;

        const iconColor =
          item.direction === "up"
            ? "text-[#83B43D]"
            : item.direction === "down"
              ? "text-[#D65353]"
              : "text-[#8996A0]";

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
            }}
            whileHover={{ y: -3 }}
            className="
              rounded-[7px]
              border
              border-[#193249]
              bg-[#03111F]
              p-3
              transition-all
              duration-300
              hover:border-[#5E4928]
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-[#778895] sm:text-[15px]">
                {item.label}
              </span>

              <Icon size={15} className={iconColor} />
            </div>

            <p className="mt-2 text-[14px] font-semibold text-[#E7EAED] sm:text-[18px]">
              {item.value}
            </p>

            <p className="mt-1 text-[8px] text-[#6E7E8A] sm:text-[15px]">
              {item.sub}
            </p>

            <p
              className={`
                mt-1
                text-[9px]
                font-semibold
                sm:text-[15px]
                ${iconColor}
              `}
            >
              {item.change}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
