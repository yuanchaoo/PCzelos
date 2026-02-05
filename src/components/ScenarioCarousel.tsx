"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CARD_WIDTH = 470;
const CARD_GAP = 50;

type ScenarioCard = {
  title: string;
  description: string;
  image: string;
};

type ScenarioCarouselProps = {
  cards: ScenarioCard[];
};

const getIndexFromScroll = (scrollLeft: number) => {
  const step = CARD_WIDTH + CARD_GAP;
  return Math.max(0, Math.round(scrollLeft / step));
};

const ScenarioCarousel = ({ cards }: ScenarioCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const maxIndex = useMemo(() => Math.max(0, cards.length - 1), [cards.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nextIndex = getIndexFromScroll(scroller.scrollLeft);
        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
        const nearStart = scroller.scrollLeft <= 2;
        const nearEnd = scroller.scrollLeft >= Math.max(0, maxScrollLeft - 2);
        setActiveIndex(nextIndex);
        setAtStart(nearStart);
        setAtEnd(nearEnd);
        ticking = false;
      });
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByStep = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const delta = direction === "next" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP);
    scroller.scrollBy({ left: delta, behavior: "smooth" });
  };

  const prevDisabled = activeIndex <= 0 || atStart;
  const nextDisabled = activeIndex >= maxIndex || atEnd;

  return (
    <div className="mt-[114px] -mx-6 md:-mx-10">
      <div
        ref={scrollerRef}
        className="scrollbar-hide flex w-full gap-[50px] overflow-x-auto overflow-y-visible pb-[6px] pt-[6px] pl-6 pr-6 md:pl-[100px] md:pr-[100px]"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="group flex h-[477px] w-[470px] shrink-0 flex-col rounded-[16px] bg-white shadow-[0_0_0_6px_#FFFFFF]"
          >
            <div className="h-[350px] w-full overflow-hidden rounded-[16px]">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="px-[20px] pt-[20px]">
              <h3
                className="text-[24px] font-bold text-black"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {card.title}
              </h3>
              <p
                className="mt-[8px] text-[14px] leading-[1.4] text-[#222943]"
                style={{
                  fontFamily: "var(--font-inter)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[90px] flex justify-center gap-6 pb-[135px]">
        <button
          type="button"
          disabled={prevDisabled}
          onClick={() => scrollByStep("prev")}
          className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#1F62FF] hover:text-white active:bg-[#1F62FF] active:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black"
          aria-label="Previous"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          disabled={nextDisabled}
          onClick={() => scrollByStep("next")}
          className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#1F62FF] hover:text-white active:bg-[#1F62FF] active:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black"
          aria-label="Next"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScenarioCarousel;
