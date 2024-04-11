import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "basketball.svg",
  "music-note.svg",
  "surfboard.svg",
  "traffic-cone.svg",
  "pizza.svg",
  "mario.svg",
  "pencil.svg",
  "mountain.svg",
  "nike-shoe.svg",
  "steve-jobss.svg",
  "game-controller.svg",
  "planet.svg",
  "castle.svg",
  "watch.svg",
  "beyoncee.svg",
  "wizard-with-binoculars.svg",
  "lobster.svg",
  "happy-cat.svg",
  "lipstick.svg",
  "ufo.svg",
  "wizard-looking-through-binoculars.svg",
];

const SvgIcons = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(50);
  const [localWidth, setLocalWidth] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(265);
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
    const newRotateDeg = 265 + percentageDiff * (290 - 265);
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
    setWidthPercentage(50);
    setIsMouseOver(false);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className="col-span-2 flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]"
    >
      <div className="p-7">
        <h3 className="text-xl font-medium">Generate SVG icons for anything</h3>
        <p className="mt-1 text-sm text-white/60">
          Magic Icon generates infinitely scalable <br /> SVG icons to use
          anywhere in your design.
        </p>
      </div>

      <div className="relative w-full flex-1 overflow-hidden pt-5">
        <div className="grid grid-cols-4 gap-10 lg:grid-cols-7">
          {IMAGES.map((img, i) => (
            <div
              className="flex aspect-square w-16 items-center justify-center rounded-xl bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]"
              key={i}
            >
              <Image
                src={`/assets/svg-col/${img}`}
                alt="SVG image icon"
                width={40}
                height={40}
                priority
              />
            </div>
          ))}
        </div>

        {/* Magic wand */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute -bottom-80 z-20 flex h-10 w-[500px] origin-top-left rotate-[290deg] cursor-pointer rounded-xl shadow-[0px_0px_100px_30px_rgba(29,28,32,0.9)] after:absolute after:top-10 after:h-[50rem] after:w-[150%] after:bg-[#1D1C20] lg:-bottom-72"
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

export default SvgIcons;
