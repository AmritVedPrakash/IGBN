import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
//   LinkedinIcon,
  Users,
  Globe2,
  ChartNoAxesCombined,
  Network,
  ShieldCheck,
} from "lucide-react";

// Apne actual image names yahan lagana
import ceoImg from "../../../assets/aboutimg/ceo.png";
import directorImg from "../../../assets/aboutimg/director.png";

export default function OurLeadership() {
  const partnerBenefits = [
    {
      icon: Users,
      title: "Verified Buyers",
      subtitle: "& Suppliers",
    },
    {
      icon: Globe2,
      title: "Wide Global",
      subtitle: "Network",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Market Insights",
      subtitle: "& Intelligence",
    },
    {
      icon: Network,
      title: "End-to-End Trade",
      subtitle: "Support",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      subtitle: "Transactions",
    },
  ];

  return (
    <section className="bg-[#fbfaf8] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2
            className="
              text-[#142243]
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-semibold
              uppercase
            "
          >
            From Our <span className="text-[#d8a52e]">Leadership</span>
          </h2>

          <div className="w-14 h-[3px] bg-[#d8a52e] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Top Leadership Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.25fr_0.9fr_0.9fr]
            gap-5
            items-stretch
          "
        >
          {/* CEO IMAGE / VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              min-h-[320px]
              sm:min-h-[400px]
              lg:min-h-[390px]
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
              group
            "
          >
            <img
              src={ceoImg}
              alt="IGBN CEO"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/5
                to-transparent
              "
            />

            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-16
                h-16
                rounded-full
                bg-[#d8a52e]
                text-white
                flex
                items-center
                justify-center
                shadow-[0_8px_30px_rgba(216,165,46,0.4)]
              "
            >
              <Play size={25} fill="currentColor" className="ml-1" />
            </motion.button>

            {/* Fake video control */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-black/65
                backdrop-blur-sm
                px-5
                py-3
              "
            >
              <div className="flex items-center gap-3">
                <Play size={14} fill="white" className="text-white shrink-0" />

                <span className="text-white text-[11px]">0:00 / 2:18</span>

                <div className="flex-1 h-[3px] bg-white/25 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-[#d8a52e]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CEO MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              relative
              overflow-hidden
              bg-[#071b3c]
              rounded-2xl
              p-6
              md:p-7
              text-white
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >
            {/* glow */}
            <div
              className="
                absolute
                -top-20
                -right-20
                w-[200px]
                h-[200px]
                bg-[#d8a52e]/10
                rounded-full
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p className="text-white/70 text-xs md:text-sm">
                Message from Our{" "}
                <span className="text-[#d8a52e] font-medium">CEO</span>
              </p>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  mt-3
                "
              >
                Roopali Chauhan
              </h3>

              <p className="text-[#e2ae37] text-xs md:text-sm font-medium mt-1">
                Co-Founder & CEO, IGBN Worldwide
              </p>

              <p className="mt-5 text-white/75 text-xs md:text-sm leading-6">
                At IGBN Worldwide, our purpose is simple yet powerful — to
                connect businesses, open new doors, and create opportunities
                that go beyond borders.
              </p>

              <p className="mt-4 text-white/75 text-xs md:text-sm leading-6">
                We are committed to building trust, fostering partnerships, and
                empowering businesses to grow on a global scale.
              </p>

              {/* Signature style */}
              <p
                className="
                  mt-5
                  text-[#e1b552]
                  text-xl
                  italic
                "
              >
                Roopali Chauhan
              </p>

              <button
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  bg-[#d8a52e]
                  text-[#071b3c]
                  text-xs
                  md:text-sm
                  font-medium
                  px-5
                  py-3
                  rounded-lg
                  transition-all
                  duration-300
                  hover:bg-[#ebbb45]
                  hover:gap-3
                "
              >
                Know More About Our CEO
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* ASSOCIATE DIRECTOR */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="
              bg-white
              border
              border-[#ececec]
              rounded-2xl
              p-6
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              transition-shadow
              duration-300
              hover:shadow-[0_16px_35px_rgba(0,0,0,0.10)]
            "
          >
            <p
              className="
                text-[#1c2b4e]
                uppercase
                font-semibold
                text-sm
              "
            >
              Our <span className="text-[#d8a52e]">Associate Director</span>
            </p>

            <div className="w-10 h-[2px] bg-[#d8a52e] mt-2 mb-5" />

            <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1fr] gap-5 items-center">
              {/* Director Image */}
              <div
                className="
                  bg-[#f1f1f1]
                  rounded-xl
                  overflow-hidden
                  min-h-[230px]
                "
              >
                <img
                  src={directorImg}
                  alt="Associate Director"
                  className="
                    w-full
                    h-[230px]
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Director Content */}
              <div>
                <h3 className="text-[#172342] text-xl font-semibold">
                  Rahul Sharma
                </h3>

                <p className="text-[#555] text-xs md:text-sm mt-3 leading-5">
                  Associate Director
                  <br />– Global Trade
                </p>

                <p className="text-[#777] text-xs md:text-sm mt-4 leading-6">
                  Oversees international partnerships and trade development
                  initiatives across key markets.
                </p>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="#"
                  className="
                    mt-5
                    w-9
                    h-9
                    rounded-md
                    bg-[#0A66C2]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  {/* <LinkedinIcon size={18} /> */}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY PARTNER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-8
            bg-white
            border
            border-[#e9e9e9]
            rounded-2xl
            px-4
            sm:px-6
            lg:px-8
            py-6
            shadow-[0_8px_25px_rgba(0,0,0,0.04)]
          "
        >
          <h2
            className="
              text-center
              uppercase
              text-xl
              md:text-2xl
              font-semibold
              text-[#172342]
              mb-7
            "
          >
            Why Partner With <span className="text-[#d8a52e]">IGBN?</span>
          </h2>

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
              gap-y-7
            "
          >
            {partnerBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-4
                    ${index !== 0 ? "lg:border-l lg:border-[#e5e5e5]" : ""}
                  `}
                >
                  <Icon
                    size={35}
                    strokeWidth={1.6}
                    className="text-[#d6a431] shrink-0"
                  />

                  <div>
                    <p className="text-[#26334e] text-xs md:text-sm font-medium leading-5">
                      {item.title}
                    </p>

                    <p className="text-[#26334e] text-xs md:text-sm font-medium leading-5">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
