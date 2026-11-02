import {
  Building2,
  Car,
  Handshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { tourBenefits } from "./factoryToursData";
const icons = [ShieldCheck, Building2, Users, Car, MapPin, Handshake];
export default function FactoryToursBenefits() {
  return (
    <section className="bg-[#020D18] px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-2 rounded-xl border border-[#725021]/70 bg-[#020D18] p-3 sm:grid-cols-3 lg:grid-cols-6">
        {tourBenefits.map(([title, text], index) => {
          const Icon = icons[index];
          return (
            <div
              key={title}
              className="p-3 text-center lg:border-r lg:border-[#725021]/70 last:border-0"
            >
              <Icon className="mx-auto text-[#F0C168]" size={26} />
              <h3 className="mt-2 font-bold uppercase leading-tight text-white">
                {title}
              </h3>
              <p className="mt-1 leading-5 text-[#C7D1D9]">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
