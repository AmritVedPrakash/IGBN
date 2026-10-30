import {
  Eye,
  Gem,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { marketingPRImages } from "./marketingPRData";

const outcomes = [
  [Gem, "Stronger", "Brand Identity"],
  [Eye, "Greater", "Visibility"],
  [Target, "Qualified", "Leads"],
  [Star, "Stronger", "Reputation"],
  [TrendingUp, "Market", "Expansion"],
];

const stories = [
  {
    image: marketingPRImages.storyRajiv,
    quote: "IGBN helped us build a strong international presence. Our branding and export enquiries increased significantly.",
    name: "Rajiv Mehta",
    role: "Director, Engineering Company",
  },
  {
    image: marketingPRImages.storyNeha,
    quote: "Their digital marketing and PR support helped us reach new international markets and improve our visibility.",
    name: "Neha Sharma",
    role: "Founder, FMCG Brand",
  },
  {
    image: marketingPRImages.storyMichael,
    quote: "Professional, strategic and result-oriented. The IGBN team understood our business and delivered great results.",
    name: "Michael Tan",
    role: "Export Head, Food Company",
  },
];

function ClientImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-20 w-16 shrink-0 rounded-md object-cover"
      onError={(event) => {
        event.currentTarget.classList.add("bg-[#10263A]");
        event.currentTarget.removeAttribute("src");
      }}
    />
  );
}

export default function MarketingPRResults() {
  return (
    <section className="bg-[#020D18] px-4 pb-12 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-[0.95fr_2.05fr]">
        <div className="rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 sm:p-5">
          <div className="mb-5 flex items-center gap-2 border-b border-[#D69A2B]/60 pb-3">
            <span className="h-3 w-1 rounded-full bg-[#F0C168]" />
            <h2 className="font-bold uppercase text-white">Measurable Outcomes</h2>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {outcomes.map(([Icon, title, label]) => (
              <div key={label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D69A2B] bg-[#071B2B] text-[#F0C168]">
                  <Icon size={22} />
                </div>
                <p className="mt-2 font-semibold leading-4 text-[#E2E5E8]">{title}</p>
                <p className="leading-4 text-[#C7D1D9]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between border-b border-[#D69A2B]/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-1 rounded-full bg-[#F0C168]" />
              <h2 className="font-bold uppercase text-white">Client Success Stories</h2>
            </div>
            <a href="#contact" className="font-semibold text-[#F0C168]">View More Stories →</a>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.name} className="flex gap-3 rounded-lg border border-[#725021]/60 bg-[#020D18] p-3">
                <ClientImage src={story.image} alt={story.name} />
                <div>
                  <p className="leading-5 text-[#E2E5E8]">“{story.quote}”</p>
                  <div className="mt-2 flex gap-0.5 text-[#F0C168]">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" />)}
                  </div>
                  <p className="mt-1 font-bold text-white">{story.name}</p>
                  <p className="text-[#AEBBC6]">{story.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
