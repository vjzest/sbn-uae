'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroData } from '@/data/home';

const Hero = () => {
    // Fade-up style identical to AOS
    const fadeUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            className="relative min-h-screen pt-[100px] pb-16 flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient to keep the content highly readable while showing the background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/60 pointer-events-none"></div>

            6            {/* Very light abstract background shapes to mimic eff-dashboard gradient overlays */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] rounded-full bg-blue-300/30 blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Content (Left) */}
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-8 px-5 py-2 rounded-full backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            {heroData.subheadline || 'RCM Excellence'}
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-gray-900 leading-[1.2] mb-5 tracking-tight"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            Medical Insurance <br className="hidden xl:block" />
                            <span className="text-[#0033e7]">Verification Services</span> <br />
                            in New York
                        </motion.h1>

                        <motion.p
                            className="text-base md:text-[1.1rem] text-gray-600 mb-8 max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-medium"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            Unified eligibility, billing, denial management, and analytics —
                            engineered to accelerate cash flow and eliminate administrative friction.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            <div className="flex flex-col gap-4 items-center lg:items-start">
                                <Link
                                    href="/contact-us"
                                    className="bg-[#0033e7] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,51,231,0.2)] transition-all duration-300 no-underline"
                                >
                                    Get Started
                                </Link>
                                <div className="flex gap-4 text-sm font-medium text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        HIPAA Compliant
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        US-Based
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
                        </motion.div>
                    </div>

                    {/* Platform Visual Anchor (Right) */}
                    <motion.div
                        className="relative lg:block"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
                        } as any}
                    >
                        <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                            {/* Glow effect closely matching eff-dashboard style */}
                            <div className="absolute inset-x-0 bottom-0 top-10 bg-gradient-to-b from-[#0033e7]/20 to-[#0033e7]/5 rounded-[32px] blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                            <img
                                src="/Home%20image1.webp"
                                alt="SBN Healthcare Solution"
                                className="w-full h-auto max-w-[850px] mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] rounded-[32px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[2px] h-12 bg-gradient-to-b from-[#0033e7]/50 to-transparent rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
