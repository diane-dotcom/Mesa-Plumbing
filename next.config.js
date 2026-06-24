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
  async redirects() {
    return [
      { source: '/drain-cleaning', destination: '/services.html?service=drain-cleaning', permanent: false },
      { source: '/sewer-line-repair', destination: '/services.html?service=sewer-line-repair', permanent: false },
      { source: '/water-heaters', destination: '/services.html?service=water-heaters', permanent: false },
      { source: '/ac-repair', destination: '/services.html?service=ac-repair', permanent: false },
      { source: '/furnace-repair', destination: '/services.html?service=furnace-repair', permanent: false },
    ];
  },
};

module.exports = nextConfig;
