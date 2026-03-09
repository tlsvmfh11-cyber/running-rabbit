import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daltorunningrabbit.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]
}
