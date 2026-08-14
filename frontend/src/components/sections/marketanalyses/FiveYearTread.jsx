import React from "react";
import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  tradeGrowthData,
  productionStrength,
  exportDestinations,
} from "../../../data/fiveYearTradeData";

export default function FiveYearTrade() {
  return (
    <section
      className="
bg-[#fbfaf8]
py-12
md:py-16
"
    >
      <div
        className="
max-w-[1400px]
mx-auto
px-5
md:px-10
"
      >
        {/* Heading */}

        <div
          className="
text-center
mb-8
"
        >
          <h2
            className="
text-[#172343]
text-xl
md:text-2xl
lg:text-[28px]
font-bold
uppercase
"
          >
            India Trade Growth Overview
          </h2>

          <div
            className="
w-14
h-[3px]
bg-[#d4a22f]
mx-auto
mt-3
rounded-full
"
          />
        </div>

        <div
          className="
grid
grid-cols-1
lg:grid-cols-3
gap-5
"
        >
          {/* Growth Chart */}

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
            }}
            className="
bg-white
border
border-[#ececec]
rounded-xl
p-5
shadow-sm
"
          >
            <h3
              className="
text-sm
md:text-base
font-bold
text-[#172343]
uppercase
"
            >
              Five-Year Trade Growth
              <span
                className="
text-[#667085]
"
              >
                (USD Billion)
              </span>
            </h3>

            <div className="mt-5">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={tradeGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="year" fontSize={10} />

                  <YAxis fontSize={10} />

                  <Tooltip />

                  <Bar dataKey="exports" fill="#2854b8" radius={[5, 5, 0, 0]} />

                  <Line
                    type="monotone"
                    dataKey="imports"
                    stroke="#d4a22f"
                    strokeWidth={3}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div
              className="
flex
gap-5
text-xs
mt-3
"
            >
              <div>
                <span
                  className="
inline-block
w-3
h-3
bg-[#2854b8]
rounded-sm
mr-2
"
                />
                Exports
              </div>

              <div>
                <span
                  className="
inline-block
w-3
h-3
bg-[#d4a22f]
rounded-sm
mr-2
"
                />
                Imports
              </div>
            </div>
          </motion.div>

          {/* Production */}

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
            }}
            className="
bg-white
border
border-[#ececec]
rounded-xl
p-5
shadow-sm
"
          >
            <h3
              className="
text-sm
md:text-base
font-bold
text-[#172343]
uppercase
"
            >
              India's Strength In Production
              <span
                className="
block
text-[#667085]
text-xs
mt-1
"
              >
                (Global Share %)
              </span>
            </h3>

            <div
              className="
mt-6
space-y-4
"
            >
              {productionStrength.map((item, index) => (
                <div key={index}>
                  <div
                    className="
flex
justify-between
text-xs
mb-1
"
                  >
                    <span className="text-[#344054]">{item.name}</span>

                    <b className="text-[#172343]">{item.value}%</b>
                  </div>

                  <div
                    className="
h-2
bg-[#edf0f5]
rounded-full
overflow-hidden
"
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="
h-full
bg-[#2854b8]
rounded-full
"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Destination */}

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
            }}
            className="
bg-white
border
border-[#ececec]
rounded-xl
p-5
shadow-sm
"
          >
            <h3
              className="
text-sm
md:text-base
font-bold
text-[#172343]
uppercase
"
            >
              Top Export Destinations
              <span className="text-[#667085]">(2023-24)</span>
            </h3>

            <div
              className="
mt-6
space-y-4
"
            >
              {exportDestinations.map((item, index) => (
                <div key={index}>
                  <div
                    className="
flex
justify-between
text-xs
mb-1
"
                  >
                    <span>{item.name}</span>

                    <b>{item.value}%</b>
                  </div>

                  <div
                    className="
h-3
bg-[#edf0f5]
rounded-sm
overflow-hidden
"
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="
h-full
bg-[#2854b8]
"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
