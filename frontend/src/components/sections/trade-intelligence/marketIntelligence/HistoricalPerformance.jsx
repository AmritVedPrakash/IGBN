import React from "react";
import { motion } from "framer-motion";

export default function HistoricalPerformance({ data }) {
  const performance = Array.isArray(data?.annualPerformance)
    ? data.annualPerformance
    : [];

  // Maximum scale used for the chart
  const maxValue = 15;

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
        relative
        overflow-hidden
        rounded-[9px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_30px_rgba(0,0,0,0.22)]
        sm:p-5
        lg:p-6
      "
    >
      {/* ===============================
          SUBTLE GLOW
      ================================ */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          -top-[100px]
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[80px]
        "
      />

      {/* ===============================
          TITLE
      ================================ */}

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
          duration: 0.5,
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
          lg:text-[21px]
        "
      >
        HISTORICAL PERFORMANCE (ANNUAL)
      </motion.h2>

      {/* ===============================
          CHART AREA
      ================================ */}

      <div
        className="
          relative
          z-10
          mt-6
          h-[250px]
          sm:h-[270px]
          lg:h-[290px]
        "
      >
        {/* ===============================
            Y AXIS LABELS
        ================================ */}

        <div
          className="
            absolute
            left-0
            top-0
            flex
            h-[190px]
            flex-col
            justify-between
            text-[11px]
            font-medium
            text-[#9AA6B0]
            sm:text-[12px]
            lg:text-[13px]
          "
        >
          <span>15%</span>
          <span>10%</span>
          <span>5%</span>
          <span>0%</span>
          <span>-5%</span>
          <span>-10%</span>
          <span>-15%</span>
        </div>

        {/* ===============================
            GRAPH
        ================================ */}

        <div
          className="
            absolute
            left-[42px]
            right-0
            top-0
            h-[190px]
            sm:left-[48px]
          "
        >
          {/* Grid lines */}

          {[0, 25, 50, 75, 100, 125, 150].map((position, index) => (
            <div
              key={index}
              className="
                  absolute
                  left-0
                  right-0
                  border-t
                  border-[#132A3B]
                "
              style={{
                top: `${position}px`,
              }}
            />
          ))}

          {/* Zero line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[75px]
              z-10
              border-t
              border-[#385064]
            "
          />

          {/* ===============================
              BARS
          ================================ */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-between
              gap-2
              px-1
              sm:gap-4
              sm:px-2
            "
          >
            {performance.map((item, index) => {
              const value = Number(item.value) || 0;
              const positive = value >= 0;

              const barHeight = Math.min((Math.abs(value) / maxValue) * 72, 72);

              return (
                <div
                  key={item.year}
                  className="
                    relative
                    h-full
                    flex-1
                  "
                >
                  {/* ==========================
                      VALUE LABEL
                  =========================== */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: positive ? 8 : -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08 + 0.3,
                    }}
                    className={`
                      absolute
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      text-[12px]
                      font-semibold
                      sm:text-[13px]
                      lg:text-[16px]
                      ${positive ? "text-[#8DBF45]" : "text-[#D65353]"}
                    `}
                    style={{
                      top: positive
                        ? `calc(50% - ${barHeight}px - 24px)`
                        : "calc(50% + 8px)",
                    }}
                  >
                    {value > 0 ? "+" : ""}
                    {value}%
                  </motion.span>

                  {/* ==========================
                      BAR
                  =========================== */}

                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${barHeight}px`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`
                      absolute
                      left-1/2
                      w-[45%]
                      min-w-[18px]
                      max-w-[48px]
                      -translate-x-1/2
                      ${
                        positive
                          ? "top-1/2 bg-[#78A842]"
                          : "bottom-1/2 bg-[#C84E4E]"
                      }
                    `}
                  >
                    {/* Bar glow */}

                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-30
                        blur-[7px]
                        ${positive ? "bg-[#8DBF45]" : "bg-[#D65353]"}
                      `}
                    />
                  </motion.div>

                  {/* ==========================
                      YEAR
                  =========================== */}

                  <span
                    className="
                      absolute
                      left-1/2
                      top-[210px]
                      -translate-x-1/2
                      whitespace-nowrap
                      text-[11px]
                      font-medium
                      text-[#A0AAB2]
                      sm:top-[215px]
                      sm:text-[12px]
                      lg:text-[15px]
                    "
                  >
                    {item.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===============================
          SOURCE
      ================================ */}

      <div
        className="
          relative
          z-10
          mt-1
          flex
          justify-end
          text-[10px]
          font-medium
          text-[#687782]
          sm:text-[11px]
          lg:text-[12px]
        "
      >
        Source: World Bank
      </div>
    </motion.div>
  );
}
