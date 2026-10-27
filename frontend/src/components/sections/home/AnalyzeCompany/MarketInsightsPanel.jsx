import {
  ArrowUpRight,
  Leaf,
  LockKeyhole,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { buyerSegments, keyInsights } from "./analysisData";

const insightIcons = {
  leaf: Leaf,
  shield: LockKeyhole,
  shopping: ShoppingCart,
  trend: TrendingUp,
};

export function KeyMarketInsights() {
  return (
    <section
      id="market-insights"
      className="scroll-mt-32 rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <h2 className="text-base font-bold text-[#F4F5F6]">Key Market Insights</h2>
      <ul className="mt-4 space-y-4">
        {keyInsights.map(({ icon, title, description }) => {
          const Icon = insightIcons[icon];

          return (
            <li key={title} className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D69A2B]/30 bg-[#D69A2B]/10 text-[#D69A2B]">
                <Icon size={19} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#E6B75E]">{title}</h3>
                <p className="mt-1 text-[15px] leading-6 text-[#B9C2CB]">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function BuyerSegments() {
  return (
    <section
      id="recommendations"
      className="scroll-mt-32 rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <h2 className="text-base font-bold text-[#F4F5F6]">Key Buyer Segments</h2>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
        {buyerSegments.map((segment) => (
          <div
            key={segment}
            className="flex items-center gap-2 rounded-lg bg-[#061522] px-3 py-2 text-[15px] text-[#D8DDE2]"
          >
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#D69A2B]"
            />
            {segment}
          </div>
        ))}
      </div>
    </section>
  );
}
