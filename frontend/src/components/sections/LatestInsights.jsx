import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// ================= IMAGES =================
// Actual filenames ke according change kar lena
import insight1 from "../../assets/homebg/insight1.png";
import insight2 from "../../assets/homebg/insight2.png";
import insight3 from "../../assets/homebg/insight3.png";
import insight4 from "../../assets/homebg/insight4.png";
import insight5 from "../../assets/homebg/insight5.png";

export default function LatestInsights() {
  const sliderRef = useRef(null);
  const [selectedInsight, setSelectedInsight] = useState(null);

  const insights = [
    {
      image: insight1,
      category: "Market Insight",
      date: "06 May 2024",
      title: "Top 10 Export Opportunities for Indian MSMEs in 2024",
      excerpt:
        "Explore the products and sectors creating new opportunities for Indian small and medium-sized businesses in global markets.",
      content: [
        "Indian MSMEs are playing an increasingly important role in global supply chains. With rising demand for quality products, verification of sourcing and favourable trade relations, 2024 offers significant export opportunities for Indian businesses across multiple sectors.",
        "Global markets provide Indian MSMEs access to a larger customer base, better margins and opportunities to build long-term partnerships. Many countries are actively looking to diversify supply chains, and India is emerging as a reliable and competitive sourcing destination.",
        "Key opportunities include processed food and agricultural products, textiles and apparel, engineering goods and components, pharmaceuticals, renewable-energy equipment, and specialised manufacturing. Businesses can strengthen their readiness with product certifications, reliable fulfilment and clear export documentation.",
        "IGBN helps Indian businesses discover international demand, connect with verified buyers and build the market knowledge needed to grow their exports.",
      ],
    },
    {
      image: insight2,
      category: "Trade Report",
      date: "05 May 2024",
      title: "UAE Market Outlook for Indian Agro Products",
      excerpt:
        "A closer look at demand, sourcing priorities and export potential for Indian agricultural products in the UAE.",
      content: [
        "The UAE remains an important regional destination for agricultural products, supported by strong food-import demand and well-connected logistics networks.",
        "Indian exporters can explore opportunities across grains, processed foods, spices, fresh produce and other value-added products. Consistent quality, transparent documentation and dependable delivery are important for building buyer confidence.",
        "Businesses should review category-specific standards and buyer requirements before entering the market. Building local partnerships can also help exporters understand distribution channels and changing demand.",
      ],
    },
    {
      image: insight3,
      category: "Export Guide",
      date: "04 May 2024",
      title: "How to Start Export Business from India: A Complete Guide",
      excerpt:
        "Understand the practical steps involved in preparing your business, products and documentation for exporting.",
      content: [
        "Starting an export business begins with choosing a product and researching markets where there is clear demand. Consider competition, buyer expectations, shipping requirements and the standards that apply to your product.",
        "Prepare your business documentation, obtain the required registrations and make sure your product information, pricing and packaging are export-ready. Accurate paperwork and clear communication can help prevent delays during fulfilment.",
        "Build a trusted network of buyers and logistics partners, agree on payment and delivery terms, and start with a manageable order. Reviewing feedback after each shipment helps you improve and grow sustainably.",
      ],
    },
    {
      image: insight4,
      category: "Market Insight",
      date: "02 May 2024",
      title: "Engineering Goods Demand Surges in Europe",
      excerpt:
        "European buyers are looking for dependable suppliers across a range of engineering and industrial categories.",
      content: [
        "Demand for engineering goods across Europe is creating opportunities for manufacturers with strong quality systems and dependable production capacity.",
        "Indian suppliers can explore interest in machinery, electrical equipment, automotive components and specialised industrial products. Buyers commonly look for consistent specifications, traceability and clear delivery commitments.",
        "Exporters should assess applicable technical and regulatory requirements early, prepare detailed product documentation and build relationships with buyers whose procurement needs align with their capabilities.",
      ],
    },
    {
      image: insight5,
      category: "Policy Update",
      date: "30 Apr 2024",
      title: "New Export Policy Updates & Benefits for Exporters",
      excerpt:
        "Keep up with policy changes and support programmes that can help Indian exporters plan their next move.",
      content: [
        "Export policies and support programmes can influence costs, documentation and market access. Staying current helps businesses make better-informed decisions and avoid preventable compliance issues.",
        "Exporters should review official notifications relevant to their product categories and markets, confirm eligibility requirements and maintain accurate records for applications and claims.",
        "Because policy details can change, businesses should verify current guidance with the relevant government sources or a qualified trade professional before taking action.",
      ],
    },
  ];

  useEffect(() => {
    if (!selectedInsight) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedInsight(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedInsight]);

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
            type="button"
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
                    type="button"
                    onClick={() => setSelectedInsight(item)}
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

      {createPortal(
        <AnimatePresence>
          {selectedInsight && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedInsight(null);
                }
              }}
            >
              <motion.article
                role="dialog"
                aria-modal="true"
                aria-labelledby="insight-modal-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[#725021]/80 bg-[#03111F] text-[#E2E5E8] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
              >
                <div className="relative h-44 shrink-0 sm:h-60">
                  <img
                    src={selectedInsight.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111F] via-[#03111F]/25 to-black/10" />
                  <button
                    type="button"
                    onClick={() => setSelectedInsight(null)}
                    aria-label="Close article"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D69A2B]/70 bg-[#03111F]/90 text-[#F4F5F6] transition hover:bg-[#D69A2B] hover:text-[#07111B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="overflow-y-auto px-5 pb-6 pt-2 sm:px-8 sm:pb-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-md border border-[#9C6E2A] bg-[#D69A2B]/[0.08] px-3 py-1 font-semibold text-[#D69A2B]">
                      {selectedInsight.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#AAB2BA]">
                      <CalendarDays size={15} />
                      {selectedInsight.date}
                    </span>
                  </div>

                  <h2
                    id="insight-modal-title"
                    className="mt-4 text-2xl font-bold leading-tight text-[#F4F5F6] sm:text-3xl"
                  >
                    {selectedInsight.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-[#D7DCE1]">
                    {selectedInsight.excerpt}
                  </p>

                  <div className="mt-5 space-y-4">
                    {selectedInsight.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-[#AAB2BA] sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex justify-end border-t border-[#725021]/60 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedInsight(null)}
                      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#D69A2B] px-5 py-2 text-sm font-semibold text-[#D69A2B] transition hover:bg-[#D69A2B]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
                    >
                      Close article
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
