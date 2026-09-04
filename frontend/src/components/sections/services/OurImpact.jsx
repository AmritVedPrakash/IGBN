import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Users,
  UserPlus,
  DollarSign,
  Building2,
  BadgeCheck,
  Layers3,
} from "lucide-react";

export default function OurImpact() {
  const impactData = [
    {
      icon: Trophy,
      number: 3482,
      prefix: "",
      suffix: "+",
      text: "Active RFQs",
    },
    {
      icon: Users,
      number: 1250,
      prefix: "",
      suffix: "+",
      text: "Verified Suppliers",
    },
    {
      icon: UserPlus,
      number: 186,
      prefix: "",
      suffix: "+",
      text: "Buyer Introductions",
    },
    {
      icon: DollarSign,
      number: 451,
      prefix: "$",
      suffix: "B+",
      text: "Export Opportunities",
    },
    {
      icon: Building2,
      number: 500,
      prefix: "",
      suffix: "+",
      text: "Products Covered",
    },
    {
      icon: BadgeCheck,
      number: 17,
      prefix: "",
      suffix: "",
      text: "Trade Ambassadors",
    },
    {
      icon: Layers3,
      number: 12,
      prefix: "",
      suffix: "+",
      text: "Industry Verticals",
    },
  ];

  return (
    <section className="w-full bg-[#020d19] px-4 py-8 md:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[1650px]">
        {/* =====================================================
            HEADING
        ===================================================== */}
        <motion.div
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
            mb-4
            flex
            w-full
            items-center
            justify-center
            gap-3
            sm:gap-4
            lg:gap-5
          "
        >
          {/* LEFT LINE */}
          <div className="flex min-w-0 flex-1 items-center justify-end">
            <div
              className="
                h-[1px]
                w-full
                max-w-[420px]
                bg-gradient-to-r
                from-transparent
                via-[#9e6918]
                to-[#d99a28]
              "
            />

            <span
              className="
                ml-[-1px]
                h-[5px]
                w-[5px]
                shrink-0
                rotate-45
                bg-[#d99a28]
              "
            />
          </div>

          {/* HEADING */}
          <h2
            className="
              shrink-0
              whitespace-nowrap
              px-2
              text-center
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-[#f5f5f5]

              sm:text-[17px]
              md:text-[20px]
              lg:text-[22px]
              xl:text-[24px]
              2xl:text-[28px]
            "
          >
            Our Impact Across The Globe
          </h2>

          {/* RIGHT LINE */}
          <div className="flex min-w-0 flex-1 items-center">
            <span
              className="
                mr-[-1px]
                h-[5px]
                w-[5px]
                shrink-0
                rotate-45
                bg-[#d99a28]
              "
            />

            <div
              className="
                h-[1px]
                w-full
                max-w-[420px]
                bg-gradient-to-l
                from-transparent
                via-[#9e6918]
                to-[#d99a28]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            IMPACT BOX
        ===================================================== */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            w-full
            overflow-hidden
            rounded-[12px]
            border
            border-[#17324b]
            bg-[#03111f]
            shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          "
        >
          <div
            className="
              grid
              w-full

              grid-cols-1

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-4

              xl:grid-cols-7
            "
          >
            {impactData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
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
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    relative

                    flex
                    min-w-0
                    items-center
                    justify-center

                    gap-3

                    border-b
                    border-[#17324b]

                    px-4
                    py-5

                    min-h-[130px]

                    transition-all
                    duration-300

                    hover:bg-[#061725]

                    sm:min-h-[140px]

                    lg:min-h-[145px]

                    xl:min-h-[155px]
                    xl:border-b-0
                    xl:gap-2
                    xl:px-3
                    xl:py-5

                    2xl:min-h-[165px]
                    2xl:gap-4
                    2xl:px-5
                    2xl:py-6
                  "
                >
                  {/* =================================================
                      VERTICAL SEPARATOR
                  ================================================= */}
                  {index !== impactData.length - 1 && (
                    <span
                      className="
                        absolute
                        right-0
                        top-[18%]

                        hidden

                        h-[64%]
                        w-[1px]

                        bg-gradient-to-b
                        from-transparent
                        via-[#29465f]
                        to-transparent

                        xl:block
                      "
                    />
                  )}

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center

                      h-[48px]
                      w-[48px]

                      sm:h-[52px]
                      sm:w-[52px]

                      xl:h-[44px]
                      xl:w-[44px]

                      2xl:h-[60px]
                      2xl:w-[60px]
                    "
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="
                        h-[38px]
                        w-[38px]

                        shrink-0

                        text-[#c98b25]

                        transition-all
                        duration-300

                        group-hover:text-[#e4a53e]

                        xl:h-[34px]
                        xl:w-[34px]

                        2xl:h-[46px]
                        2xl:w-[46px]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-col
                      justify-center
                    "
                  >
                    {/* NUMBER */}
                    <CountUpNumber
                      value={item.number}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      delay={index * 100}
                    />

                    {/* DESCRIPTION */}
                    <span
                      className="
                        mt-2
                        whitespace-nowrap

                        text-[11px]
                        font-medium
                        leading-[1.3]

                        text-[#d6dce2]

                        sm:text-[12px]

                        xl:text-[10px]

                        2xl:mt-3
                        2xl:text-[16px]
                      "
                    >
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   COUNT UP NUMBER
========================================================= */

function CountUpNumber({ value, prefix = "", suffix = "", delay = 0 }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    let startTime = null;

    const duration = 1800;

    const timer = setTimeout(() => {
      const animateNumber = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Smooth ease-out animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(value * easedProgress);

        setCount(currentValue);

        if (progress < 1) {
          frameId = requestAnimationFrame(animateNumber);
        } else {
          setCount(value);
        }
      };

      frameId = requestAnimationFrame(animateNumber);
    }, delay);

    return () => {
      clearTimeout(timer);

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isInView, value, delay]);

  return (
    <motion.span
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.4,
      }}
      className="
        whitespace-nowrap

        text-[22px]
        font-semibold
        leading-none

        text-[#d99a28]

        sm:text-[24px]

        xl:text-[20px]

        2xl:text-[30px]
      "
    >
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </motion.span>
  );
}
