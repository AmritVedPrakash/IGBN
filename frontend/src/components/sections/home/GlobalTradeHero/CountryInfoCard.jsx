import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function CountryInfoCard({ country, onClose }) {
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
          left-[6%]
          z-40
          w-[250px]
          rounded-[10px]
          border
          border-[#735123]
          bg-[#03111F]/95
          p-4
          shadow-[0_18px_40px_rgba(0,0,0,.5)]
          backdrop-blur-lg

          xl:left-[7%]
          xl:w-[265px]
          xl:p-4.5

          2xl:left-[8%]
          2xl:w-[285px]
          2xl:p-5
        "
      >
        {/* ================= COUNTRY ================= */}
        <div className="flex items-center gap-3">
          <img
            src={country.flag}
            alt={country.name}
            className="
              h-[32px]
              w-[32px]
              rounded-full
              object-cover

              2xl:h-[36px]
              2xl:w-[36px]
            "
          />

          <h3
            className="
              text-[18px]
              font-semibold
              text-[#F4F5F6]

              2xl:text-[21px]
            "
          >
            {country.name}
          </h3>

          {/* FIX: close button now actually closes the card
              via the onClose handler passed down from
              GlobalTradeHero (setActiveCountry(null)). */}
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${country.name} details`}
            className="
              ml-auto
              flex
              h-[26px]
              w-[26px]
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[#9AA3AB]
              transition-colors
              duration-200

              hover:bg-[#122232]
              hover:text-[#E4E8EB]
            "
          >
            <X size={17} />
          </button>
        </div>

        {/* ================= EXPORT ================= */}
        <div className="mt-4 2xl:mt-5">
          <p
            className="
              text-[13px]
              font-medium
              text-[#AAB2BA]

              2xl:text-[14px]
            "
          >
            India Export (2023-24)
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span
              className="
                text-[19px]
                font-semibold
                text-[#F4F5F6]

                2xl:text-[22px]
              "
            >
              {country.exportValue}
            </span>

            <span
              className="
                text-[14px]
                font-semibold
                text-[#75AD4A]

                2xl:text-[15px]
              "
            >
              ↑ {country.exportGrowth}
            </span>
          </div>
        </div>

        {/* ================= IMPORT ================= */}
        <div className="mt-4 2xl:mt-5">
          <p
            className="
              text-[13px]
              font-medium
              text-[#AAB2BA]

              2xl:text-[14px]
            "
          >
            India Import (2023-24)
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span
              className="
                text-[19px]
                font-semibold
                text-[#F4F5F6]

                2xl:text-[22px]
              "
            >
              {country.importValue}
            </span>

            <span
              className="
                text-[14px]
                font-semibold
                text-[#75AD4A]

                2xl:text-[15px]
              "
            >
              ↑ {country.importGrowth}
            </span>
          </div>
        </div>

        {/* ================= TRADE BALANCE ================= */}
        <div className="mt-4 2xl:mt-5">
          <p
            className="
              text-[13px]
              font-medium
              text-[#AAB2BA]

              2xl:text-[14px]
            "
          >
            Trade Balance
          </p>

          <p
            className="
              mt-2
              text-[19px]
              font-semibold
              text-[#F4F5F6]

              2xl:text-[22px]
            "
          >
            {country.tradeBalance}
          </p>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="mt-4 2xl:mt-5">
          <p
            className="
              text-[13px]
              font-medium
              text-[#AAB2BA]

              2xl:text-[14px]
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
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-medium
                  text-[#D6DBDF]

                  2xl:px-3
                  2xl:text-[12px]
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
            mt-5
            flex
            min-h-[44px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-[6px]
            bg-gradient-to-r
            from-[#E0AA48]
            via-[#D99B2B]
            to-[#C98A24]
            text-[14px]
            font-semibold
            text-[#07111B]
            transition-all
            duration-300
            hover:shadow-[0_8px_22px_rgba(214,154,43,0.25)]

            2xl:mt-6
            2xl:min-h-[48px]
            2xl:text-[15px]
          "
        >
          View Opportunities
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1

              2xl:h-[19px]
              2xl:w-[19px]
            "
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
