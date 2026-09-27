import type { OverviewRow, Project } from "@/content/portfolio";
import { ArrowRightIcon } from "./Icons";

const statusTone = ["bg-emerald-400", "bg-amber-400", "bg-rose-400"];

const chip = "rounded-md border border-white/10 bg-ink-800 px-3 py-1.5 text-sm text-slate-200";

function RowItems({ row }: { row: OverviewRow }) {
  if (row.variant === "flow") {
    return (
      <ol className="flex flex-wrap items-center gap-2">
        {row.items.map((item, index) => (
          <li key={item} className="flex items-center gap-2">
            {index > 0 ? <ArrowRightIcon className="size-3.5 text-slate-500" /> : null}
            <span className={chip}>{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {row.items.map((item, index) => (
        <li key={item} className={`${chip} ${row.variant === "status" ? "flex items-center gap-2" : ""}`}>
          {row.variant === "status" ? (
            <span aria-hidden="true" className={`size-2 rounded-full ${statusTone[index % statusTone.length]}`} />
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Structured summary of a system, shown in place of screenshots when none are available. */
export function ProjectOverview({ overview }: { overview: NonNullable<Project["overview"]> }) {
  return (
    <figure className="rounded-xl border border-white/10 bg-ink-900/70 p-5 sm:p-7">
      <figcaption className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
        {overview.title}
      </figcaption>
      <dl className="mt-6 space-y-6">
        {overview.rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{row.label}</dt>
            <dd className="mt-2.5">
              <RowItems row={row} />
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
