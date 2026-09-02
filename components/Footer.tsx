import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-xs text-white/50 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono">
          <span className="text-accent-mint">$</span> echo &quot;© {year}{" "}
          {profile.name}&quot;
        </p>
        <p className="font-mono">
          Crafted with <span className="text-accent-rose">Next.js</span> ·{" "}
          <span className="text-accent-sky">Tailwind</span> ·{" "}
          <span className="text-accent-sand">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
