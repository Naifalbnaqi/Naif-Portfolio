import type { Project } from "@/content/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { MediaGallery } from "./MediaGallery";
import { ProjectOverview } from "./ProjectOverview";
import { buttonSecondary, TechTag } from "./ui";

/** Compact list that sits beside a (tall) screenshot gallery. */
function HighlightList({ project }: { project: Project }) {
  return (
    <div className="mt-7">
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
        {project.highlightsHeading}
      </h4>
      <ul className="mt-4 space-y-3">
        {project.highlights.map((highlight) => (
          <li key={highlight.title} className="flex gap-3 text-sm leading-6 text-slate-400">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-400/80" />
            <span>
              <span className="font-semibold text-slate-100">{highlight.title}</span>
              {highlight.detail ? <> — {highlight.detail}</> : null}
              {highlight.items ? <> — {highlight.items.join(", ")}</> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full-width grid below the project, used when the visual beside the text is short. */
function HighlightGrid({ project }: { project: Project }) {
  return (
    <div className="mt-10 border-t border-white/[0.08] pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-sm font-semibold text-white">{project.highlightsHeading}</h4>
        {project.highlightsNote ? <p className="text-sm text-slate-400">{project.highlightsNote}</p> : null}
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {project.highlights.map((highlight) => (
          <li key={highlight.title} className="border-l border-white/10 pl-4">
            <h5 className="text-sm font-semibold text-white">{highlight.title}</h5>
            {highlight.detail ? (
              <p className="mt-1.5 text-sm leading-6 text-slate-400">{highlight.detail}</p>
            ) : null}
            {highlight.items ? (
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400">
                {highlight.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectShowcase({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const titleId = `${project.id}-title`;
  const hasScreenshots = project.screenshots.length > 0;
  // A screenshot gallery is tall, so simple highlights go beside it instead of below. Grouped
  // highlights (with sub-lists) read better in the full-width grid, so they always go below.
  const highlightsBeside = hasScreenshots && !project.highlights.some((highlight) => highlight.items);

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className={`rounded-2xl border p-5 sm:p-8 lg:p-10 ${
        project.featured
          ? "border-white/[0.12] bg-linear-to-b from-ink-800 to-ink-850 shadow-[inset_0_1px_0_0_rgb(34_211_238/0.12)]"
          : "border-white/10 bg-ink-850"
      }`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
            {project.featured ? (
              <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-400" />
            ) : null}
            {project.label}
          </p>
          <h3
            id={titleId}
            className={`mt-3 font-semibold tracking-tight text-white ${
              project.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {project.title}
          </h3>
          {project.context ? <p className="mt-2 text-sm text-slate-400">{project.context}</p> : null}

          <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>

          {project.role ? (
            <div className="mt-6 rounded-lg border-l-2 border-cyan-400 bg-cyan-400/[0.06] py-3 pr-4 pl-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">My role</p>
              <p className="mt-1 font-semibold text-white">{project.role}</p>
              {project.roleNote ? (
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{project.roleNote}</p>
              ) : null}
            </div>
          ) : null}

          {highlightsBeside ? <HighlightList project={project} /> : null}

          <h4 className="sr-only">Technologies</h4>
          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </ul>

          {project.links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonSecondary}
                >
                  <GitHubIcon className="size-4" />
                  {link.label}
                  <ArrowUpRightIcon className="size-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          {hasScreenshots ? (
            // Sticky on desktop: the gallery stays in view while the highlights beside it are read.
            <div className="lg:sticky lg:top-24">
              <MediaGallery
                title={project.title}
                frameTitle={project.shortTitle}
                screenshots={project.screenshots}
              />
            </div>
          ) : project.overview ? (
            <ProjectOverview overview={project.overview} />
          ) : null}
        </div>
      </div>

      {highlightsBeside ? null : <HighlightGrid project={project} />}
    </article>
  );
}
