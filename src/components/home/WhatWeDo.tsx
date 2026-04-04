'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuresData } from '@/data/home';

// Fade-up style identical to AOS / Hero section
const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const WhatWeDo = () => {
    // Benefit tags for cards
    const benefitTags = ["Automation First", "High Accuracy", "Fast Turnaround"];

    return (
        <section 
            className="bg-cover bg-center bg-no-repeat py-24 md:py-32 relative overflow-hidden border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient to keep content highly readable over background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full"
                    >
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Capabilities
                    </motion.div>
                    
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8"
                    >
                        One Strategic Platform. <br className="hidden md:block" /> Superior Performance.
                    </motion.h2>
                    
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        We leverage intelligent automation and deep healthcare expertise to eliminate friction and maximize yield across your entire revenue ecosystem.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => {
                        const imgNum = index + 1;
                        const imgSrc = `/Section 4-${imgNum}.png`;

                        return (
                            <motion.div
                                key={index}
                                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white flex flex-col h-full"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.15 } }
                                } as any}
                            >
                                <div className="relative overflow-hidden aspect-[16/11]">
                                    <img
                                        src={imgSrc}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/95 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1.5 rounded-lg shadow-sm border border-slate-100">
                                            {benefitTags[index] || "Enterprise Ready"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl mb-3 font-extrabold text-gray-900 group-hover:text-[#0033e7] transition-colors duration-300 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
                                        {feature.description}
                                    </p>
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <Link href="/services" className="text-[#0033e7] font-bold text-xs uppercase tracking-[2px] flex items-center group/link no-underline">
                                            Analyze Solution
                                            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
