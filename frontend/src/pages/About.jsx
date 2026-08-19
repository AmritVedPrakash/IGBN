import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, SquarePen } from "lucide-react";

import aboutBg from "../assets/aboutimg/about-bg.png";

import OurLeadership from "../components/sections/aboutus/OurLeadership";
import StatsSection from "../components/sections/aboutus/StatsSection";
import VisionMission from "../components/sections/aboutus/VisionMission";
import WhyIGBNExists from "../components/sections/aboutus/WhyIGBNExists";
import OurGlobalPresence from "../components/sections/aboutus/OurGlobalPresence";
import GlobalOpportunities from "../components/sections/aboutus/GlobalOpportunities";
import OurServices from "../components/sections/aboutus/OurServices";
import PartnerWithIGBN from "../components/sections/aboutus/PartnerWithIGBN";

export default function About() {
  const scrollToMission = () => {
    const section = document.getElementById("vision-mission");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          ABOUT HERO
      ====================================================== */}
      <section
        className="
          relative
          min-h-[620px]
          overflow-hidden
          bg-[#020D18]
          lg:min-h-[670px]
        "
      >
        {/* =====================================================
            RIGHT SIDE MAP IMAGE ONLY
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            hidden
            h-full
            w-[62%]
            lg:block
          "
        >
          <img
            src={aboutBg}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Fade image smoothly into left dark area */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020D18]
              via-[#020D18]/20
              to-transparent
            "
          />

          {/* subtle bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[120px]
              bg-gradient-to-t
              from-[#020D18]
              to-transparent
            "
          />
        </div>

        {/* Mobile subtle image */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            lg:hidden
          "
        >
          <img
            src={aboutBg}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
              opacity-20
            "
          />

          <div className="absolute inset-0 bg-[#020D18]/85" />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-[620px]
            w-full
            max-w-[1650px]
            grid-cols-1
            items-center
            px-5
            py-16

            sm:px-7
            md:px-8

            lg:min-h-[670px]
            lg:grid-cols-[0.48fr_0.52fr]
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
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
            }}
            className="
              relative
              z-20
              max-w-[670px]
            "
          >
            {/* About IGBN */}
            <p
              className="
                mb-2
                text-[19px]
                font-semibold
                text-[#F4F5F6]

                sm:text-[21px]
                lg:text-[23px]
              "
            >
              About IGBN
            </p>

            {/* Main Heading */}
            <h1
              className="
                text-[38px]
                font-semibold
                leading-[1.1]
                tracking-[-0.025em]
                text-[#F5F5F5]

                sm:text-[44px]
                md:text-[49px]
                lg:text-[50px]
                xl:text-[54px]
              "
            >
              India&apos;s <span className="text-[#D79A2B]">Global Trade</span>
              <br />
              Intelligence &
              <br />
              <span className="text-[#D79A2B]">Export Growth Platform</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[610px]
                text-[15px]
                leading-[1.7]
                text-[#D9DEE3]

                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
              "
            >
              We empower Indian manufacturers and brands to compete globally
              through verified connections, real-time trade intelligence and
              dedicated international business development across 21+ countries.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Mission */}
              <motion.button
                onClick={scrollToMission}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  border
                  border-[#D79A2B]
                  bg-gradient-to-r
                  from-[#DCA443]
                  via-[#D69A2B]
                  to-[#C78A25]
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#07111A]
                  shadow-[0_8px_24px_rgba(214,154,43,0.18)]

                  sm:text-[15px]
                "
              >
                Our Mission
                <ArrowRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* Story */}
              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-4
                  rounded-[6px]
                  border
                  border-[#9A6B28]
                  bg-[#061522]/80
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#E7E9EB]
                  backdrop-blur-sm

                  hover:border-[#D79A2B]

                  sm:text-[15px]
                "
              >
                Watch Our Story
                <span
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DCE0E3]
                  "
                >
                  <Play size={10} fill="currentColor" className="ml-[1px]" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE CARD
          ====================================================== */}
          <div
            className="
              relative
              hidden
              h-full
              lg:block
            "
          >
            <motion.div
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
                delay: 0.35,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                absolute
                bottom-[17%]
                left-[8%]
                w-[285px]
                rounded-[10px]
                border
                border-[#886029]/90
                bg-[#061522]/90
                px-5
                py-5
                shadow-[0_15px_40px_rgba(0,0,0,0.42)]
                backdrop-blur-[6px]

                xl:left-[10%]
                xl:w-[310px]
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-[47px]
                    w-[47px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D79A2B]/60
                    bg-[#D79A2B]/[0.05]
                  "
                >
                  <SquarePen
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#D79A2B]"
                  />
                </div>

                {/* Text */}
                <p
                  className="
                    text-[14px]
                    font-medium
                    leading-[1.65]
                    text-[#E6E8EA]

                    xl:text-[15px]
                  "
                >
                  Promoting India.
                  <br />
                  Supporting Business.
                  <br />
                  Building Global Presence.
                </p>
              </div>

              <button
                onClick={scrollToMission}
                className="
                  group
                  mt-4
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-[#D79A2B]

                  xl:text-[15px]
                "
              >
                Our Mission
                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </motion.div>
          </div>

          {/* Mobile Card */}
          <div
            className="
              mt-8
              rounded-[10px]
              border
              border-[#876029]/80
              bg-[#061522]/90
              p-5
              lg:hidden
            "
          >
            <div className="flex gap-4">
              <div
                className="
                  flex
                  h-[45px]
                  w-[45px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D79A2B]/60
                "
              >
                <SquarePen size={23} className="text-[#D79A2B]" />
              </div>

              <p
                className="
                  text-[14px]
                  leading-[1.7]
                  text-[#E3E6E8]
                  sm:text-[15px]
                "
              >
                Promoting India.
                <br />
                Supporting Business.
                <br />
                Building Global Presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REST SECTIONS
      ====================================================== */}

      <StatsSection />

      <div id="vision-mission">
        <VisionMission />
      </div>

      <OurLeadership />

      <WhyIGBNExists />

      <OurGlobalPresence />

      <GlobalOpportunities />

      <OurServices />

      <PartnerWithIGBN />
    </>
  );
}
