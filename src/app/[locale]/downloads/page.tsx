import { Download } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";

export default function DownloadsPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="DOWNLOAD CENTER"
          title="Take the work with you."
          description="Download the latest CV, portfolio summary, and selected project materials."
        />

        <div className="mt-14 max-w-xl">
          <a
            href="/cv/moe-kyaw-cv.pdf"
            download
            className="holo-card glass flex items-center justify-between rounded-3xl p-6 transition hover:border-cyan-300/60"
          >
            <div>
              <p className="font-semibold">Moe Kyaw — CV</p>
              <p className="mt-2 text-sm text-slate-500">PDF document</p>
            </div>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
              <Download size={17} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
