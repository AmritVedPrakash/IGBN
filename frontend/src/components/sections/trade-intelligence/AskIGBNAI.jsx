import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";

export default function AskIGBNAI() {
  const [product, setProduct] = useState("");
  const [country, setCountry] = useState("");
  const [question, setQuestion] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [insight, setInsight] = useState("");

  const products = [
    "Rice",
    "Textiles",
    "Spices",
    "Chemicals",
    "Pharmaceuticals",
    "FMCG",
    "Engineering Goods",
    "Leather Products",
  ];

  const countries = [
    "All Countries",
    "USA",
    "Germany",
    "UAE",
    "UK",
    "Australia",
    "China",
    "Saudi Arabia",
    "Canada",
  ];

  const popularSearches = [
    "Basmati Rice Demand",
    "Spices in Middle East",
    "Textile Opportunities Europe",
    "Chemicals in USA",
    "FMCG in Africa",
  ];

  const handleInsight = () => {
    // =====================================================
    // API WILL BE INTEGRATED HERE LATER
    // =====================================================

    const selectedProduct = product || "your selected product";
    const selectedCountry = country || "global markets";

    setInsight(
      `AI insights for ${selectedProduct} across ${selectedCountry} will appear here once the trade intelligence API is connected.`
    );
  };

  const handlePopularSearch = (search) => {
    setQuestion(search);
  };

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-7
        sm:px-6
        lg:px-8
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
        className="
          relative
          mx-auto
          max-w-[1650px]
          overflow-visible
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-4
          py-5
          shadow-[0_10px_35px_rgba(0,0,0,0.35)]
          sm:px-6
          sm:py-6
          lg:px-7
        "
      >
        {/* =================================================
            GOLDEN BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-0
            h-[150px]
            w-[300px]
            rounded-full
            bg-[#D69A2B]/[0.035]
            blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[8%]
            h-[150px]
            w-[300px]
            rounded-full
            bg-[#D69A2B]/[0.035]
            blur-[80px]
          "
        />

        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-4
          "
        >
          {/* BOT ICON */}

          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-[48px]
              w-[48px]
              shrink-0
              items-center
              justify-center
              rounded-[9px]
              border
              border-[#80602A]
              bg-[#071522]
              shadow-[0_0_20px_rgba(214,154,43,0.08)]
              sm:h-[52px]
              sm:w-[52px]
            "
          >
            <Bot
              size={31}
              strokeWidth={1.5}
              className="text-[#D69A2B]"
            />
          </motion.div>

          <div>
            <h2
              className="
                text-[18px]
                font-semibold
                leading-tight
                text-[#F4F5F6]
                sm:text-[21px]
                lg:text-[26px]
              "
            >
              <span className="text-[#D69A2B]">
                ASK IGBN AI
              </span>{" "}
              – Your Global Trade Assistant
            </h2>

            <p
              className="
                mt-1
                text-[12px]
                leading-[1.5]
                text-[#AEB8C0]
                sm:text-[14px]
                lg:text-[18px]
              "
            >
              Get instant trade intelligence for any product or market
            </p>
          </div>
        </div>

        {/* =================================================
            SEARCH CONTROLS
        ================================================== */}

        <div
          className="
            relative
            z-20
            mt-5
            grid
            grid-cols-1
            gap-3
            lg:grid-cols-[170px_175px_1fr_125px]
            lg:gap-3
          "
        >
          {/* ================= PRODUCT ================= */}

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowProduct(!showProduct);
                setShowCountry(false);
              }}
              className="
                flex
                h-[48px]
                w-full
                items-center
                justify-between
                rounded-[6px]
                border
                border-[#243A4D]
                bg-[#071522]
                px-4
                text-left
                transition-all
                duration-300
                hover:border-[#A97528]
              "
            >
              <span
                className={`
                  text-[13px]
                  font-medium
                  ${
                    product
                      ? "text-[#E6E9EC]"
                      : "text-[#AAB3BA]"
                  }
                `}
              >
                {product || "Select Product"}
              </span>

              <ChevronDown
                size={17}
                className={`
                  text-[#C9912B]
                  transition-transform
                  duration-300
                  ${showProduct ? "rotate-180" : ""}
                `}
              />
            </button>

            <AnimatePresence>
              {showProduct && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  className="
                    absolute
                    left-0
                    top-[54px]
                    z-50
                    max-h-[260px]
                    w-full
                    overflow-y-auto
                    rounded-[7px]
                    border
                    border-[#725021]
                    bg-[#061522]
                    p-1
                    shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                  "
                >
                  {products.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setProduct(item);
                        setShowProduct(false);
                      }}
                      className="
                        flex
                        w-full
                        items-center
                        rounded-[5px]
                        px-3
                        py-2.5
                        text-left
                        text-[13px]
                        text-[#D8DDE1]
                        transition-all
                        duration-200
                        hover:bg-[#D69A2B]/10
                        hover:text-[#D69A2B]
                      "
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= COUNTRY ================= */}

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowCountry(!showCountry);
                setShowProduct(false);
              }}
              className="
                flex
                h-[48px]
                w-full
                items-center
                justify-between
                rounded-[6px]
                border
                border-[#243A4D]
                bg-[#071522]
                px-4
                text-left
                transition-all
                duration-300
                hover:border-[#A97528]
              "
            >
              <span
                className={`
                  text-[13px]
                  font-medium
                  ${
                    country
                      ? "text-[#E6E9EC]"
                      : "text-[#AAB3BA]"
                  }
                `}
              >
                {country || "All Countries"}
              </span>

              <ChevronDown
                size={18}
                className={`
                  text-[#C9912B]
                  transition-transform
                  duration-300
                  ${showCountry ? "rotate-180" : ""}
                `}
              />
            </button>

            <AnimatePresence>
              {showCountry && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  className="
                    absolute
                    left-0
                    top-[54px]
                    z-50
                    max-h-[260px]
                    w-full
                    overflow-y-auto
                    rounded-[7px]
                    border
                    border-[#725021]
                    bg-[#061522]
                    p-1
                    shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                  "
                >
                  {countries.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCountry(
                          item === "All Countries"
                            ? ""
                            : item
                        );
                        setShowCountry(false);
                      }}
                      className="
                        flex
                        w-full
                        items-center
                        rounded-[5px]
                        px-3
                        py-2.5
                        text-left
                        text-[13px]
                        text-[#D8DDE1]
                        transition-all
                        duration-200
                        hover:bg-[#D69A2B]/10
                        hover:text-[#D69A2B]
                      "
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= QUESTION INPUT ================= */}

          <div
            className="
              flex
              h-[48px]
              items-center
              gap-3
              rounded-[6px]
              border
              border-[#243A4D]
              bg-[#071522]
              px-4
              transition-all
              duration-300
              focus-within:border-[#A97528]
              focus-within:shadow-[0_0_18px_rgba(214,154,43,0.06)]
            "
          >
            <Search
              size={18}
              className="shrink-0 text-[#71808D]"
            />

            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Or ask your question... e.g. Where is demand for Indian rice increasing?"
              className="
                w-full
                bg-transparent
                text-[13px]
                text-[#E1E5E9]
                outline-none
                placeholder:text-[#7D8993]
                sm:text-[14px]
              "
            />
          </div>

          {/* ================= GET INSIGHTS ================= */}

          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={handleInsight}
            className="
              group
              flex
              h-[48px]
              items-center
              justify-center
              gap-2
              rounded-[6px]
              border
              border-[#D69A2B]
              bg-gradient-to-r
              from-[#E0AA48]
              via-[#D69A2B]
              to-[#C98A24]
              px-4
              text-[16px]
              font-semibold
              text-[#07111B]
              shadow-[0_7px_22px_rgba(214,154,43,0.14)]
              transition-all
              duration-300
              hover:shadow-[0_9px_28px_rgba(214,154,43,0.28)]
            "
          >
            <span>Get Insights</span>

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>

        {/* =================================================
            POPULAR SEARCHES
        ================================================== */}

        <div
          className="
            relative
            z-10
            mt-5
            flex
            flex-wrap
            items-center
            gap-2
            sm:gap-3
          "
        >
          <span
            className="
              mr-1
              text-[12px]
              font-semibold
              text-[#D5DADF]
              sm:text-[14px]
            "
          >
            Popular Searches:
          </span>

          {popularSearches.map((item) => (
            <motion.button
              key={item}
              type="button"
              whileHover={{
                y: -2,
              }}
              onClick={() => handlePopularSearch(item)}
              className="
                rounded-[5px]
                border
                border-[#263D50]
                bg-[#071522]
                px-3
                py-2
                text-[11px]
                font-medium
                text-[#BFC7CD]
                transition-all
                duration-300
                hover:border-[#8D6525]
                hover:bg-[#D69A2B]/[0.06]
                hover:text-[#D69A2B]
                sm:text-[14px]
              "
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* =================================================
            DUMMY INSIGHT RESULT
        ================================================== */}

        <AnimatePresence>
          {insight && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="
                relative
                z-10
                mt-4
                overflow-hidden
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-[7px]
                  border
                  border-[#725021]/70
                  bg-[#071522]
                  px-4
                  py-3
                "
              >
                <Sparkles
                  size={18}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#D69A2B]
                  "
                />

                <p
                  className="
                    text-[13px]
                    leading-[1.6]
                    text-[#D3D9DE]
                    sm:text-[15px]
                  "
                >
                  {insight}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}