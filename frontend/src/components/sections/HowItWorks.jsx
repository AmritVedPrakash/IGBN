import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  Handshake,
  UsersRound,
  MapPin,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your free profile as supplier or buyer",
    },
    {
      icon: Search,
      title: "Discover",
      description: "Access live RFQs, trade data & global demand insights",
    },
    {
      icon: Handshake,
      title: "Connect",
      description: "Connect with verified partners & share quotations",
    },
    {
      icon: UsersRound,
      title: "IGBN Facilitates",
      description: "We introduce, negotiate & support for successful trade",
    },
    {
      icon: MapPin,
      title: "Grow Globally",
      description: "Expand your business across 21+ countries with IGBN",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-10
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
          rounded-[12px]
          border
          border-[#715022]/80
          bg-[#03111F]
          px-5
          pb-8
          pt-4
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]

          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-center
            text-[22px]
            font-semibold
            text-[#F5F5F5]

            sm:text-[25px]
            lg:text-[28px]
          "
        >
          How IGBN Works
        </motion.h2>

        {/* =====================================================
            STEPS

            IMPORTANT:
            xl = 1280px

            Therefore at 1366px:
            
            Register → Discover → Connect → IGBN Facilitates → Grow Globally
        ====================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-8

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-5
            xl:gap-2
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  px-2
                  text-center

                  sm:px-3
                  xl:min-h-[220px]
                  xl:px-1
                "
              >
                {/* =================================================
                    ICON + CONNECTOR
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                  "
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[80px]
                      w-[80px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B47C28]
                      bg-[#071522]
                      shadow-[0_0_20px_rgba(214,154,43,0.08)]

                      lg:h-[82px]
                      lg:w-[82px]

                      xl:h-[80px]
                      xl:w-[80px]
                    "
                  >
                    <Icon
                      size={40}
                      strokeWidth={1.45}
                      className="
                        text-[#D69A2B]
                        transition-all
                        duration-300
                        group-hover:text-[#E8AE47]

                        xl:size-[38px]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      DESKTOP CONNECTING ARROW

                      xl:flex = 1280px+

                      So it will work at 1366px.
                  ================================================== */}

                  {index !== steps.length - 1 && (
                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="
                        absolute
                        left-[calc(50%+48px)]
                        top-1/2
                        hidden
                        w-[calc(100%-96px)]
                        origin-left
                        -translate-y-1/2
                        items-center

                        xl:flex
                      "
                    >
                      {/* DOTTED LINE */}

                      <div
                        className="
                          flex-1
                          border-t-[3px]
                          border-dotted
                          border-[#9A6C26]
                        "
                      />

                      {/* ARROW */}

                      <ArrowRight
                        size={23}
                        strokeWidth={2}
                        className="
                          -ml-[2px]
                          shrink-0
                          text-[#D69A2B]
                        "
                      />
                    </motion.div>
                  )}
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mt-5
                    text-[16px]
                    font-semibold
                    leading-[1.4]
                    text-[#F3F4F5]

                    sm:text-[17px]

                    lg:text-[18px]

                    xl:text-[17px]
                  "
                >
                  {step.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-2
                    max-w-[230px]
                    text-[13px]
                    leading-[1.65]
                    text-[#CDD3D9]

                    sm:text-[14px]

                    lg:text-[15px]

                    xl:max-w-[215px]
                    xl:text-[14px]
                  "
                >
                  {step.description}
                </p>

                {/* =================================================
                    MOBILE / TABLET CONNECTOR
                ================================================== */}

                {index !== steps.length - 1 && (
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      mt-5
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-[#D69A2B]

                      xl:hidden
                    "
                  >
                    <div
                      className="
                        mb-1
                        h-[45px]
                        border-l-2
                        border-dotted
                        border-[#9A6C26]
                      "
                    />

                    <ArrowDown size={18} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
