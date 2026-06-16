import React from 'react';
import axios from 'axios';
import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import BlogClient from '@/components/blog/BlogClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('blog');
    return constructMetadata(dynamic, {
        title: 'Our Blog - Latest Healthcare Insights | SBN Healthcare',
        description: 'Insights, news and trends from the healthcare billing and RCM world.',
        slug: 'blog'
    });
}

async function getBlogPosts() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
            params: { _t: Date.now() }
        });
        return res.data.data;
    } catch (err) {
        console.error('Error fetching blogs:', err);
        return [];
    }
}

export const revalidate = 0;

export default async function BlogPage() {
    const blogPosts = await getBlogPosts();
    return <BlogClient blogPosts={blogPosts} />;
}

