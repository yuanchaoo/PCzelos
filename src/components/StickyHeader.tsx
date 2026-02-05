"use client";

import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const shouldHide = currentY > 10;
      setScrolled(shouldHide);
      setHidden(shouldHide);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = scrolled ? "text-[#222943]" : "text-[#F0F1F2]";
  const hoverText = scrolled ? "hover:text-[#195ED2]" : "hover:text-[#8EC6FF]";
  const headerSurface = "bg-transparent";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${headerSurface} ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="section-container flex items-center justify-between py-6">
        <a
          href="/#top"
          aria-label="ZelosTech home"
          className="group flex items-center"
        >
          <img
            src="/logo.png"
            alt="ZelosTech"
            className={`h-6 w-auto md:h-7 transition duration-300 ${
              scrolled ? "brightness-0" : ""
            } group-hover:[filter:brightness(0)_saturate(100%)_invert(24%)_sepia(90%)_saturate(2552%)_hue-rotate(209deg)_brightness(101%)_contrast(101%)]`}
          />
        </a>
        <div
          className="hidden items-center lg:flex"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <nav className="flex items-center gap-[50px]">
            <a
              className={`text-[16px] font-normal transition ${navText} ${hoverText} hover:font-bold active:font-bold`}
              href="#value"
            >
              Product
            </a>
            <a
              className={`text-[16px] font-normal transition ${navText} ${hoverText} hover:font-bold active:font-bold`}
              href="#technology"
            >
              Scenarios
            </a>
            <a
              className={`text-[16px] font-normal transition ${navText} ${hoverText} hover:font-bold active:font-bold`}
              href="#resources"
            >
              Resources
            </a>
            <a
              className={`text-[16px] font-normal transition ${navText} ${hoverText} hover:font-bold active:font-bold`}
              href="#fleet"
            >
              About us
            </a>
          </nav>
          <button
            className={`ml-[60px] inline-flex h-[34px] w-[146px] items-center justify-center rounded-[5px] text-[16px] font-bold transition ${
              scrolled
                ? "bg-[#195ED2] text-white hover:bg-[#1b6be0] active:bg-[#1b6be0]"
                : "bg-white text-black hover:bg-[#F5F6F7] hover:text-[#0080FF] active:bg-[#F5F6F7] active:text-[#0080FF]"
            }`}
          >
            Schedule a call
          </button>
        </div>
      </div>
    </header>
  );
}
