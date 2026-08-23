import React from "react";
import { motion } from "framer-motion";

import { UsersRound, FileCheck2, TrendingUp } from "lucide-react";

export default function ExportGrowthOverview() {
  const metrics = [
    {
      icon: UsersRound,
      title: "Verified Buyer Matches",
      value: "214",
      subText: "Active Buyers",
    },
    {
      icon: FileCheck2,
      title: "RFQ Opportunities",
      value: "37",
      subText: "New RFQs",
    },
    {
      icon: TrendingUp,
      title: "Export Growth Potential",
      value: "+68%",
      subText: "Projected Growth",
    },
  ];

  const graphPoints = [
    {
      year: "2024",
      value: 10,
    },
    {
      year: "2025",
      value: 26,
    },
    {
      year: "2026",
      value: 37,
    },
    {
      year: "2027",
      value: 56,
    },
    {
      year: "2028",
      value: 79,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: 0.15,
      }}
      className="
        flex
        h-full
        flex-col
        gap-4
      "
    >
      {/* =====================================================
          TOP METRIC CARDS
      ====================================================== */}
      <div
        className="
          grid
          grid-cols-1
          gap-3

          sm:grid-cols-3
        "
      >
        {metrics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.45,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                relative
                flex
                min-h-[115px]
                items-center
                gap-3
                overflow-hidden
                rounded-[9px]
                border
                border-[#263B4B]
                bg-[#041321]/90
                px-4
                py-4
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-[35px]
                  top-1/2
                  h-[100px]
                  w-[100px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#D69A2B]/[0.04]
                  blur-[35px]
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#294A61]
                  bg-[#071A2A]
                "
              >
                <Icon size={28} strokeWidth={1.5} className="text-[#D69A2B]" />
              </div>

              {/* Data */}
              <div className="relative min-w-0">
                <p
                  className="
                    text-[12px]
                    font-medium
                    leading-[1.35]
                    text-[#C5CCD1]

                    lg:text-[13px]
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-[24px]
                    font-semibold
                    leading-none
                    text-[#D99B2B]

                    lg:text-[27px]
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    mt-1.5
                    text-[11px]
                    text-[#8D989F]

                    lg:text-[12px]
                  "
                >
                  {item.subText}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          GRAPH CARD
      ====================================================== */}
      <div
        className="
          flex-1
          rounded-[10px]
          border
          border-[#263B4B]
          bg-[#041321]/90
          px-5
          pb-4
          pt-5

          sm:px-6
        "
      >
        <h3
          className="
            text-[17px]
            font-semibold
            text-[#F2F4F5]

            sm:text-[18px]
            lg:text-[19px]
          "
        >
          Your Export Growth Projection
        </h3>

        <div className="mt-5">
          <GrowthChart data={graphPoints} />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CUSTOM SVG GRAPH
========================================================= */

function GrowthChart({ data }) {
  const width = 620;
  const height = 170;

  const paddingLeft = 28;
  const paddingRight = 22;
  const paddingTop = 16;
  const paddingBottom = 38;

  const chartWidth = width - paddingLeft - paddingRight;

  const chartHeight = height - paddingTop - paddingBottom;

  const maxValue = Math.max(...data.map((item) => item.value));

  const points = data.map((item, index) => {
    const x = paddingLeft + (index / (data.length - 1)) * chartWidth;

    const y = paddingTop + chartHeight - (item.value / maxValue) * chartHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  const path = points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");

  const areaPath = `
    ${path}
    L ${points[points.length - 1].x} ${paddingTop + chartHeight}
    L ${points[0].x} ${paddingTop + chartHeight}
    Z
  `;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="
        h-auto
        w-full
        overflow-visible
      "
    >
      <defs>
        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D69A2B" stopOpacity="0.18" />

          <stop offset="100%" stopColor="#D69A2B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Horizontal Grid */}
      {[0, 1, 2, 3].map((line) => {
        const y = paddingTop + (chartHeight / 3) * line;

        return (
          <line
            key={line}
            x1={paddingLeft}
            x2={width - paddingRight}
            y1={y}
            y2={y}
            stroke="#203545"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        );
      })}

      {/* Area */}
      <motion.path
        d={areaPath}
        fill="url(#growthArea)"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.3,
          delay: 0.5,
        }}
      />

      {/* Main Line */}
      <motion.path
        d={path}
        fill="none"
        stroke="#D69A2B"
        strokeWidth="2.8"
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

      {/* Points */}
      {points.map((point, index) => (
        <g key={point.year}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="5.5"
            fill="#F2B64B"
            stroke="#FFF2CE"
            strokeWidth="1.5"
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4 + index * 0.22,
              duration: 0.3,
            }}
          />

          <text
            x={point.x}
            y={height - 9}
            textAnchor="middle"
            fill="#AEB7BE"
            fontSize="13"
            fontWeight="500"
          >
            {point.year}
          </text>
        </g>
      ))}
    </svg>
  );
}
