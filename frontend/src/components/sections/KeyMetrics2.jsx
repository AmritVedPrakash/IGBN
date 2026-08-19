import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ScanLine,
  UserRoundCheck,
  UsersRound,
  Boxes,
  Award,
} from "lucide-react";

// Right side image
// Apne actual filename ke according change kar lena
import networkImg from "../../assets/homebg/network-globe.png";

export default function KeyMetrics2() {
  const metrics = [
    {
      icon: Globe2,
      value: "21+",
      label1: "Countries",
      label2: "Connected",
    },
    {
      icon: ScanLine,
      value: "3,482+",
      label1: "Active",
      label2: "RFQs",
    },
    {
      icon: UserRoundCheck,
      value: "1,250+",
      label1: "Verified",
      label2: "Suppliers",
    },
    {
      icon: UsersRound,
      value: "186+",
      label1: "Buyer",
      label2: "Introductions",
    },
    {
      icon: Boxes,
      value: "500+",
      label1: "Products",
      label2: "Covered",
    },
    {
      icon: Award,
      value: "17",
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
        {/* Background Golden Glow */}
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
                  {/* Vertical Divider */}
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

                  {/* ================= ICON ================= */}
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

                  {/* ================= TEXT ================= */}
                  <div>
                    {/* Value */}
                    <motion.p
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + index * 0.08,
                      }}
                      className="
                        whitespace-nowrap
                        text-[25px]
                        font-bold
                        leading-none
                        text-[#D69A2B]

                        sm:text-[27px]
                        lg:text-[29px]
                      "
                    >
                      {item.value}
                    </motion.p>

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
