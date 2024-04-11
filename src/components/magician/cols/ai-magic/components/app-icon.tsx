import { cn } from "@/utils/cn";
import { appIconVariants } from "@/utils/motion-variants";
import { motion } from "framer-motion";
import AppIconPlaceholder from "./app-icon-placeholder";

type AppIconProps = {
  placeholderDelay: number;
  delay: number;
  image: string;
  title: string;
  className?: string;
};

const AppIcon = ({
  placeholderDelay,
  delay,
  image,
  title,
  className,
}: AppIconProps) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center gap-1 p-3.5 opacity-55",
        className,
      )}
    >
      <AppIconPlaceholder delay={placeholderDelay} />
      <motion.img
        initial="initial"
        whileInView="whileInView"
        variants={appIconVariants}
        transition={{ duration: 0.4, delay, type: "spring" }}
        src={`/assets/ai-magic-col/${image}`}
        alt=""
      />
      <span className="text-[.6rem]">{title}</span>
    </div>
  );
};

export default AppIcon;
