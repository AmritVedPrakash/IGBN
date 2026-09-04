import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  Building2,
  ArrowRight,
  Bell,
  Search,
  TrendingUp,
  FileCheck2,
  MousePointerClick,
} from "lucide-react";

import globalMap from "../../../../assets/homebg/global-trade-map.png";
import GlobeScene from "./GlobeScene";
import { countriesData } from "../../../../data/globalTradeData";

import CountryPin from "./CountryPin";
import CountryInfoCard from "./CountryInfoCard";
import ExportDestinations from "./ExportDestinations";

export default function GlobalTradeHero() {
  // activeCountry can now be null -> means the info card is closed
  const [activeCountry, setActiveCountry] = useState(countriesData.germany);

  const rightFeatures = [
    {
      icon: Bell,
      text: "Global Demand Alerts",
    },
    {
      icon: Search,
      text: "RFQ Matchmaker",
    },
    {
      icon: TrendingUp,
      text: "Market Insights",
    },
    {
      icon: FileCheck2,
      text: "Export Readiness",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-[760px]
        w-full
        overflow-visible
        bg-[#020D18]
      "
    >
      {/* =================================================
          LEFT CONTENT
          NOTE: added a dedicated 1280-1535px tier (covers
          1366x768 laptops) that is narrower than the 2xl
          (>=1536px) values, so it no longer collides with
          the center map.
      ================================================= */}
      <div
        className="
          absolute
          left-[4%]
          top-1/2
          z-40
          w-[340px]
          -translate-y-1/2

          xl:left-[4.5%]
          xl:w-[350px]

          2xl:left-[6.5%]
          2xl:w-[420px]
        "
      >
        {/* ================= HEADING ================= */}
        <motion.h1
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-[34px]
            font-semibold
            leading-[1.15]
            tracking-[-0.02em]
            text-[#F5F5F5]

            xl:text-[38px]
            xl:leading-[1.14]

            2xl:text-[50px]
            2xl:leading-[1.13]
          "
        >
          India&apos;s Global
          <br />
          Trade Intelligence
          <br />&{" "}
          <span className="text-[#D69A2B]">
            Export Growth
            <br />
            Platform
          </span>
        </motion.h1>

        {/* ================= PARAGRAPH ================= */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="
            mt-4
            max-w-[340px]
            text-[14px]
            font-normal
            leading-[1.7]
            text-[#D0D6DC]

            xl:mt-5
            xl:text-[15px]

            2xl:mt-6
            2xl:max-w-[390px]
            2xl:text-[18px]
            2xl:leading-[1.8]
          "
        >
          Real-time trade data, verified manufacturers, global demand insights
          and dedicated international business development – all in one
          ecosystem.
        </motion.p>

        {/* =================================================
            BUYER / SUPPLIER CARDS
            FIX: no more fixed w-[235px]/w-[250px]. Each card
            now takes an equal, flexible share (flex-1 +
            min-w-0) of whatever width the parent column has,
            so the row can NEVER be wider than its container
            and can never overlap the map again, on any screen
            size (1366x768 included).
        ================================================= */}
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
            duration: 0.65,
            delay: 0.25,
          }}
          className="
            mt-6
            flex
            gap-3

            xl:mt-7
            xl:gap-3

            2xl:mt-8
            2xl:gap-4
          "
        >
          {/* BUYER */}
          <motion.button
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              flex
              min-h-[86px]
              w-full
              min-w-0
              flex-1
              items-center
              gap-3
              rounded-[9px]
              border
              border-[#31516A]
              bg-[#061522]/95
              px-3
              py-3
              text-left
              shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              transition-all
              duration-300

              hover:border-[#5B8DAA]
              hover:bg-[#081A29]

              2xl:min-h-[90px]
              2xl:gap-4
              2xl:px-5
              2xl:py-4
            "
          >
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#41657C]
                bg-[#0A1A29]

                2xl:h-[48px]
                2xl:w-[48px]
              "
            >
              <UsersRound
                size={24}
                strokeWidth={1.6}
                className="text-[#76A8C3] 2xl:hidden"
              />
              <UsersRound
                size={28}
                strokeWidth={1.6}
                className="hidden text-[#76A8C3] 2xl:block"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  truncate
                  text-[14px]
                  font-semibold
                  text-[#F2F4F5]

                  2xl:text-[16px]
                "
              >
                Join as a Buyer
              </p>

              <p
                className="
                  mt-1.5
                  truncate
                  text-[11px]
                  font-medium
                  text-[#9AA6AF]

                  2xl:mt-2
                  2xl:text-[12px]
                "
              >
                Source. Connect. Grow.
              </p>
            </div>

            <ArrowRight
              size={16}
              className="
                ml-auto
                shrink-0
                text-[#B8C2CA]
                transition-transform
                duration-300
                group-hover:translate-x-1

                2xl:h-[17px]
                2xl:w-[17px]
              "
            />
          </motion.button>

          {/* SUPPLIER */}
          <motion.button
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              flex
              min-h-[86px]
              w-full
              min-w-0
              flex-1
              items-center
              gap-3
              rounded-[9px]
              border
              border-[#825B21]
              bg-[#061522]/95
              px-3
              py-3
              text-left
              shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              transition-all
              duration-300

              hover:border-[#D69A2B]
              hover:bg-[#091A27]

              2xl:min-h-[90px]
              2xl:gap-4
              2xl:px-5
              2xl:py-4
            "
          >
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#8C6227]
                bg-[#D69A2B]/[0.04]

                2xl:h-[48px]
                2xl:w-[48px]
              "
            >
              <Building2
                size={24}
                strokeWidth={1.6}
                className="text-[#D69A2B] 2xl:hidden"
              />
              <Building2
                size={28}
                strokeWidth={1.6}
                className="hidden text-[#D69A2B] 2xl:block"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  truncate
                  text-[14px]
                  font-semibold
                  text-[#D69A2B]

                  2xl:text-[16px]
                "
              >
                Join as a Supplier
              </p>

              <p
                className="
                  mt-1.5
                  truncate
                  text-[11px]
                  font-medium
                  text-[#9AA6AF]

                  2xl:mt-2
                  2xl:text-[12px]
                "
              >
                Showcase. Connect. Export.
              </p>
            </div>

            <ArrowRight
              size={16}
              className="
                ml-auto
                shrink-0
                text-[#D69A2B]
                transition-transform
                duration-300
                group-hover:translate-x-1

                2xl:h-[17px]
                2xl:w-[17px]
              "
            />
          </motion.button>
        </motion.div>
      </div>

      {/* =================================================
          CENTER MAP
          NOTE: shifted slightly right + a touch narrower in
          the 1280-1535px tier so it clears the narrower left
          column and the Germany card no longer sits under the
          Supplier button.
      ================================================= */}
      {/* =================================================
    CENTER 3D GLOBE
================================================= */}
<div
  className="
    absolute
    left-[27%]
    top-[-4%]
    z-20

    h-[112%]
    w-[60%]
    overflow-visible

    xl:left-[27%]
    xl:w-[59%]

    2xl:left-[25%]
    2xl:w-[62%]
  "
>
  <GlobeScene
  countries={countriesData}
  activeCountry={activeCountry}
  onCountryEnter={(country) => {
    setActiveCountry(country);
  }}
  onCountryClick={(country) => {
    setActiveCountry(country);
  }}
/>

  {/* COUNTRY INFO CARD */}
  {activeCountry && (
    <CountryInfoCard
      country={activeCountry}
      onClose={() => setActiveCountry(null)}
    />
  )}

  {/* CLICK COUNTRY MESSAGE */}
  <motion.div
    initial={{
      opacity: 0,
      y: 15,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.6,
      delay: 0.5,
    }}
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[5%]
      z-50
      flex
      min-h-[66px]
      w-[200px]
      items-center
      gap-3
      rounded-[8px]
      border
      border-[#30485B]
      bg-[#04131F]/95
      px-4
      py-1
      shadow-[0_10px_25px_rgba(0,0,0,0.30)]
      backdrop-blur-md
    "
  >
    <motion.div
      animate={{
        scale: [1, 1.12, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        flex
        h-[38px]
        w-[38px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#D69A2B]/60
        bg-[#D69A2B]/[0.05]
      "
    >
      <MousePointerClick
        size={21}
        className="text-[#D69A2B]"
      />
    </motion.div>

    <p
      className="
        text-[11px]
        font-medium
        leading-[1.45]
        text-[#E2E6E9]
      "
    >
      Hover or click any country
      <br />
      to explore opportunities
    </p>
  </motion.div>
</div>

      {/* =================================================
          RIGHT FEATURE BAR
          NOTE: slightly narrower + pulled in a bit for the
          1280-1535px tier so it doesn't get squeezed against
          the viewport edge on 1366px wide screens.
      ================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          x: 25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.2,
        }}
        className="
          absolute
          right-[3%]
          top-[4%]
          z-40
          w-[185px]
          overflow-hidden
          rounded-[11px]
          border
          border-[#735123]
          bg-[#03111F]/95
          px-4
          shadow-[0_12px_30px_rgba(0,0,0,0.30)]
          backdrop-blur-md

          xl:right-[4%]
          xl:w-[195px]

          2xl:right-[7%]
          2xl:w-[205px]
          2xl:px-5
        "
      >
        {rightFeatures.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.text}
              whileHover={{
                x: 4,
              }}
              className={`
                group
                flex
                min-h-[72px]
                items-center
                gap-3

                2xl:min-h-[82px]
                2xl:gap-4

                ${
                  index !== rightFeatures.length - 1
                    ? "border-b border-[#314152]"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A9782D]/60
                  bg-[#D69A2B]/[0.04]

                  2xl:h-[42px]
                  2xl:w-[42px]
                "
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="
                    text-[#D69A2B]
                    transition-transform
                    duration-300
                    group-hover:scale-110

                    2xl:hidden
                  "
                />
                <Icon
                  size={25}
                  strokeWidth={1.6}
                  className="
                    hidden
                    text-[#D69A2B]
                    transition-transform
                    duration-300
                    group-hover:scale-110

                    2xl:block
                  "
                />
              </div>

              <span
                className="
                  text-[13px]
                  font-semibold
                  leading-[1.4]
                  text-[#E4E8EB]

                  2xl:text-[15px]
                  2xl:leading-[1.45]
                "
              >
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* =================================================
          DYNAMIC EXPORT CHART
          Falls back to Germany's data when the info card has
          been closed, so this panel never breaks.
      ================================================= */}
      <ExportDestinations country={activeCountry ?? countriesData.germany} />
    </section>
  );
}