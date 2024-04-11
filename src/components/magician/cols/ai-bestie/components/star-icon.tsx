import Image from "next/image";

const StarIcon = () => {
  return (
    <div className="absolute -right-28 top-0 duration-300 before:absolute before:right-24 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-transparent before:to-[#1D1C20]/90 before:duration-300 group-hover:-right-24 group-hover:before:opacity-0">
      <Image
        src="/assets/star.png"
        alt=""
        width={220}
        height={220}
        priority
        className="group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]"
      />
    </div>
  );
};

export default StarIcon;
