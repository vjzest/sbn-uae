import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';

import PrivacyClient from '@/components/privacy/PrivacyClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('privacy-policy');
    return {
        title: dynamic?.title || 'Privacy Policy - SBN Healthcare Solution',
        description: dynamic?.description || 'Read our privacy policy and how we handle your data.',
    };
}

const PrivacyPolicy = () => {
    return <PrivacyClient />;
};

export default PrivacyPolicy;
