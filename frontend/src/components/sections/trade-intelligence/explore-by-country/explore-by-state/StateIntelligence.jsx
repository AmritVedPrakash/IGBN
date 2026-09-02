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

  const initialState = stateCode?.toUpperCase() || "CA";

  const [selectedState, setSelectedState] = useState(initialState);

  const defaultData = stateData[selectedState] || stateData.CA;

  const [selectedProduct, setSelectedProduct] = useState(
    defaultData.selectedProduct,
  );

  const data = useMemo(() => {
    return stateData[selectedState] || stateData.CA;
  }, [selectedState]);

  useEffect(() => {
    setSelectedProduct(data.selectedProduct);
  }, [data]);

  const handleStateChange = (newState) => {
    const nextData = stateData[newState] || stateData.CA;

    setSelectedState(newState);
    setSelectedProduct(nextData.selectedProduct);

    /*
      URL:
      /explore-by-country/US/states/CA
    */

    navigate(
      `/explore-by-country/${code || "US"}/states/${newState.toLowerCase()}`,
      {
        replace: true,
      },
    );
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section
      className="
        min-h-screen
        w-full
        bg-[#020D18]
        text-white
      "
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <StateHeader data={data} />

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
        {/* BACK */}

        <motion.button
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
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
            transition
            hover:text-[#D69A2B]
          "
        >
          <ArrowLeft size={15} />
          Back to Countries
        </motion.button>

        {/* =====================================
            FILTERS
        ===================================== */}

        <StateFilters
          selectedState={selectedState}
          selectedProduct={selectedProduct}
          onStateChange={handleStateChange}
          onProductChange={handleProductChange}
        />

        {/* =====================================
            MAP + QUICK VIEW
        ===================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-3
            xl:grid-cols-[1.75fr_0.75fr]
          "
        >
          <WeatherImpactOverview
            data={data}
            selectedState={selectedState}
            onStateChange={handleStateChange}
          />

          <QuickStateView data={data} selectedProduct={selectedProduct} />
        </div>

        {/* =====================================
            TOP PRODUCTS
        ===================================== */}

        <div className="mt-3">
          <TopProductsTable data={data} />
        </div>

        {/* =====================================
            SOURCES / PARAMETERS / GUIDE
        ===================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-3
            lg:grid-cols-3
          "
        >
          <StateDataSources data={data} />

          <StateWeatherParameters data={data} />

          <ImpactLevelGuide />
        </div>

        {/* =====================================
            CALENDAR + SEASON
        ===================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-3
            xl:grid-cols-[1.35fr_0.65fr]
          "
        >
          <CropCalendar data={data} product={selectedProduct} />

          <CurrentSeasonProgress data={data} />
        </div>

        {/* =====================================
            FORECAST / MARKET / HIGHLIGHTS
        ===================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-3
            lg:grid-cols-3
          "
        >
          <StateForecast data={data} />

          <MarketReadiness data={data} />

          <RecentHighlights data={data} />
        </div>
      </main>
    </section>
  );
}

// =============================================
// IMPACT LEVEL GUIDE
// =============================================

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
      "
    >
      <h2 className="text-[16px] font-semibold text-[#E9ECEF]">
        IMPACT LEVEL GUIDE
      </h2>

      <p className="mt-1 text-[10px] text-[#748795]">
        Weather and production impact classification
      </p>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <div>
              <p className="text-[11px] font-semibold text-[#DCE2E6]">
                {item.title}
              </p>

              <p className="mt-0.5 text-[9px] text-[#718493]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
