import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 450,
    damping: 32,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 450,
    damping: 32,
    mass: 0.5,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Custom cursor sirf mouse devices par
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener?.("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener?.("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e) => {
      const zoom = 0.75;

      mouseX.set(e.clientX / zoom);
      mouseY.set(e.clientY / zoom);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    /* ===============================================
       HOVER DETECTION
    =============================================== */

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        `
          a,
          button,
          input,
          select,
          textarea,
          [role="button"],
          [data-cursor="interactive"]
        `,
      );

      if (target) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(
        `
          a,
          button,
          input,
          select,
          textarea,
          [role="button"],
          [data-cursor="interactive"]
        `,
      );

      if (target) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseenter", handleMouseEnter);

    document.addEventListener("mouseleave", handleMouseLeave);

    document.addEventListener("mousedown", handleMouseDown);

    document.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseover", handleMouseOver);

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");

      window.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mouseenter", handleMouseEnter);

      document.removeEventListener("mouseleave", handleMouseLeave);

      document.removeEventListener("mousedown", handleMouseDown);

      document.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("mouseover", handleMouseOver);

      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* ===============================================
          OUTER SMOOTH CURSOR
      =============================================== */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          width: isHovering ? 58 : 38,
          height: isHovering ? 58 : 38,

          opacity: isVisible ? 1 : 0,

          scale: isClicking ? 0.78 : 1,

          backgroundColor: isHovering
            ? "rgba(214,154,43,0.12)"
            : "rgba(214,154,43,0.025)",

          borderColor: isHovering
            ? "rgba(235,177,71,0.95)"
            : "rgba(214,154,43,0.65)",
        }}
        transition={{
          width: {
            duration: 0.2,
          },
          height: {
            duration: 0.2,
          },
          scale: {
            duration: 0.12,
          },
          opacity: {
            duration: 0.2,
          },
        }}
        className="
          pointer-events-none
          fixed
          z-[999999]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          backdrop-blur-[1px]
          shadow-[0_0_18px_rgba(214,154,43,0.18)]
        "
      />

      {/* ===============================================
          CENTER GOLD DOT
      =============================================== */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          width: isHovering ? 7 : 6,
          height: isHovering ? 7 : 6,

          scale: isClicking ? 1.8 : 1.5,

          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.12,
        }}
        className="
          pointer-events-none
          fixed
          z-[1000000]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E3A536]
          shadow-[0_0_12px_rgba(227,165,54,0.95)]
        "
      />

      {/* ===============================================
          HOVER GLOW
      =============================================== */}
      {isHovering && (
        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
          }}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: [0.85, 1.25, 0.85],
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            scale: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            pointer-events-none
            fixed
            z-[999998]
            h-[65px]
            w-[65px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#D69A2B]/20
          "
        />
      )}
    </>
  );
}
