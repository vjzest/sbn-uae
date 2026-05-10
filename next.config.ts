import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/white-paper',
        destination: '/',
        permanent: true,
      },
      {
        source: '/medical-billing',
        destination: '/services',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
