"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type LightButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: string;
  iconStyle?: string;
  btnStyle?: string;
};

const LightButton: React.FC<LightButtonProps> = ({
  btnStyle,
  iconStyle,
  startIcon,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] px-5 py-2 font-medium backdrop-blur-lg hover:border-[rgba(255,255,255,0.25)]",
        btnStyle,
      )}
      {...props}
    >
      {startIcon && (
        <Image
          src={startIcon}
          alt="logo"
          className={iconStyle}
          width={20}
          height={20}
          priority
        />
      )}
      {props.children}
    </button>
  );
};

export default LightButton;
