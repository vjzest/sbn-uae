import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';

import CareerClient from '@/components/career/CareerClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('career');
    return {
        title: dynamic?.title || 'Careers - SBN Healthcare Solution',
        description: dynamic?.description || 'Join our team of healthcare professionals and experts.',
    };
}

const Career = () => {
    return <CareerClient />;
};

export default Career;
