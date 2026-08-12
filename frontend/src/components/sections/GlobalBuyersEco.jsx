import React from "react";
import {
  Users,
  BadgeCheck,
  ShoppingBag,
  Network,
  Building2,
  ClipboardList,
  Settings,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalBuyersEco() {
  const buyers = [
    {
      icon: Users,
      title: "Importers",
      description: "Sourcing quality products worldwide",
      color: "#5B8DEF",
    },
    {
      icon: BadgeCheck,
      title: "Distributors",
      description: "Expanding product reach globally",
      color: "#6BCB77",
    },
    {
      icon: ShoppingBag,
      title: "Retailers",
      description: "Connecting with trusted manufacturers",
      color: "#F58A65",
    },
    {
      icon: Network,
      title: "Wholesalers",
      description: "Bulk sourcing for better growth",
      color: "#9B5DE5",
    },
    {
      icon: Building2,
      title: "Buying Houses",
      description: "End-to-end sourcing solutions",
      color: "#72C472",
    },
    {
      icon: ClipboardList,
      title: "Traders",
      description: "Global trade, seamless flow",
      color: "#5C8DF6",
    },
    {
      icon: Settings,
      title: "OEMs",
      description: "Manufacturing partnerships",
      color: "#9A62E8",
    },
    {
      icon: Award,
      title: "Service Providers",
      description: "Enabling smooth business operations",
      color: "#394B7A",
    },
  ];

  return (
    <section className="relative bg-[#fbfaf8] py-16 md:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#5B8DEF]/[0.06] blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#d4aa3f]/[0.08] blur-3xl"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-[#d4aa3f] text-[11px] md:text-xs tracking-[0.35em] font-semibold uppercase mb-3">
            Who We Connect
          </span>

          <h2 className="text-[#15234a] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Global Buyers Ecosystem
          </h2>

          <p className="mt-3 text-[#52638b] text-sm sm:text-base font-normal max-w-xl mx-auto">
            A connected ecosystem of verified buyers driving global trade.
          </p>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="w-8 h-[3px] bg-[#d4aa3f]/40 rounded-full" />
            <span className="w-14 h-[3px] bg-[#d4aa3f] rounded-full" />
            <span className="w-8 h-[3px] bg-[#d4aa3f]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
          "
        >
          {buyers.map((buyer, index) => {
            const Icon = buyer.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.035,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="
                  group
                  relative
                  bg-white
                  border
                  border-[#ececec]
                  rounded-2xl
                  min-h-[240px]
                  px-6
                  py-9
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-[0_6px_24px_rgba(21,35,74,0.05)]
                  hover:shadow-[0_20px_45px_rgba(21,35,74,0.13)]
                  hover:border-transparent
                  transition-[box-shadow,border-color]
                  duration-300
                  overflow-hidden
                "
              >
                {/* Colored gradient wash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(160deg, ${buyer.color}14, transparent 60%)`,
                  }}
                />

                {/* Top accent bar */}
                <span
                  className="
                    absolute top-0 left-0 h-[3px] w-0
                    group-hover:w-full
                    transition-all duration-500 ease-out
                  "
                  style={{ backgroundColor: buyer.color }}
                />

                {/* Icon with pulsing ring */}
                <div className="relative mb-5">
                  <span
                    className="
                      absolute inset-0 rounded-full scale-100
                      group-hover:scale-[1.35]
                      transition-transform duration-500 ease-out
                    "
                    style={{ backgroundColor: `${buyer.color}1a` }}
                  />
                  <div
                    className="
                      relative w-[72px] h-[72px]
                      flex items-center justify-center
                      rounded-full
                      transition-colors duration-400
                    "
                    style={{ backgroundColor: `${buyer.color}12` }}
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.7}
                      style={{ color: buyer.color }}
                      className="
                        transition-transform
                        duration-400
                        ease-out
                        group-hover:scale-[1.15]
                        group-hover:rotate-6
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    text-[#1d2740]
                    text-[16px]
                    sm:text-[17px]
                    font-bold
                    mb-2.5
                    tracking-tight
                  "
                >
                  {buyer.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    text-[#667085]
                    text-[12.5px]
                    sm:text-[13px]
                    font-normal
                    leading-[19px]
                    max-w-[200px]
                  "
                >
                  {buyer.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
