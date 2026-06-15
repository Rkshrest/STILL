"use client";

import { useState } from "react";
import Link from "next/link";
import { archiveStories } from "@/data/stories";
import ArchiveGridItem from "@/components/ArchiveGridItem";

// Highly stylized staggered configs for items to prevent "Instagram grid" symmetry
const staggerConfigs = [
  // 0 - 3
  { aspectRatio: "4/5", marginTop: "md:mt-0", width: "w-full" },
  { aspectRatio: "1/1", marginTop: "md:mt-12", width: "w-11/12 md:ml-auto" },
  { aspectRatio: "3/4", marginTop: "md:mt-6", width: "w-full" },
  { aspectRatio: "2/3", marginTop: "md:mt-20", width: "w-10/12 md:mx-auto" },
  // 4 - 7
  { aspectRatio: "4/3", marginTop: "md:mt-2", width: "w-full" },
  { aspectRatio: "3/4", marginTop: "md:mt-10", width: "w-11/12 md:mr-auto" },
  { aspectRatio: "1/1", marginTop: "md:mt-16", width: "w-full" },
  { aspectRatio: "2/3", marginTop: "md:mt-6", width: "w-10/12 md:ml-auto" },
  // 8 - 11
  { aspectRatio: "4/5", marginTop: "md:mt-14", width: "w-full" },
  { aspectRatio: "3/4", marginTop: "md:mt-0", width: "w-11/12" },
  { aspectRatio: "1/1", marginTop: "md:mt-18", width: "w-10/12 md:mr-auto" },
  { aspectRatio: "4/3", marginTop: "md:mt-6", width: "w-full" },
  // 12 - 15
  { aspectRatio: "2/3", marginTop: "md:mt-10", width: "w-11/12 md:mx-auto" },
  { aspectRatio: "4/5", marginTop: "md:mt-2", width: "w-full" },
  { aspectRatio: "1/1", marginTop: "md:mt-16", width: "w-10/12 md:ml-auto" },
  { aspectRatio: "3/4", marginTop: "md:mt-12", width: "w-full" },
  // 16 - 19
  { aspectRatio: "4/3", marginTop: "md:mt-0", width: "w-11/12 md:mr-auto" },
  { aspectRatio: "2/3", marginTop: "md:mt-20", width: "w-full" },
  { aspectRatio: "4/5", marginTop: "md:mt-6", width: "w-10/12 md:mx-auto" },
  { aspectRatio: "1/1", marginTop: "md:mt-10", width: "w-full" },
  // 20 - 23
  { aspectRatio: "3/4", marginTop: "md:mt-16", width: "w-11/12 md:ml-auto" },
  { aspectRatio: "4/3", marginTop: "md:mt-2", width: "w-full" },
  { aspectRatio: "2/3", marginTop: "md:mt-12", width: "w-10/12 md:mx-auto" },
  { aspectRatio: "4/5", marginTop: "md:mt-6", width: "w-full" },
  // 24
  { aspectRatio: "1/1", marginTop: "md:mt-10", width: "w-full md:w-11/12 md:mx-auto lg:w-10/12 sm:col-span-2 md:col-span-1 md:col-start-2 lg:col-span-2 lg:col-start-2" },
];

export default function ArchiveWall() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Clear active story when clicking outside a grid item
  const handlePageClick = () => {
    setActiveId(null);
  };

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--color-still-bg)",
      }}
      onClick={handlePageClick}
    >
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

      {/* ── Staggered Contact Sheet Grid ───────────────────────────────── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{
          padding: "clamp(2rem, 6vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
          gap: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {archiveStories.map((story, index) => {
          const config = staggerConfigs[index % staggerConfigs.length] || {
            aspectRatio: "1/1",
            marginTop: "md:mt-0",
            width: "w-full",
          };

          return (
            <ArchiveGridItem
              key={story.id}
              story={story}
              isOpen={activeId === story.id}
              onToggle={() => {
                setActiveId(activeId === story.id ? null : story.id);
              }}
              aspectRatio={config.aspectRatio}
              marginTopClass={config.marginTop}
              widthClass={config.width}
            />
          );
        })}
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
    </main>
  );
}
