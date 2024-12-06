/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.cosmicjs.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'imgix.cosmicjs.com',
          port: '',
        },
      ],
    },
  }

export default nextConfig;
