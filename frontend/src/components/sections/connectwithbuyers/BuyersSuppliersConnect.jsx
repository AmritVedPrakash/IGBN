import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Globe2 } from "lucide-react";

// import BuyersAvForm from "./BuyersAvForm";
// import SuppliersAvForm from "./SuppliersAvForm";
import BuyersAvForm from "./buyersAvForm";
import SuppliersAvForm from "./suppliersAvForm";
export default function BuyersSuppliersConnect() {
  return (
    <section
      className="
        relative
        w-full
        overflow-x-hidden
        bg-[#fbfaf8]
        py-12
        md:py-16
        lg:py-18
      "
    >
      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-160px]
          top-[25%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#174ba5]/5
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          right-[-160px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#d5a12c]/10
          blur-[120px]
        "
      />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1920px]
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-7
          2xl:px-8
        "
      >
        {/* ===================================
            HEADING
        ==================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: -22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-9
            text-center
            md:mb-11
          "
        >
          {/* Small Label */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mb-2
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Globe2 size={18} strokeWidth={1.7} className="text-[#d3a12c]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.17em]
                text-[#d3a12c]
                sm:text-[11px]
              "
            >
              Global Trade Network
            </span>
          </motion.div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              max-w-[1000px]
              text-xl
              font-semibold
              uppercase
              leading-tight
              text-[#172343]
              sm:text-2xl
              md:text-3xl
              lg:text-[31px]
            "
          >
            Connect With Buyers & Suppliers From{" "}
            <span className="text-[#d3a12c]">30+ Countries</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-3
              max-w-[760px]
              text-[11px]
              leading-5
              text-[#73798a]
              sm:text-xs
              md:text-sm
            "
          >
            Explore verified buyers and suppliers across global markets with
            interactive import and export intelligence.
          </p>

          {/* Underline */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 54,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            className="
              mx-auto
              mt-4
              h-[3px]
              rounded-full
              bg-[#d3a12c]
            "
          />
        </motion.div>

        {/* ===================================
            CARDS AREA
        ==================================== */}
        <div
          className="
            relative
            grid
            w-full
            min-w-0
            grid-cols-1
            items-start
            gap-8
            2xl:grid-cols-[minmax(0,1fr)_70px_minmax(0,1fr)]
            2xl:gap-0
          "
        >
          {/* BUYERS CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              min-w-0
              max-w-full
            "
          >
            <BuyersAvForm />
          </motion.div>

          {/* ===================================
              CENTER CONNECTION AREA
          ==================================== */}
          <div
            className="
              hidden
              2xl:flex
              items-center
              justify-center
              self-stretch
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              {/* Outer Pulse */}
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.25, 0, 0.25],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[68px]
                  w-[68px]
                  rounded-full
                  bg-[#071a3a]/20
                "
              />

              {/* Gold ring */}
              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.15, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[61px]
                  w-[61px]
                  rounded-full
                  border
                  border-[#d3a12c]/45
                "
              />

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-[52px]
                  w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border-[4px]
                  border-white
                  bg-[#071a3a]
                  text-white
                  shadow-[0_9px_25px_rgba(7,26,58,0.28)]
                "
              >
                <ArrowLeftRight size={22} strokeWidth={1.8} />
              </motion.div>
            </motion.div>
          </div>

          {/* SUPPLIERS CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              min-w-0
              max-w-full
            "
          >
            <SuppliersAvForm />
          </motion.div>
        </div>

        {/* ===================================
            TABLET / MOBILE CONNECT INDICATOR
        ==================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
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
          }}
          className="
            mt-7
            flex
            justify-center
            2xl:hidden
          "
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#e8e8e8]
              bg-white
              px-5
              py-2.5
              shadow-[0_7px_22px_rgba(0,0,0,0.05)]
            "
          >
            <ArrowLeftRight size={15} className="text-[#d3a12c]" />

            <span
              className="
                text-[10px]
                font-medium
                text-[#253350]
                sm:text-[11px]
              "
            >
              Connecting Buyers & Suppliers Globally
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
