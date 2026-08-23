import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowRight, Check, ChevronDown, TrendingUp } from "lucide-react";

import {
  countries,
  products,
  comparisonData,
} from "../../../data/countryComparisonData";

export default function CountryComparisonCard() {
  const [product, setProduct] = useState("Rice");

  const [leftCountry, setLeftCountry] = useState("india");

  const [rightCountry, setRightCountry] = useState("usa");

  const leftData = comparisonData[product][leftCountry];

  const rightData = comparisonData[product][rightCountry];

  const leftCountryInfo = countries[leftCountry];

  const rightCountryInfo = countries[rightCountry];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 45,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
      className="
        relative
        overflow-visible
        rounded-[13px]
        border
        border-[#755224]/80
        bg-[#03111F]
        px-5
        py-1
        shadow-[0_15px_45px_rgba(0,0,0,0.35)]

        sm:px-6
        lg:px-7
      "
    >
      {/* =====================================================
          CARD GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#D69A2B]/[0.04]
          blur-[100px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div
        className="
          relative
          z-20
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* TITLE */}
        <div className="flex items-center gap-3">
          <h2
            className="
              text-[19px]
              font-semibold
              uppercase
              text-[#F3F4F5]

              sm:text-[21px]
              lg:text-[23px]
            "
          >
            Country Comparison
          </h2>

          <span
            className="
              rounded-full
              border
              border-[#A7772C]
              bg-[#D69A2B]/[0.07]
              px-3
              py-1
              text-[11px]
              font-semibold
              text-[#D69A2B]
            "
          >
            Live
          </span>
        </div>

        {/* =================================================
            PRODUCT DROPDOWN
        ================================================= */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[13px]
              font-medium
              text-[#CBD1D7]

              sm:text-[14px]
            "
          >
            Select Product
          </span>

          <div className="relative">
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="
                h-[44px]
                min-w-[155px]
                appearance-none
                rounded-[7px]
                border
                border-[#3A4D5E]
                bg-[#071522]
                pl-4
                pr-10
                text-[14px]
                font-medium
                text-[#E6E8EA]
                outline-none
                transition-all

                hover:border-[#755224]
                focus:border-[#D69A2B]
              "
            >
              {products.map((item) => (
                <option key={item} value={item} className="bg-[#071522]">
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-[#D69A2B]
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          SELECTED PRODUCT INFO
      ====================================================== */}
      <motion.div
        key={product}
        initial={{
          opacity: 0,
          y: -5,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          z-10
          mt-5
          flex
          items-center
          gap-2
          border-t
          border-[#263A4C]
          pt-4
        "
      >
        <span
          className="
            text-[13px]
            text-[#9DA7AF]

            sm:text-[14px]
          "
        >
          Comparing market intelligence for
        </span>

        <span
          className="
            text-[14px]
            font-semibold
            text-[#D69A2B]

            sm:text-[15px]
          "
        >
          {product}
        </span>
      </motion.div>

      {/* =====================================================
          COUNTRY COMPARISON
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mt-6
          grid
          grid-cols-1
          gap-5

          md:grid-cols-[1fr_72px_1fr]
          md:gap-3
        "
      >
        {/* =================================================
            LEFT COUNTRY
        ================================================= */}
        <CountrySide
          side="left"
          countryId={leftCountry}
          countryInfo={leftCountryInfo}
          data={leftData}
          otherCountry={rightCountry}
          onCountryChange={setLeftCountry}
        />

        {/* =================================================
            VS
        ================================================= */}
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 10px rgba(214,154,43,0.05)",
                "0 0 24px rgba(214,154,43,0.20)",
                "0 0 10px rgba(214,154,43,0.05)",
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-[54px]
              w-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#A9772B]
              bg-[#071522]
              text-[16px]
              font-bold
              text-[#D69A2B]
            "
          >
            VS
          </motion.div>
        </div>

        {/* =================================================
            RIGHT COUNTRY
        ================================================= */}
        <CountrySide
          side="right"
          countryId={rightCountry}
          countryInfo={rightCountryInfo}
          data={rightData}
          otherCountry={leftCountry}
          onCountryChange={setRightCountry}
        />
      </div>

      {/* =====================================================
          BOTTOM BUTTON
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mt-6
          border-t
          border-[#263A4C]
          pt-5
          text-center
        "
      >
        <motion.button
          whileHover={{
            x: 4,
          }}
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[14px]
            font-semibold
            text-[#D69A2B]

            sm:text-[15px]
            lg:text-[16px]
          "
        >
          View Detailed Comparison
          <ArrowRight
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* =========================================================
   COUNTRY SIDE
========================================================= */

function CountrySide({
  countryId,
  countryInfo,
  data,
  otherCountry,
  onCountryChange,
}) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -3,
      }}
      className="
        relative
        rounded-[10px]
        border
        border-[#263B4D]/70
        bg-[#061522]/60
        px-4
        py-5
        transition-colors

        hover:border-[#755224]/80
      "
    >
      {/* =====================================================
          COUNTRY DROPDOWN
      ====================================================== */}
      <CountryDropdown
        value={countryId}
        otherCountry={otherCountry}
        onChange={onCountryChange}
      />

      {/* =====================================================
          DATA
      ====================================================== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={countryId + JSON.stringify(data)}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {/* Country Heading */}
          <div className="mt-5">
            <p
              className="
                text-[12px]
                font-medium
                text-[#9EA7AF]

                sm:text-[13px]
              "
            >
              Market Performance
            </p>

            <h3
              className="
                mt-1
                text-[23px]
                font-semibold
                text-[#F3F4F5]

                sm:text-[25px]
              "
            >
              {countryInfo.name}
            </h3>
          </div>

          {/* =================================================
              METRICS GRID
          ================================================= */}
          <div
            className="
              mt-5
              grid
              grid-cols-2
              gap-x-4
              gap-y-5
            "
          >
            <Metric label="Global Export Rank" value={data.globalExportRank} />

            <Metric label="Total Exports" value={data.totalExports} bordered />

            <Metric label="Total Imports" value={data.totalImports} />

            <Metric
              label="Import Growth"
              value={data.importGrowth}
              positive
              bordered
            />

            <Metric label="Growth (YoY)" value={data.growthYoY} positive />

            <Metric
              label="Global Import Rank"
              value={data.globalImportRank}
              bordered
            />
          </div>

          {/* =================================================
              TREND
          ================================================= */}
          <div
            className="
              mt-6
              border-t
              border-[#263A4C]
              pt-4
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    text-[#9EA7AF]

                    sm:text-[12px]
                  "
                >
                  Market Trend
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                  "
                >
                  <TrendingUp
                    size={19}
                    strokeWidth={1.8}
                    className="text-[#80B83C]"
                  />

                  <span
                    className="
                      text-[14px]
                      font-semibold
                      text-[#80B83C]
                    "
                  >
                    Positive Growth
                  </span>
                </div>
              </div>

              <MiniTrendChart values={data.trend} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({ label, value, positive = false, bordered = false }) {
  return (
    <div
      className={`
        min-w-0

        ${bordered ? "border-l border-[#263A4C] pl-4" : ""}
      `}
    >
      <p
        className="
          text-[11px]
          leading-[1.4]
          text-[#9EA7AF]

          sm:text-[12px]
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-2
          whitespace-nowrap
          text-[18px]
          font-semibold

          sm:text-[20px]

          ${positive ? "text-[#80B83C]" : "text-[#F4F5F6]"}
        `}
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   CUSTOM COUNTRY DROPDOWN
   FLAG + COUNTRY NAME
========================================================= */

function CountryDropdown({ value, onChange, otherCountry }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const selectedCountry = countries[value];

  /* Close on outside click */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="
        relative
        z-[50]
        w-full
      "
    >
      {/* ================= SELECTED COUNTRY ================= */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          min-h-[54px]
          w-full
          items-center
          gap-3
          rounded-[8px]
          border
          border-[#344A5D]
          bg-[#071522]
          px-4
          text-left
          transition-all
          duration-300

          hover:border-[#A9772B]
        "
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className="
            h-[32px]
            w-[32px]
            shrink-0
            rounded-full
            border
            border-white/20
            object-cover
          "
        />

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[11px]
              font-medium
              text-[#9EA7AF]
            "
          >
            Select Country
          </p>

          <p
            className="
              mt-0.5
              truncate
              text-[15px]
              font-semibold
              text-[#F1F3F4]

              sm:text-[16px]
            "
          >
            {selectedCountry.name}
          </p>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <ChevronDown size={19} className="text-[#D69A2B]" />
        </motion.div>
      </button>

      {/* ================= DROPDOWN MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -5,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              left-0
              right-0
              top-[calc(100%+7px)]
              z-[100]
              max-h-[290px]
              overflow-y-auto
              rounded-[9px]
              border
              border-[#755224]
              bg-[#041320]
              p-2
              shadow-[0_18px_40px_rgba(0,0,0,0.55)]
            "
          >
            {Object.values(countries).map((country) => {
              const selected = country.id === value;

              const disabled = country.id === otherCountry;

              return (
                <button
                  key={country.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    if (disabled) return;

                    onChange(country.id);
                    setOpen(false);
                  }}
                  className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-[7px]
                      px-3
                      py-3
                      text-left
                      transition-all
                      duration-200

                      ${selected ? "bg-[#D69A2B]/10" : "hover:bg-[#0A1B2A]"}

                      ${disabled ? "cursor-not-allowed opacity-35" : ""}
                    `}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="
                        h-[30px]
                        w-[30px]
                        shrink-0
                        rounded-full
                        border
                        border-white/20
                        object-cover
                      "
                  />

                  <span
                    className={`
                        flex-1
                        text-[14px]
                        font-medium

                        ${selected ? "text-[#D69A2B]" : "text-[#E1E5E8]"}
                      `}
                  >
                    {country.name}
                  </span>

                  {selected && (
                    <Check
                      size={17}
                      strokeWidth={2}
                      className="text-[#D69A2B]"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MINI TREND CHART
========================================================= */

function MiniTrendChart({ values }) {
  const width = 135;
  const height = 45;

  const max = Math.max(...values);
  const min = Math.min(...values);

  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;

      const y = height - ((value - min) / range) * (height - 8) - 4;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <motion.svg
      key={points}
      viewBox={`0 0 ${width} ${height}`}
      className="
        h-[45px]
        w-[120px]

        sm:w-[135px]
      "
    >
      <motion.polyline
        points={points}
        fill="none"
        stroke="#8DAE31"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
