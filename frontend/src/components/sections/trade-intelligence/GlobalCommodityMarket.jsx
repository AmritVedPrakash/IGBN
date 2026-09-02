import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
// =====================================================
// DUMMY COMMODITY DATA
// Later replace this data with API response
// =====================================================

const commodityData = [
  {
    id: "brent",
    name: "Brent Crude Oil",
    category: "Energy",
    unit: "USD / BBL",
    price: "91.90",
    change: "-2.64%",
    direction: "down",
    data: [72, 76, 70, 73, 67, 71, 65, 69, 64, 67, 61, 63, 58, 60],
  },
  {
    id: "gold",
    name: "Gold",
    category: "Precious Metals",
    unit: "USD / OZ",
    price: "2,387.45",
    change: "+0.63%",
    direction: "up",
    data: [48, 50, 49, 53, 52, 56, 55, 59, 58, 62, 61, 66, 68, 72],
  },
  {
    id: "copper",
    name: "Copper",
    category: "Base Metals",
    unit: "USD / LB",
    price: "4.61",
    change: "+0.28%",
    direction: "up",
    data: [38, 40, 39, 43, 42, 47, 45, 49, 48, 53, 51, 56, 55, 61],
  },
  {
    id: "wheat",
    name: "Wheat",
    category: "Agriculture",
    unit: "USD / BU",
    price: "699.50",
    change: "+0.21%",
    direction: "up",
    data: [42, 44, 43, 46, 45, 49, 48, 52, 50, 54, 53, 58, 57, 61],
  },
  {
    id: "coffee",
    name: "Coffee",
    category: "Soft Commodities",
    unit: "USD / LB",
    price: "2.35",
    change: "+1.72%",
    direction: "up",
    data: [35, 38, 37, 42, 40, 44, 43, 48, 46, 51, 50, 55, 54, 61],
  },
  {
    id: "urea",
    name: "Urea",
    category: "Fertilizers",
    unit: "USD / MT",
    price: "328.00",
    change: "-0.90%",
    direction: "down",
    data: [68, 64, 66, 61, 63, 58, 60, 55, 57, 52, 54, 50, 52, 48],
  },
];

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  "All",
  "Energy",
  "Precious Metals",
  "Base Metals",
  "Agriculture",
  "Soft Commodities",
  "Fertilizers",
];

// =====================================================
// MINI CHART
// =====================================================

function MiniCommodityChart({ data, direction }) {
  const width = 300;
  const height = 65;

  const safeData =
    Array.isArray(data) && data.length > 1 ? data : [20, 25, 22, 28, 24, 31];

  const min = Math.min(...safeData);
  const max = Math.max(...safeData);

  const points = safeData
    .map((value, index) => {
      const x = (index / (safeData.length - 1)) * width;

      const normalized = (value - min) / (max - min || 1);

      const y = height - normalized * (height - 12) - 6;

      return `${x},${y}`;
    })
    .join(" ");

  const chartColor = direction === "down" ? "#D65353" : "#83B43D";

  return (
    <div className="relative mt-3 h-[62px] w-full overflow-hidden">
      {/* Chart glow */}

      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          left-[10%]
          right-[10%]
          h-[30px]
          rounded-full
          blur-[24px]
          ${direction === "down" ? "bg-red-500/[0.07]" : "bg-[#83B43D]/[0.07]"}
        `}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="relative h-full w-full"
      >
        {/* Baseline */}

        <line
          x1="0"
          y1="57"
          x2={width}
          y2="57"
          stroke="#1C3346"
          strokeWidth="1"
        />

        {/* Chart */}

        <motion.polyline
          points={points}
          fill="none"
          stroke={chartColor}
          strokeWidth="2.6"
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
            duration: 1.3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// =====================================================
// COMMODITY CARD
// =====================================================

function CommodityCard({ item, index }) {
  const navigate = useNavigate();
  const isDown = item.direction === "down";

  return (
    <motion.div
      onClick={() => navigate(`/commodity-market/${item.id}`)}
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 15,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        cursor-pointer
        rounded-[9px]
        border
        border-[#1D3448]
        bg-[#03111F]
        p-4
        shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        transition-all
        duration-300
        hover:border-[#735225]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
        sm:p-5
      "
    >
      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[60px]
          -top-[70px]
          h-[150px]
          w-[150px]
          rounded-full
          bg-[#D69A2B]/[0.035]
          blur-[50px]
          transition-all
          duration-500
          group-hover:bg-[#D69A2B]/[0.07]
        "
      />

      {/* =========================================
          NAME
      ========================================== */}

      <div className="relative">
        <h3
          className="
            text-[16px]
            font-semibold
            leading-tight
            text-[#E9EDF0]
            sm:text-[18px]
          "
        >
          {item.name}
        </h3>

        <p
          className="
            mt-1
            text-[11px]
            font-medium
            uppercase
            tracking-[0.03em]
            text-[#8997A2]
            sm:text-[15px]
          "
        >
          {item.unit}
        </p>
      </div>

      {/* =========================================
          PRICE + CHANGE
      ========================================== */}

      <div
        className="
          relative
          mt-4
          flex
          items-end
          justify-between
          gap-3
        "
      >
        <span
          className="
            whitespace-nowrap
            text-[24px]
            font-semibold
            leading-none
            tracking-[-0.02em]
            text-[#F1F4F5]
            sm:text-[28px]
          "
        >
          {item.price}
        </span>

        <div
          className={`
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[13px]
            font-semibold

            sm:text-[18px]

            ${isDown ? "text-[#D65353]" : "text-[#83B43D]"}
          `}
        >
          <span>{item.change}</span>

          {isDown ? (
            <ArrowDownRight size={18} strokeWidth={2.3} />
          ) : (
            <ArrowUpRight size={18} strokeWidth={2.3} />
          )}
        </div>
      </div>

      {/* =========================================
          CHART
      ========================================== */}

      <MiniCommodityChart data={item.data} direction={item.direction} />

      {/* =========================================
          RANGE BUTTONS
      ========================================== */}

      <div
        className="
          relative
          mt-2
          grid
          grid-cols-3
          gap-1.5
        "
      >
        {["1D", "7D", "30D"].map((range, rangeIndex) => (
          <button
            key={range}
            type="button"
            className={`
                rounded-[4px]
                border
                py-1.5
                text-[10px]
                font-semibold
                transition-all
                duration-200

                sm:text-[12px]

                ${
                  rangeIndex === 0
                    ? "border-[#29415A] bg-[#102237] text-[#E2E7EA]"
                    : "border-[#13283A] bg-[#071522] text-[#778692] hover:border-[#29415A] hover:text-[#D7DDE1]"
                }
              `}
          >
            {range}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GlobalCommodityMarket() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCommodities = useMemo(() => {
    if (activeCategory === "All") {
      return commodityData;
    }

    return commodityData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

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
        {/* =========================================
            MAIN CONTAINER
        ========================================== */}

        <div
          className="
            overflow-hidden
            rounded-[11px]
            border
            border-[#193249]
            bg-[#020E1A]
            p-4
            shadow-[0_10px_40px_rgba(0,0,0,0.30)]
            sm:p-5
            lg:p-6
          "
        >
          {/* =========================================
              HEADER
          ========================================== */}

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
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
                  text-[20px]
                  font-semibold
                  uppercase
                  tracking-[0.015em]
                  text-[#F0F2F3]

                  sm:text-[23px]
                  lg:text-[26px]
                "
              >
                Global Commodity Market – Real-Time Prices
              </motion.h2>

              <p
                className="
                  mt-1
                  text-[12px]
                  font-medium
                  text-[#8F9DA8]

                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                Live commodity prices with intraday market updates
              </p>
            </div>

            {/* Dashboard Button */}

            <button
              type="button"
              className="
                hidden
                items-center
                gap-2
                text-[13px]
                font-semibold
                text-[#718BA2]
                transition-all
                duration-200
                hover:text-[#D69A2B]
                sm:flex
                lg:text-[15px]
              "
            >
              View Full Commodity Dashboard
              <ExternalLink size={16} />
            </button>
          </div>

          {/* =========================================
              CATEGORY TABS
          ========================================== */}

          <div
            className="
              mt-5
              flex
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-hide
            "
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    shrink-0
                    rounded-[5px]
                    border
                    px-4
                    py-2
                    text-[11px]
                    font-semibold
                    transition-all
                    duration-200

                    sm:px-5
                    sm:text-[12px]

                    ${
                      active
                        ? "border-[#765522] bg-[#2A2113] text-[#D9A13A] shadow-[0_0_15px_rgba(214,154,43,0.08)]"
                        : "border-[#152C3E] bg-[#071522] text-[#8B98A3] hover:border-[#31485B] hover:text-[#D8DEE2]"
                    }
                  `}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>

          {/* =========================================
              COMMODITY CARDS
          ========================================== */}

          <motion.div
            layout
            className="
              mt-4
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-6
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredCommodities.map((item, index) => (
                <CommodityCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* =========================================
              MOBILE DASHBOARD BUTTON
          ========================================== */}

          <button
            type="button"
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              text-[12px]
              font-semibold
              text-[#718BA2]
              transition-colors
              hover:text-[#D69A2B]
              sm:hidden
            "
          >
            View Full Commodity Dashboard
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
