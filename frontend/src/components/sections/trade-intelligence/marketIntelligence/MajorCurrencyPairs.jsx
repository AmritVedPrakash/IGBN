import React from "react";
import { motion } from "framer-motion";

export default function MajorCurrencyPairs({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        lg:p-5
      "
    >
      <h2 className="text-[15px] font-semibold text-[#E9ECEF] sm:text-[22px]">
        {data.code} VS MAJOR CURRENCIES
      </h2>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr className="border-b border-[#193249] text-[16px] text-[#87939D]">
              <th className="pb-3">Currency Pair</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Change</th>
              <th className="pb-3">% Change</th>
              <th className="pb-3">1Y Trend</th>
            </tr>
          </thead>

          <tbody>
            {data.pairs.map((item) => (
              <tr
                key={item.pair}
                className="border-b border-[#102536] text-[16px]"
              >
                <td className="py-7 text-[#D9DEE2]">{item.pair}</td>

                <td className="py-3 text-[#C8D0D6]">{item.price}</td>

                <td
                  className={`py-3 font-semibold ${
                    item.direction === "up"
                      ? "text-[#83B43D]"
                      : "text-[#D65353]"
                  }`}
                >
                  {item.change}
                </td>

                <td
                  className={`py-3 ${
                    item.direction === "up"
                      ? "text-[#83B43D]"
                      : "text-[#D65353]"
                  }`}
                >
                  {item.percentage}
                </td>

                <td className="py-3">
                  <div className="h-[25px] w-[90px]">
                    <svg viewBox="0 0 90 25" className="h-full w-full">
                      <polyline
                        points="0,19 12,15 24,17 35,10 47,13 58,8 70,11 90,4"
                        fill="none"
                        stroke={item.direction === "up" ? "#83B43D" : "#D65353"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
