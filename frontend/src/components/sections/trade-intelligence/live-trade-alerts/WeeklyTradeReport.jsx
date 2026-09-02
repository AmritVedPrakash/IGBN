import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Download, Globe2, FileText } from "lucide-react";

const reportItems = [
  "Global Trade Summary",
  "Country Highlights",
  "Top Opportunities",
  "Policy Updates",
  "Logistics Watch",
  "Commodity Snapshot",
];

export default function WeeklyTradeReport() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.16 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        transition-all
        duration-300
        hover:border-[#6F5228]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.38)]
        lg:p-5
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[60px]
          -top-[60px]
          h-[150px]
          w-[150px]
          rounded-full
          bg-[#D69A2B]/[0.05]
          blur-[55px]
          transition-all
          duration-500
          group-hover:bg-[#D69A2B]/[0.09]
        "
      />

      {/* Header */}

      <div className="relative flex items-center justify-between">
        <h2
          className="
            text-[17px]
            font-semibold
            uppercase
            tracking-[0.01em]
            text-[#EEF1F3]
            sm:text-[19px]
            lg:text-[22px]
          "
        >
          IGBN Weekly Trade Report
        </h2>
      </div>

      {/* Main Content */}

      <div className="relative mt-4 flex gap-4">
        {/* Report Cover */}

        <motion.div
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.25 }}
          className="
            relative
            h-[155px]
            w-[105px]
            shrink-0
            overflow-hidden
            rounded-[7px]
            border
            border-[#6D5227]
            bg-gradient-to-br
            from-[#172E40]
            via-[#071522]
            to-[#020A12]
            shadow-[0_8px_25px_rgba(0,0,0,0.45)]
            sm:h-[165px]
            sm:w-[112px]
          "
        >
          {/* Globe */}

          <div
            className="
              absolute
              left-1/2
              top-[48%]
              -translate-x-1/2
              -translate-y-1/2
              opacity-80
            "
          >
            <Globe2 size={65} strokeWidth={0.8} className="text-[#D69A2B]" />
          </div>

          {/* Small Icon */}

          <div
            className="
              absolute
              left-3
              top-3
              flex
              h-[30px]
              w-[30px]
              items-center
              justify-center
              rounded-full
              border
              border-[#B47D29]
              bg-[#071522]
            "
          >
            <FileText size={13} className="text-[#D69A2B]" />
          </div>

          {/* Report Text */}

          <div className="absolute inset-x-3 bottom-4">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-[1.2]
                text-[#D69A2B]
              "
            >
              IGBN
              <br />
              Weekly Trade Report
            </p>

            <p
              className="
                mt-1
                text-[9px]
                font-medium
                text-[#9BA8B1]
              "
            >
              12 – 18 MAY 2026
            </p>
          </div>
        </motion.div>

        {/* Report Information */}

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#D69A2B]
              sm:text-[16px]
            "
          >
            Weekly Intelligence
          </p>

          <p
            className="
              mt-2
              text-[11px]
              leading-[1.5]
              text-[#9AA7B1]
              sm:text-[16px]
            "
          >
            Your weekly snapshot of global trade movements, opportunities and
            market developments.
          </p>

          <div className="mt-3 space-y-2">
            {reportItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                }}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Check
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 text-[#D69A2B]"
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-[#CBD2D7]
                    sm:text-[15px]
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download */}

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        className="
          relative
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-[5px]
          border
          border-[#C88A22]
          bg-gradient-to-r
          from-[#D9A13A]
          to-[#C88A22]
          px-4
          py-2.5
          text-[11px]
          font-semibold
          text-[#07111A]
          shadow-[0_6px_18px_rgba(214,154,43,0.14)]
          transition-all
          duration-300
          hover:shadow-[0_8px_25px_rgba(214,154,43,0.25)]
          sm:text-[14px]
        "
      >
        <Download size={14} />
        Download Latest Report
        <ArrowRight size={14} />
      </motion.button>
    </motion.div>
  );
}
