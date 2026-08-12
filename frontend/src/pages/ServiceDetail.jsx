import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";

import { servicesData } from "../data/servicesData";

import AnimatedSection from "../components/shared/AnimatedSection";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData[slug];

  if (!service) return <h1 className="p-20">Service Not Found</h1>;

  return (
    <main>
      {/* Hero */}

      <section
        className="
min-h-screen
flex
items-center
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
z-10
max-w-6xl
mx-auto
"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
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
            {service.title}
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
            {service.subtitle}
          </p>

          <p
            className="
mt-6
text-gray-400
max-w-3xl
leading-8
"
          >
            At AnkleGaming, we create high performance digital solutions using
            modern technologies, industry best practices and scalable
            architecture. Our team focuses on building secure, user-friendly and
            business-focused products.
          </p>

          <Link
            to="/contact"
            className="
inline-block
mt-10
px-8
py-4
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* What We Offer */}

      <AnimatedSection
        className="
py-24
max-w-7xl
mx-auto
px-6
"
      >
        <div className="max-w-3xl">
          <h2
            className="
text-4xl
md:text-5xl
font-bold
"
          >
            What We
            <span className="gradient-text">Offer</span>
          </h2>

          <p
            className="
mt-5
text-gray-400
text-lg
leading-8
"
          >
            From strategy and design to development and deployment, we provide
            complete digital solutions that help businesses build scalable and
            successful products.
          </p>
        </div>

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-14
"
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{
                opacity: 0,

                y: 40,
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
                y: -10,
              }}
              className="
group
relative
glass
rounded-3xl
p-8
overflow-hidden
"
            >
              {/* Number */}

              <div
                className="
absolute
right-5
top-3
text-7xl
font-bold
text-white/5
"
              >
                0{index + 1}
              </div>

              <div
                className="
relative
z-10
"
              >
                <div
                  className="
w-12
h-12
rounded-xl
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

                <h3
                  className="
text-2xl
font-bold
mt-6
"
                >
                  {feature}
                </h3>

                <p
                  className="
mt-4
text-gray-400
leading-7
"
                >
                  Our experts create reliable and scalable solutions using
                  modern technologies and industry best practices.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Technology */}

      {/* Technology Stack */}

      <AnimatedSection
        className="
py-24
bg-white/5
px-6
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
text-4xl
md:text-5xl
font-bold
"
          >
            Technology
            <span className="gradient-text">Stack</span>
          </h2>

          <p
            className="
mt-5
text-gray-400
max-w-3xl
text-lg
"
          >
            We use modern and reliable technologies to create secure, scalable
            and future-ready digital products.
          </p>

          <div
            className="
flex
flex-wrap
gap-5
mt-12
"
          >
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,

                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,

                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.1,

                  y: -5,
                }}
                className="
glass
px-7
py-4
rounded-2xl
text-lg
font-medium
hover:border-cyan-400
border
border-transparent
transition
"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
            Ready to Build Your Digital Product?
          </h2>

          <Link
            to="/contact"
            className="
inline-block
mt-8
bg-black
px-10
py-4
rounded-full
"
          >
            Contact AnkleGaming
          </Link>
        </div>
      </section>
    </main>
  );
}
