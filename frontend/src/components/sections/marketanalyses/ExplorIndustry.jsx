import React, { useState } from "react";
import {
  FlaskConical,
  CookingPot,
  Coffee,
  Shirt,
  Package,
  Settings,
  Pill,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ExplorIndustry() {
  const [activeIndustry, setActiveIndustry] = useState("Chemicals");

  const industries = [
    {
      name: "Chemicals",
      icon: FlaskConical,
    },
    {
      name: "Food Processing",
      icon: CookingPot,
    },
    {
      name: "Coffee",
      icon: Coffee,
    },
    {
      name: "Leather",
      icon: Shirt,
    },
    {
      name: "Packaging",
      icon: Package,
    },
    {
      name: "Machinery",
      icon: Settings,
    },
    {
      name: "Pharmaceuticals",
      icon: Pill,
    },
    {
      name: "Textiles",
      icon: MapPin,
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-5
          py-5
          shadow-[0_10px_35px_rgba(0,0,0,0.30)]
          sm:px-6
          lg:px-7
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div>
            <h2
              className="
                text-[22px]
                font-semibold
                uppercase
                leading-tight
                text-[#F4F5F6]
                sm:text-[24px]
                lg:text-[27px]
              "
            >
              Explore By Industry
            </h2>

            <p
              className="
                mt-2
                text-[14px]
                font-normal
                leading-[1.6]
                text-[#BFC6CD]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Select an industry to update the map, insights and market data.
            </p>
          </div>

          {/* View All */}
          <button
            className="
              group
              flex
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#D69A2B]
              transition-all
              duration-300
              hover:translate-x-1
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            View All Industries
            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* ================= INDUSTRY CARDS ================= */}
        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-8
          "
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            const active = activeIndustry === industry.name;

            return (
              <button
                key={industry.name}
                onClick={() => setActiveIndustry(industry.name)}
                className={`
                  group
                  flex
                  min-h-[130px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  px-3
                  py-4
                  text-center
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-[#D69A2B]
                        bg-[#D69A2B]/[0.06]
                        shadow-[0_0_20px_rgba(214,154,43,0.08)]
                      `
                      : `
                        border-[#263B4D]
                        bg-[#041321]
                        hover:-translate-y-[3px]
                        hover:border-[#8B652A]
                        hover:bg-[#071725]
                      `
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border-[#D69A2B]
                          bg-[#D69A2B]/[0.05]
                        `
                        : `
                          border-[#425364]
                          bg-[#071522]
                          group-hover:border-[#A9782D]
                        `
                    }
                  `}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className={`
                      transition-all
                      duration-300

                      ${
                        active
                          ? "text-[#D69A2B]"
                          : "text-[#AEB6BE] group-hover:text-[#D69A2B]"
                      }
                    `}
                  />
                </div>

                {/* Industry Name */}
                <p
                  className={`
                    mt-4
                    text-[14px]
                    font-semibold
                    leading-[1.4]
                    transition-colors
                    duration-300

                    sm:text-[15px]
                    lg:text-[16px]

                    ${
                      active
                        ? "text-[#D69A2B]"
                        : "text-[#D9DEE3] group-hover:text-[#F0F2F4]"
                    }
                  `}
                >
                  {industry.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
