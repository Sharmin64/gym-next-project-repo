import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["react-slick"] = require.resolve("react-slick");
    return config;
  },
};

module.exports = nextConfig;
