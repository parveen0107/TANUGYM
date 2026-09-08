import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");

const siteUrl = "https://tanugym.in";

const today = new Date().toISOString().split("T")[0];

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const manifestContent = JSON.stringify(
  {
    name: "TANU GYM",
    short_name: "TANU GYM",
    description:
      "TANU GYM gym and fitness center in Mullana, Ambala with training, yoga, and wellness programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#1d232a",
    theme_color: "#1d232a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  },
  null,
  2
);

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent, "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent, "utf8");
fs.writeFileSync(
  path.join(publicDir, "site.webmanifest"),
  manifestContent,
  "utf8"
);
