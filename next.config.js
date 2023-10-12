/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: 'development'
  },
  reactStrictMode: false,
  useFileSystemPublicRoutes: true,
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
