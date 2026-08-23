import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function AnalyzeExportPotential() {
  const [industry, setIndustry] = useState("");
  const [market, setMarket] = useState("");

  const industries = [
    "Textiles",
    "Pharmaceuticals",
    "Machinery",
    "Agriculture",
    "Chemicals",
    "Electronics",
  ];

  const markets = [
    "Germany",
    "UAE",
    "USA",
    "United Kingdom",
    "Indonesia",
    "Australia",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        flex
        h-full
        flex-col
        rounded-[11px]
        border
        border-[#263B4B]
        bg-[#041321]/90
        p-5
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]

        sm:p-6
      "
    >
      {/* Heading */}
      <h3
        className="
          text-[18px]
          font-semibold
          text-[#F3F5F6]

          sm:text-[19px]
          lg:text-[20px]
        "
      >
        Analyze Your Export Potential
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-[390px]
          text-[13px]
          leading-[1.65]
          text-[#AEB8C0]

          sm:text-[14px]
          lg:text-[15px]
        "
      >
        Select your industry and target market to get AI-powered insights,
        demand scores, and buyer matches.
      </p>

      {/* Selects */}
      <div className="mt-5 space-y-3">
        {/* Industry */}
        <div className="relative">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="
              h-[50px]
              w-full
              appearance-none
              rounded-[6px]
              border
              border-[#263B4B]
              bg-[#071522]
              px-4
              pr-11
              text-[14px]
              font-medium
              text-[#E5E8EA]
              outline-none
              transition-all

              hover:border-[#765323]
              focus:border-[#D69A2B]

              sm:text-[15px]
            "
          >
            <option value="">Select Your Industry</option>

            {industries.map((item) => (
              <option key={item} value={item} className="bg-[#071522]">
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#B7BEC4]
            "
          />
        </div>

        {/* Market */}
        <div className="relative">
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="
              h-[50px]
              w-full
              appearance-none
              rounded-[6px]
              border
              border-[#263B4B]
              bg-[#071522]
              px-4
              pr-11
              text-[14px]
              font-medium
              text-[#E5E8EA]
              outline-none
              transition-all

              hover:border-[#765323]
              focus:border-[#D69A2B]

              sm:text-[15px]
            "
          >
            <option value="">Select Target Market</option>

            {markets.map((item) => (
              <option key={item} value={item} className="bg-[#071522]">
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#B7BEC4]
            "
          />
        </div>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          mt-5
          flex
          min-h-[52px]
          w-full
          items-center
          justify-center
          gap-3
          rounded-[6px]
          border
          border-[#D69A2B]
          bg-gradient-to-r
          from-[#E1AB48]
          via-[#D69A2B]
          to-[#C88923]
          px-5
          text-[14px]
          font-semibold
          text-[#08121B]
          shadow-[0_8px_24px_rgba(214,154,43,0.18)]

          sm:text-[15px]
        "
      >
        Generate My Export Roadmap
        <ArrowRight
          size={19}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </motion.button>
    </motion.div>
  );
}
