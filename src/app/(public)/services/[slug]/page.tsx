import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesList } from '@/data/services';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import ServiceDetailClient from '@/components/services/ServiceDetailClient';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesList.find((s) => s.slug === slug);
    if (!service) return { title: 'Service Not Found' };
    
    // Try to get dynamic SEO if explicitly defined for this service slug
    const dynamic = await getDynamicMetadata(`services/${slug}`);

    return constructMetadata(dynamic, {
        title: service.metaTitle || `${service.title} - SBN Healthcare Solution`,
        description: service.metaDescription || service.description,
        slug: `services/${slug}`
    });
}

export async function generateStaticParams() {
    return servicesList.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesList.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient slug={slug} />;
}
