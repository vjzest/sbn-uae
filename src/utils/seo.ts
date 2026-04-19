import axios from 'axios';
import { Metadata } from 'next';

export const getDynamicMetadata = async (pageId: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seo/${pageId}`);
        if (response.data.success) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const constructMetadata = (data: any, fallback: any = {}): Metadata => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbnhealthcaresolution.com';
    const title = data?.title || fallback?.title || 'SBN Healthcare Solution';
    const description = data?.description || fallback?.description || 'Export in Healthcare Billing Services';
    const image = data?.ogImage || fallback?.image || '/Logo.png';
    const keywords = data?.keywords || data?.primaryKeyword || fallback?.keywords || 'medical billing, rcm, healthcare';
    const canonical = data?.slug ? `${siteUrl}/${data.slug}` : (fallback?.slug ? `${siteUrl}/${fallback.slug}` : siteUrl);

    return {
        title,
        description,
        keywords: Array.isArray(keywords) ? keywords : keywords.split(',').map((k: string) => k.trim()),
        alternates: {
            canonical: data?.canonicalUrl || canonical,
        },
        robots: data?.robots || 'index, follow',
        authors: [{ name: 'SBN Healthcare Solution' }],
        publisher: 'SBN Healthcare Solution',
        openGraph: {
            title: data?.ogTitle || title,
            description: data?.ogDescription || description,
            url: canonical,
            siteName: 'SBN Healthcare Solution',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: data?.twitterCard || 'summary_large_image',
            title: data?.ogTitle || title,
            description: data?.ogDescription || description,
            images: [image],
        },
    };
};
