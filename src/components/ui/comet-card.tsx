"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 12,
  translateDepth = 12,
  glare = false,
  glareOpacity = 0.6,
  shadow = false,
  className,
  children
}: {
  rotateDepth?: number;
  translateDepth?: number;
  glare?: boolean;
  glareOpacity?: number;
  shadow?: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const gx = Math.max(0, Math.min(100, (mouseX / width) * 100));
    const gy = Math.max(0, Math.min(100, (mouseY / height) * 100));

    ref.current.style.setProperty("--rx", `${-yPct * rotateDepth}deg`);
    ref.current.style.setProperty("--ry", `${xPct * rotateDepth}deg`);
    ref.current.style.setProperty("--tx", `${xPct * translateDepth}px`);
    ref.current.style.setProperty("--ty", `${-yPct * translateDepth}px`);
    ref.current.style.setProperty("--gx", `${gx}%`);
    ref.current.style.setProperty("--gy", `${gy}%`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
    ref.current.style.setProperty("--tx", "0px");
    ref.current.style.setProperty("--ty", "0px");
    ref.current.style.setProperty("--gx", "50%");
    ref.current.style.setProperty("--gy", "35%");
  };

  return (
    <div className={cn("perspective-distant", className)}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full w-full rounded-2xl transform-3d transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02]"
        style={{
          transform:
            "translate3d(var(--tx, 0px), var(--ty, 0px), 0px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          boxShadow: shadow
            ? "rgba(0, 0, 0, 0.06) 0px 30px 60px -20px"
            : "none"
        }}
      >
        {children}
        {glare ? (
          <div
            className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0) 70%)",
              opacity: glareOpacity
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
