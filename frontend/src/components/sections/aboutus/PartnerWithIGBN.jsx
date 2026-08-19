import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import tigerImg from "../../../assets/aboutimg/tiger.png";

export default function PartnerWithIGBN() {
  const points = [
    "Promoting India. Supporting Business.",
    "Building Global Presence.",
    "Trusted by Indian Businesses Worldwide.",
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-8 sm:px-6 lg:px-8">
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
          border-[#765323]/80
          bg-[#03111F]
          px-5
          py-5
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-7
            xl:flex-row
            xl:justify-between
            xl:gap-8
          "
        >
          {/* ================= LEFT ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-6
              md:flex-row
              xl:w-auto
            "
          >
            {/* Tiger Image */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="
                flex
                w-[170px]
                shrink-0
                items-center
                justify-center
                sm:w-[190px]
                lg:w-[210px]
              "
            >
              <img
                src={tigerImg}
                alt="Make in India"
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </motion.div>

            {/* Heading */}
            <div className="text-center md:text-left">
              <h2
                className="
                  text-[22px]
                  font-semibold
                  leading-[1.35]
                  text-[#F3F4F5]
                  sm:text-[24px]
                  lg:text-[27px]
                "
              >
                We Don’t Just Make Promises.
                <br />
                We Create Global Opportunities.
              </h2>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div
            className="
              hidden
              h-[72px]
              w-[1px]
              bg-[#8C6328]
              xl:block
            "
          />

          {/* ================= POINTS ================= */}
          <div
            className="
              flex
              w-full
              max-w-[470px]
              flex-col
              gap-3
            "
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#D69A2B]"
                />

                <p
                  className="
                    text-[14px]
                    font-medium
                    leading-[1.5]
                    text-[#DDE2E6]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ================= BUTTON ================= */}
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              flex
              min-h-[50px]
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-[7px]
              border
              border-[#D69A2B]
              bg-gradient-to-r
              from-[#DDA643]
              via-[#D59A2E]
              to-[#C98B24]
              px-7
              text-[14px]
              font-semibold
              text-[#07111B]
              shadow-[0_8px_24px_rgba(214,154,43,0.18)]
              transition-all
              duration-300
              hover:shadow-[0_12px_30px_rgba(214,154,43,0.30)]
              sm:text-[15px]
            "
          >
            Partner With IGBN
            <ArrowRight
              size={20}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
