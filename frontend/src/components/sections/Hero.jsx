import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserPlus,
  FileSearch,
  MessagesSquare,
  Handshake,
  ChartNoAxesCombined,
} from "lucide-react";

import homeVideo from "../../assets/homebg/home-video.mp4";

export default function Hero() {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Create Account",
      description: "Sign up and create your business profile.",
    },
    {
      icon: FileSearch,
      number: "2",
      title: "Explore & Connect",
      description:
        "Search suppliers or buyers and connect with the right partners.",
    },
    {
      icon: MessagesSquare,
      number: "3",
      title: "Communicate",
      description: "Discuss requirements, share information and negotiate.",
    },
    {
      icon: Handshake,
      number: "4",
      title: "Close Deal",
      description:
        "Build trust, finalize deals and grow your business globally.",
    },
    {
      icon: ChartNoAxesCombined,
      number: "5",
      title: "Grow Together",
      description: "Expand your reach and achieve long-term success with IGBN.",
    },
  ];

  return (
    <section className="relative w-full bg-[#fbfaf8]">
      {/* HERO AREA — its own overflow-hidden wrapper so the card below
          can never stretch or distort the video background */}
      <div
        className="
          relative
          overflow-hidden
          min-h-[560px]
          sm:min-h-[600px]
          md:min-h-[650px]
          lg:min-h-[700px]
        "
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#020b1b]/94
            via-[#020b1b]/60
            to-[#020b1b]/10
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1450px]
            px-5
            sm:px-7
            md:px-10
            lg:px-14
            xl:px-16
            pt-16
            sm:pt-20
            lg:pt-24
            pb-14
            sm:pb-16
            lg:pb-[80px]
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[620px]"
          >
            {/* Heading */}
            <h1
              className="
                text-white
                font-bold
                uppercase
                leading-[1.05]
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
              "
            >
              Connecting
              <br />
              <span className="text-[#f4ad24]">Businesses</span>
              <br />
              To Global
              <br />
              Opportunities
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[540px]
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                text-white/80
              "
            >
              A trusted B2B platform that connects global buyers with quality
              suppliers, driving international trade and business growth.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#f4ad24]
                  px-6
                  py-3.5
                  font-semibold
                  text-[#07101f]
                  transition-colors
                  duration-300
                  hover:bg-[#ffbc36]
                "
              >
                Join as a Buyer
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-white/40
                  bg-white/5
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white/10
                "
              >
                Learn More
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* HOW IT WORKS CARD
          - Mobile/tablet: normal document flow, sits right below the hero,
            fully visible, no overlap.
          - Desktop (lg+): pulled up with a negative margin to recreate the
            original "floating card" overlap effect, without ever needing
            to know the card's height in advance (unlike absolute + bottom
            offset, which broke when content got taller on mobile). */}
      <div
        className="
          relative
          z-30
          w-full
          px-4
          sm:px-5
          md:px-6
          lg:px-7
          mt-6
          sm:mt-8
          lg:mt-0
          lg:-translate-y-[100px]
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            w-full
            max-w-[1550px]
            rounded-[15px]
            border
            border-[#ebe7df]
            bg-[#fffdfb]
            px-4
            py-5
            sm:px-6
            md:px-8
            lg:px-10
            shadow-[0_15px_45px_rgba(0,0,0,0.14)]
          "
        >
          {/* How It Works Heading */}
          <div className="mb-5 text-center">
            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#d6a42b]
              "
            >
              How We Work
            </p>

            <h2
              className="
                mt-1
                text-lg
                sm:text-xl
                font-semibold
                text-[#0b1f43]
              "
            >
              Our Simple Process
            </h2>
          </div>

          {/* Process */}
          <div className="relative">
            {/* Horizontal Connector — only makes sense once everything
                sits in a single row, so keep it lg-only */}
            <div
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[29px]
                hidden
                h-px
                bg-[#ead7a4]
                lg:block
              "
            />

            <div
              className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-7
                sm:grid-cols-2
                lg:grid-cols-5
                lg:gap-4
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLastOdd =
                  index === steps.length - 1 && steps.length % 2 !== 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className={`
                      relative
                      flex
                      flex-col
                      items-center
                      text-center
                      ${isLastOdd ? "col-span-2 lg:col-span-1" : ""}
                    `}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.06,
                      }}
                      className="
                        relative
                        z-10
                        flex
                        h-[58px]
                        w-[58px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#071d43]
                        shadow-[0_6px_18px_rgba(0,0,0,0.10)]
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className="text-[#d9aa35]"
                      />
                    </motion.div>

                    {/* Gold Dot */}
                    {index !== steps.length - 1 && (
                      <div
                        className="
                          absolute
                          right-[-7px]
                          top-[25px]
                          z-20
                          hidden
                          h-[9px]
                          w-[9px]
                          rounded-full
                          border-2
                          border-[#f8edce]
                          bg-[#d8aa36]
                          lg:block
                        "
                      />
                    )}

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        text-[10px]
                        sm:text-[11px]
                        font-semibold
                        text-[#1b1b1b]
                      "
                    >
                      {step.number}. {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-2
                        max-w-[190px]
                        text-[9px]
                        lg:text-[10px]
                        leading-[14px]
                        lg:leading-[15px]
                        text-[#666]
                      "
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Space below the card, only needed on desktop where the card is
          pulled up on top of the hero and would otherwise leave the next
          section jammed right against it */}
      <div className="h-8 sm:h-10 lg:h-[60px]" />
    </section>
  );
}
