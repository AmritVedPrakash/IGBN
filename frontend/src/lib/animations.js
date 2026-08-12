export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const pageAnimation = {
  initial: {
    opacity: 0,
    x: 20,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  exit: {
    opacity: 0,
    x: -20,
  },
};
