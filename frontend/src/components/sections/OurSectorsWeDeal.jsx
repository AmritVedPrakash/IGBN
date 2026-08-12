import React, { useState } from "react";
import {
  Shirt,
  Settings,
  FlaskConical,
  CupSoda,
  Pill,
  Sprout,
  Cpu,
  Car,
  Hammer,
  Gem,
  Package,
  Sofa,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

export default function OurSectorsWeDeal() {
  const [showAll, setShowAll] = useState(false);

  const sectors = [
    {
      icon: Shirt,
      title: "Textiles & Fabrics",
      color: "#55774b",
    },
    {
      icon: Settings,
      title: "Machinery & Equipment",
      color: "#43558f",
    },
    {
      icon: FlaskConical,
      title: "Chemicals",
      color: "#5f50a1",
    },
    {
      icon: CupSoda,
      title: "Food & Beverages",
      color: "#d39941",
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      color: "#5c4f99",
    },
    {
      icon: Sprout,
      title: "Agriculture",
      color: "#5f9b55",
    },
    {
      icon: Cpu,
      title: "Electronics & Electricals",
      color: "#5667b2",
    },

    // Extra sectors
    {
      icon: Car,
      title: "Automotive",
      color: "#607d8b",
    },
    {
      icon: Hammer,
      title: "Construction",
      color: "#a87542",
    },
    {
      icon: Gem,
      title: "Gems & Jewellery",
      color: "#9b59b6",
    },
    {
      icon: Package,
      title: "Packaging",
      color: "#e67e22",
    },
    {
      icon: Sofa,
      title: "Furniture & Decor",
      color: "#795548",
    },
  ];

  const visibleSectors = showAll ? sectors : sectors.slice(0, 6);

  return (
    <section className="bg-[#fbfaf8] py-10 md:py-14">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-7">
          <h2 className="text-[#172243] text-lg sm:text-xl md:text-2xl font-bold uppercase">
            Our Sectors We Deal In
          </h2>

          <div className="w-12 h-[3px] bg-[#d4aa3f] mx-auto mt-2 rounded-full" />
        </div>

        {/* Sectors */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-3
          "
        >
          {visibleSectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border
                  border-[#eeeeee]
                  rounded-md
                  min-h-[120px]
                  px-3
                  py-5
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-[0_3px_15px_rgba(0,0,0,0.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]
                "
              >
                <Icon
                  size={30}
                  strokeWidth={1.7}
                  style={{ color: sector.color }}
                  className="
                    mb-3
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-[#202b4f] leading-4">
                  {sector.title}
                </h3>
              </div>
            );
          })}

          {/* View All Card */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              group
              bg-white
              border
              border-[#eeeeee]
              rounded-md
              min-h-[120px]
              px-3
              py-5
              flex
              flex-col
              items-center
              justify-center
              text-center
              shadow-[0_3px_15px_rgba(0,0,0,0.025)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]
            "
          >
            <div
              className="
                w-[32px]
                h-[32px]
                grid
                grid-cols-2
                gap-[3px]
                mb-3
              "
            >
              <span className="border-2 border-[#d2a536] rounded-[3px]" />
              <span className="border-2 border-[#d2a536] rounded-[3px]" />
              <span className="border-2 border-[#d2a536] rounded-[3px]" />
              <span className="border-2 border-[#d2a536] rounded-[3px]" />
            </div>

            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-[#344e98]">
              {showAll ? "Show Less" : "View All Sectors"}

              {showAll ? <ChevronUp size={13} /> : <ChevronRight size={13} />}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
