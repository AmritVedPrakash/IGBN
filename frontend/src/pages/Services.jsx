import React from "react";
import { motion } from "framer-motion";
import { Globe2, ArrowRight, Play, Plus } from "lucide-react";

import servicesBg from "../assets/services/services-bg.png";

// Change these filenames according to your actual images
import ambassador1 from "../assets/services/ambassador1.png";
import ambassador2 from "../assets/services/ambassador2.png";
import ambassador3 from "../assets/services/ambassador3.png";
import ambassador4 from "../assets/services/ambassador4.png";

import OurServiceDividions from "../components/sections/services/OurServiceDividions";
import Laptopsec from "../components/sections/services/Laptopsec";
import OurImpact from "../components/sections/services/OurImpact";
import WhyBusinessChoose from "../components/sections/services/WhyBusinessChoose";
import MadeInIndia from "../components/sections/services/MadeInIndia";

export default function Services() {
  const ambassadors = [ambassador1, ambassador2, ambassador3, ambassador4];

  const scrollToDivisions = () => {
    const section = document.getElementById("our-divisions");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
          bg-cover
          bg-center
          bg-no-repeat
          lg:min-h-[690px]
        "
        style={{
          backgroundImage: `url(${servicesBg})`,
        }}
      >
        {/* ================= DARK LEFT OVERLAY ================= */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#020D18]
            via-[#020D18]/90
            to-[#020D18]/10
          "
        />

        {/* Extra left dark overlay */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[60%]
            bg-gradient-to-r
            from-[#020D18]
            via-[#020D18]/75
            to-transparent
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[170px]
            bg-gradient-to-t
            from-[#020D18]
            via-[#020D18]/65
            to-transparent
          "
        />

        {/* Golden world glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[15%]
            top-[45%]
            h-[380px]
            w-[380px]
            -translate-y-1/2
            rounded-full
            bg-[#D89A2B]/[0.06]
            blur-[110px]
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

                  hover:bg-[#D99B2B]/10
                  hover:border-[#D99B2B]

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
                    className="ml-[1px] text-[#E2E5E8]"
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
                mr-1
                w-[235px]
                overflow-hidden
                rounded-[15px]
                border
                border-[#25415A]
                bg-[#071421]/90
                px-5
                py-6
                shadow-[0_15px_45px_rgba(0,0,0,0.45)]
                backdrop-blur-md

                xl:w-[250px]
              "
            >
              {/* Card subtle glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[60px]
                  -top-[70px]
                  h-[170px]
                  w-[170px]
                  rounded-full
                  bg-[#D99B2B]/[0.07]
                  blur-[50px]
                "
              />

              {/* ================= COUNTRIES ================= */}
              <div className="relative flex items-center gap-4">
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
                    border-[#D99B2B]/40
                    bg-[#D99B2B]/[0.04]
                  "
                >
                  <Globe2
                    size={31}
                    strokeWidth={1.5}
                    className="text-[#D99B2B]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[23px]
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
                      text-[12px]
                      font-medium
                      text-[#CFD4DA]
                    "
                  >
                    Countries
                  </p>
                </div>
              </div>

              {/* Global Presence */}
              <h3
                className="
                  relative
                  mt-5
                  text-[16px]
                  font-semibold
                  text-[#E8EBEE]
                "
              >
                Global Presence
              </h3>

              {/* Divider */}
              <div
                className="
                  my-4
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-[#263C4F]
                  via-[#334A5D]
                  to-transparent
                "
              />

              {/* ================= AVATARS ================= */}
              <div className="relative flex items-center">
                {ambassadors.map((image, index) => (
                  <div
                    key={index}
                    className="
                      relative
                      h-[42px]
                      w-[42px]
                      overflow-hidden
                      rounded-full
                      border-2
                      border-[#D7DADC]
                      bg-[#0B1925]
                    "
                    style={{
                      marginLeft: index === 0 ? "0px" : "-9px",
                      zIndex: ambassadors.length - index,
                    }}
                  >
                    <img
                      src={image}
                      alt={`Trade Ambassador ${index + 1}`}
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                      "
                    />
                  </div>
                ))}

                {/* Plus circle */}
                <div
                  className="
                    relative
                    z-10
                    -ml-[8px]
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B47C26]
                    bg-[#071421]
                  "
                >
                  <Plus
                    size={18}
                    strokeWidth={1.6}
                    className="text-[#D99B2B]"
                  />
                </div>
              </div>

              {/* ================= AMBASSADOR COUNT ================= */}
              <div className="relative mt-5">
                <p
                  className="
                    text-[25px]
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
                    text-[13px]
                    font-medium
                    text-[#D2D7DC]
                  "
                >
                  Trade Ambassadors
                </p>
              </div>
            </motion.div>
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
