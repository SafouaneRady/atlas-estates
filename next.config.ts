import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true, qualities: [75, 86, 88, 90] },
};

export default nextConfig;
