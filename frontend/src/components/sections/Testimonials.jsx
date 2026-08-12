import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Users } from "lucide-react";

import { testimonials } from "../../data/testimonials";
import AnimatedSection from "../shared/AnimatedSection";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Auto slide
  useEffect(() => {
    if (!emblaApi) return;

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoPlay);
  }, [emblaApi]);

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#050816] py-24 text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-32 top-16 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* Decorative animated dots */}
      <motion.div
        className="pointer-events-none absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-cyan-400"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[18%] right-[14%] h-2 w-2 rounded-full bg-purple-400"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
            >
              <Users size={16} />
              Client Testimonials
            </motion.div>

            <motion.h2
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              What our clients
              <span className="gradient-text ml-3">say about us.</span>
            </motion.h2>

            <motion.p
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              Trusted by startups, entrepreneurs and businesses worldwide for
              reliable development, creative solutions and long-term support.
            </motion.p>
          </div>

          {/* Slider Controls */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-400
                hover:text-black
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-400
                hover:text-black
              "
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Testimonials slider */}
        <div ref={emblaRef} className="mt-16 overflow-hidden">
          <div className="-ml-5 flex touch-pan-y">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id || item.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  pl-5
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                "
              >
                <motion.article
                  whileHover={{
                    y: -12,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[390px]
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.045]
                    p-7
                    shadow-2xl
                    shadow-black/20
                    backdrop-blur-xl
                    transition-colors
                    duration-500
                    hover:border-cyan-400/35
                    sm:p-8
                  "
                >
                  {/* Card glows */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px] transition-all duration-500 group-hover:bg-cyan-400/20" />

                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px] transition-all duration-500 group-hover:bg-purple-500/20" />

                  {/* Quote icon */}
                  <div className="absolute right-6 top-6 text-white/[0.05] transition-all duration-500 group-hover:text-cyan-400/10">
                    <Quote size={72} fill="currentColor" />
                  </div>

                  {/* Client Image */}
                  <div className="relative">
                    <div className="relative h-[76px] w-[76px] rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-[3px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full rounded-full object-cover"
                      />

                      <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-[#0b0e1c] bg-green-400" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="relative mt-7 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${item.name}-star-${starIndex}`}
                        size={18}
                        className={
                          starIndex < (item.rating || 5)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}

                    <span className="ml-2 text-sm font-semibold text-gray-300">
                      {item.rating || 5}.0
                    </span>
                  </div>

                  {/* Testimonial text */}
                  <p className="relative mt-6 flex-1 text-base leading-8 text-gray-300">
                    “{item.text}”
                  </p>

                  {/* Client info */}
                  <div className="relative mt-8 border-t border-white/10 pt-6">
                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">{item.role}</p>

                    {item.company && (
                      <p className="mt-1 text-sm font-medium text-cyan-400">
                        {item.company}
                      </p>
                    )}
                  </div>

                  {/* Animated bottom line */}
                  <div className="relative mt-6 h-[2px] overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: `${70 + (index % 3) * 10}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.1,
                        delay: 0.3 + index * 0.08,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom trust text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.3,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <div className="flex -space-x-3">
            {testimonials.slice(0, 4).map((item) => (
              <img
                key={`small-${item.name}`}
                src={item.image}
                alt={item.name}
                className="h-10 w-10 rounded-full border-2 border-[#050816] object-cover"
              />
            ))}
          </div>

          <p className="text-sm text-gray-400">
            Trusted by
            <span className="mx-1 font-semibold text-white">50+ clients</span>
            across different industries.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
