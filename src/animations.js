export const homeVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: "-100vw" },
};

export const homeBannerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: "100vw", y: "50%" },
};

export const aboutVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.03,
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "50%",
  },
};

export const aboutBannerVariants = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.03,
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: "100%",
  },
};

export const skillsVariants = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.03,
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "50%",
  },
};