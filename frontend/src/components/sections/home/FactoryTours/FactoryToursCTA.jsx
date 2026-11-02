import { ArrowRight, Headphones, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { factoryTourImages } from "./factoryToursData";
export default function FactoryToursCTA() {
  return (
    <section
      id="contact"
      className="bg-[#020D18] px-4 pb-14 pt-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1500px] gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-[#D69A2B]/70 bg-[#020D18] p-5">
          <Headphones className="text-[#F0C168]" size={32} />
          <h2 className="mt-3 font-bold uppercase text-white">
            Need Assistance?
          </h2>
          <p className="mt-2 text-[#C7D1D9]">
            Our team is here to help you plan the right factory tour in India.
          </p>
          <p className="mt-3 text-[#E2E5E8]">
            factorytours@igbnworldwide.com
            <br />
            +91 9765 43210
          </p>
        </div>
        <div className="relative min-h-[190px] overflow-hidden rounded-xl border border-[#D69A2B]/70">
          <img
            src={factoryTourImages.monument}
            alt="Visit India's best manufacturers"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020D18]/90 to-transparent" />
          <div className="relative p-5">
            <MapPin className="text-[#F0C168]" size={26} />
            <h2 className="mt-3 font-bold uppercase text-white">
              Ready to Visit India’s Best Manufacturers?
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-[#D69A2B]/70 bg-[#020D18] p-5">
          <p className="font-bold uppercase text-[#F0C168]">
            Start your factory tour
          </p>
          <h2 className="mt-2 font-bold uppercase text-white">
            Meet. Source. Grow.
          </h2>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#F0C168] px-4 py-3 font-bold text-[#07111B]"
          >
            Start your factory tour <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
