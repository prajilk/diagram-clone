import Image from "next/image";
import LightButton from "../common/button/light-button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Footer = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis();

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <footer className="container relative mt-28 w-full overflow-hidden">
      <div className="relative z-10 grid grid-cols-3 py-20 lg:grid-cols-4">
        <div className="col-span-3 mb-5 space-y-4 lg:col-span-1 lg:mb-0">
          <span className="flex items-center gap-2 text-lg font-bold">
            <img
              src="/icons/logo.png"
              alt="Logo"
              className="size-5 brightness-100 invert"
            />
            Diagram
          </span>
          <p className="font-medium opacity-50">
            Design tools from the future.
          </p>
          <LightButton>Join the future</LightButton>
        </div>

        <div className="space-y-5 font-medium">
          <span>Products</span>
          <ul className="space-y-5 text-white/50">
            <li className="w-fit cursor-pointer hover:text-white">Genius</li>
            <li
              className="w-fit cursor-pointer hover:text-white"
              onClick={() => lenisRef.current?.scrollTo("#magician")}
            >
              Magician
            </li>
            <li className="w-fit cursor-pointer hover:text-white">Automator</li>
            <li
              className="w-fit cursor-pointer hover:text-white"
              onClick={() => lenisRef.current?.scrollTo("#ui-au")}
            >
              UI-AI
            </li>
          </ul>
        </div>

        <div className="space-y-5 font-medium">
          <span>Company</span>
          <ul className="space-y-5 text-white/50">
            <li className="w-fit cursor-pointer hover:text-white">About</li>
            <li className="w-fit cursor-pointer hover:text-white">Careers</li>
            <li className="w-fit cursor-pointer hover:text-white">Blog</li>
            <li className="w-fit cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        <div className="space-y-5 font-medium">
          <span>Legal</span>
          <ul className="space-y-5 text-white/50">
            <li className="w-fit cursor-pointer hover:text-white">Privacy</li>
            <li className="w-fit cursor-pointer hover:text-white">Terms</li>
          </ul>
        </div>
      </div>
      <div className="my-10 text-center">
        Developed with ❤️‍🔥 by{" "}
        <Link
          href="https://prajilk.github.io"
          target="_blank"
          className="font-semibold"
        >
          Prajil
        </Link>
      </div>

      <Image
        src="/assets/diagram-footer.png"
        alt="Footer Image"
        width={600}
        height={600}
        className="absolute -bottom-72 -left-72"
      />
    </footer>
  );
};

export default Footer;
