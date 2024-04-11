"use client";

import Image from "next/image";
import Orbit from "./orbit";
import Orbit1 from "@/utils/svgs/orbit-1";
import Orbit2 from "@/utils/svgs/orbit-2";
import Orbit3 from "@/utils/svgs/orbit-3";
import Orbit4 from "@/utils/svgs/orbit-4";
import Orbit5 from "@/utils/svgs/orbit-5";
import Orbit6 from "@/utils/svgs/orbit-6";
import Orbit7 from "@/utils/svgs/orbit-7";

import { motion } from "framer-motion";
import { planetAnimation, solarCenter } from "@/utils/motion-variants";
import Link from "next/link";

const Solar = () => {
  return (
    <div className="flex min-h-[40rem] w-full items-center justify-center">
      <div className="relative flex size-36 items-center justify-center lg:size-48">
        {/* Center button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={solarCenter}
          className="size-36 lg:size-48"
        >
          <div className="absolute -bottom-2 size-full rounded-full bg-[#656566]"></div>
          <Link
            href="#magician"
            className="absolute z-10 flex size-full cursor-pointer items-center justify-end rounded-full bg-[linear-gradient(#fff,#cfcfcf)] duration-300 active:translate-y-2"
          >
            <div className="relative mr-3 h-[100px] w-[60px] lg:mr-5 lg:h-[150px] lg:w-[70px]">
              <Image
                src="/assets/cutout.png"
                alt="Cutout"
                className="absolute"
                fill
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Orbit 1 */}
        <Orbit duration={35} inset={28} orbitSvg={<Orbit1 />}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src={"/assets/planet-red.png"}
              alt="Planets"
              width={30}
              height={30}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 2 */}
        <Orbit duration={25} inset={34} orbitSvg={<Orbit2 />}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src={"/assets/planet-blue.png"}
              alt="Planets"
              width={40}
              height={40}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 3 */}
        <Orbit duration={20} inset={29} orbitSvg={<Orbit3 />}>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src="/assets/planet-automator.png"
              alt="Planets"
              className="absolute"
              width={80}
              height={80}
              priority
            />
            <Image
              src="/assets/planet-automator-logo.png"
              alt="Planets"
              className="absolute"
              width={80}
              height={80}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 4 */}
        <Orbit duration={55} inset={48} orbitSvg={<Orbit4 />}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
            className="relative"
          >
            <Image
              src="/assets/planet-genius.png"
              alt="Planets"
              className="absolute"
              width={90}
              height={90}
              priority
            />
            <Image
              src="/assets/planet-genius-logo.png"
              alt="Planets"
              className="absolute"
              width={90}
              height={90}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 5 */}
        <Orbit duration={85} inset={65} orbitSvg={<Orbit5 />}>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src="/assets/planet-magician.png"
              alt="Planets"
              className="absolute"
              width={110}
              height={110}
              priority
            />
            <Image
              src="/assets/planet-magician-logo.png"
              alt="Planets"
              className="absolute"
              width={110}
              height={110}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 6 */}
        <Orbit duration={45} inset={97} orbitSvg={<Orbit6 />}>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src="/assets/planet-UI-AI.png"
              alt="Planets"
              className="absolute"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/assets/planet-UI-AI-logo.png"
              alt="Planets"
              className="absolute"
              width={100}
              height={100}
              priority
            />
          </motion.div>
        </Orbit>

        {/* Orbit 7 */}
        <Orbit duration={100} inset={127} orbitSvg={<Orbit7 />}>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={planetAnimation}
          >
            <Image
              src="/assets/planet-brown.png"
              alt="Planets"
              className="absolute"
              width={90}
              height={90}
              priority
            />
            <Image
              src="/assets/planet-brown-ring.png"
              alt="Planets"
              className="absolute"
              width={90}
              height={90}
              priority
            />
          </motion.div>
        </Orbit>
      </div>
    </div>
  );
};

export default Solar;
