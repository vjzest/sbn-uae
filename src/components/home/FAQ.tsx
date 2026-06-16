'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: t('faq_section.q1'),
            answer: t('faq_section.a1')
        },
        {
            question: t('faq_section.q2'),
            answer: t('faq_section.a2')
        },
        {
            question: t('faq_section.q3'),
            answer: t('faq_section.a3')
        },
        {
            question: t('faq_section.q4'),
            answer: t('faq_section.a4')
        },
        {
            question: t('faq_section.q5'),
            answer: t('faq_section.a5')
        },
        {
            question: t('faq_section.q6'),
            answer: t('faq_section.a6')
        },
        {
            question: t('faq_section.q7'),
            answer: t('faq_section.a7')
        },
        {
            question: t('faq_section.q8'),
            answer: t('faq_section.a8')
        },
        {
            question: t('faq_section.q9'),
            answer: t('faq_section.a9')
        },
        {
            question: t('faq_section.q10'),
            answer: t('faq_section.a10')
        }
    ];
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-white relative border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        {t('faq_section.tag')}
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        {t('faq_section.title')}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto divide-y divide-slate-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button 
                                className="w-full flex items-center justify-between text-left focus:outline-none group"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0033e7] transition-colors pr-8">
                                    Q{index + 1}. {faq.question}
                                </h3>
                                <div className="text-[#0033e7] flex-shrink-0">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] mt-4' : 'max-h-0'}`}
                            >
                                <p className="text-gray-600 font-medium leading-relaxed pr-8">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center mt-20 p-10 bg-[#0033e7] rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{t('faq_section.cta_title')}</h3>
                        <p className="text-blue-100 mb-8 font-medium">{t('faq_section.cta_desc')}</p>
                        <Link 
                            href="/contact-us" 
                            className="inline-block px-10 py-4 bg-white text-[#0033e7] font-bold uppercase text-sm tracking-[2px] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            {t('faq_section.cta_btn')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
