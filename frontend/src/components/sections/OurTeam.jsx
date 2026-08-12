import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { Sparkles } from "lucide-react";

import aryanBansal from "../../assets/team/aryan-bansal.jpg";
import karanSingh from "../../assets/team/karan-singh.jpg";
import sandeepKumar from "../../assets/team/sandeep-kumar.jpg";
import avinashPal from "../../assets/team/avinash-pal.jpg";
import piyushArora from "../../assets/team/piyush-arora.jpg";
import punyapravaSahoo from "../../assets/team/punyaprava-sahoo.jpg";
import harmanSethi from "../../assets/team/harman-sethi.jpg";
import muskanKanaujia from "../../assets/team/muskan-kanaujia.jpg";
import kanakKPandey from "../../assets/team/kanak-k-pandey.jpg";
import amanSethi from "../../assets/team/aman-sethi.jpg";
import vikasMehta from "../../assets/team/vikas-mehta.jpg";
import rakeshAggarwal from "../../assets/team/rakesh-aggarwal.jpg";

const ACCENTS = ["#8B7CFF", "#38E1D8", "#FF8A73"];

const team = [
  {
    name: "Aryan Bansal",
    role: "Managing Director",
    image: aryanBansal,
  },
  {
    name: "Karan Singh",
    role: "Team Leader",
    image: karanSingh,
  },
  {
    name: "Sandeep Kumar",
    role: "React Native Developer",
    image: sandeepKumar,
  },
  {
    name: "Avinash Pal",
    role: "Back End Developer",
    image: avinashPal,
  },
  {
    name: "Piyush Arora",
    role: "Full Stack Developer",
    image: piyushArora,
  },
  {
    name: "Punyaprava Sahoo",
    role: "Flutter Developer",
    image: punyapravaSahoo,
  },
  {
    name: "Harman Sethi",
    role: "Web App Developer",
    image: harmanSethi,
  },
  {
    name: "Muskan Kanaujia",
    role: "Content Writer",
    image: muskanKanaujia,
  },
  {
    name: "Kanak K Pandey",
    role: "Sales Manager",
    image: kanakKPandey,
  },
  {
    name: "Aman Sethi",
    role: "Flutter Developer",
    image: amanSethi,
  },
  {
    name: "Vikas Mehta",
    role: "Website Developer",
    image: vikasMehta,
  },
  {
    name: "Rakesh Aggarwal",
    role: "iOS Developer",
    image: rakeshAggarwal,
  },
];

function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  const accent = ACCENTS[index % ACCENTS.length];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, {
    stiffness: 180,
    damping: 25,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 180,
    damping: 25,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      230px circle at ${mouseX}px ${mouseY}px,
      ${accent}24,
      transparent 72%
    )
  `;

  const handleMouseMove = (e) => {
    // Mouse effects only matter on devices with a mouse.
    if (window.innerWidth < 768) return;

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    rawRotateY.set((x / rect.width - 0.5) * 8);

    rawRotateX.set((y / rect.height - 0.5) * -8);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
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
        amount: 0.05,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.05,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        flex
        min-h-[300px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        px-5
        pb-8
        pt-10
        text-center
        shadow-xl
        transition-colors
        duration-300
        hover:border-slate-700
        md:backdrop-blur-md
      "
    >
      {/* Spotlight */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: spotlight,
        }}
      />

      {/* Top Gradient Line */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[3px]
        "
        style={{
          background: `linear-gradient(
              to right,
              ${accent},
              transparent 85%
            )`,
        }}
      />

      <div
        className="
          relative
          z-10
          w-full
        "
        style={{
          transform: "translateZ(25px)",
        }}
      >
        {/* ================= IMAGE ================= */}

        <div
          className="
            relative
            mx-auto
            h-28
            w-28
            sm:h-32
            sm:w-32
          "
        >
          {/* Gradient Ring */}

          <motion.div
            className="
              absolute
              -inset-1.5
              rounded-full
            "
            style={{
              background: `conic-gradient(
                  from 0deg,
                  ${accent},
                  transparent 40%,
                  ${accent}
                )`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Image Container */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              rounded-full
              border-2
              border-slate-950
              bg-slate-800
            "
          >
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>
        </div>

        {/* ================= NAME ================= */}

        <h3
          className="
            mt-6
            text-lg
            font-bold
            text-slate-50
            sm:text-xl
          "
        >
          {member.name}
        </h3>

        {/* ================= ROLE ================= */}

        <p
          className="
            mt-2
            text-sm
            font-medium
            sm:text-base
          "
          style={{
            color: accent,
          }}
        >
          {member.role}
        </p>

        {/* ================= LINE ================= */}

        <div
          className="
            mx-auto
            mt-5
            h-0.5
            w-10
            rounded-full
            transition-all
            duration-500
            group-hover:w-16
          "
          style={{
            background: `linear-gradient(
                to right,
                ${accent},
                transparent
              )`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function OurTeam() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-5
        py-20
        sm:px-6
        sm:py-24
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          hidden
          h-[320px]
          w-[560px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[100px]
          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          hidden
          h-[280px]
          w-[460px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          md:block
        "
      />

      {/* Dot grid desktop only */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-[0.04]
          md:block
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* Heading */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center"
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
              sm:text-sm
            "
          >
            <Sparkles size={14} className="text-cyan-400" />
            The People Behind AnkleGaming
          </div>

          <h2
            className="
              text-4xl
              font-extrabold
              text-slate-50
              sm:text-5xl
              md:text-6xl
            "
          >
            Our{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-violet-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              Team
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            Meet the talented people behind AnkleGaming — the builders,
            designers, and problem-solvers turning ideas into real products.
          </p>
        </motion.div>

        {/* ================= TEAM GRID ================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
            lg:gap-7
          "
        >
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
