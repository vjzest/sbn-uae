import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import SecurityClient from '@/components/security/SecurityClient';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Compliance & Security Services | Secure Healthcare Systems',
        description: 'Ensure compliance & security with HIPAA-aligned systems. Protect data, control access, and meet security compliance standards with confidence.',
    };
}

const Security = () => {
    return <SecurityClient />;
};

export default Security;
