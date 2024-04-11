import Image from "next/image";

const AISpellBookCol = () => {
  return (
    <div className="group flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]">
      <div className="p-7">
        <h3 className="text-xl font-medium">Your AI spellbook </h3>
        <p className="mt-1 text-sm text-white/60">
          Get all the latest AI design advancements + future spells in one
          convenient plugin.
        </p>
      </div>

      <div className="w-full flex-1">
        {/* Book */}
        <div
          className="relative mx-auto h-full w-48 origin-bottom-left rounded-tl-sm rounded-tr-lg bg-[#7b61ff] bg-[url(/assets/book-grain.png),linear-gradient(225deg,#7b61ff,#3e25bd)] duration-300 group-hover:rotate-3"
          style={{
            backgroundPosition: "50%, 0 0",
            backgroundSize: "cover, auto",
            backgroundRepeat: "no-repeat, repeat",
          }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <Image
              src="/assets/star.svg"
              alt="Star"
              width={30}
              height={30}
              priority
            />
            <Image
              src="/assets/book-title.png"
              alt="Book title"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/assets/book-author.png"
              alt="Book author"
              width={100}
              height={50}
              priority
            />
            <Image
              src="/assets/book-frame.svg"
              alt="Book frame"
              width={200}
              height={400}
              className="absolute inset-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISpellBookCol;
