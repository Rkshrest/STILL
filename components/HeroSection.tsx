"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Animation Variants ─────────────────────────────────────────────────── */

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  },
});

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  },
});

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-still-bg)" }}
      aria-label="STILL hero"
    >
      {/* Top rule — grows from left */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          backgroundColor: "var(--color-still-border)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />


      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div
        className="flex flex-col items-center text-center w-full"
        style={{ padding: "0 2rem", maxWidth: "64rem", margin: "0 auto" }}
      >
        {/* STILL — the wordmark */}
        <motion.h1
          className="font-cormorant"
          style={{
            fontSize: "clamp(6.5rem, 22vw, 20rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            lineHeight: 0.88,
            color: "var(--color-still-primary)",
            userSelect: "none",
          }}
          variants={fadeUp(0.0)}
          initial="hidden"
          animate="visible"
        >
          STILL
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-inter"
          style={{
            fontSize: "clamp(0.55rem, 1.1vw, 0.68rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-still-faint)",
            marginTop: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
          variants={fadeIn(0.7)}
          initial="hidden"
          animate="visible"
        >
          Humans Between Frames
        </motion.p>

        {/* Reflective copy — raised, tighter to subtitle */}
        <motion.p
          className="font-cormorant"
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.85,
            color: "#58544F",
            marginTop: "clamp(2rem, 3.5vw, 2.75rem)",
            maxWidth: "34rem",
          }}
          variants={fadeIn(1.3)}
          initial="hidden"
          animate="visible"
        >
          We pass through hundreds of lives.
          <br />
          Rarely do we stop long enough to notice one.
        </motion.p>

        {/* CTAs — quiet, text-only, stacked vertically */}
        <motion.div
          className="flex flex-col items-center"
          style={{ gap: "0.55rem", marginTop: "clamp(2.5rem, 4.5vw, 3.5rem)" }}
          variants={fadeIn(2.0)}
          initial="hidden"
          animate="visible"
        >
          {/* Primary — Begin */}
          <Link href="/poems" id="cta-begin">
            <span
              className="font-inter"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-still-primary)",
                transition: "opacity 0.5s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.5")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Begin
            </span>
          </Link>

          {/* Secondary — Archive */}
          <Link href="/archive" id="cta-explore-archive">
            <span
              className="font-inter"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-still-faint)",
                transition: "color 0.5s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-still-muted)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-still-faint)")
              }
            >
              Archive
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom rule — grows from right */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          backgroundColor: "var(--color-still-border)",
          transformOrigin: "right",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </section>
  );
}
