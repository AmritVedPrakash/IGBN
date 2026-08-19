import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  UserSearch,
  Handshake,
  FileCheck2,
  Factory,
  Network,
  ArrowRight,
} from "lucide-react";

export default function GlobalOpportunities() {
  const opportunities = [
    {
      icon: Search,
      title: "Research &",
      title2: "Market Intelligence",
      description:
        "We analyze global demand trends, tariffs, buyers and competition.",
    },
    {
      icon: Target,
      title: "Market Selection",
      title2: "& Strategy",
      description:
        "AI-driven opportunity scoring to identify the right markets for your products.",
    },
    {
      icon: UserSearch,
      title: "Buyer Identification",
      title2: "& Qualification",
      description:
        "We find, verify and qualify genuine buyers, importers and distributors.",
    },
    {
      icon: Handshake,
      title: "Outreach &",
      title2: "Introductions",
      description:
        "Our in-country teams initiate outreach and secure warm introductions.",
    },
    {
      icon: FileCheck2,
      title: "Negotiation &",
      title2: "Deal Support",
      description:
        "We support discussions, quotations, negotiations and deal closure.",
    },
    {
      icon: Factory,
      title: "Export Execution",
      title2: "& Growth",
      description:
        "From documentation to logistics — we ensure smooth execution and repeat orders.",
    },
    {
      icon: Network,
      title: "Long-Term",
      title2: "Partnerships",
      description:
        "We stay with you for long-term growth, expansion and new market entry.",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#765323]/80
          bg-[#03111F]
          px-5
          pb-7
          pt-4
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          sm:px-6
          lg:px-7
        "
      >
        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-center
            text-[22px]
            font-semibold
            leading-tight
            text-[#F5F5F5]
            sm:text-[25px]
            lg:text-[28px]
          "
        >
          How IGBN Creates Global Opportunities
        </motion.h2>

        {/* ================= PROCESS ================= */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            2xl:grid-cols-7
          "
        >
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[245px]
                  flex-col
                  items-center
                  px-3
                  text-center
                "
              >
                {/* ================= ICON + ARROW ================= */}
                <div className="relative flex w-full items-center justify-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[74px]
                      w-[74px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A97528]
                      bg-[#071522]
                      shadow-[0_0_20px_rgba(214,154,43,0.07)]
                    "
                  >
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="
                        text-[#D69A2B]
                        transition-all
                        duration-300
                        group-hover:text-[#E8AC43]
                      "
                    />
                  </motion.div>

                  {/* Desktop Connecting Arrow */}
                  {index !== opportunities.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[calc(50%+47px)]
                        top-1/2
                        hidden
                        w-[calc(100%-55px)]
                        -translate-y-1/2
                        items-center
                        2xl:flex
                      "
                    >
                      {/* Dotted golden line */}
                      <div
                        className="
                          flex-1
                          border-t-2
                          border-dotted
                          border-[#A97528]
                        "
                      />

                      <ArrowRight
                        size={21}
                        strokeWidth={2.2}
                        className="
                          -ml-[2px]
                          shrink-0
                          text-[#D69A2B]
                        "
                      />
                    </div>
                  )}
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="
                    mt-4
                    text-[15px]
                    font-semibold
                    leading-[1.35]
                    text-[#F3F4F5]
                    sm:text-[16px]
                    lg:text-[17px]
                    2xl:text-[18px]
                  "
                >
                  {item.title}
                  <br />
                  {item.title2}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                <p
                  className="
                    mt-3
                    max-w-[210px]
                    text-[13px]
                    font-normal
                    leading-[1.65]
                    text-[#C8CFD6]
                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  {item.description}
                </p>

                {/* Mobile / Tablet Bottom Arrow */}
                {index !== opportunities.length - 1 && (
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-center
                      text-[#D69A2B]
                      2xl:hidden
                    "
                  >
                    <div
                      className="
                        mr-1
                        w-[45px]
                        border-t-2
                        border-dotted
                        border-[#A97528]
                      "
                    />

                    <ArrowRight size={18} strokeWidth={2} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
