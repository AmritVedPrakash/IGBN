import React from "react";
import {
  UsersRound,
  Network,
  Handshake,
  Target,
  ArrowRight,
} from "lucide-react";

export default function WhyIGBNExists() {
  const challenges = [
    {
      icon: UsersRound,
      text: "Indian businesses face challenges in finding genuine buyers and reliable international partners.",
    },
    {
      icon: Network,
      text: "Export information is fragmented, outdated and difficult to access.",
    },
    {
      icon: Handshake,
      text: "Small & medium manufacturers lack dedicated global business development support.",
    },
    {
      icon: Target,
      text: "Market entry, compliance, negotiations and logistics are complex and time consuming.",
    },
  ];

  const comparisons = [
    {
      traditional: "Supplier Listings",
      advantage: "Verified Manufacturers",
    },
    {
      traditional: "Random Inquiries",
      advantage: "Qualified Global Buyers",
    },
    {
      traditional: "No Market Intelligence",
      advantage: "AI-Powered Trade Intelligence",
    },
    {
      traditional: "No Follow-up",
      advantage: "Dedicated Business Development",
    },
    {
      traditional: "No Local Presence",
      advantage: "In-Country Representatives",
    },
    {
      traditional: "Transaction Focused",
      advantage: "Long-Term Export Growth",
    },
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        <div
          className="
            grid
            grid-cols-1
            gap-5
            xl:grid-cols-[0.9fr_1.5fr]
          "
        >
          {/* =====================================================
              LEFT CARD
          ====================================================== */}
          <div
            className="
              rounded-[12px]
              border
              border-[#765324]/80
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_10px_35px_rgba(0,0,0,0.28)]
              transition-all
              duration-300
              hover:border-[#A9772B]
              sm:px-7
              lg:px-8
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[24px]
                font-semibold
                leading-tight
                text-[#F5F5F5]
                sm:text-[26px]
                lg:text-[28px]
              "
            >
              Why IGBN Exists
            </h2>

            {/* Challenges */}
            <div className="mt-5 space-y-4">
              {challenges.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C58A28]/50
                        bg-[#D69A2B]/[0.04]
                        transition-all
                        duration-300
                        group-hover:border-[#D69A2B]
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.6}
                        className="
                          text-[#D69A2B]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Text */}
                    <p
                      className="
                        pt-1
                        text-[14px]
                        font-normal
                        leading-[1.7]
                        text-[#E0E4E8]
                        sm:text-[15px]
                        lg:text-[16px]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Highlight Box */}
            <div
              className="
                mt-6
                rounded-[8px]
                border
                border-[#A87326]/80
                bg-[#071522]
                px-5
                py-4
                text-center
                shadow-[inset_0_0_20px_rgba(214,154,43,0.025)]
              "
            >
              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-[1.6]
                  text-[#D69A2B]
                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                IGBN was created to eliminate these barriers
                <br className="hidden sm:block" /> and unlock global growth for
                Indian businesses.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT CARD
          ====================================================== */}
          <div
            className="
              rounded-[12px]
              border
              border-[#765324]/80
              bg-[#03111F]
              px-5
              py-6
              shadow-[0_10px_35px_rgba(0,0,0,0.28)]
              transition-all
              duration-300
              hover:border-[#A9772B]
              sm:px-6
              lg:px-8
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[24px]
                font-semibold
                leading-tight
                text-[#F5F5F5]
                sm:text-[26px]
                lg:text-[28px]
              "
            >
              What Makes IGBN Different
            </h2>

            {/* Table */}
            <div
              className="
                mt-5
                overflow-hidden
                rounded-[8px]
                border
                border-[#6E4D21]/80
              "
            >
              {/* Header */}
              <div
                className="
                  grid
                  grid-cols-[1fr_60px_1fr]
                  border-b
                  border-[#6E4D21]/80
                  bg-[#071522]
                "
              >
                <div
                  className="
                    px-4
                    py-3
                    text-center
                    text-[14px]
                    font-semibold
                    text-[#E5E8EB]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Traditional B2B Portals
                </div>

                <div
                  className="
                    border-x
                    border-[#6E4D21]/80
                  "
                />

                <div
                  className="
                    px-4
                    py-3
                    text-center
                    text-[14px]
                    font-semibold
                    text-[#D69A2B]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  IGBN Advantage
                </div>
              </div>

              {/* Rows */}
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[1fr_60px_1fr]
                    bg-[#03111F]
                    transition-colors
                    duration-300
                    hover:bg-[#071725]

                    ${
                      index !== comparisons.length - 1
                        ? "border-b border-[#6E4D21]/65"
                        : ""
                    }
                  `}
                >
                  {/* Traditional */}
                  <div
                    className="
                      flex
                      min-h-[58px]
                      items-center
                      justify-center
                      px-4
                      py-3
                      text-center
                      text-[14px]
                      font-medium
                      leading-[1.4]
                      text-[#E0E4E8]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {item.traditional}
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      border-x
                      border-[#6E4D21]/65
                    "
                  >
                    <div
                      className="
                        flex
                        h-[31px]
                        w-[31px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D69A2B]/70
                        bg-[#D69A2B]/[0.04]
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#D69A2B]"
                      />
                    </div>
                  </div>

                  {/* IGBN Advantage */}
                  <div
                    className="
                      flex
                      min-h-[58px]
                      items-center
                      justify-center
                      px-4
                      py-3
                      text-center
                      text-[14px]
                      font-medium
                      leading-[1.4]
                      text-[#E0E4E8]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {item.advantage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
