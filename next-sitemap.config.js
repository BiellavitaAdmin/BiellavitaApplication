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
          "/api/*", // Exclude all API routes
          "/changepassword", // Exclude restricted pages
          "/login", // Exclude login page
        ],
      },
    ],
  },
};
