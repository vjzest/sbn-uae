import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import PricingPageClient from '@/components/pricing/PricingPageClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('pricing');
    return constructMetadata(dynamic, {
        title: 'Pricing Philosophy | Flexible RCM Pricing Models',
        description: 'Explore a flexible pricing philosophy with scalable RCM models. Improve revenue, reduce costs, and choose pricing strategies that fit your practice growth.',
        slug: 'pricing'
    });
}

export default function PricingPage() {
    return <PricingPageClient />;
}
