import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "my"],
  defaultLocale: "en",
  localePrefix: "always",
});
