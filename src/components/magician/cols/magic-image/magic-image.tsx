import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MagicImage = () => {
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
      className="col-span-2 flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]"
    >
      <div className="p-7">
        <h3 className="text-xl font-medium">
          Generate magical visuals for your designs
        </h3>
        <p className="mt-1 text-sm text-white/60">
          With Magic Image, you can quickly generate images in <br /> Figma
          while you design.
        </p>
      </div>

      <div className="relative w-full flex-1">
        <div className="mt-3 flex justify-center">
          <div className="relative -right-6 z-20 flex size-44 rotate-3 items-center justify-center overflow-hidden rounded-[32px] bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]">
            <Image
              src="/assets/magic-img.png"
              alt="Magic image icon"
              fill
              sizes="100vw"
              priority
            />
          </div>

          <div className="relative z-10 flex size-44 -rotate-3 items-center justify-center rounded-[32px] bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]">
            <Image
              src="/assets/magic-image-icon.svg"
              alt="Magic image icon"
              width={100}
              height={100}
              className="opacity-15"
              priority
            />
          </div>

          <div className="relative -left-7 z-0 flex size-44 rotate-3 items-center justify-center rounded-[32px] bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]">
            <Image
              src="/assets/magic-image-icon.svg"
              alt="Magic image icon"
              width={100}
              height={100}
              className="opacity-15"
              priority
            />
          </div>
        </div>

        {/* Magic wand */}
        <div className="absolute -bottom-72 left-52 z-20 flex h-10 w-[500px] origin-top-left rotate-[268deg] cursor-pointer rounded-xl shadow-[0_10px_16px_rgba(0,0,0,.4)]">
          <div className="relative flex h-full w-full flex-col items-end justify-center rounded-l-lg bg-[linear-gradient(90deg,#0c0c0c,#1d1a1f)]">
            <div className="absolute -mr-4 mb-1.5 h-1 w-[430px] bg-[linear-gradient(91deg,_#000,#fff_31%)] opacity-85 blur"></div>
          </div>
          <div className="h-full w-[100px] rounded-r-lg bg-[linear-gradient(#cfdcf1_1%,#fff_13%,#fff_59%,#dfe6f1_92%,#d4ddec_96%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default MagicImage;
