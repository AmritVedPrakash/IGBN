import { technologies } from "../../data/techStack";

import AnimatedSection from "../shared/AnimatedSection";

export default function TechStack() {
  return (
    <AnimatedSection
      className="
py-24
max-w-7xl
mx-auto
px-6
"
    >
      <h2
        className="
text-5xl
font-bold
"
      >
        Technology
        <span className="gradient-text">Stack</span>
      </h2>

      <div
        className="
grid
grid-cols-2
md:grid-cols-6
gap-6
mt-14
"
      >
        {technologies.map((tech) => (
          <div
            className="
glass
p-6
rounded-2xl
text-center
hover:scale-110
transition
duration-500
"
          >
            {tech}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
