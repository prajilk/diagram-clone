import { cn } from "@/utils/cn";
import {
  figmaFrameMotion,
  figmaFramerAnimation,
  figmaFramerTransition,
} from "@/utils/motion-variants";
import FigmaHashtag from "@/utils/svgs/figma-hashtag";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type FigmaFrameTitleProps = PropsWithChildren & {
  delay: number;
  isFrame: boolean;
  className?: string;
};

const FigmaFrameTitle = ({
  delay,
  isFrame,
  children,
  className,
}: FigmaFrameTitleProps) => {
  return (
    <div
      className={cn(
        "flex w-full cursor-pointer items-center gap-2 px-7 py-3.5 hover:bg-[rgba(255,255,255,0.1)]",
        className,
      )}
    >
      <FigmaHashtag />
      <div className="overflow-hidden">
        <motion.div
          initial="initial"
          variants={figmaFrameMotion}
          animate={figmaFramerAnimation(isFrame)}
          transition={figmaFramerTransition(delay)}
          className="flex h-6 flex-col"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default FigmaFrameTitle;
