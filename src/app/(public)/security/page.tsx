import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import SecurityClient from '@/components/security/SecurityClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('security');
    return constructMetadata(dynamic, {
        title: 'Security Overview | SBN Healthcare Solution LLC',
        description: 'Learn about SBN Healthcare Solution LLC\'s security practices, including data protection, identity management, and incident response.',
        slug: 'security'
    });
}

const Security = () => {
    return <SecurityClient />;
};

export default Security;
