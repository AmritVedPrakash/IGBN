import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import AnalyzeExportPotential from "./AnalyzeExportPotential";
import TopMarketOpportunities from "./TopMarketOpportunities";
import ExportGrowthOverview from "./ExportGrowthOverview";

export default function InteractiveExportCommandCenter() {
  return (
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
        lg:py-12
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[130px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          mx-auto
          max-w-[1650px]
          rounded-[14px]
          border
          border-[#765323]/80
          bg-[#020F1B]
          p-3
          shadow-[0_18px_50px_rgba(0,0,0,0.35)]

          sm:p-4
          lg:p-5
        "
      >
        {/* =====================================================
            TOP TITLE
        ====================================================== */}
        <div
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
          "
        >
          {/* Left Line */}
          <div
            className="
              hidden
              h-[1px]
              max-w-[210px]
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#8D6528]

              sm:block
            "
          />

          {/* Dot */}
          <span
            className="
              hidden
              h-[5px]
              w-[5px]
              rotate-45
              bg-[#D69A2B]

              sm:block
            "
          />

          {/* Title */}
          <h2
            className="
              text-center
              text-[20px]
              font-semibold
              uppercase
              tracking-[0.03em]
              text-[#F3F4F5]

              sm:text-[23px]
              md:text-[25px]
              lg:text-[27px]
            "
          >
            Interactive Export Command Center
          </h2>

          {/* AI Powered */}
          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#805922]
              bg-[#D69A2B]/[0.05]
              px-3
              py-1.5
              text-[12px]
              font-semibold
              uppercase
              text-[#D69A2B]

              md:flex
            "
          >
            <Sparkles size={14} strokeWidth={1.8} />
            AI-Powered
          </div>

          {/* Dot */}
          <span
            className="
              hidden
              h-[5px]
              w-[5px]
              rotate-45
              bg-[#D69A2B]

              sm:block
            "
          />

          {/* Right Line */}
          <div
            className="
              hidden
              h-[1px]
              max-w-[210px]
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#8D6528]

              sm:block
            "
          />
        </div>

        {/* Mobile AI Label */}
        <div
          className="
            mb-5
            flex
            justify-center

            md:hidden
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#805922]
              bg-[#D69A2B]/[0.05]
              px-3
              py-1.5
              text-[12px]
              font-semibold
              uppercase
              text-[#D69A2B]
            "
          >
            <Sparkles size={14} />
            AI-Powered
          </div>
        </div>

        {/* =====================================================
            THREE PARTS
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            lg:grid-cols-[0.95fr_0.85fr_1.4fr]
          "
        >
          {/* PART 1 */}
          <AnalyzeExportPotential />

          {/* PART 2 */}
          <TopMarketOpportunities />

          {/* PART 3 */}
          <ExportGrowthOverview />
        </div>
      </motion.div>
    </section>
  );
}
