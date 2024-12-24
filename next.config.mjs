/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.finncdn.no", // Add this domain
        protocol: "https",
        port: "",
      },
      {
        hostname: "uploadthing.com", // Add this domain
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
