import Icons from "./icons";

const AIModelsCol = () => {
  return (
    <div className="flex h-96 w-full flex-col overflow-hidden rounded-3xl border border-[rgba(255,255,255,.08)] bg-[#1D1C20] lg:col-span-2">
      <div className="p-7">
        <h3 className="text-xl font-medium">AI models made for designers</h3>
        <p className="mt-1 text-sm text-white/60">
          UI-AI models use the latest advancements in AI combined <br /> with
          creative prompting to generate design assets.
        </p>
      </div>

      <div className="relative w-full flex-1">
        {/* Dot Background */}
        <div className="absolute inset-0 bg-[url(/assets/card-dot-grid.png)] bg-cover bg-[0_0] bg-no-repeat opacity-50"></div>

        <Icons />
      </div>
    </div>
  );
};

export default AIModelsCol;
