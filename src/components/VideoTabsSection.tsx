"use client";

import React from "react";

type VideoTabItem = {
  label: string;
  src: string;
  title?: string;
  description?: string;
};

type VideoTabsSectionProps = {
  items: VideoTabItem[];
};

export default function VideoTabsSection({ items }: VideoTabsSectionProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const activeItem = items[activeIndex] ?? items[0];

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const scrollTop = window.scrollY + rect.top;
        const progress = (window.scrollY - scrollTop) / viewport;
        const nextIndex = Math.min(
          items.length - 1,
          Math.max(0, Math.round(progress))
        );
        setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => onScroll();
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items.length]);

  const scrollToIndex = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const viewport = window.innerHeight || 1;
    window.scrollTo({ top: scrollTop + index * viewport, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="full-bleed relative snap-start bg-black"
      style={{ scrollSnapStop: "always" }}
    >
      <div
        className="relative"
        style={{ height: `${(items.length + 1) * 100}svh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          {items.map((item, index) => (
            <video
              key={item.label}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(14,14,20,0)_100%)]" />
          {activeItem?.title && activeItem?.description && (
            <div className="absolute left-6 bottom-[148px] max-w-[560px] text-left xl:left-[100px]">
              <h3
                className="text-[28px] font-bold leading-[32px] text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {activeItem.title}
              </h3>
              <p
                className="mt-4 text-[14px] font-normal leading-normal tracking-[1px] text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {activeItem.description}
              </p>
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[88px] w-full border-t border-white/20 bg-black/30 backdrop-blur-[1px]" />
        <div className="pointer-events-none absolute inset-0 flex h-[88px] w-full items-center justify-center">
          <div className="pointer-events-auto flex items-center gap-10">
            {items.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className={`text-[15px] font-medium tracking-[2px] rounded-[5px] ${
                    active
                      ? "bg-[rgba(251,252,255,0.35)] text-[#FAFAFB] backdrop-blur-[4px]"
                      : "text-[rgba(250,250,251,0.8)]"
                  } px-[30px] py-[11px] transition-colors hover:bg-[rgba(251,252,255,0.35)] hover:text-[#FAFAFB] hover:backdrop-blur-[4px]`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
