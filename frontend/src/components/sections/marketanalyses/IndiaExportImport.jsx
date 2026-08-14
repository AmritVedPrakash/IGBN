import React from "react";
import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  exportTrendData,
  exportCategories,
  importCategories,
} from "../../../data/indiaExportImportData";

const colors = [
  "#2854b8",
  "#4c6edb",
  "#6f86e8",
  "#39a96b",
  "#f0a62b",
  "#df6b4c",
  "#c9c9c9",
];

function DonutChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={85}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default function IndiaExportImport() {
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

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
            India Export & Import Analysis
          </h2>

          <div
            className="
mx-auto
mt-3
h-[3px]
w-14
bg-[#d7a52b]
rounded-full
"
          />
        </motion.div>

        <div
          className="
grid
grid-cols-1
lg:grid-cols-3
gap-5
"
        >
          {/* Export Trend */}

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
rounded-xl
border
border-[#ececec]
p-5
shadow-sm
"
          >
            <h3
              className="
text-sm
font-bold
text-[#172343]
uppercase
"
            >
              India Export Trend
              <span className="text-[#667085]">(USD Billion)</span>
            </h3>

            <div className="mt-5">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={exportTrendData}>
                  <XAxis dataKey="year" fontSize={10} />

                  <YAxis fontSize={10} />

                  <Tooltip />

                  <Bar dataKey="value" fill="#2854b8" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Export Categories */}

          <motion.div
            className="
bg-white
rounded-xl
border
border-[#ececec]
p-5
shadow-sm
"
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
          >
            <h3
              className="
text-sm
font-bold
text-[#172343]
uppercase
"
            >
              Top Export Categories From India
            </h3>

            <DonutChart data={exportCategories} />

            <div className="space-y-2">
              {exportCategories.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="
flex
justify-between
text-xs
"
                >
                  <span className="text-[#667085]">{item.name}</span>

                  <b className="text-[#172343]">{item.value}%</b>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Import Categories */}

          <motion.div
            className="
bg-white
rounded-xl
border
border-[#ececec]
p-5
shadow-sm
"
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
          >
            <h3
              className="
text-sm
font-bold
text-[#172343]
uppercase
"
            >
              Top Import Categories In India
            </h3>

            <DonutChart data={importCategories} />

            <div className="space-y-2">
              {importCategories.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="
flex
justify-between
text-xs
"
                >
                  <span className="text-[#667085]">{item.name}</span>

                  <b className="text-[#172343]">{item.value}%</b>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
