import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep ESLint from breaking your build in CI
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
