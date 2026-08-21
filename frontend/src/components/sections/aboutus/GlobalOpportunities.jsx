import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  UserSearch,
  Handshake,
  FileCheck2,
  Factory,
  Network,
  ArrowRight,
} from "lucide-react";

export default function GlobalOpportunities() {
  const opportunities = [
    {
      icon: Search,
      title: "Research &",
      title2: "Market Intelligence",
      description:
        "We analyze global demand trends, tariffs, buyers and competition.",
    },
    {
      icon: Target,
      title: "Market Selection",
      title2: "& Strategy",
      description:
        "AI-driven opportunity scoring to identify the right markets for your products.",
    },
    {
      icon: UserSearch,
      title: "Buyer Identification",
      title2: "& Qualification",
      description:
        "We find, verify and qualify genuine buyers, importers and distributors.",
    },
    {
      icon: Handshake,
      title: "Outreach &",
      title2: "Introductions",
      description:
        "Our in-country teams initiate outreach and secure warm introductions.",
    },
    {
      icon: FileCheck2,
      title: "Negotiation &",
      title2: "Deal Support",
      description:
        "We support discussions, quotations, negotiations and deal closure.",
    },
    {
      icon: Factory,
      title: "Export Execution",
      title2: "& Growth",
      description:
        "From documentation to logistics — we ensure smooth execution and repeat orders.",
    },
    {
      icon: Network,
      title: "Long-Term",
      title2: "Partnerships",
      description:
        "We stay with you for long-term growth, expansion and new market entry.",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
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
          amount: 0.1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#765323]/80
          bg-[#03111F]
          px-5
          pb-7
          pt-5
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]

          sm:px-6
          lg:px-7
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
            leading-tight
            text-[#F5F5F5]

            sm:text-[25px]
            lg:text-[28px]
          "
        >
          How IGBN Creates Global Opportunities
        </motion.h2>

        {/* =====================================================
            PROCESS
        ====================================================== */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            lg:grid-cols-4
            2xl:grid-cols-7
          "
        >
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            const stepDelay = index * 0.22;

            return (
              <motion.div
                key={index}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: stepDelay,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[255px]
                  flex-col
                  items-center
                  px-3
                  text-center
                "
              >
                {/* =================================================
                    ICON + DESKTOP CONNECTION
                ================================================= */}
                <div
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                  "
                >
                  {/* ================= ICON CIRCLE ================= */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.65,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: stepDelay,
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: -4,
                      boxShadow:
                        "0 0 28px rgba(214,154,43,0.25)",
                    }}
                    className="
                      relative
                      z-20
                      flex
                      h-[78px]
                      w-[78px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A97528]
                      bg-[#071522]
                      shadow-[0_0_20px_rgba(214,154,43,0.10)]
                    "
                  >
                    {/* Subtle icon pulse */}
                    <motion.span
                      animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border
                        border-[#D69A2B]/40
                      "
                    />

                    <Icon
                      size={37}
                      strokeWidth={1.5}
                      className="
                        relative
                        z-10
                        text-[#D69A2B]
                        transition-all
                        duration-300

                        group-hover:text-[#E8AC43]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      DESKTOP CONNECTING LINE
                  ================================================= */}
                  {index !== opportunities.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[calc(50%+48px)]
                        top-1/2
                        hidden
                        h-[24px]
                        w-[calc(100%-58px)]
                        -translate-y-1/2
                        items-center

                        2xl:flex
                      "
                    >
                      <div
                        className="
                          relative
                          h-full
                          w-full
                        "
                      >
                        {/* =========================================
                            BACKGROUND FAINT DOTTED LINE
                        ========================================== */}
                        <div
                          className="
                            absolute
                            left-0
                            top-1/2
                            h-[4px]
                            w-full
                            -translate-y-1/2
                            opacity-30
                          "
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #D69A2B 2.2px, transparent 2.5px)",
                            backgroundSize: "11px 4px",
                            backgroundRepeat: "repeat-x",
                          }}
                        />

                        {/* =========================================
                            ANIMATED DOTTED LINE
                        ========================================== */}
                        <motion.div
                          initial={{
                            scaleX: 0,
                          }}
                          whileInView={{
                            scaleX: 1,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.7,
                          }}
                          transition={{
                            duration: 0.9,
                            delay: 0.35 + stepDelay,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            left-0
                            top-1/2
                            h-[5px]
                            w-full
                            origin-left
                            -translate-y-1/2
                          "
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #E5A83A 2.4px, transparent 2.8px)",
                            backgroundSize: "11px 5px",
                            backgroundRepeat: "repeat-x",
                            filter:
                              "drop-shadow(0 0 5px rgba(214,154,43,0.35))",
                          }}
                        />

                        {/* =========================================
                            GLOWING MOVING DOT
                        ========================================== */}
                        <motion.span
                          initial={{
                            left: "0%",
                            opacity: 0,
                          }}
                          whileInView={{
                            left: "calc(100% - 9px)",
                            opacity: [0, 1, 1, 0],
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.95,
                            delay: 0.35 + stepDelay,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            top-1/2
                            z-20
                            h-[11px]
                            w-[11px]
                            -translate-y-1/2
                            rounded-full
                            bg-[#FFD379]
                            shadow-[0_0_14px_rgba(255,211,121,0.95)]
                          "
                        />

                        {/* =========================================
                            ARROW AT END
                        ========================================== */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.6,
                            x: -8,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 1.15 + stepDelay,
                          }}
                          className="
                            absolute
                            -right-[8px]
                            top-1/2
                            z-30
                            -translate-y-1/2
                          "
                        >
                          <ArrowRight
                            size={23}
                            strokeWidth={2.8}
                            className="
                              text-[#E1A336]
                              drop-shadow-[0_0_7px_rgba(214,154,43,0.55)]
                            "
                          />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}
                <motion.h3
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
                    duration: 0.45,
                    delay: 0.15 + stepDelay,
                  }}
                  className="
                    mt-5
                    text-[15px]
                    font-semibold
                    leading-[1.35]
                    text-[#F3F4F5]

                    sm:text-[16px]
                    lg:text-[17px]
                    2xl:text-[18px]
                  "
                >
                  {item.title}
                  <br />
                  {item.title2}
                </motion.h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <motion.p
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
                    duration: 0.45,
                    delay: 0.23 + stepDelay,
                  }}
                  className="
                    mt-3
                    max-w-[220px]
                    text-[13px]
                    font-normal
                    leading-[1.65]
                    text-[#C8CFD6]

                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  {item.description}
                </motion.p>

                {/* =================================================
                    MOBILE / TABLET ANIMATED CONNECTION
                ================================================= */}
                {index !== opportunities.length - 1 && (
                  <div
                    className="
                      mt-6
                      flex
                      h-[24px]
                      w-[90px]
                      items-center
                      justify-center

                      2xl:hidden
                    "
                  >
                    <div className="relative h-full w-full">
                      {/* Base dotted line */}
                      <div
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-[4px]
                          w-[70px]
                          -translate-y-1/2
                          opacity-30
                        "
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #D69A2B 2px, transparent 2.5px)",
                          backgroundSize: "10px 4px",
                          backgroundRepeat: "repeat-x",
                        }}
                      />

                      {/* Animated dotted line */}
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
                          delay: 0.25 + stepDelay,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-[5px]
                          w-[70px]
                          origin-left
                          -translate-y-1/2
                        "
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #E1A336 2.3px, transparent 2.7px)",
                          backgroundSize: "10px 5px",
                          backgroundRepeat: "repeat-x",
                        }}
                      />

                      {/* Moving glow */}
                      <motion.span
                        initial={{
                          left: "0px",
                          opacity: 0,
                        }}
                        whileInView={{
                          left: "61px",
                          opacity: [0, 1, 1, 0],
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.75,
                          delay: 0.25 + stepDelay,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          top-1/2
                          h-[9px]
                          w-[9px]
                          -translate-y-1/2
                          rounded-full
                          bg-[#FFD379]
                          shadow-[0_0_12px_rgba(255,211,121,0.9)]
                        "
                      />

                      {/* Arrow */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -6,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.9 + stepDelay,
                        }}
                        className="
                          absolute
                          right-0
                          top-1/2
                          -translate-y-1/2
                        "
                      >
                        <ArrowRight
                          size={21}
                          strokeWidth={2.6}
                          className="text-[#D69A2B]"
                        />
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}