import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cog,
  Car,
  Pill,
  Shirt,
  FlaskConical,
  CookingPot,
} from "lucide-react";

// ==============================================
// MAP IMAGES
// Actual filenames ke according change kar lena
// ==============================================
import indiaProduceMap from "../../../assets/marketanalyses/india-produce-map.png";
import stateStrengthMap from "../../../assets/marketanalyses/state-strength-map.png";

// ==============================================
// FLAGS / STATE IMAGES
// Actual filenames ke according change kar lena
// ==============================================
import maharashtraFlag from "../../../assets/flag/stateflag/maharashtra.png";
import gujaratFlag from "../../../assets/flag/stateflag/gujarat.png";
import tamilNaduFlag from "../../../assets/flag/stateflag/tamil-nadu.png";
import upFlag from "../../../assets/flag/stateflag/uttar-pradesh.png";
import karnatakaFlag from "../../../assets/flag/stateflag/karnataka.png";

export default function WhatIndiaProduce() {
  const [product, setProduct] = useState("Engineering Goods");
  const [state, setState] = useState("Maharashtra");

  const products = [
    "Engineering Goods",
    "Pharmaceuticals",
    "Textiles & Garments",
    "Chemicals",
    "Food Processing",
    "Automobiles & Parts",
  ];

  const states = [
    {
      name: "Maharashtra",
      flag: maharashtraFlag,
      share: "22.5%",
    },
    {
      name: "Gujarat",
      flag: gujaratFlag,
      share: "18.7%",
    },
    {
      name: "Tamil Nadu",
      flag: tamilNaduFlag,
      share: "15.3%",
    },
    {
      name: "Uttar Pradesh",
      flag: upFlag,
      share: "9.8%",
    },
    {
      name: "Karnataka",
      flag: karnatakaFlag,
      share: "8.6%",
    },
  ];

  const industries = [
    {
      icon: Cog,
      name: "Engineering Goods",
    },
    {
      icon: Car,
      name: "Automobiles & Parts",
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
    },
    {
      icon: FlaskConical,
      name: "Chemicals",
    },
    {
      icon: CookingPot,
      name: "Food Processing",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#735123]/80
          bg-[#03111F]
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
          "
        >
          {/* =====================================================
              LEFT CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              border-b
              border-[#735123]/70
              px-6
              py-6

              xl:border-b-0
              xl:border-r

              lg:px-7
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[22px]
                font-semibold
                uppercase
                leading-tight
                text-[#F4F5F6]

                sm:text-[24px]
                lg:text-[27px]
              "
            >
              What India Produces More – State Wise
            </h2>

            <p
              className="
                mt-2
                text-[14px]
                leading-[1.6]
                text-[#BFC6CD]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Top exporting products by Indian states
            </p>

            {/* Product select */}
            <div className="mt-5 max-w-[400px]">
              <label
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#D9DEE3]

                  sm:text-[15px]
                "
              >
                Select Product
              </label>

              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="
                  h-[50px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#304356]
                  bg-[#071522]
                  px-4
                  text-[14px]
                  font-medium
                  text-[#E5E8EA]
                  outline-none
                  transition-all

                  focus:border-[#D69A2B]

                  sm:text-[15px]
                "
              >
                {products.map((item) => (
                  <option key={item} value={item} className="bg-[#071522]">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* MAP + TABLE */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                items-center
                gap-6

                md:grid-cols-[1.1fr_0.9fr]
              "
            >
              {/* India Map */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  flex
                  min-h-[330px]
                  items-center
                  justify-center
                "
              >
                <motion.img
                  src={indiaProduceMap}
                  alt="India State Wise Production"
                  animate={{
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    max-h-[340px]
                    w-full
                    object-contain
                  "
                />
              </motion.div>

              {/* State Table */}
              <div>
                {/* Header */}
                <div
                  className="
                    grid
                    grid-cols-[1fr_90px]
                    border-b
                    border-[#344658]
                    px-2
                    pb-3
                  "
                >
                  <span
                    className="
                      text-[14px]
                      font-semibold
                      text-[#C9D0D6]

                      sm:text-[15px]
                    "
                  >
                    State
                  </span>

                  <span
                    className="
                      text-right
                      text-[14px]
                      font-semibold
                      text-[#D69A2B]

                      sm:text-[15px]
                    "
                  >
                    Export Share
                  </span>
                </div>

                {/* Rows */}
                <div>
                  {states.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + index * 0.07,
                      }}
                      whileHover={{
                        x: 3,
                      }}
                      className="
                        grid
                        min-h-[48px]
                        grid-cols-[1fr_90px]
                        items-center
                        border-b
                        border-[#26394A]
                        px-2
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            h-[25px]
                            w-[25px]
                            overflow-hidden
                            rounded-full
                            border
                            border-white/20
                          "
                        >
                          <img
                            src={item.flag}
                            alt={item.name}
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>

                        <span
                          className="
                            text-[13px]
                            font-medium
                            text-[#E1E5E9]

                            sm:text-[14px]
                            lg:text-[15px]
                          "
                        >
                          {item.name}
                        </span>
                      </div>

                      <span
                        className="
                          text-right
                          text-[14px]
                          font-semibold
                          text-[#E2E5E8]

                          sm:text-[15px]
                        "
                      >
                        {item.share}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="
                    group
                    mt-5
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[7px]
                    border
                    border-[#966B2B]
                    bg-[#071522]
                    px-5
                    text-[14px]
                    font-semibold
                    text-[#D69A2B]
                    transition-all

                    hover:border-[#D69A2B]

                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  View Full State Report
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
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              px-6
              py-6
              lg:px-7
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[22px]
                font-semibold
                uppercase
                leading-tight
                text-[#F4F5F6]

                sm:text-[24px]
                lg:text-[27px]
              "
            >
              Explore India&apos;s States – Know Their Strength
            </h2>

            <p
              className="
                mt-2
                text-[14px]
                leading-[1.6]
                text-[#BFC6CD]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Select a state to see key products and strengths across industries
            </p>

            {/* State Select */}
            <div className="mt-5 max-w-[430px]">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="
                  h-[50px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#304356]
                  bg-[#071522]
                  px-4
                  text-[14px]
                  font-medium
                  text-[#E5E8EA]
                  outline-none

                  focus:border-[#D69A2B]

                  sm:text-[15px]
                "
              >
                {states.map((item) => (
                  <option
                    key={item.name}
                    value={item.name}
                    className="bg-[#071522]"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Right content */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                items-center
                gap-7

                md:grid-cols-[1.1fr_0.9fr]
              "
            >
              {/* State Map */}
              <motion.div
                key={state}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  flex
                  min-h-[350px]
                  items-center
                  justify-center
                "
              >
                <img
                  src={stateStrengthMap}
                  alt={`${state} State Strength`}
                  className="
                    max-h-[350px]
                    w-full
                    object-contain
                  "
                />
              </motion.div>

              {/* Industries */}
              <div>
                <h3
                  className="
                    text-[17px]
                    font-semibold
                    text-[#D69A2B]

                    sm:text-[18px]
                    lg:text-[20px]
                  "
                >
                  Top Products & Industries
                </h3>

                <div className="mt-5 space-y-4">
                  {industries.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.07,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-[34px]
                            w-[34px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#D69A2B]/[0.05]
                          "
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.6}
                            className="
                              text-[#D69A2B]
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          />
                        </div>

                        <span
                          className="
                            text-[14px]
                            font-medium
                            text-[#E2E5E8]

                            sm:text-[15px]
                            lg:text-[16px]
                          "
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* State Profile Button */}
                <motion.button
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    group
                    mt-7
                    flex
                    min-h-[49px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[7px]
                    border
                    border-[#976B2A]
                    bg-[#071522]
                    px-5
                    text-[14px]
                    font-semibold
                    text-[#D69A2B]
                    transition-all

                    hover:border-[#D69A2B]

                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  View State Profile
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
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
