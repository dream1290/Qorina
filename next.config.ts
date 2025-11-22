import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    unoptimized: true, // Since we're not using Next.js Image optimization
  },
  // Enable React Server Components
  reactStrictMode: true,
};

export default nextConfig;