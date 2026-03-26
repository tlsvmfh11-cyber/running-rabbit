import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daltorunningrabbit.com'
  const lastMod = new Date('2026-04-01')

  return [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#price`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#reviews`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#choice-system`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#rooms`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#vip`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#events`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#group`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#directions`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
