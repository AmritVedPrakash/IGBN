import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
} from "lucide-react";

import CountryComparisonCard from "../components/sections/marketanalyses/CountryComparisonCard";

import GlobalUnderstanding from "../components/sections/marketanalyses/GlobalUnderstanding";
import TopMarket from "../components/sections/marketanalyses/TopMarket";
import ExplorIndustry from "../components/sections/marketanalyses/ExplorIndustry";
import WhatIndiaProduce from "../components/sections/marketanalyses/WhatIndiaProduce";
import AiMarketRepoGenerater from "../components/sections/marketanalyses/AiMarketRepoGenerater";
import ReportsLibrary from "../components/sections/marketanalyses/ReportsLibrary";
import PartnerWithIGBN from "../components/sections/marketanalyses/PartnerWithIGBN";

export default function MarketAnalyses() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
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
        {/* ================= BACKGROUND GLOW ================= */}
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

        {/* =====================================================
            HERO GRID
        ====================================================== */}
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
            {/* ================= MAIN HEADING ================= */}
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

              <span className="text-[#D99B2B]">
                Country Intelligence
              </span>
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}
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
              AI-powered market intelligence, import-export trends,
              buyer insights and opportunity reports to help Indian
              businesses export smarter and grow globally.
            </motion.p>

            {/* ================= BUTTONS ================= */}
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
                  <Play
                    size={11}
                    fill="currentColor"
                    className="ml-[2px]"
                  />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT COUNTRY COMPARISON COMPONENT
          ====================================================== */}
          <CountryComparisonCard />
        </div>
      </section>

      {/* =====================================================
          REST OF MARKET ANALYSES PAGE
      ====================================================== */}
      <div>
        <GlobalUnderstanding />

        <TopMarket />

        <ExplorIndustry />

        <WhatIndiaProduce />

        <AiMarketRepoGenerater />

        <ReportsLibrary />

        <PartnerWithIGBN />
      </div>
    </>
  );
}