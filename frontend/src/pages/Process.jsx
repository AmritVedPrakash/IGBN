import { processSteps } from "../data/processData";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section
      className="
py-32
max-w-5xl
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
        <span className="gradient-text">Process</span>
      </h1>

      <div
        className="
mt-20
space-y-10
"
      >
        {processSteps.map((step, index) => (
          <motion.div
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
flex
gap-8
"
          >
            <div
              className="
h-14
w-14
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
flex
items-center
justify-center
font-bold
"
            >
              {index + 1}
            </div>

            <div>
              <h2
                className="
text-2xl
font-bold
"
              >
                {step.title}
              </h2>

              <p
                className="
text-gray-400
mt-2
"
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
