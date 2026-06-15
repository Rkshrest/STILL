"use client";

import { motion } from "framer-motion";
import type { Story } from "@/data/stories";

export type LayoutVariant = "left" | "right" | "full";

interface StoryCardProps {
  story: Story;
  layout: LayoutVariant;
  index: number;
}

/* ─── Reveal animation ───────────────────────────────────────────────────── */
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const revealDelayed = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.18,
    },
  },
};

/* ─── Category label map ─────────────────────────────────────────────────── */
const categoryLabels: Record<string, string> = {
  "loneliness": "Loneliness",
  "unnoticed-labor": "Unnoticed Labor",
  "routine": "Routine",
  "resilience": "Resilience",
  "waiting": "Waiting",
  "survival": "Survival",
};

/* ─── Shared text block ──────────────────────────────────────────────────── */
function TextBlock({ story, align = "left" }: { story: Story; align?: "left" | "right" }) {
  const lines = story.poeticFragment.split("\n");
  const isRight = align === "right";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isRight ? "flex-end" : "flex-start",
        textAlign: isRight ? "right" : "left",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {/* Title */}
      <p
        className="font-inter"
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-still-faint)",
          marginBottom: "1.25rem",
        }}
      >
        {story.title}
      </p>

      {/* Poetic fragment */}
      <p
        className="font-cormorant"
        style={{
          fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.65,
          color: "var(--color-still-primary)",
          maxWidth: "26rem",
        }}
      >
        {lines.map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </p>

      {/* Divider */}
      <div
        style={{
          width: "2rem",
          height: "1px",
          backgroundColor: "var(--color-still-border)",
          margin: "1.75rem 0",
          alignSelf: isRight ? "flex-end" : "flex-start",
        }}
      />

      {/* Location · year */}
      <p
        className="font-inter"
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.16em",
          color: "var(--color-still-faint)",
          marginBottom: "0.85rem",
        }}
      >
        {story.location} · {story.year}
      </p>

      {/* Category tag */}
      <span
        className="font-inter"
        style={{
          fontSize: "0.55rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-still-faint)",
          border: "1px solid var(--color-still-border)",
          padding: "0.3rem 0.7rem",
          display: "inline-block",
        }}
      >
        {categoryLabels[story.category] ?? story.category}
      </span>
    </div>
  );
}

/* ─── Image placeholder ──────────────────────────────────────────────────── */
function ImagePlaceholder({
  aspectRatio = "4 / 5",
  fullWidth = false,
}: {
  aspectRatio?: string;
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "100%",
        aspectRatio,
        backgroundColor: "var(--color-still-placeholder)",
        overflow: "hidden",
        flexShrink: 0,
      }}
      className="img-placeholder"
    />
  );
}

/* ─── Full-width layout ──────────────────────────────────────────────────── */
function FullLayout({ story }: { story: Story }) {
  const lines = story.poeticFragment.split("\n");

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reveal}
      style={{ width: "100%" }}
    >
      {/* Image — full width, landscape */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "var(--color-still-placeholder)",
          overflow: "hidden",
        }}
        className="img-placeholder"
      />

      {/* Text — below, left-aligned, breathing room */}
      <motion.div
        variants={revealDelayed}
        style={{
          marginTop: "3rem",
          maxWidth: "36rem",
        }}
      >
        <p
          className="font-inter"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-still-faint)",
            marginBottom: "1.25rem",
          }}
        >
          {story.title}
        </p>

        <p
          className="font-cormorant"
          style={{
            fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--color-still-primary)",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </p>

        <div
          style={{
            width: "2rem",
            height: "1px",
            backgroundColor: "var(--color-still-border)",
            margin: "1.75rem 0",
          }}
        />

        <p
          className="font-inter"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            color: "var(--color-still-faint)",
            marginBottom: "0.85rem",
          }}
        >
          {story.location} · {story.year}
        </p>

        <span
          className="font-inter"
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-still-faint)",
            border: "1px solid var(--color-still-border)",
            padding: "0.3rem 0.7rem",
            display: "inline-block",
          }}
        >
          {categoryLabels[story.category] ?? story.category}
        </span>
      </motion.div>
    </motion.article>
  );
}

/* ─── Side-by-side layout ────────────────────────────────────────────────── */
function SideLayout({ story, layout }: { story: Story; layout: "left" | "right" }) {
  const imageLeft = layout === "left";

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reveal}
      style={{
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
        direction: imageLeft ? "ltr" : "rtl",
      }}
    >
      {/* Image */}
      <div style={{ direction: "ltr" }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            aspectRatio: "4 / 5",
            backgroundColor: "var(--color-still-placeholder)",
            overflow: "hidden",
          }}
          className="img-placeholder"
        />
      </div>

      {/* Text */}
      <motion.div
        variants={revealDelayed}
        style={{ direction: "ltr" }}
      >
        <TextBlock story={story} align={imageLeft ? "left" : "right"} />
      </motion.div>
    </motion.article>
  );
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function StoryCard({ story, layout }: StoryCardProps) {
  if (layout === "full") return <FullLayout story={story} />;
  return <SideLayout story={story} layout={layout} />;
}
