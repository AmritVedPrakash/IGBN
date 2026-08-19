import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown, TrendingUp } from "lucide-react";

import indiaFlag from "../assets/flag/india.png";
import usaFlag from "../assets/flag/usa.png";
import GlobalUnderstanding from "../components/sections/marketanalyses/GlobalUnderstanding";
import TopMarket from "../components/sections/marketanalyses/TopMarket";
import ExplorIndustry from "../components/sections/marketanalyses/ExplorIndustry";
// import WhatIndiaProduce from "../components/sections/marketanalyses/WhatIndiaProduce";

export default function MarketAnalyses() {
  const [product, setProduct] = useState("Rice");

  const products = [
    "Rice",
    "Textiles",
    "Machinery",
    "Pharmaceuticals",
    "Chemicals",
  ];

  return (
    <>
    
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        lg:px-8
        lg:py-14
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.04]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1650px]
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[0.9fr_1.1fr]
          xl:gap-14
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.75,
          }}
          className="max-w-[700px]"
        >
          {/* Breadcrumb removed */}

          {/* Main Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              text-[38px]
              font-semibold
              leading-[1.12]
              tracking-[-0.02em]
              text-[#F5F5F5]

              sm:text-[45px]
              md:text-[51px]
              lg:text-[54px]
              xl:text-[58px]
            "
          >
            Global Market Analyses &
            <br />
            <span className="text-[#D99B2B]">Country Intelligence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mt-6
              max-w-[650px]
              text-[16px]
              font-normal
              leading-[1.8]
              text-[#D7DCE1]

              sm:text-[17px]
              lg:text-[18px]
              xl:text-[19px]
            "
          >
            AI-powered market intelligence, import-export trends, buyer insights
            and opportunity reports to help Indian businesses export smarter and
            grow globally.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* Explore Countries */}
            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
                min-h-[54px]
                items-center
                justify-center
                gap-3
                rounded-[7px]
                border
                border-[#D69A2B]
                bg-gradient-to-r
                from-[#E0A946]
                via-[#D69A2B]
                to-[#C88923]
                px-7
                text-[15px]
                font-semibold
                text-[#07111B]
                shadow-[0_8px_25px_rgba(214,154,43,0.20)]

                sm:text-[16px]
              "
            >
              Explore Countries
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>

            {/* How It Works */}
            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
                min-h-[54px]
                items-center
                justify-center
                gap-4
                rounded-[7px]
                border
                border-[#98702D]
                bg-[#061522]
                px-7
                text-[15px]
                font-semibold
                text-[#E5E8EB]
                transition-all
                duration-300

                hover:border-[#D69A2B]

                sm:text-[16px]
              "
            >
              How It Works
              <span
                className="
                  flex
                  h-[26px]
                  w-[26px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D5DADF]
                "
              >
                <Play size={11} fill="currentColor" className="ml-[2px]" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT COUNTRY COMPARISON CARD
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            rounded-[13px]
            border
            border-[#755224]/80
            bg-[#03111F]
            px-5
            py-6
            shadow-[0_15px_45px_rgba(0,0,0,0.35)]

            sm:px-6
            lg:px-7
          "
        >
          {/* Card Glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#D69A2B]/[0.035]
              blur-[90px]
            "
          />

          {/* =================================================
              HEADER
          ================================================== */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Title */}
            <div className="flex items-center gap-3">
              <h2
                className="
                  text-[18px]
                  font-semibold
                  uppercase
                  text-[#F3F4F5]

                  sm:text-[20px]
                  lg:text-[21px]
                "
              >
                Country Comparison
              </h2>

              <span
                className="
                  rounded-full
                  border
                  border-[#A7772C]
                  bg-[#D69A2B]/[0.06]
                  px-2.5
                  py-1
                  text-[11px]
                  font-semibold
                  text-[#D69A2B]
                "
              >
                New
              </span>
            </div>

            {/* Select Product */}
            <div className="flex items-center gap-3">
              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  text-[#CBD1D7]

                  sm:text-[14px]
                "
              >
                Select Product
              </span>

              <div className="relative">
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="
                    h-[42px]
                    min-w-[135px]
                    appearance-none
                    rounded-[6px]
                    border
                    border-[#34495B]
                    bg-[#071522]
                    pl-4
                    pr-9
                    text-[13px]
                    font-medium
                    text-[#E6E8EA]
                    outline-none
                    transition-all

                    focus:border-[#D69A2B]

                    sm:text-[14px]
                  "
                >
                  {products.map((item) => (
                    <option key={item} value={item} className="bg-[#071522]">
                      {item}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[#D69A2B]
                  "
                />
              </div>
            </div>
          </div>

          {/* =================================================
              COUNTRY AREA
          ================================================== */}
          <div
            className="
              relative
              z-10
              mt-7
              grid
              grid-cols-1
              gap-5

              md:grid-cols-[1fr_70px_1fr]
              md:gap-2
            "
          >
            {/* =================================================
                INDIA
            ================================================== */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              className="
                rounded-[9px]
                bg-[#061522]/55
                px-4
                py-5
              "
            >
              {/* Country */}
              <div className="flex items-center gap-4">
                <img
                  src={indiaFlag}
                  alt="India"
                  className="
                    h-[38px]
                    w-[38px]
                    rounded-full
                    border
                    border-white/20
                    object-cover
                  "
                />

                <div>
                  <p
                    className="
                      text-[12px]
                      font-medium
                      text-[#C9CFD5]
                      sm:text-[13px]
                    "
                  >
                    Export Potential of
                  </p>

                  <h3
                    className="
                      mt-1
                      text-[23px]
                      font-semibold
                      uppercase
                      text-[#D69A2B]

                      sm:text-[25px]
                    "
                  >
                    India
                  </h3>
                </div>
              </div>

              {/* Metrics */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                <div>
                  <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                    Global Export Rank
                  </p>

                  <p
                    className="
                      mt-2
                      text-[19px]
                      font-semibold
                      text-[#F4F5F6]
                      sm:text-[21px]
                    "
                  >
                    4th
                  </p>
                </div>

                <div
                  className="
                    border-l
                    border-[#263A4C]
                    pl-4
                  "
                >
                  <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                    Total Exports (2023)
                  </p>

                  <p
                    className="
                      mt-2
                      text-[19px]
                      font-semibold
                      text-[#F4F5F6]
                      sm:text-[21px]
                    "
                  >
                    $ 778B
                  </p>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="mt-5">
                <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                  Growth (YoY)
                </p>

                <div
                  className="
                    mt-1
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <p
                    className="
                      text-[20px]
                      font-semibold
                      text-[#80B83C]
                    "
                  >
                    +7.3%
                  </p>

                  <motion.svg
                    viewBox="0 0 150 48"
                    className="h-[45px] w-[145px]"
                  >
                    <motion.path
                      d="M3 39 L20 31 L34 34 L50 20 L65 27 L82 18 L98 23 L115 9 L130 15 L147 3"
                      fill="none"
                      stroke="#8DAE31"
                      strokeWidth="2.3"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 1.8,
                        delay: 0.6,
                      }}
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                VS
            ================================================== */}
            <div
              className="
                flex
                items-center
                justify-center
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A9772B]
                  bg-[#071522]
                  text-[15px]
                  font-bold
                  text-[#D69A2B]
                  shadow-[0_0_18px_rgba(214,154,43,0.10)]
                "
              >
                VS
              </motion.div>
            </div>

            {/* =================================================
                USA
            ================================================== */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              className="
                rounded-[9px]
                bg-[#061522]/55
                px-4
                py-5
              "
            >
              {/* Country */}
              <div className="flex items-center gap-4">
                <img
                  src={usaFlag}
                  alt="USA"
                  className="
                    h-[38px]
                    w-[38px]
                    rounded-full
                    border
                    border-white/20
                    object-cover
                  "
                />

                <div>
                  <p
                    className="
                      text-[12px]
                      font-medium
                      text-[#C9CFD5]
                      sm:text-[13px]
                    "
                  >
                    Import Potential of
                  </p>

                  <h3
                    className="
                      mt-1
                      text-[23px]
                      font-semibold
                      uppercase
                      text-[#E8E9EA]

                      sm:text-[25px]
                    "
                  >
                    USA
                  </h3>
                </div>
              </div>

              {/* Metrics */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                <div>
                  <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                    Total Imports (2023)
                  </p>

                  <p
                    className="
                      mt-2
                      text-[19px]
                      font-semibold
                      text-[#F4F5F6]
                      sm:text-[21px]
                    "
                  >
                    $ 3.19T
                  </p>
                </div>

                <div
                  className="
                    border-l
                    border-[#263A4C]
                    pl-4
                  "
                >
                  <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                    Import Growth (YoY)
                  </p>

                  <p
                    className="
                      mt-2
                      text-[19px]
                      font-semibold
                      text-[#F4F5F6]
                      sm:text-[21px]
                    "
                  >
                    +5.6%
                  </p>
                </div>
              </div>

              {/* Global Import Rank */}
              <div
                className="
                  mt-5
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p className="text-[11px] text-[#9EA7AF] sm:text-[12px]">
                    Global Import Rank
                  </p>

                  <p
                    className="
                      mt-1
                      text-[20px]
                      font-semibold
                      text-[#F4F5F6]
                    "
                  >
                    1st
                  </p>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                >
                  <TrendingUp
                    size={46}
                    strokeWidth={1.5}
                    className="text-[#829C30]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM BUTTON
          ================================================== */}
          <div
            className="
              relative
              z-10
              mt-5
              border-t
              border-[#263A4C]
              pt-4
              text-center
            "
          >
            <motion.button
              whileHover={{
                x: 4,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[14px]
                font-semibold
                text-[#D69A2B]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              View Detailed Comparison
              <ArrowRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
    <div>
      <GlobalUnderstanding/>
      <TopMarket/>
      <ExplorIndustry/>
      {/* <WhatIndiaProduce/> */}
    </div>
    </>
  );
}
