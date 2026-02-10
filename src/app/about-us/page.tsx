/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import HomeFooterSection from "@/components/HomeFooterSection";
import NewsSection from "@/components/NewsSection";
import StickyHeader from "@/components/StickyHeader";
import TextType from "@/components/ui/text-type";
import { newsItems } from "@/data/newsItems";

const LIGHT_TEXT_COLOR = { r: 192, g: 194, b: 201 }; // #C0C2C9
const DARK_TEXT_COLOR = { r: 34, g: 41, b: 67 }; // #222943

const PRIMARY_PARAGRAPH_SENTENCES = [
  "As the Global Pioneer of RoboVan, Zelostech Operating the Largest L4 Autonomous Fleet worldwide, Zelostech rolled out the world's first autonomous truck for urban operations, which has become a key intersection and milestone in the advancement of autonomous driving technology and the transformation of modern logistics, ushering in a new era of large-scale commercialization of RoboVan."
];

const SECONDARY_PARAGRAPH_SENTENCES = [
  "We are committed to providing global customers with fast, reliable, cost-effective and high-efficiency autonomous delivery solutions.",
  "Our business footprint extends across multiple countries and regions including China, Japan, South Korea, Singapore, the United Arab Emirates and Austria."
];

const TERTIARY_PARAGRAPH_SENTENCES = [
  "We have established a dominant edge and an absolutely leading market share in logistics sectors such as postal services, express delivery, fast-moving consumer goods (FMCG), fresh produce and catering."
];

const TIMELINE_LINE_HEIGHT = 380;

const TIMELINE_MILESTONES = [
  {
    year: "2021",
    image: "/2021.png",
    title: "Zelostech Founded",
    description:
      "Founded in 2021, Zelostech was established by a world-class autonomous driving team and is a leading global autonomous driving technology company. From day one, Zelostech has been driven by a clear mission - Making Logistics Simpler."
  },
  {
    year: "2022",
    image: "/Rectangle%2052.png",
    title: "Launch the first prototype vehicle",
    description:
      "In May 2022, Zelostech officially launched its first autonomous logistics prototype vehicle, marking a pivotal first step in the company's journey into autonomous delivery."
  },
  {
    year: "2023.06",
    image: "/202306.png",
    title: "Z5 mass production offline",
    description:
      "In June 2023, Zelostech began mass production of the Z5 - a versatile autonomous delivery vehicle purpose-built for urban logistics scenarios. The model features a clear positioning and supports multi-point cargo delivery, reverse pickup, shuttle operations, and other logistics workflows."
  },
  {
    year: "2023.12",
    image: "/202312.png",
    title: "Zelostech Partners with FairPrice",
    description:
      "In 2023, Zelostech signed a cooperation agreement with Singapore's FairPrice to launch the first autonomous urban logistics transfer project in Singapore."
  },
  {
    year: "2024.06",
    image: "/202406.png",
    title: "Released the industry's first new model designed to cover all scenarios.",
    description:
      "In June 2024, Zelostech unveiled the industry's first all-scenario Z-Series platform along with its full lineup of models. The launch generated strong market momentum, with orders surging rapidly and single-day sales surpassing 5,290 units."
  },
  {
    year: "2024.12",
    image: "/202412.png",
    title: "Obtained the first autonomous logistics vehicle license in Singapore",
    description:
      "Contributed to revising Singapore's TR-68 autonomous driving technical standards, helping to fill local regulatory gaps, and obtained the first autonomous logistics vehicle license in Singapore after passing the M1 test."
  },
  {
    year: "2025.02",
    image: "/202502.png",
    title: "Winning the \"DHL Fast Forward Challenge\" global championship in Dubai",
    description:
      "On February 26 (local time in the UAE), at the highly anticipated \"DHL Fast Forward Challenge\" 2025 competition, Zelostech reached the global finals and won the world championship with its groundbreaking fully electric autonomous delivery vehicle."
  },
  {
    year: "2025.09",
    image: "/202509.png",
    title:
      "Launched the L-Series platform models and introduced L4.5-level autonomous driving technology.",
    description:
      "In September 2025, the company released its L4.5 autonomous driving technology and simultaneously launched the first model of the L-series platform."
  }
];

function mixChannel(start: number, end: number, progress: number): number {
  return Math.round(start + (end - start) * progress);
}

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function getColorByProgress(progress: number): string {
  return `rgb(${mixChannel(
    LIGHT_TEXT_COLOR.r,
    DARK_TEXT_COLOR.r,
    progress
  )}, ${mixChannel(LIGHT_TEXT_COLOR.g, DARK_TEXT_COLOR.g, progress)}, ${mixChannel(
    LIGHT_TEXT_COLOR.b,
    DARK_TEXT_COLOR.b,
    progress
  )})`;
}

export default function AboutUsPage() {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<Array<HTMLElement | null>>([]);
  const visibilityRatiosRef = useRef<Map<number, number>>(new Map());
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const allSentences = useMemo(
    () => [
      ...PRIMARY_PARAGRAPH_SENTENCES,
      ...SECONDARY_PARAGRAPH_SENTENCES,
      ...TERTIARY_PARAGRAPH_SENTENCES
    ],
    []
  );

  useEffect(() => {
    const htmlElement = document.documentElement;
    const previousInlineScrollSnapType = htmlElement.style.scrollSnapType;
    htmlElement.style.scrollSnapType = "y mandatory";

    return () => {
      if (previousInlineScrollSnapType) {
        htmlElement.style.scrollSnapType = previousInlineScrollSnapType;
      } else {
        htmlElement.style.removeProperty("scroll-snap-type");
      }
    };
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const target = animatedTextRef.current;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = viewportHeight * 0.85;
      const endPoint = -rect.height * 0.3;
      const raw = (startPoint - rect.top) / (startPoint - endPoint);
      const nextProgress = clamp(raw);

      setScrollProgress((prev) =>
        Math.abs(prev - nextProgress) < 0.01 ? prev : nextProgress
      );
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateProgress();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const sentenceColors = useMemo(() => {
    const segment = 1 / allSentences.length;

    return allSentences.map((_, index) => {
      const localProgress = clamp((scrollProgress - index * segment) / segment);
      return getColorByProgress(localProgress);
    });
  }, [allSentences, scrollProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = (entry.target as HTMLElement).dataset.milestoneIndex;
          if (!indexAttr) return;
          const index = Number(indexAttr);
          if (Number.isNaN(index)) return;

          if (entry.isIntersecting) {
            visibilityRatiosRef.current.set(index, entry.intersectionRatio);
          } else {
            visibilityRatiosRef.current.delete(index);
          }
        });

        if (visibilityRatiosRef.current.size === 0) return;

        const [nextIndex] =
          [...visibilityRatiosRef.current.entries()].sort(
            (a, b) => b[1] - a[1]
          )[0] ?? [];

        if (typeof nextIndex === "number") {
          setActiveMilestoneIndex(nextIndex);
        }
      },
      {
        root: timelineScrollRef.current,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-8% 0px -42% 0px"
      }
    );

    milestoneRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const activeMilestone =
    TIMELINE_MILESTONES[activeMilestoneIndex] ?? TIMELINE_MILESTONES[0];
  const timelineProgress =
    TIMELINE_MILESTONES.length > 1
      ? activeMilestoneIndex / (TIMELINE_MILESTONES.length - 1)
      : 0;
  const isLastMilestone =
    activeMilestoneIndex === TIMELINE_MILESTONES.length - 1;
  const darkLineHeight = Math.round(
    TIMELINE_LINE_HEIGHT * (0.35 + timelineProgress * 0.65)
  );

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <StickyHeader theme="light" hideOnScroll activeItem="about" />

      <section id="top" className="w-full bg-white pt-[72px]">
        <div className="w-full border-b border-[#E6E7EA]">
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-[56px] pt-[72px] md:px-10 xl:px-[100px]">
            <h1
              className="max-w-[1120px] text-[56px] font-bold leading-[1.08] text-black md:text-[64px] xl:text-[72px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <TextType
                text={"The Global\nPioneer\u00A0of\u00A0RoboVan."}
                typingSpeed={48}
                loop={false}
                showCursor
                cursorCharacter="|"
                reserveSpace
                className="leading-[1.08]"
              />
            </h1>
            <p
              className="mt-[40px] max-w-[1120px] text-[22px] font-bold leading-[1.45] text-[#8E919F] md:text-[24px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Making Logistics Simpler. To Lead the Global Transition to
              Intelligent Transportation.
            </p>
          </div>
        </div>

        <div className="w-full bg-[#040B29]">
          <video
            className="h-[360px] w-full object-cover md:h-[520px] xl:h-[650px]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/about_us.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="w-full min-h-[100svh] bg-white">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-6 pb-[90px] pt-[100px] md:px-10 xl:px-[100px]">
          <h2
            className="text-[46px] font-semibold leading-[1.1] text-black md:text-[58px] xl:text-[70px] xl:leading-[80px]"
            style={{ fontFamily: "var(--font-poppins)", letterSpacing: "0px" }}
          >
            About us
          </h2>

          <div ref={animatedTextRef} className="mt-[48px] max-w-[1240px]">
            <p
              className="text-[24px] font-medium leading-[1.45]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {PRIMARY_PARAGRAPH_SENTENCES.map((sentence, index) => (
                <span key={sentence} className="inline">
                  <span
                    className="transition-colors duration-150"
                    style={{ color: sentenceColors[index] }}
                  >
                    {sentence}
                  </span>
                  {index === PRIMARY_PARAGRAPH_SENTENCES.length - 1 ? "" : " "}
                </span>
              ))}
            </p>

            <p
              className="mt-[24px] text-[24px] font-medium leading-[1.45]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {SECONDARY_PARAGRAPH_SENTENCES.map((sentence, index) => {
                const colorIndex = PRIMARY_PARAGRAPH_SENTENCES.length + index;
                return (
                  <span key={sentence} className="inline">
                    <span
                      className="transition-colors duration-150"
                      style={{ color: sentenceColors[colorIndex] }}
                    >
                      {sentence}
                    </span>
                    {index === SECONDARY_PARAGRAPH_SENTENCES.length - 1
                      ? ""
                      : " "}
                  </span>
                );
              })}
            </p>

            <p
              className="mt-[24px] text-[24px] font-medium leading-[1.45]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {TERTIARY_PARAGRAPH_SENTENCES.map((sentence, index) => {
                const colorIndex =
                  PRIMARY_PARAGRAPH_SENTENCES.length +
                  SECONDARY_PARAGRAPH_SENTENCES.length +
                  index;
                return (
                  <span key={sentence} className="inline">
                    <span
                      className="transition-colors duration-150"
                      style={{ color: sentenceColors[colorIndex] }}
                    >
                      {sentence}
                    </span>
                    {index === TERTIARY_PARAGRAPH_SENTENCES.length - 1
                      ? ""
                      : " "}
                  </span>
                );
              })}
            </p>
          </div>

        </div>
      </section>

      <section className="w-full snap-start border-t border-[#F0F1F2] bg-white pt-[90px]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 xl:h-[calc(100svh-90px)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="px-6 pt-[100px] md:px-10 xl:px-0 xl:pt-0">
            <div className="xl:sticky xl:top-[90px] xl:h-[calc(100svh-90px)] xl:pl-[100px]">
              <p
                className="text-[60px] font-black leading-[1.1] text-[#E6E7EA]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {activeMilestone.year}
              </p>

              <div className="mt-[60px] xl:pl-[10px]">
                <p
                  className="text-[16px] font-bold text-black"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {activeMilestone.year}
                </p>

                <div className="mt-[15px] h-[15px] w-[15px] rounded-full border-[3px] border-black bg-white" />

                <div className="relative ml-[7px] mt-[6px] h-[380px] w-0">
                  <div className="absolute inset-y-0 left-0 border-l-2 border-dashed border-[#E6E7EA]" />
                  <div
                    className="absolute left-0 top-0 border-l-2 border-[#222943] transition-[height] duration-500 ease-out"
                    style={{
                      height: `${Math.min(
                        TIMELINE_LINE_HEIGHT,
                        Math.max(0, darkLineHeight)
                      )}px`
                    }}
                  />
                </div>

                <div
                  className={`mt-[6px] h-[15px] w-[15px] rounded-full border-[3px] bg-white ${
                    isLastMilestone ? "border-black" : "border-[#E6E7EA]"
                  }`}
                />
                <p
                  className={`mt-[15px] text-[16px] font-bold ${
                    isLastMilestone ? "text-black" : "text-[#C0C2C9]"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Today
                </p>
              </div>
            </div>
          </aside>

          <div className="h-[100svh] w-full px-6 pb-[140px] md:px-10 xl:h-[calc(100svh-90px)] xl:px-0 xl:pb-[80px] xl:pr-[100px]">
            <div
              ref={timelineScrollRef}
              className="h-full overflow-y-auto pr-1 scrollbar-hide"
            >
              <div className="w-[890px] max-w-full space-y-0 pb-[120px] pt-[20px] xl:ml-auto">
                {TIMELINE_MILESTONES.map((item, index) => (
                  <article
                    key={item.year}
                    ref={(node) => {
                      milestoneRefs.current[index] = node;
                    }}
                    data-milestone-index={index}
                    className={`w-full max-w-[430px] transition-opacity duration-300 ${
                      index % 2 === 1 ? "ml-auto" : ""
                    } ${
                      index > 0 ? "xl:-mt-[206px]" : ""
                    } ${
                      index === activeMilestoneIndex ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    <p
                      className="text-[20px] font-bold leading-none tracking-[0px] text-[#222943]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.year}
                    </p>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mt-[20px] h-[430px] w-full rounded-[8px] object-cover"
                    />
                    <h3
                      className="mt-[20px] text-[20px] font-semibold leading-[1.2] tracking-[0px] text-[#222943]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-[12px] text-[14px] font-medium leading-[22px] tracking-[0px] text-[#8E919F]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSection
        items={newsItems}
        backgroundClassName="bg-[#F6F9FF]"
        cardBackgroundClassName="bg-transparent"
      />
      <HomeFooterSection />
    </main>
  );
}
