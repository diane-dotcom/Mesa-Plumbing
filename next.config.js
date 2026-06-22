/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/index.html' },
        { source: '/services', destination: '/services.html' },
        { source: '/locations', destination: '/locations.html' },
        { source: '/boulder', destination: '/boulder.html' },
      ],
    };
  },
};

module.exports = nextConfig;
