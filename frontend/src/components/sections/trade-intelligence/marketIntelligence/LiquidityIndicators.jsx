import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export default function LiquidityIndicators({ data }) {
  const indicators = Array.isArray(data?.liquidity) ? data.liquidity : [];

  return (
    <motion.div
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
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[9px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_8px_28px_rgba(0,0,0,0.22)]
        transition-all
        duration-300
        hover:border-[#29445B]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.32)]
        sm:p-5
        lg:p-6
      "
    >
      {/* =========================================
          SUBTLE HOVER GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[90px]
          -top-[90px]
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[70px]
          transition-all
          duration-500
          group-hover:bg-[#D69A2B]/[0.05]
        "
      />

      {/* =========================================
          TITLE
      ========================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          x: -15,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          relative
          z-10
          text-[17px]
          font-semibold
          uppercase
          tracking-[0.01em]
          text-[#EEF1F3]
          sm:text-[19px]
          lg:text-[20px]
        "
      >
        {data?.code || "USD"} LIQUIDITY & MARKET INDICATORS
      </motion.h2>

      {/* =========================================
          INDICATOR LIST
      ========================================== */}

      <div className="relative z-10 mt-4">
        {indicators.map(([label, value, change, direction], index) => {
          const isUp = direction === "up";
          const isDown = direction === "down";
          const isNeutral = direction === "neutral";

          return (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                x: -12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="
                grid
                min-h-[48px]
                grid-cols-[1fr_80px_65px_28px]
                items-center
                border-b
                border-[#142B3D]
                py-2.5
                last:border-b-0

                sm:min-h-[52px]
                sm:grid-cols-[1fr_100px_85px_32px]

                lg:min-h-[54px]
                lg:grid-cols-[1fr_120px_100px_35px]
              "
            >
              {/* =================================
                  LABEL
              ================================== */}

              <span
                className="
                  truncate
                  pr-3
                  text-[13px]
                  font-medium
                  text-[#D1D7DC]

                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                {label}
              </span>

              {/* =================================
                  VALUE
              ================================== */}

              <span
                className="
                  text-right
                  text-[13px]
                  font-semibold
                  text-[#E5E9EC]

                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                {value}
              </span>

              {/* =================================
                  CHANGE
              ================================== */}

              <span
                className={`
                  text-right
                  text-[13px]
                  font-semibold

                  sm:text-[14px]
                  lg:text-[15px]

                  ${
                    isUp
                      ? "text-[#83B43D]"
                      : isDown
                        ? "text-[#D65353]"
                        : "text-[#9BA4AC]"
                  }
                `}
              >
                {change}
              </span>

              {/* =================================
                  ARROW
              ================================== */}

              <div
                className={`
                  flex
                  justify-end

                  ${
                    isUp
                      ? "text-[#83B43D]"
                      : isDown
                        ? "text-[#D65353]"
                        : "text-[#929BA3]"
                  }
                `}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08 + 0.15,
                  }}
                >
                  {isUp && <ArrowUp size={22} strokeWidth={2.3} />}

                  {isDown && <ArrowDown size={22} strokeWidth={2.3} />}

                  {isNeutral && <Minus size={20} strokeWidth={2.1} />}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
