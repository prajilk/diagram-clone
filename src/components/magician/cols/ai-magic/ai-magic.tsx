import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  appScreenVariants,
  magicWandVariants,
  starVariants1,
  starVariants2,
} from "@/utils/motion-variants";
import AppIcon from "./components/app-icon";

const AIMagic = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className="flex h-96 w-full flex-col rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]"
    >
      <div className="p-7">
        <h3 className="text-xl font-medium">Design with AI Magic</h3>
        <p className="mt-1 text-sm text-white/60">
          Unlock your creativity and bring ideas to life with AI-powered design
          utilities.
        </p>
      </div>
      <div className="relative flex-1 overflow-hidden px-7">
        <motion.img
          initial="initial"
          animate="animate"
          variants={starVariants1(isHover)}
          transition={{
            duration: 0.5,
            delay: isHover ? 0 : 0.7,
          }}
          src="/assets/star.png"
          alt="Star"
          width={80}
          height={80}
          className="absolute"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={starVariants2(isHover)}
          transition={{
            duration: 0.5,
            delay: isHover ? 0.2 : 0.9,
          }}
          src="/assets/star.png"
          alt="Star"
          width={150}
          height={150}
          className="absolute"
        />

        {/* Magic wand */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={magicWandVariants(isHover)}
          transition={{ duration: 0.8, delay: isHover ? 0.3 : 0.5 }}
          className="absolute bottom-0 left-0 flex h-3/4 w-10 -translate-x-full flex-col"
        >
          <div className="h-20 w-full rounded-t-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)]"></div>
          <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden bg-black bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
            <div className="absolute mb-1.5 h-[150px] w-1 bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
          </div>
        </motion.div>

        {/* App screen */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={appScreenVariants(isHover)}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="relative z-20 h-full w-full rounded-t-2xl border border-[#2d2d2d] bg-[#1b1b1e] shadow-[0_2px_22px_rgba(0,0,0,.3)]"
        >
          <img
            src={"/assets/TopNavigation.png"}
            alt="App Nav"
            className="h-9 w-full"
          />
          <div className="grid grid-cols-4 gap-3 border-b border-[#2d2d2d]">
            <AppIcon
              delay={0.3}
              image="magic-app-wand.svg"
              placeholderDelay={0.2}
              title="Wands"
              className="opacity-100"
            />
            <AppIcon
              delay={0.4}
              image="magic-app-hats.svg"
              placeholderDelay={0.3}
              title="Hats"
            />
            <AppIcon
              delay={0.5}
              image="magic-app-spellbooks.svg"
              placeholderDelay={0.4}
              title="Spellbooks"
            />
            <AppIcon
              delay={0.6}
              image="magic-app-cards.svg"
              placeholderDelay={0.5}
              title="Cards"
            />
          </div>

          <div className="p-2">
            <div className="relative flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]">
              <Image
                src="/assets/magic-image-icon.svg"
                alt="Magic image icon"
                width={50}
                height={50}
                className="opacity-15"
                priority
              />
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                src="/assets/wand-1.png"
                alt="Wand"
                className="absolute z-10"
              />
            </div>
            <div className="my-1 text-xs font-medium">
              <div className="flex items-center justify-between">
                <span>The Magician</span>
                <span className="opacity-40">★5.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="opacity-40">Diagram</span>
                <span>$444</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIMagic;
