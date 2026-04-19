


import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ProcessFlow from '@/components/home/ProcessFlow';
import WhatWeDo from '@/components/home/WhatWeDo';
import OfficeOperations from '@/components/home/OfficeOperations';
import SoftwareExpertise from '@/components/home/SoftwareExpertise';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';

export async function generateMetadata(): Promise<Metadata> {
  const dynamic = await getDynamicMetadata('home');
  return constructMetadata(dynamic, {
    title: 'Medical Insurance Verification Service in New York | SBN',
    description: 'SBN provides medical insurance verification service in New York. Reduce claim denials with real-time checks and accurate eligibility verification.',
    slug: ''
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProcessFlow />
      <WhatWeDo />
      <OfficeOperations />
      <SoftwareExpertise />
      <Pricing />
      <Testimonials />
    </>
  );
}
