import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dashboard.middleton.ng',
          },
        ],
        destination: '/dashboard/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dashboard.localhost',
          },
        ],
        destination: '/dashboard/:path*',
      },
    ];
  },
};

export default nextConfig;
