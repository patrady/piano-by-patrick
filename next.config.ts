import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set NEXT_PUBLIC_BASE_PATH to your repo name when hosting on GitHub Pages
  // e.g. NEXT_PUBLIC_BASE_PATH=/piano-portfolio
  // Leave empty if using a custom domain or username.github.io repo
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
