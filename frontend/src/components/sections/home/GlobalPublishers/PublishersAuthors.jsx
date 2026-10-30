import { Star } from "lucide-react";
import { authors } from "./publishersData";

export default function PublishersAuthors() {
  return (
    <section className="bg-[#020D18] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-5 border-b border-[#D69A2B]/60 pb-3">
          <h2 className="font-bold uppercase text-white">Authors Speak</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {authors.map(([image, name, role, quote]) => (
            <article
              key={name}
              className="flex min-h-[230px] items-start gap-5 rounded-xl border border-[#725021]/70 bg-[#03111F] p-5"
            >
              <img
                src={image}
                alt={name}
                className="h-32 w-24 shrink-0 rounded-lg object-cover object-top"
                onError={(event) => {
                  event.currentTarget.classList.add("bg-[#10263A]");
                  event.currentTarget.removeAttribute("src");
                }}
              />
              <div className="min-w-0">
                <p className="leading-5 text-[#E2E5E8]">“{quote}”</p>
                <div className="mt-3 flex gap-0.5 text-[#F0C168]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={13} fill="currentColor" />
                  ))}
                </div>
                <h3 className="mt-1 font-bold text-white">{name}</h3>
                <p className="text-[#AEBBC6]">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
