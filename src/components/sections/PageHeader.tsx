import Reveal from "@/components/motion/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="gradient-heading mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
