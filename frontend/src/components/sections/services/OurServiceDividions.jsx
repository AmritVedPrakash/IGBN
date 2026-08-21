import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Aperture,
  Landmark,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

export default function OurServiceDivisions() {
  const divisions = [
    {
      icon: Megaphone,
      title: "IGBN MARKETING & PR",
      tagline: "Build. Brand. Be Seen.",
      description:
        "End-to-end branding, digital marketing and PR solutions to position your brand globally.",

      // Yellow / Olive
      color: "#C8C72D",
      border: "#6F711E",
      glow: "rgba(200,199,45,0.25)",
      overlay: "rgba(37,42,5,0.52)",

      image: "/assets/services/marketing.jpg",
    },

    {
      icon: Aperture,
      title: "IGBN STUDIOS",
      tagline: "We Create. You Inspire.",
      description:
        "Professional factory videos, product photography, documentaries and trade content that builds trust.",

      // Cyan / Blue
      color: "#48B7E4",
      border: "#2D6E8C",
      glow: "rgba(72,183,228,0.25)",
      overlay: "rgba(4,31,48,0.55)",

      image: "/assets/services/studios.jpg",
    },

    {
      icon: Landmark,
      title: "IGBN FACTORY TOURS",
      tagline: "Visit. Experience. Build Trust.",
      description:
        "International buyer visits, factory audits and delegations that create transparency and lasting business relationships.",

      // Orange
      color: "#F47B20",
      border: "#8C4418",
      glow: "rgba(244,123,32,0.26)",
      overlay: "rgba(49,21,4,0.52)",

      image: "/assets/services/factory-tours.jpg",
    },

    {
      icon: MonitorSmartphone,
      title: "IGBN DIGITAL SERVICES",
      tagline: "Innovate. Develop. Digitize.",
      description:
        "Web development, portals, AI solutions, ERP/CRM and digital tools to power your export journey.",

      // Pink / Purple
      color: "#E455CE",
      border: "#75376D",
      glow: "rgba(228,85,206,0.25)",
      overlay: "rgba(40,7,43,0.53)",

      image: "/assets/services/digital-services.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020D18] px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#173149]
          bg-[#03101C]
          px-4
          pb-6
          pt-4
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          sm:px-5
          lg:px-6
        "
      >
        {/* ===================== HEADING ===================== */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-4">
            {/* LEFT LINE */}
            <div className="hidden w-full max-w-[430px] items-center sm:flex">
              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-[#8C601D]
                  to-[#D29A32]
                "
              />

              <span className="h-[5px] w-[5px] rotate-45 bg-[#D29A32]" />
            </div>

            {/* HEADING */}
            <h2
              className="
                whitespace-nowrap
                px-3
                text-center
                text-[18px]
                font-medium
                tracking-[0.03em]
                text-[#F4F4F4]
                sm:text-[20px]
                md:text-[22px]
                lg:text-[24px]
              "
            >
              IGBN DIVISIONS{" "}
              <span className="normal-case font-normal">(Our Ecosystem)</span>
            </h2>

            {/* RIGHT LINE */}
            <div className="hidden w-full max-w-[430px] items-center sm:flex">
              <span className="h-[5px] w-[5px] rotate-45 bg-[#D29A32]" />

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  via-[#8C601D]
                  to-[#D29A32]
                "
              />
            </div>
          </div>
        </motion.div>

        {/* ===================== CARDS ===================== */}
        <div
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[360px]
                  overflow-hidden
                  rounded-[9px]
                  border
                  transition-all
                  duration-300
                "
                style={{
                  borderColor: division.border,
                  backgroundColor: "#051321",
                  boxShadow: `0 0 0 1px ${division.color}12`,
                }}
              >
                {/* ================= BACKGROUND IMAGE ================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    opacity-[0.38]
                    transition-all
                    duration-500
                    group-hover:scale-[1.03]
                    group-hover:opacity-[0.46]
                  "
                  style={{
                    backgroundImage: `url(${division.image})`,
                  }}
                />

                {/* Colored Tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(
                      180deg,
                      ${division.overlay} 0%,
                      rgba(3,13,24,0.68) 45%,
                      rgba(3,13,24,0.96) 100%
                    )`,
                  }}
                />

                {/* Bottom Dark Fade */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-[#020B14]
                  "
                />

                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    boxShadow: `inset 0 0 35px ${division.glow}`,
                  }}
                />

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 flex w-full flex-col px-5 py-6 sm:px-6">
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.07,
                    }}
                    className="
                      mb-5
                      flex
                      h-[76px]
                      w-[76px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                    "
                    style={{
                      border: `2px solid ${division.color}`,
                      background: "rgba(3,13,24,0.55)",
                      boxShadow: `0 0 20px ${division.glow}`,
                    }}
                  >
                    <Icon
                      size={36}
                      strokeWidth={1.6}
                      style={{
                        color: division.color,
                      }}
                    />
                  </motion.div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-[18px]
                      font-bold
                      uppercase
                      leading-[1.3]
                      tracking-[0.01em]
                      md:text-[19px]
                      lg:text-[20px]
                    "
                    style={{
                      color: division.color,
                    }}
                  >
                    {division.title}
                  </h3>

                  {/* TAGLINE */}
                  <p
                    className="
                      mt-2
                      text-[15px]
                      font-semibold
                      leading-[1.5]
                      md:text-[16px]
                    "
                    style={{
                      color: division.color,
                    }}
                  >
                    {division.tagline}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-4
                      flex-1
                      text-[14px]
                      font-normal
                      leading-[1.8]
                      text-[#E0E3E8]
                      md:text-[15px]
                      xl:text-[15px]
                      2xl:text-[16px]
                    "
                  >
                    {division.description}
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="
                      mt-7
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[14px]
                      font-semibold
                      transition-all
                      duration-300
                      md:text-[15px]
                    "
                    style={{
                      color: division.color,
                    }}
                  >
                    Explore Division
                    <ArrowRight
                      size={19}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
