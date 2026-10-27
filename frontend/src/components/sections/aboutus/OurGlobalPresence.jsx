import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import australia from "../../../assets/flag/australia.png";
import bangladesh from "../../../assets/flag/bangladesh.png";
import brazil from "../../../assets/flag/brazil.png";
import canada from "../../../assets/flag/canada.png";
import china from "../../../assets/flag/china.png";
import egypt from "../../../assets/flag/egypt.png";
import france from "../../../assets/flag/france.png";
import germany from "../../../assets/flag/germany.png";
import hongKong from "../../../assets/flag/hong-kong.png";
import india from "../../../assets/flag/india.png";
import indonesia from "../../../assets/flag/indonesia.png";
import italy from "../../../assets/flag/italy.png";
import japan from "../../../assets/flag/japan.png";
import malaysia from "../../../assets/flag/malaysia.png";
import netherlands from "../../../assets/flag/netherlands.png";
import russia from "../../../assets/flag/russia.png";
import saudiArabia from "../../../assets/flag/saudi-arabia.png";
import singapore from "../../../assets/flag/singapore.png";
import southAfrica from "../../../assets/flag/south-africa.png";
import southKorea from "../../../assets/flag/south-korea.png";
import thailand from "../../../assets/flag/thailand.png";
import turkey from "../../../assets/flag/turkey.png";
import uae from "../../../assets/flag/uae.png";
import uk from "../../../assets/flag/uk.png";
import usa from "../../../assets/flag/usa.png";
import vietnam from "../../../assets/flag/vietnam.png";

const regions = [
  {
    name: "Asia-Pacific",
    groups: [
      {
        name: "South Asia",
        countries: [
          { name: "India", code: "IN", flag: india, tier: 1 },
          { name: "Bangladesh", code: "BD", flag: bangladesh, tier: 1 },
          { name: "Sri Lanka", code: "LK", tier: 2 },
          { name: "Nepal", code: "NP", tier: 2 },
        ],
      },
      {
        name: "Southeast Asia",
        countries: [
          { name: "Malaysia", code: "MY", flag: malaysia, tier: 1 },
          { name: "Indonesia", code: "ID", flag: indonesia, tier: 1 },
          { name: "Thailand", code: "TH", flag: thailand, tier: 2 },
          { name: "Vietnam", code: "VN", flag: vietnam, tier: 1 },
          { name: "Singapore", code: "SG", flag: singapore, tier: 1 },
        ],
      },
      {
        name: "East Asia",
        countries: [
          { name: "Japan", code: "JP", flag: japan, tier: 1 },
          { name: "South Korea", code: "KR", flag: southKorea, tier: 1 },
          { name: "China", code: "CN", flag: china, tier: 1 },
          { name: "Hong Kong", code: "HK", flag: hongKong, tier: 1 },
        ],
      },
      {
        name: "Central Asia",
        countries: [
          { name: "Kazakhstan", code: "KZ", tier: 2 },
          { name: "Uzbekistan", code: "UZ", tier: 2 },
        ],
      },
      {
        name: "Oceania",
        countries: [
          { name: "Australia", code: "AU", flag: australia, tier: 1 },
          { name: "New Zealand", code: "NZ", tier: 2 },
        ],
      },
    ],
  },
  {
    name: "Middle East",
    groups: [
      {
        name: "Gulf & Middle East",
        countries: [
          { name: "United Arab Emirates", code: "AE", flag: uae, tier: 1 },
          { name: "Saudi Arabia", code: "SA", flag: saudiArabia, tier: 1 },
          { name: "Turkey", code: "TR", flag: turkey, tier: 1 },
          { name: "Qatar", code: "QA", tier: 1 },
          { name: "Oman", code: "OM", tier: 1 },
          { name: "Kuwait", code: "KW", tier: 2 },
          { name: "Bahrain", code: "BH", tier: 2 },
          { name: "Jordan", code: "JO", tier: 2 },
          { name: "Iraq", code: "IQ", tier: 2 },
        ],
      },
    ],
  },
  {
    name: "Europe",
    groups: [
      {
        name: "Western Europe",
        countries: [
          { name: "Netherlands", code: "NL", flag: netherlands, tier: 1 },
          { name: "United Kingdom", code: "GB", flag: uk, tier: 1 },
          { name: "Germany", code: "DE", flag: germany, tier: 1 },
          { name: "Belgium", code: "BE", tier: 1 },
          { name: "France", code: "FR", flag: france, tier: 1 },
          { name: "Switzerland", code: "CH", tier: 2 },
        ],
      },
      {
        name: "Southern Europe",
        countries: [
          { name: "Italy", code: "IT", flag: italy, tier: 1 },
          { name: "Spain", code: "ES", tier: 1 },
        ],
      },
      {
        name: "Northern Europe",
        countries: [{ name: "Sweden", code: "SE", tier: 2 }],
      },
      {
        name: "Central & Eastern Europe",
        countries: [
          { name: "Poland", code: "PL", tier: 1 },
          { name: "Austria", code: "AT", tier: 2 },
          { name: "Czechia", code: "CZ", tier: 2 },
          { name: "Russia", code: "RU", flag: russia, tier: 1 },
          { name: "Portugal", code: "PT", tier: 2 },
        ],
      },
    ],
  },
  {
    name: "Africa",
    groups: [
      {
        name: "Northern Africa",
        countries: [
          { name: "Egypt", code: "EG", flag: egypt, tier: 1 },
          { name: "Algeria", code: "DZ", tier: 2 },
        ],
      },
      {
        name: "Western Africa",
        countries: [
          { name: "Nigeria", code: "NG", tier: 1 },
          { name: "Ghana", code: "GH", tier: 2 },
          { name: "Côte d’Ivoire", code: "CI", tier: 2 },
          { name: "Senegal", code: "SN", tier: 2 },
        ],
      },
      {
        name: "Eastern Africa",
        countries: [
          { name: "Kenya", code: "KE", tier: 1 },
          { name: "Tanzania", code: "TZ", tier: 2 },
          { name: "Ethiopia", code: "ET", tier: 2 },
          { name: "Uganda", code: "UG", tier: 2 },
        ],
      },
      {
        name: "Southern Africa",
        countries: [
          { name: "South Africa", code: "ZA", flag: southAfrica, tier: 1 },
        ],
      },
      {
        name: "Central Africa",
        countries: [{ name: "Angola", code: "AO", tier: 2 }],
      },
    ],
  },
  {
    name: "North America",
    groups: [
      {
        name: "North America",
        countries: [
          { name: "United States", code: "US", flag: usa, tier: 1 },
          { name: "Canada", code: "CA", flag: canada, tier: 1 },
          { name: "Mexico", code: "MX", tier: 1 },
        ],
      },
    ],
  },
  {
    name: "South America",
    groups: [
      {
        name: "South America",
        countries: [
          { name: "Brazil", code: "BR", flag: brazil, tier: 1 },
          { name: "Chile", code: "CL", tier: 2 },
          { name: "Colombia", code: "CO", tier: 2 },
          { name: "Argentina", code: "AR", tier: 2 },
          { name: "Peru", code: "PE", tier: 2 },
        ],
      },
    ],
  },
];

function CountryFlag({ country }) {
  if (country.flag) {
    return (
      <img
        src={country.flag}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-7 w-10 shrink-0 rounded-[3px] border border-white/10 object-cover"
      />
    );
  }

  const flagEmoji = String.fromCodePoint(
    ...Array.from(country.code, (character) => 127397 + character.charCodeAt(0)),
  );

  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-10 shrink-0 items-center justify-center text-2xl leading-none"
    >
      {flagEmoji}
    </span>
  );
}

function RegionCard({ region, index, showAllRegions }) {
  const countryCount = region.groups.reduce(
    (total, group) => total + group.countries.length,
    0,
  );
  const rowVisibilityClass = showAllRegions
    ? ""
    : index === 1
      ? "hidden md:block"
      : index === 2
        ? "hidden lg:block"
        : index > 2
          ? "hidden"
          : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`overflow-hidden rounded-xl border border-[#725021]/80 bg-[#03111F] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-[#D69A2B] ${rowVisibilityClass}`}
    >
      <header className="relative flex min-h-[76px] items-end justify-between overflow-hidden border-b border-[#725021]/60 bg-gradient-to-r from-[#102438] via-[#0B1C2B] to-[#03111F] px-4 pb-3 pt-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(214,154,43,0.18),transparent_55%)]" />
        <div className="relative">
          <h3 className="text-lg font-bold uppercase tracking-wide text-[#F4F5F6] sm:text-xl">
            {region.name}
          </h3>
          <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-[#D69A2B]">
            {countryCount} countries
          </p>
        </div>
        <span className="relative rounded-full border border-[#725021]/80 bg-[#020D18]/80 px-2.5 py-1 text-[15px] font-semibold text-[#E2E5E8]">
          {countryCount}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-x-5 gap-y-4 p-4 sm:grid-cols-2">
        {region.groups.map((group) => (
          <section key={group.name} className="min-w-0">
            <h4 className="mb-2 border-b border-[#725021]/50 pb-1.5 text-xs font-semibold text-[#D69A2B]">
              {group.name}
            </h4>
            <ul className="space-y-1.5">
              {group.countries.map((country) => (
                <li
                  key={country.code}
                  className="flex min-h-9 items-center gap-2 border-b border-white/[0.04] pb-1 text-[15px] text-[#E2E5E8] last:border-0"
                >
                  <CountryFlag country={country} />
                  <span className="min-w-0 flex-1 truncate" title={country.name}>
                    {country.name}
                  </span>
                  <span
                    className={`shrink-0 rounded px-1.5 py-0.5 text-[15px] font-bold ${
                      country.tier === 1
                        ? "bg-[#D69A2B] text-[#07111B]"
                        : "bg-[#234A72] text-[#E7F0FA]"
                    }`}
                  >
                    P{country.tier}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </motion.article>
  );
}

export default function OurGlobalPresence() {
  const [showAllRegions, setShowAllRegions] = React.useState(false);
  const totalCountries = regions.reduce(
    (total, region) =>
      total +
      region.groups.reduce(
        (regionTotal, group) => regionTotal + group.countries.length,
        0,
      ),
    0,
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#D69A2B]/[0.04] blur-[120px]" />
      <div className="relative mx-auto max-w-[1650px]">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-end justify-between gap-3"
        >
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[#D69A2B]">
              Connected worldwide
            </p>
            <h2 className="mt-1 text-2xl font-bold text-[#F4F5F6] sm:text-3xl">
              Our Global Presence
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[15px] font-medium text-[#AAB2BA]">
              <span className="text-[15px] font-bold text-[#D69A2B]">
              {totalCountries}
              </span>{" "}
              countries across 6 regions
            </p>
            <button
              type="button"
              aria-expanded={showAllRegions}
              onClick={() => setShowAllRegions((isShowing) => !isShowing)}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#D69A2B]/70 px-4 py-2 text-[15px] font-semibold text-[#D69A2B] transition-colors hover:bg-[#D69A2B] hover:text-[#07111B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A2B]"
            >
              {showAllRegions ? "View Less" : "View More"}
              {showAllRegions ? (
                <ChevronUp size={18} aria-hidden="true" />
              ) : (
                <ChevronDown size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <RegionCard
              key={region.name}
              region={region}
              index={index}
              showAllRegions={showAllRegions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
