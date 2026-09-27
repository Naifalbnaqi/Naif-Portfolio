import { projects } from "@/content/portfolio";
import { ProjectShowcase } from "./ProjectShowcase";
import { container, SectionHeading } from "./ui";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className={container}>
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          intro="Two case studies: a cloud-ready media processing platform and a university graduation project, covering the system design, key engineering decisions and my role."
        />
        <div className="mt-12 space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
