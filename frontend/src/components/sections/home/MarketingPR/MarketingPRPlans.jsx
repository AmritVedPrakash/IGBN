import { Check, ArrowRight } from "lucide-react";
import { marketingPlans } from "./marketingPRData";

export default function MarketingPRPlans() {
  return (
    <section id="plans" className="bg-[#020D18] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <SectionTitle
          eyebrow="Our plans"
          title="Flexible plans for every stage of your business journey"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {marketingPlans.map((plan) => (
            <article
              key={plan.number}
              className="flex flex-col overflow-hidden rounded-xl border border-[#725021]/80 bg-[#03111F] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div
                className="border-b-4 p-4"
                style={{ borderColor: plan.color }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-3xl font-black"
                    style={{ color: plan.color }}
                  >
                    {plan.number}
                  </span>
                  <span
                    className="rounded-full px-2 py-1 text-[10px] font-bold uppercase text-white"
                    style={{ backgroundColor: plan.color }}
                  >
                    Plan
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold uppercase leading-tight text-white">
                  {plan.title}
                </h3>
                <p className="mt-2 min-h-10 text-xs text-[#B9C5CE]">
                  {plan.audience}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-4">
                  <span className="marketing-plan-price text-3xl font-black text-[#F0C168]">
                    {plan.price === "Custom" ? plan.price : `₹${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="marketing-plan-price text-xs text-[#AEBBC6]"> / Month</span>
                  )}
                </div>
                <ul className="flex-1 space-y-2 text-xs text-[#DCE3E8]">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check size={14} className="shrink-0 text-[#F0C168]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#F0C168] px-3 py-2 text-sm font-bold text-[#07111B]"
                >
                  Get started <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F0C168]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold uppercase text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
