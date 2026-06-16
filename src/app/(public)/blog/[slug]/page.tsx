import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import axios from 'axios';
import { constructMetadata } from '@/utils/seo';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import { FaChevronRight, FaRegClock, FaRegCalendarAlt, FaUserEdit, FaListUl, FaLink, FaShareAlt } from 'react-icons/fa';

export const revalidate = 0;

async function getPost(slug: string) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`, {
            params: { _t: Date.now() }
        });
        return res.data.data;
    } catch (err) {
        return null;
    }
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found' };

    return constructMetadata(null, {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        image: post.image,
        slug: `blog/${slug}`,
        keywords: post.focusKeywords
    });
}

import BlogDetailClient from '@/components/blog/BlogDetailClient';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) notFound();

    // Schema Markup
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': post.schemaType || 'BlogPosting',
        headline: post.title,
        image: post.image,
        author: {
            '@type': 'Person',
            name: post.author?.name || 'SBN Healthcare Team',
            description: post.author?.bio
        },
        publisher: {
            '@type': 'Organization',
            name: 'SBN Healthcare Solution',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.sbnhealthcaresolution.com/logo.webp'
            }
        },
        datePublished: post.date,
        dateModified: post.updatedAt || post.date,
        description: post.excerpt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogDetailClient post={post} />
        </>
    );
}
