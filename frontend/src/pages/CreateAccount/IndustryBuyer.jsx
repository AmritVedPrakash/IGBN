import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Check,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Pencil,
  Wheat,
  Bean,
  Candy,
  Flame,
  Apple,
  Carrot,
  Droplet,
  Coffee,
  MoreHorizontal,
  Shirt,
  Car,
  FlaskConical,
  Building2,
  Zap,
  Cog,
  Gem,
  Package,
  Pill,
  Users,
  TrendingUp,
  Handshake,
  Globe2,
  Headphones,
} from "lucide-react";

import { industries, products, buyers } from "../../data/industryBuyerData";

// Maps an industry / sub-industry name to a representative icon.
// Falls back to a generic icon if no match is found, so this keeps
// working even if the data file adds new entries later.
const getIndustryIcon = (name = "") => {
  const key = name.toLowerCase();

  if (key.includes("rice")) return Wheat;
  if (key.includes("wheat")) return Wheat;
  if (key.includes("pulse")) return Bean;
  if (key.includes("sugar")) return Candy;
  if (key.includes("spice")) return Flame;
  if (key.includes("fruit")) return Apple;
  if (key.includes("vegetable")) return Carrot;
  if (key.includes("oil")) return Droplet;
  if (key.includes("tea") || key.includes("coffee")) return Coffee;
  if (key.includes("more") || key.includes("other")) return MoreHorizontal;

  if (key.includes("agriculture") || key.includes("food")) return Wheat;
  if (key.includes("apparel") || key.includes("textile")) return Shirt;
  if (key.includes("automobile") || key.includes("parts")) return Car;
  if (key.includes("chemical")) return FlaskConical;
  if (key.includes("construction") || key.includes("real estate"))
    return Building2;
  if (key.includes("electronic") || key.includes("electrical")) return Zap;
  if (key.includes("machinery") || key.includes("equipment")) return Cog;
  if (key.includes("metal") || key.includes("mineral")) return Gem;
  if (key.includes("packaging")) return Package;
  if (key.includes("pharma") || key.includes("health")) return Pill;
  if (key.includes("service")) return Users;

  return MoreHorizontal;
};

// Small orange tick badge shown on the corner of a selected card.
function SelectedBadge() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="
        absolute
        -top-2
        -right-2
        h-5
        w-5
        rounded-full
        bg-[#f2a93b]
        flex
        items-center
        justify-center
        shadow-sm
        ring-2
        ring-white
      "
    >
      <Check size={12} strokeWidth={3} className="text-white" />
    </motion.div>
  );
}

export default function IndustryBuyer({ next, back, updateData, data }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedBuyer, setSelectedBuyer] = useState([]);

  const toggleBuyer = (index) => {
    if (selectedBuyer.includes(index)) {
      setSelectedBuyer(selectedBuyer.filter((i) => i !== index));
    } else {
      setSelectedBuyer([...selectedBuyer, index]);
    }
  };

  const handleContinue = () => {
    updateData({
      industryDetails: {
        industry: industries[selectedIndustry],
        product: products[selectedProduct],
        buyers: selectedBuyer.map((i) => buyers[i]),
      },
    });

    next();
  };

  const benefits = [
    { icon: TrendingUp, text: "Increase your sales opportunities" },
    { icon: Handshake, text: "Build long-term business relationships" },
    { icon: Globe2, text: "Expand your global reach" },
  ];

  return (
    <section className="min-h-screen bg-[#fafbff] py-10">
      <div className="max-w-[1450px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#172343]">
            Create Your Account
          </h1>

          <p className="mt-2 text-[#dfa62f] font-semibold">
            Step 3 of 5 - Select Industry & Buyers
          </p>
        </motion.div>

        {/* Info */}
        <div className="bg-[#eef4ff] rounded-lg px-5 py-3 text-sm text-blue-700 mb-6">
          ⓘ Select your industry, the products you deal in and see who can buy
          from you.
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* LEFT SIDE */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-xl border p-5 h-fit">
            <h3 className="font-bold text-[#172343] mb-4">All Industries</h3>

            {industries.map((item, index) => {
              const Icon = getIndustryIcon(item);
              const active = selectedIndustry === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`
                    py-3.5
                    px-4
                    rounded-lg
                    cursor-pointer
                    text-sm
                    transition
                    flex
                    items-center
                    gap-3
                    ${
                      active
                        ? "bg-[#fff3d8] text-[#d89d22] font-semibold"
                        : "text-[#475467] hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={active ? "text-[#d89d22]" : "text-[#98a2b3]"}
                  />
                  {item}
                </div>
              );
            })}

            <div className="mt-8 bg-[#eef5ff] rounded-xl p-4">
              <ShieldCheck className="text-blue-600" />

              <p className="mt-3 font-bold text-sm text-[#172343]">
                100% Verified Network
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Connect only with genuine businesses worldwide.
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-span-12 lg:col-span-6">
            <h3 className="font-bold text-[#172343] mb-4 text-base">
              1. Select Your Industry
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {industries.slice(0, 8).map((item, index) => {
                const Icon = getIndustryIcon(item);
                const active = selectedIndustry === index;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedIndustry(index)}
                    whileHover={{ y: -5 }}
                    className={`
                      relative
                      bg-white
                      border
                      rounded-xl
                      p-5
                      text-center
                      cursor-pointer
                      transition
                      ${
                        active
                          ? "border-[#dfa62f] bg-[#fffaf0]"
                          : "border-gray-200"
                      }
                    `}
                  >
                    {active && <SelectedBadge />}

                    <Icon
                      size={26}
                      className={`mx-auto mb-2 ${
                        active ? "text-[#dfa62f]" : "text-[#667085]"
                      }`}
                    />

                    <p className="text-sm font-semibold text-[#172343]">
                      {item}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <h3 className="font-bold text-[#172343] mb-4 text-base">
              2. Select Your Rice Types (Products You Deal In)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((item, index) => {
                const active = selectedProduct === index;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedProduct(index)}
                    whileHover={{ scale: 1.03 }}
                    className={`
                      relative
                      bg-white
                      border
                      rounded-xl
                      p-4
                      cursor-pointer
                      text-center
                      ${
                        active
                          ? "border-[#dfa62f] bg-[#fffaf0]"
                          : "border-gray-200"
                      }
                    `}
                  >
                    {active && <SelectedBadge />}

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 mx-auto object-contain"
                    />

                    <p className="text-xs mt-3 font-semibold text-[#172343]">
                      {item.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <h3 className="font-bold text-[#172343] mt-8 mb-4">
              3. Who Can Buy From You?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {buyers.map((item, index) => {
                const active = selectedBuyer.includes(index);

                return (
                  <div
                    key={index}
                    onClick={() => toggleBuyer(index)}
                    className={`
                      relative
                      bg-white
                      border
                      rounded-xl
                      p-4
                      cursor-pointer
                      transition
                      ${
                        active
                          ? "border-[#dfa62f] bg-[#fffaf0]"
                          : "border-gray-200"
                      }
                    `}
                  >
                    {active && <SelectedBadge />}

                    <h4 className="font-semibold text-sm text-[#172343]">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-bold text-[#172343]">
                Your Selection Summary
              </h3>

              <p className="mt-5 text-xs text-gray-500">Industry</p>
              <b className="text-sm text-[#172343]">
                {industries[selectedIndustry]}
              </b>

              <p className="mt-5 text-xs text-gray-500">Rice Types</p>
              <b className="text-sm text-[#172343]">
                {products[selectedProduct]?.name}
              </b>

              <p className="mt-5 text-xs text-gray-500">Buyers</p>
              <b className="text-sm text-[#172343]">
                {selectedBuyer.length} Selected
              </b>

              <button
                type="button"
                className="
                  mt-5
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  py-2
                  text-xs
                  font-semibold
                  text-[#172343]
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-gray-50
                "
              >
                <Pencil size={13} />
                Edit Selection
              </button>
            </div>

            <div className="bg-[#eefaf6] rounded-xl border border-[#d3f0e6] p-5">
              <h4 className="font-bold text-sm text-[#172343]">
                Why select the right buyers?
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                Get discovered by the right businesses who are actively looking
                for products like yours.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {benefits.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={14} className="text-teal-600 shrink-0" />
                    <span className="text-xs text-[#344054]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border p-5">
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-[#172343]" />
                <h4 className="font-bold text-sm text-[#172343]">Need Help?</h4>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Our support team is here to assist you at every step.
              </p>

              <p className="text-xs font-semibold text-teal-600 mt-3">
                +91 98765 43210
              </p>
              <p className="text-xs text-[#172343]">
                support@igbnworldwide.com
              </p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-10">
          <button
            onClick={back}
            className="
              border
              bg-white
              border-gray-300
              px-7
              py-3
              rounded-lg
              flex
              items-center
              gap-2
              font-semibold
              text-sm
              text-[#172343]
              hover:bg-gray-50
            "
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <button
            onClick={handleContinue}
            className="
              bg-[#071a3a]
              text-white
              px-8
              py-3
              rounded-lg
              flex
              items-center
              gap-2
              font-semibold
              text-sm
              hover:bg-[#102957]
            "
          >
            Save & Continue
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
