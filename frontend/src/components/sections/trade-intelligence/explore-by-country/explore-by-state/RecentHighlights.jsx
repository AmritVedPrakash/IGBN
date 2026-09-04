import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function RecentHighlights({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[20px] font-semibold text-[#E9ECEF]">
        RECENT HIGHLIGHTS
      </h2>

      <p className="mt-1 text-[14px] text-[#748795]">
        Key intelligence signals
      </p>

      <div className="mt-4 space-y-3">
        {data.highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
              flex
              gap-3
              rounded-[6px]
              border
              border-[#20394C]
              bg-[#071522]
              p-3
            "
          >
            <CheckCircle2
              size={16}
              className="
                mt-0.5
                shrink-0
                text-[#83B43D]
              "
            />

            <div className="min-w-0 flex-1">
              <p className="text-[14px] leading-5 text-[#C7D0D6]">
                {item.title}
              </p>

              <span className="mt-2 inline-block text-[14px] text-[#D69A2B]">
                Confidence: {item.confidence}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
