import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// =====================================================
// FLAGS
// Change filenames only if your actual flag filenames
// are different.
// =====================================================

import usdFlag from "../../../assets/flag/usa.png";
import eurFlag from "../../../assets/flag/europe.png";
import gbpFlag from "../../../assets/flag/uk.png";
import jpyFlag from "../../../assets/flag/japan.png";
import audFlag from "../../../assets/flag/australia.png";
import cadFlag from "../../../assets/flag/canada.png";
import aedFlag from "../../../assets/flag/uae.png";
import sarFlag from "../../../assets/flag/saudi.png";
import cnyFlag from "../../../assets/flag/china.png";
import sgdFlag from "../../../assets/flag/singapore.png";

// =====================================================
// DUMMY CURRENCY DATA
// Later API data can replace this.
// =====================================================

const currencyData = [
  {
    code: "USD",
    name: "United States Dollar",
    flag: usdFlag,
    rate: "83.21",
    previous: "82.79",
    change: "+0.42",
    percentage: "0.51%",
    direction: "up",
    data: [30, 34, 32, 38, 36, 43, 41, 49, 47, 55, 53, 62, 59, 68],
  },
  {
    code: "EUR",
    name: "Euro",
    flag: eurFlag,
    rate: "90.11",
    previous: "89.55",
    change: "+0.56",
    percentage: "0.63%",
    direction: "up",
    data: [32, 37, 35, 41, 39, 47, 45, 51, 50, 57, 55, 63, 60, 70],
  },
  {
    code: "GBP",
    name: "British Pound",
    flag: gbpFlag,
    rate: "105.34",
    previous: "104.56",
    change: "+0.78",
    percentage: "0.75%",
    direction: "up",
    data: [35, 39, 37, 44, 42, 50, 47, 56, 54, 61, 59, 67, 65, 74],
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    flag: jpyFlag,
    rate: "0.55",
    previous: "0.56",
    change: "-0.01",
    percentage: "0.91%",
    direction: "down",
    data: [70, 65, 67, 59, 62, 54, 57, 49, 51, 44, 46, 39, 41, 34],
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    flag: audFlag,
    rate: "54.72",
    previous: "54.41",
    change: "+0.31",
    percentage: "0.57%",
    direction: "up",
    data: [29, 34, 32, 39, 37, 45, 43, 50, 48, 56, 53, 61, 59, 68],
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    flag: cadFlag,
    rate: "60.15",
    previous: "59.80",
    change: "+0.35",
    percentage: "0.58%",
    direction: "up",
    data: [31, 36, 34, 42, 39, 47, 45, 52, 50, 58, 55, 64, 61, 69],
  },
  {
    code: "AED",
    name: "UAE Dirham",
    flag: aedFlag,
    rate: "22.64",
    previous: "22.56",
    change: "+0.08",
    percentage: "0.35%",
    direction: "up",
    data: [28, 32, 31, 37, 35, 41, 40, 47, 45, 52, 50, 57, 55, 63],
  },
  {
    code: "SAR",
    name: "Saudi Riyal",
    flag: sarFlag,
    rate: "22.19",
    previous: "22.13",
    change: "+0.06",
    percentage: "0.27%",
    direction: "up",
    data: [30, 34, 33, 39, 37, 44, 42, 48, 47, 53, 51, 58, 56, 64],
  },
  {
    code: "CNY",
    name: "Chinese Yuan",
    flag: cnyFlag,
    rate: "11.52",
    previous: "11.49",
    change: "+0.03",
    percentage: "0.26%",
    direction: "up",
    data: [27, 31, 30, 36, 34, 41, 39, 46, 44, 51, 49, 56, 54, 62],
  },
  {
    code: "SGD",
    name: "Singapore Dollar",
    flag: sgdFlag,
    rate: "64.21",
    previous: "63.88",
    change: "+0.33",
    percentage: "0.52%",
    direction: "up",
    data: [29, 34, 32, 40, 38, 46, 44, 52, 49, 57, 55, 63, 60, 69],
  },
];

// =====================================================
// MINI CHART
// =====================================================

function MiniChart({ data, direction }) {
  const width = 240;
  const height = 62;

  const min = Math.min(...data);
  const max = Math.max(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;

      const normalized = (value - min) / (max - min || 1);

      const y = height - normalized * (height - 10) - 5;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative mt-2 h-[65px] w-full overflow-hidden">
      {/* Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-x-[15%]
          bottom-0
          h-[35px]
          rounded-full
          blur-[25px]
          ${direction === "down" ? "bg-red-500/[0.07]" : "bg-[#D69A2B]/[0.08]"}
        `}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="relative h-full w-full"
      >
        {/* Grid line */}

        <line
          x1="0"
          y1="52"
          x2={width}
          y2="52"
          stroke="#263A4B"
          strokeWidth="1"
          opacity="0.7"
        />

        {/* Animated Chart */}

        <motion.polyline
          points={points}
          fill="none"
          stroke={direction === "down" ? "#D65353" : "#91B43D"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// =====================================================
// CURRENCY CARD
// =====================================================

function CurrencyCard({ item, index }) {
  const navigate = useNavigate();
  const [range, setRange] = useState("1D");

  const isDown = item.direction === "down";
  const handleCardClick = () => {
    navigate(`/trade-intelligence/currency/${item.code}`);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        cursor-pointer
        rounded-[10px]
        border
        border-[#1D3448]
        bg-[#03111F]
        px-4
        py-4
        shadow-[0_8px_25px_rgba(0,0,0,0.22)]
        transition-all
        duration-300
        hover:border-[#765323]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
      "
    >
      {/* Hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[50px]
          -top-[60px]
          h-[130px]
          w-[130px]
          rounded-full
          bg-[#D69A2B]/[0.035]
          blur-[45px]
          transition-opacity
          duration-300
          group-hover:bg-[#D69A2B]/[0.07]
        "
      />

      {/* =================================================
          HEADER
      ================================================== */}

      <div className="relative flex items-center gap-3">
        <motion.img
          src={item.flag}
          alt={`${item.code} flag`}
          whileHover={{
            scale: 1.08,
          }}
          className="
            h-[36px]
            w-[36px]
            shrink-0
            rounded-full
            object-cover
            shadow-[0_2px_8px_rgba(0,0,0,0.35)]
          "
        />

        <div className="min-w-0">
          <h3
            className="
              text-[16px]
              font-semibold
              leading-none
              text-[#F2F4F6]
              sm:text-[17px]
            "
          >
            {item.code}
          </h3>

          <p
            className="
              mt-1
              truncate
              text-[11px]
              font-medium
              text-[#9EAAB4]
              sm:text-[12px]
            "
          >
            {item.name}
          </p>
        </div>
      </div>

      {/* =================================================
          RATE + CHANGE
      ================================================== */}

      <div className="relative mt-4 flex items-end justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <span
            className="
              text-[25px]
              font-semibold
              leading-none
              tracking-[-0.02em]
              text-[#F3F5F6]
              sm:text-[28px]
            "
          >
            {item.rate}
          </span>

          <span
            className="
              text-[12px]
              font-medium
              text-[#AAB3BB]
              sm:text-[16px]
            "
          >
            INR
          </span>
        </div>

        <div
          className={`
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[11px]
            font-semibold
            sm:text-[18px]
            ${isDown ? "text-[#D65353]" : "text-[#83B43D]"}
          `}
        >
          {item.change}

          {isDown ? <ArrowDownRight size={16} /> : <ArrowUpRight size={15} />}

          <span>({item.percentage})</span>
        </div>
      </div>

      {/* =================================================
          PREVIOUS CLOSE
      ================================================== */}

      <div
        className="
          relative
          mt-3
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[11px]
            text-[#8996A0]
            sm:text-[16px]
          "
        >
          Prev. Close: <span className="text-[#B8C0C7]">₹{item.previous}</span>
        </span>
      </div>

      {/* Time */}

      <p
        className="
          relative
          mt-1
          text-[10px]
          font-medium
          text-[#7F8B95]
          sm:text-[15px]
        "
      >
        31 Aug 2026, 10:30 AM
      </p>

      {/* =================================================
          CHART
      ================================================== */}

      <MiniChart data={item.data} direction={item.direction} />

      {/* =================================================
          RANGE BUTTONS
      ================================================== */}

      <div
        className="
          relative
          mt-1
          flex
          justify-end
          gap-1.5
        "
      >
        {["1D", "7D", "30D"].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setRange(option)}
            className={`
              rounded-[4px]
              border
              px-2.5
              py-1
              text-[10px]
              font-semibold
              transition-all
              duration-200
              sm:px-3
              sm:text-[14px]
              ${
                range === option
                  ? "border-[#29415A] bg-[#102237] text-[#E4E8EB]"
                  : "border-transparent text-[#7E8A94] hover:border-[#263C4F] hover:text-[#D2D7DB]"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GlobalCurrencyMarket() {
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const [showCurrency, setShowCurrency] = useState(false);

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* =================================================
            MAIN CONTAINER
        ================================================== */}

        <div
          className="
            overflow-hidden
            rounded-[12px]
            border
            border-[#193249]
            bg-[#020E1A]
            p-4
            shadow-[0_10px_40px_rgba(0,0,0,0.32)]
            sm:p-5
            lg:p-6
          "
        >
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
                  text-[21px]
                  font-semibold
                  uppercase
                  tracking-[0.015em]
                  text-[#F2F4F5]
                  sm:text-[24px]
                  lg:text-[27px]
                "
              >
                Global Currency Market – Real-Time Updates
              </motion.h2>

              <p
                className="
                  mt-1
                  text-[12px]
                  font-medium
                  text-[#9DA9B3]
                  sm:text-[13px]
                  lg:text-[16px]
                "
              >
                Live exchange rates with intraday updates
              </p>
            </div>

            {/* =================================================
                BASE CURRENCY
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-3
                self-start
                sm:mt-1
              "
            >
              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#9AA6B0]
                  sm:text-[16px]
                "
              >
                Base Currency:
              </span>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCurrency(!showCurrency)}
                  className="
                    flex
                    h-[34px]
                    min-w-[66px]
                    items-center
                    justify-between
                    gap-2
                    rounded-[5px]
                    border
                    border-[#263C4F]
                    bg-[#071522]
                    px-3
                    text-[12px]
                    font-semibold
                    text-[#DDE2E6]
                    transition-all
                    duration-200
                    hover:border-[#80602A]
                  "
                >
                  {baseCurrency}

                  <ChevronDown
                    size={14}
                    className={`
                      text-[#D69A2B]
                      transition-transform
                      duration-200
                      ${showCurrency ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {showCurrency && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      absolute
                      right-0
                      top-[40px]
                      z-50
                      w-[100px]
                      overflow-hidden
                      rounded-[6px]
                      border
                      border-[#725021]
                      bg-[#061522]
                      p-1
                      shadow-[0_12px_30px_rgba(0,0,0,0.5)]
                    "
                  >
                    {["INR", "USD", "EUR"].map((currency) => (
                      <button
                        key={currency}
                        type="button"
                        onClick={() => {
                          setBaseCurrency(currency);
                          setShowCurrency(false);
                        }}
                        className="
                            w-full
                            rounded-[4px]
                            px-3
                            py-2
                            text-left
                            text-[12px]
                            font-medium
                            text-[#D4DADE]
                            transition-all
                            duration-200
                            hover:bg-[#D69A2B]/10
                            hover:text-[#D69A2B]
                          "
                      >
                        {currency}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <button
                type="button"
                className="
                  hidden
                  items-center
                  gap-1
                  text-[16px]
                  font-semibold
                  text-[#6F8CA5]
                  transition-colors
                  hover:text-[#D69A2B]
                  sm:flex
                "
              >
                View Full Currency Dashboard
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* =================================================
              CURRENCY GRID
          ================================================== */}

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-5
            "
          >
            {currencyData.map((item, index) => (
              <CurrencyCard key={item.code} item={item} index={index} />
            ))}
          </div>

          {/* Mobile dashboard link */}

          <button
            type="button"
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-1
              text-[12px]
              font-semibold
              text-[#6F8CA5]
              transition-colors
              hover:text-[#D69A2B]
              sm:hidden
            "
          >
            View Full Currency Dashboard
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
