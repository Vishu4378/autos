import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typescript: {
    // Temporarily ignore type errors during production builds
    // to validate Tailwind and runtime behavior.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
