"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin } from "lucide-react";

import { timeline, type TimelineItem } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./timeline"
          title="The journey so far"
          description="Milestones from campus to today — each stop shaped how I build and learn."
        />

        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          {/* Rail (background) */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />
          {/* Progress rail (filled as user scrolls) */}
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-accent-mint via-accent-sky to-accent-sand md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-12 md:space-y-16">
            {timeline.map((item, i) => (
              <TimelineRow
                key={item.id}
                item={item}
                alignRight={i % 2 === 0}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type RowProps = {
  item: TimelineItem;
  alignRight: boolean;
};

function TimelineRow({ item, alignRight }: RowProps) {
  const dotRef = useRef<HTMLSpanElement | null>(null);

  // Per-dot scroll progress. The dot activates as its top passes the middle
  // horizontal band of the viewport (55% → 45%), so it flips exactly when the
  // filled rail crosses it.
  const { scrollYProgress: dotProgress } = useScroll({
    target: dotRef,
    offset: ["start 55%", "start 45%"],
  });

  const [active, setActive] = useState(false);

  // Initialize on mount — useMotionValueEvent only fires on subsequent changes,
  // so we need to seed the state for dots that are already crossed on load.
  useEffect(() => {
    setActive(dotProgress.get() > 0.5);
  }, [dotProgress]);

  useMotionValueEvent(dotProgress, "change", (v) => {
    // Small hysteresis so scrolling right through the boundary doesn't flicker.
    if (v > 0.6 && !active) setActive(true);
    else if (v < 0.4 && active) setActive(false);
  });

  return (
    <li className="relative">
      {/* Dot on the rail */}
      <motion.span
        ref={dotRef}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`absolute left-4 top-6 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border bg-ink-900 shadow-lg shadow-black/40 transition-[background-color,border-color,box-shadow] duration-500 md:left-1/2 ${
          active
            ? `border-${item.accent}/60 bg-${item.accent}/15 shadow-${item.accent}/30`
            : "border-white/10 bg-ink-900"
        }`}
      >
        {/* Soft ring pulse when active */}
        <span
          aria-hidden
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            active
              ? `ring-2 ring-${item.accent}/25 opacity-100`
              : "opacity-0"
          }`}
        />
        <item.icon
          size={16}
          className={`relative transition-colors duration-500 ${
            active ? `text-${item.accent}` : "text-white/30"
          }`}
        />
      </motion.span>

      {/* Card container: mobile single column, desktop alternating */}
      <div
        className={`ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-10 ${
          alignRight ? "" : "md:[&>*:first-child]:col-start-2"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
          className={`glass group relative rounded-2xl p-5 sm:p-6 ${
            alignRight ? "md:mr-2" : "md:ml-2"
          }`}
        >
          {/* Date pill on the empty side (desktop only).
              Offset must clear the 36px timeline dot centered on the rail. */}
          <span
            className={`pointer-events-none absolute top-6 hidden w-max whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white/70 md:inline-block ${
              alignRight
                ? "left-[calc(100%+4rem)]"
                : "right-[calc(100%+4rem)]"
            }`}
          >
            {item.start} — {item.end}
          </span>

          <div className="mb-3 flex flex-wrap items-center gap-2 md:hidden">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/60">
              {item.start} — {item.end}
            </span>
            {item.isCurrent && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent-mint/30 bg-accent-mint/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-mint">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-mint" />
                Current
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full border border-${item.accent}/30 bg-${item.accent}/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-${item.accent}`}
            >
              {item.kind === "work" ? "Work" : "Education"}
            </span>
            {item.isCurrent && (
              <span className="hidden items-center gap-1 rounded-full border border-accent-mint/30 bg-accent-mint/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-mint md:inline-flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-mint" />
                Current
              </span>
            )}
          </div>

          <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
            {item.title}
          </h3>
          <p className={`text-sm font-medium text-${item.accent}`}>
            {item.organization}
          </p>
          {item.location && (
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-white/50">
              <MapPin size={12} />
              {item.location}
            </p>
          )}

          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {item.description}
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span
                  className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-${item.accent}`}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </li>
  );
}
