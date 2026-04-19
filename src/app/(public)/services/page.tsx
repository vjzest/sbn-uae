import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from '@/components/services/ServicesClient';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('services');
    return constructMetadata(dynamic, {
        title: 'More Solutions for Easy Revenue Cycle Management',
        description: 'Discover more solutions for full RCM support. Reduce errors, improve cash flow, and manage your billing process in a simple and smooth way.',
        slug: 'services'
    });
}

export default function ServicesListing() {
    return <ServicesClient />;
}
