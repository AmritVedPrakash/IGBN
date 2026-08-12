import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  BadgeCheck,
  Globe2,
  ChartNoAxesCombined,
} from "lucide-react";

import servicesBg from "../assets/services/services-bg.png";
import OurServiceDividions from "../components/sections/services/OurServiceDividions";
import Laptopsec from "../components/sections/services/Laptopsec";
import WhyChoose from "../components/sections/WhyChoose";

export default function Services() {
  const features = [
    {
      icon: Network,
      title: "One Group",
      subtitle: "Multiple Expertise",
    },
    {
      icon: BadgeCheck,
      title: "360° Solutions",
      subtitle: "Under One Roof",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      subtitle: "Local Understanding",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Growth Driven",
      subtitle: "Results Focused",
    },
  ];

  return (
    <>
    
    <section
      className="
        relative
        min-h-[640px]
        lg:min-h-[700px]
        overflow-hidden
        bg-[#061632]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
      "
      style={{
        backgroundImage: `url(${servicesBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#061632]/98
          via-[#061632]/82
          to-[#061632]/15
        "
      />

      {/* Soft bottom overlay */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[180px]
          bg-gradient-to-t
          from-[#061632]/80
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1450px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-16
          lg:py-20
        "
      >
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[670px]"
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              text-[#dda72f]
              text-sm
              md:text-base
              font-semibold
              uppercase
              tracking-wide
              mb-3
            "
          >
            Our Services
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[58px]
              font-semibold
              leading-[1.08]
            "
          >
            Complete Solutions for
            <br />

            <span className="text-[#dda72f]">
              Global Business Growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mt-7
              max-w-[560px]
              text-white/80
              text-sm
              sm:text-base
              md:text-lg
              leading-7
            "
          >
            End-to-end support for Indian businesses to connect,
            compete and grow in global markets.
          </motion.p>
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="
            mt-12
            lg:mt-16
            max-w-[900px]
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            md:gap-3
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  md:px-4
                  first:pl-0
                "
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.08,
                  }}
                  className="
                    shrink-0
                    w-[48px]
                    h-[48px]
                    md:w-[54px]
                    md:h-[54px]
                    rounded-full
                    border
                    border-[#dda72f]/70
                    flex
                    items-center
                    justify-center
                    bg-[#071b3c]/40
                    backdrop-blur-sm
                    shadow-[0_0_20px_rgba(221,167,47,0.08)]
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="text-[#dda72f]"
                  />
                </motion.div>

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-white
                      text-xs
                      sm:text-sm
                      font-medium
                      leading-5
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      text-white/70
                      text-[10px]
                      sm:text-xs
                      mt-0.5
                      leading-4
                    "
                  >
                    {feature.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
    <div>
      <OurServiceDividions/>
      <Laptopsec/>
      <WhyChoose/>
    </div>

    </>
  );
}