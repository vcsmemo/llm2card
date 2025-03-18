/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  basePath: "",
  assetPrefix: "./",
  trailingSlash: true,
  images: {
    unoptimized: true,
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
  }
};

module.exports = nextConfig;
