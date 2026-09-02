import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CommodityPriceChart({ data }) {
  const [range, setRange] = useState("1Y");

  const width = 1000;
  const height = 340;

  const chartData = data.overview.historical;

  const min = Math.min(...chartData);
  const max = Math.max(...chartData);

  const points = chartData
    .map((value, index) => {
      const x = (index / (chartData.length - 1)) * width;

      const y = height - ((value - min) / (max - min || 1)) * 245 - 30;

      return `${x},${y}`;
    })
    .join(" ");

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
        duration: 0.55,
      }}
      className="
        rounded-[9px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        sm:p-5
        lg:p-6
      "
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[17px] font-semibold text-[#E9ECEF] sm:text-[20px]">
          PRICE CHART – {data.name.toUpperCase()} ({data.unit})
        </h2>

        <span className="text-[16px] text-[#647681]">Source: Market Data</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["1M", "3M", "6M", "1Y", "2Y", "5Y", "All"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRange(item)}
            className={`
                rounded-[4px]
                border
                px-3
                py-1.5
                text-[15px]
                font-semibold
                ${
                  range === item
                    ? "border-[#29415A] bg-[#17314A] text-[#E1E6EA]"
                    : "border-[#13283A] bg-[#071522] text-[#778692]"
                }
              `}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto">
        <div className="min-w-[700px]">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-[300px] w-full sm:h-[340px]"
            preserveAspectRatio="none"
          >
            {[50, 110, 170, 230, 290].map((y) => (
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
              stroke={data.direction === "down" ? "#D65353" : "#86AE3C"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>

      <div className="mt-1 flex justify-between text-[10px] text-[#697783] sm:text-[15px]">
        <span>Jun '25</span>
        <span>Aug '25</span>
        <span>Oct '25</span>
        <span>Dec '25</span>
        <span>Feb '26</span>
        <span>Apr '26</span>
        <span>Aug '26</span>
      </div>
    </motion.div>
  );
}
