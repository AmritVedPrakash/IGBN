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

  const ACTIVE = "#f7931e";
  const CURRENT = "#172343";
  const PENDING_BORDER = "#d5d9e2";
  const PENDING_TEXT = "#98a2b3";
  const TRACK_LINE = "#e4e7ec";

  const completedCount = Math.max(0, currentStep - 1);

  const progressPercent =
    steps.length > 1 ? (completedCount / (steps.length - 1)) * 100 : 0;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-5 py-9 bg-[#f8f9fc]">
      <div className="flex items-start justify-between relative">
        {/* Base Track Line */}
        <div
          className="absolute top-[25px] left-[25px] right-[25px] h-[3px] z-0 rounded-full"
          style={{ backgroundColor: TRACK_LINE }}
        />

        {/* Animated Progress Line */}
        <div className="absolute top-[25px] left-[25px] right-[25px] h-[3px] z-0 overflow-hidden rounded-full">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: ACTIVE }}
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          />
        </div>

        {steps.map((step, index) => {
          const completed = currentStep > step.id;
          const active = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10 px-2"
            >
              {/* Circle */}
              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  backgroundColor: active ? CURRENT : "#f8f9fc",
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
                className="h-[50px] w-[50px] rounded-full flex items-center justify-center border-2 font-semibold text-base relative shadow-sm"
                style={{
                  color: active ? "#ffffff" : completed ? ACTIVE : PENDING_TEXT,
                }}
              >
                {completed ? (
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -45,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: index * 0.08 + 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Check size={21} strokeWidth={3} />
                  </motion.div>
                ) : active ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
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

                {/* Active Pulsing Ring */}
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${CURRENT}`,
                    }}
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

              {/* Step Title */}
              <motion.p
                animate={{
                  color: active
                    ? CURRENT
                    : completed
                      ? "#344054"
                      : PENDING_TEXT,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  mt-4
                  text-sm
                  md:text-[14px]
                  font-semibold
                  text-center
                  leading-5
                  max-w-[140px]
                "
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
