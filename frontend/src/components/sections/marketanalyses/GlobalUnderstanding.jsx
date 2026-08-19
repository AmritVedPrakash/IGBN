import React from "react";
import { motion } from "framer-motion";

// ================= MAP IMAGE =================
// Apne actual filename ke according change kar lena
import globalMap from "../../../assets/marketanalyses/global-understanding-map.png";

// ================= FLAGS =================
import germanyFlag from "../../../assets/flag/germany.png";
import uaeFlag from "../../../assets/flag/uae.png";
import indonesiaFlag from "../../../assets/flag/indonesia.png";
import saudiFlag from "../../../assets/flag/saudi-arabia.png";
import australiaFlag from "../../../assets/flag/australia.png";

export default function GlobalUnderstanding() {
  const markets = [
    {
      rank: 1,
      country: "Germany",
      flag: germanyFlag,
      score: 92,
    },
    {
      rank: 2,
      country: "UAE",
      flag: uaeFlag,
      score: 89,
    },
    {
      rank: 3,
      country: "Indonesia",
      flag: indonesiaFlag,
      score: 86,
    },
    {
      rank: 4,
      country: "Saudi Arabia",
      flag: saudiFlag,
      score: 84,
    },
    {
      rank: 5,
      country: "Australia",
      flag: australiaFlag,
      score: 82,
    },
  ];

  const distribution = [
    {
      label: "High",
      value: "32%",
      dot: "#D74D3D",
    },
    {
      label: "Medium",
      value: "45%",
      dot: "#D9A33B",
    },
    {
      label: "Low",
      value: "23%",
      dot: "#6FA469",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[150px]
        "
      />

      {/* =====================================================
          MAIN OUTER BOX
      ====================================================== */}
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.65,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          p-5
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
          sm:p-6
          lg:p-7
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-5
            xl:grid-cols-[1fr_310px]
            2xl:grid-cols-[1fr_340px]
          "
        >
          {/* =====================================================
              LEFT - GLOBAL MAP
          ====================================================== */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[10px]
              border
              border-[#24394C]
              bg-[#041321]
              px-5
              pb-5
              pt-4
              sm:px-6
            "
          >
            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
              }}
              className="
                text-[21px]
                font-semibold
                uppercase
                leading-tight
                text-[#F4F5F6]
                sm:text-[23px]
                lg:text-[25px]
              "
            >
              Global Understanding of Country Dynamics
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mt-2
                text-[13px]
                font-normal
                leading-[1.6]
                text-[#AEB7BF]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Click on any country to explore detailed market insights and
              opportunities.
            </motion.p>

            {/* ================= MAP ================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                relative
                mt-4
                flex
                min-h-[430px]
                items-center
                justify-center
                overflow-hidden
                sm:min-h-[480px]
                lg:min-h-[520px]
              "
            >
              <motion.img
                src={globalMap}
                alt="Global Market Opportunity Map"
                animate={{
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  max-h-[520px]
                  h-auto
                  w-full
                  object-contain
                "
              />
            </motion.div>

            {/* ================= LEGEND ================= */}
            <div
              className="
                mt-2
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:gap-3
              "
            >
              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#D4D9DE]
                  sm:text-[13px]
                "
              >
                High Opportunity
              </span>

              <div
                className="
                  h-[12px]
                  w-full
                  max-w-[250px]
                  rounded-[2px]
                  bg-gradient-to-r
                  from-[#D94A3A]
                  via-[#D8B442]
                  to-[#6FA469]
                "
              />

              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#D4D9DE]
                  sm:text-[13px]
                "
              >
                Low Opportunity
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              xl:grid-cols-1
            "
          >
            {/* =================================================
                TOP MARKETS CARD
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                rounded-[10px]
                border
                border-[#725021]/80
                bg-[#041321]
                px-5
                py-5
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              <h3
                className="
                  text-[16px]
                  font-semibold
                  text-[#F1F3F5]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                Top High Opportunity Markets
              </h3>

              {/* Markets */}
              <div className="mt-5 space-y-4">
                {markets.map((market, index) => (
                  <motion.div
                    key={market.country}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.08,
                    }}
                    whileHover={{
                      x: 3,
                    }}
                    className="
                      group
                      grid
                      grid-cols-[22px_38px_1fr_48px]
                      items-center
                      gap-2
                    "
                  >
                    {/* Rank */}
                    <span
                      className="
                        text-[13px]
                        font-semibold
                        text-[#D0D6DB]
                        sm:text-[14px]
                      "
                    >
                      {market.rank}
                    </span>

                    {/* Flag */}
                    <div
                      className="
                        h-[30px]
                        w-[30px]
                        overflow-hidden
                        rounded-full
                        border
                        border-white/20
                      "
                    >
                      <img
                        src={market.flag}
                        alt={market.country}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </div>

                    {/* Country + bar */}
                    <div>
                      <p
                        className="
                          text-[13px]
                          font-medium
                          text-[#E3E6E9]
                          sm:text-[14px]
                        "
                      >
                        {market.country}
                      </p>

                      {/* Progress */}
                      <div
                        className="
                          mt-2
                          h-[3px]
                          overflow-hidden
                          rounded-full
                          bg-[#243241]
                        "
                      >
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${market.score}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.4 + index * 0.1,
                            ease: "easeOut",
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-[#69954F]
                            via-[#9CAB40]
                            to-[#D69A2B]
                          "
                        />
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <span
                        className="
                          text-[14px]
                          font-semibold
                          text-[#D69A2B]
                          sm:text-[15px]
                        "
                      >
                        {market.score}
                      </span>

                      <span
                        className="
                          text-[10px]
                          text-[#9FA7AF]
                        "
                      >
                        /100
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                MARKET DISTRIBUTION
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                rounded-[10px]
                border
                border-[#725021]/80
                bg-[#041321]
                px-5
                py-5
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              <h3
                className="
                  text-[16px]
                  font-semibold
                  text-[#F1F3F5]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                Market Opportunity Distribution
              </h3>

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  items-center
                  gap-6
                  sm:flex-row
                  sm:justify-center
                  xl:flex-row
                "
              >
                {/* ================= DONUT ================= */}
                <motion.div
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.75,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35,
                  }}
                  className="
                    relative
                    h-[120px]
                    w-[120px]
                    shrink-0
                    rounded-full
                  "
                  style={{
                    background:
                      "conic-gradient(#D74D3D 0deg 115deg, #D9A33B 115deg 277deg, #6FA469 277deg 360deg)",
                  }}
                >
                  {/* Inner circle */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[62px]
                      w-[62px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#041321]
                    "
                  />
                </motion.div>

                {/* Legend */}
                <div className="space-y-3">
                  {distribution.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                      }}
                      className="
                        grid
                        grid-cols-[12px_70px_45px]
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-[10px]
                          w-[10px]
                          rounded-[2px]
                        "
                        style={{
                          backgroundColor: item.dot,
                        }}
                      />

                      <span
                        className="
                          text-[13px]
                          font-medium
                          text-[#D7DCE1]
                          sm:text-[14px]
                        "
                      >
                        {item.label}
                      </span>

                      <span
                        className="
                          text-right
                          text-[13px]
                          font-semibold
                          text-[#F0F2F4]
                          sm:text-[14px]
                        "
                      >
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
