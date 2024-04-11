const FigmaIcon = () => {
  return (
    <div className="-ms-5 duration-300 before:absolute before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#1D1C20]/90 before:to-transparent before:duration-300 group-hover:-ms-2 group-hover:before:opacity-0">
      {/* Row 1 */}
      <div className="grid w-fit grid-cols-2">
        <div className="relative size-[4.5rem] rounded-l-full bg-[#ff6831] shadow-[inset_12px_0_16px_#c51d00]">
          <div className="absolute inset-0 rounded-l-full bg-[#ff6831] opacity-0 shadow-[0_2px_50px_rgba(250,76,47,.71),0_4px_12px_8px_#000] duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="relative size-[4.5rem] rounded-r-full bg-[#ff846f] shadow-[inset_9px_0_15px_rgba(226,38,6,.77)]">
          <div className="absolute inset-0 rounded-r-full bg-[#ff846f] opacity-0 shadow-[0_2px_50px_rgba(255,132,111,.5),0_4px_5px_rgba(0,0,0,.2),inset_-11px_1px_16px_rgba(226,38,6,.77)] duration-300 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid w-fit grid-cols-2">
        <div className="relative size-[4.5rem] rounded-l-full bg-[#ae62ff] shadow-[inset_9px_0_15px_#7400bb]">
          <div className="absolute inset-0 rounded-l-full bg-[#ae62ff] opacity-0 shadow-[0_2px_11px_rgba(0,0,0,.56),0_3px_40px_rgba(0,147,206,.56),inset_-1px_-4px_14px_#7400bb] duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="relative size-[4.5rem] rounded-full bg-[#51cdff] shadow-[inset_-1px_-4px_14px_#2656ff]">
          <div className="absolute inset-0 rounded-full bg-[#51cdff] opacity-0 shadow-[0_2px_11px_rgba(0,0,0,.56),0_3px_40px_rgba(0,147,206,.56),inset_-1px_-4px_14px_#2656ff] duration-300 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid w-fit grid-cols-2">
        <div className="relative size-[4.5rem] rounded-l-full rounded-br-full bg-[#44e587] shadow-[inset_0_-6px_11px_rgba(1,12,10,.63)]">
          <div className="absolute inset-0 rounded-l-full rounded-br-full bg-[#44e587] opacity-0 shadow-[0_2px_30px_rgba(16,201,173,.56),0_8px_12px_#000] duration-300 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default FigmaIcon;
