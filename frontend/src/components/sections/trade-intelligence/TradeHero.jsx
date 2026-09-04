import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Globe2,
  Layers3,
  Database,
  Clock3,
} from "lucide-react";

// Background image
import tradeIntelligenceBg from "../../../assets/tradeintelligence/trade-intelligence.png";

export default function TradeHero() {
  const stats = [
    {
      icon: Globe2,
      value: "21+",
      label: "Countries Covered",
    },
    {
      icon: Layers3,
      value: "11",
      label: "Market Categories",
    },
    {
      icon: Database,
      value: "500+",
      label: "Trusted Sources",
    },
    {
      icon: Clock3,
      value: "24/7",
      label: "AI Intelligence",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#020D18]
        sm:min-h-[650px]
        lg:min-h-[750px]
      "
    >
      {/* =====================================================
          TRADE INTELLIGENCE BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[27%]
          top-0
          h-full
          w-[58%]
          overflow-visible
        "
      >
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          src={tradeIntelligenceBg}
          alt="Global Trade Intelligence"
          className="
            h-full
            w-full
            object-contain
            scale-[1.01]
            -translate-x-[70px]
          "
        />
      </div>

      {/* =====================================================
          DARK LEFT OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
         
          from-[#020D18]/95
          via-[#020D18]/70
          to-transparent
        "
      />

      {/* Extra left darkness */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-[1]
          w-[52%]
          bg-gradient-to-r
          from-[#020D18]
          via-[#020D18]/85
          to-transparent
        "
      />

      {/* Mobile overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#020D18]/20
          lg:hidden
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-[140px]
          bg-gradient-to-t
          from-[#020D18]
          via-[#020D18]/60
          to-transparent
        "
      />

      {/* =====================================================
          GOLDEN GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.2, 0.38, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[52%]
          top-[42%]
          z-[2]
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.05]
          blur-[110px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[620px]
          w-full
          max-w-[1650px]
          items-center
          px-5
          py-16
          sm:px-7
          sm:py-20
          lg:min-h-[700px]
          lg:px-10
          xl:px-14
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1fr_0.75fr]
            lg:gap-8
            xl:grid-cols-[1.05fr_0.72fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              max-w-[650px]
              pt-6
              lg:pt-0
            "
          >
            {/* ================= BADGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#8A6022]/80
                bg-[#061522]/80
                px-3
                py-1.5
                backdrop-blur-sm
              "
            >
              <span
                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#D69A2B]
                  shadow-[0_0_10px_rgba(214,154,43,0.8)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#D9DEE2]
                  sm:text-[15px]
                "
              >
                IGBN Global Trade Intelligence
              </span>
            </motion.div>

            {/* ================= HEADING ================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
              }}
              className="
                mt-5
                text-[38px]
                font-semibold
                leading-[1.1]
                tracking-[-0.025em]
                text-[#F5F6F7]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[52px]
                xl:text-[58px]
              "
            >
              Your Real-Time Window to
              <br />
              <span className="text-[#D69A2B]">Global Trade Opportunities</span>
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-[560px]
                text-[15px]
                font-normal
                leading-[1.75]
                text-[#D0D7DD]
                sm:text-[18px]
                lg:text-[18px]
              "
            >
              AI-powered intelligence across 21+ countries, market insights,
              commodity prices, trade news, and expert analysis to grow your
              international business.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-2
                text-[13px]
                font-medium
                text-[#AEB8C0]
                sm:text-[16px]
              "
            >
              Know faster. Plan better. Grow globally.
            </motion.p>

            {/* ================= BUTTONS ================= */}

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
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              {/* ASK IGBN AI */}

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[7px]
                  border
                  border-[#D69A2B]
                  bg-gradient-to-r
                  from-[#E0AA48]
                  via-[#D69A2B]
                  to-[#C98A24]
                  px-6
                  text-[14px]
                  font-semibold
                  text-[#07111B]
                  shadow-[0_8px_25px_rgba(214,154,43,0.18)]
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_30px_rgba(214,154,43,0.30)]
                  sm:min-w-[155px]
                "
              >
                <Bot size={18} strokeWidth={1.8} />

                <span>Ask IGBN AI</span>

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* EXPLORE INSIGHTS */}

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[7px]
                  border
                  border-[#80602A]
                  bg-[#061522]/85
                  px-6
                  text-[14px]
                  font-semibold
                  text-[#DCA03A]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#D69A2B]
                  hover:bg-[#D69A2B]/10
                  sm:min-w-[155px]
                "
              >
                <span>Explore Insights</span>

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT STATS CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-[10px]
                border
                border-[#243B4F]
                bg-[#03111F]/80
                shadow-[0_15px_45px_rgba(0,0,0,0.4)]
                backdrop-blur-md
              "
            >
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.1,
                    }}
                    whileHover={{
                      backgroundColor: "rgba(214,154,43,0.05)",
                      x: 3,
                    }}
                    className={`
                      group
                      flex
                      min-h-[88px]
                      items-center
                      gap-4
                      px-5
                      py-4
                      transition-all
                      duration-300
                      sm:min-h-[94px]
                      sm:px-6
                      ${
                        index !== stats.length - 1
                          ? "border-b border-[#263A4B]"
                          : ""
                      }
                    `}
                  >
                    {/* ICON */}

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -4,
                      }}
                      className="
                        flex
                        h-[47px]
                        w-[47px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A9782D]/70
                        bg-[#D69A2B]/[0.04]
                      "
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="
                          text-[#D69A2B]
                          transition-colors
                          duration-300
                          group-hover:text-[#E8AE47]
                        "
                      />
                    </motion.div>

                    {/* CONTENT */}

                    <div className="flex items-center gap-4">
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.55 + index * 0.1,
                        }}
                        className="
                          min-w-[65px]
                          text-[24px]
                          font-semibold
                          leading-none
                          text-[#E1A438]
                          sm:text-[30px]
                        "
                      >
                        {item.value}
                      </motion.span>

                      <span
                        className="
                          text-[13px]
                          font-medium
                          leading-[1.4]
                          text-[#DDE2E6]
                          sm:text-[16px]
                        "
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
