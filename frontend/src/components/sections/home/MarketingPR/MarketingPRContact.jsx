import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
export default function MarketingPRContact() {
  return (
    <section
      id="contact"
      className="bg-[#020D18] px-4 pb-16 pt-12 sm:px-6 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 rounded-2xl border border-[#D69A2B]/70 bg-gradient-to-r from-[#071B2B] to-[#152338] p-7 text-center sm:p-10 lg:flex-row lg:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F0C168]">
            Ready to grow your brand?
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase text-white sm:text-4xl">
            Let’s create your global impact.
          </h2>
          <p className="mt-3 text-[#C7D1D9]">
            Talk to our team and create a customized plan today.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#F0C168] px-6 py-3 font-bold text-[#07111B]"
        >
          <MessageCircle size={18} /> Let’s connect <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
