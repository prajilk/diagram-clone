"use client";

import LightButton from "../common/button/light-button";
import { motion } from "framer-motion";
import { SparklesCore } from "../ui/particles";
import Grid from "./grid";
import { magicWand1 } from "@/utils/motion-variants";

const Magician = () => {
  return (
    <>
      <div
        id="magician"
        className="relative z-10 mx-auto flex w-full flex-col items-center py-24 pb-0 lg:w-[600px]"
      >
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="title pb-6"
          style={{
            lineHeight: "57px",
            marginBottom: 0,
          }}
        >
          Magician
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="mb-7 text-center text-xl font-medium text-[#bdbdc0]"
        >
          Cast a spell on your Figma designs.
        </motion.p>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <LightButton startIcon="/assets/star.png">
            magician.design
          </LightButton>
        </motion.div>

        {/* Magic wand */}
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.6,
          }}
          variants={magicWand1}
          className="mt-7 flex h-11 w-[350px] cursor-pointer rounded-xl shadow-[0_10px_16px_rgba(0,0,0,.4)] lg:h-14 lg:w-[500px]"
        >
          <div className="relative flex h-full w-full flex-col items-end justify-center overflow-hidden rounded-l-lg bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
            <div className="absolute -mr-4 mb-1.5 h-1 w-[430px] bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
          </div>
          <div className="h-full w-36 rounded-r-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)] lg:w-40"></div>
        </motion.div>
      </div>

      {/* Lamp effect */}
      <div className="relative -z-10 flex justify-center after:absolute after:bottom-0 after:h-20 after:w-full after:bg-gradient-to-t after:from-[#0E0E11] after:to-transparent">
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.7,
            },
          }}
          src="/assets/wand-glow.png"
          alt=""
          className="-mt-[7.5rem] w-[980px] lg:-mt-[18.1rem]"
        />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="absolute h-1/2 w-[500px]"
          particleColor="#FFFFFF"
        />
      </div>

      <Grid />
    </>
  );
};

export default Magician;
