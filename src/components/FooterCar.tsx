"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterCar() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src="/footercar.png"
      alt=""
      className={`footer-car ml-auto h-[110px] w-auto object-contain ${
        visible ? "is-visible" : ""
      }`}
    />
  );
}
