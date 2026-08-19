import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PackageSearch,
  ShoppingCart,
  BadgePercent,
  Clock3,
  Handshake,
  TrendingUp,
} from "lucide-react";

import germanyFlag from "../../../assets/flag/germany.png";

export default function TopMarket() {
  const bottomData = [
    {
      icon: PackageSearch,
      title: "Top Import Categories",
      description: "Machinery, Chemicals, Electrical, Vehicles",
    },
    {
      icon: ShoppingCart,
      title: "Major Buyers",
      description: "Distributors, Importers, Manufacturers",
    },
    {
      icon: BadgePercent,
      title: "Tariff Range",
      description: "2% - 8%",
      subtext: "Applied on imports",
    },
    {
      icon: Clock3,
      title: "Logistics Time",
      description: "20 - 28 Days",
      subtext: "By Sea from India",
    },
    {
      icon: Handshake,
      title: "Trade Agreement",
      description: "Preferential tariffs",
      subtext: "under EU-India PTA",
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
          relative
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#735123]/80
          bg-[#03111F]
          p-5
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
          sm:p-6
          lg:p-7
        "
      >
        {/* ================= LEFT ARROW ================= */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            absolute
            -left-[2px]
            top-1/2
            z-30
            hidden
            h-[44px]
            w-[44px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#745123]
            bg-[#04121F]
            text-[#D69A2B]
            shadow-[0_8px_20px_rgba(0,0,0,0.35)]
            xl:flex
          "
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* ================= RIGHT ARROW ================= */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            absolute
            -right-[2px]
            top-1/2
            z-30
            hidden
            h-[44px]
            w-[44px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#745123]
            bg-[#04121F]
            text-[#D69A2B]
            shadow-[0_8px_20px_rgba(0,0,0,0.35)]
            xl:flex
          "
        >
          <ChevronRight size={24} />
        </motion.button>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            xl:grid-cols-[320px_1fr]
          "
        >
          {/* =====================================================
              LEFT COUNTRY CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              flex
              min-h-[330px]
              flex-col
              rounded-[10px]
              border
              border-[#273B4D]
              bg-[#041321]
              px-6
              py-6
            "
          >
            {/* Country */}
            <div className="flex items-center gap-4">
              <motion.img
                src={germanyFlag}
                alt="Germany"
                whileHover={{ scale: 1.08 }}
                className="
                  h-[62px]
                  w-[62px]
                  rounded-full
                  border
                  border-white/20
                  object-cover
                "
              />

              <div>
                <p
                  className="
                    text-[14px]
                    font-semibold
                    text-[#D69A2B]
                    sm:text-[15px]
                  "
                >
                  Selected Market
                </p>

                <h2
                  className="
                    mt-1
                    text-[30px]
                    font-semibold
                    leading-none
                    text-[#F5F5F5]
                    sm:text-[32px]
                    lg:text-[34px]
                  "
                >
                  Germany
                </h2>
              </div>
            </div>

            {/* Opportunity Badge */}
            <div className="mt-4">
              <span
                className="
                  inline-flex
                  rounded-[6px]
                  bg-[#789A30]/20
                  px-3
                  py-1.5
                  text-[13px]
                  font-semibold
                  text-[#9FBE47]
                  sm:text-[14px]
                "
              >
                High Opportunity
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-5
                flex-1
                text-[15px]
                leading-[1.8]
                text-[#D8DDE2]
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              Strong demand for industrial, chemical, machinery and engineering
              products from India.
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ x: 4 }}
              className="
                group
                mt-5
                flex
                min-h-[48px]
                w-fit
                items-center
                gap-3
                rounded-[7px]
                border
                border-[#8A6229]
                bg-[#071522]
                px-5
                text-[14px]
                font-semibold
                text-[#E4E7EA]
                transition-all
                hover:border-[#D69A2B]
                hover:text-[#D69A2B]
                sm:text-[15px]
              "
            >
              View Full Country Report
              <ArrowRight
                size={19}
                className="
                  text-[#D69A2B]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="flex flex-col gap-5">
            {/* ================= TOP METRICS ================= */}
            <div
              className="
                grid
                grid-cols-1
                overflow-hidden
                rounded-[10px]
                border
                border-[#273B4D]
                bg-[#041321]
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {/* Demand Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="
                  min-h-[185px]
                  border-b
                  border-[#273B4D]
                  px-6
                  py-6
                  sm:border-r
                  xl:border-b-0
                "
              >
                <p className="text-[14px] font-medium text-[#C8CFD5] sm:text-[15px]">
                  Demand Score
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <span
                    className="
                      text-[42px]
                      font-semibold
                      leading-none
                      text-[#E0A735]
                    "
                  >
                    92
                  </span>

                  <span className="pb-1 text-[15px] text-[#E2E5E8]">/100</span>
                </div>

                <p
                  className="
                    mt-4
                    text-[14px]
                    font-semibold
                    text-[#8DB63B]
                    sm:text-[15px]
                  "
                >
                  Very High Opportunity
                </p>
              </motion.div>

              {/* Import Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                whileHover={{ y: -4 }}
                className="
                  min-h-[185px]
                  border-b
                  border-[#273B4D]
                  px-6
                  py-6
                  sm:border-r
                  xl:border-b-0
                "
              >
                <p className="text-[14px] font-medium text-[#C8CFD5] sm:text-[15px]">
                  Import Growth (3Y)
                </p>

                <p
                  className="
                    mt-4
                    text-[39px]
                    font-semibold
                    leading-none
                    text-[#8DB63B]
                  "
                >
                  +8.4%
                </p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-[14px] font-semibold text-[#8DB63B]">
                    Increasing Trend
                  </p>

                  <motion.svg
                    viewBox="0 0 110 40"
                    className="h-[38px] w-[100px]"
                  >
                    <motion.path
                      d="M2 34 L17 29 L28 32 L42 19 L55 25 L68 13 L81 17 L95 5 L108 8"
                      fill="none"
                      stroke="#8DAB35"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4 }}
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Total Imports */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.26 }}
                whileHover={{ y: -4 }}
                className="
                  min-h-[185px]
                  border-b
                  border-[#273B4D]
                  px-6
                  py-6
                  sm:border-r
                  xl:border-b-0
                "
              >
                <p className="text-[14px] font-medium text-[#C8CFD5] sm:text-[15px]">
                  Total Imports (2023)
                </p>

                <p
                  className="
                    mt-4
                    whitespace-nowrap
                    text-[38px]
                    font-semibold
                    leading-none
                    text-[#F4F5F6]
                  "
                >
                  $1.45T
                </p>

                <p className="mt-4 text-[14px] font-medium text-[#B5BDC4]">
                  USD
                </p>
              </motion.div>

              {/* India's Export Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.34 }}
                whileHover={{ y: -4 }}
                className="
                  min-h-[185px]
                  px-6
                  py-6
                "
              >
                <p className="text-[14px] font-medium text-[#C8CFD5] sm:text-[15px]">
                  India&apos;s Export Share
                </p>

                <p
                  className="
                    mt-4
                    text-[39px]
                    font-semibold
                    leading-none
                    text-[#F4F5F6]
                  "
                >
                  2.8%
                </p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-[14px] font-semibold text-[#8DB63B]">
                    Growing positive
                  </p>

                  <TrendingUp
                    size={46}
                    strokeWidth={1.5}
                    className="text-[#8DAB35]"
                  />
                </div>
              </motion.div>
            </div>

            {/* ================= BOTTOM DETAILS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                grid
                grid-cols-1
                overflow-hidden
                rounded-[10px]
                border
                border-[#725021]/80
                bg-[#041321]
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-5
              "
            >
              {bottomData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                      backgroundColor: "#061725",
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[135px]
                      items-start
                      gap-4
                      border-b
                      border-[#273B4D]
                      px-5
                      py-5
                      2xl:border-b-0
                    "
                  >
                    {index !== bottomData.length - 1 && (
                      <span
                        className="
                          absolute
                          right-0
                          top-[15%]
                          hidden
                          h-[70%]
                          w-[1px]
                          bg-gradient-to-b
                          from-transparent
                          via-[#725021]
                          to-transparent
                          2xl:block
                        "
                      />
                    )}

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                      }}
                      className="
                        flex
                        h-[46px]
                        w-[46px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A9772B]/60
                        bg-[#071522]
                      "
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        className="text-[#D69A2B]"
                      />
                    </motion.div>

                    {/* Text */}
                    <div>
                      <p
                        className="
                          text-[14px]
                          font-medium
                          leading-[1.45]
                          text-[#CBD1D7]
                          sm:text-[15px]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-2
                          text-[15px]
                          font-semibold
                          leading-[1.5]
                          text-[#F1F3F5]
                          sm:text-[16px]
                        "
                      >
                        {item.description}
                      </p>

                      {item.subtext && (
                        <p
                          className="
                            mt-1
                            text-[12px]
                            leading-[1.5]
                            text-[#AEB6BE]
                            sm:text-[13px]
                          "
                        >
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
