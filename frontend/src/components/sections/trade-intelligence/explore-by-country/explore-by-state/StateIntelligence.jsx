import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import stateData, { states } from "../../../../../data/stateData";

import StateHeader from "./StateHeader";
import StateFilters from "./StateFilters";

import WeatherImpactOverview from "./WeatherImpactOverview";
import QuickStateView from "./QuickStateView";

import TopProductsTable from "./TopProductsTable";

import StateDataSources from "./StateDataSources";
import StateWeatherParameters from "./StateWeatherParameters";

import CropCalendar from "./CropCalendar";
import CurrentSeasonProgress from "./CurrentSeasonProgress";
import StateForecast from "./StateForecast";
import MarketReadiness from "./MarketReadiness";
import RecentHighlights from "./RecentHighlights";

export default function StateIntelligence() {
  const navigate = useNavigate();

  const { code, stateCode } = useParams();

  // ============================================
  // INITIAL STATE
  // ============================================

  const initialState = stateCode?.toUpperCase() || "CA";

  const [selectedState, setSelectedState] = useState(initialState);

  const [selectedProduct, setSelectedProduct] = useState("");

  // ============================================
  // CURRENT STATE DATA
  // ============================================

  const data = useMemo(() => {
    return stateData[selectedState] || stateData.CA;
  }, [selectedState]);

  // ============================================
  // SET DEFAULT PRODUCT
  // ============================================

  useEffect(() => {
    if (data?.selectedProduct) {
      setSelectedProduct(data.selectedProduct);
    }
  }, [data]);

  // ============================================
  // STATE CHANGE
  // ============================================

  const handleStateChange = (newState) => {
    const nextData = stateData[newState] || stateData.CA;

    setSelectedState(newState);

    setSelectedProduct(nextData.selectedProduct || "");

    navigate(
      `/explore-by-country/${code || "US"}/states/${newState.toLowerCase()}`,
      {
        replace: true,
      },
    );
  };

  // ============================================
  // PRODUCT CHANGE
  // ============================================

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  // ============================================
  // PAGE
  // ============================================

  return (
    <section
      className="
        min-h-screen
        w-full
        bg-[#020D18]
        text-white
      "
    >
      {/* =====================================================
          STATE HEADER
      ===================================================== */}

      <StateHeader data={data} />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          mx-auto
          w-full
          max-w-[1700px]
          px-3
          py-4
          sm:px-5
          lg:px-6
        "
      >
        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <motion.button
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          type="button"
          onClick={() => navigate(-1)}
          className="
            mb-3
            flex
            items-center
            gap-2
            text-[12px]
            font-medium
            text-[#7C8F9E]
            transition-all
            duration-200
            hover:text-[#D69A2B]
          "
        >
          <ArrowLeft size={15} />
          Back to Countries
        </motion.button>

        {/* =====================================================
            FILTERS
            FULL WIDTH
        ===================================================== */}

        <StateFilters
          selectedState={selectedState}
          selectedProduct={selectedProduct}
          onStateChange={handleStateChange}
          onProductChange={handleProductChange}
        />

        {/* =====================================================
            MAIN DASHBOARD
           
            LEFT  = MAIN DATA
            RIGHT = STATE DETAILS
        ===================================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-3
            xl:grid-cols-[2fr_1fr]
            items-start
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div
            className="
              min-w-0
              space-y-3
            "
          >
            {/* ---------------------------------------------
                WEATHER MAP
            --------------------------------------------- */}

            <WeatherImpactOverview
              data={data}
              selectedState={selectedState}
              onStateChange={handleStateChange}
            />

            {/* ---------------------------------------------
                TOP PRODUCTS
            --------------------------------------------- */}

            <TopProductsTable data={data} />

            {/* ---------------------------------------------
                BOTTOM INFORMATION
            --------------------------------------------- */}

            <div
              className="
                grid
                grid-cols-1
                gap-3
                md:grid-cols-3
              "
            >
              <StateDataSources data={data} />

              <StateWeatherParameters data={data} />

              <ImpactLevelGuide />
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside
            className="
              min-w-0
              space-y-3
            "
          >
            {/* ---------------------------------------------
                STATE DETAIL / CALIFORNIA
            --------------------------------------------- */}

            <QuickStateView data={data} selectedProduct={selectedProduct} />

            {/* ---------------------------------------------
                CROP CALENDAR
            --------------------------------------------- */}

            <CropCalendar data={data} product={selectedProduct} />

            {/* ---------------------------------------------
                SEASON PROGRESS + FORECAST
            --------------------------------------------- */}

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                xl:grid-cols-2
              "
            >
              <CurrentSeasonProgress data={data} />

              <StateForecast data={data} />
            </div>

            {/* ---------------------------------------------
                MARKET READINESS + RECENT HIGHLIGHTS
            --------------------------------------------- */}

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                xl:grid-cols-2
              "
            >
              <MarketReadiness data={data} />

              <RecentHighlights data={data} />
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
}

// =============================================================
// IMPACT LEVEL GUIDE
// =============================================================

function ImpactLevelGuide() {
  const items = [
    {
      color: "#83A93D",
      title: "Low / Minimal",
      description: "No significant impact",
    },

    {
      color: "#D5A52F",
      title: "Moderate",
      description: "Some impact on yield / quality",
    },

    {
      color: "#D9782B",
      title: "High",
      description: "Likely impact on production",
    },

    {
      color: "#C94E4E",
      title: "Severe",
      description: "Major production impact",
    },

    {
      color: "#8A949D",
      title: "No Data",
      description: "Data currently unavailable",
    },
  ];

  return (
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
        duration: 0.5,
        delay: 0.1,
      }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_8px_25px_rgba(0,0,0,0.18)]
      "
    >
      {/* TITLE */}

      <h2
        className="
          text-[16px]
          font-semibold
          text-[#E9ECEF]
        "
      >
        IMPACT LEVEL GUIDE
      </h2>

      <p
        className="
          mt-1
          text-[10px]
          text-[#748795]
        "
      >
        Weather and production impact classification
      </p>

      {/* ITEMS */}

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-3
                w-3
                shrink-0
                rounded-full
              "
              style={{
                backgroundColor: item.color,
              }}
            />

            <div className="min-w-0">
              <p
                className="
                  text-[11px]
                  font-semibold
                  text-[#DCE2E6]
                "
              >
                {item.title}
              </p>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  text-[#718493]
                "
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
