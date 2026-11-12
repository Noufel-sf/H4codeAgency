import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = siteConfig.locales;
  const baseUrl = siteConfig.url;

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: locale === 'en' ? 1.0 : 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          fr: `${baseUrl}/fr`
        }
      }
    });
  });

  return entries;
}

