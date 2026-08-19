import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import ceoImg from "../../../assets/aboutimg/ceo.png";
import directorImg from "../../../assets/aboutimg/director.png";

export default function OurLeadership() {
  const directorPoints = [
    "Global Market Development",
    "Strategic Partnerships",
    "Trade Promotion & Expansion",
    "International Business Strategy",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        md:py-12
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-1/2
          h-[400px]
          w-[400px]
          -translate-y-1/2
          rounded-full
          bg-[#D79A2B]/[0.04]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* ==================================================
            MAIN GRID
        ================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            xl:grid-cols-[1.35fr_0.95fr]
          "
        >
          {/* ==================================================
              CEO CARD
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="
              group
              overflow-hidden
              rounded-[12px]
              border
              border-[#725021]/75
              bg-[#03111F]
              shadow-[0_12px_35px_rgba(0,0,0,0.32)]
              transition-all
              duration-300

              hover:border-[#A9792C]
            "
          >
            <div
              className="
                grid
                min-h-[440px]
                grid-cols-1
                md:grid-cols-[0.85fr_1.25fr]
              "
            >
              {/* ================= CEO IMAGE ================= */}
              <div
                className="
                  relative
                  min-h-[380px]
                  overflow-hidden
                  bg-[#061522]
                  md:min-h-full
                "
              >
                <img
                  src={ceoImg}
                  alt="Roopali Chauhan - CEO"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#020D18]/35
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* ================= CEO CONTENT ================= */}
              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-center
                  px-6
                  py-7
                  sm:px-7
                  md:px-8
                  lg:px-9
                "
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[80px]
                    -top-[80px]
                    h-[230px]
                    w-[230px]
                    rounded-full
                    bg-[#D79A2B]/[0.06]
                    blur-[75px]
                  "
                />

                <div className="relative z-10">
                  {/* Small Heading */}
                  <p
                    className="
                      text-[15px]
                      font-semibold
                      uppercase
                      tracking-[0.045em]
                      text-[#7FA7C7]
                      sm:text-[16px]
                      lg:text-[17px]
                    "
                  >
                    Message From Our CEO
                  </p>

                  {/* Name */}
                  <h2
                    className="
                      mt-3
                      text-[27px]
                      font-semibold
                      leading-tight
                      text-[#F5F5F5]
                      sm:text-[30px]
                      lg:text-[32px]
                    "
                  >
                    Roopali Chauhan
                  </h2>

                  {/* Designation */}
                  <p
                    className="
                      mt-2
                      text-[14px]
                      font-semibold
                      leading-[1.5]
                      text-[#D69A2B]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    Co-Founder & CEO, IGBN Worldwide
                  </p>

                  {/* Paragraph 1 */}
                  <p
                    className="
                      mt-6
                      max-w-[650px]
                      text-[14px]
                      font-normal
                      leading-[1.8]
                      text-[#D9DEE3]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    At IGBN Worldwide, our purpose is simple yet powerful — to
                    connect businesses, open new doors, and create opportunities
                    that go beyond borders.
                  </p>

                  {/* Paragraph 2 */}
                  <p
                    className="
                      mt-4
                      max-w-[650px]
                      text-[14px]
                      font-normal
                      leading-[1.8]
                      text-[#D9DEE3]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    We are committed to building trust, fostering partnerships,
                    and empowering businesses to grow on a global scale.
                  </p>

                  {/* Signature */}
                  <p
                    className="
                      mt-5
                      font-serif
                      text-[27px]
                      italic
                      leading-none
                      text-[#D69A2B]
                      sm:text-[30px]
                    "
                  >
                    Roopali Chauhan
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group/btn
                      mt-6
                      inline-flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-3
                      rounded-[6px]
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
                      shadow-[0_7px_22px_rgba(214,154,43,0.18)]
                      transition-all
                      duration-300

                      hover:shadow-[0_10px_28px_rgba(214,154,43,0.28)]

                      sm:text-[15px]
                    "
                  >
                    Know More About Our CEO
                    <ArrowRight
                      size={20}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-300
                        group-hover/btn:translate-x-1
                      "
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              ASSOCIATE DIRECTOR CARD
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="
              overflow-hidden
              rounded-[12px]
              border
              border-[#725021]/75
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_12px_35px_rgba(0,0,0,0.32)]
              transition-all
              duration-300

              hover:border-[#A9792C]

              sm:px-7
              lg:px-8
            "
          >
            {/* ================= HEADING ================= */}
            <h2
              className="
                text-[19px]
                font-bold
                uppercase
                tracking-[0.025em]
                text-[#D69A2B]
                sm:text-[20px]
                lg:text-[22px]
              "
            >
              Our Associate Director
            </h2>

            {/* ================= CONTENT ================= */}
            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-[0.82fr_1.18fr]
                sm:items-start
              "
            >
              {/* ================= DIRECTOR IMAGE ================= */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#354658]
                  bg-[#E9E9E9]
                  shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                "
              >
                <img
                  src={directorImg}
                  alt="Rahul Sharma - Associate Director"
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    object-top
                    sm:h-[350px]
                    xl:h-[365px]
                  "
                />
              </motion.div>

              {/* ================= DETAILS ================= */}
              <div>
                <h3
                  className="
                    text-[27px]
                    font-semibold
                    leading-tight
                    text-[#F5F5F5]
                    lg:text-[30px]
                  "
                >
                  Rahul Sharma
                </h3>

                <p
                  className="
                    mt-2
                    text-[14px]
                    font-semibold
                    leading-[1.5]
                    text-[#D69A2B]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Associate Director – Global Trade
                </p>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-[1.8]
                    text-[#D8DDE2]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Oversees international partnerships and trade development
                  initiatives across key markets.
                </p>

                {/* ================= POINTS ================= */}
                <div className="mt-5 space-y-3">
                  {directorPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.06,
                      }}
                      className="
                        group/item
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <CheckCircle2
                        size={21}
                        strokeWidth={1.9}
                        className="
                          mt-[1px]
                          shrink-0
                          text-[#D69A2B]
                          transition-transform
                          duration-300
                          group-hover/item:scale-110
                        "
                      />

                      <span
                        className="
                          text-[14px]
                          font-medium
                          leading-[1.5]
                          text-[#E3E6E9]
                          sm:text-[15px]
                          lg:text-[16px]
                        "
                      >
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= SLIDER DOTS ================= */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <span
                className="
                  h-[12px]
                  w-[12px]
                  rounded-full
                  bg-[#D69A2B]
                  shadow-[0_0_12px_rgba(214,154,43,0.35)]
                "
              />

              <span className="h-[11px] w-[11px] rounded-full bg-[#5B6671]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#5B6671]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#5B6671]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#5B6671]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
