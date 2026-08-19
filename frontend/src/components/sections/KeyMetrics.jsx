import React from "react";
import {
  Globe2,
  ScanLine,
  UserRoundCheck,
  UsersRound,
  Share2,
  Award,
} from "lucide-react";

export default function KeyMetrics() {
  const metrics = [
    {
      icon: Globe2,
      label: "Countries Connected",
      value: "21+",
    },
    {
      icon: ScanLine,
      label: "Active RFQs",
      value: "3,482",
    },
    {
      icon: UserRoundCheck,
      label: "Verified Suppliers",
      value: "1,250+",
    },
    {
      icon: UsersRound,
      label: "Buyer Introductions",
      value: "186",
    },
    {
      icon: Share2,
      label: "Products Covered",
      value: "500+",
    },
    {
      icon: Award,
      label: "Trade Ambassadors",
      value: "17",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* Main Metrics Box */}
        <div
          className="
            overflow-hidden
            rounded-[11px]
            border
            border-[#725021]/80
            bg-[#03111F]
            shadow-[0_10px_30px_rgba(0,0,0,0.30)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-6
            "
          >
            {metrics.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    min-h-[120px]
                    items-center
                    gap-4
                    border-b
                    border-[#27394A]
                    px-5
                    py-5
                    transition-all
                    duration-300

                    hover:bg-[#071725]

                    xl:border-b-0
                    xl:px-6
                  "
                >
                  {/* ================= VERTICAL DIVIDER ================= */}
                  {index !== metrics.length - 1 && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[20%]
                        hidden
                        h-[60%]
                        w-[1px]
                        bg-gradient-to-b
                        from-transparent
                        via-[#725021]
                        to-transparent
                        xl:block
                      "
                    />
                  )}

                  {/* ================= ICON ================= */}
                  <div
                    className="
                      flex
                      h-[58px]
                      w-[58px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B67E29]/55
                      bg-[#D69A2B]/[0.03]
                      transition-all
                      duration-300

                      group-hover:border-[#D69A2B]
                      group-hover:bg-[#D69A2B]/[0.06]
                    "
                  >
                    <Icon
                      size={33}
                      strokeWidth={1.5}
                      className="
                        text-[#D69A2B]
                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-[#E7AB41]
                      "
                    />
                  </div>

                  {/* ================= TEXT ================= */}
                  <div className="min-w-0">
                    {/* Label */}
                    <p
                      className="
                        whitespace-nowrap
                        text-[12px]
                        font-medium
                        leading-[1.4]
                        text-[#D7DCE1]

                        sm:text-[13px]
                        lg:text-[14px]
                      "
                    >
                      {item.label}
                    </p>

                    {/* Value */}
                    <p
                      className="
                        mt-2
                        text-[23px]
                        font-semibold
                        leading-none
                        text-[#F4F5F6]

                        sm:text-[25px]
                        lg:text-[27px]
                      "
                    >
                      {item.value}
                    </p>
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