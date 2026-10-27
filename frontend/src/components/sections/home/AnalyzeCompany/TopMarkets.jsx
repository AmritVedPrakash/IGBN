import { ArrowRight, MapPin, TrendingUp } from "lucide-react";
import { countryBuyerPotential, demoMarkets } from "./analysisData";
import ProductVisual from "./ProductVisual";

export default function TopMarkets() {
  return (
    <section
      id="top-markets"
      className="scroll-mt-32 overflow-hidden rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#F4F5F6]">
            Top Export Markets for Your Products
          </h2>
          <p className="mt-1 text-[15px] leading-6 text-[#AEB8C2]">
            Sample destinations with strong demand and buyer potential.
          </p>
        </div>
        <a
          href="#buyer-opportunities"
          className="inline-flex min-h-10 items-center gap-1 text-[15px] font-semibold text-[#D69A2B] hover:text-[#E6B75E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A2B]"
        >
          View all markets <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-[#263C50] bg-[#061522]">
          <ProductVisual
            assetName="world-market-map"
            icon="company"
            className="absolute inset-0 h-full w-full opacity-55"
            imageClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020D18]/95 via-[#020D18]/25 to-[#020D18]/10" />
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#D69A2B]/40 bg-[#020D18]/80 px-2.5 py-1 text-[15px] font-medium text-[#E6B75E]">
            <MapPin size={18} aria-hidden="true" /> Priority markets
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {demoMarkets.slice(0, 3).map((market) => (
              <span
                key={market.country}
                className="rounded-md border border-white/10 bg-[#020D18]/80 px-2 py-1 text-[15px] text-[#F4F5F6]"
              >
                {market.country}
              </span>
            ))}
          </div>
        </div>

        <ol className="divide-y divide-white/[0.06] rounded-lg border border-[#263C50] bg-[#061522]">
          {demoMarkets.map((market, index) => (
            <li
              key={market.country}
              className="flex items-center gap-2.5 px-3 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102438] text-[15px] font-bold text-[#E6B75E]">
                {index + 1}
              </span>
              <img
                src={market.flag}
                alt=""
                aria-hidden="true"
                className="h-4 w-6 shrink-0 rounded-[2px] object-cover"
              />
              <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-[#E2E5E8]">
                {market.country}
              </span>
              <span className="hidden items-center gap-1 text-[15px] text-[#AEB8C2] sm:inline-flex">
                <TrendingUp
                  size={16}
                  aria-hidden="true"
                  className="text-[#D69A2B]"
                />
                {market.score}%
              </span>
              <span className="w-10 text-right text-[15px] font-semibold text-[#F4F5F6]">
                {market.buyers}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BuyerPotential() {
  const countries = countryBuyerPotential;

  return (
    <section
      id="buyer-opportunities"
      className="scroll-mt-32 rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-bold text-[#F4F5F6]">
          Buyer Potential by Country
        </h2>
        <span
          title="Static sample buyer estimates"
          className="rounded-full border border-[#725021]/70 px-2 py-0.5 text-[15px] text-[#AEB8C2]"
        >
          Sample
        </span>
      </div>
      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b border-[#725021]/50 pb-2 text-[15px] uppercase tracking-wide text-[#AEB8C2]">
        <span>Country</span>
        <span>Potential buyers</span>
      </div>
      <ol className="divide-y divide-white/[0.05]">
        {countries.map((country, index) => (
          <li
            key={country.country}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-2.5"
          >
            <span className="flex min-w-0 items-center gap-2">
              <img
                src={country.flag}
                alt=""
                aria-hidden="true"
                className="h-4 w-6 shrink-0 rounded-[2px] object-cover"
              />
              <span className="truncate text-[15px] text-[#D8DDE2]">
                {country.country}
              </span>
            </span>
            <span className="flex items-center gap-2 text-[15px] font-semibold text-[#F4F5F6]">
              <span className="hidden h-1.5 w-14 overflow-hidden rounded-full bg-[#14293B] sm:block">
                <span
                  className="block h-full rounded-full bg-[#D69A2B]"
                  style={{ width: `${country.score}%` }}
                />
              </span>
              {country.buyers}
              {index === 0 && (
                <ArrowRight
                  size={13}
                  aria-hidden="true"
                  className="text-[#AEB8C2]"
                />
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
