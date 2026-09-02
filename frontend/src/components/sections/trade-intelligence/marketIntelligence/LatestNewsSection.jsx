import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, TrendingUp, Clock3 } from "lucide-react";

// =====================================================
// DUMMY NEWS DATA
// Later API se replace kar sakte ho
// =====================================================

const newsData = [
  {
    category: "ECONOMY",
    title: "US Inflation Cools More Than Expected in April",
    time: "16 May 2025 · 2h ago",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=300&q=80",
  },
  {
    category: "FED POLICY",
    title: "Fed Signals Patience on Rate Cuts Amid Uncertainty",
    time: "16 May 2025 · 5h ago",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80",
  },
  {
    category: "MARKET",
    title: "Dollar Steadies as Markets Await Key US Data",
    time: "16 May 2025 · 8h ago",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=300&q=80",
  },
];

// =====================================================
// DUMMY FORECAST DATA
// =====================================================

const forecastData = [
  {
    period: "Q2 2025",
    imf: "103.5",
    worldBank: "104.0",
    consensus: "103.7",
  },
  {
    period: "Q3 2025",
    imf: "102.8",
    worldBank: "103.2",
    consensus: "103.0",
  },
  {
    period: "Q4 2025",
    imf: "101.6",
    worldBank: "102.3",
    consensus: "102.0",
  },
  {
    period: "2026",
    imf: "100.5",
    worldBank: "100.0",
    consensus: "100.8",
  },
];

// =====================================================
// NEWS CARD
// =====================================================

function NewsCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        min-w-0
        cursor-pointer
        rounded-[7px]
        border
        border-transparent
        p-2
        transition-all
        duration-300
        hover:border-[#20384D]
        hover:bg-[#061725]
      "
    >
      {/* IMAGE */}

      <div
        className="
          h-[72px]
          w-full
          overflow-hidden
          rounded-[5px]
          bg-[#0A1927]
          sm:h-[78px]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            opacity-80
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:opacity-100
          "
        />
      </div>

      {/* CATEGORY */}

      <div className="mt-2">
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.04em]
            text-[#D69A2B]
            sm:text-[10px]
          "
        >
          {item.category}
        </span>
      </div>

      {/* TITLE */}

      <p
        className="
          mt-1
          line-clamp-2
          text-[11px]
          font-medium
          leading-[1.45]
          text-[#DDE2E6]
          transition-colors
          duration-300
          group-hover:text-white
          sm:text-[12px]
          lg:text-[13px]
        "
      >
        {item.title}
      </p>

      {/* TIME */}

      <div
        className="
          mt-2
          flex
          items-center
          gap-1
          text-[9px]
          text-[#788795]
          sm:text-[10px]
        "
      >
        <Clock3 size={10} />
        {item.time}
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function LatestNewsSection() {
  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-7
        sm:px-6
        lg:px-8
        lg:py-8
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            xl:grid-cols-[1.18fr_1fr_0.95fr]
          "
        >
          {/* =================================================
              1. LATEST NEWS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              overflow-hidden
              rounded-[8px]
              border
              border-[#193249]
              bg-[#03111F]
              p-3
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              sm:p-4
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#162D40]
                pb-2
              "
            >
              <h2
                className="
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.02em]
                  text-[#F0F2F4]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                Latest News & Updates
              </h2>

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  text-[10px]
                  font-semibold
                  text-[#7191AD]
                  transition-colors
                  hover:text-[#D69A2B]
                  sm:text-[11px]
                "
              >
                View All News
                <ArrowUpRight size={13} />
              </button>
            </div>

            {/* NEWS GRID */}

            <div
              className="
                mt-2
                grid
                grid-cols-1
                gap-2
                sm:grid-cols-3
              "
            >
              {newsData.map((item, index) => (
                <NewsCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* =================================================
              2. IGBN INSIGHT
          ================================================= */}

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
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-[8px]
              border
              border-[#193249]
              bg-[#03111F]
              p-4
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              sm:p-5
            "
          >
            {/* GOLDEN GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[70px]
                -top-[70px]
                h-[180px]
                w-[180px]
                rounded-full
                bg-[#D69A2B]/[0.055]
                blur-[60px]
              "
            />

            {/* HEADER */}

            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A97528]
                  bg-[#071522]
                "
              >
                <Star size={20} strokeWidth={1.6} className="text-[#D69A2B]" />
              </motion.div>

              <h2
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.02em]
                  text-[#F0F2F4]
                  sm:text-[18px]
                "
              >
                IGBN Insight
              </h2>
            </div>

            {/* DIVIDER */}

            <div
              className="
                relative
                my-3
                h-[1px]
                w-full
                bg-gradient-to-r
                from-[#A97528]
                via-[#29435A]
                to-transparent
              "
            />

            {/* INSIGHT */}

            <p
              className="
                relative
                text-[13px]
                leading-[1.65]
                text-[#D0D7DD]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              The USD Index has weakened year-to-date due to expectations of
              rate cuts and easing inflation. A softer USD may support export
              competitiveness for emerging markets, but volatility is expected
              to remain high in the short term due to global policy uncertainty.
            </p>

            {/* HIGHLIGHTS */}

            <div
              className="
                relative
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                border-t
                border-[#162D40]
                pt-3
              "
            >
              <span
                className="
                  text-[12px]
                  font-semibold
                  text-[#D69A2B]
                  sm:text-[13px]
                "
              >
                Impact on Trade: Moderate-High
              </span>

              <span className="hidden text-[#536576] sm:block">|</span>

              <span
                className="
                  text-[12px]
                  font-semibold
                  text-[#D69A2B]
                  sm:text-[13px]
                "
              >
                Risk: Moderate
              </span>
            </div>
          </motion.div>

          {/* =================================================
              3. FORECASTS
          ================================================= */}

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
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            className="
              overflow-hidden
              rounded-[8px]
              border
              border-[#193249]
              bg-[#03111F]
              p-3
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              sm:p-4
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-2
                border-b
                border-[#162D40]
                pb-3
              "
            >
              <h2
                className="
                  text-[14px]
                  font-semibold
                  uppercase
                  tracking-[0.02em]
                  text-[#F0F2F4]
                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                Forecasts (USD Index)
              </h2>

              <span
                className="
                  text-[9px]
                  font-medium
                  text-[#71808D]
                  sm:text-[10px]
                "
              >
                Source: IMF, World Bank
              </span>
            </div>

            {/* TABLE */}

            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[440px] border-collapse">
                <thead>
                  <tr className="border-b border-[#20384C]">
                    <th
                      className="
                        px-2
                        pb-2
                        text-left
                        text-[10px]
                        font-semibold
                        text-[#8795A1]
                        sm:text-[11px]
                      "
                    >
                      Period
                    </th>

                    <th
                      className="
                        px-2
                        pb-2
                        text-right
                        text-[10px]
                        font-semibold
                        text-[#8795A1]
                        sm:text-[11px]
                      "
                    >
                      IMF Forecast
                    </th>

                    <th
                      className="
                        px-2
                        pb-2
                        text-right
                        text-[10px]
                        font-semibold
                        text-[#8795A1]
                        sm:text-[11px]
                      "
                    >
                      World Bank Forecast
                    </th>

                    <th
                      className="
                        px-2
                        pb-2
                        text-right
                        text-[10px]
                        font-semibold
                        text-[#8795A1]
                        sm:text-[11px]
                      "
                    >
                      Consensus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {forecastData.map((item, index) => (
                    <motion.tr
                      key={item.period}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="
                        border-b
                        border-[#142A3C]
                        last:border-b-0
                        transition-colors
                        duration-200
                        hover:bg-[#061725]
                      "
                    >
                      <td
                        className="
                          px-2
                          py-3
                          text-left
                          text-[11px]
                          font-medium
                          text-[#D5DBE0]
                          sm:text-[12px]
                        "
                      >
                        {item.period}
                      </td>

                      <td
                        className="
                          px-2
                          py-3
                          text-right
                          text-[11px]
                          font-medium
                          text-[#D5DBE0]
                          sm:text-[12px]
                        "
                      >
                        {item.imf}
                      </td>

                      <td
                        className="
                          px-2
                          py-3
                          text-right
                          text-[11px]
                          font-medium
                          text-[#D5DBE0]
                          sm:text-[12px]
                        "
                      >
                        {item.worldBank}
                      </td>

                      <td
                        className="
                          px-2
                          py-3
                          text-right
                          text-[11px]
                          font-semibold
                          text-[#D69A2B]
                          sm:text-[12px]
                        "
                      >
                        {item.consensus}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* BOTTOM TREND */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                border-t
                border-[#162D40]
                pt-3
              "
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={15} className="text-[#86AE3C]" />

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-[#8B98A3]
                    sm:text-[11px]
                  "
                >
                  Expected gradual moderation
                </span>
              </div>

              <ArrowUpRight
                size={15}
                className="
                  text-[#D69A2B]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
