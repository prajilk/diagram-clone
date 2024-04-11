"use client";

import { motion } from "framer-motion";
import LightButton from "../common/button/light-button";
import Image from "next/image";
import Grid from "./grid";
import { uiaiLogoVariants } from "@/utils/motion-variants";

const UIAI = () => {
  return (
    <>
      <div
        id="#ui-ai"
        className="relative z-10 mx-auto flex w-full flex-col items-center py-24 pb-0 lg:w-[600px]"
      >
        <motion.span
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="mb-5 font-medium opacity-70"
        >
          All powered by
        </motion.span>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          variants={uiaiLogoVariants}
          className="group relative mb-5 flex size-40 cursor-pointer items-center justify-center"
        >
          <div className="absolute z-10 flex size-[156px] items-center justify-center rounded-[38px] bg-[linear-gradient(145deg,#201f22,#050505)] shadow-[0_6px_8px_1px_rgba(0,0,0,.5)]">
            <Image
              src="/assets/ui-ai-metal-icon.png"
              alt="UI AI Image logo"
              width={70}
              height={70}
            />
          </div>
          {/* Gradient stroke */}
          <div className="absolute z-0 size-40 rounded-[40px] bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"></div>
          {/* Gradient glow */}
          <div className="absolute z-0 size-40 rounded-[40px] bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] opacity-50 blur-xl duration-500 group-hover:opacity-100"></div>
        </motion.div>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="title py-6"
          style={{
            lineHeight: "57px",
            marginBottom: 0,
          }}
        >
          UI-AI
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
          User interface AI models made <br /> by designers, for designers.
        </motion.p>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <LightButton startIcon="/assets/ui-ai-icon.svg">
            ui-ai.com
          </LightButton>
        </motion.div>
        <span className="my-3 text-sm font-medium opacity-70">Coming soon</span>
      </div>

      <Grid />
    </>
  );
};

export default UIAI;
