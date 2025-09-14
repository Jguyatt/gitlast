import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep ESLint from breaking your build in CI
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
