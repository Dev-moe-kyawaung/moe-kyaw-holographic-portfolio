import { getLocale } from "next-intl/server";
import { roadmap } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default async function RoadmapTimeline() {
  const locale = (await getLocale()) as "en" | "my";

  return (
    <div className="relative mt-16 grid gap-5">
      <div className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />

      {roadmap.map((item, index) => (
        <Reveal key={item.year} delay={index * 0.08}>
          <article className="holo-card glass relative rounded-[2rem] p-7 pl-20">
            <div className="absolute left-5 top-8 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300 bg-[#040610]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#54F5FF]" />
            </div>

            <p className="font-mono text-sm text-cyan-300">{item.year}</p>
            <h2 className="mt-3 text-2xl font-semibold">
              {item.title[locale]}
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              {item.description[locale]}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
