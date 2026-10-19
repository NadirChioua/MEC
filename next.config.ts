import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  async headers() {
    return [
      {
        // static images: cache 30 days, revalidate in the background
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }]
      }
    ];
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
