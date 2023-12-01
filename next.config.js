/** @type {import('next').NextConfig} */
const {env} = require('process');

const nextConfig = {
  env: {
    ENVIRONMENT: env.NODE_ENV === 'production' ? 'production' : 'development'
  },
  reactStrictMode: false,
  useFileSystemPublicRoutes: true,
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
};

module.exports = nextConfig;
