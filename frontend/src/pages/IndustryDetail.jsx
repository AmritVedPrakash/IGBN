import { useParams } from "react-router-dom";

import { industriesData } from "../data/industriesData";

import SEO from "../components/shared/SEO";

export default function IndustryDetail() {
  const { slug } = useParams();

  const industry = industriesData[slug];

  return (
    <>
      <SEO
        title={`${industry.title} | AnkleGaming`}
        description={industry.description}
      />

      <section
        className="
min-h-screen
flex
items-center
px-6
"
      >
        <div
          className="
max-w-6xl
mx-auto
"
        >
          <h1
            className="
text-6xl
font-bold
"
          >
            {industry.title}
          </h1>

          <p
            className="
mt-6
text-xl
text-gray-400
"
          >
            {industry.subtitle}
          </p>

          <button
            className="
mt-10
px-10
py-4
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
"
          >
            Discuss Your Project
          </button>
        </div>
      </section>

      <section
        className="
py-20
max-w-7xl
mx-auto
px-6
"
      >
        <h2
          className="
text-4xl
font-bold
"
        >
          Our Solutions
        </h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-10
"
        >
          {industry.solutions.map((item) => (
            <div
              className="
glass
p-7
rounded-2xl
"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className="
py-20
px-6
"
      >
        <h2
          className="
text-4xl
font-bold
"
        >
          Technology We Use
        </h2>

        <div
          className="
flex
flex-wrap
gap-5
mt-8
"
        >
          {industry.technologies.map((t) => (
            <span
              className="
glass
px-5
py-3
rounded-full
"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
