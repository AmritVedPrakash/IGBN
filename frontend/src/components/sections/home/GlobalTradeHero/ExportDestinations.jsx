import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExportDestinations({ country }) {
  const data = country.exportDestinations;

  let current = 0;

  const gradient = data
    .map((item) => {
      const start = current;
      current += item.value;

      return `${item.color} ${start}% ${current}%`;
    })
    .join(", ");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={country.id}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute
          bottom-[3%]
          right-[7%]
          z-40
          w-[370px]
          rounded-[11px]
          border
          border-[#735123]
          bg-[#03111F]/95
          p-5
          shadow-[0_16px_35px_rgba(0,0,0,0.35)]
          backdrop-blur-lg
        "
      >
        {/* ================= TITLE ================= */}
        <h3
          className="
            text-[20px]
            font-semibold
            text-[#F4F5F6]
          "
        >
          Top Export Destinations
        </h3>

        {/* ================= CHART + LEGEND ================= */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-6
          "
        >
          {/* ================= DONUT ================= */}
          <motion.div
            initial={{
              rotate: -90,
              scale: 0.8,
            }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative
              h-[115px]
              w-[115px]
              shrink-0
              rounded-full
            "
            style={{
              background: `conic-gradient(${gradient})`,
            }}
          >
            {/* Donut Inner */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[64px]
                w-[64px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#03111F]
              "
            />
          </motion.div>

          {/* ================= LEGEND ================= */}
          <div className="flex-1 space-y-[10px]">
            {data.map((item, index) => (
              <motion.div
                key={item.country}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                {/* Country */}
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="
                      h-[9px]
                      w-[9px]
                      shrink-0
                      rounded-full
                    "
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[16px]
                      font-medium
                      text-[#D4D9DD]
                    "
                  >
                    {item.country}
                  </span>
                </div>

                {/* Percentage */}
                <span
                  className="
                    whitespace-nowrap
                    text-[15px]
                    font-semibold
                    text-[#F1F3F4]
                  "
                >
                  {item.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM DIVIDER ================= */}
        <div
          className="
            my-5
            h-[1px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#364758]
            to-transparent
          "
        />

        {/* ================= TOTAL EXPORT ================= */}
        <p
          className="
            text-right
            text-[16px]
            font-medium
            text-[#C4CBD1]
          "
        >
          Total Export:{" "}
          <span
            className="
              ml-1
              text-[18px]
              font-semibold
              text-[#F4F5F6]
            "
          >
            {country.totalExport}
          </span>
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
