import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://daltorunningrabbit.com',
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
