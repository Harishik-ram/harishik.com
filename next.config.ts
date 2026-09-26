import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted as plain files (Cloudflare Pages).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
