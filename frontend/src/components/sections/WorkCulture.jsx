import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Camera, Sparkles, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import AnimatedSection from "../shared/AnimatedSection";

// Apne assets folder ke exact image names ke according paths update kar lena
import cultureOne from "../../assets/work-culture/culture-1.jpg";
import cultureTwo from "../../assets/work-culture/culture-2.jpg";
import cultureThree from "../../assets/work-culture/culture-3.jpg";
import cultureFour from "../../assets/work-culture/culture-4.jpg";

/**
 * Detects small screens so we can swap the entrance animation's "from"
 * offsets. This is the actual fix: on mobile the container is only
 * ~340-400px wide, so the old fixed pixel offsets (e.g. x: 400) threw
 * images completely outside the viewport. Since whileInView uses an
 * IntersectionObserver on the element's real (transformed) position,
 * an element that starts fully off-screen never intersects, so it
 * never animates in and stays stuck at opacity: 0 — invisible forever.
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

// Each photo now carries its resting rotation as a number (not baked into a
// Tailwind class) so it can be animated FROM a wild, unpredictable throw-in
// state TO its resting tilt — that's what sells the "unexpected" feel.
//
// `from` = desktop entrance (large throw, big container).
// `fromMobile` = same idea but scaled down so the image starts near enough
// to the container to actually be detected by the viewport observer.
const cultureImages = [
  {
    id: 1,
    image: cultureOne,
    alt: "AnkleGaming team celebration",
    className: "left-[1%] top-[3%] h-[52%] w-[39%] z-20",
    restRotate: -7,
    from: { x: -420, y: -260, rotate: -210, scale: 0.35 },
    fromMobile: { x: -90, y: -70, rotate: -70, scale: 0.55 },
    delay: 0.05,
  },
  {
    id: 2,
    image: cultureTwo,
    alt: "AnkleGaming technology presentation",
    className: "right-[3%] top-[-2%] h-[45%] w-[43%] z-10",
    restRotate: 6,
    from: { x: 400, y: -300, rotate: 240, scale: 0.3 },
    fromMobile: { x: 90, y: -70, rotate: 80, scale: 0.55 },
    delay: 0.22,
  },
  {
    id: 3,
    image: cultureThree,
    alt: "AnkleGaming corporate event",
    className: "left-[16%] bottom-[-4%] h-[43%] w-[39%] z-10",
    restRotate: 4,
    from: { x: -360, y: 300, rotate: -260, scale: 0.3 },
    fromMobile: { x: -80, y: 70, rotate: -80, scale: 0.55 },
    delay: 0.4,
  },
  {
    id: 4,
    image: cultureFour,
    alt: "AnkleGaming team group photo",
    className: "right-[1%] bottom-[1%] h-[48%] w-[48%] z-30",
    restRotate: -5,
    from: { x: 440, y: 280, rotate: 200, scale: 0.35 },
    fromMobile: { x: 80, y: 70, rotate: 70, scale: 0.55 },
    delay: 0.58,
  },
];

const highlights = [
  {
    icon: Users,
    label: "Collaborative Team",
  },
  {
    icon: Zap,
    label: "Creative Environment",
  },
  {
    icon: Sparkles,
    label: "Innovation Driven",
  },
];

export default function WorkCulture() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const collageY = useTransform(scrollYProgress, [0, 1], [70, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [35, -20]);

  return (
    <AnimatedSection
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-24
        text-white
        lg:py-28
      "
    >
      {/* Background — big blur() circles are GPU-heavy, keep them desktop-only */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 hidden h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px] md:block" />

        <div className="absolute -right-40 bottom-0 hidden h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[170px] md:block" />

        {/* Cheap mobile substitute — no blur filter */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-purple-950/10 md:hidden" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* Floating decorations — desktop only, purely decorative */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[14%] hidden h-3 w-3 rounded-full bg-cyan-400 md:block"
        animate={{
          y: [0, -22, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[15%] right-[10%] hidden h-3 w-3 rounded-full bg-purple-400 md:block"
        animate={{
          y: [0, 24, 0],
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Photo Collage */}
          <motion.div
            style={{
              y: collageY,
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto h-[500px] max-w-[650px] sm:h-[620px] lg:h-[650px]">
              {/* Center glow */}
              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-[90px]" />

              {/* Orbit rings — decorative, mostly hidden behind photos anyway.
                  Two infinite-rotating SVGs + blur are unnecessary GPU load
                  on mobile, so keep them desktop-only. */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  hidden
                  h-[80%]
                  w-[80%]
                  -translate-x-1/2
                  -translate-y-1/2
                  md:block
                "
              >
                {/* Outer glow wash behind the rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-2xl" />

                {/* Outer ring — slow, gradient, solid */}
                <motion.svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="ringGradientOuter"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                        stopOpacity="0.55"
                      />
                      <stop
                        offset="50%"
                        stopColor="#a855f7"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="#22d3ee"
                        stopOpacity="0.55"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="97"
                    fill="none"
                    stroke="url(#ringGradientOuter)"
                    strokeWidth="1"
                  />
                  {/* Orbiting marker on the outer ring */}
                  <circle cx="100" cy="3" r="3" fill="#22d3ee" opacity="0.9" />
                </motion.svg>

                {/* Inner ring — faster, dashed, counter-rotating */}
                <motion.svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full"
                  style={{ scale: 0.86 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="ringGradientInner"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#22d3ee"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="url(#ringGradientInner)"
                    strokeWidth="1"
                    strokeDasharray="3 9"
                  />
                  <circle
                    cx="100"
                    cy="10"
                    r="2.2"
                    fill="#a855f7"
                    opacity="0.85"
                  />
                  <circle
                    cx="176"
                    cy="150"
                    r="1.6"
                    fill="#22d3ee"
                    opacity="0.7"
                  />
                </motion.svg>

                {/* Slow breathing pulse on the whole ring system */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-cyan-400/10"
                  animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {cultureImages.map((item) => {
                // THE FIX: pick a "from" offset that's small enough on
                // mobile that the image starts near its final position —
                // close enough to be detected by the viewport observer —
                // instead of being thrown hundreds of pixels off-screen.
                const from = isMobile ? item.fromMobile : item.from;

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      scale: from.scale,
                      x: from.x,
                      y: from.y,
                      rotate: from.rotate,
                      filter: "blur(6px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                      rotate: item.restRotate,
                      filter: "blur(0px)",
                    }}
                    viewport={{
                      once: true,
                      // Lower threshold on mobile too, as extra safety
                      // margin so smaller/oddly-shaped viewports still
                      // trigger reliably.
                      amount: isMobile ? 0.05 : 0.2,
                    }}
                    transition={{
                      // Loose spring on purpose — it overshoots and wobbles
                      // past its resting tilt before settling, like a photo
                      // physically flung into place rather than fading in.
                      type: "spring",
                      stiffness: 90,
                      damping: 9,
                      mass: 1.1,
                      delay: item.delay,
                    }}
                    whileHover={{
                      scale: 1.07,
                      rotate: [
                        item.restRotate,
                        item.restRotate * -2.5,
                        6,
                        -3,
                        0,
                      ],
                      zIndex: 50,
                      transition: { duration: 0.55, ease: "easeOut" },
                    }}
                    className={`
                      group
                      absolute
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-white/15
                      bg-white/5
                      p-[5px]
                      shadow-[0_30px_80px_rgba(0,0,0,0.48)]
                      backdrop-blur-xl
                      ${item.className}
                    `}
                  >
                    {/* Restless idle sway — desktop only. On mobile this
                        keeps 4 infinite RAF loops running for no visible
                        benefit and adds to battery/scroll jank. */}
                    {!isMobile ? (
                      <motion.div
                        animate={{
                          rotate: [0, 2.5, -2, 0],
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 4 + item.id * 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: item.delay + 1,
                        }}
                        className="relative h-full w-full overflow-hidden rounded-[25px]"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-cyan-400/5" />

                        <div
                          className="
                            absolute
                            inset-0
                            opacity-0
                            transition
                            duration-500
                            group-hover:opacity-100
                            bg-gradient-to-br
                            from-cyan-400/10
                            to-purple-500/20
                          "
                        />

                        {/* Hover flash — a quick bright pulse at the instant of
                            impact, syncing with the rotation snap above */}
                        <motion.div
                          className="pointer-events-none absolute inset-0 bg-white"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: [0, 0.35, 0] }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />

                        <div
                          className="
                            absolute
                            right-4
                            top-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/30
                            text-white
                            opacity-0
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            group-hover:opacity-100
                          "
                        >
                          <Camera size={17} />
                        </div>
                      </motion.div>
                    ) : (
                      <div className="relative h-full w-full overflow-hidden rounded-[25px]">
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-cyan-400/5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Small badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                }}
                animate={
                  !isMobile
                    ? {
                        y: [0, -8, 0],
                      }
                    : undefined
                }
                className="
                  absolute
                  bottom-[8%]
                  left-[2%]
                  z-40
                  rounded-2xl
                  border
                  border-white/15
                  bg-[#0b1020]/85
                  px-5
                  py-4
                  shadow-2xl
                  backdrop-blur-2xl
                "
              >
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">
                  Team Spirit
                </p>

                <p className="mt-1 font-semibold text-white">
                  Work • Create • Celebrate
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{
              y: contentY,
            }}
            className="order-1 lg:order-2"
          >
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
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-5
                py-2.5
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-cyan-300
                backdrop-blur-xl
              "
            >
              <Sparkles size={16} />
              Our Work Culture
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
              }}
              className="
                mt-7
                text-4xl
                font-bold
                leading-[1.08]
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Moments that define
              <span className="gradient-text mt-2 block">AnkleGaming</span>
            </motion.h2>

            <motion.p
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
                duration: 0.7,
                delay: 0.22,
              }}
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              From creative brainstorming sessions to successful project
              deliveries, our workplace reflects innovation, teamwork,
              technology and the vibrant culture behind AnkleGaming Private
              Limited.
            </motion.p>

            {/* Highlights */}
            <motion.div
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.32,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                    }}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-3
                      text-sm
                      text-gray-300
                      backdrop-blur-xl
                      transition-colors
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    <Icon size={17} />
                    {item.label}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.42,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="button"
              className="
                group
                mt-10
                flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                px-7
                py-4
                font-semibold
                text-white
                shadow-[0_15px_45px_rgba(34,211,238,0.18)]
                transition-shadow
                duration-300
                hover:shadow-[0_20px_55px_rgba(139,92,246,0.3)]
              "
            >
              Explore Our Culture
              <ArrowUpRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
