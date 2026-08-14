import React from "react";
import { motion } from "framer-motion";

import {
  Wheat,
  Shirt,
  Pill,
  Building2,
  Gem,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function IndustryInsights() {
  const industries = [
    {
      icon: Wheat,
      title: "Agriculture & Food",
      desc: "High demand for organic food and processed products globally.",
    },

    {
      icon: Shirt,
      title: "Textiles & Apparel",
      desc: "Rising opportunities in sustainable and technical textiles.",
    },

    {
      icon: Pill,
      title: "Pharmaceuticals",
      desc: "Strong global demand for generic medicines and healthcare solutions.",
    },

    {
      icon: Building2,
      title: "Merchandise Goods",
      desc: "Increasing infrastructure projects driving demand worldwide.",
    },

    {
      icon: Gem,
      title: "Gems & Jewellery",
      desc: "Luxury segment growing with high export potential from India.",
    },

    {
      icon: Layers,
      title: "View All Industries",
      desc: "Explore 20+ industries and detailed market intelligence.",
    },
  ];

  return (
    <section
      className="
bg-[#fbfaf8]
py-12
md:py-16
"
    >
      <div
        className="
max-w-[1500px]
mx-auto
px-5
md:px-10
"
      >
        {/* Header */}

        <div
          className="
flex
items-center
justify-between
mb-8
"
        >
          <h2
            className="
text-[#172343]
text-xl
md:text-2xl
lg:text-[28px]
font-bold
uppercase
"
          >
            Industry Insights
          </h2>

          <motion.button
            whileHover={{
              x: 5,
            }}
            className="
flex
items-center
gap-2
text-[#174ba5]
font-semibold
text-sm
"
          >
            View All Reports
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Cards */}

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-6
gap-4
"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
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
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
bg-white
border
border-[#ececec]
rounded-xl
p-5
min-h-[230px]
shadow-[0_4px_18px_rgba(0,0,0,0.04)]
hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]
transition-all
duration-300
flex
flex-col
"
              >
                {/* Icon */}

                <div
                  className="
w-[45px]
h-[45px]
rounded-full
bg-[#f5f7fc]
flex
items-center
justify-center
mb-5
"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="
text-[#172343]
"
                  />
                </div>

                {/* Title */}

                <h3
                  className="
text-[#172343]
font-bold
text-sm
md:text-base
leading-5
"
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
mt-3
text-[#667085]
text-xs
md:text-sm
leading-5
flex-1
"
                >
                  {item.desc}
                </p>

                {/* Button */}

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="
mt-5
flex
items-center
gap-2
text-[#d4a22f]
font-semibold
text-xs
cursor-pointer
"
                >
                  View Report
                  <ArrowRight size={14} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
