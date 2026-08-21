import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

// Apne actual video filename ke according change kar lena
import storyVideo from "../../../assets/aboutimg/our-story.mp4";

export default function WatchOurStory() {
  const [isOpen, setIsOpen] = useState(false);

  /* =====================================================
      STOP PAGE SCROLL WHEN MODAL OPEN
  ====================================================== */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
      CLOSE WITH ESC KEY
  ====================================================== */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          WATCH OUR STORY BUTTON
      ====================================================== */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          flex
          min-h-[50px]
          items-center
          justify-center
          gap-4
          rounded-[6px]
          border
          border-[#9A6B28]
          bg-[#061522]/80
          px-7
          text-[14px]
          font-semibold
          text-[#E7E9EB]
          backdrop-blur-sm
          transition-all
          duration-300

          hover:border-[#D79A2B]
          hover:bg-[#091A28]

          sm:text-[15px]
          lg:text-[16px]
        "
      >
        Watch Our Story
        <motion.span
          whileHover={{
            scale: 1.12,
          }}
          className="
            flex
            h-[28px]
            w-[28px]
            items-center
            justify-center
            rounded-full
            border
            border-[#DCE0E3]
          "
        >
          <Play size={11} fill="currentColor" className="ml-[2px]" />
        </motion.span>
      </motion.button>

      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => setIsOpen(false)}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/85
              px-3
              py-5
              backdrop-blur-[7px]

              sm:px-6
              lg:px-10
            "
          >
            {/* Golden Background Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[450px]
                w-[800px]
                max-w-[90vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D69A2B]/10
                blur-[130px]
              "
            />

            {/* =================================================
                MODAL WINDOW
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.32,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                top-[55px]
                z-10
                w-full
                max-w-[1110px]
                overflow-hidden
                rounded-[14px]
                border
                border-[#8D6429]
                bg-[#020D18]
                shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              "
            >
              {/* =================================================
                  HEADER
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[64px]
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#725021]/70
                  bg-[#041421]
                  px-4

                  sm:px-6
                "
              >
                <div className="flex items-center gap-3">
                  {/* Play Icon */}
                  <div
                    className="
                      flex
                      h-[39px]
                      w-[39px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D69A2B]/70
                      bg-[#D69A2B]/10
                    "
                  >
                    <Play
                      size={16}
                      fill="currentColor"
                      className="
                        ml-[2px]
                        text-[#D69A2B]
                      "
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        text-[#F4F5F6]

                        sm:text-[19px]
                        lg:text-[21px]
                      "
                    >
                      Watch Our Story
                    </h3>

                    <p
                      className="
                        mt-0.5
                        hidden
                        text-[12px]
                        text-[#AEB7BE]

                        sm:block
                        sm:text-[13px]
                      "
                    >
                      Discover the story behind IGBN
                    </p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  aria-label="Close video"
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#725021]
                    bg-[#071725]
                    text-[#D69A2B]
                    transition-all
                    duration-300

                    hover:border-[#D69A2B]
                    hover:bg-[#D69A2B]/10
                  "
                >
                  <X size={23} />
                </motion.button>
              </div>

              {/* =================================================
                  VIDEO PLAYER
              ================================================= */}
              <div
                className="
                  relative
                  w-full
                  bg-black
                "
              >
                <video
                  key={isOpen ? "open-video" : "closed-video"}
                  src={storyVideo}
                  autoPlay
                  controls
                  playsInline
                  preload="metadata"
                  className="
                    aspect-video
                    max-h-[72vh]
                    w-full
                    bg-black
                    object-contain
                  "
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* =================================================
                  BOTTOM TEXT
              ================================================= */}
              <div
                className="
                  border-t
                  border-[#725021]/50
                  bg-[#041421]
                  px-4
                  py-4

                  sm:px-6
                "
              >
                <p
                  className="
                    text-center
                    text-[13px]
                    font-medium
                    leading-[1.6]
                    text-[#C9D0D6]

                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  Promoting India. Supporting Business. Building Global
                  Presence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
