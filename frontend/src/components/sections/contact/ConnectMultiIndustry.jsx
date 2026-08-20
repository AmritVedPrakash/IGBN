import React from "react";
import { motion } from "framer-motion";
import {
  Wheat,
  Shirt,
  FlaskConical,
  Settings,
  Pill,
  House,
  MonitorSmartphone,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

// actual filename ke according change kar lena
import industryBg from "../../../assets/contactimg/industry-bg.png";

export default function ConnectMultiIndustry() {
  const industries = [
    {
      icon: Wheat,
      title1: "Agro & Food",
      title2: "Processing",
    },
    {
      icon: Shirt,
      title1: "Textiles &",
      title2: "Apparel",
    },
    {
      icon: FlaskConical,
      title1: "Chemicals &",
      title2: "Materials",
    },
    {
      icon: Settings,
      title1: "Machinery &",
      title2: "Engineering",
    },
    {
      icon: Pill,
      title1: "Pharmaceuticals",
      title2: "",
    },
    {
      icon: House,
      title1: "Home &",
      title2: "Lifestyle",
    },
    {
      icon: MonitorSmartphone,
      title1: "IT & Digital",
      title2: "Services",
    },
    {
      icon: LayoutGrid,
      title1: "And Many",
      title2: "More",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
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
          duration: 0.65,
        }}
        className="
          relative
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#765323]/80
          bg-[#03111F]
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
        "
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <div className="absolute inset-0">
          <img
            src={industryBg}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Main dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[#020D18]/65
            "
          />

          {/* Center dark area like reference */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020D18]/35
              via-[#020D18]/80
              to-[#020D18]/35
            "
          />

          {/* Bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[80px]
              bg-gradient-to-t
              from-[#020D18]/80
              to-transparent
            "
          />
        </div>

        {/* Golden soft glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D69A2B]/[0.025]
            blur-[120px]
          "
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10
            px-5
            pb-7
            pt-5
            sm:px-6
            lg:px-8
          "
        >
          {/* ================= HEADING ================= */}
          <motion.h2
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
            className="
              text-center
              text-[24px]
              font-semibold
              uppercase
              tracking-[0.02em]
              text-[#F4F5F6]

              sm:text-[27px]
              lg:text-[30px]
            "
          >
            We Connect Across Multiple Industries
          </motion.h2>

          {/* ================= INDUSTRIES ================= */}
          <div
            className="
              mt-7
              grid
              grid-cols-2
              gap-y-7

              sm:grid-cols-4

              xl:grid-cols-8
              xl:gap-y-0
            "
          >
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[165px]
                    flex-col
                    items-center
                    justify-center
                    px-3
                    text-center
                  "
                >
                  {/* ================= CONNECTING LINE ================= */}
{index !== industries.length - 1 && (
  <div
    className="
      absolute
      left-[calc(50%+45px)]
      top-[38px]
      hidden
      h-[18px]
      w-[calc(100%-65px)]
      items-center
      xl:flex
    "
  >
    <div className="relative h-full w-full">
      {/* Base bold line */}
      <div
        className="
          absolute
          left-0
          top-1/2
          h-[2.5px]
          w-full
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-[#7c5927]/70
          via-[#a8772b]/60
          to-[#7c5927]/70
        "
      />

      {/* Animated connecting glow line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          delay: 0.2 + index * 0.12,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-1/2
          h-[3px]
          w-full
          -translate-y-1/2
          origin-left
          rounded-full
          bg-gradient-to-r
          from-[#D69A2B]
          via-[#F0B74B]
          to-[#D69A2B]
          shadow-[0_0_10px_rgba(214,154,43,0.45)]
        "
      />

      {/* Moving glow dot */}
      <motion.span
        initial={{ left: "0%" }}
        whileInView={{ left: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          delay: 0.2 + index * 0.12,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          h-[8px]
          w-[8px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#FFD27A]
          shadow-[0_0_14px_rgba(255,210,122,0.9)]
        "
      />

      {/* Moving arrow */}
      <motion.div
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          delay: 0.2 + index * 0.12,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <ArrowRight
          size={14}
          strokeWidth={2.4}
          className="text-[#F0B74B] drop-shadow-[0_0_8px_rgba(214,154,43,0.55)]"
        />
      </motion.div>
    </div>
  </div>
)}

                  {/* ================= ICON CIRCLE ================= */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[78px]
                      w-[78px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A9782D]/80
                      bg-[#061522]/85
                      shadow-[0_0_20px_rgba(214,154,43,0.08)]
                      backdrop-blur-sm
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
                  <p
                    className="
                      mt-4
                      text-[15px]
                      font-semibold
                      leading-[1.45]
                      text-[#E6E9EB]

                      sm:text-[16px]
                      lg:text-[17px]
                    "
                  >
                    {item.title1}

                    {item.title2 && (
                      <>
                        <br />
                        {item.title2}
                      </>
                    )}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Golden bottom line */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[1px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#A8772B]/70
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}
