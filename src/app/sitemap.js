export default function sitemap() {
  return [
    {
      url: "https://evandrocosta.dev.br",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://evandrocosta.dev.br/#contato",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
