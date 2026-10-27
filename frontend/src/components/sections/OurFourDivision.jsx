import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  Globe2,
  Megaphone,
  Monitor,
  Video,
} from "lucide-react";

import internationalImage from "../../assets/igbndivision/international.png";
import factoryToursImage from "../../assets/igbndivision/factorytours.png";
import marketingPRImage from "../../assets/igbndivision/marketingpr.png";
import studiosImage from "../../assets/igbndivision/studios.png";
import digitalWebImage from "../../assets/igbndivision/digitalweb.png";
import aiAgentImage from "../../assets/igbndivision/aiagent.png";
import publisherImage from "../../assets/igbndivision/publisher.png";

const divisions = [
  {
    icon: Globe2,
    image: internationalImage,
    title: "IGBN International Portal",
    tagline: "Connect Indian Suppliers with Global Buyers",
    features: [
      "Global buyer matchmaking",
      "Verified Indian suppliers",
      "Market insights & trade opportunities",
      "Inquiry & RFQ management",
      "Multi-country expansion support",
    ],
    href: "/trade-intelligence",
  },
  {
    icon: Building2,
    image: factoryToursImage,
    title: "IGBN Factory Tours",
    tagline: "On-Ground Experience. Real Insights.",
    features: [
      "Organize international factory visits",
      "End-to-end travel & logistics support",
      "Interpreter & local coordination",
      "Supplier meeting facilitation",
      "Customized industry tours",
    ],
    href: "/contact",
  },
  {
    icon: Megaphone,
    image: marketingPRImage,
    title: "IGBN Marketing and PR",
    tagline: "Build Global Visibility for Indian Brands",
    features: [
      "Brand positioning & strategy",
      "Global PR and media outreach",
      "Social media management",
      "International market campaigns",
      "Thought leadership & content strategy",
    ],
    href: "/services",
  },
  {
    icon: Video,
    image: studiosImage,
    title: "IGBN Studios",
    tagline: "Powerful Stories. Real People. Global Reach.",
    features: [
      "Podcasts and interviews",
      "Corporate and brand videos",
      "Factory shoots and documentaries",
      "Monthly content creation",
      "Professional editing and production",
    ],
    href: "/services",
  },
  {
    icon: Monitor,
    image: digitalWebImage,
    title: "IGBN Digital Web and App",
    tagline: "Modern Digital Solutions for Global Growth",
    features: [
      "Professional websites and 3D websites",
      "Mobile apps and portals",
      "Custom digital solutions",
      "Platform development and integrations",
      "Technology consulting and support",
    ],
    href: "/services",
  },
  {
    icon: Bot,
    image: aiAgentImage,
    title: "AI Agents",
    tagline: "Your AI Workforce for Higher Productivity",
    features: [
      "25+ business-ready AI employees",
      "Automate repetitive tasks",
      "Support sales, operations, finance, HR and more",
      "Work 24/7 with accuracy and consistency",
      "Reduce costs and scale faster",
    ],
    href: "/services",
  },
  {
    icon: BookOpen,
    image: publisherImage,
    title: "Global Publishers",
    tagline: "Indian Voices for a Global Audience",
    features: [
      "Publish and promote books, magazines and blogs",
      "Dedicated author platform",
      "Global readership and distribution",
      "Read, lend or rent content",
      "Share Indian knowledge, culture and ideas worldwide",
    ],
    href: "/contact",
  },
];

export default function OurFourDivision() {
  const [showAll, setShowAll] = useState(false);
  const visibleDivisions = showAll ? divisions : divisions.slice(0, 4);

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px] rounded-xl border border-[#725021]/80 bg-[#03111F] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:p-6 lg:p-7">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 flex items-center justify-center gap-4"
        >
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8E6222] to-[#D69A2B]" />
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
          </div>
          <h2 className="whitespace-nowrap text-center text-xl font-semibold uppercase tracking-[0.02em] text-[#F4F5F6] sm:text-2xl lg:text-[25px]">
            IGBN Divisions{" "}
            <span className="normal-case font-normal">(Our Ecosystem)</span>
          </h2>
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8E6222] to-[#D69A2B]" />
          </div>
        </motion.div>

        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setShowAll((visible) => !visible)}
            aria-expanded={showAll}
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#D69A2B] px-4 py-2 text-sm font-semibold text-[#D69A2B] transition hover:bg-[#D69A2B]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
          >
            {showAll ? "View Less" : "View All"}
            <ArrowRight
              size={16}
              className={`transition-transform ${showAll ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleDivisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.article
                key={division.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#725021]/80 bg-[#020D18] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:border-[#D69A2B] hover:shadow-[0_12px_32px_rgba(214,154,43,0.15)]"
              >
                <div className="relative aspect-[1.1/1] overflow-hidden border-b border-[#725021]/70">
                  <img
                    src={division.image}
                    alt={division.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020D18] via-[#020D18]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D69A2B] bg-[#020D18] text-[#F0C168] shadow-[0_0_20px_rgba(214,154,43,0.3)] sm:h-16 sm:w-16">
                      <Icon size={28} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-10 text-center sm:px-5">
                  <h3 className="text-lg font-bold uppercase leading-tight text-[#F4F5F6]">
                    {division.title}
                  </h3>
                  <p className="mt-1.5 min-h-10 text-sm font-medium leading-5 text-[#D69A2B]">
                    {division.tagline}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2.5 text-left">
                    {division.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[16px] leading-[1.45] text-[#E2E5E8]"
                      >
                        <span className="mt-0.5 shrink-0 text-[#D69A2B]">
                          <Icon size={14} strokeWidth={1.8} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={division.href}
                    className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-[#D69A2B] bg-gradient-to-r from-[#E0AA48] via-[#D99B2B] to-[#C98A24] px-3 py-2 text-sm font-semibold text-[#07111B] shadow-[0_6px_18px_rgba(214,154,43,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(214,154,43,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
