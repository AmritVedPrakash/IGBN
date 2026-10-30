import {
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Languages,
  Megaphone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { authorBenefits, publisherImages } from "./publishersData";

const benefitIcons = [
  Languages,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Languages,
  UserRound,
  ShieldCheck,
  UserRound,
  Megaphone,
  UserRound,
  BookOpen,
];

export default function PublishersDashboard() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-4 lg:grid-cols-[.95fr_1.05fr]">
        <div className="flex flex-col rounded-xl border border-[#725021]/70 bg-[#03111F] p-4">
          <SectionHeading title="Author Benefits" />
          <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3">
            {authorBenefits.map(([title, text], index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={title}
                  className="flex min-h-[108px] flex-col items-center justify-center rounded-lg border border-[#725021]/60 p-3 text-center"
                >
                  <Icon className="text-[#F0C168]" size={23} />
                  <h3 className="mt-2 font-bold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-1 leading-4 text-[#C7D1D9]">{text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-[#725021]/70 bg-[#03111F] p-4">
          <SectionHeading title="Your Author Dashboard" />
          <p className="mb-4 text-[#C7D1D9]">
            Manage your books, track performance and explore growth opportunities.
          </p>
          <div className="flex min-h-[360px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-[#725021]/60 bg-[#020D18] p-2">
            <img
              src={publisherImages.dashboard}
              alt="Author dashboard"
              className="max-h-[360px] w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="mb-4 border-b border-[#D69A2B]/60 pb-3">
      <h2 className="font-bold uppercase text-white">{title}</h2>
    </div>
  );
}
