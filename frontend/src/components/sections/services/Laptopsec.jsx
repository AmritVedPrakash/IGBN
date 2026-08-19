import React from "react";
import { motion } from "framer-motion";
import {
  UserRoundPlus,
  BadgeCheck,
  FileText,
  MessageCircleMore,
  Search,
  ShieldCheck,
} from "lucide-react";

import portalScreen from "../../../assets/services/portal-screen.png";

export default function Laptopsec() {
  const features = [
    {
      icon: UserRoundPlus,
      title: "Buyer & Supplier",
      subtitle: "Registration",
    },
    {
      icon: BadgeCheck,
      title: "Verified Profiles",
      subtitle: "& Authentication",
    },
    {
      icon: FileText,
      title: "RFQ Management",
      subtitle: "& Lead Matching",
    },
    {
      icon: MessageCircleMore,
      title: "Real-time",
      subtitle: "Communication",
    },
    {
      icon: Search,
      title: "Trade Intelligence",
      subtitle: "& Market Insights",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      subtitle: "& Data Protection",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        lg:px-8
        lg:py-12
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          bg-[#D39A2E]/[0.06]
          blur-[130px]
        "
      />

      {/* ================= MAIN OUTER BOX ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#26384A]
          bg-[#03111E]
          px-5
          py-7
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
          sm:px-7
          lg:px-8
          lg:py-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[0.95fr_1.25fr]
            lg:gap-10
            xl:grid-cols-[0.9fr_1.3fr]
            xl:gap-12
          "
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="
                  max-w-[600px]
                  text-[25px]
                  font-semibold
                  uppercase
                  leading-[1.15]
                  tracking-[0.02em]
                  text-[#F7F7F7]
                  sm:text-[28px]
                  lg:text-[30px]
                  xl:text-[32px]
                "
              >
                IGBN PORTAL – YOUR ALL-IN-ONE
                <br />
                B2B MARKETPLACE
              </h2>

              <p
                className="
                  mt-3
                  text-[14px]
                  font-normal
                  leading-[1.7]
                  text-[#D1D6DC]
                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Connect, trade & grow globally with our smart digital platform.
              </p>

              {/* Golden small line */}
              <div
                className="
                  mt-4
                  h-[2px]
                  w-[55px]
                  rounded-full
                  bg-[#D59A27]
                "
              />
            </motion.div>

            {/* ================= FEATURE GRID ================= */}
            <div
              className="
                mt-7
                grid
                grid-cols-1
                border-t
                border-[#23384C]
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      group
                      flex
                      min-h-[110px]
                      items-center
                      gap-4
                      border-b
                      border-[#23384C]
                      px-3
                      py-5
                      transition-all
                      duration-300
                      hover:bg-[#071725]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-[46px]
                        w-[46px]
                        shrink-0
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={33}
                        strokeWidth={1.4}
                        className="
                          text-[#E1E5E9]
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-[#D69A2E]
                        "
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="
                          text-[13px]
                          font-semibold
                          leading-[1.5]
                          text-[#F5F6F7]
                          sm:text-[14px]
                          xl:text-[15px]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-[2px]
                          text-[12px]
                          font-normal
                          leading-[1.45]
                          text-[#BCC4CC]
                          sm:text-[13px]
                          xl:text-[14px]
                        "
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ==================================================
              RIGHT SIDE LAPTOP + MOBILE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[800px]
              items-center
              justify-center
              pb-8
              pt-4
              lg:pb-3
            "
          >
            {/* Soft Gold Glow Behind Laptop */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[330px]
                w-[70%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D59A27]/[0.07]
                blur-[90px]
              "
            />

            {/* ================= LAPTOP ================= */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[85%]
                sm:w-[82%]
                lg:w-[84%]
              "
            >
              {/* Laptop Frame */}
              <div
                className="
                  relative
                  rounded-[17px]
                  border-[7px]
                  border-[#242A31]
                  bg-[#11151A]
                  p-[4px]
                  shadow-[0_25px_55px_rgba(0,0,0,0.55)]
                "
              >
                {/* Top Camera */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-[3px]
                    z-20
                    h-[3px]
                    w-[3px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#777]
                  "
                />

                {/* Screen */}
                <div
                  className="
                    aspect-[16/10]
                    w-full
                    overflow-hidden
                    rounded-[7px]
                    bg-white
                  "
                >
                  <img
                    src={portalScreen}
                    alt="IGBN Portal"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                    "
                  />
                </div>
              </div>

              {/* Laptop Base */}
              <div
                className="
                  relative
                  mx-auto
                  h-[15px]
                  w-[108%]
                  -translate-x-[4%]
                  rounded-b-[55%]
                  bg-gradient-to-b
                  from-[#D8D8D8]
                  via-[#91969B]
                  to-[#575D63]
                  shadow-[0_12px_18px_rgba(0,0,0,0.4)]
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[3px]
                    w-[65px]
                    -translate-x-1/2
                    rounded-b
                    bg-[#555B61]
                  "
                />
              </div>
            </motion.div>

            {/* ================= MOBILE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.7,
                },
              }}
              className="
                absolute
                bottom-[15px]
                right-[1%]
                z-20
                w-[24%]
                min-w-[90px]
                max-w-[155px]

                sm:right-[5%]

                lg:bottom-[5px]
                lg:right-0
              "
            >
              {/* Phone Frame */}
              <div
                className="
                  relative
                  rounded-[24px]
                  border-[5px]
                  border-[#252A30]
                  bg-[#11151A]
                  p-[3px]
                  shadow-[0_20px_40px_rgba(0,0,0,0.58)]
                "
              >
                {/* Speaker */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-[3px]
                    z-20
                    h-[4px]
                    w-[28%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#33383D]
                  "
                />

                {/* Mobile Screen */}
                <div
                  className="
                    aspect-[9/18]
                    overflow-hidden
                    rounded-[16px]
                    bg-white
                  "
                >
                  <img
                    src={portalScreen}
                    alt="IGBN Portal Mobile"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-left-top
                    "
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
