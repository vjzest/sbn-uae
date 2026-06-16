'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import translations from '@/data/translations.json';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isVisible: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    t: (key: string) => key,
    isVisible: false
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('user_language') as Language | null;
        
        const checkLocation = async () => {
            const hostname = window.location.hostname;
            if (hostname.endsWith('.ae') || hostname === 'localhost') {
                setIsVisible(true);
                if (!savedLang && hostname !== 'localhost') changeLanguage('ar');
            } else {
                try {
                    const res = await fetch('https://ipapi.co/json/');
                    const data = await res.json();
                    if (data.country_code === 'SA') {
                        setIsVisible(true);
                        if (!savedLang) changeLanguage('ar');
                    }
                } catch (error) {
                    console.error('Error fetching location:', error);
                }
            }
        };

        if (savedLang) {
            changeLanguage(savedLang);
            setIsVisible(true);
        } else {
            checkLocation();
        }
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('user_language', lang);
        
        if (lang === 'ar') {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
        }
    };

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = (translations as any)[language];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // fallback
            }
        }
        return value || key;
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isVisible }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
