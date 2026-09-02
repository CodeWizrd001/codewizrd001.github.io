"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

import { accolades, projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="./projects"
          title="Things I've built"
          description="A mix of personal experiments, course projects, and one patent."
        />

        {/* Featured — full-size cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 sm:p-7"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-${p.accent}/15 blur-3xl transition group-hover:scale-110`}
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5">
                    <p.icon size={18} className={`text-${p.accent}`} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {p.kind}
                    </p>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:border-accent-mint/40 hover:text-accent-mint"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="mt-3 font-mono text-xs text-white/50">{p.period}</p>

              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-${p.accent}`}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Others — compact grid */}
        {others.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => {
              const Wrapper: React.ElementType = p.href ? "a" : "div";
              const wrapperProps = p.href
                ? { href: p.href, target: "_blank", rel: "noreferrer" }
                : {};
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`glass group block rounded-xl p-5 transition hover:border-white/20 ${
                      p.href ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                        <p.icon size={16} className={`text-${p.accent}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-white">
                            {p.title}
                          </h3>
                          {p.href && (
                            <ArrowUpRight
                              size={14}
                              className={`mt-0.5 text-white/40 transition group-hover:text-${p.accent}`}
                            />
                          )}
                        </div>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-white/40">
                          {p.kind} · {p.period}
                        </p>
                        <p className="mt-2 text-xs text-white/65 leading-relaxed">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/55"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Accolades — patent callout */}
        {accolades.length > 0 && (
          <div className="mt-10 grid gap-4">
            {accolades.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.href ?? "#"}
                target={a.href ? "_blank" : undefined}
                rel={a.href ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-${a.accent}/25 bg-gradient-to-br from-${a.accent}/10 via-white/[0.03] to-transparent p-5 transition hover:border-${a.accent}/50 sm:p-6`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-${a.accent}/20 blur-3xl`}
                />
                <div
                  className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-${a.accent}/30 bg-${a.accent}/10`}
                >
                  <Award size={18} className={`text-${a.accent}`} />
                </div>
                <div className="relative flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border border-${a.accent}/30 bg-${a.accent}/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-${a.accent}`}
                    >
                      Recognition
                    </span>
                    <span className="font-mono text-[11px] text-white/50">
                      {a.organization} · {a.date}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{a.description}</p>
                  {a.href && (
                    <p
                      className={`mt-3 inline-flex items-center gap-1 font-mono text-xs text-${a.accent}`}
                    >
                      View patent
                      <ArrowUpRight
                        size={12}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
