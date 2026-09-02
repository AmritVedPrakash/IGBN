import React from "react";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";

export default function LatestBusinessNews({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
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
        <h2 className="flex items-center gap-2 text-[14px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
          <Newspaper size={15} className="text-[#D69A2B]" />
          Latest Business & Trade News
        </h2>

        <button className="flex items-center gap-1 text-[14px] font-semibold text-[#68859D] hover:text-[#D69A2B]">
          View All News
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {data.news.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.07,
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
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[5px] border border-[#273D50] bg-[#081A29]">
              <Newspaper size={18} className="text-[#506D83]" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[8px] font-semibold text-[#6F9C53] sm:text-[16px]">
                  {item.category}
                </span>

                <span className="shrink-0 text-[15px] text-[#667682]">
                  {item.time}
                </span>
              </div>

              <p className="mt-1 text-[10px] font-semibold text-[#D6DCE0] sm:text-[14px]">
                {item.title}
              </p>

              <p className="mt-1 text-[14px] leading-[1.4] text-[#82919C]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
