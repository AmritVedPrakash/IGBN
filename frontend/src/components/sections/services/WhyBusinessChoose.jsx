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
    <section className="w-full bg-[#020c16] px-4 py-8 md:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[1650px]">
        {/* ================= HEADING ================= */}
        <div
          className="
            relative
            z-10
            mb-[-10px]
            flex
            w-full
            items-center
            justify-center
            gap-3
            px-2

            sm:gap-4
            sm:px-5
          "
        >
          {/* LEFT GOLDEN LINE */}
          <div className="flex min-w-0 flex-1 items-center justify-end">
            <div
              className="
                h-[1px]
                w-full
                max-w-[470px]
                bg-gradient-to-r
                from-transparent
                via-[#8c5c15]
                to-[#d2952c]
              "
            />

            <span
              className="
                ml-[-1px]
                h-[5px]
                w-[5px]
                shrink-0
                rotate-45
                bg-[#d2952c]
              "
            />
          </div>

          {/* HEADING */}
          <h2
            className="
              shrink-0
              whitespace-nowrap
              bg-[#020c16]
              px-3
              text-center
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-white

              sm:text-[18px]
              md:text-[22px]
              lg:text-[24px]

              xl:text-[24px]

              2xl:px-4
              2xl:text-[28px]
            "
          >
            Why Businesses Choose IGBN
          </h2>

          {/* RIGHT GOLDEN LINE */}
          <div className="flex min-w-0 flex-1 items-center">
            <span
              className="
                mr-[-1px]
                h-[5px]
                w-[5px]
                shrink-0
                rotate-45
                bg-[#d2952c]
              "
            />

            <div
              className="
                h-[1px]
                w-full
                max-w-[470px]
                bg-gradient-to-l
                from-transparent
                via-[#8c5c15]
                to-[#d2952c]
              "
            />
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

            xl:px-5
            xl:pb-5

            2xl:px-7
            2xl:pb-6
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

              xl:grid-cols-6
              xl:gap-3

              2xl:gap-4
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
                    min-w-0
                    flex-col

                    rounded-[9px]

                    border
                    border-[#263c50]

                    bg-[#041321]

                    px-5
                    py-6

                    min-h-[200px]

                    transition-all
                    duration-300

                    hover:-translate-y-[5px]
                    hover:border-[#a77225]
                    hover:bg-[#071827]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]

                    xl:min-h-[190px]
                    xl:px-3
                    xl:py-5

                    2xl:min-h-[220px]
                    2xl:px-5
                    2xl:py-6
                  "
                >
                  {/* ================= ICON + TITLE ================= */}
                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3

                      2xl:gap-4
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[44px]
                        w-[44px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-md

                        transition-all
                        duration-300

                        2xl:h-[52px]
                        2xl:w-[52px]
                      "
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="
                          h-[32px]
                          w-[32px]
                          shrink-0

                          text-[#c98b25]

                          transition-all
                          duration-300

                          group-hover:scale-110
                          group-hover:text-[#e3a23b]

                          2xl:h-[42px]
                          2xl:w-[42px]
                        "
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        min-w-0
                        pt-[2px]

                        text-[13px]
                        font-semibold
                        leading-[1.5]

                        text-[#f6f7f8]

                        xl:text-[13px]

                        2xl:text-[18px]
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* ================= DESCRIPTION ================= */}
                  <p
                    className="
                      mt-4

                      text-[12px]
                      font-normal
                      leading-[1.7]

                      text-[#c8ced5]

                      xl:text-[12px]
                      xl:leading-[1.7]

                      2xl:mt-5
                      2xl:text-[16px]
                      2xl:leading-[1.75]
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
