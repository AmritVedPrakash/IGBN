import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

import usaFlag from "../../../assets/flag/usa.png";
import germanyFlag from "../../../assets/flag/germany.png";
import uaeFlag from "../../../assets/flag/uae.png";
import ukFlag from "../../../assets/flag/uk.png";
import australiaFlag from "../../../assets/flag/australia.png";
import saudiFlag from "../../../assets/flag/saudi-arabia.png";
import japanFlag from "../../../assets/flag/japan.png";
import singaporeFlag from "../../../assets/flag/singapore.png";

export default function TopMarket() {
  const markets = [
    {
      name: "United States",
      flag: usaFlag,
    },

    {
      name: "Germany",
      flag: germanyFlag,
    },

    {
      name: "United Arab Emirates",
      flag: uaeFlag,
    },

    {
      name: "United Kingdom",
      flag: ukFlag,
    },

    {
      name: "Australia",
      flag: australiaFlag,
    },

    {
      name: "Saudi Arabia",
      flag: saudiFlag,
    },

    {
      name: "Japan",
      flag: japanFlag,
    },

    {
      name: "Singapore",
      flag: singaporeFlag,
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
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
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
          }}
          className="
flex
justify-between
items-center
"
        >
          <h2
            className="
text-[#172343]
uppercase
text-xl
md:text-2xl
lg:text-[28px]
font-bold
tracking-wide
"
          >
            Top Markets – Explore Country Reports
          </h2>
        </motion.div>

        {/* Cards */}

        <div
          className="
mt-8
grid
grid-cols-2
sm:grid-cols-4
lg:grid-cols-9
gap-4
"
        >
          {markets.map((item, index) => (
            <motion.div
              key={index}
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
              }}
              transition={{
                duration: 0.45,

                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,

                scale: 1.04,
              }}
              className="
group
h-[140px]
flex
flex-col
items-center
justify-center
rounded-xl
border
border-[#e7e7e7]
bg-white
shadow-[0_5px_20px_rgba(0,0,0,0.04)]
hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]
transition-all
duration-300
cursor-pointer
"
            >
              {/* Flag */}

              <div
                className="
h-[42px]
w-[58px]
overflow-hidden
rounded-md
mb-4
border
border-gray-100
"
              >
                <img
                  src={item.flag}
                  alt={item.name}
                  className="
h-full
w-full
object-cover
"
                />
              </div>

              {/* Name */}

              <p
                className="
text-center
text-sm
md:text-[15px]
font-semibold
text-[#172343]
leading-5
px-3
"
              >
                {item.name}
              </p>
            </motion.div>
          ))}

          {/* View All */}

          <motion.div
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
            }}
            transition={{
              delay: 0.7,
            }}
            whileHover={{
              y: -8,

              scale: 1.04,
            }}
            className="
h-[140px]
flex
flex-col
items-center
justify-center
rounded-xl
border
border-[#e7e7e7]
bg-white
shadow-[0_5px_20px_rgba(0,0,0,0.04)]
hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]
transition-all
cursor-pointer
"
          >
            <Globe2
              size={42}
              strokeWidth={1.6}
              className="
text-[#172343]
mb-3
"
            />

            <p
              className="
text-sm
md:text-[15px]
font-semibold
text-[#172343]
"
            >
              View All
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
