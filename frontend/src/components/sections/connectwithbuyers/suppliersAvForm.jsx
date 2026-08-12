import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

import { suppliersData } from "../../../data/suppliersData";

// Flag Images
import indiaFlag from "../../../assets/flag/india.png";
import chinaFlag from "../../../assets/flag/china.png";
import turkeyFlag from "../../../assets/flag/turkey.png";
import bangladeshFlag from "../../../assets/flag/bangladesh.png";
import vietnamFlag from "../../../assets/flag/vietnam.png";
import indonesiaFlag from "../../../assets/flag/indonesia.png";
import egyptFlag from "../../../assets/flag/egypt.png";
import brazilFlag from "../../../assets/flag/brazil.png";

const flagImages = {
  india: indiaFlag,
  china: chinaFlag,
  turkey: turkeyFlag,
  bangladesh: bangladeshFlag,
  vietnam: vietnamFlag,
  indonesia: indonesiaFlag,
  egypt: egyptFlag,
  brazil: brazilFlag,
};

export default function SuppliersAvForm() {
  const [selectedCountry, setSelectedCountry] = useState(
    suppliersData[0]
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chart = useMemo(() => {
    const values = selectedCountry.trends;

    const width = 700;
    const height = 260;

    const paddingX = 30;
    const paddingY = 30;

    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;

    const points = values.map((value, index) => {
      const x =
        paddingX +
        (index / (values.length - 1)) *
          (width - paddingX * 2);

      const y =
        height -
        paddingY -
        ((value - min) / range) *
          (height - paddingY * 2);

      return {
        x,
        y,
        value,
      };
    });

    const path = points
      .map(
        (point, index) =>
          `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
      )
      .join(" ");

    return {
      width,
      height,
      points,
      path,
    };
  }, [selectedCountry]);

  return (
    <section className="w-full min-w-0">
      <div className="w-full min-w-0">

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            w-full
            min-w-0
            overflow-hidden
            rounded-2xl
            border
            border-[#ececec]
            bg-white
            shadow-[0_15px_45px_rgba(0,0,0,0.06)]
          "
        >
          {/* Gold Top Heading */}
          <div
            className="
              bg-gradient-to-r
              from-[#c99120]
              via-[#dfa52e]
              to-[#ca8e1c]
              px-4
              py-4
              text-center
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
              sm:text-xs
            "
          >
            Suppliers Available From
          </div>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[200px_minmax(0,1fr)]
              xl:grid-cols-[210px_minmax(0,1fr)]
            "
          >
            {/* ==============================
                LEFT COUNTRY LIST
            ============================== */}
            <div
              className="
                min-w-0
                border-b
                border-[#ececec]
                bg-[#fdfdfd]
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  p-3
                  lg:block
                  lg:space-y-2
                  lg:overflow-visible
                  lg:p-3
                "
              >
                {suppliersData.map((country) => {
                  const active =
                    selectedCountry.id === country.id;

                  return (
                    <motion.button
                      key={country.id}
                      whileHover={{
                        x: 3,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      onClick={() =>
                        setSelectedCountry(country)
                      }
                      className={`
                        flex
                        min-w-[140px]
                        items-center
                        gap-2.5
                        rounded-lg
                        px-3
                        py-2.5
                        text-left
                        text-[11px]
                        font-medium
                        transition-all
                        duration-300
                        lg:w-full
                        lg:min-w-0

                        ${
                          active
                            ? "bg-[#071a3a] text-white shadow-[0_6px_18px_rgba(7,26,58,0.20)]"
                            : "text-[#30394f] hover:bg-[#f1f4f8]"
                        }
                      `}
                    >
                      {/* Flag */}
                      <div
                        className="
                          h-[18px]
                          w-[28px]
                          shrink-0
                          overflow-hidden
                          rounded-[3px]
                          border
                          border-black/10
                          bg-white
                        "
                      >
                        <img
                          src={flagImages[country.flag]}
                          alt={`${country.country} flag`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <span className="truncate">
                        {country.country}
                      </span>
                    </motion.button>
                  );
                })}

                {/* View All */}
                <button
                  className="
                    mt-3
                    hidden
                    items-center
                    gap-2
                    px-3
                    py-3
                    text-[11px]
                    font-medium
                    text-[#174ba5]
                    transition-all
                    duration-300
                    hover:gap-3
                    lg:flex
                  "
                >
                  View All Countries
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* ==============================
                RIGHT CONTENT
            ============================== */}
            <div
              className="
                min-w-0
                overflow-hidden
                p-4
                sm:p-5
                lg:p-5
                2xl:p-6
              "
            >
              {/* Header */}
              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  items-start
                  justify-between
                  gap-3
                "
              >
                <div className="min-w-0 flex-1">
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[#d39b29]
                      sm:text-[10px]
                    "
                  >
                    Global Export Intelligence
                  </p>

                  <h2
                    className="
                      mt-1
                      break-words
                      text-[17px]
                      font-semibold
                      uppercase
                      leading-tight
                      text-[#172343]
                      sm:text-xl
                      xl:text-[21px]
                    "
                  >
                    Export Trends From{" "}
                    <span className="text-[#d58648]">
                      {selectedCountry.country}
                    </span>
                  </h2>
                </div>

                {/* Year Dropdown */}
                <button
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-[#e6e6e6]
                    bg-white
                    px-3
                    py-2
                    text-[9px]
                    font-medium
                    text-[#555c6d]
                    transition
                    hover:border-[#d39b29]
                    sm:text-[10px]
                  "
                >
                  {selectedCountry.year} Overview
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* ==============================
                  CHART
              ============================== */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCountry.country}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mt-6 min-w-0"
                >
                  <div
                    className="
                      relative
                      w-full
                      min-w-0
                      overflow-hidden
                    "
                  >
                    <svg
                      viewBox={`0 0 ${chart.width} ${chart.height}`}
                      preserveAspectRatio="none"
                      className="
                        h-[200px]
                        w-full
                        sm:h-[220px]
                        lg:h-[215px]
                        xl:h-[225px]
                      "
                    >
                      <defs>
                        <linearGradient
                          id="exportGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#d28f56"
                          />

                          <stop
                            offset="100%"
                            stopColor="#e0663e"
                          />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      {[0, 1, 2, 3, 4].map((line) => {
                        const y =
                          25 +
                          line *
                            ((chart.height - 50) / 4);

                        return (
                          <line
                            key={line}
                            x1="25"
                            y1={y}
                            x2={chart.width - 20}
                            y2={y}
                            stroke="#edf0f5"
                            strokeWidth="1"
                          />
                        );
                      })}

                      {/* Chart Line */}
                      <motion.path
                        d={chart.path}
                        fill="none"
                        stroke="url(#exportGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          pathLength: 0,
                        }}
                        animate={{
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Points */}
                      {chart.points.map(
                        (point, index) => (
                          <motion.circle
                            key={index}
                            cx={point.x}
                            cy={point.y}
                            r="5"
                            fill="#fff"
                            stroke="#df7048"
                            strokeWidth="3"
                            initial={{
                              scale: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                            }}
                            transition={{
                              delay:
                                0.35 +
                                index * 0.04,
                            }}
                          />
                        )
                      )}
                    </svg>

                    {/* Months */}
                    <div
                      className="
                        grid
                        w-full
                        grid-cols-12
                        gap-0
                        px-1
                      "
                    >
                      {months.map((month) => (
                        <p
                          key={month}
                          className="
                            truncate
                            text-center
                            text-[7px]
                            text-[#8c92a0]
                            sm:text-[8px]
                            2xl:text-[9px]
                          "
                        >
                          {month}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ==============================
                  EXPORT CATEGORIES
              ============================== */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCountry.country}-categories`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mt-7 min-w-0"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp
                      size={16}
                      className="shrink-0 text-[#d29a28]"
                    />

                    <h3
                      className="
                        text-[12px]
                        font-semibold
                        text-[#172343]
                        sm:text-[13px]
                      "
                    >
                      Top Export Categories
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {selectedCountry.categories.map(
                      (category, index) => (
                        <div
                          key={category.name}
                          className="
                            grid
                            min-w-0
                           
                            items-center
                            gap-2
                             grid-cols-[90px_minmax(0,1fr)_62px]
sm:grid-cols-[110px_minmax(0,1fr)_70px]
2xl:grid-cols-[125px_minmax(0,1fr)_78px]
                          "
                        >
                          {/* Name */}
                          <p
                            className="
                              truncate
                              text-[9px]
                              font-medium
                              text-[#4c5363]
                              sm:text-[10px]
                              2xl:text-[11px]
                            "
                          >
                            {category.name}
                          </p>

                          {/* Progress */}
                          <div
                            className="
                              h-[5px]
                              min-w-0
                              overflow-hidden
                              rounded-full
                              bg-[#f1e7da]
                            "
                          >
                            <motion.div
                              key={`${selectedCountry.country}-${category.name}`}
                              initial={{
                                width: 0,
                              }}
                              animate={{
                                width: `${category.progress}%`,
                              }}
                              transition={{
                                duration: 0.8,
                                delay:
                                  index * 0.08,
                              }}
                              className="
                                h-full
                                rounded-full
                                bg-gradient-to-r
                                from-[#d09a2c]
                                to-[#e27425]
                              "
                            />
                          </div>

                          {/* Value */}
                          <p
                            className="
                              whitespace-nowrap
                              text-right
                              text-[8px]
                              font-semibold
                              text-[#263557]
                              sm:text-[9px]
                              2xl:text-[10px]
                            "
                          >
                            $
                            {category.value.toFixed(1)}B
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom CTA */}
              <div className="mt-7 flex justify-end">
                <motion.button
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    whitespace-nowrap
                    text-[10px]
                    font-medium
                    text-[#174ba5]
                    sm:text-[11px]
                  "
                >
                  View Full Report
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}