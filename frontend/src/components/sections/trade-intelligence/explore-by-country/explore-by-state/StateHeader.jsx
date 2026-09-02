import React from "react";
import { motion } from "framer-motion";
import { Database, Download, MapPin } from "lucide-react";

export default function StateHeader({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        border-b
        border-[#193249]
        bg-[#020D18]
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1700px]
          flex-col
          gap-4
          px-4
          py-5
          sm:px-6
          lg:px-8
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-[48px]
              w-[48px]
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#30475B]
              bg-[#071522]
            "
          >
            {data.flag ? (
              <img
                src={data.flag}
                alt={data.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <MapPin size={22} className="text-[#D69A2B]" />
            )}
          </div>

          <div>
            <h1
              className="
                text-[21px]
                font-semibold
                tracking-tight
                text-[#F1F3F5]
                sm:text-[26px]
                lg:text-[29px]
              "
            >
              {data.name.toUpperCase()} STATE INTELLIGENCE
            </h1>

            <p
              className="
                mt-1
                text-[12px]
                text-[#8798A7]
                sm:text-[13px]
              "
            >
              Real-time weather, crop calendar & market readiness
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            className="
              flex
              items-center
              gap-2
              text-[11px]
              text-[#8798A7]
              sm:text-[12px]
            "
          >
            <Database size={14} />

            <span>Data Sources:</span>

            <span className="font-semibold text-[#D8DEE3]">USDA</span>

            <span className="font-semibold text-[#D8DEE3]">NOAA</span>

            <span className="font-semibold text-[#D8DEE3]">World Bank</span>
          </div>

          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-[5px]
              border
              border-[#72531F]
              px-3
              py-2
              text-[11px]
              font-medium
              text-[#D69A2B]
              transition
              hover:bg-[#D69A2B]
              hover:text-[#071522]
            "
          >
            <Download size={14} />
            Download State Report
          </button>
        </div>
      </div>

      <div
        className="
          border-t
          border-[#14283A]
          bg-[#03111F]
        "
      >
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {[
              "Overview",
              "Weather",
              "Crop Calendar",
              "Market Readiness",
              "Trade Insights",
            ].map((item, index) => (
              <button
                key={item}
                type="button"
                className={`
                  whitespace-nowrap
                  border-b-2
                  px-4
                  py-3
                  text-[11px]
                  font-medium
                  transition
                  sm:text-[12px]
                  ${
                    index === 0
                      ? "border-[#D69A2B] text-[#D69A2B]"
                      : "border-transparent text-[#8293A1] hover:text-[#DCE2E6]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
