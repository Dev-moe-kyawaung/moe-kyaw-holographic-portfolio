import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/motion/Reveal";

const architectureItems = [
  "Clean Architecture",
  "MVVM",
  "Unidirectional Data Flow",
  "Repository Pattern",
  "Dependency Injection",
  "Offline-First Data",
  "Secure Storage",
  "Automated Testing",
];

export default function ArchitecturePage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="ARCHITECTURE SPHERES"
          title="Systems designed to remain understandable."
          description="Architecture is treated as a product feature: clear boundaries, predictable state, secure data flow, and maintainable modules."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {architectureItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="holo-card glass rounded-3xl p-6">
                <span className="font-mono text-xs text-violet-300">
                  NODE {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-8 text-lg font-semibold">{item}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
