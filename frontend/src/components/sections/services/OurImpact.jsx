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
    <section className="w-full bg-[#020d19] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="mb-3 flex items-center justify-center gap-4 px-2 sm:px-5"
        >
          {/* Left Golden Line */}
          <div className="flex w-full max-w-[420px] items-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9e6918] to-[#d99a28]" />

            <span className="ml-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d99a28]" />
          </div>

          {/* Heading */}
          <h2
            className="
              whitespace-nowrap
              px-3
              text-center
              text-[16px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-[#f5f5f5]

              sm:text-[18px]
              md:text-[20px]
              lg:text-[22px]
            "
          >
            Our Impact Across The Globe
          </h2>

          {/* Right Golden Line */}
          <div className="flex w-full max-w-[420px] items-center">
            <span className="mr-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d99a28]" />

            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#9e6918] to-[#d99a28]" />
          </div>
        </motion.div>

        {/* ================= IMPACT BOX ================= */}
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
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              2xl:grid-cols-7
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
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[145px]
                    items-center
                    justify-center
                    gap-4
                    border-b
                    border-[#17324b]
                    px-5
                    py-6
                    transition-all
                    duration-300

                    hover:bg-[#061725]

                    sm:min-h-[155px]
                    lg:min-h-[165px]

                    2xl:border-b-0
                  "
                >
                  {/* Vertical separator */}
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
                        2xl:block
                      "
                    />
                  )}

                  {/* ================= ICON ================= */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -4,
                    }}
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="
                        h-[46px]
                        w-[46px]
                        text-[#c98b25]
                        transition-all
                        duration-300

                        group-hover:text-[#e4a53e]
                      "
                    />
                  </motion.div>

                  {/* ================= TEXT ================= */}
                  <div className="flex flex-col">
                    {/* Animated Number */}
                    <CountUpNumber
                      value={item.number}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      delay={index * 100}
                    />

                    {/* Description */}
                    <span
                      className="
                        mt-3
                        whitespace-nowrap
                        text-[12px]
                        font-medium
                        leading-[1.4]
                        text-[#d6dce2]

                        sm:text-[13px]
                        lg:text-[14px]
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

/* =====================================================
   COUNT UP NUMBER
===================================================== */

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

        // Smooth ease-out
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
        scale: 0.8,
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
        text-[23px]
        font-semibold
        leading-none
        text-[#d99a28]

        sm:text-[25px]
        lg:text-[30px]
      "
    >
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </motion.span>
  );
}
