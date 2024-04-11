"use client";

import StarBg from "@/components/common/star-bg";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Magician from "@/components/magician/magician";
import FloatingNav from "@/components/nav/floating-nav";
import Nav from "@/components/nav/nav";
import Solar from "@/components/solar/solar";
import { Meteors } from "@/components/ui/meteors";
import UIAI from "@/components/uiai/uiai";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="wrapper overflow-hidden">
      <StarBg />
      <div className="relative z-10">
        <Nav />
        <FloatingNav />
        <Hero />
        <Solar />
        <Magician />
        <UIAI />
        <Footer />

        <Meteors number={1} />
      </div>
    </div>
  );
}
