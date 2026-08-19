import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// ================= IMAGES =================
// Actual filenames ke according change kar lena
import insight1 from "../../assets/homebg/insight1.png";
import insight2 from "../../assets/homebg/insight2.png";
import insight3 from "../../assets/homebg/insight3.png";
import insight4 from "../../assets/homebg/insight4.png";
import insight5 from "../../assets/homebg/insight5.png";

export default function LatestInsights() {
  const sliderRef = useRef(null);

  const insights = [
    {
      image: insight1,
      category: "Market Insight",
      date: "06 May 2024",
      title: "Top 10 Export Opportunities for Indian MSMEs in 2024",
    },
    {
      image: insight2,
      category: "Trade Report",
      date: "05 May 2024",
      title: "UAE Market Outlook for Indian Agro Products",
    },
    {
      image: insight3,
      category: "Export Guide",
      date: "04 May 2024",
      title: "How to Start Export Business from India: A Complete Guide",
    },
    {
      image: insight4,
      category: "Market Insight",
      date: "02 May 2024",
      title: "Engineering Goods Demand Surges in Europe",
    },
    {
      image: insight5,
      category: "Policy Update",
      date: "30 Apr 2024",
      title: "New Export Policy Updates & Benefits for Exporters",
    },
  ];

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -330,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 330,
      behavior: "smooth",
    });
  };

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
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-4
          pb-6
          pt-5
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          sm:px-5
          lg:px-6
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            mb-5
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >
          <h2
            className="
              text-[22px]
              font-semibold
              text-[#F4F5F6]
              sm:text-[24px]
              lg:text-[27px]
            "
          >
            Latest Trade Insights
          </h2>

          <motion.button
            whileHover={{ x: 4 }}
            className="
              group
              flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[#D69A2B]
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            View All Insights
            <ArrowRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* LEFT ARROW */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              absolute
              -left-[22px]
              top-1/2
              z-30
              hidden
              h-[44px]
              w-[44px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#725021]
              bg-[#04121F]
              text-[#D69A2B]
              shadow-[0_8px_20px_rgba(0,0,0,0.35)]
              md:flex
            "
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              scroll-smooth

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {insights.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  flex
                  min-h-[390px]
                  w-[285px]
                  shrink-0
                  snap-start
                  flex-col
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#26384A]
                  bg-[#061522]
                  shadow-[0_8px_24px_rgba(0,0,0,0.26)]
                  transition-all
                  duration-300

                  hover:border-[#A9782D]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.38)]

                  sm:w-[300px]
                  xl:w-[calc((100%-64px)/5)]
                  xl:min-w-0
                "
              >
                {/* ================= IMAGE ================= */}
                <div
                  className="
                    relative
                    h-[155px]
                    overflow-hidden
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
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#061522]/45
                      to-transparent
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    px-5
                    py-5
                  "
                >
                  {/* Category + Date */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    {/* Category */}
                    <span
                      className="
    rounded-[5px]
    border
    border-[#9C6E2A]
    bg-[#D69A2B]/[0.05]
    px-3
    py-1.5
    text-[13px]
    font-semibold
    text-[#D69A2B]
    sm:text-[14px]
  "
                    >
                      {item.category}
                    </span>

                    {/* Date */}
                    <span
                      className="
    whitespace-nowrap
    text-[13px]
    font-medium
    text-[#AEB6BE]
    sm:text-[14px]
  "
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="
    mt-5
    flex-1
    text-[17px]
    font-semibold
    leading-[1.6]
    text-[#F0F2F4]
    transition-colors
    duration-300
    group-hover:text-[#D69A2B]

    sm:text-[18px]
    lg:text-[19px]
  "
                  >
                    {item.title}
                  </h3>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="
    group/read
    mt-5
    flex
    w-fit
    items-center
    gap-2
    text-[15px]
    font-semibold
    text-[#D69A2B]
    sm:text-[16px]
  "
                  >
                    Read More
                    <ArrowRight
                      size={20}
                      className="
      transition-transform
      duration-300
      group-hover/read:translate-x-1
    "
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              absolute
              -right-[22px]
              top-1/2
              z-30
              hidden
              h-[44px]
              w-[44px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#725021]
              bg-[#04121F]
              text-[#D69A2B]
              shadow-[0_8px_20px_rgba(0,0,0,0.35)]
              md:flex
            "
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
