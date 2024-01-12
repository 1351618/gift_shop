const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/app/home",
      },
    ];
  },
};

module.exports = nextConfig;
