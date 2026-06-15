"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Story } from "@/data/stories";

interface ArchiveLightboxProps {
  stories: Story[];
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export default function ArchiveLightbox({
  stories,
  currentIndex,
  onClose,
  onChangeIndex,
}: ArchiveLightboxProps) {
  const activeStory = stories[currentIndex];

  const handleNext = () => {
    onChangeIndex((currentIndex + 1) % stories.length);
  };

  const handlePrev = () => {
    onChangeIndex((currentIndex - 1 + stories.length) % stories.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, stories.length]);

  if (!activeStory) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-black/98 backdrop-blur-md"
      style={{
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
      }}
      onClick={onClose}
    >
      {/* ── Top Bar (Close and Progress) ──────────────────────────────── */}
      <div
        className="w-full flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="font-inter bg-transparent border-none text-neutral-400 hover:text-white transition-colors duration-300"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ← Close
        </button>

        <span
          className="font-inter text-neutral-500"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} — {String(stories.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Main View (Image and Navigation Arrows) ───────────────────── */}
      <div className="flex-1 w-full flex items-center justify-between relative max-w-[90rem]">
        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden md:flex absolute left-0 z-10 items-center justify-center text-neutral-500 hover:text-white bg-transparent border-none transition-colors duration-300"
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
          }}
          aria-label="Previous image"
        >
          ←
        </button>

        {/* Center Image Container */}
        <div
          className="flex-1 h-full flex items-center justify-center py-6 mx-auto px-4 md:px-16"
          onClick={onClose}
        >
          <div
            className="relative flex flex-col items-center max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center"
              >
                {/* Uncropped, Preserved Composition Image */}
                <img
                  src={activeStory.image}
                  alt={activeStory.imageAlt}
                  className="max-w-[85vw] max-h-[52vh] object-contain block shadow-2xl"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                />

                {/* Story Details below Image */}
                <div className="w-full max-w-[28rem] mt-6 flex flex-col text-left px-2">
                  <h3
                    className="font-cormorant text-white"
                    style={{
                      fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {activeStory.title}
                  </h3>

                  <p
                    className="font-cormorant italic text-neutral-400 mt-1"
                    style={{
                      fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                      lineHeight: 1.45,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {activeStory.poeticFragment}
                  </p>

                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      margin: "0.6rem 0",
                    }}
                  />

                  <p
                    className="font-cormorant text-neutral-300"
                    style={{
                      fontSize: "clamp(0.8rem, 1.2vw, 0.92rem)",
                      lineHeight: 1.5,
                    }}
                  >
                    {activeStory.creatorReflection}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden md:flex absolute right-0 z-10 items-center justify-center text-neutral-500 hover:text-white bg-transparent border-none transition-colors duration-300"
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
          }}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* ── Bottom Mobile Navigation Assist ───────────────────────────── */}
      <div
        className="flex md:hidden items-center gap-12 pb-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handlePrev}
          className="font-inter text-neutral-400 hover:text-white bg-transparent border-none"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ← Prev
        </button>

        <button
          onClick={handleNext}
          className="font-inter text-neutral-400 hover:text-white bg-transparent border-none"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
