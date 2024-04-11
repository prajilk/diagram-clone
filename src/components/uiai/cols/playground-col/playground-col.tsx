import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const PlaygroundCol = () => {
  const [startGlow, setStartGlow] = useState(false);
  const [showGlyphs, setShowGlyphs] = useState(false);

  function handleGenerate() {
    setStartGlow(true);
    setTimeout(() => {
      setStartGlow(false);
      setShowGlyphs(true);
    }, 3000);
  }

  function resetAnim() {
    setShowGlyphs(false);
  }

  return (
    <div className="relative flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20] lg:col-span-2">
      <div className="p-7">
        <h3 className="text-xl font-medium">UI-AI Playground</h3>
        <p className="mt-1 text-sm text-white/60">
          Leverage multimodal prompts &#40;text and images&#41; to <br />{" "}
          generate design assets from anywhere on the web.
        </p>
      </div>

      <motion.button
        initial={{
          top: -40,
          rotate: 180,
        }}
        animate={showGlyphs ? { top: 20, rotate: 0 } : {}}
        transition={{ duration: 0.6, type: "spring" }}
        onClick={resetAnim}
        className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-[#2f2e31] bg-[#262529] shadow-[0_2px_5px_rgba(0,0,0,.2),0_6px_10px_rgba(0,0,0,.2)]"
      >
        <img src="/assets/reset-icon.svg" alt="" />
      </motion.button>

      <div className="relative w-full flex-1 p-7 pt-0">
        {/* Prompt Card */}
        <div className="h-full w-[250px] space-y-3 rounded-3xl bg-[linear-gradient(#242325,#171619)] p-5 shadow-[inset_0_1px_2px_#525154,0_20px_25px_-5px_rgba(0,0,0,.8),0_10px_10px_-5px_rgba(0,0,0,.9)]">
          <div className="flex h-32 w-full flex-col justify-between rounded-2xl bg-[#29292b] p-3">
            <span className="text-xs">A dog riding a surf board</span>
            <div className="flex items-center justify-between text-xs opacity-50">
              <span className="flex items-center gap-1">
                Powered by{" "}
                <img src="/assets/ui-ai-tag.svg" alt="UI AI Tag icon" /> UI-AI
              </span>
              <img
                src="/assets/ui-img-icon.svg"
                alt="UI Image icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <button
            onClick={handleGenerate}
            disabled={startGlow || showGlyphs}
            className="h-12 w-full rounded-xl bg-[#18a0fb] font-bold shadow-[0_4px_4px_rgba(0,0,0,.08)] disabled:opacity-50"
          >
            Generate
          </button>
        </div>

        {/* Result Card */}
        <div className="absolute -right-28 -top-5 h-96 w-96 space-y-3 rounded-3xl bg-[linear-gradient(#242325,#171619)] p-5 shadow-[inset_0_1px_2px_#525154,0_20px_25px_-5px_rgba(0,0,0,.8),0_10px_10px_-5px_rgba(0,0,0,.9)]">
          <div className="flex justify-between gap-2 text-xs">
            {/* Save to diagram button */}
            <div className="flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 font-medium text-white/30">
              <img
                src="/icons/logo-gray.svg"
                alt=""
                className="size-3 opacity-30"
              />
              Save to Diagram
            </div>
            {/* Scale options */}
            <div className="me-2 flex">
              <div className="rounded-l-lg border border-white/5 px-3 py-2 font-medium text-white/30">
                1x
              </div>
              <div className="rounded-r-lg border border-white/5 px-3 py-2 font-medium text-white/30">
                2x
              </div>
              <div className="rounded-r-lg border border-white/5 px-3 py-2 font-medium text-white/30">
                3x
              </div>
              <div className="rounded-r-lg border border-white/5 px-3 py-2 font-medium text-white/30">
                4x
              </div>
            </div>
          </div>

          {/* Output area */}
          <div className="relative size-full overflow-hidden rounded-2xl border border-[#3f3f3f] bg-[#29292b]">
            <div className="absolute inset-0 bg-[url(/assets/card-dot-grid.png)] bg-cover bg-[0_0] bg-no-repeat opacity-40"></div>

            {/* Glow */}
            {startGlow && (
              <div className="relative size-full animate-pulse">
                <Image
                  src="/assets/playground-col/blob/blue-blob.png"
                  alt="Blue blob"
                  className="absolute -left-5 -top-5 opacity-70"
                  width={300}
                  height={300}
                  priority
                />
                <Image
                  src="/assets/playground-col/blob/yellow-blob.png"
                  alt="Yellow blob"
                  className="absolute -left-5 -top-5 opacity-70"
                  width={300}
                  height={300}
                  priority
                />
                <Image
                  src="/assets/playground-col/blob/green-blob.png"
                  alt="Green blob"
                  className="absolute -left-5 -top-5 opacity-70"
                  width={300}
                  height={300}
                  priority
                />
                <Image
                  src="/assets/playground-col/blob/purple-blob.png"
                  alt="Purple blob"
                  className="absolute -left-5 -top-5 opacity-70"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            )}
            {showGlyphs && (
              <div className="relative z-10 p-5">
                <div className="flex gap-7">
                  <Image
                    src={"/assets/playground-col/dog-surfing-1.svg"}
                    alt="Dog surfing"
                    className="cursor-pointer duration-300 active:scale-95"
                    width={130}
                    height={130}
                    priority
                  />
                  <Image
                    src={"/assets/playground-col/dog-surfing-2.svg"}
                    alt="Dog surfing"
                    className="cursor-pointer duration-300 active:scale-95"
                    width={130}
                    height={130}
                    priority
                  />
                </div>
                <div className="relative z-10 flex gap-7">
                  <Image
                    src={"/assets/playground-col/dog-surfing-3.svg"}
                    alt="Dog surfing"
                    className="cursor-pointer duration-300 active:scale-95"
                    width={130}
                    height={130}
                    priority
                  />
                  <Image
                    src={"/assets/playground-col/dog-surfing-4.svg"}
                    alt="Dog surfing"
                    className="cursor-pointer duration-300 active:scale-95"
                    width={130}
                    height={130}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundCol;
