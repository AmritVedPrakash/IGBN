import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  UsersRound,
  Handshake,
  Headphones,
  ArrowRight,
  Play,
} from "lucide-react";

import contactBg from "../assets/contactimg/contact-bg.png";

import GetInTouch from "../components/sections/contact/getInTuch";
// import OurGlobalOffice from "../components/sections/contact/OurGlobalOffice";
import OurGlobalPresence from "../components/sections/aboutus/OurGlobalPresence";
import ConnectMultiIndustry from "../components/sections/contact/ConnectMultiIndustry";
import KeyMetrics from "../components/sections/contact/KeyMetrics";
import FrequentlyAskedQuestions from "../components/sections/contact/FrequentlyAskedQuestions";
import PartnerWithIGBN from "../components/sections/marketanalyses/PartnerWithIGBN";

export default function Contact() {
  const stats = [
    {
      icon: Globe2,
      value: "21+",
      title: "Countries",
      subtitle: "Global Presence",
    },
    {
      icon: UsersRound,
      value: "17",
      title: "Trade",
      subtitle: "Ambassadors",
    },
    {
      icon: Handshake,
      value: "500+",
      title: "Global Partners",
      subtitle: "& Connections",
    },
    {
      icon: Headphones,
      value: "24/7",
      title: "Support",
      subtitle: "Across Timezones",
    },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("get-in-touch");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          CONTACT HERO
      ====================================================== */}
      <section
        className="
          relative
          min-h-[680px]
          w-full
          overflow-hidden
          bg-[#020D18]
          lg:min-h-[720px]
        "
      >
        {/* =====================================================
            RIGHT SIDE BACKGROUND IMAGE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            hidden
            h-full
            w-[67%]
            overflow-hidden
            lg:block
          "
        >
          <img
            src={contactBg}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Left fade */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020D18]
              via-[#020D18]/35
              to-transparent
            "
          />

          {/* Bottom fade */}
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

        {/* Mobile Background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            lg:hidden
          "
        >
          <img
            src={contactBg}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
              opacity-25
            "
          />

          <div className="absolute inset-0 bg-[#020D18]/85" />
        </div>

        {/* Golden Glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[25%]
            top-[40%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#D69A2B]/[0.04]
            blur-[120px]
          "
        />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[680px]
            w-full
            max-w-[1650px]
            flex-col
            justify-center
            px-5
            py-16
            sm:px-7
            lg:min-h-[720px]
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
              max-w-[690px]
              pb-[190px]
              lg:pb-[175px]
            "
          >
            {/* Breadcrumb removed */}

            {/* Small Heading */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.05,
              }}
              className="
                text-[20px]
                font-semibold
                uppercase
                tracking-[0.03em]
                text-[#F1F3F5]
                sm:text-[22px]
                lg:text-[24px]
              "
            >
              We Are Everywhere.
            </motion.p>

            {/* Main Heading */}
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
                mt-3
                text-[43px]
                font-semibold
                uppercase
                leading-[1.04]
                tracking-[-0.02em]
                text-[#F5F5F5]
                sm:text-[52px]
                md:text-[58px]
                lg:text-[62px]
                xl:text-[66px]
              "
            >
              So You Can
              <br />
              <span className="text-[#D99B2B]">Grow Anywhere.</span>
            </motion.h1>

            {/* Description */}
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
                max-w-[610px]
                text-[16px]
                font-normal
                leading-[1.8]
                text-[#D8DDE2]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              IGBN connects Indian businesses with global buyers, suppliers &
              partners across 21+ countries.
              <br />
              Let&apos;s build partnerships that create global success.
            </motion.p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}
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
              {/* Connect Button */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[56px]
                  items-center
                  justify-center
                  gap-4
                  rounded-[7px]
                  border
                  border-[#D69A2B]
                  bg-gradient-to-r
                  from-[#E0AA48]
                  via-[#D99B2B]
                  to-[#C98A24]
                  px-8
                  text-[16px]
                  font-semibold
                  uppercase
                  text-[#07111B]
                  shadow-[0_8px_25px_rgba(214,154,43,0.20)]
                  sm:text-[17px]
                "
              >
                Connect With Us
                <ArrowRight
                  size={21}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* Explore Network */}
              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  min-h-[56px]
                  items-center
                  justify-center
                  gap-4
                  rounded-[7px]
                  border
                  border-[#9D702C]
                  bg-[#061522]/75
                  px-8
                  text-[15px]
                  font-semibold
                  uppercase
                  text-[#E6E9EB]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#D69A2B]
                  hover:bg-[#D69A2B]/[0.05]
                  sm:text-[16px]
                "
              >
                Explore Our Network
                <span
                  className="
                    flex
                    h-[27px]
                    w-[27px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D69A2B]
                  "
                >
                  <Play
                    size={11}
                    fill="currentColor"
                    className="
                      ml-[2px]
                      text-[#D69A2B]
                    "
                  />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =====================================================
              TRANSPARENT STATS CARD
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              absolute
              bottom-[24px]
              left-5
              right-5
              max-w-[920px]
              overflow-hidden
              rounded-[12px]
              border
              border-[#765323]/80

              bg-gradient-to-r
              from-[#07131E]/90
              via-[#071522]/82
              to-[#33250E]/40

              shadow-[0_15px_35px_rgba(0,0,0,0.38)]
              backdrop-blur-[7px]

              sm:left-7
              sm:right-auto
              sm:w-[calc(100%-56px)]

              lg:left-10
              lg:w-[900px]

              xl:left-12
            "
          >
            {/* Golden top glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-[1px]
                bg-gradient-to-r
                from-transparent
                via-[#D69A2B]/70
                to-transparent
              "
            />

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[125px]
                      items-center
                      gap-4
                      px-5
                      py-5
                    "
                  >
                    {/* Divider */}
                    {index !== stats.length - 1 && (
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
                          via-[#765323]
                          to-transparent
                          lg:block
                        "
                      />
                    )}

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                      }}
                      className="
                        flex
                        h-[55px]
                        w-[55px]
                        shrink-0
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={38}
                        strokeWidth={1.45}
                        className="
                          text-[#D69A2B]
                          transition-colors
                          duration-300
                          group-hover:text-[#E8AE47]
                        "
                      />
                    </motion.div>

                    {/* Text */}
                    <div>
                      <p
                        className="
                          text-[26px]
                          font-semibold
                          leading-none
                          text-[#F4F5F6]
                          sm:text-[28px]
                        "
                      >
                        {item.value}
                      </p>

                      <p
                        className="
                          mt-2
                          text-[14px]
                          font-semibold
                          leading-[1.35]
                          text-[#E0E4E8]
                          sm:text-[15px]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          leading-[1.4]
                          text-[#AEB7BF]
                          sm:text-[13px]
                        "
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REST OF CONTACT PAGE
      ====================================================== */}

      <div id="get-in-touch">
        <GetInTouch />
      </div>
      <OurGlobalPresence />
      <ConnectMultiIndustry/>
      <KeyMetrics/>
      <FrequentlyAskedQuestions/>
      {/* <OurGlobalOffice /> */}
      <PartnerWithIGBN/>
    </>
  );
}
