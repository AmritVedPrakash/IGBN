import React from "react";
import {
  Search,
  BadgeCheck,
  Truck,
  Handshake,
  ChartNoAxesCombined,
  CalendarDays,
} from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: Search,
      title: "Sourcing Solutions",
      description: "Find the right products and manufacturers in India.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Verification",
      description: "We ensure quality through strict verification process.",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "End-to-end logistic and shipping support.",
    },
    {
      icon: Handshake,
      title: "Trade Consulting",
      description: "Expert guidance for your international trade.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Market Research",
      description: "In-depth market research and trends analysis.",
    },
    {
      icon: CalendarDays,
      title: "Exhibitions & Events",
      description: "Connect through global trade events & expos.",
    },
  ];

  return (
    <section className="relative bg-[#fbfaf8] py-16 md:py-24 overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0b234d]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#d5aa47]/[0.08] blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-[#d5aa47] text-[11px] md:text-xs tracking-[0.35em] font-semibold uppercase mb-3 animate-[fadeInUp_0.6s_ease-out]">
            What We Offer
          </span>
          <h2 className="text-[#151515] uppercase font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight animate-[fadeInUp_0.6s_ease-out_0.05s_both]">
            Our Services
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <span className="w-8 h-[3px] bg-[#d5aa47]/40 rounded-full" />
            <span className="w-14 h-[3px] bg-[#d5aa47] rounded-full" />
            <span className="w-8 h-[3px] bg-[#d5aa47]/40 rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white
                  min-h-[260px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-8
                  py-10
                  rounded-2xl
                  border
                  border-black/[0.04]
                  shadow-[0_8px_30px_rgba(11,35,77,0.06)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:shadow-[0_25px_50px_rgba(11,35,77,0.14)]
                  hover:border-[#d5aa47]/30
                  overflow-hidden
                  animate-[fadeInUp_0.6s_ease-out_both]
                "
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* Gradient wash that sweeps in on hover */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br from-[#0b234d]/[0.035] via-transparent to-[#d5aa47]/[0.06]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* Corner accent diamond */}
                <span
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-3
                    h-3
                    bg-[#0b234d]
                    rotate-45
                    transition-all
                    duration-500
                    group-hover:bg-[#d5aa47]
                    group-hover:rotate-[225deg]
                  "
                />

                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <div
                    className="
                      absolute inset-0
                      rounded-full
                      bg-[#0a2147]/[0.06]
                      scale-100
                      group-hover:scale-125
                      group-hover:bg-[#d5aa47]/[0.15]
                      transition-all
                      duration-500
                      ease-out
                    "
                  />
                  <div
                    className="
                      relative
                      w-20 h-20
                      flex items-center justify-center
                      rounded-full
                      bg-[#0a2147]/[0.05]
                      group-hover:bg-[#0a2147]
                      transition-colors
                      duration-500
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.6}
                      className="
                        text-[#0a2147]
                        group-hover:text-[#d5aa47]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-[8deg]
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-[#151515] text-[17px] md:text-[19px] font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-[#6b6b6b] text-[13px] md:text-[14px] leading-6 max-w-[260px]">
                  {service.description}
                </p>

                {/* Bottom underline reveal */}
                <span
                  className="
                    absolute bottom-0 left-0 h-[3px] bg-[#d5aa47]
                    w-0 group-hover:w-full
                    transition-all duration-500 ease-out
                  "
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
