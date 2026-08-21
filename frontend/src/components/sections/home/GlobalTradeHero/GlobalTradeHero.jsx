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

import { countriesData } from "../../../../data/globalTradeData";

import CountryPin from "./CountryPin";
import CountryInfoCard from "./CountryInfoCard";
import ExportDestinations from "./ExportDestinations";

export default function GlobalTradeHero() {
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
        overflow-hidden
        bg-[#020D18]
      "
    >
      {/* =================================================
          LEFT CONTENT
      ================================================= */}
      <div
        className="
          absolute
          left-[5.5%]
          top-1/2
          z-40
          w-[390px]
          -translate-y-1/2

          xl:left-[6.5%]
          xl:w-[420px]
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
            text-[46px]
            font-semibold
            leading-[1.13]
            tracking-[-0.02em]
            text-[#F5F5F5]

            xl:text-[50px]
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
            mt-6
            max-w-[390px]
            text-[17px]
            font-normal
            leading-[1.8]
            text-[#D0D6DC]

            xl:text-[18px]
          "
        >
          Real-time trade data, verified manufacturers, global demand insights
          and dedicated international business development – all in one
          ecosystem.
        </motion.p>

        {/* =================================================
            BUYER / SUPPLIER CARDS
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
            mt-8
            flex
            gap-4
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
              min-h-[90px]
              w-[235px]
              items-center
              gap-4
              rounded-[9px]
              border
              border-[#31516A]
              bg-[#061522]/95
              px-5
              py-4
              text-left
              shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              transition-all
              duration-300

              hover:border-[#5B8DAA]
              hover:bg-[#081A29]
            "
          >
            <div
              className="
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#41657C]
                bg-[#0A1A29]
              "
            >
              <UsersRound
                size={28}
                strokeWidth={1.6}
                className="text-[#76A8C3]"
              />
            </div>

            <div className="min-w-0">
              <p
                className="
                  whitespace-nowrap
                  text-[16px]
                  font-semibold
                  text-[#F2F4F5]
                "
              >
                Join as a Buyer
              </p>

              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[12px]
                  font-medium
                  text-[#9AA6AF]
                "
              >
                Source. Connect. Grow.
              </p>
            </div>

            <ArrowRight
              size={17}
              className="
                ml-auto
                shrink-0
                text-[#B8C2CA]
                transition-transform
                duration-300
                group-hover:translate-x-1
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
              min-h-[90px]
              w-[250px]
              items-center
              gap-4
              rounded-[9px]
              border
              border-[#825B21]
              bg-[#061522]/95
              px-5
              py-4
              text-left
              shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              transition-all
              duration-300

              hover:border-[#D69A2B]
              hover:bg-[#091A27]
            "
          >
            <div
              className="
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#8C6227]
                bg-[#D69A2B]/[0.04]
              "
            >
              <Building2
                size={28}
                strokeWidth={1.6}
                className="text-[#D69A2B]"
              />
            </div>

            <div className="min-w-0">
              <p
                className="
                  whitespace-nowrap
                  text-[16px]
                  font-semibold
                  text-[#D69A2B]
                "
              >
                Join as a Supplier
              </p>

              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[12px]
                  font-medium
                  text-[#9AA6AF]
                "
              >
                Showcase. Connect. Export.
              </p>
            </div>

            <ArrowRight
              size={17}
              className="
                ml-auto
                shrink-0
                text-[#D69A2B]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </motion.div>
      </div>

      {/* =================================================
          CENTER MAP
      ================================================= */}
      <div
        className="
          absolute
          left-[27%]
          top-0
          h-full
          w-[58%]
        "
      >
        <img
          src={globalMap}
          alt="Global Trade Network"
          className="
            h-full
            w-full
            object-contain
            scale-[1.3]
            -translate-x-[80px]
          "
        />

        {/* COUNTRY PINS */}
        {Object.values(countriesData).map((country) => (
          <CountryPin
            key={country.id}
            country={country}
            active={activeCountry.id === country.id}
            onEnter={() => setActiveCountry(country)}
            onClick={() => setActiveCountry(country)}
          />
        ))}

        {/* COUNTRY DETAILS */}
        <CountryInfoCard country={activeCountry} />

        {/* =================================================
            CLICK COUNTRY CARD
        ================================================= */}
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
            absolute
            bottom-[4%]
            left-[43%]
            z-40
            flex
            min-h-[66px]
            w-[190px]
            items-center
            gap-3
            rounded-[8px]
            border
            border-[#30485B]
            bg-[#04131F]/95
            px-4
            py-3
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
            <MousePointerClick size={21} className="text-[#D69A2B]" />
          </motion.div>

          <p
            className="
              text-[13px]
              font-medium
              leading-[1.45]
              text-[#E2E6E9]
            "
          >
            Click any country to
            <br />
            explore opportunities
          </p>
        </motion.div>
      </div>

      {/* =================================================
          RIGHT FEATURE BAR
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
          right-[7%]
          top-[4%]
          z-40
          w-[205px]
          overflow-hidden
          rounded-[11px]
          border
          border-[#735123]
          bg-[#03111F]/95
          px-5
          shadow-[0_12px_30px_rgba(0,0,0,0.30)]
          backdrop-blur-md
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
                min-h-[82px]
                items-center
                gap-4

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
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A9782D]/60
                  bg-[#D69A2B]/[0.04]
                "
              >
                <Icon
                  size={25}
                  strokeWidth={1.6}
                  className="
                    text-[#D69A2B]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <span
                className="
                  text-[14px]
                  font-semibold
                  leading-[1.45]
                  text-[#E4E8EB]

                  xl:text-[15px]
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
      ================================================= */}
      <ExportDestinations country={activeCountry} />
    </section>
  );
}
