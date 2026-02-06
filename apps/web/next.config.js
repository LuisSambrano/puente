/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // External modules that cause build issues
    config.externals.push(
      'pino-pretty',
      'lokijs', 
      'encoding',
      'dtrace-provider',
      'bunyan',
      'fs',
      'net',
      'tls'
    );
    
    // Ignore @celo/poprf which is not published to npm
    // This is an optional dependency of @celo/phone-number-privacy-common
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@celo/poprf': false,
    };
    
    // Also add to ignoreWarnings to suppress the warning
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /@celo\/poprf/ },
      { module: /@celo\/phone-number-privacy-common/ },
    ];
    
    return config;
  },
};

module.exports = nextConfig;
