import type { Metadata } from 'next';
import TermsClient from '@/components/terms/TermsClient';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service | SBN Healthcare Solution LLC',
  description: 'Read the Terms of Service governing use of the SBN Healthcare Solution LLC website, services, and business communications.',
  keywords: 'terms of service, SBN terms, healthcare RCM terms, website usage terms',
  slug: 'terms'
});

export default function TermsPage() {
  return <TermsClient />;
}
