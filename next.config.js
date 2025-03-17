/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  basePath: "",
  assetPrefix: "./",  // 添加这一行确保资源路径正确
  trailingSlash: true,  // 添加尾部斜杠有助于相对路径的处理
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
  }
};

module.exports = nextConfig;
