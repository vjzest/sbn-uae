import type { Metadata } from 'next';
import ComplianceClient from '@/components/compliance/ComplianceClient';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Compliance Overview | SBN Healthcare Solution LLC',
  description: 'Learn about SBN Healthcare Solution LLC\'s commitment to governance, accountability, information protection, and compliance with healthcare industry standards.',
  keywords: 'compliance overview, healthcare compliance, governance, SBN Healthcare accountability, information protection',
  slug: 'compliance'
});

export default function CompliancePage() {
  return <ComplianceClient />;
}
