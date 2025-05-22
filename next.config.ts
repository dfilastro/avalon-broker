import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
