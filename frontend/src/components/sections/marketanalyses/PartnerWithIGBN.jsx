import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import tigerImg from "../../../assets/marketanalyses/tiger.png";

export default function PartnerWithIGBN() {
  const points = [
    "Promoting India. Supporting Business.",
    "Building Global Presence.",
    "Trusted by Indian Businesses Worldwide.",
  ];

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <motion.div
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
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-6
          py-6
          shadow-[0_12px_40px_rgba(0,0,0,0.30)]

          sm:px-7
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-7

            lg:grid-cols-[0.55fr_1.25fr_1fr_0.8fr]
            lg:gap-8
          "
        >
          {/* =====================================================
              TIGER IMAGE
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
              scale: 1.04,
            }}
            className="
              flex
              items-center
              justify-center
            "
          >
            <motion.img
              src={tigerImg}
              alt="Make in India"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-auto
                w-[180px]
                object-contain

                sm:w-[200px]
                lg:w-[220px]
              "
            />
          </motion.div>

          {/* =====================================================
              HEADING
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
          >
            <h2
              className="
                text-center
                text-[24px]
                font-semibold
                leading-[1.45]
                text-[#D69A2B]

                sm:text-[27px]
                lg:text-left
                lg:text-[29px]
                xl:text-[31px]
              "
            >
              We Don’t Just Make Promises,
              <br />
              We Create Global Opportunities.
            </h2>
          </motion.div>

          {/* =====================================================
              BENEFIT POINTS
          ====================================================== */}
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  x: 20,
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
                  delay: 0.2 + index * 0.08,
                }}
                whileHover={{
                  x: 4,
                }}
                className="
                  group
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
                    group-hover:scale-110
                  "
                />

                <p
                  className="
                    text-[15px]
                    font-medium
                    leading-[1.5]
                    text-[#E2E5E8]

                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* =====================================================
              CTA BUTTON
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              delay: 0.35,
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
               
                items-center
                justify-center
                gap-4
                rounded-[8px]
                border
                border-[#D69A2B]
                bg-gradient-to-r
                from-[#E0AA48]
                via-[#D99B2B]
                to-[#C98A24]
                
                
                font-semibold
                text-[#07111B]
                shadow-[0_8px_25px_rgba(214,154,43,0.20)]
                transition-all
                duration-300

                hover:shadow-[0_12px_32px_rgba(214,154,43,0.30)]
                min-h-[68px]
                min-w-[300px]
                px-9
                text-[18px]
                sm:text-[19px]
                lg:text-[20px]
              "
            >
              Partner With IGBN
              <ArrowRight
                size={22}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
