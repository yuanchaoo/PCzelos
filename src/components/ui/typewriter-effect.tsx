"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasStartedRef = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const fullText = useMemo(
    () => words.map((word) => word.text).join(" "),
    [words]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (hasStartedRef.current) return;
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      hasStartedRef.current = true;
      setIsActive(true);
      return;
    }
    const target = containerRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          hasStartedRef.current = true;
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;
    setIndex(0);
    const interval = window.setInterval(() => {
      setIndex((prev) => {
        if (prev >= fullText.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 40);
    return () => window.clearInterval(interval);
  }, [fullText, isActive]);

  const activeText = fullText.slice(0, index);
  return (
    <div
      ref={containerRef}
      className={cn("font-semibold", className)}
    >
      <span className="whitespace-pre-wrap">{activeText}</span>
      <span
        className={cn(
          "inline-block animate-pulse rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 align-middle",
          cursorClassName
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasStartedRef = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const fullText = useMemo(
    () => words.map((word) => word.text).join(" "),
    [words]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (hasStartedRef.current) return;
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      hasStartedRef.current = true;
      setIsActive(true);
      return;
    }
    const target = containerRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          hasStartedRef.current = true;
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;
    setIndex(0);
    const interval = window.setInterval(() => {
      setIndex((prev) => {
        if (prev >= fullText.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 30);
    return () => window.clearInterval(interval);
  }, [fullText, isActive]);

  const activeText = fullText.slice(0, index);

  return (
    <div ref={containerRef} className={cn("flex space-x-1 my-6", className)}>
      <div className="overflow-hidden pb-2">
        <div
          className="font-semibold"
          style={{ whiteSpace: "nowrap" }}
        >
          {activeText}
        </div>
      </div>
      <span
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500 animate-pulse",
          cursorClassName
        )}
      />
    </div>
  );
};
