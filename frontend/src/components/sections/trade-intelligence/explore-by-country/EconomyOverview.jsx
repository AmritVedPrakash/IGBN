import React from "react";
import { motion } from "framer-motion";

export default function EconomyOverview({ data }) {
  const width = 650;
  const height = 260;

  const values = data.economy.values;
  const min = Math.min(...values);
  const max = Math.max(...values);

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * 190 - 30;

      return `${x},${y}`;
    })
    .join(" ");

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
        lg:p-5
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold uppercase text-[#E9ECEF] sm:text-[18px]">
          Economy Overview
        </h2>

        <span className="text-[9px] text-[#687985] sm:text-[14px]">
          Source: World Bank
        </span>
      </div>

      <div className="mt-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[230px] w-full"
          preserveAspectRatio="none"
        >
          {[40, 85, 130, 175, 220].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2={width}
              y2={y}
              stroke="#142B3D"
              strokeWidth="1"
            />
          ))}

          <motion.polyline
            points={points}
            fill="none"
            stroke="#7C9EDB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          {values.map((value, index) => {
            const x = (index / (values.length - 1)) * width;
            const y = height - ((value - min) / (max - min || 1)) * 190 - 30;

            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#7C9EDB"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                }}
              />
            );
          })}
        </svg>
      </div>

      <div className="flex justify-between text-[9px] text-[#74838E] sm:text-[14px]">
        {data.economy.labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </motion.div>
  );
}
