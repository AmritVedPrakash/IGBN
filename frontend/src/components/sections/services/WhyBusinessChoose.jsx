import React from "react";
import {
  BadgeCheck,
  Settings,
  Globe2,
  Sparkles,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function WhyBusinessChoose() {
  const data = [
    {
      icon: BadgeCheck,
      title: "Verified & Genuine Buyers Network",
      description:
        "Connect only with real importers, distributors and decision makers.",
    },
    {
      icon: Settings,
      title: "End-to-End Export Support",
      description:
        "From market research to export execution – we handle it all.",
    },
    {
      icon: Globe2,
      title: "Global Presence, Local Expertise",
      description: "21+ countries, 500+ trade ambassadors, on-ground support.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Trade Intelligence",
      description:
        "Data-driven insights for smarter decisions and higher success.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency & Trust",
      description:
        "Factory verification, audits, and transparent business practices.",
    },
    {
      icon: Handshake,
      title: "Focus on Long-Term Growth",
      description:
        "We build lasting partnerships and sustainable export growth.",
    },
  ];

  return (
    <section className="w-full bg-[#020c16] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        {/* ================= HEADING ================= */}
        <div className="relative z-10 mb-[-10px] flex items-center justify-center gap-4 px-5">
          {/* Left Golden Line */}
          <div className="flex w-full max-w-[470px] items-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#8c5c15] to-[#d2952c]" />

            <span className="ml-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d2952c]" />
          </div>

          {/* Heading */}
          <h2
            className="
              whitespace-nowrap
              bg-[#020c16]
              px-4
              text-center
              text-[16px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-white
              sm:text-[18px]
              md:text-[20px]
              lg:text-[22px]
            "
          >
            Why Businesses Choose IGBN
          </h2>

          {/* Right Golden Line */}
          <div className="flex w-full max-w-[470px] items-center">
            <span className="mr-[-1px] h-[5px] w-[5px] rotate-45 bg-[#d2952c]" />

            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#8c5c15] to-[#d2952c]" />
          </div>
        </div>

        {/* ================= OUTER BOX ================= */}
        <div
          className="
            rounded-[12px]
            border
            border-[#17314a]
            bg-[#03101d]
            px-4
            pb-5
            pt-9
            shadow-[0_10px_35px_rgba(0,0,0,0.25)]
            sm:px-5
            md:px-6
            md:pb-6
            lg:px-7
          "
        >
          {/* ================= CARDS ================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-6
            "
          >
            {data.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    flex
                    min-h-[200px]
                    flex-col
                    rounded-[9px]
                    border
                    border-[#263c50]
                    bg-[#041321]
                    px-5
                    py-6
                    transition-all
                    duration-300

                    hover:-translate-y-[5px]
                    hover:border-[#a77225]
                    hover:bg-[#071827]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* ICON + TITLE */}
                  <div className="flex items-start gap-4">
                    {/* Icon Wrapper */}
                    <div
                      className="
                        flex
                        h-[52px]
                        w-[52px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="
                          h-[42px]
                          w-[42px]
                          text-[#c98b25]
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-[#e3a23b]
                        "
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        pt-[2px]
                        text-[15px]
                        font-semibold
                        leading-[1.5]
                        text-[#f6f7f8]
                        xl:text-[16px]
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      text-[13px]
                      font-normal
                      leading-[1.75]
                      text-[#c8ced5]
                      xl:text-[14px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
