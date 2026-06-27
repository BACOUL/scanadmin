/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/methodologie', destination: '/method', permanent: false },
      { source: '/mentions-legales', destination: '/legal', permanent: false },
      { source: '/agents', destination: '/scan', permanent: false },
      { source: '/rapport-exemple', destination: '/scan', permanent: false },
    ];
  },
};

export default nextConfig;
