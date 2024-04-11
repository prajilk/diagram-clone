"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`-translate-x-1/2 duration-300 ${isScrolling ? "-translate-y-12" : "-translate-y-32"} fixed left-1/2 top-16 z-50 hidden justify-between rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-lg lg:flex`}
    >
      <ul className="flex items-center">
        <li className="p-4 text-sm font-medium text-white hover:opacity-50">
          <Link href={"#magician"}>Magician</Link>
        </li>
        <li className="p-4 text-sm font-medium text-white hover:opacity-50">
          Genius
        </li>
        <li className="p-4 text-sm font-medium text-white hover:opacity-50">
          Animator
        </li>
        <li className="p-4 text-sm font-medium text-white hover:opacity-50">
          <Link href={"#ui-ai"}>UI-AI</Link>
        </li>
        <li className="px-2 text-white">
          <button className="rounded-full border border-transparent bg-[#171719] px-5 py-2 text-sm font-medium text-white hover:border-white/15">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FloatingNav;
