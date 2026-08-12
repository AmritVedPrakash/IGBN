import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  ChartNoAxesCombined,
  BadgeCheck,
  Target,
  Eye,
  CheckCircle2,
  Play,
  Network,
} from "lucide-react";

import whoWeAreImg from "../../../assets/aboutimg/who-we-are.png";

export default function WhoWeAre() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Trusted Network",
      desc: "Verified buyers & suppliers for reliable partnerships.",
    },
    {
      icon: Handshake,
      title: "Global Reach",
      desc: "Connecting businesses across 30+ countries worldwide.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Business Growth",
      desc: "Enabling exporters & buyers to scale with confidence.",
    },
    {
      icon: BadgeCheck,
      title: "Integrity & Transparency",
      desc: "Ethical practices and transparent operations at every step.",
    },
  ];

  const missionPoints = [
    "Connect global buyers with trusted suppliers.",
    "Facilitate seamless trade through technology and expertise.",
    "Promote transparency, reliability, and ethical practices.",
    "Support businesses at every stage of their global journey.",
    "Contribute to economic growth and cross-border prosperity.",
  ];

  const visionPoints = [
    "Build a borderless business ecosystem.",
    "Drive innovation in global trade facilitation.",
    "Create long-term value for partners and communities.",
    "Empower businesses to achieve global excellence.",
    "Inspire trust and leadership in international trade.",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#fbfaf8] py-12 md:py-16">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-2 z-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#d9aa35]"
                />
              ))}
            </div>

            <div className="relative z-10 overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] group">
              <img
                src={whoWeAreImg}
                alt="Who We Are"
                className="w-full h-[320px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061632]/45 via-transparent to-transparent" />

              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  absolute
                  left-5
                  bottom-5
                  w-12
                  h-12
                  rounded-full
                  bg-[#dba82f]
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <Play size={20} fill="currentColor" />
              </motion.button>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#15234a] uppercase">
              Who <span className="text-[#d9a72e]">We Are</span>
            </h2>

            <div className="w-12 h-[3px] bg-[#d9a72e] mt-3 mb-5" />

            <p className="text-[#555] text-sm md:text-base leading-7">
              IGBN Worldwide is a trusted B2B trade facilitation platform
              dedicated to connecting global buyers with reliable suppliers
              across India and beyond.
            </p>

            <p className="text-[#555] text-sm md:text-base leading-7 mt-3">
              We help businesses expand internationally through verified
              connections, market intelligence, and end-to-end trade support.
            </p>

            <p className="text-[#555] text-sm md:text-base leading-7 mt-3">
              Our mission is to simplify global trade, build long-term
              partnerships, and create meaningful opportunities that drive
              sustainable business growth for all.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="
                      text-center
                      px-3
                      py-4
                      border-r
                      last:border-r-0
                      border-[#e6e6e6]
                    "
                  >
                    <div className="flex justify-center mb-3">
                      <Icon
                        size={31}
                        strokeWidth={1.7}
                        className={
                          index % 2 === 0 ? "text-[#15234a]" : "text-[#d9a72e]"
                        }
                      />
                    </div>

                    <h3 className="text-[12px] md:text-[13px] font-medium text-[#202020]">
                      {item.title}
                    </h3>

                    <p className="text-[10px] md:text-[11px] text-[#777] leading-4 mt-2">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* VISION & MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-12
            overflow-hidden
            rounded-2xl
            bg-[#071a3a]
            px-5
            sm:px-8
            lg:px-12
            py-10
            shadow-[0_18px_45px_rgba(0,0,0,0.15)]
          "
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#d9a72e]/10 blur-[100px] rounded-full" />

          {/* Heading */}
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase">
              Our <span className="text-[#d9a72e]">Vision & Mission</span>
            </h2>

            <div className="w-12 h-[3px] bg-[#d9a72e] mx-auto mt-3" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* MISSION */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full border border-[#d9a72e]/40 flex items-center justify-center">
                  <Target size={28} className="text-[#d9a72e]" />
                </div>

                <div>
                  <p className="text-white text-lg font-medium uppercase">
                    Our Mission
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Empower businesses through global opportunities.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#d9a72e] mt-0.5 shrink-0"
                    />

                    <p className="text-white/75 text-xs md:text-sm leading-5">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CENTER GLOBE */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              <div className="relative w-[210px] h-[210px] md:w-[250px] md:h-[250px]">
                <div className="absolute inset-0 rounded-full border border-[#d9a72e]/30" />
                <div className="absolute inset-5 rounded-full border border-white/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      w-[150px]
                      h-[150px]
                      md:w-[180px]
                      md:h-[180px]
                      rounded-full
                      bg-gradient-to-br
                      from-[#173a72]
                      via-[#0b234d]
                      to-[#061632]
                      border
                      border-white/15
                      shadow-[0_0_45px_rgba(217,167,46,0.25)]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Network
                      size={80}
                      strokeWidth={1}
                      className="text-[#d9a72e]/80"
                    />
                  </div>
                </div>

                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <span className="absolute top-1/2 -right-1 w-4 h-4 rounded-full bg-[#d9a72e] shadow-[0_0_15px_#d9a72e]" />
                </motion.div>
              </div>
            </motion.div>

            {/* VISION */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full border border-[#d9a72e]/40 flex items-center justify-center">
                  <Eye size={28} className="text-[#d9a72e]" />
                </div>

                <div>
                  <p className="text-white text-lg font-medium uppercase">
                    Our Vision
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Building a trusted borderless B2B ecosystem.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#d9a72e] mt-0.5 shrink-0"
                    />

                    <p className="text-white/75 text-xs md:text-sm leading-5">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
