import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import germanyFlag from "../../../assets/flag/germany.png";
import uaeFlag from "../../../assets/flag/uae.png";
import indonesiaFlag from "../../../assets/flag/indonesia.png";

export default function TopMarketOpportunities() {
  const markets = [
    {
      country: "Germany",
      flag: germanyFlag,
      label: "Demand Score",
      score: "92/100",
      status: "high",
    },
    {
      country: "UAE",
      flag: uaeFlag,
      label: "High Demand",
      score: "89/100",
      status: "high",
    },
    {
      country: "Indonesia",
      flag: indonesiaFlag,
      label: "Market Score",
      score: "86/100",
      status: "medium",
    },
  ];

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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
      }}
      className="
        flex
        h-full
        flex-col
        rounded-[11px]
        border
        border-[#263B4B]
        bg-[#041321]/90
        p-5
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]

        sm:p-6
      "
    >
      {/* Heading */}
      <h3
        className="
          text-[18px]
          font-semibold
          text-[#F3F5F6]

          sm:text-[19px]
          lg:text-[20px]
        "
      >
        Top Market Opportunities For You
      </h3>

      {/* Markets */}
      <div
        className="
          mt-5
          overflow-hidden
          rounded-[8px]
          border
          border-[#213747]
        "
      >
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
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              x: 3,
              backgroundColor: "rgba(214,154,43,0.04)",
            }}
            className={`
              flex
              min-h-[67px]
              items-center
              justify-between
              gap-4
              px-4
              py-3

              ${index !== markets.length - 1 ? "border-b border-[#213747]" : ""}
            `}
          >
            {/* Country */}
            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
              "
            >
              <img
                src={market.flag}
                alt={`${market.country} flag`}
                className="
                  h-[27px]
                  w-[38px]
                  shrink-0
                  rounded-[3px]
                  object-cover
                "
              />

              <span
                className="
                  truncate
                  text-[14px]
                  font-semibold
                  text-[#E7EAED]

                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                {market.country}
              </span>
            </div>

            {/* Score */}
            <div className="text-right">
              <p
                className={`
                  text-[11px]
                  font-medium

                  ${
                    market.status === "high"
                      ? "text-[#8AB63F]"
                      : "text-[#D99B2B]"
                  }

                  sm:text-[12px]
                `}
              >
                {market.label}
              </p>

              <p
                className={`
                  mt-1
                  text-[15px]
                  font-semibold

                  ${
                    market.status === "high"
                      ? "text-[#8AB63F]"
                      : "text-[#D99B2B]"
                  }

                  sm:text-[16px]
                `}
              >
                {market.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <motion.button
        whileHover={{
          x: 4,
        }}
        className="
          group
          mt-auto
          flex
          min-h-[48px]
          items-end
          justify-center
          gap-3
          pt-5
          text-[14px]
          font-semibold
          text-[#D69A2B]

          sm:text-[15px]
        "
      >
        View Full Market Heatmap
        <ArrowRight
          size={19}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </motion.button>
    </motion.div>
  );
}
