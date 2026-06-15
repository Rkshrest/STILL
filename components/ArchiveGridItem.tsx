"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Story } from "@/data/stories";

interface ArchiveGridItemProps {
  story: Story;
  onClick: () => void;
}

export default function ArchiveGridItem({ story, onClick }: ArchiveGridItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Prevent sticky hover states on mobile touch screens
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col cursor-pointer transition-all duration-300 w-full mb-8 break-inside-avoid"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Image Wrapper (Uncropped, aspect-ratio preserving) ────────────── */}
      <div className="relative overflow-hidden bg-[var(--color-still-placeholder)] w-full">
        <motion.img
          src={story.image}
          alt={story.imageAlt}
          loading="lazy"
          className="w-full h-auto block object-contain"
          animate={{
            scale: isHovered ? 1.02 : 1.0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Subtle border to frame the photograph */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: "1px solid rgba(28, 28, 30, 0.03)",
          }}
        />
      </div>

      {/* ── Story Information (Revealed softly below image on hover) ──────── */}
      <motion.div
        initial={false}
        animate={{
          height: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 6,
          marginTop: isHovered ? "0.6rem" : "0px",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden flex flex-col text-left"
      >
        {/* Title */}
        <h3
          className="font-cormorant text-left"
          style={{
            fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
            fontWeight: 400,
            color: "var(--color-still-primary)",
            lineHeight: 1.3,
          }}
        >
          {story.title}
        </h3>

        {/* Poetic Fragment */}
        <p
          className="font-cormorant italic text-left"
          style={{
            fontSize: "clamp(0.82rem, 1.2vw, 0.94rem)",
            fontWeight: 300,
            color: "var(--color-still-muted)",
            lineHeight: 1.4,
            marginTop: "0.15rem",
            whiteSpace: "pre-line",
          }}
        >
          {story.poeticFragment}
        </p>
      </motion.div>
    </div>
  );
}
