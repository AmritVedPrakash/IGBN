import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import AnimatedSection from "../shared/AnimatedSection";

// --- Apna actual business number yahan daal dena (country code ke saath, no spaces/dashes) ---
const PHONE_NUMBER = "+91919599734137"; // used for the "tel:" call link
const WHATSAPP_NUMBER = "919599734137"; // used for the "wa.me" link, no "+"
const WHATSAPP_MESSAGE =
  "Hi AnkleGaming! I want to grow my business with you — let's talk.";

export default function GrowCTA() {
  return (
    <AnimatedSection className="relative overflow-hidden px-6 py-32">
      {/* Ambient background glow, consistent with the rest of the site */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20"
        style={{ width: "700px", height: "500px", filter: "blur(160px)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-[1.5px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(34,211,238,0.6), rgba(168,85,247,0.6))",
        }}
      >
        {/* Slowly rotating gradient border glow */}
        <motion.div
          className="pointer-events-none absolute -inset-24 opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(34,211,238,0.5), transparent 30%, rgba(168,85,247,0.5), transparent 60%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-800 via-purple-700 to-cyan-700 px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Noise / dot texture for depth */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="pointer-events-none absolute left-[8%] top-[15%] h-3 w-3 rounded-full bg-cyan-300"
            animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[18%] right-[10%] h-2.5 w-2.5 rounded-full bg-purple-300"
            animate={{ y: [0, 22, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-xl"
          >
            <Sparkles size={15} />
            Let's Build Something Amazing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ready To Grow Your Business With{" "}
            <span className="relative inline-block">
              AnkleGaming?
              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-cyan-300"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-white/85"
          >
            We build scalable mobile apps, websites, SaaS platforms, enterprise
            software and digital ecosystems that help businesses grow faster.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary — goes to contact page */}
            <motion.div
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="group flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-semibold text-purple-800 shadow-xl shadow-black/20 transition hover:shadow-2xl"
              >
                Let's Talk
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Call — opens the phone dialer directly */}
            <motion.div
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <Phone
                  size={19}
                  className="transition-transform group-hover:rotate-12"
                />
                Call Now
              </a>
            </motion.div>

            {/* WhatsApp — opens a chat with a prefilled message */}
            <motion.div
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-xl shadow-black/20 transition hover:brightness-110"
              >
                <MessageCircle
                  size={19}
                  className="transition-transform group-hover:scale-110"
                />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
