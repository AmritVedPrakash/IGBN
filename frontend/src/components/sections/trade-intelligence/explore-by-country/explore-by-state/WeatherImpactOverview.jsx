import React from "react";
import { motion } from "framer-motion";
import { Thermometer, CloudRain, TriangleAlert, Sprout } from "lucide-react";

import CountryStateMap from "./CountryStateMap";

/*
=========================================================
DEFAULT STATES

Abhi fallback ke liye tumhare existing US states rakhe hain.

Later StateIntelligence.jsx se dynamic states pass honge:
states={availableStates}
=========================================================
*/

const defaultStates = [
  {
    code: "WA",
    name: "Washington",
  },
  {
    code: "CA",
    name: "California",
  },
  {
    code: "TX",
    name: "Texas",
  },
  {
    code: "IA",
    name: "Iowa",
  },
  {
    code: "FL",
    name: "Florida",
  },
];

/*
=========================================================
WEATHER IMPACT OVERVIEW
=========================================================
*/

export default function WeatherImpactOverview({
  data,
  selectedState,
  onStateChange,

  /*
  Dynamic country props

  USA
  IND
  CAN
  AUS
  etc.
  */

  countryIso3 = "USA",
  countryName = "United States",

  /*
  States available in your stateData

  [
    {
      code: "CA",
      name: "California"
    }
  ]
  */

  states = defaultStates,
}) {
  /*
  =======================================================
  SAFETY
  =======================================================
  */

  if (!data) {
    return null;
  }

  /*
  =======================================================
  WEATHER VALUES
  =======================================================
  */

  const temperatureStatus = data?.weather?.temperature?.status || "No Data";

  const rainfallStatus = data?.weather?.rainfall?.status || "No Data";

  const extremeWeatherStatus =
    data?.weather?.extremeWeather?.status || "No Data";

  const cropResponseStatus = data?.weather?.cropResponse?.status || "No Data";

  /*
  =======================================================
  PAGE
  =======================================================
  */

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.55,
      }}
      className="
        overflow-hidden
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          border-b
          border-[#193249]
          px-4
          py-3
        "
      >
        <div>
          <h2
            className="
              text-[16px]
              font-semibold
              text-[#E9ECEF]
              sm:text-[20px]
            "
          >
            WEATHER IMPACT OVERVIEW
          </h2>

          <p
            className="
              mt-0.5
              text-[12px]
              text-[#758797]
              sm:text-[14px]
            "
          >
            Click a state to view detailed intelligence
          </p>
        </div>

        <span
          className="
            shrink-0
            text-[11px]
            text-[#718391]
            sm:text-[14px]
          "
        >
          May – Jul 2026
        </span>
      </div>

      {/* =================================================
          MAP + LEGEND
      ================================================= */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_180px]
        "
      >
        {/* =================================================
            REAL COUNTRY MAP
        ================================================= */}

        <div
          className="
            relative
            min-h-[420px]
            overflow-hidden
            border-b
            border-[#193249]
            bg-[#041522]
            lg:border-b-0
            lg:border-r
          "
        >
          {/* ===============================================
              BACKGROUND GRID
          =============================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-20
              [background-image:linear-gradient(#31506A_1px,transparent_1px),linear-gradient(90deg,#31506A_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* ===============================================
              MAP HEADER
          =============================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-5
              top-5
              z-20
            "
          >
            <p
              className="
                text-[14px]
                text-[#7D8E9B]
                sm:text-[16px]
              "
            >
              {countryName}
            </p>

            <p
              className="
                mt-1
                text-[13px]
                font-semibold
                text-[#DDE3E7]
                sm:text-[15px]
              "
            >
              State Weather Monitor
            </p>
          </div>

          {/* ===============================================
              REAL GEOJSON MAP
          =============================================== */}

          <div
            className="
              absolute
              inset-x-2
              bottom-2
              top-[55px]
              z-10
              sm:inset-x-4
              sm:bottom-4
            "
          >
            <CountryStateMap
              countryIso3={countryIso3}
              countryName={countryName}
              selectedState={selectedState}
              onStateChange={onStateChange}
              states={states}
            />
          </div>

          {/* ===============================================
              SELECTED STATE

              CountryStateMap already shows a selected
              badge, but ye tumhare original UI ko bhi
              maintain karta hai.
          =============================================== */}

          <motion.div
            key={data?.code || selectedState}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              pointer-events-none
              absolute
              bottom-4
              left-4
              z-30
              rounded-[6px]
              border
              border-[#354D61]
              bg-[#061623]/95
              px-3
              py-2
              shadow-[0_5px_20px_rgba(0,0,0,0.25)]
              backdrop-blur
            "
          >
            <p
              className="
                text-[10px]
                text-[#81909B]
                sm:text-[12px]
              "
            >
              Selected State
            </p>

            <p
              className="
                mt-0.5
                text-[13px]
                font-semibold
                text-[#DCE2E6]
                sm:text-[15px]
              "
            >
              {data?.name || selectedState}
            </p>
          </motion.div>
        </div>

        {/* =================================================
            LEGEND
        ================================================= */}

        <div className="p-4">
          <h3
            className="
              text-[16px]
              font-semibold
              text-[#DCE2E6]
            "
          >
            IMPACT LEVEL
          </h3>

          <div className="mt-5 space-y-3">
            <Legend color="#82A83D" label="Low / Minimal" />

            <Legend color="#D5A52F" label="Moderate" />

            <Legend color="#D9782B" label="High" />

            <Legend color="#C94E4E" label="Severe" />

            <Legend color="#8B969F" label="No Data" />
          </div>

          {/* ===============================================
              CURRENT STATE
          =============================================== */}

          <div
            className="
              mt-6
              border-t
              border-[#193249]
              pt-4
            "
          >
            <p
              className="
                text-[12px]
                text-[#738593]
                sm:text-[14px]
              "
            >
              Current State
            </p>

            <p
              className="
                mt-1
                text-[16px]
                font-semibold
                text-[#DCE2E6]
                sm:text-[18px]
              "
            >
              {data?.name || "No State Selected"}
            </p>

            <ImpactBadge impact={data?.impact} />
          </div>

          {/* ===============================================
              MAP INFORMATION
          =============================================== */}

          <div
            className="
              mt-5
              border-t
              border-[#193249]
              pt-4
            "
          >
            <p
              className="
                text-[10px]
                leading-5
                text-[#617685]
              "
            >
              Select an available state directly from the map to update weather
              and trade intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          WEATHER CARDS
      ================================================= */}

      <div
        className="
          grid
          grid-cols-2
          border-t
          border-[#193249]
          md:grid-cols-4
        "
      >
        <WeatherMini
          icon={<Thermometer size={17} />}
          title="Temperature"
          value={temperatureStatus}
        />

        <WeatherMini
          icon={<CloudRain size={17} />}
          title="Rainfall"
          value={rainfallStatus}
        />

        <WeatherMini
          icon={<TriangleAlert size={17} />}
          title="Extreme Weather"
          value={extremeWeatherStatus}
        />

        <WeatherMini
          icon={<Sprout size={17} />}
          title="Crop Response"
          value={cropResponseStatus}
        />
      </div>
    </motion.div>
  );
}

/*
=========================================================
IMPACT BADGE
=========================================================
*/

function ImpactBadge({ impact = "No Data" }) {
  /*
  Different impact levels ke hisaab se styling
  */

  const normalizedImpact = String(impact).toLowerCase();

  let classes = "border-[#59636B] bg-[#1A2025] text-[#9CA6AD]";

  if (
    normalizedImpact.includes("low") ||
    normalizedImpact.includes("minimal")
  ) {
    classes = "border-[#4D6629] bg-[#17200D] text-[#82A83D]";
  }

  if (normalizedImpact.includes("moderate")) {
    classes = "border-[#765322] bg-[#2A2111] text-[#D69A2B]";
  }

  if (normalizedImpact.includes("high")) {
    classes = "border-[#81471F] bg-[#29180E] text-[#D9782B]";
  }

  if (normalizedImpact.includes("severe")) {
    classes = "border-[#753232] bg-[#281111] text-[#D85B5B]";
  }

  return (
    <span
      className={`
        mt-2
        inline-flex
        rounded-full
        border
        px-2.5
        py-1
        text-[12px]
        ${classes}
      `}
    >
      {impact} Impact
    </span>
  );
}

/*
=========================================================
LEGEND
=========================================================
*/

function Legend({ color, label }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
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
          backgroundColor: color,
        }}
      />

      <span
        className="
          text-[11px]
          text-[#AAB5BD]
        "
      >
        {label}
      </span>
    </div>
  );
}

/*
=========================================================
WEATHER MINI CARD
=========================================================
*/

function WeatherMini({ icon, title, value }) {
  return (
    <div
      className="
        min-w-0
        border-r
        border-[#193249]
        p-3
        last:border-r-0
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          text-[#D69A2B]
        "
      >
        <span className="shrink-0">{icon}</span>

        <span
          className="
            truncate
            text-[11px]
            font-medium
            text-[#B9C3CA]
            sm:text-[14px]
          "
        >
          {title}
        </span>
      </div>

      <p
        className="
          mt-2
          truncate
          text-[14px]
          font-semibold
          text-[#E6EBEE]
          sm:text-[16px]
        "
      >
        {value || "No Data"}
      </p>
    </div>
  );
}
