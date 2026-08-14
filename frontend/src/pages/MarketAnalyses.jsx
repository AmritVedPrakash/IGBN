import React from "react";
import { motion } from "framer-motion";
import { Globe2, Clock3, FileText, ChartNoAxesCombined } from "lucide-react";

import marketBg from "../assets/marketanalyses/market-bg.png";
import TopMarket from "../components/sections/marketanalyses/TopMarket";
import TradIntelligence from "../components/sections/marketanalyses/TradIntelligence";
import IndiaTradeOverView from "../components/sections/marketanalyses/IndiaTradeOverView";
import IndiaExportImport from "../components/sections/marketanalyses/IndiaExportImport";
import FiveYearTrade from "../components/sections/marketanalyses/FiveYearTread";
import IndustryInsights from "../components/sections/marketanalyses/IndustryInsights";

export default function MarketAnalyses() {
  const features = [
    {
      icon: Globe2,
      title: "Global Coverage",
      desc: "100+ Countries",
    },
    {
      icon: Clock3,
      title: "Real-time Insights",
      desc: "Accurate & Updated",
    },
    {
      icon: FileText,
      title: "Industry Reports",
      desc: "20+ Industries",
    },
    {
      icon: ChartNoAxesCombined,
      title: "AI-Powered Analysis",
      desc: "Data-Driven Decisions",
    },
  ];

  return (
    <>
      <section
        className="
      relative
      min-h-[520px]
      lg:min-h-[620px]
      flex
      items-center
      overflow-hidden
      bg-cover
      bg-center
      "
        style={{
          backgroundImage: `url(${marketBg})`,
        }}
      >
        {/* Background Animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
          style={{
            backgroundImage: `url(${marketBg})`,
          }}
        />

        {/* Overlay */}
        <div
          className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#020b1b]
        via-[#071a35]/90
        to-[#071a35]/40
        "
        />

        <div
          className="
        relative
        z-10
        w-full
        max-w-[1500px]
        mx-auto
        px-6
        md:px-12
        lg:px-20
        "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
          max-w-[700px]
          "
          >
            <h1
              className="
            text-white
            uppercase
            font-extrabold
            leading-[1.05]
            text-4xl
            sm:text-5xl
            lg:text-[64px]
            "
            >
              Discover Trends –
              <br />
              <span
                className="
              text-[#f3b52b]
              "
              >
                Seize Opportunities.
              </span>
            </h1>

            <p
              className="
            mt-6
            text-white/80
            text-sm
            md:text-lg
            leading-7
            max-w-[560px]
            "
            >
              In-depth market intelligence and AI-driven insights to help Indian
              businesses make smarter decisions and stay ahead in the global
              marketplace.
            </p>

            {/* Features */}

            <div
              className="
            mt-10
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            "
            >
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
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
                      delay: index * 0.15,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="
                    group
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-md
                    p-4
                    hover:bg-white/15
                    transition-all
                    "
                  >
                    <div
                      className="
                      flex
                      items-center
                      justify-center
                      h-10
                      w-10
                      rounded-lg
                      bg-[#f3b52b]/20
                      mb-3
                      "
                    >
                      <Icon
                        size={22}
                        className="
                        text-[#f3b52b]
                        "
                      />
                    </div>

                    <h3
                      className="
                      text-white
                      text-xs
                      font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-1
                      text-white/60
                      text-[11px]
                      "
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
      <div>
        <TopMarket />
      </div>
      <div>
        <TradIntelligence/>
      </div>
      <div>
        <IndiaTradeOverView/>
      </div>
      <div>
        <IndiaExportImport/>
      </div>
      <div>
        <FiveYearTrade/>
      </div>
      <div>
        <IndustryInsights/>
      </div>
    </>
  );
}
