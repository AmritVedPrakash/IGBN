import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import currencyIntelligenceData from "../../../../data/currencyIntelligenceData";

import CurrencyHeader from "./CurrencyHeader";
import CurrencyOverview from "./CurrencyOverview";
import CurrencyKeyStats from "./CurrencyKeyStats";
import CurrencyPerformance from "./CurrencyPerformance";
import CurrencyHistoricalChart from "./CurrencyHistoricalChart";
import MajorCurrencyPairs from "./MajorCurrencyPairs";
import ComponentBreakdown from "./ComponentBreakdown";
import HistoricalPerformance from "./HistoricalPerformance";
import LiquidityIndicators from "./LiquidityIndicators";
import LatestNewsSection from "./LatestNewsSection";

export default function CurrencyMarketIntelligence() {
  const { code } = useParams();

  const currency =
    currencyIntelligenceData[code?.toUpperCase()] ||
    currencyIntelligenceData.USD;

  return (
    <section className="min-h-screen w-full bg-[#020D18] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* HEADER */}
        <CurrencyHeader data={currency} />

        {/* TOP 3 CARDS */}
        <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[1.7fr_0.8fr_1fr]">
          <CurrencyOverview data={currency} />

          <CurrencyKeyStats data={currency} />

          <CurrencyPerformance data={currency} />
        </div>

        {/* HISTORICAL + PAIRS */}
        <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.7fr_1fr]">
          <CurrencyHistoricalChart data={currency} />

          <MajorCurrencyPairs data={currency} />
        </div>

        {/* BOTTOM 3 */}
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
          <ComponentBreakdown data={currency} />

          <HistoricalPerformance data={currency} />

          <LiquidityIndicators data={currency} />
        </div>

        {/* LAST UPDATE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-4
            flex
            justify-end
            text-[10px]
            text-[#697883]
          "
        >
          Last Updated: 31 Aug 2026, 10:30 AM (IST)
        </motion.div>
      </div>
      <div>
        <LatestNewsSection/>
      </div>
    </section>
  );
}
