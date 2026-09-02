import React from "react";
import { motion } from "framer-motion";

// =====================================================
// MINI PERFORMANCE CHART
// =====================================================

function PerformanceChart({ data, direction }) {
  const width = 170;
  const height = 38;

  const safeData =
    Array.isArray(data) && data.length > 1
      ? data
      : [20, 22, 21, 24, 23, 26, 25, 28, 27, 30];

  const min = Math.min(...safeData);
  const max = Math.max(...safeData);

  const points = safeData
    .map((value, index) => {
      const x = (index / (safeData.length - 1)) * width;

      const normalized = (value - min) / (max - min || 1);

      const y = height - normalized * (height - 8) - 4;

      return `${x},${y}`;
    })
    .join(" ");

  const lineColor = direction === "up" ? "#86AE3C" : "#D65353";

  return (
    <div className="relative h-[38px] w-[125px] sm:w-[150px] lg:w-[175px]">
      {/* Soft glow */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-full
          blur-[18px]
          ${direction === "up" ? "bg-[#86AE3C]/[0.07]" : "bg-[#D65353]/[0.06]"}
        `}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="relative h-full w-full"
        preserveAspectRatio="none"
      >
        <motion.polyline
          points={points}
          fill="none"
          stroke={lineColor}
          strokeWidth="2.2"
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
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Moving highlight */}

        <motion.circle
          r="2.5"
          fill={lineColor}
          initial={{
            cx: 0,
            cy: 25,
            opacity: 0,
          }}
          animate={{
            cx: width,
            cy: height / 2,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// =====================================================
// PERFORMANCE ROW
// =====================================================

function PerformanceRow({ item, index }) {
  const positive = item.direction === "up";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
      }}
      whileHover={{
        x: 3,
      }}
      className="
        group
        grid
        grid-cols-[1fr_auto_auto]
        items-center
        gap-3
        rounded-[5px]
        px-2
        py-1.5
        transition-all
        duration-200
        hover:bg-[#071825]
        sm:gap-4
        sm:px-2.5
        sm:py-2
      "
    >
      {/* ================================================
          LABEL
      ================================================= */}

      <span
        className="
          whitespace-nowrap
          text-[13px]
          font-medium
          text-[#D0D6DB]
          sm:text-[14px]
          lg:text-[15px]
        "
      >
        {item.label}
      </span>

      {/* ================================================
          VALUE
      ================================================= */}

      <span
        className={`
          min-w-[65px]
          text-right
          text-[14px]
          font-semibold
          sm:min-w-[72px]
          sm:text-[15px]
          lg:min-w-[80px]
          lg:text-[16px]
          ${positive ? "text-[#83B43D]" : "text-[#D65353]"}
        `}
      >
        {item.value}
      </span>

      {/* ================================================
          MINI CHART
      ================================================= */}

      <div className="hidden sm:block">
        <PerformanceChart data={item.trend} direction={item.direction} />
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function CurrencyPerformance({ data }) {
  if (!data) return null;

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
        shadow-[0_10px_30px_rgba(0,0,0,0.22)]
        sm:p-5
        lg:p-6
      "
    >
      {/* ================================================
          SUBTLE GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[80px]
          -top-[80px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#8FB63E]/[0.025]
          blur-[65px]
        "
      />

      {/* ================================================
          HEADING
      ================================================= */}

      <motion.h2
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
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
        {data.code} PERFORMANCE
      </motion.h2>

      {/* ================================================
          PERFORMANCE LIST
      ================================================= */}

      <div className="relative mt-5 space-y-1.5">
        {data.performance?.map((item, index) => (
          <PerformanceRow
            key={`${item.label}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>

      {/* ================================================
          MOBILE MINI CHARTS
          Shown below value on mobile
      ================================================= */}

      <div className="mt-3 space-y-1 sm:hidden">
        {data.performance?.map((item, index) => (
          <div key={`mobile-chart-${index}`} className="flex justify-end pr-1">
            <PerformanceChart data={item.trend} direction={item.direction} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
