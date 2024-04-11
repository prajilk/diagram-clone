"use client";

import { AnimatePresence, motion } from "framer-motion";
import FigmaFrameTitle from "./components/figma-frame-title";
import {
  figmaFrameMotion,
  figmaFramerAnimation,
  figmaFramerTransition,
} from "@/utils/motion-variants";
import { useState } from "react";

const RenameLayersCol = () => {
  const [isFrame, setIsFrame] = useState(true);

  return (
    <div className="col-span-2 hidden h-96 w-full overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20] p-7 lg:block">
      <h3 className="text-xl font-medium">Magically rename your layers</h3>
      <p className="relative z-10 mt-1 text-sm text-white/60">
        Magic Rename intelligently names your layers <br /> so you can spend
        more time designing.
      </p>

      <div className="relative h-full w-full">
        <div className="absolute -right-1 top-7">
          <AnimatePresence>
            {/* Violet Shadow */}
            {!isFrame && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute -left-2 -top-2 z-0 h-[115%] w-[115%] overflow-hidden bg-[linear-gradient(#6b00ff,#6316ff)] blur-3xl"
              ></motion.div>
            )}
          </AnimatePresence>
          <div
            className="group relative grid h-full w-[105%] grid-cols-5 rounded-tl-3xl bg-[linear-gradient(#343236,#38343f)] shadow-[inset_0_2px_2px_#525154,-2px_-1px_15px_rgba(0,0,0,.64)]"
            onClick={() => setIsFrame((prev) => !prev)}
          >
            {/* Magic wand */}
            <div className="absolute -bottom-20 left-16 z-20 flex h-10 w-[500px] rotate-[275deg] cursor-pointer rounded-xl shadow-[0_10px_16px_rgba(0,0,0,.4)] transition-transform duration-300 group-hover:-translate-y-10 group-active:animate-shake">
              <div className="relative flex h-full w-full flex-col items-end justify-center rounded-l-lg bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
                <div className="absolute -mr-4 mb-1.5 h-1 w-[430px] bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
              </div>
              <div className="h-full w-[100px] rounded-r-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)]"></div>
            </div>

            <div className="relative z-10 col-span-3 h-full w-full overflow-hidden border-r-2 border-black/30 py-5">
              {/* Frame title 1 */}
              <FigmaFrameTitle delay={0.25} isFrame={isFrame}>
                <span>Frame 2147223044</span>
                <span>Checkout Screen</span>
              </FigmaFrameTitle>

              {/* Frame title 2 */}
              <FigmaFrameTitle
                delay={0.2}
                isFrame={isFrame}
                className="px-[4.3rem]"
              >
                <span>Frame 2147223043</span>
                <span>Info Card</span>
              </FigmaFrameTitle>

              {/* Frame title 3 */}
              <FigmaFrameTitle
                delay={0.15}
                isFrame={isFrame}
                className="px-[4.3rem]"
              >
                <span>Frame 2147223035</span>
                <span>Order Details</span>
              </FigmaFrameTitle>

              {/* Frame title 4 */}
              <FigmaFrameTitle delay={0.1} isFrame={isFrame}>
                <span>Frame 2147223040</span>
                <span>Button / Place Order</span>
              </FigmaFrameTitle>
            </div>

            <div className="relative z-10 col-span-2 h-full w-full bg-[#242327] shadow-[inset_0_2px_2px_#525154]">
              <div className="absolute bottom-0 right-0 h-56 w-40 space-y-2">
                <div className="overflow-hidden">
                  <motion.div
                    initial="initial"
                    variants={figmaFrameMotion}
                    animate={figmaFramerAnimation(isFrame, -17)}
                    transition={figmaFramerTransition(0.1)}
                    className="flex h-4 flex-col"
                  >
                    <span className="ms-4 text-xs text-white/60">
                      Frame 2147223044
                    </span>
                    <span className="ms-4 text-xs text-white/60">
                      Checkout Screen
                    </span>
                  </motion.div>
                </div>
                <div className="size-full border-l-2 border-t-2 border-blue-500">
                  <div className="relative size-full rounded-tl-[48px] bg-[#3E3D42]">
                    <div className="absolute -left-2 -top-2 size-4 border-2 border-blue-500 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-[url(/assets/figma-grain.png)] object-cover opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenameLayersCol;
