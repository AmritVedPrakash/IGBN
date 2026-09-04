import React from "react";
import { motion } from "framer-motion";
import { Thermometer, Droplets, CloudLightning, Leaf } from "lucide-react";

export default function QuickStateView({ data, selectedProduct }) {
  return (
    <motion.div
      key={data.code}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h2
            className="
              text-[20px]
              font-semibold
              text-[#E9ECEF]
              sm:text-[23px]
            "
          >
            {data.name.toUpperCase()}
          </h2>

          <p className="mt-1 text-[15px] text-[#778A99]">
            Top Product:{" "}
            <span className="text-[#DCE2E6]">{selectedProduct}</span>
          </p>
        </div>

        <span
          className="
            rounded-full
            border
            border-[#755421]
            bg-[#2B2111]
            px-2.5
            py-1
            text-[15px]
            text-[#D69A2B]
          "
        >
          {data.impact}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <WeatherBox
          icon={<Thermometer size={18} />}
          title="Temperature"
          value={data.weather.temperature.value}
          status={data.weather.temperature.status}
        />

        <WeatherBox
          icon={<Droplets size={18} />}
          title="Rainfall"
          value={data.weather.rainfall.value}
          status={data.weather.rainfall.status}
        />

        <WeatherBox
          icon={<CloudLightning size={18} />}
          title="Extreme Weather"
          value={data.weather.extremeWeather.value}
          status={data.weather.extremeWeather.status}
        />

        <WeatherBox
          icon={<Leaf size={18} />}
          title="Crop Response"
          value={data.weather.cropResponse.value}
          status={data.weather.cropResponse.status}
        />
      </div>

      <div className="mt-4 border-t border-[#193249] pt-4">
        <p className="text-[15px] text-[#788B9A]">OVERALL WEATHER IMPACT</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#D5A52F]" />

          <span className="text-[20px] font-semibold text-[#D69A2B]">
            {data.impact}
          </span>
        </div>
      </div>

      <div className="mt-4 rounded-[6px] border border-[#263E51] bg-[#071522] p-3">
        <p className="text-[14px] font-semibold text-[#D69A2B]">
          {data.tradeImplication.title}
        </p>

        <p className="mt-1.5 text-[14px] leading-5 text-[#9DAAB4]">
          {data.tradeImplication.description}
        </p>
      </div>
    </motion.div>
  );
}

function WeatherBox({ icon, title, value, status }) {
  const positive = status === "No" || status === "Normal";

  return (
    <div
      className="
        rounded-[6px]
        border
        border-[#263E51]
        bg-[#071522]
        p-3
      "
    >
      <div className="flex items-center gap-2 text-[#6C9BC1]">
        {icon}

        <span className="text-[15px] text-[#A9B4BC]">{title}</span>
      </div>

      <p className="mt-2 text-[15px] font-medium leading-4 text-[#DCE2E6]">
        {value}
      </p>

      <span
        className={`
          mt-2
          inline-block
          rounded-[4px]
          border
          px-2
          py-0.5
          text-[9px]
          ${
            positive
              ? "border-[#34532A] text-[#86B63E]"
              : "border-[#66352F] text-[#D65353]"
          }
        `}
      >
        {status}
      </span>
    </div>
  );
}
