import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Check,
  X,
  ShieldCheck,
  Headphones,
  Users,
  TrendingUp,
  BadgeCheck,
  Sparkles,
  Coins,
  Ticket,
  CalendarClock,
} from "lucide-react";

// Visual theme per plan so each card keeps its own identity
// (green for Free, blue for 6 Months, gold for 12 Months) regardless
// of which one is currently selected.
const THEME = {
  green: {
    border: "border-gray-200",
    borderSelected: "border-green-400",
    check: "text-green-500",
    creditsBg: "bg-[#eef4ff]",
    creditsText: "text-blue-600",
    button: "border border-blue-500 text-blue-600 bg-white hover:bg-blue-50",
  },
  blue: {
    border: "border-blue-200",
    borderSelected: "border-blue-500",
    check: "text-blue-500",
    creditsBg: "bg-[#eef4ff]",
    creditsText: "text-blue-600",
    button: "bg-blue-600 text-white hover:bg-blue-700",
  },
  gold: {
    border: "border-[#f3cd85]",
    borderSelected: "border-[#dfa62f]",
    check: "text-[#dfa62f]",
    creditsBg: "bg-[#fff3d8]",
    creditsText: "text-[#b3841f]",
    button: "bg-[#dfa62f] text-white hover:bg-[#c9931f]",
  },
};

export default function Plans({ next, back, updateData, data }) {
  const [selected, setSelected] = useState(2);

  const plans = [
    {
      name: "FREE PLAN",
      subtitle: "Perfect to get started",
      price: "₹0",
      duration: "/ Lifetime",
      credits: "20 Credits",
      color: "green",
      cta: "Get Started Free",

      features: [
        "Share up to 4 RFQs",
        "Access to Global Marketplace",
        "View Buyer & Supplier Profiles",
        "Basic Product Listing",
        "Chat & Inquiries",
        "Email Support",
      ],
    },

    {
      name: "6 MONTHS PLAN",
      subtitle: "Grow your business faster",
      price: "₹2,999",
      duration: "/ 6 Months",
      credits: "300 Credits",
      color: "blue",
      cta: "Choose 6 Months Plan",

      features: [
        "All Free Plan Features",
        "Share Unlimited RFQs",
        "Priority Listing",
        "Advanced Search & Filters",
        "Buyer Insights",
        "Priority Email Support",
      ],
    },

    {
      name: "12 MONTHS PLAN",
      subtitle: "Go global with maximum benefits",
      price: "₹9,999",
      duration: "/ 12 Months",
      credits: "1000 Credits",
      color: "gold",
      cta: "Choose 12 Months Plan",
      verified: true,

      features: [
        "All 6 Months Plan Features",
        "Share Unlimited RFQs",
        "Verified Supplier Badge",
        "Top Ranking in Search Results",
        "Featured Listing",
        "Detailed Analytics & Reports",
        "Dedicated Account Manager",
        "Priority Support (24/7)",
      ],
    },
  ];

  const comparisonRows = [
    ["Credits", "20", "300", "1000"],
    ["RFQ Cost", "5 Credits", "5 Credits", "5 Credits"],
    ["RFQs You Can Share", "4", "Unlimited", "Unlimited"],
    ["Verified Supplier Badge", false, false, true],
    ["Priority Listing", false, true, true],
    ["Featured Listing", false, false, true],
    ["Dedicated Account Manager", false, false, true],
    ["Support", "Email", "Priority Email", "24/7 Priority"],
  ];

  const handleChoose = (index) => {
    setSelected(index);
    updateData({ plan: plans[index] });
    next();
  };

  const activePlan = plans[selected];

  return (
    <section className="bg-[#fafbff] min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#172343]">
            Create Your Account
          </h1>

          <p className="text-[#dfa62f] font-semibold mt-2">
            Step 5 of 5 - Choose Your Plan
          </p>
        </motion.div>

        <div className="bg-[#eef4ff] rounded-lg px-5 py-3 text-sm text-blue-700 mb-7">
          ⓘ Choose a plan that fits your business needs. You can upgrade or
          downgrade anytime.
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT AREA */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              {plans.map((plan, index) => {
                const theme = THEME[plan.color];
                const isSelected = selected === index;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setSelected(index)}
                    whileHover={{ y: -8 }}
                    className={`
                      relative
                      flex
                      flex-col
                      bg-white
                      rounded-xl
                      border-2
                      p-6
                      cursor-pointer
                      transition
                      ${
                        isSelected
                          ? `${theme.borderSelected} shadow-xl`
                          : theme.border
                      }
                    `}
                  >
                    {plan.color === "gold" && (
                      <div className="absolute right-0 top-0 bg-green-500 text-white text-[10px] font-bold tracking-wide px-3 py-1 rounded-bl-xl rounded-tr-xl">
                        BEST VALUE
                      </div>
                    )}

                    <h3 className="text-center font-bold text-[#172343] tracking-wide">
                      {plan.name}
                    </h3>

                    <p className="text-center text-sm text-gray-500 mt-1">
                      {plan.subtitle}
                    </p>

                    <h2 className="text-center text-3xl font-bold text-[#172343] mt-5">
                      {plan.price}
                      <span className="text-sm font-medium text-gray-500">
                        {plan.duration}
                      </span>
                    </h2>

                    <div
                      className={`${theme.creditsBg} ${theme.creditsText} text-center py-3 rounded-lg mt-5 font-bold text-sm`}
                    >
                      {plan.credits}
                    </div>

                    <div className="text-center text-xs text-gray-400 mt-2">
                      1 RFQ = 5 Credits
                    </div>

                    <ul className="mt-6 space-y-3 flex-1">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check
                            size={16}
                            className={`${theme.check} mt-0.5 shrink-0`}
                          />
                          <span>
                            {f}
                            {plan.verified &&
                              f === "Verified Supplier Badge" && (
                                <span className="ml-2 inline-flex items-center gap-1 bg-green-50 text-green-600 text-[10px] font-semibold px-2 py-0.5 rounded-full align-middle">
                                  <BadgeCheck size={11} />
                                  Verified
                                </span>
                              )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChoose(index);
                      }}
                      className={`
                        mt-8
                        w-full
                        py-3
                        rounded-lg
                        font-semibold
                        text-sm
                        transition
                        ${theme.button}
                      `}
                    >
                      {plan.cta}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Comparison Table */}
            <div className="mt-8 bg-white rounded-xl border overflow-hidden">
              <h3 className="p-5 font-bold text-[#172343]">
                Plan Features Comparison
              </h3>

              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-left text-[#172343] font-semibold">
                      Features
                    </th>

                    {plans.map((plan, i) => (
                      <th key={i} className="p-4 text-center">
                        <span className="block font-semibold text-[#172343]">
                          {plan.name.replace("PLAN", "").trim()} Plan
                        </span>
                        <span className="block text-xs font-normal text-gray-400 mt-0.5">
                          {plan.price}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => {
                    const [label, ...values] = row;

                    return (
                      <tr key={index} className="border-t">
                        <td className="p-3 text-left text-[#344054] font-medium">
                          {label}
                        </td>

                        {values.map((item, i) => (
                          <td
                            key={i}
                            className="p-3 text-center text-[#344054]"
                          >
                            {typeof item === "boolean" ? (
                              item ? (
                                <Check
                                  size={16}
                                  className="text-green-500 mx-auto"
                                />
                              ) : (
                                <X
                                  size={16}
                                  className="text-gray-300 mx-auto"
                                />
                              )
                            ) : (
                              item
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-3 space-y-5">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-bold text-[#172343]">Plan Summary</h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-2">
                  <Sparkles
                    size={14}
                    className="text-[#98a2b3] mt-1 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Plan</p>
                    <b className="text-sm text-[#172343]">
                      {activePlan.name
                        .replace("PLAN", "Plan")
                        .split(" ")
                        .map((w, i, arr) => (i === arr.length - 1 ? w : w))
                        .join(" ")}
                    </b>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Coins size={14} className="text-[#98a2b3] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Credits</p>
                    <b className="text-sm text-[#172343]">
                      {activePlan.credits}
                    </b>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Ticket size={14} className="text-[#98a2b3] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">RFQ Cost</p>
                    <b className="text-sm text-[#172343]">5 Credits per RFQ</b>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CalendarClock
                    size={14}
                    className="text-[#98a2b3] mt-1 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Valid For</p>
                    <b className="text-sm text-[#172343]">
                      {activePlan.duration.replace("/", "").trim()}
                    </b>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-[#fff8e8] p-3 rounded-lg flex gap-3">
                <ShieldCheck size={18} className="text-[#dfa62f] shrink-0" />

                <div>
                  <b className="text-sm text-[#172343]">
                    Verified Supplier Badge
                  </b>

                  <p className="text-xs text-gray-500 mt-0.5">
                    Stand out and build trust with global buyers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fff8eb] rounded-xl p-5">
              <h3 className="font-bold text-[#172343]">Why Upgrade?</h3>

              <ul className="mt-4 space-y-3 text-sm text-[#344054]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-blue-500 shrink-0" />
                  Get more RFQs & leads
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-blue-500 shrink-0" />
                  Increase brand visibility
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-blue-500 shrink-0" />
                  Build trust with verified badge
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-blue-500 shrink-0" />
                  Grow your business globally
                </li>
              </ul>
            </div>

            <div className="bg-[#eef5ff] rounded-xl p-5">
              <Headphones className="text-[#172343]" />

              <h3 className="font-bold mt-3 text-[#172343]">Need Help?</h3>

              <p className="text-sm mt-2 text-gray-500">
                Our support team is here to assist you at every step.
              </p>

              <p className="font-semibold mt-4 text-[#172343] text-sm">
                +91 98765 43210
              </p>

              <p className="text-sm text-[#172343]">
                support@igbnworldwide.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
