import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages
  ? process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
