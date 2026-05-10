export default function sitemap() {
  const baseUrl = "https://ortusfinance.in";

  const calculatorSlugs = [
    'fd-calculator',
    'nsc-calculator',
    'hra-calculator',
    'mf-calculator',
    'ssy-calculator',
  ];

  const staticPages = [
    { url: baseUrl, changeFrequency: "yearly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/process`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/tools`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/courses`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const calculatorPages = calculatorSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...calculatorPages].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}