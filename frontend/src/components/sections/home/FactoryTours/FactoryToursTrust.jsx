import {
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Headphones,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { factoryTourImages, tourFaqs } from "./factoryToursData";
export default function FactoryToursTrust() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-[#725021]/70 bg-[#020D18] p-4">
          <SectionHeading title="Why Global Buyers Trust IGBN" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Verified and reliable Indian suppliers",
              "Deep local market knowledge",
              "Professional and transparent process",
              "End-to-end travel and meeting support",
              "No commission on your business deals",
              "Focus on your business success",
            ].map((point, index) => (
              <div key={point} className="flex gap-2 text-[#E2E5E8]">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#F0C168]"
                  size={18}
                />
                {point}
              </div>
            ))}
          </div>
          <img
            src={factoryTourImages.trust}
            alt="Buyer and supplier meeting"
            className="mt-5 h-48 w-full rounded-lg object-cover"
          />
        </div>
        <div className="rounded-xl border border-[#725021]/70 bg-[#020D18] p-4">
          <div className="mb-5 flex items-center justify-between border-b border-[#D69A2B]/60 pb-3">
            <h2 className="font-bold uppercase text-white">
              Frequently Asked Questions
            </h2>
            <HelpCircle className="text-[#F0C168]" size={24} />
          </div>
          <div className="space-y-2">
            {tourFaqs.map((question) => (
              <div
                key={question}
                className="flex items-center justify-between rounded-md border border-[#725021]/60 px-3 py-3 text-[#E2E5E8]"
              >
                <span>{question}</span>
                <ChevronDown className="shrink-0 text-[#F0C168]" size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionHeading({ title }) {
  return (
    <div className="mb-5 border-b border-[#D69A2B]/60 pb-3">
      <h2 className="font-bold uppercase text-white">{title}</h2>
    </div>
  );
}
