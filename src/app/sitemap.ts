import { MetadataRoute } from 'next'
import { servicesList, specialtiesList } from '@/data/services'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbnhealthcaresolution.com'
  
  // 1. Static Core Pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: 'about-us', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'contact-us', priority: 0.9, changeFrequency: 'monthly' },
    { url: 'services', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'specialties', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'pricing', priority: 0.7, changeFrequency: 'monthly' },
    { url: 'rcm-calculator', priority: 0.7, changeFrequency: 'monthly' },
    { url: 'career', priority: 0.6, changeFrequency: 'monthly' },
    { url: 'blog', priority: 0.6, changeFrequency: 'weekly' },
    { url: 'security', priority: 0.5, changeFrequency: 'monthly' },
    { url: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  ]

  // 2. Specialized Content Slugs (Static-Dynamic)
  const serviceSlugs = servicesList.map(s => s.slug)
  const specialtySlugs = specialtiesList.map(s => s.slug)

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let dynamicEntries: any[] = [];
  let blogEntries: any[] = [];

  try {
    // 3. Dynamic SEO Entries from Database
    if (apiUrl && apiUrl.startsWith('http')) {
      const res = await fetch(`${apiUrl}/seo`, { next: { revalidate: 3600 } })
      const json = await res.json()
      const dbEntries = json?.data || []

      dynamicEntries = Array.isArray(dbEntries) ? dbEntries.map((seo: any) => ({
        url: `${baseUrl}/${seo.page === 'home' ? '' : seo.page}`,
        lastModified: new Date(seo.updatedAt || Date.now()),
        changeFrequency: 'weekly' as const,
        priority: seo.page === 'home' ? 1.0 : 0.8,
      })) : []
    }

    const coreEntries = staticPages.map(page => ({
      url: `${baseUrl}/${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency as any,
      priority: page.priority,
    }))

    const serviceEntries = serviceSlugs.map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.8,
    }))

    const specialtyEntries = specialtySlugs.map(slug => ({
      url: `${baseUrl}/specialties/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.8,
    }))

    // 4. Dynamic Blog Entries from Database
    if (apiUrl && apiUrl.startsWith('http')) {
      const blogsRes = await fetch(`${apiUrl}/blogs`, { next: { revalidate: 3600 } })
      const blogsJson = await blogsRes.json()
      blogEntries = (blogsJson?.data || []).filter((b: any) => b.isPublished !== false).map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.date || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      }))
    }

    // Merge everything, removing duplicates based on URL
    const allEntries = [...coreEntries, ...serviceEntries, ...specialtyEntries, ...dynamicEntries, ...blogEntries]
    
    // De-duplicate URLs
    const uniqueEntries = Array.from(new Map(allEntries.map(item => [item.url, item])).values())

    return uniqueEntries
  } catch (error) {
    console.error('Sitemap generation error:', error)
    // Fallback to core entries only if DB fails
    return staticPages.map(page => ({
      url: `${baseUrl}/${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency as any,
      priority: page.priority,
    }))
  }
}
