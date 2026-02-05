"use client";

import React from "react";

type NewsItem = {
  title: string;
  date: string;
  image: string;
  summary?: string;
};

type NewsSectionProps = {
  items: NewsItem[];
};

const CARD_WIDTH = 375;
const CARD_GAP = 30;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;
const PAGE_COUNT = 3;

const formatDate = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(parsed);
};

export default function NewsSection({ items }: NewsSectionProps) {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);
  const repeatedItems = React.useMemo(
    () => Array.from({ length: PAGE_COUNT }, (_, page) =>
      items.map((item, index) => ({
        ...item,
        _key: `${item.title}-${page}-${index}`
      }))
    ).flat(),
    [items]
  );

  const updateNavState = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft < maxScrollLeft - 1);
  }, []);

  React.useEffect(() => {
    updateNavState();
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => updateNavState();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateNavState);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavState);
    };
  }, [updateNavState]);

  const handleScrollBy = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  };

  return (
    <section id="news" className="full-bleed bg-white">
      <div className="mx-auto min-h-[100vh] w-full max-w-[1440px] px-6 pb-[60px] pt-[100px] md:px-10 xl:px-[100px]">
        <div className="text-left">
          <h2
            className="text-[60px] font-semibold leading-tight text-black"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Latest news
            <br />
            and events.
          </h2>
          <button
            type="button"
            className="mt-[20px] inline-flex items-center gap-[12px] text-[20px] font-medium text-[#1F62FF]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Visit more news
            <img src="/arrow.svg" alt="" className="h-[20px] w-[20px]" />
          </button>
        </div>

        <div className="mt-[60px] -mx-6 md:-mx-10 xl:-mx-[100px]">
          <div ref={scrollRef} className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex w-max gap-[30px]">
              {repeatedItems.map((item, index) => (
                <article
                  key={item._key}
                  className={`w-[375px] flex-shrink-0 overflow-hidden rounded-[16px] bg-white ${
                    index === 0 ? "ml-[100px]" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[238px] w-[375px] rounded-[12px] object-cover"
                  />
                  <div className="pt-[15px]">
                    <p
                      className="text-[14px] font-semibold text-[#8E919F]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {formatDate(item.date)}
                    </p>
                    <h3
                      className="mt-[10px] text-[20px] font-semibold text-[#111827]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {item.title}
                    </h3>
                    {item.summary ? (
                      <p
                        className="mt-[5px] text-[12px] font-semibold text-[#8E919F]"
                        style={{
                          fontFamily: "var(--font-inter)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {item.summary}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[60px] flex items-center gap-[12px]">
          <button
            type="button"
            onClick={() => handleScrollBy(-1)}
            disabled={!canPrev}
            className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F0F1F2] transition-colors hover:bg-[#1F62FF] active:bg-[#1F62FF] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <img
              src="/qian.svg"
              alt="Previous"
              className="h-[20px] w-[20px] transition group-hover:invert group-hover:brightness-0 group-active:invert group-active:brightness-0"
            />
          </button>
          <button
            type="button"
            onClick={() => handleScrollBy(1)}
            disabled={!canNext}
            className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F0F1F2] transition-colors hover:bg-[#1F62FF] active:bg-[#1F62FF] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <img
              src="/hou.svg"
              alt="Next"
              className="h-[20px] w-[20px] transition group-hover:invert group-hover:brightness-0 group-active:invert group-active:brightness-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
