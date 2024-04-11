import Image from "next/image";

const CreativityCol = () => {
  return (
    <div className="group flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]">
      <div className="p-7">
        <h3 className="text-xl font-medium">Conjure up creativity</h3>
        <p className="mt-1 text-sm text-white/60">
          Magician demystifies the creative process by magically turning your
          ideas into assets.
        </p>
      </div>

      <div className="flex w-full flex-1 items-start justify-center">
        <div className="relative [perspective:1000px]">
          {/* Large card */}
          <LargeCard />

          {/* Small card */}
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default CreativityCol;

const LargeCard = () => {
  return (
    <div className="relative size-44 transition-all duration-500 [rotate:3deg] [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
      {/* Card back image */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px]">
        <img
          src="/assets/conjure-image.png"
          alt="Conjure image"
          className="size-full"
        />
      </div>
      {/* Card front image */}
      <div className="absolute flex size-full items-center justify-center rounded-[32px] bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154] [backface-visibility:hidden]">
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
  );
};

const SmallCard = () => {
  return (
    <div className="absolute -bottom-3 -left-3">
      <div className="relative size-16 transition-all duration-500 [rotate:-2deg] [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
        {/* Card back image */}
        <div className="absolute inset-0 flex size-full items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154]">
          <img
            src="/assets/astronaut with palm tree.svg"
            alt="astronaut with palm tree"
            className="size-3/4"
          />
        </div>
        {/* Card front image */}
        <div className="absolute flex size-full items-center justify-center rounded-xl bg-[linear-gradient(#343236,#38343f)] shadow-[0_20px_25px_rgba(0,0,0,.5),inset_0_2px_2px_#525154] [backface-visibility:hidden] [rotate:-2deg]">
          <Image
            src="/assets/magic-icon-icon.svg"
            alt="Magic image icon"
            width={40}
            height={40}
            className="opacity-15"
            priority
          />
        </div>
      </div>
    </div>
  );
};
