"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { profile, socials } from "@/lib/data";

const rotatingRoles = [
  "ship fullstack products",
  "break & defend systems",
  "prototype with LLMs",
  "live in the terminal",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const target = rotatingRoles[roleIndex];
    let i = 0;
    let deleting = false;

    const tick = () => {
      if (!deleting) {
        i += 1;
        setText(target.slice(0, i));
        if (i === target.length) {
          setTimeout(() => {
            deleting = true;
            loop();
          }, 1400);
          return;
        }
      } else {
        i -= 1;
        setText(target.slice(0, i));
        if (i === 0) {
          setRoleIndex((v) => (v + 1) % rotatingRoles.length);
          return;
        }
      }
      loop();
    };

    const loop = () => {
      const delay = deleting ? 40 : 80;
      timer = setTimeout(tick, delay);
    };

    let timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [roleIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent-mint/70" />
              <span className="relative h-2 w-2 rounded-full bg-accent-mint" />
            </span>
            Available for interesting problems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Ajay</span>.
            <br />
            <span className="text-white/85">I</span>{" "}
            <span className="whitespace-nowrap font-mono text-accent-mint">
              {text}
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-accent-mint animate-blink align-middle" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-white/70 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#timeline"
              className="group inline-flex items-center gap-2 rounded-md bg-accent-mint px-5 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-accent-mint/90"
            >
              See my journey
              <ArrowDownRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              Download resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-4 text-white/70"
          >
            <span className="inline-flex items-center gap-2 text-xs">
              <MapPin size={14} className="text-accent-sand" />
              {profile.location}
            </span>
            <span className="h-4 w-px bg-white/10" />
            <ul className="flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 transition hover:border-accent-mint/50 hover:text-accent-mint"
                  >
                    <s.icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Terminal card — nod to the old site */}
          <div className="glass relative overflow-hidden rounded-2xl p-4 shadow-2xl">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                zsh — ajay
              </span>
            </div>
            <div className="font-mono text-xs leading-relaxed text-white/80 sm:text-sm">
              <p>
                <span className="text-accent-sand">➜</span>{" "}
                <span className="text-accent-mint">~</span>{" "}
                <span className="text-accent-sky">whoami</span>
              </p>
              <p className="pl-4 text-white/70">{profile.name}</p>
              <p className="mt-2">
                <span className="text-accent-sand">➜</span>{" "}
                <span className="text-accent-mint">~</span>{" "}
                <span className="text-accent-sky">cat</span> stack.txt
              </p>
              <p className="pl-4 text-white/70">
                fullstack · security · ai/llm
              </p>
              <p className="mt-2">
                <span className="text-accent-sand">➜</span>{" "}
                <span className="text-accent-mint">~</span>{" "}
                <span className="text-accent-sky">ls</span> history/
              </p>
              <p className="pl-4 text-accent-lime">
                flyfin-ai/ harness/ sap-labs/ nit-c/
              </p>
              <p className="mt-2">
                <span className="text-accent-sand">➜</span>{" "}
                <span className="text-accent-mint">~</span>{" "}
                <span className="animate-blink">▍</span>
              </p>
            </div>

            {/* Profile photo floats over terminal */}
            <div className="pointer-events-none absolute -right-6 -top-6 hidden sm:block">
              <div className="animate-float ring-glow relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20">
                <Image
                  src="/dp.jpg"
                  alt={profile.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
