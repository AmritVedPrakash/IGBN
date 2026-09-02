import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Truck,
  Droplets,
  Cpu,
  CalendarDays,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// =====================================================
// DUMMY DATA
// Later replace this with API response
// =====================================================

const insights = [
  {
    icon: TrendingUp,
    color: "blue",
    text: "U.S. economy shows steady growth with strong consumer demand.",
  },
  {
    icon: Truck,
    color: "gold",
    text: "Trade deficit persists due to high imports, especially in electronics & oil.",
  },
  {
    icon: Droplets,
    color: "gold",
    text: "Lower oil prices will support inflation control in coming months.",
  },
  {
    icon: Cpu,
    color: "green",
    text: "Tech product launches will boost global supply chain & trade activity.",
  },
];

const upcomingReports = [
  {
    date: "May 17",
    title: "Retail Sales",
    month: "Apr 2025",
  },
  {
    date: "May 21",
    title: "FOMC Meeting",
    month: "Minutes",
  },
  {
    date: "May 23",
    title: "PMI (Manufacturing)",
    month: "May 2025",
  },
  {
    date: "May 30",
    title: "PCE Inflation",
    month: "Apr 2025",
  },
];

// =====================================================
// ANIMATION
// =====================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// =====================================================
// QUICK INSIGHT ITEM
// =====================================================

function InsightItem({ item, index }) {
  const Icon = item.icon;

  const iconColor =
    item.color === "green"
      ? "text-[#91B63F]"
      : item.color === "gold"
        ? "text-[#D69A2B]"
        : "text-[#7595D8]";

  const iconBg =
    item.color === "green"
      ? "bg-[#91B63F]/10 border-[#91B63F]/20"
      : item.color === "gold"
        ? "bg-[#D69A2B]/10 border-[#D69A2B]/20"
        : "bg-[#7595D8]/10 border-[#7595D8]/20";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -3,
      }}
      className="
        group
        flex
        min-w-0
        items-center
        gap-3
        rounded-[7px]
        border
        border-[#162D41]
        bg-[#061522]
        px-3
        py-3
        transition-all
        duration-300
        hover:border-[#29445A]
        hover:bg-[#081927]
      "
    >
      {/* ICON */}

      <div
        className={`
          flex
          h-[42px]
          w-[42px]
          shrink-0
          items-center
          justify-center
          rounded-[6px]
          border
          ${iconBg}
        `}
      >
        <Icon size={21} strokeWidth={1.8} className={iconColor} />
      </div>

      {/* TEXT */}

      <p
        className="
          text-[12px]
          font-medium
          leading-[1.45]
          text-[#CBD2D8]
          sm:text-[13px]
          lg:text-[12px]
          xl:text-[13px]
        "
      >
        {item.text}
      </p>
    </motion.div>
  );
}

// =====================================================
// UPCOMING REPORT CARD
// =====================================================

function ReportItem({ item }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -3,
      }}
      className="
        flex
        min-h-[82px]
        flex-1
        flex-col
        items-center
        justify-center
        rounded-[7px]
        border
        border-[#162D41]
        bg-[#061522]
        px-2
        py-3
        text-center
        transition-all
        duration-300
        hover:border-[#29445A]
        hover:bg-[#081927]
      "
    >
      <div
        className="
          text-[13px]
          font-semibold
          text-[#E7EAED]
          sm:text-[14px]
        "
      >
        {item.date}
      </div>

      <div
        className="
          mt-1
          text-[12px]
          font-medium
          leading-tight
          text-[#D4D9DE]
          sm:text-[13px]
        "
      >
        {item.title}
      </div>

      <div
        className="
          mt-1
          text-[10px]
          text-[#7D8D99]
          sm:text-[11px]
        "
      >
        {item.month}
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function QuickInsights() {
  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-3
        py-5
        sm:px-5
        lg:px-6
      "
    >
      <div className="mx-auto w-full max-w-[1700px]">
        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            xl:grid-cols-[1.7fr_1.2fr_0.72fr]
          "
        >
          {/* =================================================
              QUICK INSIGHTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              overflow-hidden
              rounded-[9px]
              border
              border-[#193249]
              bg-[#020E1A]
              p-3
              sm:p-4
            "
          >
            {/* HEADER */}

            <div className="flex items-center justify-between">
              <h2
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.01em]
                  text-[#EEF1F3]
                  sm:text-[18px]
                "
              >
                Quick Insights
              </h2>
            </div>

            {/* INSIGHTS */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="
                mt-3
                grid
                grid-cols-1
                gap-2
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {insights.map((item, index) => (
                <InsightItem key={index} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              UPCOMING ECONOMIC DATA
          ================================================= */}

          <motion.div
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="
              overflow-hidden
              rounded-[9px]
              border
              border-[#193249]
              bg-[#020E1A]
              p-3
              sm:p-4
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <h2
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.01em]
                  text-[#EEF1F3]
                  sm:text-[18px]
                "
              >
                Upcoming Economic Data & Reports
              </h2>

              <button
                type="button"
                className="
                  hidden
                  shrink-0
                  items-center
                  gap-1
                  text-[12px]
                  font-semibold
                  text-[#718EAA]
                  transition-colors
                  hover:text-[#D69A2B]
                  sm:flex
                "
              >
                View Calendar
                <ArrowRight size={14} />
              </button>
            </div>

            {/* REPORTS */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="
                mt-3
                grid
                grid-cols-2
                gap-2
                sm:grid-cols-4
              "
            >
              {upcomingReports.map((item) => (
                <ReportItem key={`${item.date}-${item.title}`} item={item} />
              ))}
            </motion.div>

            {/* MOBILE CALENDAR */}

            <button
              type="button"
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-1
                text-[12px]
                font-semibold
                text-[#718EAA]
                transition-colors
                hover:text-[#D69A2B]
                sm:hidden
              "
            >
              View Calendar
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* =================================================
              IGBN RECOMMENDATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: 0.12,
            }}
            className="
              relative
              overflow-hidden
              rounded-[9px]
              border
              border-[#193249]
              bg-[#020E1A]
              p-4
              sm:p-5
            "
          >
            {/* GOLD GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[40px]
                -top-[40px]
                h-[120px]
                w-[120px]
                rounded-full
                bg-[#D69A2B]/[0.06]
                blur-[40px]
              "
            />

            {/* HEADER */}

            <div className="relative flex items-center gap-2">
              <div
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D69A2B]/40
                  bg-[#D69A2B]/10
                "
              >
                <Sparkles size={16} className="text-[#D69A2B]" />
              </div>

              <h2
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  text-[#EEF1F3]
                  sm:text-[18px]
                "
              >
                IGBN Recommendation
              </h2>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                relative
                mt-3
                text-[12px]
                font-medium
                leading-[1.55]
                text-[#C5CDD3]
                sm:text-[13px]
              "
            >
              Businesses should monitor energy price trends, tech demand cycle,
              and USD movement to optimize procurement, pricing, and export
              strategies.
            </p>

            {/* CTA */}

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="button"
              className="
                relative
                mt-4
                flex
                h-[38px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-[5px]
                bg-[#D69A2B]
                px-4
                text-[12px]
                font-bold
                text-[#08111A]
                shadow-[0_5px_20px_rgba(214,154,43,0.12)]
                transition-all
                duration-200
                hover:bg-[#E3AA3A]
              "
            >
              Talk to IGBN AI Assistant
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
