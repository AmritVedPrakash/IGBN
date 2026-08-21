import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  Eye,
  Target,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function VisionMission() {
  const whoPoints = [
    "Trusted Network",
    "Global Reach",
    "Business Growth",
    "Integrity & Transparency",
  ];

  const values = [
    "Integrity & Transparency",
    "Trust & Commitment",
    "Excellence & Innovation",
    "Collaboration & Respect",
    "Growth with Responsibility",
  ];

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-9
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* =====================================================
            TOP AREA
            LEFT  = WHO WE ARE
            RIGHT = VISION + MISSION
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* =====================================================
              WHO WE ARE
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
            whileHover={{
              y: -4,
            }}
            className="
              group
              flex
              min-h-[440px]
              flex-col
              rounded-[12px]
              border
              border-[#8A6022]/75
              bg-[#03111F]
              px-6
              py-7
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#D59A2B]
              hover:shadow-[0_16px_40px_rgba(213,154,43,0.10)]

              sm:px-7
              lg:min-h-[500px]
              lg:px-8
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D59A2B]/60
                  bg-[#D59A2B]/[0.05]
                "
              >
                <UsersRound
                  size={34}
                  strokeWidth={1.6}
                  className="
                    text-[#D59A2B]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <h3
                className="
                  text-[23px]
                  font-bold
                  uppercase
                  tracking-[0.03em]
                  text-[#D59A2B]

                  sm:text-[25px]
                  lg:text-[27px]
                "
              >
                Who We Are
              </h3>
            </div>

            {/* CONTENT */}
            <div className="mt-7">
              <p
                className="
                  text-[16px]
                  leading-[1.8]
                  text-[#E1E5E9]

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                IGBN Worldwide is a B2B trade facilitation platform dedicated to
                connecting global buyers with reliable Indian suppliers.
              </p>

              <p
                className="
                  mt-5
                  text-[16px]
                  leading-[1.8]
                  text-[#E1E5E9]

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                We bring together data, technology, people and processes to
                unlock new markets, build strong international partnerships and
                drive sustainable business growth.
              </p>

              {/* Points */}
              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2
                "
              >
                {whoPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <CheckCircle2
                      size={22}
                      strokeWidth={1.8}
                      className="
                        shrink-0
                        text-[#D59A2B]
                      "
                    />

                    <span
                      className="
                        text-[15px]
                        font-medium
                        text-[#E5E8EB]

                        sm:text-[16px]
                        lg:text-[17px]
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              lg:grid-rows-2
            "
          >
            {/* =================================================
                VISION
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                flex
                min-h-[230px]
                flex-col
                rounded-[12px]
                border
                border-[#8A6022]/75
                bg-[#03111F]
                px-6
                py-6
                shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                transition-all
                duration-300

                hover:border-[#D59A2B]
                hover:shadow-[0_14px_35px_rgba(213,154,43,0.10)]

                sm:px-7
                lg:px-8
              "
            >
              {/* HEADER */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-[55px]
                    w-[55px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D59A2B]/60
                    bg-[#D59A2B]/[0.05]
                  "
                >
                  <Eye
                    size={31}
                    strokeWidth={1.6}
                    className="
                      text-[#D59A2B]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <h3
                  className="
                    text-[22px]
                    font-bold
                    uppercase
                    tracking-[0.03em]
                    text-[#D59A2B]

                    sm:text-[24px]
                    lg:text-[26px]
                  "
                >
                  Vision
                </h3>
              </div>

              <p
                className="
                  mt-6
                  text-[16px]
                  leading-[1.8]
                  text-[#E1E5E9]

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                To be the world&apos;s most trusted and intelligent trade
                facilitation platform, driving global excellence for Indian
                businesses and strengthening India&apos;s presence worldwide.
              </p>
            </motion.div>

            {/* =================================================
                MISSION
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.15,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                flex
                min-h-[230px]
                flex-col
                rounded-[12px]
                border
                border-[#8A6022]/75
                bg-[#03111F]
                px-6
                py-6
                shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                transition-all
                duration-300

                hover:border-[#D59A2B]
                hover:shadow-[0_14px_35px_rgba(213,154,43,0.10)]

                sm:px-7
                lg:px-8
              "
            >
              {/* HEADER */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-[55px]
                    w-[55px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D59A2B]/60
                    bg-[#D59A2B]/[0.05]
                  "
                >
                  <Target
                    size={31}
                    strokeWidth={1.6}
                    className="
                      text-[#D59A2B]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <h3
                  className="
                    text-[22px]
                    font-bold
                    uppercase
                    tracking-[0.03em]
                    text-[#D59A2B]

                    sm:text-[24px]
                    lg:text-[26px]
                  "
                >
                  Mission
                </h3>
              </div>

              <p
                className="
                  mt-6
                  text-[16px]
                  leading-[1.8]
                  text-[#E1E5E9]

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                To simplify global trade, build long-term partnerships, and
                create meaningful opportunities through intelligence, networks
                and end-to-end export growth solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            OUR VALUES - FULL WIDTH BOTTOM
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.2,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            group
            mt-5
            rounded-[12px]
            border
            border-[#8A6022]/75
            bg-[#03111F]
            px-6
            py-7
            shadow-[0_10px_30px_rgba(0,0,0,0.30)]
            transition-all
            duration-300

            hover:border-[#D59A2B]
            hover:shadow-[0_15px_40px_rgba(213,154,43,0.10)]

            sm:px-7
            lg:px-8
          "
        >
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D59A2B]/60
                bg-[#D59A2B]/[0.05]
              "
            >
              <ShieldCheck
                size={33}
                strokeWidth={1.6}
                className="
                  text-[#D59A2B]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </div>

            <h3
              className="
                text-[22px]
                font-bold
                uppercase
                tracking-[0.03em]
                text-[#D59A2B]

                sm:text-[24px]
                lg:text-[26px]
              "
            >
              Our Values
            </h3>
          </div>

          {/* VALUES */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
            "
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  flex
                  min-h-[82px]
                  items-center
                  gap-3
                  rounded-[8px]
                  border
                  border-[#314354]
                  bg-[#061522]
                  px-4
                  py-4
                  transition-all
                  duration-300

                  hover:border-[#8A6022]
                  hover:bg-[#071927]
                "
              >
                <CheckCircle2
                  size={23}
                  strokeWidth={1.8}
                  className="
                    shrink-0
                    text-[#D59A2B]
                  "
                />

                <span
                  className="
                    text-[15px]
                    font-medium
                    leading-[1.5]
                    text-[#E5E8EA]

                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
