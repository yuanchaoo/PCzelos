"use client";

import React from "react";

type ProductItem = {
  name: string;
  range: string;
  load: string;
  image: string;
  subtitle?: string;
};

type ProductShowcaseProps = {
  items: ProductItem[];
};

export default function ProductShowcase({ items }: ProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const isZ8Max = activeItem?.name === "Z8 MAX";
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < items.length - 1;
  const subtitleLines = activeItem?.subtitle?.split("\n") ?? null;

  return (
    <section className="full-bleed bg-[#F2F4FA]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-[90px] pt-[40px] md:px-10 xl:px-[100px]">
        <div className="flex justify-center">
          <div className="flex h-[68px] items-center gap-[5px] rounded-[100px] border border-[#E6E7EA] bg-white px-[30px] shadow-none">
            {items.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-visible rounded-[6px] px-[15px] transition-all ${
                    active
                      ? "text-[#222943] text-[16px] font-black"
                      : "text-[16px] font-medium text-[#C0C2C9]"
                  } hover:text-[#222943] hover:text-[16px] hover:font-black`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.name}
                  {active ? (
                    <span className="absolute left-1/2 top-full mt-[6px] h-[3px] w-[15px] -translate-x-1/2 rounded-full bg-[#222943]" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative flex w-full items-center justify-center mt-[10px]">
            {canPrev ? (
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                className="group absolute left-0 top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1F62FF]"
              >
                <img
                  src="/icon_back_d.svg"
                  alt="Previous"
                  className="h-[16px] w-[16px] rotate-180 group-hover:hidden"
                />
                <img
                  src="/icon_back_h.svg"
                  alt="Previous"
                  className="hidden h-[16px] w-[16px] rotate-180 group-hover:block"
                />
              </button>
            ) : null}
            {activeItem?.image && (
              <img
                src={activeItem.image}
                alt={activeItem.name}
                width={1075}
                height={448}
                className="h-[448px] w-[1075px] max-w-full object-contain"
              />
            )}
            {canNext ? (
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => Math.min(prev + 1, items.length - 1))
                }
                className="group absolute right-0 top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1F62FF]"
              >
                <img
                  src="/icon_back_d.svg"
                  alt="Next"
                  className="h-[16px] w-[16px] group-hover:hidden"
                />
                <img
                  src="/icon_back_h.svg"
                  alt="Next"
                  className="hidden h-[16px] w-[16px] group-hover:block"
                />
              </button>
            ) : null}
          </div>
          {isZ8Max ? (
            <div className="mt-[-10px] text-center">
              <h3
                className="text-[50px] font-black text-black"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Z8 Max
              </h3>
              <p
                className="mt-[20px] text-[24px] font-medium leading-[38px] text-[#8E919F]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Innovative Capacity Expansion
                <br />
                Flexible Module Upgrades for Boundless Capacity
              </p>
            </div>
          ) : (
            <div className="mt-[-10px] text-center">
              {activeItem?.name && (
                <h3
                  className="text-[50px] font-bold text-[#111827]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {activeItem.name}
                </h3>
              )}
              {subtitleLines ? (
                <p
                  className="mt-3 text-[24px] leading-[38px] text-[#6B7280]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {subtitleLines.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index === subtitleLines.length - 1 ? null : <br />}
                    </span>
                  ))}
                </p>
              ) : activeItem?.range && activeItem?.load ? (
                <p
                  className="mt-3 text-[24px] leading-[38px] text-[#6B7280]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Range {activeItem.range} · Load {activeItem.load}
                </p>
              ) : null}
            </div>
          )}
          <div className="mt-[40px] mb-[60px] flex items-center justify-center gap-[16px]">
            <button
              type="button"
              className="h-[34px] w-[123px] rounded-[3px] bg-[#1F62FF] text-[16px] font-medium text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore more
            </button>
            <button
              type="button"
              className="h-[34px] w-[123px] rounded-[3px] bg-white text-[16px] font-medium text-[#222943] shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
