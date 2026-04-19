import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import AboutClient from '@/components/about/AboutClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('about-us');
    return constructMetadata(dynamic, {
        title: 'About SBN Healthcare | RCM Experts for Medical Practices',
        description: 'Learn about SBN Healthcare, a trusted RCM partner delivering efficient, compliant, and performance-driven billing solutions for healthcare providers.',
        slug: 'about-us'
    });
}

export default function AboutUs() {
    return <AboutClient />;
}
