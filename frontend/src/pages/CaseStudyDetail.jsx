import { useParams } from "react-router-dom";

import { caseStudiesData } from "../data/caseStudiesData";

import AnimatedCounter from "../components/ui/AnimatedCounter";

export default function CaseStudyDetail() {
  const { slug } = useParams();

  const project = caseStudiesData[slug];

  return (
    <main>
      <section
        className="
py-32
max-w-6xl
mx-auto
px-6
"
      >
        <h1
          className="
text-6xl
font-bold
"
        >
          {project.title}
        </h1>

        <p
          className="
mt-6
text-xl
text-gray-400
"
        >
          {project.overview}
        </p>
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
          Challenge
        </h2>

        <div
          className="
grid md:grid-cols-3
gap-5
mt-8
"
        >
          {project.challenge.map((c) => (
            <div
              className="
glass
p-6
rounded-xl
"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      <section
        className="
py-20
px-6
max-w-7xl
mx-auto
"
      >
        <h2
          className="
text-4xl
font-bold
"
        >
          Our Solution
        </h2>

        <div
          className="
grid md:grid-cols-3
gap-5
mt-8
"
        >
          {project.solution.map((s) => (
            <div
              className="
glass
p-6
rounded-xl
"
            >
              {s}
            </div>
          ))}
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
          Results
        </h2>

        <div
          className="
grid md:grid-cols-3
gap-8
mt-10
"
        >
          {project.results.map((r) => (
            <div
              className="
text-center
"
            >
              <h3
                className="
text-5xl
font-bold
gradient-text
"
              >
                <AnimatedCounter value={r.number} />
              </h3>

              <p>{r.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
