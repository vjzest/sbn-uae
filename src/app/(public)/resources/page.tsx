import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import WhitePaperClient from '@/components/white-paper/WhitePaperClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('resources');
    return constructMetadata(dynamic, {
        title: 'Resource Guide: Hidden Revenue Leakage in Healthcare',
        description: 'Discover how the right resource helps reduce revenue leakage and why the best resource medical billing service for small clinics improves cash flow.',
        slug: 'resources'
    });
}

const WhitePaper = () => {
    return <WhitePaperClient />;
};

export default WhitePaper;
