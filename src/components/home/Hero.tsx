'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroData } from '@/data/home';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen pt-[100px] pb-16 flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50"
        >
            {/* Very light abstract background shapes to mimic eff-dashboard gradient overlays */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[100px] opacity-70 pointer-events-none hidden md:block"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] rounded-full bg-blue-300/30 blur-[100px] opacity-70 pointer-events-none hidden md:block"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Content (Left) */}
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        <div
                            className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-8 px-5 py-2 rounded-full backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            {heroData.subheadline || 'RCM Excellence'}
                        </div>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-gray-900 leading-[1.2] mb-5 tracking-tight"
                        >
                            Trusted Medical <br className="hidden xl:block" />
                            <span className="text-[#0033e7]">Billing Services</span> <br />
                            That Put Your Practice First
                        </h1>

                        <p
                            className="text-base md:text-[1.1rem] text-gray-600 mb-8 max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            You became a healthcare provider to care for patients, not to chase insurance companies, decode claim rejections, or spend hours buried in billing paperwork. At SBN Healthcare Solution, we handle all of that for you.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                        >
                            <div className="flex flex-col gap-4 items-center lg:items-start">
                                <Link
                                    href="/contact-us"
                                    className="bg-[#0033e7] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,51,231,0.2)] transition-all duration-300 no-underline"
                                >
                                    Get Started
                                </Link>
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 justify-center lg:justify-start">
                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        HIPAA Compliant
                                    </span>
                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        US-Based Support
                                    </span>
                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        14+ Years Experience
                                    </span>
                                </div>
                            </div>

                            <Link
                                href="/services"
                                className="text-gray-700 hover:text-[#0033e7] font-bold text-sm uppercase tracking-wider transition-colors no-underline flex items-center gap-2 group/link pl-4"
                            >
                                Explore Platform
                                <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Platform Visual Anchor (Right) */}
                    <div
                        className="relative lg:block"
                    >
                        <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                            {/* Glow effect closely matching eff-dashboard style */}
                            <div className="absolute inset-x-0 bottom-0 top-10 bg-gradient-to-b from-[#0033e7]/20 to-[#0033e7]/5 rounded-[32px] blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10 hidden md:block"></div>

                            <Image
                                src="/Home image1.webp"
                                alt="SBN Healthcare Solution"
                                width={850}
                                height={600}
                                className="w-full h-auto max-w-[850px] mx-auto shadow-2xl shadow-blue-900/10 rounded-[32px] relative z-10"
                                priority
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce"
            >
                <div className="w-[2px] h-12 bg-gradient-to-b from-[#0033e7]/50 to-transparent rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
