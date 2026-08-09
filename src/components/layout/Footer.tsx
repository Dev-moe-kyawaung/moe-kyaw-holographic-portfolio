import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="grid-shell flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em]">MOE KYAW</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
            Senior Android Developer and Software Engineer building secure,
            expressive, and production-ready digital experiences.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <SocialIcon href="https://github.com" label="GitHub">
            <Github size={17} />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" label="LinkedIn">
            <Linkedin size={17} />
          </SocialIcon>
          <SocialIcon href="mailto:hello@example.com" label="Email">
            <Mail size={17} />
          </SocialIcon>
        </div>
      </div>

      <div className="grid-shell mt-10 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-600 sm:flex-row">
        <span>© 2026 Moe Kyaw. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/credits">Credits</Link>
          <Link href="/downloads">CV</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/60 hover:text-cyan-200"
    >
      {children}
    </a>
  );
}
