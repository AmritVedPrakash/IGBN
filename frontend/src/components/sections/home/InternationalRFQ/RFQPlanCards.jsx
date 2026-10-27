import React from "react";
import { BadgeCheck, CheckCircle2, Coins, Crown, Gem } from "lucide-react";

const plans = [
  {
    name: "Credit Plans",
    icon: Coins,
    description: "Perfect for suppliers who want flexible access and pay only for RFQs they unlock.",
    tiers: [
      { credits: "15 RFQ Credits", price: "₹1,500" },
      { credits: "25 RFQ Credits", price: "₹2,500" },
    ],
  },
  {
    name: "Membership Plan",
    subtitle: "Full Portal Access",
    duration: "6 Months",
    icon: Gem,
    price: "₹8,900",
    popular: true,
    description: "A complete toolkit for regular business opportunities.",
    features: [
      "50 RFQ Credits (Unlock 10 RFQs)",
      "Access to all active RFQs",
      "Advanced search & filters",
      "Save and shortlist RFQs",
      "Market insights and buyer trends",
      "Email alerts for new RFQs",
      "Priority support",
    ],
  },
  {
    name: "Premium Plan",
    subtitle: "Global Expansion with IGBN",
    duration: "12 Months",
    icon: Crown,
    price: "₹16,900",
    description: "For serious exporters who want maximum opportunities and premium platform benefits.",
    features: [
      "120 RFQ Credits (Unlock 24 RFQs)",
      "Access to all active RFQs",
      "Advanced search & filters",
      "Save and shortlist RFQs",
      "Market insights and buyer trends",
      "Email alerts for new RFQs",
      "Priority support",
      "15 Days Free Advertisement on Buyer Pages",
      "Early access to premium buyer opportunities",
    ],
  },
];

function PlanButton({ children }) {
  return (
    <a
      href="/create-account"
      className="mt-auto inline-flex min-h-10 w-full items-center justify-center rounded-md border border-[#D69A2B] bg-gradient-to-r from-[#E0AA48] via-[#D99B2B] to-[#C98A24] px-4 py-2 text-sm font-bold text-[#07111B] shadow-[0_6px_18px_rgba(214,154,43,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(214,154,43,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
    >
      {children}
    </a>
  );
}

export default function RFQPlanCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan) => {
        const Icon = plan.icon;

        return (
          <article
            key={plan.name}
            className="relative flex h-full flex-col overflow-hidden rounded-lg border border-[#725021]/80 bg-[#03111F] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          >
            {plan.popular && (
              <span className="absolute right-0 top-0 rounded-bl-md bg-[#D69A2B] px-3 py-1 text-[10px] font-bold text-[#07111B]">
                Most Popular
              </span>
            )}

            <div className="flex items-start gap-3">
              <Icon className="mt-0.5 shrink-0 text-[#D69A2B]" size={21} />
              <div>
                <h3 className="text-[26px] font-bold leading-tight text-[#F4F5F6] sm:text-[27px]">
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="mt-1 text-sm font-semibold text-[#D69A2B]">
                    {plan.subtitle}
                  </p>
                )}
                {plan.duration && (
                  <p className="text-sm font-semibold text-[#E2E5E8]">
                    {plan.duration}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-2 text-base leading-6 text-[#AAB2BA]">
              {plan.description}
            </p>

            {plan.tiers ? (
              <div className="mt-4 space-y-3">
                {plan.tiers.map((tier) => (
                  <div
                    key={tier.credits}
                    className="rounded-md border border-[#725021]/70 bg-[#020D18] p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[#E2E5E8]">
                        {tier.credits}
                      </span>
                      <span className="text-sm font-bold text-[#F4F5F6]">
                        {tier.price}
                      </span>
                    </div>
                    <p className="mt-1 text-[15px] text-[#AAB2BA]">
                      5 Credits = 1 RFQ Unlock · 30 Days Validity
                    </p>
                    <PlanButton>Get Started</PlanButton>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[15px] leading-4 text-[#E2E5E8]"
                    >
                      {feature.includes("Advertisement") ? (
                        <BadgeCheck
                          size={14}
                          className="mt-0.5 shrink-0 text-[#D69A2B]"
                        />
                      ) : (
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-[#D69A2B]"
                        />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-center text-xl font-bold text-[#F4F5F6]">
                  {plan.price}
                </p>
                <PlanButton>Get Started</PlanButton>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}
