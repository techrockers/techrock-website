import type { NextConfig } from "next";
import { getGitHubPagesBasePath } from "./src/github-pages";

const basePath = getGitHubPagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
