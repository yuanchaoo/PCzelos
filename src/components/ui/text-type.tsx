"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type TextTypeProps = {
  text: string | string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  loop?: boolean;
  deleteOnLoop?: boolean;
  cursorCharacter?: string;
  showCursor?: boolean;
  startOnVisible?: boolean;
  reserveSpace?: boolean;
};

export default function TextType({
  text,
  className,
  cursorClassName,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1200,
  initialDelay = 0,
  loop = false,
  deleteOnLoop = true,
  cursorCharacter = "|",
  showCursor = true,
  startOnVisible = true,
  reserveSpace = false
}: TextTypeProps) {
  const targetRef = useRef<HTMLSpanElement | null>(null);
  const hasStartedRef = useRef(false);
  const [started, setStarted] = useState(!startOnVisible);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textList = useMemo(
    () => (Array.isArray(text) ? text : [text]).filter(Boolean),
    [text]
  );
  const longestText = useMemo(
    () => textList.reduce((max, current) => (current.length > max.length ? current : max), ""),
    [textList]
  );

  useEffect(() => {
    if (!startOnVisible || hasStartedRef.current) return;
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      hasStartedRef.current = true;
      setStarted(true);
      return;
    }

    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          hasStartedRef.current = true;
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started || textList.length === 0) return;

    const activeText = textList[textIndex] ?? "";
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (charIndex === 0 && !isDeleting) {
      delay += initialDelay;
    }

    if (!isDeleting && charIndex === activeText.length) {
      const hasNext = textIndex < textList.length - 1;
      if (!hasNext && !loop) return;
      delay = pauseDuration;
    }

    const timer = window.setTimeout(() => {
      const active = textList[textIndex] ?? "";
      const hasNext = textIndex < textList.length - 1;

      if (!isDeleting) {
        if (charIndex < active.length) {
          setCharIndex((prev) => prev + 1);
          return;
        }

        if (deleteOnLoop) {
          setIsDeleting(true);
        } else if (hasNext) {
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        } else if (loop) {
          setTextIndex(0);
          setCharIndex(0);
        }

        return;
      }

      if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
        return;
      }

      setIsDeleting(false);
      if (hasNext) {
        setTextIndex((prev) => prev + 1);
      } else if (loop) {
        setTextIndex(0);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    charIndex,
    deleteOnLoop,
    deletingSpeed,
    initialDelay,
    isDeleting,
    loop,
    pauseDuration,
    started,
    textIndex,
    textList,
    typingSpeed
  ]);

  const activeText = textList[textIndex] ?? "";
  const visibleText = activeText.slice(0, charIndex);

  return (
    <span
      ref={targetRef}
      className={cn("inline-block", reserveSpace && "relative", className)}
    >
      {reserveSpace ? (
        <span aria-hidden className="select-none whitespace-pre-line opacity-0">
          {longestText}
        </span>
      ) : null}

      <span className={cn(reserveSpace && "absolute inset-0")}>
        <span className="whitespace-pre-line">
          {visibleText}
          {showCursor ? (
            <span
              aria-hidden
              className={cn(
                "inline align-baseline text-current animate-pulse",
                cursorClassName
              )}
            >
              {cursorCharacter}
            </span>
          ) : null}
        </span>
      </span>
    </span>
  );
}
