import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export const buttonPrimary = `${buttonBase} bg-cyan-400 text-ink-950 hover:bg-cyan-300`;

export const buttonSecondary = `${buttonBase} border border-white/15 text-white hover:border-white/30 hover:bg-white/5`;

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-base leading-7 text-slate-400">{intro}</p> : null}
    </div>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300">
      {children}
    </li>
  );
}
