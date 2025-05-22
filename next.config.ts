import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.iran.liara.run',
      },
      {
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
