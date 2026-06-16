'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const WhatWeDo = () => {
    const { t } = useLanguage();
    const services = [
        {
            title: t('what_we_do.s1_title'),
            description: t('what_we_do.s1_desc')
        },
        {
            title: t('what_we_do.s2_title'),
            description: t('what_we_do.s2_desc')
        },
        {
            title: t('what_we_do.s3_title'),
            description: t('what_we_do.s3_desc')
        },
        {
            title: t('what_we_do.s4_title'),
            description: t('what_we_do.s4_desc')
        },
        {
            title: t('what_we_do.s5_title'),
            description: t('what_we_do.s5_desc')
        }
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-slate-100 bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        {t('what_we_do.tag')}
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        {t('what_we_do.title_line1')} <br className="hidden md:block" /> {t('what_we_do.title_line2')}
                    </h2>

                    <p className="text-gray-600 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed font-medium">
                        {t('what_we_do.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-slate-50/50 rounded-2xl shadow-sm hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-100 flex flex-col h-full p-8"
                        >
                            <h3 className="text-xl mb-4 font-extrabold text-gray-900 group-hover:text-[#0033e7] transition-colors duration-300 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                <Link href="/services" className="text-[#0033e7] font-bold text-xs uppercase tracking-[2px] flex items-center group/link no-underline">
                                    {t('what_we_do.explore')}
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
