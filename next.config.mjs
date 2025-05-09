/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 🔥 Enables App Router under /src/app
  },
  swcMinify: true, // Ensure SWC is used for JavaScript minification
  compress: true, // Enable response compression (Gzip)
  optimizeFonts: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
