import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Aperture, Plane, Boxes, ArrowRight } from "lucide-react";

export default function OurServiceDividions() {
  const divisions = [
    {
      icon: Megaphone,
      title: "IGBN",
      highlight: "MARKETING & PR",
      description:
        "Build visibility, trust & brand authority in global markets.",
      points: [
        "Branding & Positioning",
        "Digital Marketing",
        "PR & Media Relations",
        "Market Research & Analysis",
        "Event & Exhibitions",
      ],
      color: "#14284f",
    },
    {
      icon: Aperture,
      title: "IGBN",
      highlight: "STUDIOS",
      description: "Cinematic stories. Real impact.",
      points: [
        "Corporate Films",
        "Product Videos",
        "Factory & Process Videos",
        "Photography",
        "Podcast & More",
      ],
      color: "#d6a02b",
    },
    {
      icon: Plane,
      title: "IGBN",
      highlight: "FACTORY TOURS",
      description: "Experience your facilities. Build global confidence.",
      points: [
        "International Buyer Visits",
        "Virtual Factory Tours",
        "Live Video Walkthroughs",
        "Meeting & Coordination",
        "Travel & Hospitality",
      ],
      color: "#d6a02b",
    },
    {
      icon: Boxes,
      title: "IGBN",
      highlight: "TECHNOLOGIES",
      description: "Digital solutions that simplify & scale your business.",
      points: [
        "Web & App Development",
        "Portal Development",
        "ERP & Automation",
        "AI & Chatbot Solutions",
        "Cloud & DevOps",
      ],
      color: "#25558e",
    },
  ];

  return (
    <section className="bg-[#fbfaf8] py-14 md:py-18 lg:py-20">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-5">
            <span className="hidden sm:block w-28 h-px bg-[#7f7f7f]" />

            <h2 className="text-[#17213d] text-2xl md:text-3xl font-semibold uppercase">
              Our Service Divisions
            </h2>

            <span className="hidden sm:block w-28 h-px bg-[#7f7f7f]" />
          </div>

          <p className="mt-3 text-[#656b7a] text-sm md:text-base">
            Specialized divisions working together for your global success.
          </p>

          <div className="w-12 h-[3px] bg-[#d4a232] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="
                  group
                  bg-white
                  border
                  border-[#e8e8e8]
                  rounded-xl
                  px-6
                  py-7
                  min-h-[440px]
                  flex
                  flex-col
                  shadow-[0_5px_22px_rgba(0,0,0,0.035)]
                  hover:shadow-[0_16px_38px_rgba(0,0,0,0.09)]
                  transition-shadow
                  duration-300
                "
              >
                {/* Brand Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    className="shrink-0"
                  >
                    <Icon
                      size={48}
                      strokeWidth={1.6}
                      style={{ color: division.color }}
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-[#17213d] text-xl md:text-2xl font-semibold leading-none">
                      {division.title}
                    </h3>

                    <p
                      className="text-[14px] md:text-[15px] font-semibold mt-1"
                      style={{ color: division.color }}
                    >
                      {division.highlight}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#3f4657] text-sm leading-6 min-h-[52px]">
                  {division.description}
                </p>

                {/* List */}
                <div className="mt-5 space-y-3 flex-1">
                  {division.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="
                          mt-[7px]
                          w-[6px]
                          h-[6px]
                          rounded-full
                          shrink-0
                        "
                        style={{
                          backgroundColor: division.color,
                        }}
                      />

                      <p className="text-[#394152] text-[13px] md:text-sm leading-5">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    mt-7
                    w-full
                    h-[46px]
                    rounded-md
                    border
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-sm
                    font-medium
                    bg-white
                    transition-all
                    duration-300
                    hover:bg-[#f9f9f9]
                  "
                  style={{
                    borderColor: division.color,
                    color: division.color,
                  }}
                >
                  Explore Services
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
