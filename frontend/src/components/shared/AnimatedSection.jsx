import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function AnimatedSection({ children, className = "" }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
