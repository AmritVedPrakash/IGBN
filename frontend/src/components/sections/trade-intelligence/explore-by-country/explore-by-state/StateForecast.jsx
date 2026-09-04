import React from "react";
import { motion } from "framer-motion";
import { Thermometer, CloudRain, Zap, Sprout } from "lucide-react";

export default function StateForecast({ data }) {
  const items = [
    {
      label: "Temperature",
      ...data.forecast.temperature,
      icon: Thermometer,
    },
    {
      label: "Rainfall",
      ...data.forecast.rainfall,
      icon: CloudRain,
    },
    {
      label: "Extreme Events",
      ...data.forecast.extremeWeather,
      icon: Zap,
    },
    {
      label: "Crop Outlook",
      ...data.forecast.cropOutlook,
      icon: Sprout,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[20px] font-semibold text-[#E9ECEF]">FORECAST</h2>

      <p className="mt-1 text-[13px] text-[#748795]">
        Expected conditions for upcoming period
      </p>

      <div className="mt-4 space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                items-center
                gap-3
                rounded-[6px]
                border
                border-[#20394C]
                bg-[#071522]
                p-3
              "
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] bg-[#102A42] text-[#6E9AC0]">
                <Icon size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] text-[#758896]">{item.label}</p>

                <p className="mt-1 text-[12px] font-medium text-[#DCE2E6]">
                  {item.value}
                </p>
              </div>

              <span
                className={`
                  text-[9px]
                  font-semibold
                  ${
                    item.probability === "High"
                      ? "text-[#83B43D]"
                      : "text-[#D69A2B]"
                  }
                `}
              >
                {item.probability}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
