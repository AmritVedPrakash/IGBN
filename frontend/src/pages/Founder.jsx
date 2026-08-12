import { motion } from "framer-motion";

import AnimatedCounter from "../components/ui/AnimatedCounter";

import founderMain from "../assets/founder-main.png";
import founderOffice from "../assets/founder-office.png";

const stats = [
  {
    number: 8,
    title: "Years Experience",
  },

  {
    number: 190,
    title: "Projects Delivered",
  },

  {
    number: 45,
    title: "Expert Developers",
  },
];

export default function Founder() {
  return (
    <main>
      {/* HERO */}

      <section
        className="
relative
min-h-screen
overflow-hidden
px-6
py-32
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
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-16
items-center
"
        >
          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p
              className="
text-cyan-400
uppercase
tracking-widest
font-semibold
"
            >
              Founder & CEO
            </p>

            <h1
              className="
mt-5
text-5xl
md:text-7xl
font-bold
leading-tight
"
            >
              Building The Future With
              <span className="gradient-text">Technology</span>
            </h1>

            <p
              className="
mt-8
text-xl
text-gray-400
leading-8
"
            >
              The vision behind AnkleGaming is to create technology solutions
              that help businesses transform ideas into powerful digital
              products.
            </p>

            <p
              className="
mt-6
text-gray-400
leading-8
"
            >
              With a strong passion for innovation, software development and
              emerging technologies, our founder leads a team focused on
              building scalable applications, AI solutions and enterprise
              platforms.
            </p>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
relative
flex
justify-center
"
          >
            <div
              className="
absolute
w-80
h-80
bg-purple-600/40
blur-[120px]
rounded-full
"
            ></div>

            <motion.img
              src={founderMain}
              alt="Founder of AnkleGaming"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,

                repeat: Infinity,
              }}
              className="
relative
z-10
max-w-md
w-full
rounded-3xl
glass
p-3
"
            />
          </motion.div>
        </div>
      </section>

      {/* STORY */}

      <section
        className="
py-24
px-6
"
      >
        <div
          className="
max-w-5xl
mx-auto
glass
rounded-3xl
p-10
md:p-14
"
        >
          <h2
            className="
text-4xl
md:text-5xl
font-bold
"
          >
            Founder
            <span className="gradient-text">Story</span>
          </h2>

          <p
            className="
mt-8
text-gray-300
text-lg
leading-8
"
          >
            AnkleGaming was started with a vision to bridge the gap between
            innovative ideas and reliable technology solutions. The goal was
            simple — help businesses build digital products that are not only
            beautiful but also scalable, secure and performance-driven.
          </p>

          <p
            className="
mt-6
text-gray-300
text-lg
leading-8
"
          >
            Today, AnkleGaming works with startups and enterprises to develop
            mobile applications, websites, SaaS platforms, AI solutions and
            custom software products.
          </p>
        </div>
      </section>

      {/* VISION CARDS */}

      <section
        className="
py-20
max-w-7xl
mx-auto
px-6
"
      >
        <div
          className="
grid
md:grid-cols-3
gap-8
"
        >
          {[
            {
              title: "Vision",
              desc: "To become a globally trusted technology partner helping businesses grow through innovation.",
            },

            {
              title: "Leadership",
              desc: "Building a culture of creativity, ownership and continuous learning.",
            },

            {
              title: "Innovation",
              desc: "Using AI, cloud and modern technologies to create future-ready solutions.",
            },
          ].map((item) => (
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="
glass
rounded-3xl
p-8
"
            >
              <h3
                className="
text-3xl
font-bold
"
              >
                {item.title}
              </h3>

              <p
                className="
mt-5
text-gray-400
leading-7
"
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECOND IMAGE SECTION */}

      <section
        className="
py-24
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
          <img
            src={founderOffice}
            alt="AnkleGaming Team"
            className="
rounded-3xl
glass
p-4
"
          />

          <div>
            <h2
              className="
text-5xl
font-bold
"
            >
              Creating
              <span className="gradient-text">Impact</span>
              Through Technology
            </h2>

            <p
              className="
mt-6
text-gray-400
leading-8
"
            >
              Our approach focuses on understanding business challenges and
              creating technology solutions that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section
        className="
py-20
bg-white/5
"
      >
        <div
          className="
max-w-5xl
mx-auto
grid
md:grid-cols-3
gap-8
px-6
"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="
text-center
"
            >
              <h2
                className="
text-5xl
font-bold
gradient-text
"
              >
                <AnimatedCounter value={item.number} />

                <span>+</span>
              </h2>

              <p
                className="
mt-3
text-gray-400
"
              >
                {item.title}
              </p>
            </div>
          ))}
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
            Let's Build Something Extraordinary
          </h2>

          <p
            className="
mt-5
text-white/80
"
          >
            Have an idea? Our team is ready to turn it into a powerful digital
            product.
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
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  );
}
