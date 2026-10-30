import {
  ArrowUpRight,
  BarChart3,
  Camera,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
} from "lucide-react";
import { marketingServices } from "./marketingPRData";
import { SectionTitle } from "./MarketingPRPlans";

const icons = [PenTool, Sparkles, BarChart3, Camera, Megaphone, Search];

export default function MarketingPRServices() {
  return (
    <section className="bg-[#03111F] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <SectionTitle
          eyebrow="Our services"
          title="Everything your brand needs to grow"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {marketingServices.map(([title, image, ...items], index) => {
            const Icon = icons[index];
            return (
              <article
                key={title}
                className="group overflow-hidden rounded-xl border border-[#725021]/70 bg-[#020D18] transition hover:-translate-y-1 hover:border-[#D69A2B]"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020D18] via-[#020D18]/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#D69A2B] bg-[#020D18]/90 text-[#F0C168]">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight className="absolute right-3 top-3 text-[#F0C168] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold uppercase leading-tight text-white">
                    {title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-xs leading-4 text-[#C7D1D9]">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="before:mr-2 before:text-[#F0C168] before:content-['•']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
