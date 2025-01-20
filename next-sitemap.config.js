/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.biellavita.com", // Your website's base URL
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
    "/api/*", // Exclude all API routes
    "/changepassword", // Exclude restricted pages
    "/login", // Exclude login page
  ],
  async additionalPaths() {
    return [
      { loc: "/", priority: 1.0, changefreq: "daily" }, // Homepage
      { loc: "/club", priority: 0.8, changefreq: "daily" }, // Club page
      { loc: "/visionandmission", priority: 0.7, changefreq: "daily" }, // Vision & Mission
      { loc: "/projects", priority: 0.7, changefreq: "daily" }, // Projects page
      { loc: "/partnership", priority: 0.7, changefreq: "daily" }, // Partnership page
      { loc: "/getintouch", priority: 0.7, changefreq: "daily" }, // Get in Touch page
    ];
  },
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
          "/api/*", // Exclude all API routes
          "/changepassword", // Exclude restricted pages
          "/login", // Exclude login page
        ],
      },
    ],
  },
};
