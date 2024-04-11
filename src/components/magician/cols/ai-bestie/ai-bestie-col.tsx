import FigmaIcon from "./components/figma-icon";
import StarIcon from "./components/star-icon";

const AIBestieCol = () => {
  return (
    <div className="group flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20]">
      <div className="p-7">
        <h3 className="text-xl font-medium">Figma&apos;s new AI bestie</h3>
        <p className="mt-1 text-sm text-white/60">
          Magician works right inside your favorite design tool.
        </p>
      </div>

      <div className="relative w-full flex-1">
        <FigmaIcon />
        <StarIcon />
      </div>
    </div>
  );
};

export default AIBestieCol;
