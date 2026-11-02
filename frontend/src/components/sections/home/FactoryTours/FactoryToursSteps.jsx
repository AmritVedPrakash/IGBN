import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  FileText,
  Search,
  Users,
  WalletCards,
} from "lucide-react";
import { tourSteps } from "./factoryToursData";
const icons = [FileText, Search, Users, CreditCard, CalendarDays, MapIcon];
function MapIcon() {
  return <MapPinIcon />;
}
function MapPinIcon() {
  return <span className="text-[#F0C168]">⌖</span>;
}
export default function FactoryToursSteps() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          title="How It Works"
          subtitle="From a simple enquiry to a successful factory visit — all arranged by IGBN."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {tourSteps.map(([number, title, text], index) => {
            const Icon = icons[index];
            return (
              <article
                key={number}
                className="relative rounded-xl border border-[#725021]/70 bg-[#020D18] p-3"
              >
                <span className="absolute -top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#D69A2B] bg-[#F0C168] font-black text-[#07111B]">
                  {number}
                </span>
                <Icon className="mb-4 ml-auto text-[#F0C168]" size={25} />
                <h3 className="font-bold uppercase leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-2 leading-5 text-[#C7D1D9]">{text}</p>
                {index < 5 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 hidden text-[#F0C168] lg:block"
                    size={22}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
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
