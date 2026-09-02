import React, { useState } from "react";
import { motion } from "framer-motion";

// =====================================================
// MINI LINE CHART
// =====================================================

function MiniLineChart({ data }) {
  const width = 560;
  const height = 155;

  const safeData =
    Array.isArray(data) && data.length > 1 ? data : [1, 2, 3, 4, 5];

  const min = Math.min(...safeData);
  const max = Math.max(...safeData);

  const points = safeData
    .map((value, index) => {
      const x = (index / (safeData.length - 1)) * width;

      const normalized = (value - min) / (max - min || 1);

      const y = height - normalized * 105 - 18;

      return `${x},${y}`;
    })
    .join(" ");

  // Area points
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="
          h-[155px]
          w-full
          sm:h-[170px]
          lg:h-[200px]
        "
        preserveAspectRatio="none"
      >
        {/* Bottom guide line */}

        <line
          x1="0"
          y1="132"
          x2={width}
          y2="132"
          stroke="#20384A"
          strokeWidth="1"
        />

        {/* Soft chart area */}

        <motion.polygon
          points={areaPoints}
          fill="#8FB63E"
          opacity="0.07"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 1.2 }}
        />

        {/* Main animated line */}

        <motion.polyline
          points={points}
          fill="none"
          stroke="#8FB63E"
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
            duration: 1.8,
            ease: "easeInOut",
          }}
        />

        {/* Last point */}

        {(() => {
          const lastValue = safeData[safeData.length - 1];

          const normalized = (lastValue - min) / (max - min || 1);

          const y = height - normalized * 105 - 18;

          return (
            <motion.circle
              cx={width}
              cy={y}
              r="4"
              fill="#9BC94A"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 0.4,
              }}
            />
          );
        })()}
      </svg>
    </div>
  );
}

// =====================================================
// MAIN CURRENCY OVERVIEW
// =====================================================

export default function CurrencyOverview({ data }) {
  const [activeRange, setActiveRange] = useState("1D");

  if (!data) return null;

  const positive = data.direction === "up";

  const ranges = ["1D", "7D", "30D", "3M", "1Y", "5Y"];

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
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,0.25)]
        sm:p-5
        lg:p-6
      "
    >
      {/* =================================================
          SUBTLE GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[10%]
          h-[180px]
          w-[280px]
          rounded-full
          bg-[#8FB63E]/[0.025]
          blur-[70px]
        "
      />

      {/* =================================================
          TITLE
      ================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          x: -15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          text-[17px]
          font-semibold
          uppercase
          tracking-[0.01em]
          text-[#E9ECEF]
          sm:text-[19px]
          lg:text-[20px]
        "
      >
        LIVE {data.indexName?.toUpperCase() || "USD INDEX (DXY)"}
      </motion.h2>

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          relative
          mt-5
          grid
          grid-cols-1
          gap-6
          lg:grid-cols-[260px_1fr]
          lg:items-end
          lg:gap-8
          xl:grid-cols-[275px_1fr]
        "
      >
        {/* =================================================
            LEFT INFORMATION
        ================================================== */}

        <div className="min-w-0">
          {/* VALUE */}

          <div className="flex items-end gap-3">
            <motion.span
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                text-[40px]
                font-medium
                leading-none
                tracking-[-0.03em]
                text-[#F3F5F6]
                sm:text-[30px]
                lg:text-[30px]
              "
            >
              {data.indexValue}
            </motion.span>

            <span
              className="
                pb-[5px]
                text-[13px]
                font-medium
                text-[#AAB4BC]
                sm:text-[14px]
                lg:text-[18px]
              "
            >
              {data.indexUnit}
            </span>
          </div>

          {/* CHANGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className={`
              mt-5
              flex
              items-center
              gap-2
              text-[20px]
              font-semibold
              sm:text-[22px]
              ${positive ? "text-[#8FBE43]" : "text-[#D65353]"}
            `}
          >
            <span>{data.currentChange}</span>

            <span>{data.currentPercentage}</span>

            <span className="text-[25px]">{positive ? "↑" : "↓"}</span>
          </motion.div>

          {/* DETAILS */}

          <div
            className="
              mt-5
              space-y-3
              text-[15px]
              text-[#9BA7B1]
              sm:text-[14px]
              lg:text-[16px]
            "
          >
            <p className="flex flex-wrap gap-x-2">
              <span>Prev. Close:</span>

              <span className="text-[#DDE2E5]">{data.previousClose}</span>
            </p>

            <p className="flex flex-wrap gap-x-2">
              <span>Open:</span>

              <span className="text-[#DDE2E5]">{data.open}</span>
            </p>

            <p className="flex flex-wrap gap-x-2">
              <span>Day Range:</span>

              <span className="text-[#DDE2E5]">{data.dayRange}</span>
            </p>
          </div>
        </div>

        {/* =================================================
            RIGHT CHART
        ================================================== */}

        <div className="min-w-0">
          <div className="relative">
            {/* Chart */}

            <MiniLineChart data={data.historical} />
          </div>

          {/* =================================================
              RANGE BUTTONS
          ================================================== */}

          <div
            className="
              mt-1
              flex
              flex-wrap
              items-center
              justify-start
              gap-2
              sm:justify-end
            "
          >
            {ranges.map((range) => {
              const active = activeRange === range;

              return (
                <motion.button
                  key={range}
                  type="button"
                  whileHover={{
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() => setActiveRange(range)}
                  className={`
                    min-w-[43px]
                    rounded-[4px]
                    border
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    transition-all
                    duration-200
                    sm:min-w-[48px]
                    sm:text-[12px]
                    ${
                      active
                        ? `
                          border-[#1E4161]
                          bg-[#102E4A]
                          text-[#E2E7EA]
                          shadow-[0_3px_10px_rgba(0,0,0,0.2)]
                        `
                        : `
                          border-[#102536]
                          bg-[#071522]
                          text-[#8996A0]
                          hover:border-[#29435A]
                          hover:text-[#D8DEE2]
                        `
                    }
                  `}
                >
                  {range}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
