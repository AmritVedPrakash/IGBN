import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe2,
  ScanLine,
  UserRoundCheck,
  UsersRound,
  Boxes,
  Award,
} from "lucide-react";

import networkImg from "../../assets/homebg/network-globe.png";

export default function KeyMetrics2() {
  const metrics = [
    {
      icon: Globe2,
      value: 21,
      suffix: "+",
      label1: "Countries",
      label2: "Connected",
    },
    {
      icon: ScanLine,
      value: 3482,
      suffix: "+",
      label1: "Active",
      label2: "RFQs",
    },
    {
      icon: UserRoundCheck,
      value: 1250,
      suffix: "+",
      label1: "Verified",
      label2: "Suppliers",
    },
    {
      icon: UsersRound,
      value: 186,
      suffix: "+",
      label1: "Buyer",
      label2: "Introductions",
    },
    {
      icon: Boxes,
      value: 500,
      suffix: "+",
      label1: "Products",
      label2: "Covered",
    },
    {
      icon: Award,
      value: 17,
      suffix: "",
      label1: "Trade",
      label2: "Ambassadors",
    },
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
          relative
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-5
          py-6
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]

          sm:px-6
          lg:px-7
        "
      >
        {/* Golden Glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-1/2
            h-[300px]
            w-[300px]
            -translate-y-1/2
            rounded-full
            bg-[#D69A2B]/[0.05]
            blur-[90px]
          "
        />

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            items-center
            gap-7
            xl:grid-cols-[1fr_180px]
            xl:gap-4
          "
        >
          {/* =====================================================
              LEFT METRICS
          ====================================================== */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-6
            "
          >
            {metrics.map((item, index) => {
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[125px]
                    items-center
                    gap-4
                    px-4
                    py-5
                  "
                >
                  {/* Divider */}
                  {index !== metrics.length - 1 && (
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
                        via-[#725021]
                        to-transparent
                        xl:block
                      "
                    />
                  )}

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    className="
                      flex
                      h-[62px]
                      w-[62px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B47C28]/70
                      bg-[#071522]
                      shadow-[0_0_18px_rgba(214,154,43,0.08)]
                    "
                  >
                    <Icon
                      size={35}
                      strokeWidth={1.5}
                      className="
                        text-[#D69A2B]
                        transition-colors
                        duration-300
                        group-hover:text-[#E8AE47]
                      "
                    />
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    {/* Animated Number */}
                    <CountUpNumber
                      value={item.value}
                      suffix={item.suffix}
                      delay={index * 120}
                    />

                    {/* Label */}
                    <p
                      className="
                        mt-3
                        text-[14px]
                        font-medium
                        leading-[1.45]
                        text-[#E1E5E9]

                        sm:text-[15px]
                        lg:text-[16px]
                      "
                    >
                      {item.label1}
                      <br />
                      {item.label2}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 25,
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
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              hidden
              h-[150px]
              w-[180px]
              items-center
              justify-center
              xl:flex
            "
          >
            <motion.img
              src={networkImg}
              alt="Global Network"
              animate={{
                scale: [1, 1.04, 1],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-full
                object-contain
                drop-shadow-[0_0_18px_rgba(214,154,43,0.20)]
              "
            />
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              flex
              justify-center
              xl:hidden
            "
          >
            <img
              src={networkImg}
              alt="Global Network"
              className="
                h-[130px]
                w-[170px]
                object-contain
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   COUNT UP NUMBER
========================================================= */

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
    <motion.p
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
        
        font-bold
        leading-none
        text-[#D69A2B]

       text-[32px]
sm:text-[35px]
lg:text-[38px]
xl:text-[35px]
      "
    >
      {count.toLocaleString("en-US")}
      {suffix}
    </motion.p>
  );
}
