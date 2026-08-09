import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { projects } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title.en,
    description: project.description.en,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "en" | "my";
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <Reveal>
          <p className="eyebrow">{project.category[locale]}</p>

          <h1 className="gradient-heading mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            {project.title[locale]}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {project.description[locale]}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="holo-card glass rounded-3xl p-7">
              <p className="eyebrow">{metric.label}</p>
              <p className="mt-4 text-xl font-semibold text-cyan-100">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="holo-card glass mt-8 rounded-[2rem] p-8">
          <h2 className="text-3xl font-semibold">Case Study</h2>

          <div className="mt-7 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">PROBLEM</p>
              <p className="mt-4 leading-8 text-slate-400">
                Describe the real user problem, business constraints, platform
                limitations, and success criteria here.
              </p>
            </div>

            <div>
              <p className="eyebrow">SOLUTION</p>
              <p className="mt-4 leading-8 text-slate-400">
                Explain the architecture, design decisions, security model,
                implementation approach, and measurable outcome here.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow">TECHNOLOGY</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-cyan-100"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
