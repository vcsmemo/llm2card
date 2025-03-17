import type { NextConfig } from 'next';

const config: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'ext.same-assets.com',
      'web-assets.same.dev',
      'ext.web-assets.same.dev',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev'
      }
    ]
  },
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
};

export default config;
