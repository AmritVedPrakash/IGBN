import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ArrowRight,
  Play,
  MapPin,
  BadgeCheck,
  Handshake,
} from "lucide-react";

// =====================================================
// HERO BACKGROUND VIDEO
// Apne actual video filename ke according change kar lena
// =====================================================
import servicesVideo from "../assets/aboutimg/about-video.mp4";

import OurServiceDividions from "../components/sections/services/OurServiceDividions";
import Laptopsec from "../components/sections/services/Laptopsec";
import OurImpact from "../components/sections/services/OurImpact";
import WhyBusinessChoose from "../components/sections/services/WhyBusinessChoose";
import MadeInIndia from "../components/sections/services/MadeInIndia";

export default function Services() {
  const scrollToDivisions = () => {
    const section = document.getElementById("our-divisions");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const networkPoints = [
    {
      icon: MapPin,
      text: "In-Country Support",
    },
    {
      icon: BadgeCheck,
      text: "Verified Global Network",
    },
    {
      icon: Handshake,
      text: "Business Introductions",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section
        className="
          relative
          flex
          min-h-[650px]
          w-full
          items-center
          overflow-hidden
          bg-[#020D18]

          lg:min-h-[690px]
        "
      >
        {/* =====================================================
            BACKGROUND VIDEO
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
          "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          >
            <source src={servicesVideo} type="video/mp4" />
          </video>
        </div>

        {/* =====================================================
            DARK LEFT OVERLAY
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#020D18]
            via-[#020D18]/90
            to-[#020D18]/20
          "
        />

        {/* Extra left dark overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[1]
            w-[64%]
            bg-gradient-to-r
            from-[#020D18]
            via-[#020D18]/75
            to-transparent
          "
        />

        {/* Overall subtle dark layer */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-[#020D18]/15
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-[180px]
            bg-gradient-to-t
            from-[#020D18]
            via-[#020D18]/70
            to-transparent
          "
        />

        {/* Top Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[2]
            h-[90px]
            bg-gradient-to-b
            from-[#020D18]/55
            to-transparent
          "
        />

        {/* Golden glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[14%]
            top-[45%]
            z-[2]
            h-[420px]
            w-[420px]
            -translate-y-1/2
            rounded-full
            bg-[#D89A2B]/[0.06]
            blur-[120px]
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1650px]
            grid-cols-1
            items-center
            gap-10
            px-5
            py-20

            sm:px-7
            md:px-8

            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-10

            xl:px-12
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              max-w-[720px]
              pt-4

              lg:pt-0
            "
          >
            {/* ================= HEADING ================= */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                text-[36px]
                font-semibold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#F5F5F5]

                sm:text-[44px]
                md:text-[50px]
                lg:text-[54px]
                xl:text-[58px]
              "
            >
              End-to-End Export Solutions.
              <br />
              <span className="text-[#D99B2B]">One Global Ecosystem.</span>
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-6
                max-w-[660px]
                text-[15px]
                font-normal
                leading-[1.8]
                text-[#D4D9DE]

                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
              "
            >
              From market intelligence and verified buyers to brand visibility,
              factory transparency and digital growth – IGBN empowers Indian
              businesses to expand globally with confidence.
            </motion.p>

            {/* ================= BUTTONS ================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Explore Button */}
              <button
                onClick={scrollToDivisions}
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  border
                  border-[#D99B2B]
                  bg-gradient-to-r
                  from-[#DBA23E]
                  via-[#D59A2E]
                  to-[#C88A22]
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#09121B]
                  shadow-[0_8px_25px_rgba(216,154,43,0.16)]
                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:shadow-[0_10px_28px_rgba(216,154,43,0.28)]

                  sm:text-[15px]
                "
              >
                Explore Divisions
                <ArrowRight
                  size={19}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Watch Button */}
              <button
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-4
                  rounded-[6px]
                  border
                  border-[#B17B27]
                  bg-[#071421]/60
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#DCA03A]
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  hover:border-[#D99B2B]
                  hover:bg-[#D99B2B]/10

                  sm:text-[15px]
                "
              >
                Watch How It Works
                <span
                  className="
                    flex
                    h-[23px]
                    w-[23px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D7DCE0]
                  "
                >
                  <Play
                    size={10}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="
                      ml-[1px]
                      text-[#E2E5E8]
                    "
                  />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              relative
              hidden
              min-h-[450px]
              items-center
              justify-end

              lg:flex
            "
          >
            {/* =================================================
                GLOBAL PRESENCE CARD
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                relative
                left-[150px]
                mr-1
                translate-y-35
                w-[285px]
                overflow-hidden
                rounded-[15px]
                border
                border-[#765323]/90
                bg-[#071421]/90
                px-6
                py-7
                shadow-[0_15px_45px_rgba(0,0,0,0.45)]
                backdrop-blur-md

                xl:w-[310px]
              "
            >
              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[60px]
                  -top-[70px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-[#D99B2B]/[0.08]
                  blur-[55px]
                "
              />

              {/* =================================================
                  COUNTRY COUNT
              ================================================= */}
              <div
                className="
                  relative
                  flex
                  items-center
                  gap-4
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D99B2B]/50
                    bg-[#D99B2B]/[0.05]
                  "
                >
                  <Globe2
                    size={33}
                    strokeWidth={1.5}
                    className="text-[#D99B2B]"
                  />
                </motion.div>

                <div>
                  <p
                    className="
                      text-[29px]
                      font-semibold
                      leading-none
                      text-[#F6F6F6]
                    "
                  >
                    21+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      font-medium
                      text-[#CFD4DA]
                    "
                  >
                    Countries Connected
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="
                  my-5
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-[#765323]/20
                  via-[#765323]
                  to-[#765323]/20
                "
              />

              {/* =================================================
                  TEXT INSTEAD OF AMBASSADOR IMAGES
              ================================================= */}
              {/* <div className="relative">
                <p
                  className="
                    text-[17px]
                    font-semibold
                    text-[#F2F4F5]
                  "
                >
                  Global Business Network
                </p>

                <p
                  className="
                    mt-2
                    text-[14px]
                    leading-[1.65]
                    text-[#BCC5CC]
                  "
                >
                  Local market expertise, verified connections and dedicated
                  international business support across our growing global
                  network.
                </p>
              </div> */}

              {/* =================================================
                  NETWORK POINTS
              ================================================= */}
              <div className="relative mt-5 space-y-3">
                {networkPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.text}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.65 + index * 0.1,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-[33px]
                          w-[33px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D99B2B]/40
                          bg-[#D99B2B]/[0.04]
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.6}
                          className="text-[#D99B2B]"
                        />
                      </div>

                      <span
                        className="
                          text-[14px]
                          font-medium
                          text-[#DFE3E6]
                        "
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div
                className="
                  my-5
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-[#354B5D]
                  to-transparent
                "
              />

              {/* =================================================
                  BOTTOM INFO
              ================================================= */}
              <div className="relative">
                <p
                  className="
                    text-[24px]
                    font-semibold
                    leading-none
                    text-[#D99B2B]
                  "
                >
                  500+
                </p>

                <p
                  className="
                    mt-2
                    text-[14px]
                    font-medium
                    leading-[1.55]
                    text-[#D2D7DC]
                  "
                >
                  Trade Ambassadors
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              MOBILE GLOBAL CARD
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
            className="
              rounded-[14px]
              border
              border-[#765323]/80
              bg-[#071421]/90
              p-5
              backdrop-blur-md

              lg:hidden
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D99B2B]/50
                "
              >
                <Globe2 size={29} className="text-[#D99B2B]" />
              </div>

              <div>
                <p
                  className="
                    text-[27px]
                    font-semibold
                    text-white
                  "
                >
                  21+
                </p>

                <p className="text-[14px] text-[#CFD4DA]">
                  Countries Connected
                </p>
              </div>
            </div>

            <p
              className="
                mt-5
                text-[15px]
                font-semibold
                text-[#F2F4F5]
              "
            >
              Global Business Network
            </p>

            <p
              className="
                mt-2
                text-[14px]
                leading-[1.7]
                text-[#BCC5CC]
              "
            >
              Verified global connections, local market expertise and dedicated
              business support to help Indian companies expand internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REST OF SERVICES PAGE
      ====================================================== */}

      <div id="our-divisions">
        <OurServiceDividions />
      </div>

      <Laptopsec />

      <OurImpact />

      <WhyBusinessChoose />

      <MadeInIndia />
    </>
  );
}
