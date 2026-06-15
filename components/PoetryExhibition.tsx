"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { poems } from "@/data/poems";

export default function PoetryExhibition() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % poems.length);
  };

  // Keyboard navigation support (Space, Enter, Right Arrow to advance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activePoem = poems[currentIndex];
  if (!activePoem) return null;

  return (
    <main
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
      style={{
        backgroundColor: "var(--color-still-bg)",
        color: "var(--color-still-primary)",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* ── Top Bar (Exit and Pagination Indicator) ───────────────────── */}
      <div className="w-full flex items-center justify-between z-10">
        <Link href="/">
          <span
            className="font-inter link-faint"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            ← Escape
          </span>
        </Link>

        <span
          className="font-inter"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            color: "var(--color-still-faint)",
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} — {String(poems.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Intro Header (Attribution) ────────────────────────────────── */}
      <div className="w-full flex flex-col items-center mt-6 mb-2 text-center z-10">
        <h2
          className="font-inter"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-still-muted)",
            fontWeight: 400,
          }}
        >
          Reflections by Shrest Sharma
        </h2>
        <p
          className="font-cormorant italic"
          style={{
            fontSize: "clamp(0.72rem, 1.5vw, 0.82rem)",
            color: "var(--color-still-faint)",
            marginTop: "0.25rem",
            letterSpacing: "0.02em",
          }}
        >
          Fragments written between journeys, classrooms, airports, and ordinary days.
        </p>
      </div>

      {/* ── Main Poetry Frame ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-[28rem] flex flex-col items-start px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePoem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start w-full text-left"
            >
              {/* Poem Title */}
              <h2
                className="font-cormorant"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "var(--color-still-primary)",
                  lineHeight: 1.2,
                  marginBottom: "clamp(2rem, 4.5vw, 3.25rem)",
                }}
              >
                {activePoem.title}
              </h2>

              {/* Poem Content */}
              <p
                className="font-cormorant italic"
                style={{
                  fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--color-still-primary)",
                  whiteSpace: "pre-line",
                  marginBottom: 0,
                }}
              >
                {activePoem.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom Bar (Minimal next trigger) ─────────────────────────── */}
      <div className="w-full flex justify-center pb-2 z-10">
        <button
          onClick={handleNext}
          className="font-inter focus:outline-none focus:ring-1 focus:ring-[var(--color-still-border)] px-4 py-1"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-still-muted)",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            transition: "color 0.4s ease, opacity 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-still-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-still-muted)";
          }}
        >
          Next Poem →
        </button>
      </div>
    </main>
  );
}
