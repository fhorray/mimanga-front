/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: REMOVE THIS CONFIG
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
