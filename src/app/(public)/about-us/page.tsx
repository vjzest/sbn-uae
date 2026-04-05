import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import AboutClient from '@/components/about/AboutClient';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'About SBN Healthcare | RCM Experts for Medical Practices',
        description: 'Learn about SBN Healthcare, a trusted RCM partner delivering efficient, compliant, and performance-driven billing solutions for healthcare providers.',
    };
}

export default function AboutUs() {
    return <AboutClient />;
}
