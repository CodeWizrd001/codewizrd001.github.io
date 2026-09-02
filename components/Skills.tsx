"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./skills"
          title="Tools of the trade"
          description="The stack I reach for across product work and side projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-${group.accent}/10 blur-2xl transition-opacity group-hover:opacity-100`}
              />

              <div
                className={`mb-4 grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5`}
              >
                <group.icon size={18} className={`text-${group.accent}`} />
              </div>

              <h3 className="mb-3 text-base font-semibold text-white">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-white/80 transition group-hover:border-${group.accent}/30`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
