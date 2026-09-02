"use client";

import { motion } from "framer-motion";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { profile, socials } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./contact"
          title="Let's build something"
          description="Have a project, an idea, or just want to say hi? My inbox is open."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 sm:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                Email
              </p>
              <p className="mt-1 text-lg font-medium text-white sm:text-xl">
                {profile.email}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent-mint px-4 py-2 text-sm font-medium text-ink-950 transition hover:bg-accent-mint/90"
              >
                <Mail size={14} />
                Say hi
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="my-8 h-px bg-white/10" />

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/50">
              Find me elsewhere
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 transition hover:border-accent-mint/40 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex items-center gap-3">
                    <s.icon size={16} className="text-accent-mint" />
                    {s.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-mint"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
