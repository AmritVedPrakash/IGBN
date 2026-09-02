import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Newspaper,
  FileText,
  Ship,
  CloudSun,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// =====================================================
// FLAGS
// =====================================================

import indiaFlag from "../../../assets/flag/india.png";
import usaFlag from "../../../assets/flag/usa.png";
import ukFlag from "../../../assets/flag/uk.png";
import germanyFlag from "../../../assets/flag/germany.png";
import uaeFlag from "../../../assets/flag/uae.png";
import chinaFlag from "../../../assets/flag/china.png";
import japanFlag from "../../../assets/flag/japan.png";
import australiaFlag from "../../../assets/flag/australia.png";
import canadaFlag from "../../../assets/flag/canada.png";
import saudiFlag from "../../../assets/flag/saudi.png";
import singaporeFlag from "../../../assets/flag/singapore.png";
import franceFlag from "../../../assets/flag/france.png";

// =====================================================
// COUNTRY DATA
// =====================================================

const countryData = [
  {
    id: "india",
    name: "India",
    flag: indiaFlag,

    // Unsplash - Taj Mahal
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 12,
      policyUpdates: 8,
      shipping: 5,
      weather: 3,
      insights: 15,
    },
  },

  {
    id: "usa",
    name: "United States",
    flag: usaFlag,

    // Unsplash - New York / USA
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 18,
      policyUpdates: 9,
      shipping: 6,
      weather: 2,
      insights: 20,
    },
  },

  {
    id: "uk",
    name: "United Kingdom",
    flag: ukFlag,

    // Unsplash - London
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 10,
      policyUpdates: 7,
      shipping: 4,
      weather: 3,
      insights: 12,
    },
  },

  {
    id: "germany",
    name: "Germany",
    flag: germanyFlag,

    // Unsplash - Berlin
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 14,
      policyUpdates: 6,
      shipping: 5,
      weather: 2,
      insights: 13,
    },
  },

  {
    id: "uae",
    name: "UAE",
    flag: uaeFlag,

    // Unsplash - Dubai
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 9,
      policyUpdates: 5,
      shipping: 3,
      weather: 2,
      insights: 15,
    },
  },

  {
    id: "china",
    name: "China",
    flag: chinaFlag,

    // Unsplash - Shanghai
    image:
      "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 15,
      policyUpdates: 10,
      shipping: 7,
      weather: 3,
      insights: 18,
    },
  },

  {
    id: "japan",
    name: "Japan",
    flag: japanFlag,

    // Unsplash - Japan / Tokyo
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 11,
      policyUpdates: 6,
      shipping: 4,
      weather: 3,
      insights: 12,
    },
  },

  {
    id: "australia",
    name: "Australia",
    flag: australiaFlag,

    // Unsplash - Sydney
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 8,
      policyUpdates: 4,
      shipping: 3,
      weather: 2,
      insights: 10,
    },
  },

  {
    id: "canada",
    name: "Canada",
    flag: canadaFlag,

    // Unsplash - Toronto
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 13,
      policyUpdates: 5,
      shipping: 4,
      weather: 3,
      insights: 11,
    },
  },

  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    flag: saudiFlag,

    // Unsplash - Riyadh
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 11,
      policyUpdates: 6,
      shipping: 5,
      weather: 2,
      insights: 14,
    },
  },

  {
    id: "singapore",
    name: "Singapore",
    flag: singaporeFlag,

    // Unsplash - Singapore
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 9,
      policyUpdates: 4,
      shipping: 6,
      weather: 2,
      insights: 12,
    },
  },

  {
    id: "france",
    name: "France",
    flag: franceFlag,

    // Unsplash - Paris
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",

    stats: {
      tradeNews: 10,
      policyUpdates: 6,
      shipping: 4,
      weather: 3,
      insights: 13,
    },
  },
];

// =====================================================
// COUNTRY CARD
// =====================================================

function CountryCard({ country, index }) {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Newspaper,
      label: "Trade News",
      value: country.stats.tradeNews,
    },
    {
      icon: FileText,
      label: "Policy Updates",
      value: country.stats.policyUpdates,
    },
    {
      icon: Ship,
      label: "Shipping & Logistics Disruptions",
      value: country.stats.shipping,
    },
    {
      icon: CloudSun,
      label: "Seasonal & Weather Updates",
      value: country.stats.weather,
    },
    {
      icon: Lightbulb,
      label: "News & Updates",
      value: country.stats.insights,
    },
  ];

  const openCountry = () => {
    navigate(`/trade-intelligence/country/${country.id}`);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.5,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      onClick={openCountry}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[11px]
        border
        border-[#193249]
        bg-[#03111F]
        shadow-[0_8px_30px_rgba(0,0,0,0.28)]
        transition-all
        duration-300
        hover:border-[#765323]
        hover:shadow-[0_16px_42px_rgba(0,0,0,0.42)]
      "
    >
      {/* =================================================
          COUNTRY IMAGE
      ================================================= */}

      <div className="relative h-[145px] overflow-hidden sm:h-[180px]">
        <motion.img
          src={country.image}
          alt={`${country.name} trade intelligence`}
          loading="lazy"
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark overall overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[#020A12]/[0.25]
          "
        />

        {/* Strong bottom gradient */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[75%]
            bg-gradient-to-t
            from-[#03111F]
            via-[#03111F]/[0.65]
            to-transparent
          "
        />

        {/* Top gradient */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[50%]
            bg-gradient-to-b
            from-[#020A12]/[0.55]
            to-transparent
          "
        />

        {/* Hover gold glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[50px]
            -top-[50px]
            h-[140px]
            w-[140px]
            rounded-full
            bg-[#D69A2B]/[0.13]
            opacity-0
            blur-[45px]
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =================================================
            COUNTRY HEADER
        ================================================= */}

        <div
          className="
            absolute
            left-4
            right-4
            top-4
            z-10
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2.5
            "
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="
                h-[31px]
                w-[31px]
                shrink-0
                rounded-full
                border
                border-white/25
                object-cover
                shadow-[0_3px_10px_rgba(0,0,0,0.55)]
              "
            />

            <h3
              className="
                text-[17px]
                font-semibold
                leading-none
                text-white
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]
                sm:text-[22px]
              "
            >
              {country.name}
            </h3>
          </div>

          <div
            className="
              flex
              h-[29px]
              w-[29px]
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={15} className="text-[#D69A2B]" />
          </div>
        </div>

        {/* =================================================
            IMAGE BOTTOM LABEL
        ================================================= */}

        <div
          className="
            absolute
            bottom-4
            left-4
            z-10
          "
        >
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/65
            "
          >
            Global Trade Intelligence
          </p>
        </div>
      </div>

      {/* =================================================
          STATS
      ================================================= */}

      <div
        className="
          border-t
          border-[#193249]
          bg-[#03111F]
          px-4
          py-2
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                min-h-[33px]
                items-center
                gap-2
                border-b
                border-[#102536]
                last:border-b-0
              "
            >
              <Icon
                size={15}
                strokeWidth={1.8}
                className="
                  shrink-0
                  text-[#C99935]
                "
              />

              <span
                className="
                  min-w-0
                  flex-1
                  truncate
                  text-[10px]
                  font-medium
                  text-[#C5CDD3]
                  sm:text-[16px]
                "
              >
                {item.label}
              </span>

              <span
                className="
                  shrink-0
                  text-[10px]
                  font-semibold
                  text-[#83B43D]
                  sm:text-[16px]
                "
              >
                {item.value} New
              </span>
            </div>
          );
        })}
      </div>

      {/* =================================================
          INSIGHTS BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openCountry();
        }}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          border-t
          border-[#193249]
          bg-[#03111F]
          px-4
          py-3
          text-[15px]
          font-semibold
          text-[#D69A2B]
          transition-all
          duration-300
          hover:bg-[#D69A2B]/[0.06]
        "
      >
        View All Insights
        <ArrowRight
          size={15}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </motion.article>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function ExploreByCountry() {
  const [showAll, setShowAll] = useState(false);

  const visibleCountries = showAll ? countryData : countryData.slice(0, 4);

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-8
        sm:px-6
        sm:py-10
        lg:px-8
        lg:py-12
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
        >
          <h2
            className="
              text-[21px]
              font-semibold
              uppercase
              tracking-[0.01em]
              text-[#F0F2F4]
              sm:text-[24px]
              lg:text-[27px]
            "
          >
            EXPLORE BY REGION/COUNTRY
          </h2>

          <p
            className="
              mt-1
              max-w-[800px]
              text-[12px]
              leading-6
              text-[#8494A1]
              sm:text-[13px]
              lg:text-[16px]
            "
          >
            Explore real-time trade intelligence, market updates, policy
            movements and global opportunities across key international markets.
          </p>
        </motion.div>

        {/* =================================================
            COUNTRY GRID
        ================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "all-countries" : "featured-countries"}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-5
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {visibleCountries.map((country, index) => (
              <CountryCard key={country.id} country={country} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* =================================================
            VIEW ALL COUNTRIES
        ================================================= */}

        <div className="mt-7 flex justify-center">
          <motion.button
            type="button"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setShowAll((prev) => !prev)}
            className="
              group
              flex
              items-center
              gap-2.5
              rounded-[6px]
              border
              border-[#765323]
              bg-[#071522]
              px-7
              py-3
              text-[13px]
              font-semibold
              text-[#D69A2B]
              shadow-[0_5px_20px_rgba(0,0,0,0.22)]
              transition-all
              duration-300
              hover:border-[#D69A2B]
              hover:bg-[#D69A2B]/[0.07]
            "
          >
            {showAll ? "Show Less Countries" : "View All Countries"}

            <ChevronDown
              size={16}
              className={`
                transition-transform
                duration-300
                ${showAll ? "rotate-180" : ""}
              `}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
