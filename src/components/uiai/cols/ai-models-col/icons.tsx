import LightButton from "@/components/common/button/light-button";
import Image from "next/image";
import { useState } from "react";

const Icons = () => {
  const [icons, setIcons] = useState({
    glyphs: false,
    emojis: false,
    fonts: false,
    layers: false,
  });

  return (
    <>
      <div className="relative z-10 hidden w-full justify-center gap-5 bg-gradient-to-t from-transparent to-[#1D1C20] lg:flex">
        <LightButton
          btnStyle="gap-2 px-3 py-2 text-sm"
          startIcon={`/assets/ai-models/ui-ai-tag-0.svg`}
          onMouseEnter={() =>
            setIcons((prev) => ({
              ...prev,
              emojis: true,
              fonts: true,
              layers: true,
            }))
          }
          onMouseLeave={() =>
            setIcons((prev) => ({
              ...prev,
              emojis: false,
              fonts: false,
              layers: false,
            }))
          }
        >
          Glyphs
        </LightButton>
        <LightButton
          btnStyle="gap-2 px-3 py-2 text-sm"
          startIcon={`/assets/ai-models/ui-ai-tag-1.svg`}
          onMouseEnter={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: true,
              fonts: true,
              layers: true,
            }))
          }
          onMouseLeave={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: false,
              fonts: false,
              layers: false,
            }))
          }
        >
          Emojis
        </LightButton>
        <LightButton
          btnStyle="gap-2 px-3 py-2 text-sm"
          startIcon={`/assets/ai-models/ui-ai-tag-2.svg`}
          onMouseEnter={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: true,
              emojis: true,
              layers: true,
            }))
          }
          onMouseLeave={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: false,
              emojis: false,
              layers: false,
            }))
          }
        >
          Fonts
        </LightButton>
        <LightButton
          btnStyle="gap-2 px-3 py-2 text-sm"
          startIcon={`/assets/ai-models/ui-ai-tag-3.svg`}
          onMouseEnter={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: true,
              fonts: true,
              emojis: true,
            }))
          }
          onMouseLeave={() =>
            setIcons((prev) => ({
              ...prev,
              glyphs: false,
              fonts: false,
              emojis: false,
            }))
          }
        >
          Layers
        </LightButton>
      </div>

      <div className="relative h-full w-full">
        <Image
          src={"/assets/ai-models/wolf.png"}
          alt="Wolf"
          width={70}
          height={70}
          className={`absolute left-7 top-7 -rotate-6 ${icons.glyphs && "opacity-50"} cursor-pointer duration-300`}
        />
        <Image
          src={"/assets/ai-models/NY.png"}
          alt="New York City"
          width={70}
          height={70}
          className={`absolute left-7 top-32 ${icons.glyphs && "opacity-50"} cursor-pointer duration-300`}
        />
        <Image
          src={"/assets/ai-models/kart.png"}
          alt="Kart"
          width={70}
          height={70}
          className={`absolute left-28 top-20 rotate-6 ${icons.glyphs && "opacity-50"} cursor-pointer duration-300`}
        />

        {/* Grid-Row model icon */}
        <div
          className={`${icons.layers && "opacity-50"} absolute left-48 top-10 flex rotate-3 cursor-pointer gap-2 rounded-md border border-[rgba(255,255,255,0.13)] bg-[#29292B] p-1 shadow-[0_2px_5px_rgba(0,0,0,.36)] duration-300 after:absolute after:left-1 after:top-1 after:-z-10 after:h-[26px] after:w-[26px] after:rounded-sm after:bg-white/15`}
        >
          <Image
            src={"/assets/ai-models/grid-icon.svg"}
            alt="Grid Icon"
            width={25}
            height={25}
          />
          <Image
            src={"/assets/ai-models/rows-icon.svg"}
            alt="Rows Icon"
            width={25}
            height={25}
          />
        </div>

        {/* Check model icon */}
        <div
          className={`${icons.layers && "opacity-50"} absolute left-52 top-28 flex h-7 w-14 -rotate-3 cursor-pointer items-center justify-start rounded-full bg-[#29292B] shadow-[0_6px_6px_rgba(0,0,0,.25)] duration-300`}
        >
          <div className="ms-1 size-5 rounded-full bg-[#535457] shadow-[0_2px_4px_rgba(0,0,0,.25)]"></div>
        </div>

        {/* Button */}
        <button
          className={`${icons.layers && "opacity-50"} absolute left-44 top-40 rotate-3 cursor-pointer rounded-xl bg-[#7c61ff] px-4 py-2 font-semibold shadow-[0_4px_7px_rgba(0,0,0,.5)] duration-300`}
        >
          Hello World
        </button>

        {/* Emojis */}
        <div className="absolute right-16 top-14 flex gap-5">
          <Image
            src={"/assets/ai-models/emoji-3.png"}
            alt="Emoji Icon"
            width={35}
            height={35}
            className={`-rotate-12 ${icons.emojis && "opacity-50"} cursor-pointer duration-300`}
          />
          <Image
            src={"/assets/ai-models/emoji-1.png"}
            alt="Emoji Icon"
            width={35}
            height={35}
            className={`relative top-7 rotate-12 ${icons.emojis && "opacity-50"} cursor-pointer duration-300`}
          />
          <Image
            src={"/assets/ai-models/emoji-4.png"}
            alt="Emoji Icon"
            width={35}
            height={35}
            className={`relative -top-5 -rotate-12 ${icons.emojis && "opacity-50"} cursor-pointer duration-300`}
          />
          <Image
            src={"/assets/ai-models/emoji-2.png"}
            alt="Emoji Icon"
            width={35}
            height={35}
            className={`relative top-5 rotate-12 ${icons.emojis && "opacity-50"} cursor-pointer duration-300`}
          />
        </div>

        {/* AAs */}
        <Image
          src={"/assets/ai-models/Aa-1.png"}
          alt="AA Icon"
          width={80}
          height={80}
          className={`absolute right-40 top-36 ${icons.fonts && "opacity-50"} cursor-pointer duration-300`}
        />
        <Image
          src={"/assets/ai-models/Aa-2.png"}
          alt="AA Icon"
          width={70}
          height={70}
          className={`absolute right-14 top-36 ${icons.fonts && "opacity-50"} cursor-pointer duration-300`}
        />
      </div>
    </>
  );
};

export default Icons;
