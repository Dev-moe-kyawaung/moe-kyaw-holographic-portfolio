import PageHeader from "@/components/sections/PageHeader";
import RoadmapTimeline from "@/components/sections/RoadmapTimeline";

export default function RoadmapPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="ANDROID ROADMAP"
          title="A five-year trajectory for responsible innovation."
          description="The roadmap connects Android engineering, security, AI, spatial interfaces, and human-centered product design."
        />
        <RoadmapTimeline />
      </div>
    </section>
  );
}
