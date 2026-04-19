import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import RCMCalculatorPageClient from '@/components/tools/RCMCalculatorPageClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('rcm-calculator');
    return constructMetadata(dynamic, {
        title: 'RCM Calculator | Estimate Revenue Loss & Recovery',
        description: 'Use our RCM calculator to estimate revenue loss, denial impact, and recovery potential. Get instant insights to improve your billing performance.',
        slug: 'rcm-calculator'
    });
}

export default function RCMCalculatorPage() {
    return <RCMCalculatorPageClient />;
}
