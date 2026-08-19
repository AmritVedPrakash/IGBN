import React from "react";
import {
  Trophy,
  Users,
  UserPlus,
  DollarSign,
  Building2,
  BadgeCheck,
  Layers3,
} from "lucide-react";

export default function OurImpact() {
  const impactData = [
    {
      icon: Trophy,
      number: "3,482+",
      text: "Active RFQs",
    },
    {
      icon: Users,
      number: "1,250+",
      text: "Verified Suppliers",
    },
    {
      icon: UserPlus,
      number: "186+",
      text: "Buyer Introductions",
    },
    {
      icon: DollarSign,
      number: "$451B+",
      text: "Export Opportunities",
    },
    {
      icon: Building2,
      number: "500+",
      text: "Products Covered",
    },
    {
      icon: BadgeCheck,
      number: "17",
      text: "Trade Ambassadors",
    },
    {
      icon: Layers3,
      number: "12+",
      text: "Industry Verticals",
    },
  ];

  return (
    <section className="w-full bg-[#020d19] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= HEADING ================= */}
        <div className="mb-3 flex items-center justify-center gap-4 px-2 sm:px-5">
          {/* Left Golden Line */}
          <div className="flex w-full max-w-[420px] items-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9e6918] to-[#d99a28]" />

            <span className="ml-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d99a28]" />
          </div>

          {/* Heading */}
          <h2
            className="
              whitespace-nowrap
              px-3
              text-center
              text-[16px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-[#f5f5f5]
              sm:text-[18px]
              md:text-[20px]
              lg:text-[22px]
            "
          >
            Our Impact Across The Globe
          </h2>

          {/* Right Golden Line */}
          <div className="flex w-full max-w-[420px] items-center">
            <span className="mr-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d99a28]" />

            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#9e6918] to-[#d99a28]" />
          </div>
        </div>

        {/* ================= IMPACT BOX ================= */}
        <div
          className="
            overflow-hidden
            rounded-[12px]
            border
            border-[#17324b]
            bg-[#03111f]
            shadow-[0_10px_35px_rgba(0,0,0,0.30)]
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
            {impactData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    min-h-[145px]
                    items-center
                    justify-center
                    gap-4
                    border-b
                    border-[#17324b]
                    px-5
                    py-6
                    transition-all
                    duration-300

                    hover:bg-[#061725]

                    sm:min-h-[155px]
                    lg:min-h-[165px]

                    2xl:border-b-0
                  "
                >
                  {/* Vertical separator desktop */}
                  {index !== impactData.length - 1 && (
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
                        via-[#29465f]
                        to-transparent
                        2xl:block
                      "
                    />
                  )}

                  {/* ================= ICON ================= */}
                  <div
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="
                        h-[46px]
                        w-[46px]
                        text-[#c98b25]
                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-[#e4a53e]
                      "
                    />
                  </div>

                  {/* ================= TEXT ================= */}
                  <div className="flex flex-col">
                    {/* Number */}
                    <span
                      className="
                        whitespace-nowrap
                        text-[23px]
                        font-semibold
                        leading-none
                        text-[#d99a28]

                        sm:text-[25px]
                        lg:text-[27px]
                      "
                    >
                      {item.number}
                    </span>

                    {/* Description */}
                    <span
                      className="
                        mt-3
                        whitespace-nowrap
                        text-[12px]
                        font-medium
                        leading-[1.4]
                        text-[#d6dce2]

                        sm:text-[13px]
                        lg:text-[14px]
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
