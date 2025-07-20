import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
