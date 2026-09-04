import React from "react";
import { motion } from "framer-motion";

export default function TopProductsTable({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        overflow-hidden
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
      "
    >
      <div className="flex items-center justify-between border-b border-[#193249] px-4 py-3">
        <div>
          <h2 className="text-[16px] font-semibold text-[#E9ECEF] sm:text-[20px]">
            TOP PRODUCTS BY STATE & CROP CALENDAR
          </h2>

          <p className="mt-1 text-[14px] text-[#748795]">
            Crop production and market readiness overview
          </p>
        </div>

        <span className="hidden text-[10px] text-[#778996] sm:block">
          {data.name}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b border-[#193249]">
              {[
                "State",
                "Top Product",
                "Sowing / Planting",
                "Growing",
                "Harvest / Reaping",
                "Ready to Sell",
                "Weather Impact",
              ].map((heading) => (
                <th
                  key={heading}
                  className="
                    px-4
                    py-8
                    text-[10px]
                    font-medium
                    text-[#748694]
                    sm:text-[16px]
                  "
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.topProductsTable.map((item, index) => (
              <motion.tr
                key={`${item.product}-${index}`}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  border-b
                  border-[#142A3B]
                  last:border-b-0
                "
              >
                <td className="px-4 py-3 text-[16px] text-[#D8E0E5]">
                  {item.state}
                </td>

                <td className="px-4 py-3 text-[16px] font-semibold text-[#DCE2E6]">
                  {item.product}
                </td>

                <td className="px-4 py-3 text-[16px] text-[#8999A6]">
                  {item.sowing}
                </td>

                <td className="px-4 py-3 text-[16px] text-[#8999A6]">
                  {item.growing}
                </td>

                <td className="px-4 py-3 text-[16px] text-[#8999A6]">
                  {item.harvest}
                </td>

                <td className="px-4 py-3 text-[16px] text-[#8999A6]">
                  {item.ready}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      border
                      px-2
                      py-1
                      text-[14px]
                      ${
                        item.impact === "High"
                          ? "border-[#673632] bg-[#251514] text-[#D65353]"
                          : item.impact === "Moderate"
                            ? "border-[#6A5129] bg-[#282011] text-[#D69A2B]"
                            : "border-[#34542C] bg-[#132013] text-[#83B43D]"
                      }
                    `}
                  >
                    {item.impact}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
