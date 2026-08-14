import React from "react";
import { motion } from "framer-motion";

import {
  Landmark,
  Building2,
  Globe2,
  Ship,
  CircleDollarSign,
  FileText,
  TrendingUp,
  Newspaper,
  ArrowRight,
} from "lucide-react";

export default function TradIntelligence() {
  const updates = [
    {
      icon: Landmark,
      title: "DGFT",
      desc: "Notifications",
    },
    {
      icon: Building2,
      title: "Ministry of",
      desc: "Commerce Updates",
    },
    {
      icon: Globe2,
      title: "WTO",
      desc: "News",
    },
    {
      icon: Ship,
      title: "Shipping",
      desc: "Alerts",
    },
    {
      icon: CircleDollarSign,
      title: "Currency",
      desc: "Updates",
    },
    {
      icon: FileText,
      title: "Export Policy",
      desc: "Changes",
    },
    {
      icon: TrendingUp,
      title: "Commodity",
      desc: "Price Alerts",
    },
    {
      icon: Newspaper,
      title: "Global Trade",
      desc: "News",
    },
  ];

  return (
    <section
      className="
      bg-[#fbfaf8]
      py-10
      md:py-14
      "
    >
      <div
        className="
        max-w-[1400px]
        mx-auto
        px-5
        md:px-10
        "
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          flex
          items-center
          justify-between
          mb-6
          "
        >
          <div
            className="
  w-full 
  text-center
  "
          >
            <h2
              className="
    text-[#172343]
    text-xl
    md:text-2xl
    lg:text-[28px]
    font-bold
    uppercase
    tracking-wide
    "
            >
              Trade Intelligence Center
            </h2>

            <p
              className="
    mt-2
    text-sm
    md:text-base
    text-[#667085]
    font-medium
    "
            >
              Latest Trade Updates On One Place
            </p>

            <div
              className="
    mx-auto
    mt-3
    h-[3px]
    w-14
    rounded-full
    bg-[#d7a52b]
    "
            />
          </div>

          <button
            className="
            hidden
            md:flex
            items-center
            gap-1
            text-xs
            font-medium
            text-[#174ba5]
            "
          >
            View All Updates
            <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Update Cards */}

        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-4
          lg:grid-cols-8
          gap-4
          "
        >
          {updates.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
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
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
h-[125px]
md:h-[140px]
bg-white
border
border-[#ececec]
rounded-xl
flex
flex-col
items-center
justify-center
cursor-pointer
px-3
shadow-[0_4px_15px_rgba(0,0,0,0.04)]
hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
transition-all
"
              >
                <Icon
                  size={32}
                  strokeWidth={1.8}
                  className="
  text-[#d7a52b]
  mb-4
  "
                />

                <h3
                  className="
  text-xs
  md:text-sm
  font-semibold
  text-[#172343]
  text-center
  leading-4
  "
                >
                  {item.title}
                </h3>

                <p
                  className="
  text-[11px]
  md:text-xs
  text-[#667085]
  text-center
  leading-4
  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
