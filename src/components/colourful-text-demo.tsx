"use client";

import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";

export default function ColourfulTextDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <motion.img
        src="https://assets.aceternity.com/linear-demo.webp"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover [mask-image:radial-gradient(circle,transparent,black_80%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="relative z-2 text-center text-2xl font-bold text-white md:text-5xl lg:text-7xl font-sans">
        The best <ColourfulText text="components" /> <br /> you will ever find
      </h1>
    </div>
  );
}
