import type { Metadata } from 'next';
import PrivacyClient from '@/components/privacy/PrivacyClient';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Notice | SBN Healthcare Solution LLC',
  description: 'Learn how SBN Healthcare Solution LLC protects and manages data through our healthcare revenue cycle management services and software products.',
  keywords: 'privacy notice, healthcare privacy, HIPAA compliance, SBN Healthcare data protection, RCM privacy policy',
  slug: 'privacy'
});

export default function PrivacyPage() {
  return <PrivacyClient />;
}
