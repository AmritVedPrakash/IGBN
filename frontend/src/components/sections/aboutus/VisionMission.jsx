import React from "react";
import {
  UsersRound,
  Eye,
  Target,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      icon: UsersRound,
      title: "WHO WE ARE",
      type: "who",
    },
    {
      icon: Eye,
      title: "VISION",
      type: "vision",
    },
    {
      icon: Target,
      title: "MISSION",
      type: "mission",
    },
    {
      icon: ShieldCheck,
      title: "OUR VALUES",
      type: "values",
    },
  ];

  const whoPoints = [
    "Trusted Network",
    "Global Reach",
    "Business Growth",
    "Integrity & Transparency",
  ];

  const values = [
    "Integrity & Transparency",
    "Trust & Commitment",
    "Excellence & Innovation",
    "Collaboration & Respect",
    "Growth with Responsibility",
  ];

  return (
    <section className="w-full bg-[#020D18] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="
                  group
                  min-h-[360px]
                  rounded-[11px]
                  border
                  border-[#8A6022]/70
                  bg-[#03111F]
                  px-6
                  py-6
                  shadow-[0_8px_28px_rgba(0,0,0,0.28)]
                  transition-all
                  duration-300

                  hover:-translate-y-[4px]
                  hover:border-[#D49A2F]
                  hover:shadow-[0_12px_35px_rgba(212,154,47,0.10)]
                "
              >
                {/* ================= HEADER ================= */}
                <div className="flex items-center gap-4">
                  <Icon
                    size={38}
                    strokeWidth={1.6}
                    className="
                      shrink-0
                      text-[#D59A2B]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <h3
                    className="
                      text-[18px]
                      font-bold
                      uppercase
                      tracking-[0.02em]
                      text-[#D59A2B]

                      sm:text-[19px]
                      lg:text-[20px]
                    "
                  >
                    {card.title}
                  </h3>
                </div>

                {/* ================= WHO WE ARE ================= */}
                {card.type === "who" && (
                  <div className="mt-5">
                    <p
                      className="
                        text-[14px]
                        leading-[1.7]
                        text-[#E1E5E9]

                        sm:text-[15px]
                        xl:text-[16px]
                      "
                    >
                      IGBN Worldwide is a B2B trade facilitation platform
                      dedicated to connecting global buyers with reliable Indian
                      suppliers.
                    </p>

                    <p
                      className="
                        mt-4
                        text-[14px]
                        leading-[1.7]
                        text-[#E1E5E9]

                        sm:text-[15px]
                        xl:text-[16px]
                      "
                    >
                      We bring together data, technology, people and processes
                      to unlock new markets and drive sustainable growth.
                    </p>

                    <div className="mt-4 space-y-2">
                      {whoPoints.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2
                            size={18}
                            strokeWidth={1.8}
                            className="shrink-0 text-[#D59A2B]"
                          />

                          <span
                            className="
                              text-[13px]
                              font-medium
                              text-[#E4E7EA]

                              sm:text-[14px]
                              xl:text-[15px]
                            "
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ================= VISION ================= */}
                {card.type === "vision" && (
                  <p
                    className="
                      mt-6
                      text-[14px]
                      leading-[1.8]
                      text-[#E1E5E9]

                      sm:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    To be the world&apos;s most trusted and intelligent trade
                    facilitation platform, driving global excellence for Indian
                    businesses and strengthening India&apos;s presence
                    worldwide.
                  </p>
                )}

                {/* ================= MISSION ================= */}
                {card.type === "mission" && (
                  <p
                    className="
                      mt-6
                      text-[14px]
                      leading-[1.8]
                      text-[#E1E5E9]

                      sm:text-[15px]
                      xl:text-[16px]
                    "
                  >
                    To simplify global trade, build long-term partnerships, and
                    create meaningful opportunities through intelligence,
                    networks and end-to-end export growth solutions.
                  </p>
                )}

                {/* ================= VALUES ================= */}
                {card.type === "values" && (
                  <div className="mt-6 space-y-4">
                    {values.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          strokeWidth={1.8}
                          className="
                            mt-[1px]
                            shrink-0
                            text-[#D59A2B]
                          "
                        />

                        <span
                          className="
                            text-[14px]
                            font-medium
                            leading-[1.5]
                            text-[#E4E7EA]

                            sm:text-[15px]
                            xl:text-[16px]
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
