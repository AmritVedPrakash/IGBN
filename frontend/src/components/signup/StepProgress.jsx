import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function StepProgress({ currentStep = 1 }) {
  const steps = [
    { id: 1, title: "Business Type" },
    { id: 2, title: "Basic Details" },
    { id: 3, title: "Select Industry & Buyer" },
    { id: 4, title: "Business Details" },
    { id: 5, title: "Verification" },
  ];

  const ACTIVE = "#f7931e"; // orange/golden accent (completed steps + connecting line)
  const CURRENT = "#172343"; // navy (current step)
  const PENDING_BORDER = "#d5d9e2";
  const PENDING_TEXT = "#98a2b3";
  const TRACK_LINE = "#e4e7ec"; // base gray line

  const completedCount = Math.max(0, currentStep - 1);
  const progressPercent =
    steps.length > 1 ? (completedCount / (steps.length - 1)) * 100 : 0;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-5 py-8 bg-white">
      <div className="flex items-center justify-between relative">
        {/* Base track line - halka gray, connects every point */}
        <div
          className="absolute top-[23px] left-[23px] right-[23px] h-[2px] z-0"
          style={{ backgroundColor: TRACK_LINE }}
        />

        {/* Animated golden/orange progress line */}
        <div className="absolute top-[23px] left-[23px] right-[23px] h-[2px] z-0 overflow-hidden">
          <motion.div
            className="h-full"
            style={{ backgroundColor: ACTIVE }}
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>

        {steps.map((step, index) => {
          const completed = currentStep > step.id;
          const active = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10 bg-white px-2"
            >
              {/* Circle */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  backgroundColor: active ? CURRENT : "#ffffff",
                  borderColor: active
                    ? CURRENT
                    : completed
                      ? ACTIVE
                      : PENDING_BORDER,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="h-[46px] w-[46px] rounded-full flex items-center justify-center border-2 font-semibold text-sm relative"
                style={{
                  color: active ? "#ffffff" : completed ? ACTIVE : PENDING_TEXT,
                }}
              >
                {completed ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.08 + 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Check size={20} strokeWidth={3} />
                  </motion.div>
                ) : active ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {step.id}
                  </motion.span>
                ) : (
                  step.id
                )}

                {/* Pulsing ring on active step */}
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2px solid ${CURRENT}` }}
                    animate={{
                      scale: [1, 1.35],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </motion.div>

              {/* Title */}
              <motion.p
                animate={{
                  color: active
                    ? CURRENT
                    : completed
                      ? "#344054"
                      : PENDING_TEXT,
                }}
                transition={{ delay: index * 0.08 }}
                className="mt-3 text-[11px] md:text-xs font-medium text-center max-w-[110px]"
              >
                {step.title}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
