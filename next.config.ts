import type { NextConfig } from "next";

interface WebpackConfig {
  resolve: {
    alias: {
      punycode: boolean;
    };
  };
}

interface NextCustomConfig extends NextConfig {
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextCustomConfig = {
  webpack: (config: WebpackConfig): WebpackConfig => {
    config.resolve.alias.punycode = false;
    return config;
  },
};

module.exports = nextConfig;

