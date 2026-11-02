import { ArrowRight, Building2, Globe2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import factoryFallback from "../../../../assets/igbndivision/factorytours.png";
import { factoryTourImages } from "./factoryToursData";
export default function FactoryToursHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#725021]/70 bg-[#020D18] px-4 pb-10 pt-24 sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,154,43,0.17),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D69A2B]/60 bg-[#D69A2B]/10 px-4 py-2 font-semibold uppercase tracking-[0.16em] text-[#F0C168]">
            <Globe2 size={17} /> Your business visit partner in India
          </div>
          <h1 className="factory-hero-title font-black uppercase text-[#F4F5F6]">
            Visit. Meet.
            <br />
            <span className="text-[#F0C168]">Source.</span> Grow globally.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-[#C7D1D9]">
            We help international buyers, investors and business delegations
            visit India’s best verified manufacturers, meet the right suppliers
            and build long-term partnerships.
          </p>
          <Link
            to="/factory-tours/enquiry"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#E0AA48] to-[#C98A24] px-5 py-3 font-bold text-[#07111B]"
          >
            Start your factory tour <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#D69A2B]/70 bg-[#020D18] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <img
            src={factoryTourImages.hero}
            alt="IGBN Factory Tours"
            className="absolute h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = factoryFallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020D18] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 font-bold uppercase text-white">
            <MapPin className="text-[#F0C168]" size={28} /> Explore
            manufacturing hubs across India
          </div>
        </div>
      </div>
    </section>
  );
}
