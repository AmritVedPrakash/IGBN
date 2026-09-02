import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function CurrencyHistoricalChart({ data }) {
  const [activeRange, setActiveRange] = useState("1Y");

  const width = 1000;
  const height = 360;

  // =====================================================
  // SAFE CHART DATA
  // =====================================================

  const chartData = useMemo(() => {
    // If API later provides:
    // data.ranges["1Y"]
    // it will automatically use that data.

    if (
      data?.ranges &&
      Array.isArray(data.ranges?.[activeRange]) &&
      data.ranges[activeRange].length > 1
    ) {
      return data.ranges[activeRange];
    }

    if (Array.isArray(data?.data) && data.data.length > 1) {
      return data.data;
    }

    if (Array.isArray(data?.historical) && data.historical.length > 1) {
      return data.historical;
    }

    // Fallback dummy data
    return [
      104.5, 106.2, 105.8, 107.1, 106.4, 105.2, 104.8, 106.1, 105.7, 107.3,
      106.8, 104.9, 105.5, 104.2, 103.8, 101.2, 100.8, 102.1, 101.5, 100.6,
      101.8, 100.4, 103.2, 104.8, 105.5, 106.2, 105.8, 107.1, 109.4, 108.2,
      110.1, 109.3, 111.5, 112.4, 113.7, 112.8, 114.2, 113.4, 112.2, 111.8,
      112.7, 111.4, 110.8, 109.6, 108.2, 107.5, 108.1, 106.8, 107.4, 105.9,
      104.7, 102.2, 103.8, 102.9, 104.1,
    ];
  }, [data, activeRange]);

  // =====================================================
  // MIN / MAX
  // =====================================================

  const minValue = Math.floor(Math.min(...chartData) - 1);
  const maxValue = Math.ceil(Math.max(...chartData) + 1);

  // =====================================================
  // CHART POINTS
  // =====================================================

  const chartTop = 20;
  const chartBottom = 285;
  const chartHeight = chartBottom - chartTop;

  const points = chartData
    .map((value, index) => {
      const x =
        chartData.length === 1
          ? width / 2
          : (index / (chartData.length - 1)) * width;

      const normalized = (value - minValue) / (maxValue - minValue || 1);

      const y = chartBottom - normalized * chartHeight;

      return `${x},${y}`;
    })
    .join(" ");

  // =====================================================
  // AREA PATH
  // =====================================================

  const areaPath = `
    M 0 ${chartBottom}
    L ${points
      .split(" ")
      .map((point) => point)
      .join(" L ")}
    L ${width} ${chartBottom}
    Z
  `;

  // =====================================================
  // Y AXIS LABELS
  // =====================================================

  const yLabels = Array.from({ length: 6 }, (_, index) => {
    const value = maxValue - ((maxValue - minValue) / 5) * index;

    return Math.round(value * 100) / 100;
  });

  // =====================================================
  // DATE LABELS
  // =====================================================

  const dateLabels = [
    "May '24",
    "Jun '24",
    "Jul '24",
    "Aug '24",
    "Sep '24",
    "Oct '24",
    "Nov '24",
    "Dec '24",
    "Jan '25",
    "Feb '25",
    "Mar '25",
    "Apr '25",
    "May '25",
  ];

  // =====================================================
  // RANGE BUTTONS
  // =====================================================

  const ranges = ["1M", "3M", "6M", "1Y", "2Y", "5Y", "10Y", "All"];

  // =====================================================
  // STATS
  // =====================================================

  const stats = {
    low: data?.weekLow || "100.15",
    lowDate: data?.weekLowDate || "Sep 27, 2024",

    high: data?.weekHigh || "110.18",
    highDate: data?.weekHighDate || "Jan 13, 2025",

    ytdChange: data?.ytdChange || "-3.28%",
    oneYearChange: data?.oneYearChange || "+3.15%",
  };

  const ytdPositive = !String(stats.ytdChange).startsWith("-");
  const oneYearPositive = !String(stats.oneYearChange).startsWith("-");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,0.25)]
        sm:p-5
        lg:p-6
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[30%]
          top-[20%]
          h-[280px]
          w-[500px]
          rounded-full
          bg-[#86AE3C]/[0.025]
          blur-[100px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10">
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
            text-[18px]
            font-semibold
            uppercase
            tracking-[0.01em]
            text-[#EEF1F3]
            sm:text-[21px]
            lg:text-[23px]
          "
        >
          {data?.code || "USD"} INDEX (DXY) – HISTORICAL CHART
        </motion.h2>
      </div>

      {/* =====================================================
          RANGE BUTTONS
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-4
          flex
          flex-wrap
          gap-2
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
                rounded-[4px]
                border
                px-3
                py-1.5
                text-[12px]
                font-semibold
                transition-all
                duration-200
                sm:px-3.5
                sm:text-[13px]

                ${
                  active
                    ? "border-[#294A6A] bg-[#173A61] text-[#EEF2F5] shadow-[0_0_12px_rgba(60,120,180,0.12)]"
                    : "border-transparent bg-transparent text-[#8D9AA5] hover:border-[#263C4F] hover:bg-[#071A2A] hover:text-[#DCE2E6]"
                }
              `}
            >
              {range}
            </motion.button>
          );
        })}
      </div>

      {/* =====================================================
          MAIN CHART
      ====================================================== */}

      <div className="relative z-10 mt-4">
        <div className="relative h-[275px] w-full sm:h-[315px] lg:h-[350px]">
          {/* ================= Y AXIS ================= */}

          <div
            className="
              absolute
              left-0
              top-0
              z-10
              flex
              h-[285px]
              w-[42px]
              flex-col
              justify-between
              text-[11px]
              font-medium
              text-[#87949F]
              sm:w-[48px]
              sm:text-[12px]
              lg:h-[300px]
              lg:text-[13px]
            "
          >
            {yLabels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>

          {/* ================= SVG ================= */}

          <div className="absolute left-[48px] right-0 top-0 h-full sm:left-[55px]">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="historicalAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#86AE3C" stopOpacity="0.16" />

                  <stop offset="100%" stopColor="#86AE3C" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* ================= GRID ================= */}

              {yLabels.map((_, index) => {
                const y = chartTop + (index / 5) * chartHeight;

                return (
                  <line
                    key={index}
                    x1="0"
                    y1={y}
                    x2={width}
                    y2={y}
                    stroke="#142B3D"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                );
              })}

              {/* ================= AREA ================= */}

              <motion.path
                d={areaPath}
                fill="url(#historicalAreaGradient)"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                }}
              />

              {/* ================= CHART LINE ================= */}

              <motion.polyline
                key={activeRange}
                points={points}
                fill="none"
                stroke="#86AE3C"
                strokeWidth="3.2"
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

              {/* ================= END DOT ================= */}

              <motion.circle
                cx={width}
                cy={
                  chartBottom -
                  ((chartData[chartData.length - 1] - minValue) /
                    (maxValue - minValue || 1)) *
                    chartHeight
                }
                r="4"
                fill="#9BC84A"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.7,
                  duration: 0.3,
                }}
              />
            </svg>
          </div>
        </div>

        {/* =====================================================
            DATE LABELS
        ====================================================== */}

        <div
          className="
            ml-[48px]
            flex
            justify-between
            gap-2
            overflow-hidden
            text-[10px]
            font-medium
            text-[#778590]
            sm:ml-[55px]
            sm:text-[11px]
            lg:text-[12px]
          "
        >
          {dateLabels.map((date) => (
            <span key={date} className="whitespace-nowrap">
              {date}
            </span>
          ))}
        </div>
      </div>

      {/* =====================================================
          SOURCE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-2
          flex
          justify-end
          text-[10px]
          text-[#687782]
          sm:text-[11px]
        "
      >
        Source: Trading Economics
      </div>

      {/* =====================================================
          BOTTOM STATISTICS
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-4
          grid
          grid-cols-2
          border-t
          border-[#173047]
          sm:grid-cols-4
        "
      >
        {/* ================= LOW ================= */}

        <div
          className="
            border-b
            border-[#173047]
            px-3
            py-4
            text-center
            sm:border-b-0
            sm:border-r
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              text-[#8996A0]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            52 Week Low
          </p>

          <p
            className="
              mt-2
              text-[16px]
              font-semibold
              text-[#E7EBEE]
              sm:text-[18px]
              lg:text-[19px]
            "
          >
            {stats.low}
          </p>

          <p
            className="
              mt-1
              text-[10px]
              text-[#697783]
              sm:text-[11px]
            "
          >
            ({stats.lowDate})
          </p>
        </div>

        {/* ================= HIGH ================= */}

        <div
          className="
            border-b
            border-[#173047]
            px-3
            py-4
            text-center
            sm:border-b-0
            sm:border-r
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              text-[#8996A0]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            52 Week High
          </p>

          <p
            className="
              mt-2
              text-[16px]
              font-semibold
              text-[#E7EBEE]
              sm:text-[18px]
              lg:text-[19px]
            "
          >
            {stats.high}
          </p>

          <p
            className="
              mt-1
              text-[10px]
              text-[#697783]
              sm:text-[11px]
            "
          >
            ({stats.highDate})
          </p>
        </div>

        {/* ================= YTD ================= */}

        <div
          className="
            border-r
            border-[#173047]
            px-3
            py-4
            text-center
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              text-[#8996A0]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            YTD Change
          </p>

          <p
            className={`
              mt-2
              text-[17px]
              font-semibold
              sm:text-[19px]
              lg:text-[20px]
              ${ytdPositive ? "text-[#86AE3C]" : "text-[#D65353]"}
            `}
          >
            {stats.ytdChange}
          </p>
        </div>

        {/* ================= ONE YEAR ================= */}

        <div
          className="
            px-3
            py-4
            text-center
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              text-[#8996A0]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            1 Year Change
          </p>

          <p
            className={`
              mt-2
              text-[17px]
              font-semibold
              sm:text-[19px]
              lg:text-[20px]
              ${oneYearPositive ? "text-[#86AE3C]" : "text-[#D65353]"}
            `}
          >
            {stats.oneYearChange}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
