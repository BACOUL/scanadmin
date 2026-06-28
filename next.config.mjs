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
  async headers() {
    return [
      {
        source: '/result',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/analyse',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/merci',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;
