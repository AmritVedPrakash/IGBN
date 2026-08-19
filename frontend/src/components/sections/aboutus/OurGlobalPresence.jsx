import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoreHorizontal } from "lucide-react";

// ================= MAP IMAGE =================
import worldMap from "../../../assets/aboutimg/global-map.png";

// ================= FLAG IMAGES =================
import usa from "../../../assets/flag/usa.png";
import uae from "../../../assets/flag/uae.png";
import uk from "../../../assets/flag/uk.png";
import germany from "../../../assets/flag/germany.png";
import saudi from "../../../assets/flag/saudi.png";
import singapore from "../../../assets/flag/singapore.png";
import australia from "../../../assets/flag/australia.png";

import canada from "../../../assets/flag/canada.png";
import japan from "../../../assets/flag/japan.png";
import france from "../../../assets/flag/france.png";
import netherlands from "../../../assets/flag/netherlands.png";
import turkey from "../../../assets/flag/turkey.png";
import malaysia from "../../../assets/flag/malaysia.png";
import indonesia from "../../../assets/flag/indonesia.png";

import thailand from "../../../assets/flag/thailand.png";
import vietnam from "../../../assets/flag/vietnam.png";
import china from "../../../assets/flag/china.png";
import southKorea from "../../../assets/flag/south-korea.png";
import hongKong from "../../../assets/flag/hong-kong.png";
import russia from "../../../assets/flag/russia.png";

export default function OurGlobalPresence() {
  const countries = [
    {
      name: "USA",
      flag: usa,
    },
    {
      name: "UAE",
      flag: uae,
    },
    {
      name: "UK",
      flag: uk,
    },
    {
      name: "Germany",
      flag: germany,
    },
    {
      name: "Saudi Arabia",
      flag: saudi,
    },
    {
      name: "Singapore",
      flag: singapore,
    },
    {
      name: "Australia",
      flag: australia,
    },

    {
      name: "Canada",
      flag: canada,
    },
    {
      name: "Japan",
      flag: japan,
    },
    {
      name: "France",
      flag: france,
    },
    {
      name: "Netherlands",
      flag: netherlands,
    },
    {
      name: "Turkey",
      flag: turkey,
    },
    {
      name: "Malaysia",
      flag: malaysia,
    },
    {
      name: "Indonesia",
      flag: indonesia,
    },

    {
      name: "Thailand",
      flag: thailand,
    },
    {
      name: "Vietnam",
      flag: vietnam,
    },
    {
      name: "China",
      flag: china,
    },
    {
      name: "South Korea",
      flag: southKorea,
    },
    {
      name: "Hong Kong",
      flag: hongKong,
    },
    {
      name: "Russia",
      flag: russia,
    },
  ];

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
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-1/2
          h-[400px]
          w-[400px]
          -translate-y-1/2
          rounded-full
          bg-[#D79A2B]/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* ================= MAIN GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            xl:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* =====================================================
              LEFT MAP CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              overflow-hidden
              rounded-[12px]
              border
              border-[#745225]/80
              bg-[#03111F]
              px-5
              pb-5
              pt-4
              shadow-[0_10px_35px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#A7782C]

              sm:px-6
            "
          >
            {/* Heading */}
            <h2
              className="
                text-center
                text-[22px]
                font-semibold
                leading-tight
                text-[#F4F5F6]

                sm:text-[24px]
                lg:text-[26px]
                xl:text-[27px]
              "
            >
              Our Global Presence – 21+ Countries
            </h2>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                mt-4
                flex
                min-h-[250px]
                items-center
                justify-center
                overflow-hidden
              "
            >
              <img
                src={worldMap}
                alt="IGBN Global Presence Map"
                className="
                  max-h-[300px]
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT FLAGS CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[12px]
              border
              border-[#745225]/80
              bg-[#03111F]
              px-5
              py-5
              shadow-[0_10px_35px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#A7782C]

              sm:px-6
              lg:px-7
            "
          >
            {/* ================= FLAGS ================= */}
            <div
              className="
                grid
                grid-cols-3
                gap-x-4
                gap-y-6

                sm:grid-cols-4
                md:grid-cols-5
                lg:grid-cols-7
              "
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.025,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-start
                    text-center
                  "
                >
                  {/* Flag */}
                  <div
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#CBD1D5]/60
                      bg-[#071522]
                      shadow-[0_5px_14px_rgba(0,0,0,0.30)]
                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:border-[#D79A2B]
                    "
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Country Name */}
                  <p
                    className="
                      mt-2
                      whitespace-nowrap
                      text-[12px]
                      font-medium
                      leading-[1.35]
                      text-[#E3E6E9]

                      sm:text-[13px]
                      xl:text-[14px]
                    "
                  >
                    {country.name}
                  </p>
                </motion.div>
              ))}

              {/* ================= AND MORE ================= */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  justify-start
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8E713F]
                    bg-[#071522]
                    transition-all
                    duration-300

                    group-hover:border-[#D79A2B]
                    group-hover:bg-[#D79A2B]/10
                  "
                >
                  <MoreHorizontal
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#E6E9EC]"
                  />
                </div>

                <p
                  className="
                    mt-2
                    text-[12px]
                    font-medium
                    text-[#E3E6E9]

                    sm:text-[13px]
                    xl:text-[14px]
                  "
                >
                  and more
                </p>
              </motion.div>
            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-6 flex justify-center">
              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[7px]
                  border
                  border-[#A57429]
                  bg-[#071522]
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#D79A2B]
                  shadow-[0_6px_18px_rgba(0,0,0,0.20)]
                  transition-all
                  duration-300

                  hover:border-[#D79A2B]
                  hover:bg-[#D79A2B]/[0.06]
                  hover:shadow-[0_8px_22px_rgba(215,154,43,0.10)]

                  sm:text-[15px]
                "
              >
                View All Countries
                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
