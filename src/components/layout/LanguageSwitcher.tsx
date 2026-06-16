'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage, isVisible } = useLanguage();

    if (!isVisible) return null;

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-colors text-sm font-bold text-[#0033e7] ml-4"
            aria-label="Toggle Language"
        >
            <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
            <span className="w-px h-3 bg-slate-300"></span>
            <span className={language === 'ar' ? 'opacity-100' : 'opacity-50'}>العربية</span>
        </button>
    );
};

export default LanguageSwitcher;
