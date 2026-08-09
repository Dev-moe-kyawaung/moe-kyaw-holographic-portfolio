"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const items = [
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "roadmap", href: "/roadmap" },
  { key: "assistant", href: "/assistant" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "my" : "en";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#040610]/75 backdrop-blur-2xl">
      <div className="grid-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300 opacity-60" />
            <span className="relative h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#54F5FF]" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em]">
            MOE KYAW
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? "text-cyan-200"
                  : "text-slate-400 hover:text-cyan-200"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          <Link
            href={pathname}
            locale={nextLocale}
            className="rounded-full border border-cyan-300/25 px-3 py-1.5 font-mono text-xs text-cyan-100 transition hover:border-cyan-300/70"
          >
            {locale === "en" ? "မြန်မာ" : "EN"}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-cyan-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#040610]/95 px-5 py-5 lg:hidden">
          <nav className="grid gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
