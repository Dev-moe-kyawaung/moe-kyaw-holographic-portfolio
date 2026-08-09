import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Moe Kyaw — Senior Android Developer",
    template: "%s | Moe Kyaw",
  },
  description:
    "Premium portfolio of Moe Kyaw, Senior Android Developer and Software Engineer.",
  openGraph: {
    title: "Moe Kyaw — Holographic Developer Portfolio",
    description:
      "Android, full-stack engineering, architecture, and creative interfaces.",
    type: "website",
    siteName: "Moe Kyaw Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Kyaw — Senior Android Developer",
    description:
      "A holographic portfolio for Android and full-stack engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
