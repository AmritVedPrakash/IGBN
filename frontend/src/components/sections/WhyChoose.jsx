import React from "react";
import {
  Globe2,
  ShieldCheck,
  ChartNoAxesCombined,
  Headphones,
  PieChart,
  Handshake,
} from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      icon: Globe2,
      title: "Global Reach",
      description:
        "Access a wide network of verified suppliers and buyers across the globe.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Members",
      description:
        "All our members are thoroughly verified for trust and transparency.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Business Growth",
      description:
        "Expand your business globally and explore new markets with ease.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description:
        "From product sourcing to shipment, we support you at every step.",
    },
    {
      icon: PieChart,
      title: "Market Insights",
      description:
        "Get the latest market insights and analytics to stay ahead.",
    },
    {
      icon: Handshake,
      title: "Trusted Platform",
      description:
        "A secure and reliable platform for all your B2B transactions.",
    },
  ];

  return (
    <section className="bg-[#fbfaf8] py-14 md:py-16 lg:py-20">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[#071a3a] text-xl sm:text-2xl md:text-3xl font-bold uppercase">
            Why Choose IGBN?
          </h2>

          <div className="w-14 h-[3px] bg-[#d8a62f] mx-auto mt-3 rounded-full" />
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
            gap-5
            lg:gap-6
          "
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  min-h-[220px]
                  px-5
                  py-8
                  flex
                  flex-col
                  items-center
                  text-center
                  rounded-sm
                  border
                  border-black/[0.03]
                  shadow-[0_5px_25px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
                "
              >
                {/* Icon Circle */}
                <div
                  className="
                    w-[58px]
                    h-[58px]
                    rounded-full
                    bg-[#081d42]
                    flex
                    items-center
                    justify-center
                    mb-5
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={2.2}
                    className="text-[#e2ad2e]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-[15px] font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] text-[12px] sm:text-[13px] leading-5 max-w-[190px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}