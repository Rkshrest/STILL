"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Story } from "@/data/stories";

interface ArchiveGridItemProps {
  story: Story;
  isOpen: boolean;
  onToggle: () => void;
  aspectRatio: string;
  marginTopClass: string;
  widthClass: string;
}

export default function ArchiveGridItem({
  story,
  isOpen,
  onToggle,
  aspectRatio,
  marginTopClass,
  widthClass,
}: ArchiveGridItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Safely detect if hover is supported to prevent sticky touch hovers on mobile
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isRevealed = isOpen || isHovered;

  return (
    <div
      className={`flex flex-col cursor-pointer ${marginTopClass} ${widthClass} transition-all duration-500`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        alignSelf: "start",
      }}
    >
      {/* ── Image Container ────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-[var(--color-still-placeholder)]"
        style={{
          width: "100%",
          aspectRatio,
        }}
      >
        <motion.img
          src={story.image}
          alt={story.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.02 : 1.0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Subtle border to frame the image and separate it from backgrounds */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: "1px solid rgba(28, 28, 30, 0.04)",
          }}
        />
      </div>

      {/* ── Story Information (Revealed softly below image) ───────────────── */}
      <motion.div
        initial={false}
        animate={{
          height: isRevealed ? "auto" : 0,
          opacity: isRevealed ? 1 : 0,
          y: isRevealed ? 0 : 8,
          marginTop: isRevealed ? "0.85rem" : "0px",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden flex flex-col text-left"
      >
        {/* Title */}
        <h3
          className="font-cormorant text-left"
          style={{
            fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
            fontWeight: 400,
            color: "var(--color-still-primary)",
            lineHeight: 1.3,
            letterSpacing: "0.02em",
          }}
        >
          {story.title}
        </h3>

        {/* Poetic Fragment */}
        <p
          className="font-cormorant italic"
          style={{
            fontSize: "clamp(0.85rem, 1.3vw, 0.98rem)",
            fontWeight: 300,
            color: "var(--color-still-muted)",
            lineHeight: 1.45,
            marginTop: "0.2rem",
            marginBottom: "0.4rem",
            whiteSpace: "pre-line",
          }}
        >
          {story.poeticFragment}
        </p>

        {/* Location & Year Metadata */}
        <p
          className="font-inter"
          style={{
            fontSize: "0.54rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-still-faint)",
            lineHeight: 1,
          }}
        >
          {story.location}
        </p>

        {/* Reflection (revealed softly on click/active pin state) */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? "0.6rem" : "0px",
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden"
        >
          <div
            style={{
              width: "1.5rem",
              height: "1px",
              backgroundColor: "var(--color-still-border)",
              marginBottom: "0.5rem",
            }}
          />
          <p
            className="font-cormorant"
            style={{
              fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
              lineHeight: 1.5,
              color: "var(--color-still-muted)",
            }}
          >
            {story.creatorReflection}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
