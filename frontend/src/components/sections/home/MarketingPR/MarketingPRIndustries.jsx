import {
  Building2,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Utensils,
  Users,
} from "lucide-react";
import { marketingIndustries } from "./marketingPRData";

const icons = [
  Factory,
  Building2,
  ShoppingBag,
  Utensils,
  HeartPulse,
  Landmark,
  Users,
  Globe2,
  GraduationCap,
];

export default function MarketingPRIndustries() {
  return (
    <div className="rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 sm:p-5">
      <div className="mb-5 flex items-center gap-2 border-b border-[#D69A2B]/60 pb-3">
        <span className="h-3 w-1 rounded-full bg-[#F0C168]" />
        <h2 className="text-xl font-bold uppercase text-white">
          Industries We Serve
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {marketingIndustries.map((industry, index) => {
          const Icon = icons[index];
          return (
            <div
              key={industry}
              className="rounded-lg border border-[#725021]/70 bg-[#020D18] p-3 text-center"
            >
              <Icon className="mx-auto text-[#F0C168]" size={23} />
              <p className="mt-2 text-[15px] font-semibold uppercase leading-5 text-[#E2E5E8]">
                {industry}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
