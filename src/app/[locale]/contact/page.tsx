import { Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";

export default function ContactPage() {
  return (
    <section className="section-space pt-40">
      <div className="grid-shell">
        <PageHeader
          eyebrow="CONTACT PORTAL"
          title="Let’s build something with a clear point of view."
          description="For Android development, full-stack systems, UI engineering, or technical collaboration, send a message through the available channels."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <ContactCard
            icon={<Mail size={19} />}
            title="Email"
            value="hello@example.com"
            href="mailto:hello@example.com"
          />

          <ContactCard
            icon={<MapPin size={19} />}
            title="Location"
            value="Tachileik, Myanmar"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
        {icon}
      </span>
      <div>
        <p className="eyebrow">{title}</p>
        <p className="mt-3 text-lg font-semibold text-slate-200">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="holo-card glass flex items-center gap-5 rounded-3xl p-6 hover:border-cyan-300/60"
    >
      {content}
    </a>
  ) : (
    <div className="holo-card glass flex items-center gap-5 rounded-3xl p-6">
      {content}
    </div>
  );
}
