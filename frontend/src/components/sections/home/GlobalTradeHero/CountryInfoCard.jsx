import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function CountryInfoCard({ country }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={country.id}
        initial={{
          opacity: 0,
          x: -15,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: 10,
          scale: 0.97,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute
          bottom-[5%]
          left-[8%]
          z-40
          w-[285px]
          rounded-[10px]
          border
          border-[#735123]
          bg-[#03111F]/95
          p-5
          shadow-[0_18px_40px_rgba(0,0,0,.5)]
          backdrop-blur-lg
        "
      >
        {/* ================= COUNTRY ================= */}
        <div className="flex items-center gap-3">
          <img
            src={country.flag}
            alt={country.name}
            className="
              h-[36px]
              w-[36px]
              rounded-full
              object-cover
            "
          />

          <h3
            className="
              text-[21px]
              font-semibold
              text-[#F4F5F6]
            "
          >
            {country.name}
          </h3>

          <X
            size={19}
            className="
              ml-auto
              text-[#9AA3AB]
            "
          />
        </div>

        {/* ================= EXPORT ================= */}
        <div className="mt-5">
          <p
            className="
              text-[14px]
              font-medium
              text-[#AAB2BA]
            "
          >
            India Export (2023-24)
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span
              className="
                text-[22px]
                font-semibold
                text-[#F4F5F6]
              "
            >
              {country.exportValue}
            </span>

            <span
              className="
                text-[15px]
                font-semibold
                text-[#75AD4A]
              "
            >
              ↑ {country.exportGrowth}
            </span>
          </div>
        </div>

        {/* ================= IMPORT ================= */}
        <div className="mt-5">
          <p
            className="
              text-[14px]
              font-medium
              text-[#AAB2BA]
            "
          >
            India Import (2023-24)
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span
              className="
                text-[22px]
                font-semibold
                text-[#F4F5F6]
              "
            >
              {country.importValue}
            </span>

            <span
              className="
                text-[15px]
                font-semibold
                text-[#75AD4A]
              "
            >
              ↑ {country.importGrowth}
            </span>
          </div>
        </div>

        {/* ================= TRADE BALANCE ================= */}
        <div className="mt-5">
          <p
            className="
              text-[14px]
              font-medium
              text-[#AAB2BA]
            "
          >
            Trade Balance
          </p>

          <p
            className="
              mt-2
              text-[22px]
              font-semibold
              text-[#F4F5F6]
            "
          >
            {country.tradeBalance}
          </p>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="mt-5">
          <p
            className="
              text-[14px]
              font-medium
              text-[#AAB2BA]
            "
          >
            Top Export Products
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {country.products.map((product) => (
              <span
                key={product}
                className="
                  rounded-[5px]
                  border
                  border-[#374858]
                  bg-[#071522]
                  px-3
                  py-1.5
                  text-[12px]
                  font-medium
                  text-[#D6DBDF]
                "
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        {/* ================= BUTTON ================= */}
        <button
          className="
            group
            mt-6
            flex
            min-h-[48px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-[6px]
            bg-gradient-to-r
            from-[#E0AA48]
            via-[#D99B2B]
            to-[#C98A24]
            text-[15px]
            font-semibold
            text-[#07111B]
            transition-all
            duration-300
            hover:shadow-[0_8px_22px_rgba(214,154,43,0.25)]
          "
        >
          View Opportunities
          <ArrowRight
            size={19}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
