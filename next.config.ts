import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const isGitLabPages = process.env.DEPLOY_TARGET === "gitlab";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const basePath =
  isGitHubPages && repositoryName
    ? `/${repositoryName}`
    : isGitLabPages
      ? process.env.GITLAB_PAGES_BASE_PATH ?? ""
      : "";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath,

  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "three"],
  },
};

export default nextConfig;
