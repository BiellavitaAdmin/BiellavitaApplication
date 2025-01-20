/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.Biellavita.com", // Your website's base URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "daily", // How often pages are updated
  priority: 0.7, // Default priority for URLs
  sitemapSize: 7000, // Number of URLs per sitemap file
  exclude: [
    "/admin",
    "/admin/*",
    "/dashboard",
    "/dashboard/*",
    "/protected",
    "/privateevents",
  ], // Exclude restricted/private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/", // Public homepage
          "/club",
          "/visionandmission",
          "/projects",
          "/partnership",
          "/membership",
          "/getintouch",
        ],
        disallow: [
          "/admin",
          "/admin/*",
          "/dashboard",
          "/dashboard/*",
          "/protected",
          "/privateevents",
        ],
      },
    ],
  },
};
