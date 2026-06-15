"use client";

import { useState } from "react";
import Link from "next/link";
import { archiveStories } from "@/data/stories";
import ArchiveGridItem from "@/components/ArchiveGridItem";
import ArchiveLightbox from "@/components/ArchiveLightbox";

export default function ArchiveWall() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main
      className="min-h-screen flex flex-col justify-between"
      style={{
        backgroundColor: "var(--color-still-bg)",
      }}
    >
      <div>
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header
          style={{
            padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 5rem)",
            paddingBottom: 0,
          }}
        >
          {/* Back link */}
          <Link href="/" className="inline-block mb-6">
            <span
              className="font-inter link-faint"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              ← Still
            </span>
          </Link>

          {/* Archive heading */}
          <h1
            className="font-cormorant"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "var(--color-still-primary)",
              lineHeight: 1,
            }}
          >
            Archive
          </h1>

          {/* Subline */}
          <p
            className="font-inter"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-still-faint)",
              marginTop: "0.75rem",
            }}
          >
            Twenty-Five Moments · Quietly Observed
          </p>

          {/* Thin Rule */}
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--color-still-border)",
              marginTop: "clamp(1.75rem, 3.5vw, 2.5rem)",
            }}
          />
        </header>

        {/* ── Masonry Contact Sheet Gallery ─────────────────────────────── */}
        <div
          style={{
            padding: "clamp(2rem, 6vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
          }}
        >
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_auto]">
            {archiveStories.map((story, index) => (
              <ArchiveGridItem
                key={story.id}
                story={story}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)",
          borderTop: "1px solid var(--color-still-border)",
          backgroundColor: "var(--color-still-bg)",
        }}
      >
        <div className="max-w-[32rem]">
          <p
            className="font-cormorant italic"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
              fontWeight: 300,
              color: "var(--color-still-muted)",
              lineHeight: 1.6,
            }}
          >
            &ldquo;To observe is not to intrude. It is to acknowledge.&rdquo;
          </p>

          <Link href="/poems" className="inline-block mt-8">
            <span
              className="font-inter link-muted"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Enter Poetry Exhibition →
            </span>
          </Link>
        </div>
      </footer>

      {/* ── Immersive Fullscreen Lightbox Modal ────────────────────────── */}
      {lightboxIndex !== null && (
        <ArchiveLightbox
          stories={archiveStories}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={(idx) => setLightboxIndex(idx)}
        />
      )}
    </main>
  );
}
