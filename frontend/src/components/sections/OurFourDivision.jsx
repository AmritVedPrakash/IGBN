import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Video, Plane, Monitor, ArrowRight } from "lucide-react";

export default function OurFourDivision() {
  const divisions = [
    {
      title: "IGBN Marketing & PR",
      subtitle: "Build. Brand. Be Seen.",
      icon: Megaphone,
      color: "#5b8c3a",
      bg: "#f3f8ed",
      items: [
        "Digital Marketing & Branding",
        "Social Media Management",
        "Content Creation & PR",
        "Market Research & Analytics",
        "Influencer Collaborations",
      ],
    },

    {
      title: "IGBN Studios",
      subtitle: "We Create. You Inspire.",
      icon: Video,
      color: "#315cc9",
      bg: "#eef3ff",
      items: [
        "Factory & Corporate Videos",
        "Product Photography",
        "Aerial & Drone Shoots",
        "Documentary & Interviews",
        "Event & Exhibition Coverage",
      ],
    },

    {
      title: "IGBN Factory Tours",
      subtitle: "Visit. Experience. Build Trust.",
      icon: Plane,
      color: "#df7a2b",
      bg: "#fff5ed",
      items: [
        "International Buyer Visits",
        "Industry Study Tours",
        "Factory Audits & Inspections",
        "Manufacturing Delegation",
        "Business Networking Events",
      ],
    },

    {
      title: "IGBN Digital Services",
      subtitle: "Innovate. Develop. Digitize.",
      icon: Monitor,
      color: "#7444a8",
      bg: "#f6effd",
      items: [
        "Website & App Development",
        "E-commerce Solutions",
        "ERP & CRM Development",
        "AI & Automation Solutions",
        "Maintenance & Support",
      ],
    },
  ];

  return (
    <section className="bg-[#fbfaf8] py-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
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
          className="text-center mb-10"
        >
          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              uppercase
              text-[#172343]
            "
          >
            Our Four Divisions - Complete Business Support
          </h2>

          <div
            className="
              mx-auto
              mt-3
              h-[3px]
              w-14
              rounded-full
              bg-[#d4a22f]
            "
          />
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          {divisions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                    group
                    rounded-xl
                    border
                    bg-white
                    p-5
                    shadow-[0_8px_25px_rgba(0,0,0,.05)]
                    transition-all
                    duration-300
                  "
                style={{
                  borderColor: item.color + "35",
                }}
              >
                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                      rounded-full
                    "
                  style={{
                    background: item.bg,
                  }}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    style={{
                      color: item.color,
                    }}
                  />
                </motion.div>

                {/* Title */}

                <h3
                  className="
                      mt-5
                      text-[16px]
                      font-bold
                      capitalize
                    "
                  style={{
                    color: item.color,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="
                      mt-2
                      text-xs
                      text-gray-600
                    "
                >
                  {item.subtitle}
                </p>

                {/* List */}

                <ul
                  className="
                      mt-5
                      space-y-2
                    "
                >
                  {item.items.map((point, i) => (
                    <li
                      key={i}
                      className="
                            flex
                            gap-2
                            text-[11px]
                            text-[#555]
                            leading-4
                          "
                    >
                      <span
                        className="
                              mt-1
                              h-1.5
                              w-1.5
                              rounded-full
                              shrink-0
                            "
                        style={{
                          background: item.color,
                        }}
                      />

                      {point}
                    </li>
                  ))}
                </ul>

                {/* Button */}

                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                    "
                  style={{
                    color: item.color,
                  }}
                >
                  Know More
                  <ArrowRight size={15} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
