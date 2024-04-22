/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  basePath: "/starter-project",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "cdn.detik.net.id",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "cdn.cnnindonesia.com",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "editorial.femaledaily.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
}

export default nextConfig
