"use client";

import { motion } from "framer-motion";
import { ExternalLink, ScrollText } from "lucide-react";

import { certificates } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./certificates"
          title="Courses & Certificates"
          description="A few of the specializations and courses I've completed along the way."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="glass group flex items-start gap-4 rounded-2xl p-5 transition hover:border-accent-sand/40 hover:bg-white/[0.06]"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-accent-sand">
                <ScrollText size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <ExternalLink
                    size={14}
                    className="mt-0.5 text-white/40 transition group-hover:text-accent-sand"
                  />
                </div>
                <p className="mt-1 text-xs text-white/55">{c.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
