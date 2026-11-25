import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  ClipboardList,
  Globe2,
  Handshake,
  Headphones,
  Megaphone,
  Monitor,
  ShieldCheck,
  Video,
} from "lucide-react";

import internationalImage from "../../assets/igbndivision/international.png";
import factoryToursImage from "../../assets/igbndivision/factorytours.png";
import marketingPRImage from "../../assets/igbndivision/marketingpr.png";
import studiosImage from "../../assets/igbndivision/studios.png";
import digitalWebImage from "../../assets/igbndivision/digitalweb.png";
import aiAgentImage from "../../assets/igbndivision/aiagent.png";
import publisherImage from "../../assets/igbndivision/publisher.png";

const flagship = {
  image: internationalImage,
  badge: "Our Flagship Platform",
  title: "IGBN International Portal",
  tagline: "Connecting Indian Suppliers with Global Buyers.",
  description:
    "A global B2B trade platform that connects Indian manufacturers, exporters and suppliers with international importers, distributors and business opportunities.",
  features: [
    { icon: Handshake, label: "Global buyer-supplier matchmaking" },
    { icon: ShieldCheck, label: "Verified Indian supplier network" },
    { icon: ClipboardList, label: "Live RFQs and trade enquiries" },
    { icon: BarChart3, label: "International market intelligence" },
    { icon: Globe2, label: "Multi-country business expansion" },
    { icon: Headphones, label: "Trade facilitation and end-to-end support" },
  ],
  cta: "Explore International Portal",
  href: "/trade-intelligence",
};

const divisions = [
  {
    icon: Building2,
    image: factoryToursImage,
    title: "IGBN Factory Tours",
    subtitle: "On-Ground Business Facilitation",
    description:
      "International factory visits, supplier meetings, logistics coordination and customized industry tours.",
    href: "/factory-tours",
  },
  {
    icon: Megaphone,
    image: marketingPRImage,
    title: "IGBN Marketing & PR",
    subtitle: "Brand Building & Market Presence",
    description:
      "Brand positioning, international PR, social media management and global market campaigns.",
    href: "/marketing-pr",
  },
  {
    icon: Video,
    image: studiosImage,
    title: "IGBN Studios",
    subtitle: "Media & Digital Production",
    description:
      "Corporate films, podcasts, interviews, factory documentaries and recurring content production.",
    href: "/studios",
  },
  {
    icon: Monitor,
    image: digitalWebImage,
    title: "IGBN Technologies",
    subtitle: "Digital Product Development",
    description:
      "Professional websites, 3D websites, mobile applications, portals and custom digital solutions.",
    href: "/digital-solutions",
  },
  {
    icon: Bot,
    image: aiAgentImage,
    title: "IGBN AI Workforce",
    subtitle: "Intelligent Business Automation",
    description:
      "AI employees for finance, sales, operations, HR, customer support and business productivity.",
    href: "/ai-coo",
  },
  {
    icon: BookOpen,
    image: publisherImage,
    title: "IGBN Global Publishing",
    subtitle: "Publishing & Global Readership",
    description:
      "Publishing, multilingual books, author profiles and international digital readership.",
    href: "/publishers",
  },
];

export default function OurFourDivision() {
  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px] rounded-xl border border-[#725021]/80 bg-[#03111F] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:p-6 lg:p-7">
        <FlagshipCard data={flagship} />

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 mt-9 flex items-center justify-center gap-4"
        >
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8E6222] to-[#D69A2B]" />
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
          </div>
          <h2 className="whitespace-nowrap text-center font-serif text-2xl font-semibold text-[#F4F5F6] sm:text-3xl lg:text-[34px]">
            Explore the <span className="text-[#D69A2B]">IGBN Ecosystem</span>
          </h2>
          <div className="hidden w-full max-w-[440px] items-center sm:flex">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8E6222] to-[#D69A2B]" />
          </div>
        </motion.div>

        <p className="mb-6 text-center text-[16px] leading-6 text-[#E2E5E8]">
          Specialized business divisions that strengthen your brand, operations
          and global growth.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {divisions.map((division, index) => (
            <DivisionCard key={division.title} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipCard({ data }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45 }}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#725021]/80 bg-[#020D18] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:border-[#D69A2B] hover:shadow-[0_12px_32px_rgba(214,154,43,0.15)] lg:flex-row"
    >
      {/* Image with diagonal edge */}
      <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:min-h-[250px] lg:w-[38%] lg:shrink-0">
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]"
        />
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="100"
            y1="0"
            x2="86"
            y2="100"
            stroke="#D69A2B"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020D18]/60 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 p-5 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-6 lg:px-6 lg:py-5">
        <div className="min-w-0">
          <span className="inline-block rounded-sm bg-[#D69A2B] px-3 py-1 text-[16px] font-semibold leading-6 text-[#07111B]">
            {data.badge}
          </span>

          <h3 className="mt-2 font-serif text-2xl font-bold uppercase leading-tight text-[#F4F5F6] sm:text-3xl">
            {data.title}
          </h3>
          <p className="mt-1 text-[16px] font-semibold leading-6 text-[#D69A2B]">
            {data.tagline}
          </p>
          <p className="mt-2 max-w-[760px] text-[16px] leading-6 text-[#E2E5E8]">
            {data.description}
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D69A2B] text-[#F0C168]">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <span className="text-[16px] leading-[1.35] text-[#E2E5E8]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-[#725021]/80 lg:pl-6">
          <Link
            to={data.href}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#D69A2B] bg-gradient-to-r from-[#E0AA48] via-[#D99B2B] to-[#C98A24] px-5 py-2.5 text-[16px] font-semibold text-[#07111B] shadow-[0_6px_18px_rgba(214,154,43,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(214,154,43,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B] lg:w-auto"
          >
            {data.cta}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function DivisionCard({ division, index = 0 }) {
  const Icon = division.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#725021]/80 bg-[#020D18] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300 hover:border-[#D69A2B] hover:shadow-[0_12px_32px_rgba(214,154,43,0.15)]"
    >
      <div className="relative aspect-[2.2/1] w-full overflow-hidden border-b border-[#725021]/70">
        <img
          src={division.image}
          alt={division.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020D18] via-[#020D18]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-2 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D69A2B] bg-[#020D18] text-[#F0C168] shadow-[0_0_20px_rgba(214,154,43,0.3)]">
            <Icon size={26} strokeWidth={1.7} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 text-center">
        <h3 className="text-lg font-bold leading-tight text-[#F4F5F6]">
          {division.title}
        </h3>
        <p className="mt-2 min-h-12 text-[16px] font-semibold leading-6 text-[#D69A2B]">
          {division.subtitle}
        </p>
        <p className="mt-2 flex-1 text-[16px] leading-6 text-[#E2E5E8]">
          {division.description}
        </p>

        <Link
          to={division.href}
          className="mx-auto mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#D69A2B] bg-transparent px-5 py-2 text-[16px] font-semibold text-[#F0C168] transition hover:bg-[#D69A2B] hover:text-[#07111B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
        >
          Learn More
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}