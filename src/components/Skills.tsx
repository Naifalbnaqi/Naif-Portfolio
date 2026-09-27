import { skillGroups } from "@/content/portfolio";
import { SkillIcon } from "./Icons";
import { container, SectionHeading } from "./ui";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className={container}>
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Core skills"
          intro="Grouped by area. Everything listed here is used in the projects below."
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className={`rounded-xl border border-white/10 bg-ink-850 p-6 transition-colors duration-200 hover:border-white/20 ${
                group.wide ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <SkillIcon name={group.icon} className="size-[18px]" />
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <ul
                className={`mt-5 grid gap-x-8 gap-y-2.5 text-sm text-slate-300 ${
                  group.wide ? "sm:grid-cols-2" : ""
                }`}
              >
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-cyan-400/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
