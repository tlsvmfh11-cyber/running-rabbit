import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://daltorunningrabbit.com',
      lastModified: new Date('2026-08-07'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
