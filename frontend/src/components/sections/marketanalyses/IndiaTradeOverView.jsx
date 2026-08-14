import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  ShoppingCart,
  Globe2,
  TrendingUp,
  MapPinned,
  Factory,
} from "lucide-react";

export default function IndiaTradeOverView() {
  const stats = [
    {
      icon: Package,
      title: "Total Exports (2023-24)",
      value: "$778.1B",
      growth: "▲ 7.1%",
      sub: "vs. 2022-23",
      color: "green",
    },
    {
      icon: ShoppingCart,
      title: "Total Imports (2023-24)",
      value: "$853.5B",
      growth: "▲ 6.2%",
      sub: "vs. 2022-23",
      color: "green",
    },
    {
      icon: Globe2,
      title: "Merchandise Trade (2023-24)",
      value: "$1.63T",
      growth: "▲ 6.6%",
      sub: "vs. 2022-23",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Trade Surplus (2023-24)",
      value: "$ -75.4B",
      growth: "",
      sub: "vs. 2022-23",
      color: "red",
    },
    {
      icon: MapPinned,
      title: "Top Export Destinations",
      value: "200+",
      growth: "",
      sub: "Countries",
      color: "normal",
    },
    {
      icon: Factory,
      title: "Top Import Sources",
      value: "150+",
      growth: "",
      sub: "Countries",
      color: "normal",
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
        max-w-[1400px]
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
          className="
          text-center
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
            tracking-wide
            "
          >
            India Trade Overview – Powering Global Growth
          </h2>

          <div
            className="
            mx-auto
            mt-3
            h-[3px]
            w-14
            bg-[#d7a52b]
            rounded-full
            "
          />
        </motion.div>

        {/* Stats Card */}

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
            duration: 0.6,
          }}
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-6
          bg-white
          border
          border-[#ececec]
          rounded-2xl
          overflow-hidden
          shadow-[0_5px_20px_rgba(0,0,0,0.04)]
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                relative
                flex
                flex-col
                items-center
                text-center
                px-5
                py-8
                border-r
                border-[#eeeeee]
                last:border-r-0
                "
              >
                {/* Icon */}

                <div
                  className="
                  h-12
                  w-12
                  rounded-full
                  bg-[#f6f7fb]
                  flex
                  items-center
                  justify-center
                  mb-4
                  "
                >
                  <Icon size={26} className="text-[#172343]" />
                </div>

                <p
                  className="
                  text-[11px]
                  md:text-xs
                  text-[#667085]
                  font-medium
                  "
                >
                  {item.title}
                </p>

                <h3
                  className={`
                  mt-2
                  text-2xl
                  md:text-3xl
                  font-bold
                  ${item.color === "red" ? "text-red-500" : "text-[#172343]"}
                  `}
                >
                  {item.value}
                </h3>

                {item.growth && (
                  <p
                    className="
                    mt-2
                    text-sm
                    font-semibold
                    text-green-600
                    "
                  >
                    {item.growth}
                  </p>
                )}

                <p
                  className="
                  mt-1
                  text-xs
                  text-[#667085]
                  "
                >
                  {item.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
