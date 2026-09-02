import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const opportunities = [
  {
    product: "Basmati Rice",
    markets: "UAE, Saudi Arabia, USA",
    demand: "High",
    score: 5,
  },
  {
    product: "Pharmaceuticals",
    markets: "Africa, LATAM, SE Asia",
    demand: "High",
    score: 5,
  },
  {
    product: "Tea & Coffee",
    markets: "Russia, UK, Germany",
    demand: "Medium",
    score: 4,
  },
  {
    product: "Textiles & Apparel",
    markets: "EU, USA, Australia",
    demand: "High",
    score: 5,
  },
  {
    product: "Spices & Masala",
    markets: "USA, Canada, UAE",
    demand: "High",
    score: 5,
  },
];

function OpportunityStars({ score }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((item) => (
        <Star
          key={item}
          size={15}
          fill={item <= score ? "#D69A2B" : "transparent"}
          strokeWidth={1.4}
          className={item <= score ? "text-[#D69A2B]" : "text-[#455563]"}
        />
      ))}
    </div>
  );
}

export default function TopExportOpportunities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        transition-all
        duration-300
        hover:border-[#6F5228]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.38)]
        lg:p-5
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[70px]
          -top-[70px]
          h-[160px]
          w-[160px]
          rounded-full
          bg-[#D69A2B]/[0.05]
          blur-[55px]
          transition-all
          duration-500
          group-hover:bg-[#D69A2B]/[0.09]
        "
      />

      {/* Header */}

      <div className="relative flex items-center justify-between">
        <h2
          className="
            text-[17px]
            font-semibold
            uppercase
            tracking-[0.01em]
            text-[#EEF1F3]
            sm:text-[19px]
            lg:text-[22px]
          "
        >
          Top Export Opportunities
        </h2>

        <button
          type="button"
          className="
            flex
            items-center
            gap-1
            text-[11px]
            font-semibold
            text-[#66839C]
            transition-colors
            duration-200
            hover:text-[#D69A2B]
            sm:text-[15px]
          "
        >
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Table */}

      <div className="relative mt-4 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className="border-b border-[#193249]">
              <th
                className="
                  pb-3
                  text-left
                  text-[10px]
                  font-semibold
                  text-[#788B99]
                  sm:text-[15px]
                "
              >
                Product
              </th>

              <th
                className="
                  pb-3
                  text-left
                  text-[10px]
                  font-semibold
                  text-[#788B99]
                  sm:text-[15px]
                "
              >
                Top Markets
              </th>

              <th
                className="
                  pb-3
                  text-center
                  text-[10px]
                  font-semibold
                  text-[#788B99]
                  sm:text-[15px]
                "
              >
                Demand
              </th>

              <th
                className="
                  pb-3
                  text-right
                  text-[10px]
                  font-semibold
                  text-[#788B99]
                  sm:text-[15px]
                "
              >
                Opportunity Score
              </th>
            </tr>
          </thead>

          <tbody>
            {opportunities.map((item, index) => (
              <motion.tr
                key={item.product}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                }}
                className="
                  border-b
                  border-[#102536]
                  transition-colors
                  duration-200
                  hover:bg-[#071725]
                "
              >
                <td
                  className="
                    py-3
                    text-[11px]
                    font-medium
                    text-[#D8DEE2]
                    sm:text-[16px]
                  "
                >
                  {item.product}
                </td>

                <td
                  className="
                    py-3
                    pr-3
                    text-[10px]
                    text-[#8D9BA5]
                    sm:text-[16px]
                  "
                >
                  {item.markets}
                </td>

                <td className="py-3 text-center">
                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      sm:text-[16px]
                      ${
                        item.demand === "High"
                          ? "text-[#83B43D]"
                          : "text-[#D69A2B]"
                      }
                    `}
                  >
                    {item.demand}
                  </span>
                </td>

                <td className="py-3">
                  <div className="flex justify-end">
                    <OpportunityStars score={item.score} />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
