import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Files,
  Factory,
  TrendingUp,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";

export default function ReportsLibrary() {
  const [activeTab, setActiveTab] = useState("Market Reports");

  const tabs = [
    "Market Reports",
    "Country Reports",
    "Industry Reports",
    "Import Trends",
    "Export Trends",
    "Premium Reports",
  ];

  const reports = [
    {
      icon: FileText,
      title: "Global Chemical Market Report 2024",
      description:
        "Market size, demand, pricing trends and growth opportunities.",
    },
    {
      icon: Files,
      title: "Germany Import Report – Chemicals",
      description:
        "Detailed import analysis, top buyers, tariffs and regulations.",
    },
    {
      icon: Factory,
      title: "Food Processing Industry Report",
      description: "Global demand, import trends and opportunities by country.",
    },
    {
      icon: TrendingUp,
      title: "India Export Trend Report 2024",
      description:
        "India's export performance, key markets and growth sectors.",
    },
    {
      icon: BadgeDollarSign,
      title: "Premium Market Intelligence Report",
      description:
        "Exclusive insights for premium members and enterprise clients.",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-5
          py-6
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
          sm:px-6
          lg:px-7
        "
      >
        {/* ================= HEADER ================= */}
        <div>
          <h2
            className="
              text-[24px]
              font-semibold
              uppercase
              text-[#F4F5F6]
              sm:text-[26px]
              lg:text-[29px]
            "
          >
            Reports Library
          </h2>

          <p
            className="
              mt-2
              text-[15px]
              leading-[1.6]
              text-[#BFC6CD]
              sm:text-[16px]
              lg:text-[17px]
            "
          >
            Access ready-made reports and market intelligence.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div
          className="
            mt-6
            flex
            gap-7
            overflow-x-auto
            border-b
            border-[#26394A]

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {tabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative
                  shrink-0
                  pb-4
                 
                  font-semibold
                  transition-colors
                  duration-300
                   text-[17px]
                  sm:text-[18px]
                  lg:text-[19px]

                  ${
                    active
                      ? "text-[#D69A2B]"
                      : "text-[#D1D6DB] hover:text-[#D69A2B]"
                  }
                `}
              >
                {tab}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    bg-[#D69A2B]
                    transition-transform
                    duration-300

                    ${active ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* ================= REPORT CARDS ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="
            mt-5
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {reports.map((report, index) => {
            const Icon = report.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                    },
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  flex
                  min-h-[230px]
                  flex-col
                  rounded-[10px]
                  border
                  border-[#735123]/70
                  bg-[#041321]
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300

                  hover:border-[#A9782D]
                  hover:shadow-[0_14px_34px_rgba(0,0,0,0.38)]
                "
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[8px]
                      border
                      border-[#A9782D]/70
                      bg-[#D69A2B]/[0.04]
                    "
                  >
                    <Icon
                      size={29}
                      strokeWidth={1.6}
                      className="text-[#D69A2B]"
                    />
                  </motion.div>

                  <h3
                    className="
                      text-[16px]
                      font-semibold
                      leading-[1.5]
                      text-[#F1F3F5]
                      sm:text-[17px]
                      lg:text-[18px]
                    "
                  >
                    {report.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    flex-1
                    
                    leading-[1.75]
                    text-[#C9D0D6]
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  {report.description}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="
                    group/btn
                    mt-5
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[14px]
                    font-semibold
                    text-[#D69A2B]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Download Report
                  <ArrowRight
                    size={19}
                    className="
                      transition-transform
                      duration-300
                      group-hover/btn:translate-x-1
                    "
                  />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
