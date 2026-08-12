import React from "react";
import { Users, Globe2, Network, UserRoundCheck } from "lucide-react";

import aboutBg from "../assets/aboutimg/about-bg.png";
import WhoWeAre from "../components/sections/aboutus/WhoWeAre";
import OurLeadership from "../components/sections/aboutus/OurLeadership";

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Global Buyers",
    },
    {
      icon: Globe2,
      value: "30+",
      label: "Countries Connected",
    },
    {
      icon: Network,
      value: "7896+",
      label: "Successful Business Connections",
    },
    {
      icon: UserRoundCheck,
      value: "5000+",
      label: "Suppliers",
    },
  ];

  return (
    <>
      <section
        className="
        relative
        min-h-[650px]
        lg:min-h-[720px]
        overflow-hidden
        bg-[#061632]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
      "
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >
        {/* Dark overlay */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#061632]/95
          via-[#061632]/70
          to-[#061632]/20
        "
        />

        <div className="relative z-10 w-full max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
          {/* Content */}
          <div className="max-w-[650px]">
            <p className="text-[#e2ab32] text-sm md:text-base font-semibold uppercase tracking-wide mb-3">
              About Us
            </p>

            <h1
              className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[58px]
              font-semibold
              uppercase
              leading-[1.08]
            "
            >
              Building Global
              <br />
              Connections
              <br />
              <span className="text-[#e1a52c]">Empowering Business.</span>
            </h1>

            <p
              className="
              mt-7
              text-white/80
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              max-w-[620px]
            "
            >
              IGBN Worldwide is a leading B2B platform that bridges the gap
              between global buyers and quality suppliers, driving international
              trade and business growth.
            </p>
          </div>

          {/* Stats Box */}
          <div
            className="
            mt-12
            lg:mt-16
            border
            border-white/30
            rounded-2xl
            bg-[#061632]/35
            backdrop-blur-[2px]
            px-4
            sm:px-6
            lg:px-8
            py-6
          "
          >
            <div
              className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-y-8
              lg:gap-y-0
            "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className={`
                    relative
                    flex
                    items-center
                    gap-4
                    sm:gap-5
                    px-2
                    sm:px-4
                    lg:px-7

                    ${index !== 0 ? "lg:border-l lg:border-white/30" : ""}
                  `}
                  >
                    {/* Icon */}
                    <div className="shrink-0">
                      <Icon
                        size={50}
                        strokeWidth={1.5}
                        className="text-[#dda62d] sm:w-[58px] sm:h-[58px]"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="
                        text-white
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        font-semibold
                        leading-none
                      "
                      >
                        {stat.value}
                      </h3>

                      <p
                        className="
                        mt-2
                        text-white/75
                        text-[11px]
                        sm:text-xs
                        md:text-sm
                        leading-5
                      "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div>
        <WhoWeAre/>
      </div> */}
      </section>
      <div>
        <WhoWeAre />
      </div>
      <div>
        <OurLeadership />
      </div>
    </>
  );
}
