export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://evandrocosta.dev.br/sitemap.xml",
  };
}
