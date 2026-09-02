"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-white/80 transition hover:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/5 text-accent-mint transition group-hover:border-accent-mint/60">
            {"</>"}
          </span>
          <span className="hidden sm:inline">
            {profile.handle}
            <span className="text-accent-mint">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative rounded-md px-3 py-2 text-sm text-white/70 transition hover:text-white"
              >
                <span className="font-mono text-accent-mint/80">/</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md border border-accent-mint/40 bg-accent-mint/10 px-4 py-2 text-sm font-medium text-accent-mint transition hover:border-accent-mint hover:bg-accent-mint/15 md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 backdrop-blur md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-md px-3 py-2 text-sm text-accent-mint hover:bg-white/5"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
