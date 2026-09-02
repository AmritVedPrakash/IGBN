import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CurrencyHeader({ data }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        flex flex-col gap-5
        rounded-[10px]
        border border-[#193249]
        bg-[#03111F]
        px-5 py-4
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border border-[#765323]
            bg-[#071522]
            text-[#D69A2B]
            transition-all duration-300
            hover:bg-[#D69A2B]/10
          "
        >
          <ArrowLeft size={18} />
        </button>

        <img
          src={data.flag}
          alt={data.name}
          className="
            h-[54px] w-[54px]
            rounded-full object-cover
            border border-[#8A6328]
          "
        />

        <div>
          <h1
            className="
              text-[22px] font-semibold
              text-[#F4F5F6]
              sm:text-[27px]
              lg:text-[30px]
            "
          >
            {data.code} – {data.fullName.toUpperCase()} MARKET INTELLIGENCE
          </h1>

          <p className="mt-1 text-[13px] text-[#AAB4BD] sm:text-[14px]">
            Real-time overview, trends, news & outlook
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-[#9EA9B2]">
        <Database size={15} className="text-[#D69A2B]" />
        <span>Data Sources: World Bank • IMF • Trading Economics</span>
      </div>
    </motion.div>
  );
}
