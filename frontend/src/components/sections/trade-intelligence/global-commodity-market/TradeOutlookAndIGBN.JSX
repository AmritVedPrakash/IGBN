import React from "react";
import { motion } from "framer-motion";
import { FileText, TrendingUp, CircleDollarSign, Star } from "lucide-react";

const outlookData = [
  {
    period: "Short Term (1–3 Months)",
    status: "Bullish",
    description:
      "Supply concerns in Brazil and Vietnam are likely to support higher prices.",
    icon: FileText,
  },
  {
    period: "Medium Term (3–12 Months)",
    status: "Moderately Bullish",
    description:
      "Balanced outlook with steady demand and limited expansion in supply.",
    icon: TrendingUp,
  },
  {
    period: "Long Term (2026 & Beyond)",
    status: "Positive",
    description:
      "Rising consumption and sustainability focus are expected to support long-term growth.",
    icon: CircleDollarSign,
  },
];

export default function TradeOutlookAndIGBN({ data }) {
  const outlook = data?.outlook || outlookData;

  const insight = data?.insight || {
    title: "IGBN INSIGHT",
    text: "Coffee prices are expected to remain firm in the near term due to weather risks in major producing countries and strong global demand. Importers may consider early procurement to mitigate price risk.",
    impact: "High",
    risk: "Moderate-High",
  };

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.55fr_1fr]">
      {/* =====================================================
          TRENDS & OUTLOOK
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
        }}
        className="
          overflow-hidden
          rounded-[9px]
          border
          border-[#193249]
          bg-[#03111F]
          p-4
          shadow-[0_8px_30px_rgba(0,0,0,0.20)]
          sm:p-5
          lg:p-6
        "
      >
        {/* Header */}

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <h2 className="text-[18px] font-semibold text-[#E9ECEF] sm:text-[20px]">
            TRENDS & OUTLOOK
          </h2>

          <span className="text-[11px] text-[#7D8B96] sm:text-[12px]">
            Source: World Bank Commodity Markets Outlook – Apr 2025
          </span>
        </div>

        {/* Outlook Cards */}

        <div className="mt-5 grid grid-cols-1 divide-y divide-[#193249] md:grid-cols-3 md:divide-x md:divide-y-0">
          {outlook.map((item, index) => {
            const Icon = item.icon || TrendingUp;

            return (
              <motion.div
                key={item.period}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="
                  px-0
                  py-4
                  first:pt-0
                  last:pb-0
                  md:px-5
                  md:py-1
                  md:first:pl-0
                  md:last:pr-0
                "
              >
                {/* Icon + Period */}

                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-[6px]
                      border
                      border-[#415A38]
                      bg-[#102117]
                      text-[#8DBB4A]
                    "
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <span className="text-[13px] font-medium text-[#AEB8BE] sm:text-[14px]">
                    {item.period}
                  </span>
                </div>

                {/* Status */}

                <div className="mt-3">
                  <h3 className="text-[17px] font-semibold text-[#83B43D] sm:text-[18px]">
                    {item.status}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-2 text-[12px] leading-5 text-[#9BA7AF] sm:text-[13px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* =====================================================
          IGBN INSIGHT
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.1,
        }}
        className="
          rounded-[9px]
          border
          border-[#193249]
          bg-[#03111F]
          p-4
          shadow-[0_8px_30px_rgba(0,0,0,0.20)]
          sm:p-5
          lg:p-6
        "
      >
        {/* Header */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#765824]
              bg-[#241B0C]
              text-[#D49A2D]
            "
          >
            <Star size={19} fill="currentColor" strokeWidth={1.5} />
          </div>

          <h2 className="text-[18px] font-semibold text-[#E9ECEF] sm:text-[20px]">
            {insight.title}
          </h2>
        </div>

        {/* Insight Text */}

        <p className="mt-4 text-[13px] leading-6 text-[#B7C0C6] sm:text-[14px]">
          {insight.text}
        </p>

        {/* Impact + Risk */}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#193249] pt-4">
          <span className="text-[12px] font-semibold text-[#D49A2D] sm:text-[13px]">
            Impact on Trade:{" "}
            <span className="text-[#D7A03A]">{insight.impact}</span>
          </span>

          <span className="hidden text-[#566875] sm:block">|</span>

          <span className="text-[12px] font-semibold text-[#D49A2D] sm:text-[13px]">
            Risk: <span className="text-[#D7A03A]">{insight.risk}</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
