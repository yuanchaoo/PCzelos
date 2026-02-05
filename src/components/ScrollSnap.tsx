"use client";

import { useEffect } from "react";

export default function ScrollSnap() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap-section]")
    );
    const snapSections = sections.slice(0, 3);
    if (snapSections.length < 2) return;

    let isAnimating = false;
    let lockTimeout: number | undefined;

    const getActiveIndex = () => {
      let activeIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;
      snapSections.forEach((section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });
      return activeIndex;
    };

    const snapTo = (index: number) => {
      const target = snapSections[index];
      if (!target) return;
      isAnimating = true;
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      lockTimeout = window.setTimeout(() => {
        isAnimating = false;
      }, 900);
    };

    const handleWheel = (event: WheelEvent) => {
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaY) < 10) return;

      const lastSection = snapSections[snapSections.length - 1];
      const snapZoneBottom =
        lastSection.offsetTop + lastSection.offsetHeight;

      if (window.scrollY > snapZoneBottom) return;

      const activeIndex = getActiveIndex();
      const lastIndex = snapSections.length - 1;

      if (event.deltaY > 0 && activeIndex < lastIndex) {
        event.preventDefault();
        snapTo(activeIndex + 1);
      } else if (event.deltaY < 0 && activeIndex > 0) {
        event.preventDefault();
        snapTo(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (lockTimeout) window.clearTimeout(lockTimeout);
    };
  }, []);

  return null;
}
