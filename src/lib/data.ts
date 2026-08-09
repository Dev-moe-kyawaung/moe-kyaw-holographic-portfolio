export type Locale = "en" | "my";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  description: Record<Locale, string>;
  technologies: string[];
  color: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "secure-wallet",
    title: {
      en: "Secure Wallet",
      my: "လုံခြုံသော Wallet",
    },
    category: {
      en: "Android Finance",
      my: "Android Finance Application",
    },
    description: {
      en: "A secure wallet concept focused on biometric protection, modular architecture, and resilient offline states.",
      my: "Biometric Protection၊ Modular Architecture နှင့် Offline State များကို အာရုံစိုက်ထားသော Secure Wallet Concept ဖြစ်ပါသည်။",
    },
    technologies: ["Kotlin", "Compose", "Room", "Keystore"],
    color: "#54F5FF",
    featured: true,
    metrics: [
      { label: "Architecture", value: "Clean + Modular" },
      { label: "Security", value: "Keystore Ready" },
      { label: "UI", value: "Compose Native" },
    ],
  },
  {
    slug: "commerce-orbit",
    title: {
      en: "Commerce Orbit",
      my: "Commerce Orbit",
    },
    category: {
      en: "E-Commerce Platform",
      my: "E-Commerce Platform",
    },
    description: {
      en: "A modern commerce experience with animated discovery, scalable APIs, and a responsive web dashboard.",
      my: "Animated Product Discovery၊ Scalable API နှင့် Responsive Dashboard ပါဝင်သော Commerce Platform ဖြစ်ပါသည်။",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    color: "#9B7BFF",
    featured: true,
    metrics: [
      { label: "Frontend", value: "Next.js App Router" },
      { label: "Data", value: "Typed API Layer" },
      { label: "Experience", value: "Responsive UI" },
    ],
  },
  {
    slug: "health-pulse",
    title: {
      en: "Health Pulse",
      my: "Health Pulse",
    },
    category: {
      en: "Wellness Application",
      my: "ကျန်းမာရေး Application",
    },
    description: {
      en: "A wellness interface with meaningful visual feedback, synchronization, and accessibility-focused UX.",
      my: "Data Visualization၊ Synchronization နှင့် Accessibility ကို အာရုံစိုက်ထားသော Wellness Application ဖြစ်ပါသည်။",
    },
    technologies: ["Compose", "Firebase", "Charts", "Material 3"],
    color: "#79FFD2",
    featured: true,
    metrics: [
      { label: "UX", value: "Accessible First" },
      { label: "Visuals", value: "Data Driven" },
      { label: "Platform", value: "Android Native" },
    ],
  },
];

export const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Android Architecture",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
  "Tailwind CSS",
  "GitHub Actions",
  "REST APIs",
  "Room Database",
  "Firebase",
  "Android Keystore",
  "Material 3",
  "Accessibility",
];

export const roadmap = [
  {
    year: "2026",
    title: {
      en: "Compose & Secure Delivery",
      my: "Compose နှင့် Secure Delivery",
    },
    description: {
      en: "Production-grade Compose, adaptive layouts, secure API integration, and automated release pipelines.",
      my: "Production-grade Compose၊ Adaptive Layout၊ Secure API Integration နှင့် Automated Release Pipeline များ။",
    },
  },
  {
    year: "2027",
    title: {
      en: "Offline-First Systems",
      my: "Offline-First Systems",
    },
    description: {
      en: "Resilient offline experiences, observability, accessibility, modularization, and structured concurrency.",
      my: "Offline Experience၊ Observability၊ Accessibility၊ Modularization နှင့် Structured Concurrency များ။",
    },
  },
  {
    year: "2028",
    title: {
      en: "On-Device Intelligence",
      my: "On-Device Intelligence",
    },
    description: {
      en: "Privacy-preserving AI, edge inference, intelligent offline assistants, and efficient model deployment.",
      my: "Privacy-preserving AI၊ Edge Inference နှင့် Intelligent Offline Assistant များ။",
    },
  },
  {
    year: "2029",
    title: {
      en: "Spatial Interfaces",
      my: "Spatial Interfaces",
    },
    description: {
      en: "Immersive visualization, ambient computing, wearables, and multi-device continuity.",
      my: "Immersive Visualization၊ Ambient Computing၊ Wearable နှင့် Multi-device Continuity များ။",
    },
  },
  {
    year: "2030",
    title: {
      en: "Human-Centered Automation",
      my: "Human-Centered Automation",
    },
    description: {
      en: "Unified intelligent experiences across Android, web, desktop, and spatial platforms.",
      my: "Android၊ Web၊ Desktop နှင့် Spatial Platform များအကြား Unified Intelligent Experience များ။",
    },
  },
];
