import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Link2,
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

  const relatedInsights = selectedInsight
    ? insights.filter((item) => item !== selectedInsight).slice(0, 3)
    : [];

  const firstArticle = selectedInsight?.title === insights[0].title;
  const articleSections = firstArticle
    ? [
        { id: "introduction", title: "Introduction" },
        { id: "global-markets", title: "Why global markets matter for Indian MSMEs" },
        { id: "export-opportunities", title: "10 export opportunities to watch" },
        { id: "igbn-support", title: "How IGBN can help" },
        { id: "conclusion", title: "Conclusion" },
      ]
    : selectedInsight?.content.map((_, index) => ({
        id: `article-section-${index + 1}`,
        title: ["Introduction", "Market opportunities", "What exporters should know", "Conclusion"][index] || `Key insight ${index + 1}`,
      })) || [];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://igbn.com";
  const shareTitle = selectedInsight?.title || "IGBN Trade Insights";
  const copyArticleLink = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(shareUrl);
    }
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
                className="relative flex max-h-[94vh] w-full max-w-[96vw] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-800 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
              >
                <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-3 sm:px-7">
                  <a href="#" className="text-sm font-extrabold tracking-wide text-slate-800">IGBN <span className="font-medium text-slate-500">/ Trade Insights</span></a>
                  <button
                    type="button"
                    onClick={() => setSelectedInsight(null)}
                    aria-label="Close article"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto">
                  <div className="mx-auto grid max-w-[1550px] grid-cols-1 gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[52px_minmax(0,1fr)_300px] lg:gap-7 lg:px-10 lg:py-8">
                    <aside aria-label="Share this article" className="hidden lg:block">
                      <p className="mb-3 text-[11px] font-medium text-slate-500">Share this article</p>
                      <div className="sticky top-5 flex flex-col gap-2">
                        <a aria-label="Share on LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 transition hover:bg-[#0A66C2] hover:text-white">in</a>
                        <a aria-label="Share on X" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-900 hover:text-white"><span className="text-sm font-bold">X</span></a>
                        <a aria-label="Share on Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition hover:bg-[#1877F2] hover:text-white">f</a>
                        <button type="button" aria-label="Copy article link" onClick={copyArticleLink} className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"><Link2 size={16} /></button>
                      </div>
                    </aside>

                    <main className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:text-sm">
                        <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-800">{selectedInsight.category}</span>
                        <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} />{selectedInsight.date}</span>
                      </div>
                      <h2 id="insight-modal-title" className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">{selectedInsight.title}</h2>
                      <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{selectedInsight.excerpt}</p>

                      {firstArticle ? (
                        <div className="mt-7 space-y-7">
                          <section id="introduction" className="scroll-mt-6">
                            <p className="text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">{selectedInsight.content[0]}</p>
                          </section>
                          <section id="global-markets" className="scroll-mt-6">
                            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">Why global markets matter for Indian MSMEs</h3>
                            <div className="mt-2 h-0.5 w-9 bg-amber-500" />
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">{selectedInsight.content[1]}</p>
                          </section>
                          <section id="export-opportunities" className="scroll-mt-6">
                            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">10 export opportunities to watch</h3>
                            <div className="mt-2 h-0.5 w-9 bg-amber-500" />
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">{selectedInsight.content[2]}</p>
                            <ol className="mt-4 divide-y divide-slate-200">
                              {["Processed food and agricultural products", "Textiles and apparel", "Engineering goods and components", "Pharmaceuticals and healthcare products", "Renewable-energy equipment", "Automotive parts and components", "Specialty chemicals", "Leather goods and footwear", "Gems, jewellery and handicrafts", "IT and business services"].map((opportunity, index) => (
                                <li key={opportunity} className="flex gap-4 py-3.5">
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">{index + 1}</span>
                                  <div><h4 className="text-sm font-bold text-slate-800">{opportunity}</h4><p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">Indian businesses can meet growing international demand with reliable quality, clear product information and consistent delivery.</p></div>
                                </li>
                              ))}
                            </ol>
                          </section>
                          <section id="igbn-support" className="scroll-mt-6">
                            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">How IGBN can help</h3>
                            <div className="mt-2 h-0.5 w-9 bg-amber-500" />
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">{selectedInsight.content[3]}</p>
                          </section>
                          <section id="conclusion" className="scroll-mt-6 border-t border-slate-200 pt-5">
                            <h3 className="text-lg font-bold text-slate-900">Conclusion</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">With the right preparation and trusted connections, Indian MSMEs can turn global demand into sustainable export growth.</p>
                          </section>
                        </div>
                      ) : (
                        <div className="mt-7 space-y-7">
                          {selectedInsight.content.map((paragraph, index) => (
                            <section key={paragraph} id={`article-section-${index + 1}`} className="scroll-mt-6">
                              <h3 className="text-xl font-bold text-slate-900">{articleSections[index]?.title}</h3>
                              <div className="mt-2 h-0.5 w-9 bg-amber-500" />
                              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">{paragraph}</p>
                            </section>
                          ))}
                        </div>
                      )}
                    </main>

                    <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
                      <section className="rounded-lg border border-slate-200 p-4">
                        <h3 className="text-sm font-bold text-slate-900">In this article</h3>
                        <nav className="mt-3 space-y-2 border-l border-slate-200 pl-3">
                          {articleSections.map((section, index) => (
                            <a key={section.id} href={`#${section.id}`} className={`block text-xs leading-4 transition hover:text-blue-700 ${index === 0 ? "font-semibold text-blue-700" : "text-slate-500"}`}>{section.title}</a>
                          ))}
                        </nav>
                      </section>

                      <a href="#contact" onClick={() => setSelectedInsight(null)} className="group relative block min-h-[150px] overflow-hidden rounded-lg bg-slate-900 p-4 text-white">
                        <img src={selectedInsight.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />
                        <div className="relative max-w-[210px]"><p className="text-xs font-bold uppercase tracking-wide text-amber-300">IGBN · Make in India</p><h3 className="mt-2 text-base font-bold leading-5">Looking to expand internationally?</h3><p className="mt-1 text-xs leading-4 text-slate-100">Connect with verified buyers and explore global markets.</p><span className="mt-3 inline-flex rounded bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900">Explore IGBN Worldwide <ArrowRight className="ml-1" size={14} /></span></div>
                      </a>

                      <section className="rounded-lg border border-slate-200 p-3">
                        <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900">Related Articles</h3><span className="text-xs text-blue-700">View all →</span></div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                          {relatedInsights.map((item) => (
                            <button key={item.title} type="button" onClick={() => setSelectedInsight(item)} className="group flex min-w-0 gap-3 text-left sm:flex-col lg:flex-row">
                              <img src={item.image} alt="" className="h-16 w-24 shrink-0 rounded object-cover sm:h-20 sm:w-full lg:h-14 lg:w-20" />
                              <span className="min-w-0"><span className="block text-xs font-semibold leading-4 text-slate-800 group-hover:text-blue-700">{item.title}</span><span className="mt-1 block text-[10px] text-slate-500">{item.date}</span></span>
                            </button>
                          ))}
                        </div>
                      </section>
                    </aside>
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
