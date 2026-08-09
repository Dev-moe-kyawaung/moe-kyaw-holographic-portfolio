import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HolographicScene from "@/components/three/HolographicScene";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/lib/data";

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute left-[5%] top-[20%] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[35%] h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="grid-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow">{t("hero.eyebrow")}</p>

              <h1 className="gradient-heading mt-7 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-7xl">
                {t("hero.title")}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                {t("hero.description")}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  {t("hero.primary")}
                </Link>

                <Link
                  href="/downloads"
                  className="holo-card glass rounded-full px-6 py-3.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70"
                >
                  {t("hero.secondary")}
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_#79FFD2]" />
                {t("hero.status")}
              </div>
            </div>
          </Reveal>

          <div className="relative h-[520px] lg:h-[680px]">
            <HolographicScene />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="grid-shell grid gap-5 md:grid-cols-3">
          <Metric title={t("metrics.focus")} value={t("metrics.focusValue")} />
          <Metric
            title={t("metrics.architecture")}
            value={t("metrics.architectureValue")}
          />
          <Metric title={t("metrics.vision")} value={t("metrics.visionValue")} />
        </div>
      </section>

      <section className="section-space border-t border-white/5">
        <div className="grid-shell">
          <Reveal>
            <p className="eyebrow">{t("home.eyebrow")}</p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {t("home.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              {t("home.description")}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="noise holo-card glass group block rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2"
                >
                  <div
                    className="h-1.5 w-24 rounded-full"
                    style={{
                      backgroundColor: project.color,
                      boxShadow: `0 0 30px ${project.color}`,
                    }}
                  />

                  <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    {project.category.en}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title.en}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description.en}
                  </p>

                  <span className="mt-8 block text-sm text-cyan-300 transition group-hover:translate-x-2">
                    Open case study →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="holo-card glass rounded-3xl p-7">
      <p className="eyebrow">{title}</p>
      <p className="mt-4 text-xl font-semibold text-cyan-100">{value}</p>
    </div>
  );
}
