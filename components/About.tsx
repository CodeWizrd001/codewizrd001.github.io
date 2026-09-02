"use client";

import { motion } from "framer-motion";

import { profile, focusAreas } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./about"
          title="A little about me"
          description="I care about clean code, delightful UX, and building things I'd actually use myself."
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-4 text-white/75 leading-relaxed">
              {profile.bio.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "Role", v: profile.role },
                { k: "Company", v: profile.company },
                { k: "Base", v: profile.location.split(",")[0] },
                { k: "Since", v: "2022" },
              ].map((chip) => (
                <div
                  key={chip.k}
                  className="rounded-lg border border-white/8 bg-white/5 px-3 py-2 text-xs"
                >
                  <div className="font-mono uppercase tracking-widest text-white/40">
                    {chip.k}
                  </div>
                  <div className="mt-0.5 text-white/85">{chip.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group flex items-start gap-4 rounded-xl p-5 transition hover:border-white/20"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 transition group-hover:scale-105">
                  <f.icon size={20} className={`text-${f.accent}`} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
