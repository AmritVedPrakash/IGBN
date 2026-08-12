import { motion } from "framer-motion";

export default function Button({ children }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="

relative

px-8

py-4

rounded-full

overflow-hidden

bg-gradient-to-r

from-purple-600

to-cyan-500

font-semibold

"
    >
      <span
        className="
relative
z-10
"
      >
        {children}
      </span>
    </motion.button>
  );
}
