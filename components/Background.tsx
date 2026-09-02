"use client";

import { useEffect, useRef } from "react";

/**
 * A soft, moving-gradient background that follows the pointer. Purely
 * decorative; sits behind all content and never interferes with clicks.
 */
export function Background() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const handlePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={
        {
          "--x": "50%",
          "--y": "20%",
        } as React.CSSProperties
      }
    >
      {/* Radial pointer glow */}
      <div
        className="absolute inset-0 opacity-70 transition-[background] duration-500"
        style={{
          background:
            "radial-gradient(600px 400px at var(--x) var(--y), rgba(88,212,159,0.18), transparent 60%)",
        }}
      />
      {/* Static color blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#53a148]/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[#81b2be]/15 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[#f0c674]/10 blur-[160px]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
