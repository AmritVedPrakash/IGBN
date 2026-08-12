import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { expertise } from "../../data/services";
import AnimatedSection from "../shared/AnimatedSection";

// Same three accents used across the Hero sculpture, TrustedBy marquee,
// and Services cards — keeps every section reading as one system.
const ACCENTS = ["#8B7CFF", "#38E1D8", "#FF8A73"];

function ExpertiseCard({ item, index }) {
  const cardRef = useRef(null);
  const accent = ACCENTS[index % ACCENTS.length];

  // Raw pointer position within the card, in pixels — drives the spotlight.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tilt targets, sprung for a smooth, weighty feel.
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22 });

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, ${accent}2E, transparent 75%)`;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);
    rawRotateY.set((px / rect.width - 0.5) * 18);
    rawRotateX.set((py / rect.height - 0.5) * -18);
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
        y: 90,
        rotateX: -40,
        scale: 0.85,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.75,
        type: "spring",
        stiffness: 90,
        damping: 16,
      }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl"
    >
      {/* Mouse-tracked spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {/* Static gradient wash for extra depth */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:from-violet-600/10 group-hover:to-cyan-500/10 group-hover:opacity-100" />

      {/* Index label */}
      <span
        className="font-display pointer-events-none absolute right-6 top-6 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-500"
        style={{ transform: "translateZ(20px)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div style={{ transform: "translateZ(50px)" }} className="relative">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
          style={{ backgroundColor: `${accent}1F` }}
        >
          {item.icon}
        </motion.div>

        <h3 className="font-display mt-7 text-xl font-bold text-slate-50">
          {item.title}
        </h3>

        <p className="font-body mt-3 leading-relaxed text-slate-400">
          {item.desc}
        </p>

        <div
          className="mt-7 h-0.5 w-0 rounded-full transition-all duration-700 group-hover:w-full"
          style={{
            backgroundImage: `linear-gradient(to right, ${accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <AnimatedSection className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-violet-600/20"
        style={{ width: "500px", height: "300px", filter: "blur(120px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 rounded-full bg-cyan-500/10"
        style={{ width: "420px", height: "260px", filter: "blur(120px)" }}
      />

      {/* Dot grid texture, consistent with the rest of the page */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <div className="font-body mb-5 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          What We Build
        </div>

        <h2 className="font-display text-4xl font-extrabold text-slate-50 md:text-6xl">
          Our{" "}
          <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <p className="font-body mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Powerful digital solutions designed to help businesses scale faster
          with modern technology.
        </p>
      </motion.div>

      {/* Cards */}
      <div
        style={{ perspective: "1200px" }}
        className="relative z-10 mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {expertise.map((item, i) => (
          <ExpertiseCard key={item.title ?? i} item={item} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}
