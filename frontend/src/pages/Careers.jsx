import { useState } from "react";
import { motion } from "framer-motion";

import { jobsData } from "../data/jobsData";

import {
  Users,
  Rocket,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work with talented developers, designers and technology experts in a supportive environment.",
  },

  {
    icon: Rocket,
    title: "Innovation Driven",
    desc: "Explore latest technologies like AI, Cloud, Mobile and modern software solutions.",
  },

  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Improve your skills through learning opportunities and challenging projects.",
  },

  {
    icon: Laptop,
    title: "Modern Workspace",
    desc: "Flexible work environment with tools that help you perform your best.",
  },

  {
    icon: Clock,
    title: "Work Life Balance",
    desc: "We believe productivity comes from a healthy and balanced lifestyle.",
  },

  {
    icon: HeartHandshake,
    title: "Growth Opportunities",
    desc: "Grow professionally with a company focused on long-term careers.",
  },
];

export default function Careers() {
  const [filter, setFilter] = useState("All");

  const jobs =
    filter === "All" ? jobsData : jobsData.filter((job) => job.type === filter);

  return (
    <main>
      {/* HERO */}

      <section
        className="
py-32
px-6
relative
overflow-hidden
"
      >
        <div
          className="
absolute
inset-0
bg-gradient-to-br
from-purple-900/40
via-black
to-cyan-900/30
"
        />

        <div
          className="
relative
max-w-6xl
mx-auto
"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
text-5xl
md:text-7xl
font-bold
"
          >
            Build Your Career With
            <span
              className="
gradient-text
"
            >
              AnkleGaming
            </span>
          </motion.h1>

          <p
            className="
mt-8
text-xl
text-gray-400
max-w-3xl
leading-8
"
          >
            Join a team of passionate developers, designers and innovators
            building next-generation digital products for businesses worldwide.
          </p>
        </div>
      </section>

      {/* CULTURE */}

      <section
        className="
py-20
px-6
"
      >
        <div
          className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
"
        >
          <div>
            <h2
              className="
text-5xl
font-bold
"
            >
              Our
              <span
                className="
gradient-text
"
              >
                Company Culture
              </span>
            </h2>

            <p
              className="
mt-6
text-gray-400
leading-8
"
            >
              At AnkleGaming, we believe great products are built by great
              teams. We encourage creativity, ownership and continuous
              innovation.
            </p>

            <p
              className="
mt-5
text-gray-400
leading-8
"
            >
              Our culture focuses on collaboration, learning and solving
              real-world problems using modern technology.
            </p>
          </div>

          <div
            className="
glass
rounded-3xl
p-10
"
          >
            <h3
              className="
text-3xl
font-bold
"
            >
              Why Work With Us?
            </h3>

            <ul
              className="
mt-6
space-y-4
text-gray-400
"
            >
              <li>✓ Work on real-world projects</li>

              <li>✓ Learn latest technologies</li>

              <li>✓ Friendly and growth-focused environment</li>

              <li>✓ Opportunity to make an impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section
        className="
py-20
px-6
bg-white/5
"
      >
        <div
          className="
max-w-7xl
mx-auto
"
        >
          <h2
            className="
text-5xl
font-bold
"
          >
            Employee
            <span
              className="
gradient-text
"
            >
              Benefits
            </span>
          </h2>

          <div
            className="
grid
md:grid-cols-3
gap-8
mt-14
"
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -10,
                  }}
                  className="
glass
rounded-3xl
p-8
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

                  <h3
                    className="
text-2xl
font-bold
mt-6
"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-4
text-gray-400
leading-7
"
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}

      <section
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
          Open
          <span
            className="
gradient-text
"
          >
            Positions
          </span>
        </h2>

        <div
          className="
flex
flex-wrap
gap-4
mt-10
"
        >
          {["All", "Development", "Design", "Marketing"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
px-6
py-3
rounded-full
transition
${filter === item ? "bg-gradient-to-r from-purple-600 to-cyan-500" : "glass"}
`}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="
mt-12
space-y-6
"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.title}
              whileHover={{
                scale: 1.02,
              }}
              className="
glass
rounded-3xl
p-8
flex
flex-col
md:flex-row
justify-between
gap-5
"
            >
              <div>
                <h3
                  className="
text-2xl
font-bold
"
                >
                  {job.title}
                </h3>

                <p
                  className="
mt-2
text-gray-400
"
                >
                  {job.location}
                </p>
              </div>

              <button
                className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
