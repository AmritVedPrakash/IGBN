import {
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  Gem,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const stats = [
  { icon: Gem, value: "12", label: "High-potential export markets" },
  { icon: UsersRound, value: "480+", label: "Potential buyers identified" },
  { icon: ChartNoAxesColumnIncreasing, value: "High", label: "Global demand outlook" },
  { icon: ShieldCheck, value: "Strong", label: "Product market fit" },
];

const strengths = [
  "Premium quality & design",
  "Wide product range",
  "Strong global demand",
  "Suitable for private label",
  "Retail and e-commerce opportunities",
];

export default function ExecutiveSummary({ companyName }) {
  return (
    <section
      id="executive-summary"
      className="scroll-mt-32 rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold uppercase tracking-[0.16em] text-[#D69A2B]">
            Company analysis
          </p>
          <h2 className="mt-1 text-xl font-bold text-[#F4F5F6] sm:text-2xl">
            Executive Summary
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-6 text-[#C6CED6]">
            Based on the submitted company profile, {companyName} has promising
            potential in international markets. The sample report indicates
            attractive demand for premium leather goods, with opportunities
            across retail, fashion, and e-commerce.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D69A2B]/40 bg-[#D69A2B]/10 px-2.5 py-1 text-[15px] font-medium text-[#E6B75E]">
          <BadgeCheck size={18} aria-hidden="true" />
          Sample report
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="rounded-lg border border-[#725021]/50 bg-[#061522] p-3"
          >
            <Icon size={17} aria-hidden="true" className="text-[#D69A2B]" />
            <p className="mt-2 text-[15px] font-bold leading-tight text-[#F4F5F6]">
              {value}
            </p>
            <p className="mt-1 text-[15px] leading-5 text-[#AEB8C2]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength) => (
          <p
            key={strength}
            className="flex items-center gap-2 text-[15px] leading-5 text-[#D8DDE2]"
          >
            <BadgeCheck
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#D69A2B]"
            />
            {strength}
          </p>
        ))}
      </div>
    </section>
  );
}
