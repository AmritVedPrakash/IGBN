import React from "react";
import { motion } from "framer-motion";
import { BellRing, Ship, ShoppingBag, Star, ArrowRight } from "lucide-react";

const alerts = [
  {
    icon: BellRing,
    title: "New EU Packaging Regulations",
    description: "Effective from 2025",
    time: "2m ago",
    type: "Regulation",
  },
  {
    icon: Ship,
    title: "Shipping Disruption in Red Sea",
    description: "Delays Expected",
    time: "15m ago",
    type: "Logistics",
  },
  {
    icon: ShoppingBag,
    title: "USA Retail Sales Growth",
    description: "Boosts FMCG Import Demand",
    time: "32m ago",
    type: "Market",
  },
  {
    icon: Star,
    title: "Philippines – Higher Rice Demand",
    description: "Due to Supply Shortage",
    time: "1h ago",
    type: "Demand",
  },
];

export default function LiveTradeAlerts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        transition-all
        duration-300
        hover:border-[#6F5228]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.38)]
        lg:p-5
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[70px]
          -top-[70px]
          h-[160px]
          w-[160px]
          rounded-full
          bg-[#D69A2B]/[0.05]
          blur-[55px]
          transition-all
          duration-500
          group-hover:bg-[#D69A2B]/[0.09]
        "
      />

      {/* Header */}

      <div className="relative flex items-center justify-between">
        <h2
          className="
            text-[17px]
            font-semibold
            uppercase
            tracking-[0.01em]
            text-[#EEF1F3]
            sm:text-[19px]
            lg:text-[22px]
          "
        >
          Live Trade Alerts
        </h2>

        <button
          type="button"
          className="
            flex
            items-center
            gap-1
            text-[11px]
            font-semibold
            text-[#66839C]
            transition-colors
            duration-200
            hover:text-[#D69A2B]
            sm:text-[15px]
          "
        >
          View All Alerts
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Alert List */}

      <div className="relative mt-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;

          return (
            <motion.div
              key={alert.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              className="
                group/item
                flex
                items-center
                gap-3
                border-b
                border-[#142A3B]
                py-3
                last:border-b-0
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[7px]
                  border
                  border-[#31485B]
                  bg-[#071A2A]
                  transition-all
                  duration-300
                  group-hover/item:border-[#806029]
                  group-hover/item:bg-[#D69A2B]/[0.07]
                "
              >
                <Icon size={18} strokeWidth={1.7} className="text-[#D69A2B]" />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate
                    text-[12px]
                    font-semibold
                    text-[#DCE1E5]
                    sm:text-[16px]
                  "
                >
                  {alert.title}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[10px]
                    font-medium
                    text-[#8999A6]
                    sm:text-[15px]
                  "
                >
                  {alert.description}
                </p>
              </div>

              {/* Time */}

              <span
                className="
                  shrink-0
                  text-[9px]
                  font-medium
                  text-[#6F7F8B]
                  sm:text-[15px]
                "
              >
                {alert.time}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
