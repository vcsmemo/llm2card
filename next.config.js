/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Add this line to output static files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Required for static export
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
  distDir: "build",
};

module.exports = nextConfig;
