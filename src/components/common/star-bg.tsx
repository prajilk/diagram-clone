"use client";

import { startBgFade } from "@/utils/motion-variants";
import { motion } from "framer-motion";

function StarBg() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={startBgFade}
            className="galaxy-background"
        ></motion.div>
    );
}

export default StarBg;
