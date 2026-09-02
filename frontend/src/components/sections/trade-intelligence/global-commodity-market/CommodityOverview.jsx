import React from "react";
import { motion } from "framer-motion";

function MiniChart({ data, direction }) {
  const width = 500;
  const height = 130;

  const safeData =
    Array.isArray(data) && data.length > 1 ? data : [20, 25, 22, 28, 30, 35];

  const min = Math.min(...safeData);
  const max = Math.max(...safeData);

  const points = safeData
    .map((value, index) => {
      const x = (index / (safeData.length - 1)) * width;

      const y = height - ((value - min) / (max - min || 1)) * 90 - 15;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-[145px] w-full"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="115"
        x2={width}
        y2="115"
        stroke="#20384A"
        strokeWidth="1"
      />

      <motion.polyline
        points={points}
        fill="none"
        stroke={direction === "down" ? "#D65353" : "#83B43D"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

export default function CommodityOverview({ data }) {
  const positive = data.direction === "up";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[9px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_8px_30px_rgba(0,0,0,0.2)]
        sm:p-5
        lg:p-6
      "
    >
      <h2 className="text-[18px] font-semibold text-[#E9ECEF] sm:text-[19px]">
        {data.overview.title}
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[210px_1fr]">
        <div>
          <div className="flex items-end gap-2">
            <span className="text-[34px] font-semibold leading-none text-[#F3F5F6] sm:text-[39px]">
              {data.overview.value}
            </span>

            <span className="pb-1 text-[16px] text-[#AAB4BC]">
              {data.overview.unit}
            </span>
          </div>

          <div
            className={`
              mt-3
              text-[20px]
              font-semibold
              ${positive ? "text-[#88B63D]" : "text-[#D65353]"}
            `}
          >
            {data.overview.change} {positive ? "↑" : "↓"}
          </div>

          <div className="mt-5 space-y-3 text-[13px] text-[#AAB4BD] sm:text-[16px]">
            <p>
              Prev. Close:
              <span className="ml-2 text-[#DDE2E5]">
                {data.overview.previousClose}
              </span>
            </p>

            <p>
              Open:
              <span className="ml-2 text-[#DDE2E5]">{data.overview.open}</span>
            </p>

            <p>
              Day Range:
              <span className="ml-2 text-[#DDE2E5]">
                {data.overview.dayRange}
              </span>
            </p>
          </div>
        </div>

        <div>
          <MiniChart
            data={data.overview.historical}
            direction={data.direction}
          />

          <div className="mt-1 flex flex-wrap gap-2">
            {["1D", "7D", "30D", "3M", "1Y", "5Y"].map((item, index) => (
              <button
                key={item}
                type="button"
                className={`
                    rounded-[4px]
                    border
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    ${
                      index === 0
                        ? "border-[#29415A] bg-[#102A42] text-[#D9E0E5]"
                        : "border-[#13283A] bg-[#071522] text-[#8996A0]"
                    }
                  `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
