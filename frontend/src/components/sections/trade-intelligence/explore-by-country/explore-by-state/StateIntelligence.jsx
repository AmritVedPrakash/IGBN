import React, { useEffect, useMemo, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import {
  getCountryConfig,
  getStatesByCountry,
  getStateByCode,
  getDefaultState,
} from "../../../../../data/stateData";

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

/*
=========================================================
STATE INTELLIGENCE
=========================================================
*/

export default function StateIntelligence() {
  const navigate = useNavigate();

  const { code, stateCode } = useParams();

  // =====================================================
  // COUNTRY CODE FROM URL
  // =====================================================
  //
  // US
  // IN
  // CA
  // AU
  //
  // IMPORTANT:
  // NO DEFAULT "US"
  // =====================================================

  const requestedCountryCode = String(code || "").toUpperCase();

  // =====================================================
  // COUNTRY INFORMATION
  // =====================================================

  const countryInfo = useMemo(() => {
    if (!requestedCountryCode) {
      return null;
    }

    return getCountryConfig(requestedCountryCode);
  }, [requestedCountryCode]);

  // =====================================================
  // ACTUAL COUNTRY CODE
  // =====================================================

  const countryCode = countryInfo?.code || requestedCountryCode;

  // =====================================================
  // AVAILABLE STATES
  // =====================================================

  const availableStates = useMemo(() => {
    if (!countryCode) {
      return [];
    }

    return getStatesByCountry(countryCode);
  }, [countryCode]);

  // =====================================================
  // DEFAULT STATE
  // =====================================================

  const defaultStateData = useMemo(() => {
    if (!countryCode) {
      return null;
    }

    return getDefaultState(countryCode);
  }, [countryCode]);

  const defaultStateCode = defaultStateData?.code || "";

  // =====================================================
  // STATE CODE FROM URL
  // =====================================================

  const requestedStateCode = String(stateCode || "").toUpperCase();

  // =====================================================
  // VALID URL STATE
  // =====================================================

  const routeStateData = useMemo(() => {
    if (!countryCode || !requestedStateCode) {
      return null;
    }

    return getStateByCode(countryCode, requestedStateCode);
  }, [countryCode, requestedStateCode]);

  // =====================================================
  // INITIAL SELECTED STATE
  // =====================================================

  const initialStateCode = routeStateData?.code || defaultStateCode || "";

  const [selectedState, setSelectedState] = useState(initialStateCode);

  // =====================================================
  // SELECTED PRODUCT
  // =====================================================

  const [selectedProduct, setSelectedProduct] = useState("");

  // =====================================================
  // CURRENT STATE DATA
  // =====================================================

  const data = useMemo(() => {
    if (!countryCode || !selectedState) {
      return null;
    }

    return getStateByCode(countryCode, selectedState) || null;
  }, [countryCode, selectedState]);

  // =====================================================
  // COUNTRY / URL SYNC
  // =====================================================

  useEffect(() => {
    /*
    If valid state exists in URL:
    use it.
    */

    if (routeStateData) {
      setSelectedState(routeStateData.code);

      return;
    }

    /*
    No state in URL.

    Example:

    /explore-by-country/IN/states

    Automatically use India's default state.
    */

    if (defaultStateCode) {
      setSelectedState(defaultStateCode);

      /*
      Also clean URL.

      /IN/states
             ↓
      /IN/states/mh
      */

      navigate(
        `/explore-by-country/${countryCode}/states/${defaultStateCode.toLowerCase()}`,
        {
          replace: true,
        },
      );
    }
  }, [routeStateData, defaultStateCode, countryCode, navigate]);

  // =====================================================
  // DEFAULT PRODUCT
  // =====================================================

  useEffect(() => {
    if (data?.selectedProduct) {
      setSelectedProduct(data.selectedProduct);
    } else {
      setSelectedProduct("");
    }
  }, [data]);

  // =====================================================
  // STATE CHANGE
  // =====================================================

  const handleStateChange = (newState) => {
    const normalizedState = String(newState || "").toUpperCase();

    const nextStateData = getStateByCode(countryCode, normalizedState);

    /*
    Only states belonging to
    current country are allowed.
    */

    if (!nextStateData) {
      console.warn(`No state data found for ${countryCode}/${normalizedState}`);

      return;
    }

    setSelectedState(normalizedState);

    setSelectedProduct(
      nextStateData.selectedProduct || nextStateData.topProducts?.[0] || "",
    );

    navigate(
      `/explore-by-country/${countryCode}/states/${normalizedState.toLowerCase()}`,
      {
        replace: true,
      },
    );
  };

  // =====================================================
  // PRODUCT CHANGE
  // =====================================================

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  // =====================================================
  // COUNTRY CONFIG NOT FOUND
  // =====================================================

  if (!countryInfo) {
    return (
      <StateUnavailable
        title="Country State Data Unavailable"
        description={`State intelligence configuration is not available for ${requestedCountryCode || "this country"}.`}
        onBack={() => navigate(-1)}
      />
    );
  }

  // =====================================================
  // NO STATE DATA
  // =====================================================

  if (availableStates.length === 0) {
    return (
      <StateUnavailable
        title="State Data Unavailable"
        description={`State intelligence data is not currently available for ${countryInfo.name}.`}
        onBack={() => navigate(`/explore-by-country/${countryCode}`)}
      />
    );
  }

  // =====================================================
  // DATA NOT READY
  // =====================================================

  if (!data) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#020D18]
        "
      >
        <div
          className="
            h-8
            w-8
            animate-spin
            rounded-full
            border-2
            border-[#29445A]
            border-t-[#D69A2B]
          "
        />
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <section
      className="
        min-h-screen
        w-full
        bg-[#020D18]
        text-white
      "
    >
      {/* ===============================================
          HEADER
      ================================================ */}

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
        {/* =============================================
            BACK
        ============================================== */}

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
          onClick={() => navigate(`/explore-by-country/${countryCode}`)}
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
          Back to {countryInfo.name}
        </motion.button>

        {/* =============================================
            FILTERS
        ============================================== */}

        <StateFilters
          selectedState={selectedState}
          selectedProduct={selectedProduct}
          onStateChange={handleStateChange}
          onProductChange={handleProductChange}
          states={availableStates}
        />

        {/* =============================================
            DASHBOARD
        ============================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            items-start
            gap-3
            xl:grid-cols-[2fr_1fr]
          "
        >
          {/* ===========================================
              LEFT
          ============================================ */}

          <div
            className="
              min-w-0
              space-y-3
            "
          >
            {/* =========================================
                LEAFLET COUNTRY MAP
            ========================================== */}

            <WeatherImpactOverview
              data={data}
              selectedState={selectedState}
              onStateChange={handleStateChange}
              /*
              THIS CONTROLS MAP:

              US:
              iso3 = USA
              -> USA-ADM1.geojson

              IN:
              iso3 = IND
              -> IND-ADM1.geojson
              */

              countryIso3={countryInfo.iso3}
              countryName={countryInfo.name}
              states={availableStates}
            />

            {/* PRODUCTS */}

            <TopProductsTable data={data} />

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

          {/* ===========================================
              RIGHT
          ============================================ */}

          <aside
            className="
              min-w-0
              space-y-3
            "
          >
            <QuickStateView data={data} selectedProduct={selectedProduct} />

            <CropCalendar data={data} product={selectedProduct} />

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              <CurrentSeasonProgress data={data} />

              <StateForecast data={data} />
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
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

/*
=========================================================
UNAVAILABLE COMPONENT
=========================================================
*/

function StateUnavailable({ title, description, onBack }) {
  return (
    <section
      className="
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        bg-[#020D18]
        px-4
        text-white
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          w-full
          max-w-[420px]
          rounded-[8px]
          border
          border-[#193249]
          bg-[#03111F]
          p-6
          text-center
        "
      >
        <h2
          className="
            text-[20px]
            font-semibold
            text-[#E9ECEF]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-2
            text-[12px]
            leading-6
            text-[#718493]
          "
        >
          {description}
        </p>

        <button
          type="button"
          onClick={onBack}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-[6px]
            border
            border-[#765323]
            px-4
            py-2
            text-[12px]
            font-semibold
            text-[#D69A2B]
            transition
            hover:bg-[#D69A2B]/10
          "
        >
          <ArrowLeft size={15} />
          Go Back
        </button>
      </motion.div>
    </section>
  );
}

/*
=========================================================
IMPACT LEVEL GUIDE
=========================================================
*/

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

      <div
        className="
          mt-4
          space-y-3
        "
      >
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

            <div>
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
