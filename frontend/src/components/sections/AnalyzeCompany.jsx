import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Upload,
  CheckSquare,
  Megaphone,
  Globe2,
} from "lucide-react";

// =======================================================
// MAP IMAGES
// Apne actual filenames ke according names change kar dena
// =======================================================

import agroMap from "../../assets/homebg/agro-map.png";
import fmcgMap from "../../assets/homebg/fmcg-map.png";
import textileMap from "../../assets/homebg/textile-map.png";
import chemicalMap from "../../assets/homebg/chemical-map.png";
import machineryMap from "../../assets/homebg/machinery-map.png";
import pharmaMap from "../../assets/homebg/pharma-map.png";

export default function AnalyzeCompany() {
  const [activeCategory, setActiveCategory] = useState("Agro & Foods");

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    country: "",
    export: false,
    import: false,
    file: null,
  });

  // =======================================================
  // CATEGORY DATA
  // =======================================================
  const categories = [
    {
      name: "Agro & Foods",
      image: agroMap,
    },
    {
      name: "FMCG",
      image: fmcgMap,
    },
    {
      name: "Textiles",
      image: textileMap,
    },
    {
      name: "Chemicals",
      image: chemicalMap,
    },
    {
      name: "Machinery",
      image: machineryMap,
    },
    {
      name: "Pharma",
      image: pharmaMap,
    },
  ];

  const activeMap =
    categories.find((item) => item.name === activeCategory)?.image || agroMap;

  // =======================================================
  // FORM CHANGE
  // =======================================================
  const handleChange = (e) => {
    const { name, value, checked, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files?.[0] || null
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Analyze Company Data:", formData);
  };

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
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* =====================================================
            MAIN GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
            2xl:grid-cols-[1.05fr_0.9fr_0.9fr]
          "
        >
          {/* =====================================================
              CARD 1
              GLOBAL DEMAND HEATMAP
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              group
              min-h-[540px]
              overflow-hidden
              rounded-[12px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-5
              py-6
              shadow-[0_10px_35px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#A9782D]

              sm:px-6
              2xl:min-h-[580px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[22px]
                font-semibold
                leading-tight
                text-[#F4F5F6]

                sm:text-[24px]
                lg:text-[26px]
              "
            >
              Global Demand Heatmap
            </h2>

            {/* =================================================
                CATEGORY TABS
            ================================================== */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2
              "
            >
              {categories.map((category) => {
                const active = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`
                      rounded-[6px]
                      border
                      px-3
                      py-2
                      text-[12px]
                      font-medium
                      transition-all
                      duration-300

                      sm:text-[13px]

                      ${
                        active
                          ? `
                            border-[#D69A2B]
                            bg-[#D69A2B]/10
                            text-[#D69A2B]
                            shadow-[0_0_15px_rgba(214,154,43,0.08)]
                          `
                          : `
                            border-[#354454]
                            bg-[#071522]
                            text-[#CFD4D9]
                            hover:border-[#A9772A]
                            hover:text-[#D69A2B]
                          `
                      }
                    `}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* =================================================
                CHANGING MAP
            ================================================== */}
            <div
              className="
                relative
                mt-6
                flex
                min-h-[315px]
                items-center
                justify-center
                overflow-hidden
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCategory}
                  src={activeMap}
                  alt={`${activeCategory} Global Demand Heatmap`}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    max-h-[310px]
                    w-full
                    object-contain
                  "
                />
              </AnimatePresence>
            </div>

            {/* =================================================
                DEMAND LEGEND + BUTTON
            ================================================== */}
            <div
              className="
                mt-3
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-[13px] w-[13px] bg-[#D8533F]" />

                  <span className="text-[13px] text-[#E0E4E8] sm:text-[14px]">
                    High Demand
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-[13px] w-[13px] bg-[#D6B148]" />

                  <span className="text-[13px] text-[#E0E4E8] sm:text-[14px]">
                    Medium Demand
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-[13px] w-[13px] bg-[#76A167]" />

                  <span className="text-[13px] text-[#E0E4E8] sm:text-[14px]">
                    Low Demand
                  </span>
                </div>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  x: 3,
                }}
                className="
                  group/market
                  flex
                  min-h-[47px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[7px]
                  border
                  border-[#9B6D29]
                  bg-[#071522]
                  px-5
                  text-[13px]
                  font-semibold
                  text-[#E3E6E9]
                  transition-all
                  duration-300

                  hover:border-[#D69A2B]
                  hover:text-[#D69A2B]

                  sm:text-[14px]
                "
              >
                View Full Market Insights

                <ArrowRight
                  size={19}
                  className="
                    text-[#D69A2B]
                    transition-transform
                    group-hover/market:translate-x-1
                  "
                />
              </motion.button>
            </div>
          </motion.div>

          {/* =====================================================
              CARD 2
              ANALYZE COMPANY FORM
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              min-h-[540px]
              rounded-[12px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-5
              py-6
              shadow-[0_10px_35px_rgba(0,0,0,0.30)]

              sm:px-6
              2xl:min-h-[580px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[22px]
                font-semibold
                uppercase
                leading-tight
                text-[#D69A2B]

                sm:text-[24px]
                lg:text-[26px]
              "
            >
              Analyze Your Company
            </h2>

            {/* Intro */}
            <div
              className="
                mt-5
                flex
                items-start
                gap-5
              "
            >
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-[70px]
                  w-[70px]
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <BarChart3
                  size={55}
                  strokeWidth={1.4}
                  className="text-[#D69A2B]"
                />
              </motion.div>

              {/* Description */}
              <p
                className="
                  text-[14px]
                  leading-[1.75]
                  text-[#D8DDE2]

                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Discover the best countries with buyers for your products.
                Get a free analysis of your business and discover which
                countries have the right buyers and the best opportunities
                for you to expand.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form
              onSubmit={handleSubmit}
              className="mt-6"
            >
              {/* Company + Email */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="
                    h-[52px]
                    rounded-[7px]
                    border
                    border-[#293D50]
                    bg-[#061522]
                    px-4
                    text-[14px]
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-[#9DA5AC]

                    focus:border-[#D69A2B]

                    sm:text-[15px]
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="
                    h-[52px]
                    rounded-[7px]
                    border
                    border-[#293D50]
                    bg-[#061522]
                    px-4
                    text-[14px]
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-[#9DA5AC]

                    focus:border-[#D69A2B]

                    sm:text-[15px]
                  "
                />
              </div>

              {/* File Upload */}
              <label
                className="
                  mt-3
                  flex
                  min-h-[54px]
                  cursor-pointer
                  items-center
                  justify-between
                  gap-3
                  rounded-[7px]
                  border
                  border-[#293D50]
                  bg-[#061522]
                  px-4
                  transition-all

                  hover:border-[#D69A2B]/70
                "
              >
                <span
                  className="
                    truncate
                    text-[13px]
                    text-[#C9CFD5]
                    sm:text-[14px]
                  "
                >
                  {formData.file
                    ? formData.file.name
                    : "Upload Catalog / Product List"}
                </span>

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    text-[13px]
                    font-medium
                    text-[#E3E6E8]
                  "
                >
                  Choose File

                  <Upload
                    size={18}
                    className="text-[#D69A2B]"
                  />
                </div>

                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>

              {/* Country */}
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Where do you currently export?"
                className="
                  mt-3
                  h-[52px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#293D50]
                  bg-[#061522]
                  px-4
                  text-[14px]
                  text-white
                  outline-none
                  transition-all
                  placeholder:text-[#9DA5AC]

                  focus:border-[#D69A2B]

                  sm:text-[15px]
                "
              />

              {/* Export / Import */}
              <div
                className="
                  mt-3
                  flex
                  min-h-[52px]
                  flex-wrap
                  items-center
                  gap-5
                  rounded-[7px]
                  border
                  border-[#293D50]
                  bg-[#061522]
                  px-4
                "
              >
                <p
                  className="
                    mr-auto
                    text-[13px]
                    text-[#C8CED4]
                    sm:text-[14px]
                  "
                >
                  Your company is more into
                </p>

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[13px]
                    text-[#E0E4E8]
                    sm:text-[14px]
                  "
                >
                  <input
                    type="checkbox"
                    name="export"
                    checked={formData.export}
                    onChange={handleChange}
                    className="
                      h-[17px]
                      w-[17px]
                      accent-[#D69A2B]
                    "
                  />

                  Export
                </label>

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[13px]
                    text-[#E0E4E8]
                    sm:text-[14px]
                  "
                >
                  <input
                    type="checkbox"
                    name="import"
                    checked={formData.import}
                    onChange={handleChange}
                    className="
                      h-[17px]
                      w-[17px]
                      accent-[#D69A2B]
                    "
                  />

                  Import
                </label>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group/analyze
                  mt-4
                  flex
                  min-h-[53px]
                  w-full
                  items-center
                  justify-center
                  gap-4
                  rounded-[7px]
                  border
                  border-[#D69A2B]
                  bg-gradient-to-r
                  from-[#E0AA49]
                  via-[#D99B2B]
                  to-[#CB8C24]
                  text-[15px]
                  font-semibold
                  text-[#07111B]
                  shadow-[0_8px_24px_rgba(214,154,43,0.17)]

                  sm:text-[16px]
                "
              >
                Analyze Now

                <ArrowRight
                  size={21}
                  className="
                    transition-transform
                    group-hover/analyze:translate-x-1
                  "
                />
              </motion.button>
            </form>
          </motion.div>

          {/* =====================================================
              CARD 3
              ADVERTISE WITH US
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              relative
              min-h-[540px]
              overflow-hidden
              rounded-[12px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-5
              py-6
              shadow-[0_10px_35px_rgba(0,0,0,0.30)]

              sm:px-6

              lg:col-span-2

              2xl:col-span-1
              2xl:min-h-[580px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[22px]
                font-semibold
                uppercase
                text-[#D69A2B]

                sm:text-[24px]
                lg:text-[26px]
              "
            >
              Advertise With Us
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[420px]
                text-[14px]
                leading-[1.8]
                text-[#D8DDE2]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Promote your brand, products and services to a global audience
              of verified buyers and importers.
            </p>

            {/* =================================================
                BENEFITS
            ================================================== */}
            <div className="relative z-10 mt-8 space-y-5">
              {[
                "Banner & Display Advertising",
                "Sponsored Listings",
                "Targeted Campaigns",
                "Global Visibility",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <CheckSquare
                    size={24}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      text-[#D69A2B]
                    "
                  />

                  <span
                    className="
                      text-[14px]
                      font-medium
                      text-[#E0E4E8]

                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                MEGAPHONE GRAPHIC
            ================================================== */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[90px]
                right-[3%]
                hidden
                h-[210px]
                w-[210px]
                items-center
                justify-center

                sm:flex
              "
            >
              <motion.div
                animate={{
                  rotate: [-4, 4, -4],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-[145px]
                  w-[145px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-dashed
                  border-[#795626]
                  bg-[#071522]/70
                "
              >
                <Megaphone
                  size={83}
                  strokeWidth={1.25}
                  className="text-[#D69A2B]"
                />
              </motion.div>

              <Globe2
                size={180}
                strokeWidth={0.55}
                className="
                  absolute
                  text-[#D69A2B]/20
                "
              />

              {/* Decorative Points */}
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-2
                  top-6
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#D69A2B]
                  shadow-[0_0_12px_rgba(214,154,43,0.7)]
                "
              />

              <span
                className="
                  absolute
                  bottom-3
                  left-6
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#D69A2B]
                "
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group/ad
                absolute
                bottom-6
                left-6
                right-6
                flex
                min-h-[53px]
                items-center
                justify-center
                gap-4
                rounded-[7px]
                border
                border-[#D69A2B]
                bg-gradient-to-r
                from-[#E0AA49]
                via-[#D99B2B]
                to-[#CB8C24]
                text-[15px]
                font-semibold
                text-[#07111B]
                shadow-[0_8px_24px_rgba(214,154,43,0.18)]

                sm:text-[16px]
              "
            >
              Advertise Now

              <ArrowRight
                size={21}
                className="
                  transition-transform
                  duration-300
                  group-hover/ad:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}