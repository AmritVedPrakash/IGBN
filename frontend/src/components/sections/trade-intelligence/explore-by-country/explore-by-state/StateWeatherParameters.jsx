import React from "react";
import { motion } from "framer-motion";

export default function StateWeatherParameters({ data }) {
  const items = [
    {
      label: "Temperature Anomaly",
      value: data.weather.temperature.value,
    },
    {
      label: "Rainfall Anomaly",
      value: data.weather.rainfall.value,
    },
    {
      label: "Extreme Weather",
      value: data.weather.extremeWeather.value,
    },
    {
      label: "Crop Response",
      value: data.weather.cropResponse.value,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <h2 className="text-[20px] font-semibold text-[#E9ECEF]">
        WEATHER PARAMETERS
      </h2>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="
              flex
              items-center
              justify-between
              gap-3
              border-b
              border-[#142A3B]
              pb-3
              last:border-0
            "
          >
            <span className="text-[14px] text-[#8495A2]">{item.label}</span>

            <span className="text-right text-[14px] font-medium text-[#DCE2E6]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
