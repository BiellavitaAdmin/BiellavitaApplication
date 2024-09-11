/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Ensure SWC is used for JavaScript minification
  compress: true, // Enable response compression (Gzip)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
