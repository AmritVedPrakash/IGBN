import React from "react";
import { motion } from "framer-motion";

function TinyChart({ data, direction }) {
  const width = 160;
  const height = 35;

  const min = Math.min(...data);
  const max = Math.max(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;

      const y = height - ((value - min) / (max - min || 1)) * 25 - 4;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-[30px] w-[125px] sm:w-[155px]"
      preserveAspectRatio="none"
    >
      <motion.polyline
        points={points}
        fill="none"
        stroke={direction === "down" ? "#D65353" : "#83B43D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 1.1,
        }}
      />
    </svg>
  );
}

export default function CommodityPerformance({ data }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
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
        {data.shortName} PRICE PERFORMANCE
      </h2>

      <div className="mt-4 space-y-3">
        {data.performance.map((item) => (
          <div
            key={item.label}
            className="
              grid
              grid-cols-[70px_75px_1fr]
              items-center
              gap-2
              border-b
              border-[#102536]
              pb-4
              text-[15px]
              sm:grid-cols-[80px_85px_1fr]
              sm:text-[16px]
            "
          >
            <span className="text-[#C4CCD2]">{item.label}</span>

            <span
              className={`
                font-semibold
                ${
                  item.direction === "down"
                    ? "text-[#D65353]"
                    : "text-[#83B43D]"
                }
              `}
            >
              {item.value}
            </span>

            <div className="flex justify-end">
              <TinyChart data={item.data} direction={item.direction} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
