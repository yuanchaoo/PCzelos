"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

export type StatItem = {
  value: number;
  label: string;
  suffix?: string;
};

type StatsCounterProps = {
  items: StatItem[];
  className?: string;
  style?: CSSProperties;
};

const formatNumber = (value: number) =>
  value.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function StatsCounter({
  items,
  className,
  style
}: StatsCounterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const [values, setValues] = useState(() => items.map(() => 0));

  const targets = useMemo(() => items.map((item) => item.value), [items]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValues(targets.map((value) => Math.floor(value * progress)));

      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    raf = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(raf);
  }, [start, targets]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="text-[50px] font-bold text-black">
            {formatNumber(values[index] ?? 0)}
            {item.suffix ?? ""}
          </div>
          <div className="mt-2 text-[20px] font-normal text-[#8E919F]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
