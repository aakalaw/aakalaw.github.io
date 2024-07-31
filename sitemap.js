const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your dynamic routes here
const dynamicRoutes = [
  '/404',
  // Fetch or generate more dynamic routes as needed
];

// Define your static routes
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/resume', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/stats', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more static routes as needed
];

// Create an array of URL objects
const urls = staticRoutes.concat(dynamicRoutes.map(route => ({
  url: route,
  changefreq: 'daily',
  priority: 0.7
})));

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://aakalaw.github.io' });

// Generate the sitemap and write it to build/sitemap.xml
streamToPromise(Readable.from(urls).pipe(sitemap)).then((sm) => {
  fs.writeFileSync('./build/sitemap.xml', sm.toString());
}).catch(console.error);
