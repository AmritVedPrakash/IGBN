import { Link } from "react-router-dom";

import { caseStudiesData } from "../data/caseStudiesData";

export default function CaseStudies() {
  return (
    <section
      className="
py-32
max-w-7xl
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
        Our
        <span className="gradient-text">Case Studies</span>
      </h1>

      <div
        className="
grid
md:grid-cols-3
gap-8
mt-16
"
      >
        {Object.entries(caseStudiesData).map(([slug, item]) => (
          <Link to={`/case-studies/${slug}`}>
            <div
              className="
glass
rounded-3xl
p-8
hover:scale-105
transition
"
            >
              <span
                className="
text-cyan-400
"
              >
                {item.industry}
              </span>

              <h2
                className="
text-3xl
font-bold
mt-4
"
              >
                {item.title}
              </h2>

              <p
                className="
text-gray-400
mt-4
"
              >
                {item.short}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
