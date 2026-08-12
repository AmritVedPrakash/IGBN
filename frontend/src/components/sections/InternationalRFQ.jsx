import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  PackageCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";

import {
  internationalRFQData,
  internationalRFQStats,
} from "../../data/internationalRFQData";

// Flags
import usaFlag from "../../assets/flag/usa.png";
import germanyFlag from "../../assets/flag/germany.png";
import uaeFlag from "../../assets/flag/uae.png";
import indiaFlag from "../../assets/flag/india.png";
import saudiFlag from "../../assets/flag/saudi-arabia.png";

const flagImages = {
  usa: usaFlag,
  germany: germanyFlag,
  uae: uaeFlag,
  india: indiaFlag,
  saudi: saudiFlag,
};

const statIcons = {
  buyers: Users,
  active: UserCheck,
  products: PackageCheck,
  countries: Globe2,
};

const statColors = {
  buyers: "#5f83e8",
  active: "#5d9b67",
  products: "#df7b58",
  countries: "#8958e8",
};

export default function InternationalRFQ() {
  return (
    <section className="bg-[#fbfaf8] py-12 md:py-16">
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex-1 text-center">
            <h2
              className="
                text-xl
                font-semibold
                uppercase
                text-[#172343]
                sm:text-2xl
                lg:text-[28px]
              "
            >
              International RFQ Latest Trade Leads
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-[#d4a22f]" />
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            className="
              flex
              items-center
              gap-2
              text-[11px]
              font-medium
              text-[#174ba5]
              sm:text-xs
            "
          >
            View All Leads
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        {/* Main Layout */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-[1fr_2fr]
          "
        >
          {/* LEFT STATS */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="
              grid
              grid-cols-2
              overflow-hidden
              rounded-xl
              border
              border-[#eeeeee]
              bg-white
              shadow-[0_6px_24px_rgba(0,0,0,0.04)]
              sm:grid-cols-4
              xl:min-w-[520px]
              2xl:min-w-[580px]
            "
          >
            {internationalRFQStats.map((stat, index) => {
              const Icon = statIcons[stat.type];

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#fcfcfc",
                  }}
                  className="
                    relative
                    flex
                    min-h-[185px]
                    flex-col
                    items-center
                    justify-center
                    border-r
                    border-[#eeeeee]
                    px-3
                    py-5
                    text-center
                    last:border-r-0

                    xl:min-h-[230px]
                    xl:px-5
                    xl:py-7

                    2xl:min-h-[245px]
                  "
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      mb-4
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f6f7fb]

                      xl:mb-5
                      xl:h-[62px]
                      xl:w-[62px]
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      style={{
                        color: statColors[stat.type],
                      }}
                      className="xl:h-[34px] xl:w-[34px]"
                    />
                  </motion.div>

                  {/* Value */}
                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-[#172343]
                      sm:text-2xl

                      xl:text-[30px]
                      xl:font-bold
                    "
                  >
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p
                    className="
                      mt-2
                      max-w-[90px]
                      text-[10px]
                      leading-4
                      text-[#5f6575]
                      sm:text-[11px]

                      xl:max-w-[120px]
                      xl:text-[13px]
                      xl:leading-5
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RFQ CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-5
            "
          >
            {internationalRFQData.map((rfq, index) => (
              <motion.div
                key={rfq.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                }}
                className="
                  group
                  flex
                  min-h-[230px]
                  flex-col
                  rounded-[14px]
                  border
                  border-[#e9e9e9]
                  bg-white
                  p-5
                  shadow-[0_6px_22px_rgba(0,0,0,0.045)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_16px_35px_rgba(0,0,0,0.10)]
                "
              >
                {/* Country */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      h-[24px]
                      w-[36px]
                      shrink-0
                      overflow-hidden
                      rounded-[4px]
                      border
                      border-black/10
                      bg-white
                    "
                  >
                    <img
                      src={flagImages[rfq.flag]}
                      alt={`${rfq.country} flag`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <span className="text-[13px] font-semibold text-[#273452]">
                    {rfq.country}
                  </span>
                </div>

                {/* RFQ Title */}
                <h3
                  className="
                    mt-5
                    text-[14px]
                    font-semibold
                    leading-5
                    text-[#172343]
                    transition-colors
                    group-hover:text-[#174ba5]
                  "
                >
                  {rfq.title}
                </h3>

                {/* Details */}
                <div className="mt-3 flex-1 space-y-2">
                  <p className="text-[11px] leading-5 text-[#777f8f]">
                    {rfq.category}
                  </p>

                  <p className="text-[11px] leading-5 text-[#777f8f]">
                    Qty:{" "}
                    <span className="font-medium text-[#495064]">
                      {rfq.quantity}
                    </span>
                  </p>

                  <p className="text-[11px] leading-5 text-[#777f8f]">
                    {rfq.date}
                  </p>
                </div>

                {/* Active Status */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-[#b9e5c1]
                    bg-[#e8f7eb]
                    px-3
                    py-2.5
                    text-[12px]
                    font-extrabold
                    tracking-wide
                    text-[#23823a]
                  "
                >
                  <span
                    className="
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-[#3aaa55]
                      shadow-[0_0_8px_rgba(58,170,85,0.45)]
                    "
                  />

                  {rfq.status}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
