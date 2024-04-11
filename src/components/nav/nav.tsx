import Image from "next/image";
import React from "react";
import LightButton from "../common/button/light-button";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="container py-[22px]">
      <div className="flex items-center justify-between rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-1 lg:bg-transparent lg:px-0 lg:py-0">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={20}
            height={20}
            priority
            className="brightness-0 invert"
          />
          <h1 className="text-lg font-semibold">Diagram</h1>
        </div>

        <div>
          <ul className="hidden gap-5 font-medium text-[#bdbdc0] lg:flex">
            <li className="cursor-pointer hover:text-white">
              <Link href="#magician">Magician</Link>
            </li>
            <li className="cursor-pointer hover:text-white">Genius</li>
            <li className="cursor-pointer hover:text-white">Automator</li>
            <li className="cursor-pointer hover:text-white">
              <Link href="#ui-ai">UI-AI</Link>
            </li>
          </ul>
        </div>

        <LightButton>Login</LightButton>
      </div>
    </nav>
  );
};

export default Nav;
