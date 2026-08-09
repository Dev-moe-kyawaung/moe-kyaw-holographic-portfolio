import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/motion/Reveal";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="PROJECT GALAXY"
          title="Selected work orbiting around real product problems."
          description="Explore case studies focused on security, maintainability, performance, accessibility, and visual quality."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="noise holo-card glass group block rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2"
              >
                <div
                  className="h-2 w-24 rounded-full"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 0 25px ${project.color}`,
                  }}
                />

                <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  {project.category.en}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">
                  {project.title.en}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description.en}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <span className="mt-8 block text-sm text-cyan-300 group-hover:translate-x-2">
                  View case study →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
