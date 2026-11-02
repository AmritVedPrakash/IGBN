import { CheckCircle2, Coins, Plane, ShieldCheck } from "lucide-react";
import { tourPricing } from "./factoryToursData";

function PriceCard({ plan }) {
  const [title, price, unit, ...items] = plan;
  return (
    <article className="rounded-xl border border-[#D69A2B]/80 bg-[#020D18] p-4 text-center">
      <Coins className="mx-auto text-[#F0C168]" size={30} />
      <h3 className="mt-2 font-bold uppercase text-white">{title}</h3>
      <p className="factory-pricing-amount mt-2 font-black text-[#F0C168]">{price}</p>
      <p className="text-[#C7D1D9]">{unit}</p>
      <ul className="mt-4 space-y-2 text-left">
        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-5 text-[#E2E5E8]">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#F0C168]" size={16} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function FactoryToursPricing() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Simple, fair and no hidden charges."
        />
        <div className="grid items-center gap-2 lg:grid-cols-[1fr_38px_1fr_38px_1fr_1fr]">
          <PriceCard plan={tourPricing[0]} />
          <span className="factory-pricing-operator block">+</span>
          <PriceCard plan={tourPricing[1]} />
          <span className="factory-pricing-operator block">=</span>
          <PriceCard plan={tourPricing[2]} />
          <AdditionalCosts />
        </div>
      </div>
    </section>
  );
}

function AdditionalCosts() {
  return (
    <article className="rounded-xl border border-[#725021]/70 bg-[#020D18] p-4">
      <h3 className="font-bold uppercase text-white">Additional costs</h3>
      <div className="mt-3 space-y-4">
        <div className="flex gap-3">
          <Coins className="shrink-0 text-[#F0C168]" size={26} />
          <p className="leading-5 text-[#C7D1D9]">
            <strong className="block text-white">Applicable taxes (if any)</strong>
            Taxes are added at checkout based on your location.
          </p>
        </div>
        <div className="flex gap-3">
          <Plane className="shrink-0 text-[#F0C168]" size={26} />
          <p className="leading-5 text-[#C7D1D9]">
            <strong className="block text-white">Additional travel expenses</strong>
            Hotel, airfare, local transport and personal expenses are charged separately.
          </p>
        </div>
        <div className="flex gap-3">
          <ShieldCheck className="shrink-0 text-[#F0C168]" size={26} />
          <p className="leading-5 text-[#C7D1D9]">
            <strong className="block text-white">Refund policy</strong>
            The US$ 2 processing fee is fully refundable if we cannot arrange a suitable supplier meeting.
          </p>
        </div>
      </div>
      <a href="#contact" className="mt-4 inline-flex font-semibold text-[#F0C168]">
        Read full refund policy →
      </a>
    </article>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6 border-b border-[#D69A2B]/60 pb-3">
      <h2 className="font-bold uppercase text-white">{title}</h2>
      <p className="mt-1 text-[#C7D1D9]">{subtitle}</p>
    </div>
  );
}
