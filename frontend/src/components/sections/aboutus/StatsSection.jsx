import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe2,
  MapPin,
  BadgeCheck,
  UsersRound,
  Boxes,
  Award,
  Building2,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Globe2,
      number: 21,
      suffix: "+",
      text: "Countries Connected",
    },
    {
      icon: MapPin,
      number: 3482,
      suffix: "+",
      text: "Active RFQs",
    },
    {
      icon: BadgeCheck,
      number: 1250,
      suffix: "+",
      text: "Verified Suppliers",
    },
    {
      icon: UsersRound,
      number: 186,
      suffix: "+",
      text: "Buyer Introductions",
    },
    {
      icon: Boxes,
      number: 500,
      suffix: "+",
      text: "Products Covered",
    },
    {
      icon: Award,
      number: 17,
      suffix: "",
      text: "Trade Ambassadors",
    },
    {
      icon: Building2,
      number: 12,
      suffix: "+",
      text: "Industry Verticals",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= STATS BOX ================= */}
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
          }}
          className="
            overflow-hidden
            rounded-[10px]
            border
            border-[#6f501f]/60
            bg-[#03111F]
            shadow-[0_8px_30px_rgba(0,0,0,0.30)]
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
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    min-h-[105px]
                    items-center
                    justify-center
                    gap-4
                    border-b
                    border-[#26394B]
                    px-4
                    py-5
                    transition-all
                    duration-300

                    hover:bg-[#071725]

                    2xl:border-b-0
                  "
                >
                  {/* ================= VERTICAL DIVIDER ================= */}
                  {index !== stats.length - 1 && (
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
                        via-[#7B5720]/70
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
                      h-[54px]
                      w-[54px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C88B27]/35
                      bg-[#D39930]/[0.03]
                      transition-all
                      duration-300

                      group-hover:border-[#D99B2B]/70
                      group-hover:bg-[#D99B2B]/[0.06]
                    "
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="
                        text-[#D99B2B]
                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-[#E7AE48]
                      "
                    />
                  </motion.div>

                  {/* ================= TEXT ================= */}
                  <div className="flex min-w-0 flex-col">
                    {/* Animated Number */}
                    <CountUpNumber
                      value={item.number}
                      suffix={item.suffix}
                      delay={index * 100}
                    />

                    {/* Label */}
                    <span
                      className="
                        mt-2
                        text-[12px]
                        font-medium
                        leading-[1.35]
                        text-[#E0E4E8]

                        sm:text-[13px]
                        xl:text-[14px]
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

function CountUpNumber({ value, suffix = "", delay = 0 }) {
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
        text-[21px]
        font-semibold
        leading-none
        text-[#D99B2B]

        sm:text-[25px]
        lg:text-[25px]
        xl:text-[32px]
      "
    >
      {count.toLocaleString("en-US")}
      {suffix}
    </motion.span>
  );
}
