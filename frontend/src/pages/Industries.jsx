import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HeartPulse,
  Gamepad2,
  Building2,
  ShoppingBag,
  WalletCards,
  GraduationCap,
  Plane,
  Truck,
} from "lucide-react";

const industries = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,

    desc: "Building secure healthcare applications, patient management systems, telemedicine platforms and AI-powered healthcare solutions.",
  },

  {
    slug: "gaming",
    title: "Gaming",
    icon: Gamepad2,

    desc: "Creating immersive gaming experiences with multiplayer systems, gaming platforms and scalable backend solutions.",
  },

  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Building2,

    desc: "Developing modern real estate apps, property management systems, CRM solutions and digital platforms.",
  },

  {
    slug: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingBag,

    desc: "Helping businesses build powerful ecommerce platforms with smooth shopping experiences and secure payments.",
  },

  {
    slug: "fintech",
    title: "Fintech",
    icon: WalletCards,

    desc: "Creating secure fintech applications including payment solutions, financial platforms and banking software.",
  },

  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,

    desc: "Building smart education platforms, learning management systems and digital classroom solutions.",
  },

  {
    slug: "travel",
    title: "Travel",
    icon: Plane,

    desc: "Developing travel applications with booking systems, customer management and personalized experiences.",
  },

  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,

    desc: "Creating logistics solutions with tracking systems, automation and smart supply chain management.",
  },
];

export default function Industries() {
  return (
    <section
      className="
py-32
max-w-7xl
mx-auto
px-6
"
    >
      {/* Heading */}

      <motion.div
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
      >
        <h1
          className="
text-5xl
md:text-6xl
font-bold
"
        >
          Industries We
          <span
            className="
gradient-text
"
          >
            Serve
          </span>
        </h1>

        <p
          className="
mt-6
text-gray-400
max-w-3xl
text-lg
leading-8
"
        >
          We help businesses across multiple industries transform their ideas
          into scalable digital products using modern technologies, AI solutions
          and custom software.
        </p>
      </motion.div>

      {/* Cards */}

      <div
        className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
mt-16
"
      >
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link key={item.slug} to={`/industries/${item.slug}`}>
              <motion.div
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
group
relative
glass
rounded-3xl
p-8
overflow-hidden
h-full
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
group-hover:scale-110
transition
"
                  >
                    <Icon size={30} />
                  </div>

                  <h2
                    className="
text-2xl
font-bold
mt-7
"
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
mt-4
text-gray-400
leading-7
text-sm
"
                  >
                    {item.desc}
                  </p>

                  <div
                    className="
mt-6
text-cyan-400
text-sm
font-medium
"
                  >
                    Explore Solutions →
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
