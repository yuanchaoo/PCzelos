"use client";

import { useEffect, useRef, useState } from "react";

type NavItemKey = "product" | "scenarios" | "resources" | "about";

type StickyHeaderProps = {
  theme?: "dark" | "light";
  hideOnScroll?: boolean;
  activeItem?: NavItemKey;
};

const navItems: Array<{ key: NavItemKey; label: string; href: string }> = [
  { key: "product", label: "Product", href: "/#value" },
  { key: "scenarios", label: "Scenarios", href: "/#technology" },
  { key: "resources", label: "Resources", href: "/#resources" },
  { key: "about", label: "About us", href: "/about-us" }
];

export default function StickyHeader({
  theme = "dark",
  hideOnScroll = true,
  activeItem
}: StickyHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const isLightTheme = theme === "light";
  const useLightSurface = isLightTheme || scrolled;

  useEffect(() => {
    if (!hideOnScroll) {
      setHidden(false);
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      const currentY = window.scrollY;
      const previousY = lastScrollYRef.current;
      const deltaY = currentY - previousY;

      if (currentY <= 10) {
        setScrolled(false);
        setHidden(false);
        lastScrollYRef.current = currentY;
        return;
      }

      setScrolled(true);

      // Ignore tiny wheel/touch jitter; only react to meaningful direction changes.
      if (Math.abs(deltaY) < 2) return;

      if (deltaY > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnScroll]);

  const navText = useLightSurface ? "text-[#8E919F]" : "text-[#F0F1F2]";
  const hoverText = isLightTheme
    ? "hover:text-[#25CACC] active:text-[#25CACC]"
    : "hover:text-[#25CACC] active:text-[#25CACC]";
  const headerSurface = useLightSurface
    ? "border-b border-[#E6E7EA] bg-white"
    : "bg-transparent";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${headerSurface} ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="section-container flex h-[72px] items-center justify-between">
        <a
          href="/#top"
          aria-label="ZelosTech home"
          className="group relative flex items-center"
        >
          <img
            src="/logo.png"
            alt="ZelosTech"
            className={`h-6 w-auto md:h-7 transition-opacity duration-300 group-hover:opacity-0 ${
              useLightSurface ? "brightness-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              backgroundColor: "#25CACC",
              WebkitMaskImage: "url('/logo.png')",
              maskImage: "url('/logo.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "left center",
              maskPosition: "left center"
            }}
          />
        </a>
        <div
          className="hidden items-center lg:flex"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <nav className="flex items-center gap-[50px]">
            {navItems.map((item) => {
              const isActive = item.key === activeItem;
              const activeText = isActive
                ? useLightSurface
                  ? "text-[#040B29] font-medium"
                  : "text-[#25CACC] font-bold"
                : "";

              return (
                <a
                  key={item.key}
                  className={`text-[16px] font-normal transition ${navText} ${hoverText} ${activeText}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <button
            className={`ml-[60px] inline-flex h-[34px] w-[146px] items-center justify-center rounded-[5px] text-[16px] font-bold transition ${
              useLightSurface
                ? "bg-black text-white hover:bg-[#25CACC] active:bg-[#25CACC]"
                : "bg-white text-black hover:bg-[#25CACC] hover:text-white active:bg-[#25CACC] active:text-white"
            }`}
          >
            Schedule a call
          </button>
        </div>
      </div>
    </header>
  );
}
