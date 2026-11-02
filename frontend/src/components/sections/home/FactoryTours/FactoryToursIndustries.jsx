import { ArrowRight, Factory } from "lucide-react";
import { tourIndustries } from "./factoryToursData";
export default function FactoryToursIndustries() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-end justify-between border-b border-[#D69A2B]/60 pb-3">
          <h2 className="font-bold uppercase text-white">
            Industry Sectors We Cover
          </h2>
          <span className="font-semibold text-[#F0C168]">
            View all industries →
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {tourIndustries.map(([title, image]) => (
            <div
              key={title}
              className="overflow-hidden rounded-lg border border-[#725021]/70 bg-[#020D18]"
            >
              <img
                src={image}
                alt={title}
                className="h-24 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.classList.add("bg-[#10263A]");
                  event.currentTarget.removeAttribute("src");
                }}
              />
              <div className="flex items-center gap-1 p-2">
                <Factory className="shrink-0 text-[#F0C168]" size={15} />
                <p className="font-semibold leading-4 text-[#E2E5E8]">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
