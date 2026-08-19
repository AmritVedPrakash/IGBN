import React from "react";
import {
  Globe2,
  MapPin,
  BadgeCheck,
  UsersRound,
  Boxes,
  Award,
  Building2,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Globe2,
      number: "21+",
      text: "Countries Connected",
    },
    {
      icon: MapPin,
      number: "3,482+",
      text: "Active RFQs",
    },
    {
      icon: BadgeCheck,
      number: "1,250+",
      text: "Verified Suppliers",
    },
    {
      icon: UsersRound,
      number: "186+",
      text: "Buyer Introductions",
    },
    {
      icon: Boxes,
      number: "500+",
      text: "Products Covered",
    },
    {
      icon: Award,
      number: "17",
      text: "Trade Ambassadors",
    },
    {
      icon: Building2,
      number: "12+",
      text: "Industry Verticals",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= STATS BOX ================= */}
        <div
          className="
            overflow-hidden
            rounded-[10px]
            border
            border-[#6f501f]/60
            bg-[#03111F]
            shadow-[0_8px_30px_rgba(0,0,0,0.30)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              2xl:grid-cols-7
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    min-h-[105px]
                    items-center
                    justify-center
                    gap-4
                    border-b
                    border-[#26394B]
                    px-4
                    py-5
                    transition-all
                    duration-300

                    hover:bg-[#071725]

                    2xl:border-b-0
                  "
                >
                  {/* ================= VERTICAL DIVIDER ================= */}
                  {index !== stats.length - 1 && (
                    <span
                      className="
                        absolute
                        right-0
                        top-[18%]
                        hidden
                        h-[64%]
                        w-[1px]
                        bg-gradient-to-b
                        from-transparent
                        via-[#7B5720]/70
                        to-transparent
                        2xl:block
                      "
                    />
                  )}

                  {/* ================= ICON ================= */}
                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C88B27]/35
                      bg-[#D39930]/[0.03]
                      transition-all
                      duration-300

                      group-hover:border-[#D99B2B]/70
                      group-hover:bg-[#D99B2B]/[0.06]
                    "
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="
                        text-[#D99B2B]
                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-[#E7AE48]
                      "
                    />
                  </div>

                  {/* ================= TEXT ================= */}
                  <div className="flex min-w-0 flex-col">
                    {/* Number */}
                    <span
                      className="
                        whitespace-nowrap
                        text-[21px]
                        font-semibold
                        leading-none
                        text-[#D99B2B]

                        sm:text-[22px]
                        lg:text-[23px]
                        xl:text-[24px]
                      "
                    >
                      {item.number}
                    </span>

                    {/* Label */}
                    <span
                      className="
                        mt-2
                        text-[12px]
                        font-medium
                        leading-[1.35]
                        text-[#E0E4E8]

                        sm:text-[13px]
                        xl:text-[14px]
                      "
                    >
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
