import React from "react";
import { motion } from "framer-motion";
import { Thermometer, CloudRain, TriangleAlert, Sprout } from "lucide-react";

const mapStates = [
  {
    code: "WA",
    name: "Washington",
    x: "17%",
    y: "20%",
  },
  {
    code: "CA",
    name: "California",
    x: "16%",
    y: "60%",
  },
  {
    code: "TX",
    name: "Texas",
    x: "48%",
    y: "70%",
  },
  {
    code: "IA",
    name: "Iowa",
    x: "59%",
    y: "42%",
  },
  {
    code: "FL",
    name: "Florida",
    x: "78%",
    y: "78%",
  },
];

export default function WeatherImpactOverview({
  data,
  selectedState,
  onStateChange,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      className="
        overflow-hidden
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
      "
    >
      <div className="flex items-center justify-between border-b border-[#193249] px-4 py-3">
        <div>
          <h2
            className="
              text-[16px]
              font-semibold
              text-[#E9ECEF]
              sm:text-[20px]
            "
          >
            WEATHER IMPACT OVERVIEW
          </h2>

          <p className="mt-0.5 text-[14px] text-[#758797]">
            Click a state to view detailed intelligence
          </p>
        </div>

        <span className="text-[14px] text-[#718391]">May – Jul 2026</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px]">
        {/* MAP */}

        <div className="relative min-h-[360px] overflow-hidden border-b border-[#193249] bg-[#041522] lg:border-b-0 lg:border-r">
          {/* decorative USA shape */}

          <div
            className="
              absolute
              left-[8%]
              top-[11%]
              h-[74%]
              w-[82%]
              rounded-[45%_35%_40%_30%]
              border
              border-[#5E7A8D]
              bg-[#122B3C]
              opacity-70
              [clip-path:polygon(4%_18%,12%_8%,26%_13%,39%_8%,51%_15%,65%_9%,78%_19%,91%_24%,96%_42%,91%_55%,84%_59%,89%_72%,78%_80%,68%_74%,58%_88%,45%_79%,35%_84%,27%_72%,16%_75%,9%_61%,3%_48%)]
            "
          />

          {/* Map grid */}

          <div
            className="
              absolute
              inset-0
              opacity-20
              [background-image:linear-gradient(#31506A_1px,transparent_1px),linear-gradient(90deg,#31506A_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          <div className="absolute left-5 top-5">
            <p className="text-[16px] text-[#7D8E9B]">United States</p>

            <p className="mt-1 text-[15px] font-semibold text-[#DDE3E7]">
              State Weather Monitor
            </p>
          </div>

          {/* Clickable states */}

          {mapStates.map((state) => {
            const active = state.code === selectedState;

            return (
              <motion.button
                key={state.code}
                type="button"
                onClick={() => onStateChange(state.code)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="absolute z-10"
                style={{
                  left: state.x,
                  top: state.y,
                }}
              >
                <div
                  className={`
                    flex
                    min-w-[58px]
                    flex-col
                    items-center
                    rounded-[5px]
                    border
                    px-2
                    py-1.5
                    shadow-[0_4px_15px_rgba(0,0,0,0.25)]
                    transition
                    ${
                      active
                        ? "border-[#D69A2B] bg-[#382B12]"
                        : "border-[#37536A] bg-[#0A1D2D] hover:border-[#7795A9]"
                    }
                  `}
                >
                  <span
                    className={`
                      text-[14px]
                      font-bold
                      ${active ? "text-[#D69A2B]" : "text-[#DCE2E6]"}
                    `}
                  >
                    {state.code}
                  </span>

                  <span className="mt-0.5 text-[11px] text-[#81909B]">
                    {state.name}
                  </span>
                </div>
              </motion.button>
            );
          })}

          {/* Selected state label */}

          <motion.div
            key={data.code}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute
              bottom-5
              left-5
              rounded-[6px]
              border
              border-[#354D61]
              bg-[#061623]
              px-3
              py-2
            "
          >
            <p className="text-[14px] text-[#81909B]">Selected State</p>

            <p className="mt-0.5 text-[15px] font-semibold text-[#DCE2E6]">
              {data.name}
            </p>
          </motion.div>
        </div>

        {/* LEGEND */}

        <div className="p-4">
          <h3 className="text-[16px] font-semibold text-[#DCE2E6]">
            IMPACT LEVEL
          </h3>

          <div className="mt-5 space-y-3">
            <Legend color="#82A83D" label="Low / Minimal" />

            <Legend color="#D5A52F" label="Moderate" />

            <Legend color="#D9782B" label="High" />

            <Legend color="#C94E4E" label="Severe" />

            <Legend color="#8B969F" label="No Data" />
          </div>

          <div className="mt-6 border-t border-[#193249] pt-4">
            <p className="text-[14px] text-[#738593]">Current State</p>

            <p className="mt-1 text-[18px] font-semibold text-[#DCE2E6]">
              {data.name}
            </p>

            <span
              className="
                mt-2
                inline-flex
                rounded-full
                border
                border-[#765322]
                bg-[#2A2111]
                px-2.5
                py-1
                text-[12px]
                text-[#D69A2B]
              "
            >
              {data.impact} Impact
            </span>
          </div>
        </div>
      </div>

      {/* WEATHER CARDS */}

      <div className="grid grid-cols-2 border-t border-[#193249] md:grid-cols-4">
        <WeatherMini
          icon={<Thermometer size={17} />}
          title="Temperature"
          value={data.weather.temperature.status}
        />

        <WeatherMini
          icon={<CloudRain size={17} />}
          title="Rainfall"
          value={data.weather.rainfall.status}
        />

        <WeatherMini
          icon={<TriangleAlert size={17} />}
          title="Extreme Weather"
          value={data.weather.extremeWeather.status}
        />

        <WeatherMini
          icon={<Sprout size={17} />}
          title="Crop Response"
          value={data.weather.cropResponse.status}
        />
      </div>
    </motion.div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />

      <span className="text-[11px] text-[#AAB5BD]">{label}</span>
    </div>
  );
}

function WeatherMini({ icon, title, value }) {
  return (
    <div className="border-r border-[#193249] p-3 last:border-r-0">
      <div className="flex items-center gap-2 text-[#D69A2B]">
        {icon}

        <span className="text-[14px] font-medium text-[#B9C3CA]">{title}</span>
      </div>

      <p className="mt-2 text-[16px] font-semibold text-[#E6EBEE]">{value}</p>
    </div>
  );
}
