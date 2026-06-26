


import type { Metadata } from 'next';
import { getDynamicMetadata, constructMetadata } from '@/utils/seo';
import Hero from '@/components/home/Hero';
import dynamic from 'next/dynamic';

const Stats = dynamic(() => import('@/components/home/Stats'), { ssr: true });
const ProcessFlow = dynamic(() => import('@/components/home/ProcessFlow'), { ssr: true });
const WhatWeDo = dynamic(() => import('@/components/home/WhatWeDo'), { ssr: true });
const OfficeOperations = dynamic(() => import('@/components/home/OfficeOperations'), { ssr: true });
const Pricing = dynamic(() => import('@/components/home/Pricing'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: true });
const FAQ = dynamic(() => import('@/components/home/FAQ'), { ssr: true });

export async function generateMetadata(): Promise<Metadata> {
  const dynamic = await getDynamicMetadata('home');
  return constructMetadata(dynamic, {
    title: 'Urgent Care Revenue Cycle Management | SBN Healthcare Solution',
    description: 'SBN Healthcare Solution helps urgent care organizations improve collections, reduce claim denials, optimize revenue cycle performance, and increase cash flow.',
    keywords: 'Urgent Care Revenue Cycle Management',
    slug: ''
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessFlow />
      <WhatWeDo />
      <OfficeOperations />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}
