/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/PersonalWeb',
  assetPrefix: '/PersonalWeb',
  images: {
    loader: 'akamai',
    path: '/',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
