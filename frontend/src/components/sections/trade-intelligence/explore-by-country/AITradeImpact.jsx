import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AITradeImpact({ data }) {
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
        lg:p-5
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-[14px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
          AI Trade Impact Insight
          <Sparkles size={15} className="text-[#D69A2B]" />
        </h2>

        <span className="rounded-full border border-[#3D4550] px-2 py-1 text-[14px] text-[#9CA8B1]">
          IGBN AI
        </span>
      </div>

      <p className="mt-3 text-[11px] leading-[1.6] text-[#AAB5BD] sm:text-[14px]">
        AI-powered analysis identifies potential trade opportunities, demand
        signals and market risks based on current global market conditions.
      </p>

      <div className="mt-4 space-y-2.5">
        {data.aiImpact.map((item, index) => (
          <motion.div
            key={item.country}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.07,
            }}
            className="
              grid
              grid-cols-[75px_1fr_50px]
              items-center
              gap-2
              rounded-[5px]
              border
              border-[#102536]
              bg-[#071522]
              px-2.5
              py-2
            "
          >
            <span className="text-[14px] font-semibold text-[#D4DADE]">
              {item.country}
            </span>

            <span className="text-[14px] leading-[1.3] text-[#8999A5]">
              {item.description}
            </span>

            <span
              className={`
                text-right
                text-[14px]
                font-semibold
                ${item.impact === "High" ? "text-[#83B43D]" : "text-[#D69A2B]"}
              `}
            >
              {item.impact}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 border-t border-[#193249] pt-3">
        <span className="text-[14px] text-[#8999A5]">Overall Impact:</span>

        <span className="ml-2 text-[14px] font-semibold text-[#83B43D]">
          Positive for Global Trade
        </span>
      </div>
    </motion.div>
  );
}
