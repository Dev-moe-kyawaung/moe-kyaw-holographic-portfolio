import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/motion/Reveal";

const cards = [
  {
    number: "01",
    title: "Engineering",
    text: "Clean architecture, modular design, testing, maintainability, and long-term scalability.",
  },
  {
    number: "02",
    title: "Experience",
    text: "Modern interaction design with depth, motion, responsive layouts, and accessibility.",
  },
  {
    number: "03",
    title: "Delivery",
    text: "CI/CD automation, secure releases, technical documentation, and deployment readiness.",
  },
];

export default function AboutPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="ABOUT THE ENGINEER"
          title="Building reliable systems with expressive interfaces."
          description="Moe Kyaw is a Senior Android Developer and Software Engineer focused on secure, scalable, and visually thoughtful digital products."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.08}>
              <article className="holo-card glass rounded-[2rem] p-7">
                <span className="font-mono text-cyan-300">{card.number}</span>
                <h2 className="mt-12 text-2xl font-semibold">{card.title}</h2>
                <p className="mt-4 leading-8 text-slate-400">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
