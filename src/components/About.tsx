import { about } from "@/content/portfolio";
import { container, SectionHeading } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-24">
      <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-4">
          <SectionHeading id="about-title" eyebrow="About" title="Profile" />
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg leading-8 text-slate-300">{about.paragraph}</p>
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.07] sm:grid-cols-2">
            {about.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-ink-900 p-5 sm:p-6">
                <dt className="font-semibold text-white">{pillar.title}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-slate-400">{pillar.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
