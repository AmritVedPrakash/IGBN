import React from "react";
import { motion } from "framer-motion";

import {
  Users,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Rocket,
} from "lucide-react";

import successImage from "../../assets/create-account/success.png";
// image name apne actual file name ke according change kar lena
export default function Success() {
  const features = [
    {
      title: "Global Network",
      icon: Users,
      position: "left-[12%] top-[35%]",
    },
    {
      title: "Verified & Trusted",
      icon: ShieldCheck,
      position: "right-[12%] top-[35%]",
    },
    {
      title: "Business Growth",
      icon: TrendingUp,
      position: "left-[15%] bottom-[32%]",
    },
    {
      title: "End-to-End Support",
      icon: Handshake,
      position: "right-[12%] bottom-[32%]",
    },
  ];

  return (
    <section
      className="
min-h-screen
bg-[#fafbff]
flex
items-center
justify-center
py-12
"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
relative
w-full
max-w-[1200px]
bg-white
rounded-2xl
border
border-[#eeeeee]
shadow-[0_10px_40px_rgba(0,0,0,0.05)]
px-6
md:px-12
py-12
text-center
overflow-hidden
"
      >
        {/* Floating Features */}

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className={`
absolute
hidden
md:flex
flex-col
items-center
${item.position}
text-[#172343]
`}
            >
              <div
                className="
h-12
w-12
rounded-full
bg-[#f4f7ff]
flex
items-center
justify-center
border
border-[#e5eaff]
"
              >
                <Icon size={24} className="text-[#2855d9]" />
              </div>

              <p
                className="
mt-2
text-xs
font-semibold
"
              >
                {item.title}
              </p>
            </motion.div>
          );
        })}

        {/* Main Image */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
flex
justify-center
"
        >
          <img
            src={successImage}
            alt="Welcome IGBN"
            className="
w-[260px]
md:w-[380px]
object-contain
"
          />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
mt-6
text-4xl
md:text-5xl
font-bold
text-[#172343]
"
        >
          Welcome to
          <span
            className="
text-[#dfa62f]
"
          >
            IGBN!
          </span>
        </motion.h1>

        <p
          className="
mt-3
text-xl
font-medium
text-[#172343]
"
        >
          Your Global Business Journey Starts Now
        </p>

        <div
          className="
w-16
h-[3px]
bg-[#dfa62f]
mx-auto
mt-4
rounded-full
"
        />

        <p
          className="
mt-6
text-gray-600
text-sm
md:text-base
leading-6
max-w-[650px]
mx-auto
"
        >
          Thank you for joining IGBN Worldwide.
          <br />
          You are now part of a trusted global network of buyers and suppliers.
        </p>

        {/* Buttons */}

        <div
          className="
mt-8
flex
flex-col
items-center
gap-5
"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
bg-[#071a3a]
text-white
px-10
py-3
rounded-lg
flex
items-center
gap-3
font-semibold
shadow-lg
"
          >
            <Rocket size={18} />
            Go to Dashboard
          </motion.button>

          <button
            className="
text-[#172343]
font-semibold
flex
items-center
gap-2
hover:text-[#dfa62f]
transition
"
          >
            Explore Marketplace
            <span>→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
