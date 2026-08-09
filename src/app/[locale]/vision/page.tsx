import PageHeader from "@/components/sections/PageHeader";
import RoadmapTimeline from "@/components/sections/RoadmapTimeline";

export default function VisionPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="FUTURE VISION"
          title="From mobile systems to connected intelligence."
          description="The long-term direction combines responsible AI, multi-device experiences, spatial interfaces, and human-centered automation."
        />

        <RoadmapTimeline />
      </div>
    </section>
  );
}
