import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Download, ArrowDown, Database } from "lucide-react";

export default function CountryHeader({ data }) {
  const navigate = useNavigate();

  const tabs = [
    "Overview",
    "Trade & Economy",
    "Trade News",
    "Policy Updates",
    "Companies & Markets",
    "AI Insights",
    "Reports",
    "States", // NEW
  ];

  const handleTabClick = (tab) => {
    if (tab === "States") {
      navigate(`/explore-by-country/${data.code}/states`);

      return;
    }

    // Abhi baaki tabs ke liye existing behavior
    // same rahega.
  };

  return (
    <div className="border-b border-[#152C3F] bg-[#020D18]">
      {/* ================================
          HEADER
      ================================= */}

      <div
        className="
          flex
          flex-col
          gap-5
          px-4
          py-4
          lg:px-6
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        {/* LEFT */}

        <div className="flex items-center gap-4">
          <motion.img
            src={data.flag}
            alt={`${data.name} flag`}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              h-[48px]
              w-[48px]
              shrink-0
              rounded-full
              border
              border-[#30485B]
              object-cover
              shadow-[0_4px_15px_rgba(0,0,0,0.4)]
            "
          />

          <div>
            <motion.h1
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                text-[22px]
                font-semibold
                uppercase
                tracking-[0.01em]
                text-[#F1F3F5]
                sm:text-[26px]
                lg:text-[28px]
              "
            >
              {data.name} Trade Intelligence Hub
            </motion.h1>

            <p
              className="
                mt-1
                text-[12px]
                text-[#8999A6]
                sm:text-[16px]
              "
            >
              {data.description}
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">
          {/* DATA SOURCES */}

          <div className="hidden items-center gap-2 lg:flex">
            <Database size={16} className="text-[#D69A2B]" />

            <span className="text-[15px] text-[#778895]">Data Sources:</span>

            <span className="text-[16px] font-semibold text-[#CBD2D7]">
              WORLD BANK
            </span>

            <span className="text-[15px] font-semibold text-[#CBD2D7]">
              IMF
            </span>

            <span className="text-[15px] font-semibold text-[#CBD2D7]">
              EIA
            </span>
          </div>

          {/* DOWNLOAD */}

          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-[5px]
              border
              border-[#805D27]
              bg-[#0A1723]
              px-3
              py-2
              text-[15px]
              font-semibold
              text-[#D69A2B]
              transition-all
              hover:bg-[#D69A2B]/10
            "
          >
            <Download size={15} />
            Download Country Report
            <ArrowDown size={15} />
          </button>
        </div>
      </div>

      {/* ================================
          LAST UPDATED
      ================================= */}

      <div className="flex justify-end px-4 pb-2 lg:px-6">
        <span
          className="
            text-[9px]
            text-[#657682]
            sm:text-[12px]
          "
        >
          Last Updated: {data.updated}
        </span>
      </div>

      {/* ================================
          NAVIGATION
      ================================= */}

      <div
        className="
          overflow-x-auto
          border-t
          border-[#102536]
          px-4
          lg:px-6
        "
      >
        <div className="flex min-w-max">
          {tabs.map((tab, index) => {
            const isStatesTab = tab === "States";

            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`
                  border-r
                  border-[#102536]
                  px-4
                  py-3
                  text-[10px]
                  font-medium
                  transition-all
                  duration-200
                  sm:text-[15px]

                  ${
                    isStatesTab
                      ? `
                        text-[#8796A2]
                        hover:bg-[#071725]
                        hover:text-[#D69A2B]
                      `
                      : index === 0
                        ? `
                          border-b-2
                          border-b-[#D69A2B]
                          bg-[#0A1825]
                          text-[#D69A2B]
                        `
                        : `
                          text-[#8796A2]
                          hover:bg-[#071725]
                          hover:text-[#D9DEE2]
                        `
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
