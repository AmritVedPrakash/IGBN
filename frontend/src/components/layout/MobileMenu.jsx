import { motion, AnimatePresence } from "framer-motion";

import { X, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Industries",
    path: "/industries",
  },

  {
    name: "Portfolio",
    path: "/portfolio",
  },

  {
    name: "Case Studies",
    path: "/case-studies",
  },

  {
    name: "Blog",
    path: "/blog",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export default function MobileMenu({ open, close }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="
fixed
right-0
top-0
h-screen
w-full
sm:w-[400px]
bg-black
z-[100]
p-8
border-l
border-white/10
"
        >
          <div
            className="
flex
justify-between
items-center
mb-12
"
          >
            <h2
              className="
text-3xl
font-bold
gradient-text
"
            >
              AnkleGaming
            </h2>

            <button onClick={close}>
              <X size={30} />
            </button>
          </div>

          <div
            className="
space-y-3
"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={close}
                className="
flex
items-center
justify-between
p-5
rounded-2xl
glass
hover:bg-white/10
transition
"
              >
                <span
                  className="
text-lg
font-medium
"
                >
                  {item.name}
                </span>

                <ChevronRight />
              </Link>
            ))}
          </div>

          <div
            className="
absolute
bottom-10
left-8
right-8
"
          >
            <button
              className="
w-full
py-4
rounded-full
bg-gradient-to-r
from-purple-600
to-cyan-500
font-semibold
"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
