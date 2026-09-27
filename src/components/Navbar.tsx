"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/content/portfolio";
import { CloseIcon, GitHubIcon, MenuIcon } from "./Icons";
import { container, focusRing } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-md">
      <nav aria-label="Main" className={`${container} flex h-16 items-center justify-between`}>
        <a
          href="#top"
          className={`rounded text-[15px] font-semibold tracking-tight text-white ${focusRing}`}
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={`ml-3 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 ${focusRing}`}
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          className={`-mr-2 inline-flex size-10 items-center justify-center rounded-md text-slate-300 hover:text-white md:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/[0.06] bg-ink-900 md:hidden"
      >
        <ul className={`${container} flex flex-col py-3`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md py-3 text-base text-slate-300 hover:text-white ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-white/[0.06] pt-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className={`inline-flex items-center gap-2 rounded-md py-3 text-base text-slate-300 hover:text-white ${focusRing}`}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
