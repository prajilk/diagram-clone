import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MagicCopyrights = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(268);
  const [left, setLeft] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  useEffect(() => {
    // Calculate the percentage difference
    const percentageDiff = (widthPercentage - 10) / (100 - 10);

    // Calculate the rotateDeg value
    const newRotateDeg = 268 + percentageDiff * (272 - 268);
    setRotateDeg(newRotateDeg);
  }, [widthPercentage]);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function mouseLeaveHandler() {
    setWidthPercentage(0);
    setIsMouseOver(false);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className="col-span-2 flex h-96 w-full flex-col rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]"
    >
      <div className="p-7">
        <h3 className="text-xl font-medium">Wave goodbye to Lorem Ipsum</h3>
        <p className="mt-1 text-sm text-white/60">
          Magic Copy writes, edits, and rewrites Figma text layers so <br /> you
          can design with real copy.
        </p>
      </div>

      <div className="relative w-full flex-1 overflow-hidden">
        <h1
          className={`absolute -top-6 left-5 flex h-full w-full items-center justify-center whitespace-nowrap bg-[#323238] bg-clip-text text-[5.8rem] font-black text-[#272729] [-webkit-text-fill-color:transparent]`}
        >
          Lorem Ipsum
        </h1>
        <div className="absolute top-10 h-32 w-full overflow-hidden">
          <img src="/assets/stars.svg" alt="Stars" className="scale-[2.5]" />
        </div>

        <h1
          className={`absolute -top-6 left-0 flex h-full w-full items-center justify-center whitespace-nowrap bg-[#1D1C20] text-[5.8rem] font-black text-white`}
          style={{
            clipPath: `polygon(0 0, ${widthPercentage + 3}% 0, ${widthPercentage + 5}% 100%, 0 100%)`,
          }}
        >
          It's Magical.
        </h1>

        {/* Magic wand */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute -bottom-[22rem] z-20 flex h-10 w-[500px] origin-top-left rotate-[268deg] cursor-pointer rounded-xl shadow-[0_10px_16px_rgba(0,0,0,.4)] lg:-bottom-72"
        >
          <div className="relative flex h-full w-full flex-col items-end justify-center rounded-l-lg bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
            <div className="absolute -mr-4 mb-1.5 h-1 w-[430px] bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
          </div>
          <div className="h-full w-[100px] rounded-r-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default MagicCopyrights;
