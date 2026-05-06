


import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import Hero from '@/components/home/Hero';
import dynamic from 'next/dynamic';

const Stats = dynamic(() => import('@/components/home/Stats'), { ssr: false });
const ProcessFlow = dynamic(() => import('@/components/home/ProcessFlow'), { ssr: false });
const WhatWeDo = dynamic(() => import('@/components/home/WhatWeDo'), { ssr: false });
const OfficeOperations = dynamic(() => import('@/components/home/OfficeOperations'), { ssr: false });
const SoftwareExpertise = dynamic(() => import('@/components/home/SoftwareExpertise'), { ssr: false });
const Pricing = dynamic(() => import('@/components/home/Pricing'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: false });

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
