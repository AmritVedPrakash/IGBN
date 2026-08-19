import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  MonitorPlay,
  Landmark,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

export default function OurFourDivision() {
  const divisions = [
    {
      icon: Megaphone,
      title: "IGBN MARKETING & PR",
      tagline: "Build. Brand. Be Seen.",
      description:
        "End-to-end branding, digital marketing and PR solutions to position your brand globally.",
      color: "#C8C72D",
      border: "#6E7021",
      glow: "rgba(200,199,45,0.20)",
    },
    {
      icon: MonitorPlay,
      title: "IGBN STUDIOS",
      tagline: "We Create. You Inspire.",
      description:
        "Professional factory videos, product photography, documentaries and trade content that builds trust.",
      color: "#4CB9E6",
      border: "#2D6F8E",
      glow: "rgba(76,185,230,0.20)",
    },
    {
      icon: Landmark,
      title: "IGBN FACTORY TOURS",
      tagline: "Visit. Experience. Build Trust.",
      description:
        "International buyer visits, factory audits and delegations that create transparency and lasting business relationships.",
      color: "#F28A2E",
      border: "#8C4A1E",
      glow: "rgba(242,138,46,0.20)",
    },
    {
      icon: MonitorSmartphone,
      title: "IGBN DIGITAL SERVICES",
      tagline: "Innovate. Develop. Digitize.",
      description:
        "Web development, portals, AI solutions, ERP/CRM and digital tools to power your export journey.",
      color: "#DF58D0",
      border: "#74406F",
      glow: "rgba(223,88,208,0.20)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          {/* Left line */}
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#8E6222] to-[#D69A2B]" />
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
          </div>

          <h2
            className="
              whitespace-nowrap
              text-center
              text-[20px]
              font-semibold
              uppercase
              tracking-[0.02em]
              text-[#F4F5F6]
              sm:text-[22px]
              lg:text-[25px]
            "
          >
            IGBN DIVISIONS{" "}
            <span className="normal-case font-normal">(Our Ecosystem)</span>
          </h2>

          {/* Right line */}
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#8E6222] to-[#D69A2B]" />
          </div>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  flex
                 min-h-[300px]
                  flex-col
                  overflow-hidden
                  rounded-[10px]
                  border
                  bg-[#03111F]
                  px-6
                  py-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.30)]
                  transition-all
                  duration-300
                "
                style={{
                  borderColor: division.border,
                }}
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[70px]
                    -top-[70px]
                    h-[200px]
                    w-[200px]
                    rounded-full
                    opacity-0
                    blur-[65px]
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: division.glow,
                  }}
                />

                {/* ================= TOP ================= */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon Circle */}
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
                    "
                    style={{
                      border: `1.5px solid ${division.color}`,
                      background: "rgba(255,255,255,0.015)",
                      boxShadow: `0 0 18px ${division.glow}`,
                    }}
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      style={{
                        color: division.color,
                      }}
                    />
                  </motion.div>

                  {/* Title + Tagline */}
                  <div>
                    <h3
                      className="
                        text-[16px]
                        font-bold
                        uppercase
                        leading-[1.35]
                        sm:text-[17px]
                        lg:text-[18px]
                      "
                      style={{
                        color: division.color,
                      }}
                    >
                      {division.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        font-medium
                        leading-[1.45]
                        text-[#D7DCE1]
                        sm:text-[14px]
                      "
                    >
                      {division.tagline}
                    </p>
                  </div>
                </div>

                {/* ================= DESCRIPTION ================= */}
<p
  className="
    relative
    z-10
    mt-5
    text-[14px]
    font-normal
    leading-[1.8]
    text-[#D7DCE1]
    sm:text-[15px]
    lg:text-[16px]
  "
>
  {division.description}
</p>

{/* ================= CTA ================= */}
<motion.button
  whileHover={{
    x: 4,
  }}
  className="
    group/btn
    relative
    z-10
    mt-4
    flex
    w-fit
    items-center
    gap-2
    text-[14px]
    font-semibold
    sm:text-[15px]
  "
  style={{
    color: division.color,
  }}
>
  Know More

  <ArrowRight
    size={19}
    strokeWidth={1.8}
    className="
      transition-transform
      duration-300
      group-hover/btn:translate-x-1
    "
  />
</motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
