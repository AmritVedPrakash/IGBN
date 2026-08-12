import { motion } from "framer-motion";

import { engagementModels } from "../data/engagementData";

import { DollarSign, Users, Clock, RefreshCcw, Check } from "lucide-react";

const icons = [DollarSign, Users, Clock, RefreshCcw];

export default function Engagement() {
  return (
    <main>
      {/* Hero */}

      <section
        className="
pt-32
pb-20
px-6
"
      >
        <div
          className="
max-w-6xl
mx-auto
"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
text-5xl
md:text-7xl
font-bold
"
          >
            Flexible
            <span className="gradient-text">Engagement Models</span>
          </motion.h1>

          <p
            className="
mt-6
text-gray-400
text-lg
max-w-3xl
leading-8
"
          >
            Choose the right engagement model that fits your business goals,
            budget and project requirements. AnkleGaming provides flexible
            collaboration options for startups, enterprises and growing
            businesses.
          </p>
        </div>
      </section>

      {/* Cards */}

      <section
        className="
pb-24
px-6
"
      >
        <div
          className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
"
        >
          {engagementModels.map((model, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={model.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="
relative
glass
rounded-3xl
p-8
overflow-hidden
group
"
              >
                {/* Glow */}

                <div
                  className="
absolute
inset-0
bg-gradient-to-br
from-purple-600/20
to-cyan-500/20
opacity-0
group-hover:opacity-100
transition
"
                ></div>

                <div
                  className="
relative
z-10
"
                >
                  <div
                    className="
w-14
h-14
rounded-2xl
bg-white/10
flex
items-center
justify-center
text-cyan-400
"
                  >
                    <Icon size={30} />
                  </div>

                  <h2
                    className="
mt-7
text-2xl
font-bold
"
                  >
                    {model.title}
                  </h2>

                  <p
                    className="
mt-4
text-gray-400
leading-7
"
                  >
                    {model.desc}
                  </p>

                  <ul
                    className="
mt-7
space-y-4
"
                  >
                    {model.features.map((f) => (
                      <li
                        key={f}
                        className="
flex
gap-3
items-start
text-gray-300
"
                      >
                        <span
                          className="
mt-1
text-cyan-400
"
                        >
                          <Check size={18} />
                        </span>

                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="
mt-8
w-full
py-3
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
font-semibold
opacity-0
group-hover:opacity-100
transition
"
                  >
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}

      <section
        className="
py-24
px-6
"
      >
        <div
          className="
max-w-6xl
mx-auto
rounded-3xl
p-12
text-center
bg-gradient-to-r
from-purple-700
to-cyan-600
"
        >
          <h2
            className="
text-4xl
md:text-5xl
font-bold
"
          >
            Ready To Start Your Project?
          </h2>

          <p
            className="
mt-5
text-white/80
"
          >
            Let's discuss your idea and build something amazing together.
          </p>

          <a
            href="/contact"
            className="
inline-block
mt-8
px-10
py-4
rounded-full
bg-black
"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
