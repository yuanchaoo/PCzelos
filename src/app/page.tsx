/* eslint-disable @next/next/no-img-element */

import type { CSSProperties } from "react";

import HeroVideo from "@/components/HeroVideo";
import StatsCounter from "@/components/StatsCounter";
import { CometCard } from "@/components/ui/comet-card";
import ColourfulText from "@/components/ui/colourful-text";
import ProductShowcase from "@/components/ProductShowcase";
import VideoTabsSection from "@/components/VideoTabsSection";
import StickyHeader from "@/components/StickyHeader";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import ScenarioCarousel from "@/components/ScenarioCarousel";
import NewsSection from "@/components/NewsSection";
import HomeFooterSection from "@/components/HomeFooterSection";
import { newsItems } from "@/data/newsItems";

const impactStats = [
  { value: 12, label: "Total number of countries", suffix: "+" },
  { value: 320, label: "Total number of cities", suffix: "+" },
  { value: 73000000, label: "Operating mileage", suffix: "+" },
  { value: 17000, label: "Vehicle data", suffix: "+" }
];

type CSSVars = CSSProperties & {
  "--stats-right"?: string;
  "--s1x"?: string;
  "--s1y"?: string;
  "--s2x"?: string;
  "--s2y"?: string;
  "--s3x"?: string;
  "--s3y"?: string;
};

const techHighlights = [
  "End-to-end autonomous stack with perception, planning, and control.",
  "Fleet-grade redundancy built for complex logistics scenarios.",
  "Cloud orchestration with ultra-low latency V2X connectivity."
];

const stats = [
  { value: "12+", label: "Self-developed core modules" },
  { value: "320+", label: "Commercial deployments" },
  { value: "73M+", label: "Autonomous kilometers driven" }
];

const valueCards = [
  {
    title: "Customer Value",
    description:
      "We help government and enterprise significantly improve delivery efficiency and operational safety through autonomous logistics solutions. By enabling end-to-end digitalized dispatching, optimized routing, and 24/7 autonomous operations, we deliver more predictable, reliable, and cost-effective logistics services."
  },
  {
    title: "Operational Value",
    description:
      "Our autonomous logistics system establishes standardized, system-driven, and fully controllable operations. With real-time visibility across vehicles, routes, and orders, operators can achieve greater operational transparency, stronger risk control, and continuous performance optimization using high-quality operational data."
  },
  {
    title: "Scalability Value",
    description:
      "By deploying national-level pilot projects in regulated environments, we create replicable reference models that can be rapidly scaled across regions. This enables a sustainable autonomous logistics platform with strong network effects, supporting long-term expansion worldwide."
  }
];

const typewriterLineOne = [
  { text: "One" },
  { text: "Platform," }
];

const typewriterLineTwo = [
  { text: "Endless" },
  { text: "Possibilities." }
];

const glowSeeds = [
  { s1x: "-6%", s1y: "-8%", s2x: "7%", s2y: "-4%", s3x: "-2%", s3y: "10%" },
  { s1x: "5%", s1y: "-6%", s2x: "-7%", s2y: "4%", s3x: "2%", s3y: "9%" },
  { s1x: "-4%", s1y: "6%", s2x: "8%", s2y: "2%", s3x: "1%", s3y: "-7%" }
];

const videoTabs = [
  {
    label: "Perception ability",
    src: "/Perception%20ability.mp4",
    title: "Full 360° Surround Perception with Millimeter-level Precision",
    description:
      "ntegrating LiDAR, radars, cameras, and ultrasonic sensors, the system delivers 360° perception with millimeter-level accuracy, recognizing and responding to signals and signs in any environment."
  },
  {
    label: "computing unit",
    src: "/computing%20unit.mp4",
    title:
      "L4 autonomous driving computing unit with power consumption below 100 watts",
    description:
      "An L4 autonomous driving computing platform featuring ultra-low power consumption below 100w, delivering high-performance perception and decision-making within a compact.energy-efhcient design."
  },
  {
    label: "Planning and Control",
    src: "/Planning%20and%20Control.mp4",
    title: "Planning and Control Capability",
    description:
      "The PNC module leverages advanced algorithms to plan precise routes and execute smooth trajectories, adapting in real time to ensure safety and efficiency in dynamic traffic environments."
  }
];

const scenarioCards = [
  {
    title: "FMCG Delivery",
    description:
      "Optimizes last-mile logistics, providing a scalable delivery model for the FMCG sector.",
    image: "/fmcg.jpg"
  },
  {
    title: "Traditional Logistics",
    description:
      "Streamlines warehouse transfers with safe, autonomous material handling.",
    image: "/Traditional%20Logistics.png"
  },
  {
    title: "Fresh Produce",
    description:
      "Maintains temperature integrity with reliable autonomous cold-chain routes.",
    image: "/fresh-produce.jpg"
  },
  {
    title: "Pharmaceutical",
    description:
      "Enables smart campus delivery with quiet, low-speed autonomous vehicles.",
    image: "/Pharmaceutical.jpg"
  },
  {
    title: "Park Environment",
    description:
      "Connects industrial zones with flexible, autonomous shuttle operations.",
    image: "/Park%20Environment.jpg"
  }
];

const fleet = [
  {
    name: "Z5",
    range: "70 km",
    load: "500 kg",
    image: "/Z5.png",
    subtitle:
      "One Platform, Multiple Scenarios\nFrom Urban Roads to Private Campuses"
  },
  {
    name: "Z5-Cold Chain",
    range: "70 km",
    load: "500 kg",
    image: "/Z5-Cold%20Chain.png",
    subtitle:
      "Autonomous Driving with Precise Temperature\nControl Reliable, Stress-Free Cold Chain Transport"
  },
  {
    name: "Z5 Multiple Locker",
    range: "70 km",
    load: "500 kg",
    image: "/Z5%20Multiple%20Locker.png",
    subtitle:
      "Multi-Drop Delivery with a Single Vehicle\nEffortless Resolution of Last-Mile Challenges"
  },
  {
    name: "Z8 MAX",
    range: "90 km",
    load: "1000 kg",
    image: "/z8-max.png"
  },
  {
    name: "Z8",
    range: "90 km",
    load: "1000 kg",
    image: "/Z8.png",
    subtitle:
      "Designed for Large Capacity and Heavy Loads\nDelivering Both Safety and Operational Efficiency"
  },
  {
    name: "Z10",
    range: "120 km",
    load: "1500 kg",
    image: "/Z10.png",
    subtitle:
      "Innovative Capacity Expansion\nFlexible Module Upgrades for Boundless Capacity"
  },
  {
    name: "Z10-Cold Chain",
    range: "120 km",
    load: "1500 kg",
    image: "/Z10-Cold%20Chain.png",
    subtitle:
      "Advanced Freshness-Locking Technology\nSmart Control for Maximum Freezing Performance"
  },
  {
    name: "L5",
    range: "90 km",
    load: "1000 kg",
    image: "/L5.png",
    subtitle: "Built for High Payloads, optimized for efficiency\nEffortless Control"
  }
];

const partnerLogos = [
  { src: "/cainiao.png", alt: "Cainiao" },
  { src: "/DHL.png", alt: "DHL" },
  { src: "/jt.png", alt: "J&T Express" },
  { src: "/alibaba.png", alt: "Alibaba.com" },
  { src: "/shopee.png", alt: "Shopee" },
  { src: "/park.png", alt: "Metal Park" },
  { src: "/toyota.png", alt: "Toyota Connected" },
  { src: "/yum.png", alt: "Yum!" },
  { src: "/group.png", alt: "Emirates Post Group" },
  { src: "/pos.png", alt: "POS Malaysia" },
  { src: "/familymart.png", alt: "FamilyMart" },
  { src: "/digi.png", alt: "Digitrans" }
];

export default function Home() {
  const statsVars: CSSVars = {
    "--stats-right":
      "max(24px, calc((100vw - 1440px) / 2 + 120px))"
  };

  return (
    <>
      <main className="bg-slate-50">
      <StickyHeader />
      <section
        id="top"
        className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white"
      >
        <div className="absolute inset-0">
          <HeroVideo />
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand-500/40 blur-[120px]" />
        </div>
        <div className="section-container absolute bottom-10 left-0 right-0 z-10 md:bottom-16 xl:bottom-[100px]">
          <div className="max-w-2xl xl:max-w-none">
            <h1
              className="text-[50px] font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="block xl:whitespace-nowrap">
                A Global Leader in Autonomous
              </span>
              <span className="block">Driving Technology.</span>
            </h1>
            <p
              className="mt-[50px] text-[24px] font-medium text-slate-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The World&apos;s Largest RoboVan Enterprise。
            </p>
          </div>
        </div>
      </section>

      <section
        id="value"
        className="full-bleed relative min-h-[100svh] snap-start bg-[#EEF4FF]"
        style={statsVars}
      >
        <div
          className="absolute top-1/2 z-0 -translate-y-1/2 peer"
          style={{
            left: "max(0px, calc((100vw - 1440px) / 2 + 100px))",
            width: 610,
            height: 610
          }}
        >
          <img
            src="/map.png"
            alt="Global network"
            className="h-full w-full cursor-pointer object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute z-10 opacity-0 transition-opacity duration-200 peer-hover:opacity-100"
          style={{
            top: 85,
            left: "max(0px, calc((100vw - 1440px) / 2 + 335px))"
          }}
        >
          <div className="flex flex-col items-start">
            <div
              className="h-[394px] w-[387px] rounded-[14px] bg-white p-5"
              style={{ boxShadow: "0px 4px 18.1px rgba(0, 0, 0, 0.07)" }}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/mayll.png"
                  alt="Malaysia flag"
                  className="h-[21px] w-[34px] object-contain"
                />
                <span
                  className="text-[20px] font-medium text-[#1D2433]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Malaysia
                </span>
              </div>
              <img
                src="/sia.png"
                alt="Malaysia logistics"
                className="mt-3 h-[227px] w-[340px] rounded-[8px] object-cover"
              />
              <p
                className="mt-3 text-[12px] font-medium text-[#1D2433]"
                style={{
                  fontFamily: "var(--font-inter)",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                Zelostech and Pos Malaysia Launch Malaysia’s 1st Autonomous
                Postal Logistics POC; Reinforcing Zelostech’s Position as the
                Global Partner of Choice for Postal Automation
              </p>
            </div>
            <div className="mt-[15px] inline-flex h-[26px] w-[96px] items-center gap-[6px] rounded-[100px] bg-[#1F62FF] px-[8px] text-[12px] font-semibold text-white">
              <img src="/dingwei.svg" alt="" className="h-[12px] w-[12px]" />
              <span>Malaysia</span>
            </div>
          </div>
        </div>
        <StatsCounter
          items={impactStats}
          className="absolute top-[150px] z-10 flex w-[320px] flex-col gap-[40px]"
          style={{
            fontFamily: "var(--font-inter)",
            right: "var(--stats-right)"
          }}
        />
      </section>

      <div className="relative snap-start">
        <section className="full-bleed sticky top-0 z-0 min-h-[100svh] bg-white">
          <div className="section-container flex min-h-[100svh] flex-col pt-[90px] pb-[90px]">
            <div className="max-w-[820px]">
              <h2
                className="text-[60px] font-semibold leading-[1.15] text-black"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="block">Driving Real Value</span>
                <span className="block text-brand-500 text-flip">
                  Through Autonomy.
                </span>
              </h2>
              <p
                className="mt-6 text-[24px] font-bold text-[#8E919F]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Enabling large-scale, safe and commercially viable autonomous
                logistics across open and closed road environments.
              </p>
            </div>
            <div className="mt-[70px] grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {valueCards.map((card, index) => {
                const [accent, rest] = card.title.split(" ");
                const seed = glowSeeds[index % glowSeeds.length];
                return (
                  <CometCard
                    key={card.title}
                  className="group h-[360px] w-full"
                    glare={false}
                    shadow={false}
                  >
                    <div
                      className="relative h-full w-full overflow-hidden rounded-[24px] bg-[rgba(240,241,242,0.8)] p-8 text-slate-700 transition-colors duration-300 ease-out group-hover:bg-gradient-to-br group-hover:from-[#2871EF] group-hover:to-[#1254C6]"
                      style={
                        {
                          "--s1x": seed.s1x,
                          "--s1y": seed.s1y,
                          "--s2x": seed.s2x,
                          "--s2y": seed.s2y,
                          "--s3x": seed.s3x,
                          "--s3y": seed.s3y
                        } as CSSVars
                      }
                    >
                      <div className="relative z-10">
                      <h3
                        className="text-[22px] font-semibold text-slate-900 transition-colors duration-300 ease-out group-hover:text-white"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <>
                          <span className="text-brand-500 transition-colors duration-300 ease-out group-hover:text-white">
                            {accent}
                          </span>{" "}
                          <span>{rest}</span>
                        </>
                      </h3>
                      <p
                        className="mt-4 text-[16px] leading-relaxed text-[rgba(34,41,67,0.6)] transition-colors duration-300 ease-out group-hover:text-white/85"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {card.description}
                      </p>
                      </div>
                    </div>
                  </CometCard>
                );
              })}
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="h-[100svh]" />

        <section
          id="resources"
          className="full-bleed relative z-10 min-h-[100svh] overflow-hidden bg-[#222943] text-white"
        >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[620px] w-[980px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.38),rgba(255,255,255,0.16),rgba(255,255,255,0)_68%)] blur-2xl" />
          <div className="absolute left-1/2 top-[40px] h-[420px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),rgba(255,255,255,0)_70%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
        </div>
        <div
          className="relative z-10 flex min-h-[100svh] flex-col justify-start px-6 md:px-10"
          style={{
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "100px",
            paddingBottom: "0px",
            fontFamily: "var(--font-inter)"
          }}
        >
          <div className="mx-auto w-full max-w-[1100px] text-left">
            <div className="space-y-2 text-left">
              <TypewriterEffect
                words={typewriterLineOne}
                className="text-left text-[80px] font-semibold leading-[1.1] text-white font-[var(--font-inter)]"
                cursorClassName="hidden"
              />
              <TypewriterEffect
                words={typewriterLineTwo}
                className="text-left text-[80px] font-semibold leading-[1.1] text-white font-[var(--font-inter)]"
                cursorClassName="hidden"
              />
            </div>
            <p className="mt-[50px] max-w-[1100px] text-[24px] leading-relaxed text-white/80">
              Leveraging our unmanned vehicle technology, we address industry
              challenges and enhance logistics efficiency, all while meeting
              the diverse needs of various environments.
            </p>
          </div>
          <ScenarioCarousel cards={scenarioCards} />
        </div>
        </section>
      </div>

      <div id="technology" className="relative h-[200svh] snap-start">
        <section className="full-bleed sticky top-0 min-h-[100svh] bg-white">
          <div
            className="relative flex min-h-[100svh] flex-col justify-start px-6 md:px-10"
            style={{
              maxWidth: "1440px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "240px",
              fontFamily: "var(--font-inter)",
              paddingLeft: "100px"
            }}
          >
            <div className="max-w-[900px]">
              <h2 className="text-[70px] font-semibold leading-[1.15] text-black">
                <span className="block">Fully In-house</span>
                <span className="block whitespace-nowrap text-[#1F62FF]">
                  <ColourfulText text="Vehicle & Autonomy Development." />
                </span>
              </h2>
              <p className="mt-6 text-[24px] font-bold text-[#8E919F]">
                Possessing proprietary hardware and software R&amp;D capabilities.
              </p>
            </div>
            <div className="mt-[100px] flex items-center gap-4">
              <div className="scroll-indicator flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1F62FF] text-white">
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
                  <path d="M12 5v14" />
                  <path d="M19 12l-7 7-7-7" />
                </svg>
              </div>
              <span className="text-[24px] font-semibold text-[#C0C2C9]">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>
      </div>

      <VideoTabsSection items={videoTabs} />

      <div className="relative z-10 -mt-[100svh]">
        <section className="full-bleed bg-white">
          <div className="mx-auto flex h-[280px] w-full max-w-[1440px] flex-col items-center justify-center px-6 text-center md:px-10 xl:px-[100px]">
            <h2
              className="text-[60px] font-semibold leading-tight text-black"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Zelostech <span className="text-[#1F62FF]">Product Family.</span>
            </h2>
            <p
              className="mt-4 text-[30px] font-medium text-[#C0C2C9]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A full spectrum of autonomous logistics vehicles
            </p>
          </div>
        </section>

        <ProductShowcase items={fleet} />
      </div>

      <section className="full-bleed bg-[#222943]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-[60px] pt-[100px] text-center md:px-10 xl:px-[100px]">
          <h2
            className="text-[60px] font-semibold leading-tight text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trusted by Leading Partners
          </h2>
          <p
            className="mt-[16px] text-[30px] font-medium text-[#E6E7EA]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We partner with global leaders in logistics and technology
          </p>
          <div className="logo-marquee mt-[90px]">
            <div className="logo-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[72px] w-auto object-contain opacity-90 md:h-[81px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsSection items={newsItems} />
      <HomeFooterSection />
      </main>
    </>
  );
}
