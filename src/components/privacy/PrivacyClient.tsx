'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PrivacyClient = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            {/* Banner Area */}
            <div
                className="relative bg-cover bg-center py-[60px] text-center text-white overflow-hidden"
                style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.8), rgba(11, 31, 51, 0.9)), url('/img/bg1.webp')" }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-[42px] font-extrabold m-0 text-white drop-shadow-lg tracking-tighter">
                        {t('privacy_page.title')}
                    </h1>
                </div>
            </div>

            <section className="py-[60px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <h2 className="text-[44px] leading-[50px] mb-[20px] text-[var(--heading-color)] font-bold">
                                {t('privacy_page.heading')}
                            </h2>
                            <div className="text-[16px] leading-[30px] text-[var(--text-color)]">
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p1') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p2')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p3') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p4')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p5')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p6') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p7')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p8') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p9')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p10')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p11')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p12') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p13')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p14')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p15')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p16') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p17')}</p>
                                <p className="mb-[20px]">{t('privacy_page.p18')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p19') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p20')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p21') }}></p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p22') }}></p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p23') }}></p>
                                <p className="mb-[20px]">{t('privacy_page.p24')}</p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p25') }}></p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p26') }}></p>
                                <p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t('privacy_page.p27') }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyClient;
