"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/hero.mp4",
  "/Perception%20ability.mp4",
  "/computing%20unit.mp4"
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!video.duration) return;
      setProgress(Math.min(video.currentTime / video.duration, 1));
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const stopProgress = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const handleLoaded = () => {
      setProgress(0);
      video.play().catch(() => undefined);
    };

    const handlePlay = () => {
      stopProgress();
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const handlePause = () => {
      stopProgress();
    };

    const handleEnded = () => {
      stopProgress();
      setProgress(0);
      setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.load();

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      stopProgress();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setProgress(0);
    video.load();
  }, [activeIndex]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-70"
        muted
        playsInline
        preload="auto"
      >
        <source src={HERO_VIDEOS[activeIndex]} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute bottom-[40px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[4px]">
        {HERO_VIDEOS.map((_, index) => {
          const fill =
            index < activeIndex ? 1 : index === activeIndex ? progress : 0;
          return (
            <div
              key={`hero-progress-${index}`}
              className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-white/30"
            >
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{ width: `${fill * 100}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
