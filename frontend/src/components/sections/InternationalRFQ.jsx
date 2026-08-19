import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// ================= FLAGS =================
import usaFlag from "../../assets/flag/usa.png";
import germanyFlag from "../../assets/flag/germany.png";
import uaeFlag from "../../assets/flag/uae.png";
import saudiFlag from "../../assets/flag/saudi-arabia.png";
import indonesiaFlag from "../../assets/flag/indonesia.png";
import ukFlag from "../../assets/flag/uk.png";

export default function InternationalRFQ() {
  const sliderRef = useRef(null);

  const rfqData = [
    {
      id: 1,
      country: "USA",
      flag: usaFlag,
      title: "Cotton Fabric Supply",
      category: "Textiles & Fabrics",
      quantity: "50,000 Meters",
      date: "21 May 2024",
      status: "Active",
    },
    {
      id: 2,
      country: "Germany",
      flag: germanyFlag,
      title: "Industrial Valves",
      category: "Machinery",
      quantity: "2,000 Units",
      date: "20 May 2024",
      status: "Active",
    },
    {
      id: 3,
      country: "UAE",
      flag: uaeFlag,
      title: "Dates (Various Types)",
      category: "Food & Beverages",
      quantity: "10 Tons",
      date: "19 May 2024",
      status: "Active",
    },
    {
      id: 4,
      country: "Saudi Arabia",
      flag: saudiFlag,
      title: "Basmati Rice",
      category: "Food & Beverages",
      quantity: "25 Tons",
      date: "18 May 2024",
      status: "Active",
    },
    {
      id: 5,
      country: "Indonesia",
      flag: indonesiaFlag,
      title: "Palm Oil",
      category: "Agro & Food",
      quantity: "30 Tons",
      date: "18 May 2024",
      status: "Active",
    },
    {
      id: 6,
      country: "UK",
      flag: ukFlag,
      title: "Packaging Materials",
      category: "Packaging",
      quantity: "15,000 Units",
      date: "17 May 2024",
      status: "Active",
    },
  ];

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
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
        py-9
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[130px]
        "
      />

      {/* =====================================================
          MAIN OUTER BOX
      ====================================================== */}
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
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-4
          pb-6
          pt-5
          shadow-[0_12px_35px_rgba(0,0,0,0.30)]

          sm:px-5
          lg:px-6
        "
      >
        {/* =====================================================
            TOP HEADER
        ====================================================== */}
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
          {/* Heading */}
          <h2
            className="
              text-[21px]
              font-semibold
              leading-tight
              text-[#F5F5F5]

              sm:text-[23px]
              md:text-[25px]
              lg:text-[27px]
            "
          >
            Active RFQs Worldwide
          </h2>

          {/* View All */}
          <motion.button
            whileHover={{
              x: 4,
            }}
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
            View All RFQs
            <ArrowRight
              size={19}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>

        {/* =====================================================
            RFQ SLIDER AREA
        ====================================================== */}
        <div className="relative">
          {/* ================= LEFT ARROW ================= */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              absolute
              -left-[21px]
              top-1/2
              z-30
              hidden
              h-[43px]
              w-[43px]
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

          {/* ================= CARDS ================= */}
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              scroll-smooth
              pb-1

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {rfqData.map((rfq, index) => (
              <motion.div
                key={rfq.id}
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
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  flex
                  min-h-[315px]
                  w-[260px]
                  shrink-0
                  snap-start
                  flex-col
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#D7D7D7]
                  bg-[#F5F5F3]
                  px-5
                  py-5
                  shadow-[0_7px_22px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-300

                  hover:shadow-[0_15px_30px_rgba(0,0,0,0.28)]

                  sm:w-[275px]
                  lg:w-[285px]
                  2xl:w-[calc((100%-80px)/6)]
                  2xl:min-w-0
                "
              >
                {/* ================= COUNTRY ================= */}
                <div className="flex items-center gap-3">
                  {/* Flag */}
                  <div
                    className="
                      h-[31px]
                      w-[44px]
                      shrink-0
                      overflow-hidden
                      rounded-[3px]
                      border
                      border-black/10
                      bg-white
                    "
                  >
                    <img
                      src={rfq.flag}
                      alt={`${rfq.country} flag`}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Country Name */}
                  <p
                    className="
                      text-[14px]
                      font-semibold
                      text-[#252525]

                      sm:text-[15px]
                    "
                  >
                    {rfq.country}
                  </p>
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="
                    mt-6
                    min-h-[45px]
                    text-[15px]
                    font-semibold
                    leading-[1.45]
                    text-[#1B1B1B]
                    transition-colors
                    duration-300

                    group-hover:text-[#A96F16]

                    sm:text-[16px]
                  "
                >
                  {rfq.title}
                </h3>

                {/* ================= DETAILS ================= */}
                <div
                  className="
                    mt-3
                    flex-1
                    space-y-2
                  "
                >
                  {/* Category */}
                  <p
                    className="
                      text-[12px]
                      font-medium
                      leading-[1.5]
                      text-[#666666]

                      sm:text-[13px]
                    "
                  >
                    {rfq.category}
                  </p>

                  {/* Qty */}
                  <p
                    className="
                      text-[12px]
                      leading-[1.5]
                      text-[#777777]

                      sm:text-[13px]
                    "
                  >
                    Qty:{" "}
                    <span
                      className="
                        font-medium
                        text-[#4A4A4A]
                      "
                    >
                      {rfq.quantity}
                    </span>
                  </p>

                  {/* Date */}
                  <p
                    className="
                      text-[12px]
                      leading-[1.5]
                      text-[#777777]

                      sm:text-[13px]
                    "
                  >
                    {rfq.date}
                  </p>
                </div>

                {/* ================= ACTIVE STATUS ================= */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                    mt-5
                    flex
                    min-h-[42px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[5px]
                    bg-[#E4E9E3]
                    px-3
                    py-2
                    text-[13px]
                    font-semibold
                    text-[#397346]

                    sm:text-[14px]
                  "
                >
                  <span
                    className="
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-[#4C9458]
                    "
                  />

                  {rfq.status}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT ARROW ================= */}
          <motion.button
            onClick={scrollRight}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              absolute
              -right-[21px]
              top-1/2
              z-30
              hidden
              h-[43px]
              w-[43px]
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
