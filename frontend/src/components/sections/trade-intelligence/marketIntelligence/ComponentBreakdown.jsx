import React from "react";
import { motion } from "framer-motion";

export default function ComponentBreakdown({ data }) {
  const colors = [
    "#80AFC9",
    "#D69A2B",
    "#86AE3C",
    "#D65353",
    "#7C65B7",
    "#5C8C96",
  ];

  let current = 0;

  const gradient = data.components
    .map(([_, value], index) => {
      const start = current;
      current += value;

      return `${colors[index]} ${start}% ${current}%`;
    })
    .join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        lg:p-5
      "
    >
      <h2 className="text-[15px] font-semibold text-[#E9ECEF] sm:text-[22px]">
        {data.code} INDEX – COMPONENT BREAKDOWN
      </h2>

      <div className="mt-5 flex items-center gap-5">
        <motion.div
          initial={{ rotate: -90, scale: 0.8 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[130px] w-[130px] shrink-0 rounded-full"
          style={{
            background: `conic-gradient(${gradient})`,
          }}
        >
          <div
            className="
            absolute left-1/2 top-1/2
            h-[72px] w-[72px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-[#03111F]
            flex items-center justify-center
            text-[12px] font-semibold text-[#D9DEE2]
          "
          >
            {data.code}
          </div>
        </motion.div>

        <div className="flex-1 space-y-5">
          {data.components.map(([label, value], index) => (
            <div
              key={label}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-[8px] w-[8px] rounded-full"
                  style={{
                    backgroundColor: colors[index],
                  }}
                />

                <span className="text-[18px] text-[#CDD4D9]">{label}</span>
              </div>

              <span className="text-[18px] font-semibold text-[#DDE2E6]">
                {value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
