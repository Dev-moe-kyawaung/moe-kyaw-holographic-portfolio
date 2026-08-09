import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/motion/Reveal";
import { skills } from "@/lib/data";

export default function SkillsPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="TECHNOLOGY CONSTELLATION"
          title="Tools that turn ideas into production systems."
          description="A carefully selected stack for Android, web development, automation, security, and immersive interfaces."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 0.03}>
              <div className="holo-card glass rounded-2xl p-5 transition hover:-translate-y-1">
                <span className="font-mono text-xs text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-medium text-slate-200">{skill}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
