import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function CountryPin({ country, active, onEnter, onClick }) {
  return (
    <motion.button
      onMouseEnter={onEnter}
      onClick={onClick}
      whileHover={{
        scale: 1.15,
      }}
      animate={{
        scale: active ? 1.12 : 1,
      }}
      className="
        absolute
        z-30
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        top: country.position.top,
        left: country.position.left,
      }}
    >
      {/* Glow */}
      <motion.span
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-[#D69A2B]/40
        "
      />

      {/* Pin */}
      <div
        className={`
          relative
          flex
          h-[48px]
          w-[48px]
          items-center
          justify-center
          rounded-full
          border-2
          backdrop-blur-sm
          transition-all
          duration-300

          ${
            active
              ? `
                border-[#F1B747]
                bg-[#D69A2B]/20
                shadow-[0_0_20px_rgba(214,154,43,.65)]
              `
              : `
                border-[#B67F2B]
                bg-[#071522]/90
              `
          }
        `}
      >
        <img
          src={country.flag}
          alt={country.name}
          className="
            h-[27px]
            w-[27px]
            rounded-full
            object-cover
          "
        />
      </div>

      {/* Pin arrow */}
      <MapPin
        size={23}
        className="
          absolute
          -bottom-[14px]
          left-1/2
          -translate-x-1/2
          text-[#D69A2B]
        "
        fill="#D69A2B"
      />
    </motion.button>
  );
}
