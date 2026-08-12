import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Globe2,
  Award,
  ArrowUpRight,
} from "lucide-react";

import AnimatedCounter from "../ui/AnimatedCounter";
import AnimatedSection from "../shared/AnimatedSection";

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successful digital products delivered across industries.",
    icon: BriefcaseBusiness,
  },
  {
    number: 400,
    suffix: "+",
    title: "Happy Clients",
    description: "Trusted by startups, businesses and growing brands.",
    icon: Users,
  },
  {
    number: 20,
    suffix: "+",
    title: "Countries Served",
    description: "Providing scalable technology solutions worldwide.",
    icon: Globe2,
  },
  {
    number: 5,
    suffix: "+",
    title: "Years Experience",
    description: "Building reliable, modern and high-performing products.",
    icon: Award,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Stats() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[#050816] py-24 text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[140px]" />

      <motion.div
        className="pointer-events-none absolute left-[20%] top-20 h-2 w-2 rounded-full bg-cyan-400"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-20 right-[22%] h-2 w-2 rounded-full bg-purple-400"
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
          >
            <Award size={16} />
            Our Growth in Numbers
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Numbers that reflect
            <span className="gradient-text ml-3">our impact.</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            We combine technology, creativity and experience to deliver digital
            products that help businesses grow.
          </motion.p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  shadow-2xl
                  shadow-black/20
                  backdrop-blur-xl
                  transition-colors
                  duration-500
                  hover:border-cyan-400/35
                  sm:p-8
                "
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px] transition-all duration-500 group-hover:bg-cyan-400/20" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px] transition-all duration-500 group-hover:bg-purple-500/20" />

                {/* Top */}
                <div className="relative flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      text-cyan-300
                      shadow-lg
                      shadow-cyan-500/10
                    "
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </motion.div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/30
                      group-hover:bg-cyan-400
                      group-hover:text-black
                    "
                  >
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Counter */}
                <div className="relative mt-9 flex items-end gap-1">
                  <h3 className="gradient-text text-5xl font-bold tracking-tight lg:text-6xl">
                    <AnimatedCounter value={item.number} />
                  </h3>

                  <span className="mb-1 text-3xl font-bold text-cyan-400">
                    {item.suffix}
                  </span>
                </div>

                <h4 className="relative mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="relative mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="relative mt-7 h-[2px] overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: `${65 + index * 8}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + index * 0.12,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
