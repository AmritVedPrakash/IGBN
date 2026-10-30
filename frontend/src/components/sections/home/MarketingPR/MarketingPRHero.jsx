import { ArrowRight, Globe2, Megaphone, Play } from "lucide-react";
import { Link } from "react-router-dom";
import marketingPRImage from "../../../../assets/igbndivision/marketingpr.png";
import { marketingPRImages } from "./marketingPRData";

export default function MarketingPRHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#725021]/70 bg-[#020D18] px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,154,43,0.17),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D69A2B]/60 bg-[#D69A2B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0C168]">
            <Globe2 size={15} /> Global visibility partners
          </div>
        <h1 className="marketing-hero-title max-w-3xl text-4xl font-black uppercase leading-[0.98] text-[#F4F5F6] sm:text-6xl lg:text-7xl">
            Build brands.
            <br />
            <span className="text-[#F0C168]">Build trust.</span>
            <br />
            Create impact.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#C7D1D9] sm:text-lg">
            A strategic marketing and PR partner for manufacturers, exporters
            and global businesses. From local visibility to global growth, we
            make your brand trusted, remembered and chosen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#E0AA48] to-[#C98A24] px-5 py-3 font-bold text-[#07111B]"
            >
              Start a conversation <ArrowRight size={18} />
            </Link>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 rounded-md border border-[#D69A2B] px-5 py-3 font-semibold text-[#F0C168]"
            >
              <Play size={16} /> Explore plans
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-[#725021]/70 pt-5 text-center sm:text-left">
            <div>
              <strong className="text-2xl text-[#F0C168]">500+</strong>
              <span className="block text-xs uppercase tracking-wider text-[#AEBBC6]">
                Clients worldwide
              </span>
            </div>
            <div>
              <strong className="text-2xl text-[#F0C168]">21+</strong>
              <span className="block text-xs uppercase tracking-wider text-[#AEBBC6]">
                Countries covered
              </span>
            </div>
            <div>
              <strong className="text-2xl text-[#F0C168]">15+</strong>
              <span className="block text-xs uppercase tracking-wider text-[#AEBBC6]">
                Industries served
              </span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[#D69A2B]/70 bg-[#03111F] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <img
            src={marketingPRImages.hero}
            alt="Marketing and PR"
            className="absolute h-full w-full object-cover opacity-25"
            onError={(event) => {
              event.currentTarget.src = marketingPRImage;
            }}
          />
          <div className="relative flex min-h-[330px] flex-col justify-end bg-gradient-to-t from-[#020D18] via-[#020D18]/55 to-transparent p-6 sm:min-h-[430px] sm:p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D69A2B] bg-[#020D18] text-[#F0C168]">
              <Megaphone size={28} />
            </div>
            <p className="max-w-md text-2xl font-bold uppercase text-white sm:text-4xl">
              Make your brand impossible to ignore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
