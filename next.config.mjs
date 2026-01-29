/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "vrun-public-bucket.s3.us-east-2.amazonaws.com",
      },
      {
        hostname: "blogs.vruncars.com",
      },
    ],
  },
};

export default nextConfig;
