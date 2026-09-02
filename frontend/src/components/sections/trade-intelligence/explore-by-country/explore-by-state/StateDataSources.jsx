import React from "react";
import { motion } from "framer-motion";
import { Database, Globe2, Satellite } from "lucide-react";

export default function StateDataSources({ data }) {
  const sources = [
    {
      name: "USDA",
      description: "Agriculture & crop data",
      icon: Database,
    },
    {
      name: "NOAA",
      description: "Weather & climate data",
      icon: Satellite,
    },
    {
      name: "World Bank",
      description: "Economic indicators",
      icon: Globe2,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[16px] font-semibold text-[#E9ECEF]">DATA SOURCES</h2>

      <p className="mt-1 text-[10px] text-[#718493]">
        Sources powering {data.name} intelligence
      </p>

      <div className="mt-4 space-y-3">
        {sources.map((source) => {
          const Icon = source.icon;

          return (
            <div
              key={source.name}
              className="
                flex
                items-center
                gap-3
                rounded-[6px]
                border
                border-[#1E3548]
                bg-[#071522]
                p-3
              "
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#102A42] text-[#D69A2B]">
                <Icon size={16} />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#DCE2E6]">
                  {source.name}
                </p>

                <p className="mt-0.5 text-[10px] text-[#718493]">
                  {source.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
