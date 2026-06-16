'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { useLanguage } from '@/context/LanguageContext';

const CareerClient = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            <PageHeader
                title={t('career_page.header_title')}
                subtitle={t('career_page.header_subtitle')}
                description={t('career_page.header_desc')}
            />

            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-[50px]">
                        <div className="flex-1 min-w-[300px]">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-[25px] relative after:block after:content-[''] after:w-[60px] after:h-[4px] after:bg-[#FFAD01] after:mt-[15px] after:rounded-sm">
                                {t('career_page.join_title')}
                            </h2>
                            <p className="text-slate-600 leading-[1.8] text-[17px] mb-[25px]" dangerouslySetInnerHTML={{ __html: t('career_page.join_desc') }}></p>
                        </div>
                        <div className="flex-1 min-w-[300px] flex justify-center">
                            <img
                                src="/img/career.webp"
                                alt="Career"
                                className="w-full max-w-[500px] h-[350px] object-cover rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white transition-transform duration-300 hover:-translate-y-1"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerClient;
