/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/methodologie', destination: '/method', permanent: false },
      { source: '/mentions-legales', destination: '/legal', permanent: false },
      { source: '/agents', destination: '/catalogue', permanent: false },
      { source: '/rapport-exemple', destination: '/exemple', permanent: false },
      { source: '/rapport', destination: '/exemple', permanent: false },
      { source: '/pricing', destination: '/tarifs', permanent: false },
    ];
  },
};

export default nextConfig;
