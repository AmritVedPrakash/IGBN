import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  UsersRound,
  Building2,
  PackageOpen,
  MessagesSquare,
  CircleDollarSign,
} from "lucide-react";

export default function KeyMetrics() {
  const metrics = [
    {
      icon: UsersRound,
      value: 10000,
      prefix: "",
      suffix: "+",
      displayType: "normal",
      label: "Verified Buyers",
    },
    {
      icon: Building2,
      value: 5000,
      prefix: "",
      suffix: "+",
      displayType: "normal",
      label: "Verified Suppliers",
    },
    {
      icon: PackageOpen,
      value: 25,
      prefix: "",
      suffix: "K+",
      displayType: "short",
      label: "Products Listed",
    },
    {
      icon: MessagesSquare,
      value: 100,
      prefix: "",
      suffix: "K+",
      displayType: "short",
      label: "RFQs Posted",
    },
    {
      icon: CircleDollarSign,
      value: 451,
      prefix: "$",
      suffix: "B+",
      displayType: "short",
      label: "Export Opportunities",
    },
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
          border-[#725021]/80
          bg-[#03111F]
          shadow-[0_12px_40px_rgba(0,0,0,0.30)]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
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
                viewport={{ once: true }}
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
                  min-h-[145px]
                  items-center
                  justify-center
                  gap-5
                  border-b
                  border-[#26394A]
                  px-5
                  py-6

                  xl:border-b-0
                "
              >
                {/* ================= DIVIDER ================= */}
                {index !== metrics.length - 1 && (
                  <span
                    className="
                      absolute
                      right-0
                      top-[20%]
                      hidden
                      h-[60%]
                      w-[1px]
                      bg-gradient-to-b
                      from-transparent
                      via-[#725021]
                      to-transparent
                      xl:block
                    "
                  />
                )}

                {/* ================= ICON ================= */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  className="
                    flex
                    h-[66px]
                    w-[66px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A9782D]/70
                    bg-[#071522]
                    shadow-[0_0_18px_rgba(214,154,43,0.08)]
                  "
                >
                  <Icon
                    size={37}
                    strokeWidth={1.5}
                    className="
                      text-[#D69A2B]
                      transition-colors
                      duration-300
                      group-hover:text-[#E8AE47]
                    "
                  />
                </motion.div>

                {/* ================= TEXT ================= */}
                <div>
                  <CountUpNumber
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    displayType={item.displayType}
                  />

                  <p
                    className="
                      mt-3
                      text-[15px]
                      font-medium
                      leading-[1.45]
                      text-[#DCE1E5]

                      sm:text-[16px]
                      lg:text-[17px]
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* =====================================================
   COUNT UP COMPONENT
===================================================== */

function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  displayType = "normal",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;

    const duration = 1800;

    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      /*
        Ease Out animation
        Fast start, smooth finish
      */
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value]);

  const formatNumber = (number) => {
    if (displayType === "normal") {
      return number.toLocaleString("en-US");
    }

    return number;
  };

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
        text-[28px]
        font-semibold
        leading-none
        text-[#F4F5F6]

        sm:text-[30px]
        lg:text-[32px]
        xl:text-[34px]
      "
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.p>
  );
}
