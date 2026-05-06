import { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
  let robotsContent = 'User-agent: *\nAllow: /'
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings/robots_txt`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const data = await res.json()
      if (data?.success) {
        robotsContent = data.data.value
      }
    }
  } catch (error) {
    console.warn('Failed to fetch robots.txt settings:', error)
  }

  // Parse basic rules if needed, but Next.js robots.ts expects an object
  // For simplicity, we'll return a standard object but you can expand this
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbnhealthcaresolution.com'}/sitemap.xml`,
  }
}
