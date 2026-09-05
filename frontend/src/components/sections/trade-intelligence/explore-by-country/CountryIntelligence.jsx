import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { countryDetails, countries } from "./CountryData";

import CountryHeader from "./CountryHeader";
import CountryMetrics from "./CountryMetrics";
import EconomyOverview from "./EconomyOverview";
import TradePartners from "./TradePartners";
import AITradeImpact from "./AITradeImpact";
import LatestBusinessNews from "./LatestBusinessNews";
import GeopoliticalImpact from "./GeopoliticalImpact";
import GlobalEconomicImpact from "./GlobalEconomicImpact";
import QuickInsights from "./QuickInsights";

export default function CountryIntelligence() {
  const { code, id } = useParams();
  const navigate = useNavigate();

  // =====================================================
  // GET PARAMETER
  // Supports both:
  // /country/:code
  // /country/:id
  // =====================================================

  const countryParam = (code || id || "").trim();

  const normalizedParam = countryParam.toLowerCase();

  // =====================================================
  // FIND COUNTRY
  // =====================================================

  let basicCountry = countries.find((item) => {
    const itemCode = String(item.code || "").toLowerCase();
    const itemId = String(item.id || "").toLowerCase();
    const itemName = String(item.name || "").toLowerCase();

    return (
      itemCode === normalizedParam ||
      itemId === normalizedParam ||
      itemName === normalizedParam
    );
  });

  // =====================================================
  // COUNTRY CODE
  // =====================================================

  const countryCode = basicCountry?.code
    ? String(basicCountry.code).toUpperCase()
    : countryParam.toUpperCase();

  // =====================================================
  // GET DETAILED DATA
  // =====================================================

  let data = countryDetails[countryCode];

  // =====================================================
  // FALLBACK
  // If detailed data doesn't exist for a country,
  // use the basic country information and US structure.
  // =====================================================

  if (!data && basicCountry) {
    const fallbackData =
      countryDetails.US ||
      countryDetails.USA ||
      Object.values(countryDetails)[0];

    if (fallbackData) {
      data = {
        ...fallbackData,

        code: basicCountry.code,
        name: basicCountry.name,
        flag: basicCountry.flag,
      };
    }
  }

  // =====================================================
  // COUNTRY NOT FOUND
  // =====================================================

  if (!data) {
    return (
      <section
        className="
          flex
          min-h-[70vh]
          w-full
          items-center
          justify-center
          bg-[#020D18]
          px-4
        "
      >
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
            duration: 0.5,
          }}
          className="
            w-full
            max-w-[420px]
            rounded-[10px]
            border
            border-[#193249]
            bg-[#03111F]
            p-8
            text-center
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
          "
        >
          <h1
            className="
              text-[22px]
              font-semibold
              text-white
              sm:text-[25px]
            "
          >
            Country Not Found
          </h1>

          <p
            className="
              mt-2
              text-[13px]
              leading-6
              text-[#7F909E]
            "
          >
            We couldn't find trade intelligence for this country.
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-[6px]
              border
              border-[#765323]
              bg-[#071522]
              px-5
              py-2.5
              text-[13px]
              font-semibold
              text-[#D69A2B]
              transition-all
              duration-300
              hover:border-[#D69A2B]
              hover:bg-[#D69A2B]/[0.07]
            "
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </motion.div>
      </section>
    );
  }

  // =====================================================
  // MAIN PAGE
  // =====================================================

  return (
    <section className="min-h-screen w-full bg-[#020D18]">
      {/* =================================================
          COUNTRY HEADER
      ================================================= */}

      <div className="w-full border-b border-[#14283A] bg-[#020C17]">
        <div className="mx-auto w-full max-w-[1700px]">
          <CountryHeader data={data} countryCode={countryCode} />
        </div>
      </div>

      <div
        className="
          mx-auto
          max-w-[1700px]
          px-3
          py-4
          sm:px-5
          sm:py-5
          lg:px-6
          lg:py-6
        "
      >
        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <motion.button
          initial={{
            opacity: 0,
            x: -12,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          type="button"
          onClick={() => navigate(-1)}
          className="
            mb-4
            flex
            items-center
            gap-2
            text-[12px]
            font-medium
            text-[#718696]
            transition-all
            duration-300
            hover:text-[#D69A2B]
            sm:text-[13px]
          "
        >
          <ArrowLeft size={15} />
          Back to Countries
        </motion.button>

        {/* =================================================
            KEY METRICS
        ================================================= */}

        <CountryMetrics data={data} />

        {/* =================================================
            MAIN INTELLIGENCE GRID
        ================================================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            xl:grid-cols-3
          "
        >
          {/* ECONOMY */}

          <EconomyOverview data={data} />

          {/* TOP IMPORT PARTNERS */}

          <div className=" min-w-0">
            <TradePartners
              data={{
                ...data,
              }}
            />
          </div>

          {/* AI TRADE IMPACT */}

          <AITradeImpact data={data} />
        </div>

        {/* =================================================
            FULL TRADE PARTNERS
        ================================================= */}

        {/* <div className="mt-4 min-w-0">
          <TradePartners data={data} />
        </div> */}

        {/* =================================================
            NEWS + GEOPOLITICAL IMPACT
        ================================================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            xl:grid-cols-2
          "
        >
          <LatestBusinessNews data={data} />

          <GeopoliticalImpact data={data} />
        </div>

        {/* =================================================
            GLOBAL EVENT / ECONOMIC IMPACT
        ================================================= */}

        <div className="mt-4">
          <GlobalEconomicImpact data={data} />
        </div>
      </div>
      <div>
        <QuickInsights />
      </div>
    </section>
  );
}
