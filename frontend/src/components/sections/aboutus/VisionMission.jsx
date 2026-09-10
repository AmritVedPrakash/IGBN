import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  UsersRound,
  TrendingUp,
  CheckCircle2,
  Globe2,
} from "lucide-react";

// Change this import to your actual logo filename/location.
import brandLogo from "../../../assets/logo.png";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    text: "Building honest relationships through clear communication and responsible business practices.",
  },
  {
    icon: Handshake,
    title: "Trust & Commitment",
    text: "Creating lasting partnerships through reliability, consistency and shared purpose.",
  },
  {
    icon: Lightbulb,
    title: "Excellence & Innovation",
    text: "Bringing together intelligence and technology to create better trade opportunities.",
  },
  {
    icon: UsersRound,
    title: "Collaboration & Respect",
    text: "Connecting people, valuing different perspectives and growing stronger together.",
  },
  {
    icon: TrendingUp,
    title: "Growth with Responsibility",
    text: "Enabling sustainable business growth with a long-term, responsible approach.",
  },
];
const points = [
  "Trusted Network",
  "Global Reach",
  "Business Growth",
  "Integrity & Transparency",
];

function Heading({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:gap-[18px]">
      <h3 className="m-0 text-[26px] font-bold uppercase leading-[1.15] tracking-[-0.025em] text-[#D59A2B] sm:text-[30px] lg:text-[clamp(24px,2.5vw,38px)]">
        {children}
      </h3>
      <span
        className="h-px min-w-[22px] flex-1 bg-[linear-gradient(90deg,#D59A2Baa,#8a602215)]"
        aria-hidden="true"
      />
    </div>
  );
}

export default function VisionMission({ logoSrc = brandLogo }) {
  const uid = useId().replace(/:/g, "");
  const reducedMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      className="w-full bg-[#020D18] px-3 py-5 text-[#E1E5E9] sm:px-6 sm:py-9"
      aria-label="About IGBN Worldwide, our vision, mission and values"
    >
      <div className="relative isolate mx-auto max-w-[1650px] overflow-hidden rounded-[22px] border border-[#8A6022]/[0.35] bg-[#03111F] bg-[radial-gradient(ellipse_at_5%_85%,#D59A2B0d,transparent_48%),radial-gradient(ellipse_at_90%_5%,#D59A2B07,transparent_35%)] shadow-[0_24px_70px_#00000030] sm:rounded-[30px]">
        {/* Layered S-shaped ribbon follows the reference's center divider. */}
        <svg
          className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
          viewBox="0 0 1440 1100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={`${uid}-ribbon`}
              x1="500"
              y1="0"
              x2="850"
              y2="1100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8A6022" stopOpacity=".25" />
              <stop offset=".45" stopColor="#D59A2B" stopOpacity=".7" />
              <stop offset="1" stopColor="#8A6022" stopOpacity=".2" />
            </linearGradient>
            <linearGradient
              id={`${uid}-edge`}
              x1="690"
              y1="0"
              x2="690"
              y2="1100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D59A2B" stopOpacity=".1" />
              <stop offset=".35" stopColor="#D59A2B" />
              <stop offset=".7" stopColor="#D59A2B" stopOpacity=".8" />
              <stop offset="1" stopColor="#8A6022" stopOpacity=".1" />
            </linearGradient>
          </defs>
          <path
            d="M 900 -60 C 425 140 600 375 674 615 C 760 895 562 1050 355 1170 L 430 1170 C 660 1060 814 872 712 603 C 620 359 494 128 955 -60 Z"
            fill={`url(#${uid}-ribbon)`}
          />
          <path
            d="M 922 -60 C 453 135 625 375 695 611 C 789 894 599 1060 394 1170"
            stroke="#D59A2B"
            strokeWidth="28"
            opacity=".035"
          />
          <path
            d="M 955 -60 C 494 128 620 359 712 603 C 814 872 660 1060 430 1170"
            stroke={`url(#${uid}-edge)`}
            strokeWidth="2"
          />
          <path
            d="M 900 -60 C 425 140 600 375 674 615 C 760 895 562 1050 355 1170"
            stroke="#8A6022"
            strokeOpacity=".45"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-[47%_53%]">
          <div className="flex min-w-0 flex-col px-[22px] py-7 sm:p-9 lg:pb-[42px] lg:pl-[9%] lg:pr-[12%] lg:pt-[54px]">
            <motion.div {...reveal()} className="max-w-[650px]">
              <div className="mb-6 flex items-center gap-3.5 sm:mb-[30px] sm:gap-[19px]">
                <img
                  src={logoSrc}
                  alt="IGBN Worldwide logo"
                  className="h-14 w-14 shrink-0 object-contain object-center sm:h-[68px] sm:w-[68px]"
                />
                <div>
                  <span className="block text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#D59A2B] sm:text-[clamp(38px,5vw,56px)]">
                    IGBN
                  </span>
                  <span className="mt-2.5 block text-[9px] tracking-[0.38em] text-[#E1E5E9] sm:text-xs">
                    WORLDWIDE
                  </span>
                </div>
              </div>
              <div className="mb-[22px] flex items-center gap-[9px] text-[8px] font-semibold leading-[1.6] tracking-[0.1em] text-[#D59A2B] sm:text-[10px] sm:tracking-[0.17em]">
                <span
                  className="h-px w-6 shrink-0 bg-[#D59A2B]"
                  aria-hidden="true"
                />{" "}
                CONNECTING BUSINESS. GLOBALLY.
              </div>
              <h2 className="mb-5 mt-0 text-[clamp(32px,3.4vw,52px)] font-bold leading-[1.15] tracking-[-0.04em]">
                Who We Are<span className="text-[#D59A2B]">.</span>
              </h2>
              <p className="m-0 text-[15px] leading-[1.8] text-[#E1E5E9] sm:text-base min-[1400px]:text-lg">
                IGBN Worldwide is a B2B trade facilitation platform dedicated to
                connecting global buyers with reliable Indian suppliers.
              </p>
              <p className="mb-0 mt-[15px] text-[15px] leading-[1.8] text-[#E1E5E9] sm:text-base min-[1400px]:text-lg">
                We bring together data, technology, people and processes to
                unlock new markets, build strong international partnerships and
                drive sustainable business growth.
              </p>
              <div className="mt-[26px] grid grid-cols-1 gap-x-3 gap-y-[15px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-[9px] text-xs leading-normal min-[1400px]:text-sm"
                  >
                    <CheckCircle2
                      className="shrink-0 text-[#D59A2B]"
                      size={18}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.12)} className="mt-auto pt-10 sm:pt-12">
              <div className="relative mx-auto aspect-square w-[82%] max-w-[340px] rounded-full border border-[#D59A2B]/[0.45] bg-[radial-gradient(circle,#061522_48%,#8a60221a_70%,#03111F_72%)] shadow-[0_0_0_8px_#8a602212,0_0_0_10px_#8a602238,0_0_65px_#D59A2B08,inset_0_0_30px_#D59A2B0d]">
                <div
                  className="pointer-events-none absolute inset-[3%] animate-[spin_45s_linear_infinite] rounded-full border border-dashed border-[#8A6022]/40 motion-reduce:animate-none"
                  aria-hidden="true"
                >
                  <span className="absolute -top-1 left-1/2 h-[7px] w-[7px] rounded-full bg-[#D59A2B] shadow-[0_0_14px_#D59A2B70]" />
                  <span className="absolute -bottom-1 left-1/2 h-[7px] w-[7px] rounded-full bg-[#D59A2B] shadow-[0_0_14px_#D59A2B70]" />
                </div>
                <div className="absolute inset-[9%] flex items-center justify-center rounded-full border border-[#8A6022]/[0.35] bg-[#020D18]">
                  <img
                    src={logoSrc}
                    alt=""
                    loading="lazy"
                    className="h-[68%] w-[68%] object-contain object-center"
                  />
                </div>
              </div>
              <div className="mt-[26px] flex items-center justify-center gap-[9px] text-center text-[8px] leading-[1.7] tracking-[0.06em] text-[#D59A2B] sm:text-[9px] sm:tracking-[0.13em]">
                <Globe2 className="shrink-0" size={17} aria-hidden="true" />
                <span>INDIAN EXPERTISE. GLOBAL POSSIBILITIES.</span>
              </div>
            </motion.div>
          </div>

          <div className="min-w-0 border-t border-[#8A6022]/30 px-[22px] py-7 sm:p-9 lg:border-t-0 lg:pb-[54px] lg:pl-[16%] lg:pr-[8%] lg:pt-[74px]">
            <motion.div {...reveal(0.08)} className="mb-[35px]">
              <Heading>Our Vision</Heading>
              <p className="m-0 text-[15px] leading-[1.8] text-[#E1E5E9] sm:text-base min-[1400px]:text-lg">
                To be the world&apos;s most trusted and intelligent trade
                facilitation platform, driving global excellence for Indian
                businesses and strengthening India&apos;s presence worldwide.
              </p>
            </motion.div>
            <motion.div {...reveal(0.12)} className="mb-[35px]">
              <Heading>Our Mission</Heading>
              <p className="m-0 text-[15px] leading-[1.8] text-[#E1E5E9] sm:text-base min-[1400px]:text-lg">
                To simplify global trade, build long-term partnerships, and
                create meaningful opportunities through intelligence, networks
                and end-to-end export growth solutions.
              </p>
            </motion.div>
            <div className="min-w-0">
              <Heading>Our Values</Heading>
              <ul className="mb-0 mt-6 grid list-none gap-6 p-0">
                {values.map(({ icon: Icon, title, text }, index) => (
                  <motion.li
                    className="group flex items-start gap-3 sm:gap-[17px]"
                    key={title}
                    {...reveal(index * 0.035)}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8A6022]/50 bg-[linear-gradient(145deg,#D59A2B14,#061522)] text-[#D59A2B] transition duration-300 group-hover:-translate-y-[3px] group-hover:border-[#D59A2B] motion-reduce:transform-none motion-reduce:transition-none sm:h-14 sm:w-14">
                      <Icon
                        className="h-[23px] w-[23px] sm:h-[27px] sm:w-[27px]"
                        size={27}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="mb-[5px] mt-0 text-[15px] font-semibold leading-[1.4] text-[#D59A2B] sm:text-base min-[1400px]:text-lg">
                        {title}
                      </h4>
                      <p className="m-0 text-[13px] leading-[1.7] text-[#E1E5E9] sm:text-sm min-[1400px]:text-base">
                        {text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
