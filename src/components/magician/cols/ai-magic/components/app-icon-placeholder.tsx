import { appIconPlaceholderVariants } from "@/utils/motion-variants";
import { motion } from "framer-motion";

const AppIconPlaceholder = ({ delay }: { delay: number }) => {
  return (
    <motion.img
      initial="initial"
      whileInView="whileInView"
      variants={appIconPlaceholderVariants}
      transition={{ duration: 0.3, delay }}
      src="/assets/magic-icon-icon.svg"
      alt="App icon placeholder"
      className="absolute size-6"
    />
  );
};

export default AppIconPlaceholder;
