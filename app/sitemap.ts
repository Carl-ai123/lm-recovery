import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap { return ['/', '/breakdown-recovery', '/vehicle-transport', '/copart-collections', '/areas-we-cover', '/contact'].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.8 })) }
