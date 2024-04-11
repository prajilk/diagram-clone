const figmaFramerAnimation = (isFrame: boolean, y = -25) => {
  return isFrame
    ? {
        y: 0,
      }
    : {
        y,
      };
};

const startBgFade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const solarCenter = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const orbitAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
};

const planetAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

const magicWand1 = {
  initial: {
    scale: 0.7,
    y: 100,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
};

const magicWand2 = {
  initial: {
    scale: 0.7,
    y: 100,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
};

const figmaFrameMotion = {
  initial: {
    y: 0,
  },
};

const figmaFramerTransition = (delay: number) => {
  return {
    duration: 0.4,
    type: "spring",
    bounce: 0.4,
    delay,
  };
};

const starVariants1 = (isHover: boolean) => {
  return {
    initial: {
      left: 40,
    },
    animate: isHover
      ? {
          rotate: 180,
          x: 200,
          scale: 0,
        }
      : {},
  };
};

const starVariants2 = (isHover: boolean) => {
  return {
    initial: {
      left: 80,
      top: 56,
    },
    animate: isHover
      ? {
          rotate: 180,
          x: 200,
          scale: 0,
        }
      : {},
  };
};

const magicWandVariants = (isHover: boolean) => {
  return {
    initial: { x: -100, rotate: -10 },
    animate: isHover ? { x: 300, rotate: 0 } : { x: -100, rotate: 0 },
  };
};

const appScreenVariants = (isHover: boolean) => {
  return {
    initial: {
      x: -350,
      y: 50,
      rotate: -10,
    },
    animate: isHover
      ? { x: 0, rotate: 0, y: 0 }
      : { x: -350, rotate: -10, y: 50 },
  };
};

const appIconPlaceholderVariants = {
  initial: { scale: 1, opacity: 1 },
  whileInView: { scale: 0, opacity: 0 },
};

const appIconVariants = {
  initial: { scale: 0, rotate: -180 },
  whileInView: { scale: 1, rotate: 0 },
};

const uiaiLogoVariants = {
  initial: { scale: 1.3, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
};

export {
  figmaFramerAnimation,
  figmaFramerTransition,
  starVariants1,
  starVariants2,
  magicWandVariants,
  appScreenVariants,
  appIconPlaceholderVariants,
  appIconVariants,
  startBgFade,
  solarCenter,
  orbitAnimation,
  planetAnimation,
  magicWand1,
  magicWand2,
  figmaFrameMotion,
  uiaiLogoVariants,
};
