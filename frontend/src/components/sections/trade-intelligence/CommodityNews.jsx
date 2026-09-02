import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// =====================================================
// DUMMY NEWS DATA
// Later API se replace kar dena
// =====================================================

const newsData = [
  {
    id: 1,
    category: "ENERGY",
    categoryColor: "text-[#D65353]",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=500&q=80",
    title: "Oil Prices Fall as OPEC+ Considers Output Increase",
    description:
      "Crude oil prices declined after OPEC+ signaled potential production increase in June.",
    time: "30 min ago",
  },
  {
    id: 2,
    category: "AGRICULTURE",
    categoryColor: "text-[#83B43D]",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
    title: "Wheat Prices Rise on Supply Concerns in Black Sea",
    description:
      "Tight export supplies from Black Sea region support stronger global wheat prices.",
    time: "1 hr ago",
  },
  {
    id: 3,
    category: "METALS",
    categoryColor: "text-[#D65353]",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=500&q=80",
    title: "Gold Hits Record High Amid Global Uncertainty",
    description:
      "Investors turn to safe haven assets as geopolitical tensions escalate worldwide.",
    time: "2 hrs ago",
  },
  {
    id: 4,
    category: "TRADE POLICY",
    categoryColor: "text-[#83B43D]",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=500&q=80",
    title: "EU Extends Duty Suspension on Industrial Components",
    description:
      "EU extends duty suspension for selected industrial components to support trade recovery.",
    time: "3 hrs ago",
  },
  {
    id: 5,
    category: "SHIPPING & LOGISTICS",
    categoryColor: "text-[#D65353]",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=500&q=80",
    title: "Red Sea Shipping Disruptions Continue to Impact Global Trade",
    description:
      "Ongoing security concerns in Red Sea increase shipping costs and transit times.",
    time: "4 hrs ago",
  },
];

// =====================================================
// NEWS CARD
// =====================================================

function NewsCard({ item, index }) {
  return (
    <motion.article
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
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-w-0
        overflow-hidden
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-3
        transition-all
        duration-300
        hover:border-[#765323]
        hover:bg-[#041522]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.30)]
      "
    >
      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#D69A2B]/[0.05]
          blur-[30px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Image */}

      <div
        className="
          relative
          h-[145px]
          w-[78px]
          shrink-0
          overflow-hidden
          rounded-[5px]
          sm:h-[155px]
          sm:w-[82px]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#020D18]/80
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="relative flex min-w-0 flex-1 flex-col pl-3">
        {/* Category */}

        <span
          className={`
            text-[10px]
            font-bold
            uppercase
            tracking-[0.04em]
            ${item.categoryColor}
            sm:text-[16px]
          `}
        >
          {item.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-2
            line-clamp-3
            text-[13px]
            font-semibold
            leading-[1.35]
            text-[#E8ECEF]
            transition-colors
            duration-300
            group-hover:text-white
            sm:text-[16px]
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            line-clamp-3
            text-[11px]
            leading-[1.45]
            text-[#8F9CA7]
            sm:text-[16px]
          "
        >
          {item.description}
        </p>

        {/* Time */}

        <div className="mt-auto pt-3">
          <span
            className="
              text-[10px]
              font-medium
              text-[#AAB4BC]
              sm:text-[15px]
            "
          >
            16 May 2025 • {item.time}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function CommodityNews() {
  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-6
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* Main Container */}

        <div
          className="
            overflow-hidden
            rounded-[10px]
            border
            border-[#193249]
            bg-[#020E1A]
            p-4
            shadow-[0_10px_35px_rgba(0,0,0,0.25)]
            sm:p-5
            lg:p-6
          "
        >
          {/* ================= HEADER ================= */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <motion.h2
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
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                text-[19px]
                font-semibold
                uppercase
                tracking-[0.015em]
                text-[#F0F2F4]
                sm:text-[22px]
                lg:text-[25px]
              "
            >
              Commodity News & Market Insights
            </motion.h2>

            <button
              type="button"
              className="
                hidden
                shrink-0
                items-center
                gap-1.5
                text-[12px]
                font-semibold
                text-[#5F86A8]
                transition-all
                duration-300
                hover:text-[#D69A2B]
                sm:flex
                sm:text-[13px]
                lg:text-[14px]
              "
            >
              View All News
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* ================= NEWS GRID ================= */}

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-5
            "
          >
            {newsData.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* ================= MOBILE VIEW ALL ================= */}

          <button
            type="button"
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-1.5
              text-[12px]
              font-semibold
              text-[#5F86A8]
              transition-colors
              duration-300
              hover:text-[#D69A2B]
              sm:hidden
            "
          >
            View All News
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
