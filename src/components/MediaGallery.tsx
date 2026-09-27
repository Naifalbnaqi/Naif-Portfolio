"use client";

import Image from "next/image";
import { type CSSProperties, useId, useRef, useState } from "react";
import type { Screenshot } from "@/content/portfolio";
import { CloseIcon, ExpandIcon } from "./Icons";
import { focusRing } from "./ui";

// Screenshots are small UI captures (~660px wide, ~55 KB PNGs). They are served as-is
// (`unoptimized`) because lossy re-encoding softens their small text, and the frame is
// capped at their native width so they are never enlarged beyond their real resolution.

export function MediaGallery({
  title,
  frameTitle = title,
  screenshots,
}: {
  title: string;
  /** Shorter name for the frame's title bar; defaults to `title`. */
  frameTitle?: string;
  screenshots: Screenshot[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previewId = useId();
  const active = screenshots[activeIndex];

  // Reserve room for the tallest screenshot so switching never shifts the page.
  const tallest = screenshots.reduce((a, b) => (b.height / b.width > a.height / a.width ? b : a));
  const maxWidth = Math.max(...screenshots.map((shot) => shot.width));
  // Two thumbnails sit side by side with the image beside the label; more than two get
  // one column each, so the image goes above a (short) label instead.
  const stacked = screenshots.length > 2;
  const hasCaptions = screenshots.some((shot) => shot.caption);
  // A screenshot that fills most of the frame is aligned to the top; one much shorter than
  // the frame (a wide page next to tall ones) is centred so the empty space is split evenly.
  const fillsFrame = (shot: Screenshot) =>
    shot.height / shot.width / (tallest.height / tallest.width) >= 0.8;

  const openLightbox = () => dialogRef.current?.showModal();
  const closeLightbox = () => dialogRef.current?.close();

  return (
    <figure className="mx-auto w-full" style={{ maxWidth: maxWidth + 2 }}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-950 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-3 border-b border-white/[0.08] bg-ink-800 px-3.5 py-2">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="min-w-0 flex-1 truncate text-center font-mono text-xs text-slate-400">
            {/* The project name is dropped on phones, where it would push the screen name out. */}
            <span className="hidden sm:inline">{frameTitle} · </span>
            {active.label}
          </span>
          <button
            type="button"
            onClick={openLightbox}
            className={`inline-flex size-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/5 hover:text-white ${focusRing}`}
          >
            <ExpandIcon className="size-3.5" />
            <span className="sr-only">Open larger view</span>
          </button>
        </div>

        <button
          type="button"
          id={previewId}
          onClick={openLightbox}
          className={`group relative block w-full cursor-zoom-in bg-shot ${focusRing}`}
          style={{ aspectRatio: `${tallest.width} / ${tallest.height}` }}
        >
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            unoptimized
            sizes={`(min-width: 1024px) ${maxWidth}px, calc(100vw - 4rem)`}
            className={`object-contain ${fillsFrame(active) ? "object-top" : "object-center"}`}
          />
          <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-ink-900/90 px-2.5 py-1 text-xs text-slate-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ExpandIcon className="size-3" />
            Enlarge
          </span>
        </button>
      </div>

      {hasCaptions ? (
        // Every caption sits in the same grid cell, so the cell is as tall as the longest one
        // and switching screenshots never moves what is below. Inactive ones are `invisible`,
        // which also hides them from assistive technology.
        <figcaption className="mt-3 grid text-sm leading-6 text-slate-400">
          {screenshots.map((shot, index) => (
            <span
              key={shot.src}
              className={`col-start-1 row-start-1 ${index === activeIndex ? "" : "invisible"}`}
            >
              {shot.caption}
            </span>
          ))}
        </figcaption>
      ) : null}

      {screenshots.length > 1 ? (
        <div
          role="group"
          aria-label={`${title} screenshots`}
          className={`mt-3 grid gap-3 ${stacked ? "grid-cols-3" : "grid-cols-2"}`}
        >
          {screenshots.map((shot, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={shot.src}
                type="button"
                aria-pressed={selected}
                aria-controls={previewId}
                onClick={() => setActiveIndex(index)}
                className={`flex min-w-0 flex-col gap-2 rounded-lg border p-2 text-left transition-colors duration-200 ${
                  stacked ? "" : "sm:flex-row sm:items-center sm:gap-3"
                } ${focusRing} ${
                  selected
                    ? "border-cyan-400/50 bg-cyan-400/[0.06]"
                    : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`relative w-full shrink-0 overflow-hidden rounded border border-white/10 bg-shot ${
                    stacked ? "h-14 sm:h-16" : "h-14 sm:h-12 sm:w-20"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 640px) 80px, 45vw"
                    className="object-cover"
                    style={{ objectPosition: shot.thumbFocus ?? "50% 0%" }}
                  />
                </span>
                <span
                  className={`min-w-0 px-0.5 text-sm font-medium sm:px-0 ${selected ? "text-white" : "text-slate-300"}`}
                >
                  {shot.label}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-label={`${title}: ${active.label}`}
        onClick={(event) => {
          // A click on the dialog element itself is a click on the backdrop.
          if (event.target === event.currentTarget) closeLightbox();
        }}
        className="m-auto max-h-none max-w-[calc(100vw-1.5rem)] bg-transparent p-0 text-slate-200 backdrop:bg-ink-950/85 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col gap-3 p-2 sm:p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              {frameTitle} · {active.label}
            </p>
            <button
              type="button"
              onClick={closeLightbox}
              className={`inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-ink-850 text-slate-300 transition-colors hover:text-white ${focusRing}`}
            >
              <CloseIcon className="size-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          {/* Native size (1:1) so the UI text is readable. On small screens that area scrolls;
              from `sm` up the image shrinks (never grows) to fit the window instead. */}
          <div className="max-h-[calc(100dvh-7rem)] max-w-full overflow-auto rounded-lg border border-white/10 bg-shot">
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              unoptimized
              className="block h-auto w-(--shot-width) max-w-none sm:max-h-[calc(100dvh-9rem)] sm:w-auto sm:max-w-[calc(100vw-4rem)]"
              style={{ "--shot-width": `${active.width}px` } as CSSProperties}
            />
          </div>
          <p className="text-xs text-slate-400 sm:hidden">Drag to pan across the screenshot.</p>
        </div>
      </dialog>
    </figure>
  );
}
