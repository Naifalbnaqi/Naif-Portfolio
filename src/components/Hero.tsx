import { profile, projects } from "@/content/portfolio";
import { ArrowRightIcon, GitHubIcon } from "./Icons";
import { buttonPrimary, buttonSecondary, container, Eyebrow, focusRing } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 -z-10" />

      <div
        className={`${container} grid grid-cols-1 gap-12 pt-16 pb-14 sm:pt-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-24 lg:pb-20`}
      >
        <div className="lg:col-span-7">
          <Eyebrow>{profile.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={buttonPrimary}>
              View Projects
              <ArrowRightIcon className="size-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={buttonSecondary}>
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>

        <aside
          aria-labelledby="selected-work-title"
          className="rounded-xl border border-white/10 bg-ink-850/80 p-2 backdrop-blur-sm lg:col-span-5"
        >
          <p
            id="selected-work-title"
            className="px-4 pt-3 pb-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-400"
          >
            Selected work
          </p>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={`#${project.id}`}
                  className={`group flex items-center justify-between gap-4 rounded-lg px-4 py-3.5 transition-colors hover:bg-white/[0.04] ${focusRing}`}
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-cyan-400">{project.label}</span>
                    <span className="mt-1 block font-semibold text-white">{project.title}</span>
                    <span className="mt-0.5 block text-sm text-slate-400">{project.tagline}</span>
                  </span>
                  <ArrowRightIcon className="size-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-1 flex items-center gap-2.5 border-t border-white/[0.06] px-4 py-3 text-sm text-slate-400">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-cyan-400" />
            {profile.availability}
          </p>
        </aside>
      </div>

      <div className="border-y border-white/[0.06] bg-ink-900/60">
        <ul aria-label="Focus areas" className={`${container} flex flex-wrap gap-2 py-5`}>
          {profile.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-slate-300"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
