import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function CommodityMajorDrivers({ data }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[9px]
        border border-[#193249]
        bg-[#03111F]
        p-4
        sm:p-5
      "
    >
      <h2 className="text-[17px] font-semibold text-[#E9ECEF] sm:text-[20px]">
        MAJOR DRIVERS
      </h2>

      <div className="mt-4 space-y-4">
        {data.drivers.map((driver, index) => (
          <motion.div
            key={driver.title}
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="flex gap-3"
          >
            <div
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                ${
                  driver.direction === "down"
                    ? "border-[#743C3C] bg-[#3A1717] text-[#D65353]"
                    : "border-[#41612D] bg-[#172617] text-[#83B43D]"
                }
              `}
            >
              {driver.direction === "down" ? (
                <ArrowDownRight size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </div>

            <div>
              <h3 className="text-[13px] font-semibold text-[#DDE3E7] sm:text-[18px]">
                {driver.title}
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#8997A2] sm:text-[16px]">
                {driver.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
