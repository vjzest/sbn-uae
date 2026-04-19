import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import SecurityClient from '@/components/security/SecurityClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('security');
    return constructMetadata(dynamic, {
        title: 'Compliance & Security Services | Secure Healthcare Systems',
        description: 'Ensure compliance & security with HIPAA-aligned systems. Protect data, control access, and meet security compliance standards with confidence.',
        slug: 'security'
    });
}

const Security = () => {
    return <SecurityClient />;
};

export default Security;
