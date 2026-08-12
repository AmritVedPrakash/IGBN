import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCounter({ value, suffix = "+" }) {
  const ref = useRef();

  const visible = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(value / 50);

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
