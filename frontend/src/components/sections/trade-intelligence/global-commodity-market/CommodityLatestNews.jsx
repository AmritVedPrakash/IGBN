import React from "react";
import { motion } from "framer-motion";

export default function CommodityLatestNews({
  data,
}) {
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
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-semibold text-[#E9ECEF] sm:text-[20px]">
          LATEST NEWS
        </h2>

        <button className="text-[15px] font-semibold text-[#7190AA] hover:text-[#D69A2B]">
          View All News →
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {data.news.map((news, index) => (
          <motion.div
            key={news.title}
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
              rounded-[6px]
              border
              border-[#102536]
              bg-[#061522]
              p-3
            "
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-[3px] bg-[#17301B] px-2 py-1 text-[14px] font-semibold text-[#83B43D]">
                {news.category}
              </span>

              <span className="text-[14px] text-[#667783]">
                {news.time}
              </span>
            </div>

            <p className="mt-2 text-[12px] font-medium leading-5 text-[#D5DCE0] sm:text-[15px]">
              {news.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}