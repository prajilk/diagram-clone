import { useState } from "react";
import FigmaFrameTitle from "./components/figma-frame-title";
import { AnimatePresence, motion } from "framer-motion";

const RenameLayersColSmall = () => {
  const [isFrame, setIsFrame] = useState(true);
  return (
    <div className="col-span-2 h-96 w-full overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20] p-7 lg:hidden">
      <h3 className="text-xl font-medium">Magically rename your layers</h3>
      <p className="relative z-10 mt-1 text-sm text-white/60">
        Magic Rename intelligently names your layers <br /> so you can spend
        more time designing.
      </p>

      <div className="relative h-full w-full pt-5">
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
          className="group relative h-full w-[110%] rounded-tl-3xl bg-[linear-gradient(#343236,#38343f)] shadow-[inset_0_2px_2px_#525154,-2px_-1px_15px_rgba(0,0,0,.64)]"
          onClick={() => setIsFrame((prev) => !prev)}
        >
          {/* Magic wand */}
          <div className="absolute -bottom-10 -left-64 z-20 flex h-10 w-[500px] -translate-y-10 rotate-[275deg] cursor-pointer rounded-xl shadow-[0_10px_16px_rgba(0,0,0,.4)] transition-transform duration-300 group-active:animate-shake">
            <div className="relative flex h-full w-full flex-col items-end justify-center rounded-l-lg bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
              <div className="absolute -mr-4 mb-1.5 h-1 w-[430px] bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
            </div>
            <div className="h-full w-[100px] rounded-r-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)]"></div>
          </div>

          <div className="relative z-10 h-full w-full overflow-hidden py-5">
            {/* Frame title 1 */}
            <FigmaFrameTitle delay={0.25} isFrame={isFrame}>
              <span>Frame 2147223044</span>
              <span>Checkout Screen</span>
            </FigmaFrameTitle>
            {/* Frame title 2 */}
            <FigmaFrameTitle delay={0.25} isFrame={isFrame}>
              <span>Frame 2147223035</span>
              <span>Info Card</span>
            </FigmaFrameTitle>
            {/* Frame title 3 */}
            <FigmaFrameTitle delay={0.25} isFrame={isFrame}>
              <span>Frame 2147223040</span>
              <span>Order Details</span>
            </FigmaFrameTitle>
            {/* Frame title 4 */}
            <FigmaFrameTitle delay={0.25} isFrame={isFrame}>
              <span>Frame 2147223043</span>
              <span>Button / Place Order</span>
            </FigmaFrameTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenameLayersColSmall;
