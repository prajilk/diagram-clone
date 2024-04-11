"use client";

import { orbitAnimation } from "@/utils/motion-variants";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Meteors } from "../ui/meteors";

type OrbitProps = {
  children: ReactNode;
  orbitSvg: ReactNode;
  inset: number;
  duration: number;
};

const Orbit = ({ children, inset, duration, orbitSvg }: OrbitProps) => {
  return (
    <div className="absolute">
      <div className="relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={orbitAnimation}
          className="relative -z-20"
        >
          {orbitSvg}
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: {
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute -z-10"
          style={{
            inset: `${inset}px`,
          }}
        >
          {children}
        </motion.div>
      </div>
      <Meteors number={1} />
    </div>
  );
};

export default Orbit;
