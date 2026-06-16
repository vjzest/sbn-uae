'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
    { name: 'Home', tKey: 'nav.home', href: '/' },
    { name: 'About Us', tKey: 'nav.about_us', href: '/about-us' },
    {
        name: 'Solutions',
        tKey: 'nav.solutions',
        href: '#',
        dropdown: [
            { name: 'Eligibility & Front Office', tKey: 'nav.eligibility_front_office', href: '/services/eligibility-verification' },
            { name: 'Benefits Check', tKey: 'nav.benefits_check', href: '/services/benefits-check' },
            { name: 'Prior Authorization', tKey: 'nav.prior_authorization', href: '/services/prior-authorization' },
            { name: 'Exclusion Check', tKey: 'nav.exclusion_check', href: '/services/exclusion-check' },
            { name: 'Patient Collection & AR Recovery', tKey: 'nav.patient_collections', href: '/services/patient-collections-ar-recovery' },
            { name: 'Consulting', tKey: 'nav.consulting', href: '/services/consulting' },
            { name: 'More Solutions', tKey: 'nav.more_solutions', href: '/services' },
        ]
    },
    {
        name: 'Specialties',
        tKey: 'nav.specialties',
        href: '#',
        dropdown: [
            { name: 'Behavioral Health', tKey: 'nav.behavioral_health', href: '/specialties/behavioral-health' },
            { name: 'DME / Orthopedics', tKey: 'nav.dme_orthopedics', href: '/specialties/dme-orthopedics' },
            { name: 'Urgent Care & Telehealth', tKey: 'nav.urgent_care', href: '/specialties/urgent-care-telehealth' },
            { name: 'Small–Mid Practices', tKey: 'nav.small_mid_practices', href: '/specialties/small-mid-practices' },
            { name: 'Multi-Speciality Hospitals', tKey: 'nav.multi_speciality', href: '/specialties/multi-speciality-hospitals' },
        ]
    },
    { name: 'Resources', tKey: 'nav.resources', href: '/resources' },
    { name: 'Compliance & Security', tKey: 'nav.compliance', href: '/security' },
    { name: 'RCM Calculator', tKey: 'nav.rcm_calculator', href: '/rcm-calculator' },
    { name: 'Pricing', tKey: 'nav.pricing', href: '/pricing' },
    { name: 'Blog', tKey: 'nav.blog', href: '/blog' },
    { name: 'Contact Us', tKey: 'nav.contact_us', href: '/contact-us' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showLanguageToggle, setShowLanguageToggle] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Only show language toggle on specific domain or localhost for testing
        if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            if (hostname.includes('sbnmedicalbillingservices.ae') || hostname === 'localhost') {
                setShowLanguageToggle(true);
            }
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide header if scrolling down and past 100px. Show if scrolling up.
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const isLinkActive = (link: any) => {
        if (!pathname) return false;
        if (link.href === '/' && pathname === '/') return true;
        if (link.href !== '/' && link.href !== '#' && pathname.startsWith(link.href)) return true;
        if (link.dropdown) {
            return link.dropdown.some((sub: any) => pathname.startsWith(sub.href));
        }
        return false;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            {/* Main Header - EFFAH Style Light Theme */}
            <div className="bg-white/95 md:backdrop-blur-xl h-[80px] xl:h-[90px] flex items-center border-b border-slate-100 relative">
                <div className="w-full px-6 lg:px-12 2xl:px-20 flex items-center h-full relative z-10 transition-all duration-300">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 no-underline group py-1 flex-shrink-0 mr-4 transition-all">
                        <div className="transition-transform group-hover:scale-105">
                    <Image 
                        src="/Logo.webp" 
                        alt="SBN Healthcare Solution" 
                        width={60}
                        height={60}
                        className="max-h-[50px] xl:max-h-[60px] w-auto mix-blend-multiply object-contain" 
                        priority
                    />
                        </div>
                        <div className="flex flex-col justify-center leading-none min-w-fit">
                            <span className="text-[#010614] font-black text-[15px] xl:text-[19px] tracking-tight uppercase">
                                SBN Healthcare
                            </span>
                            <span className="text-[var(--primary-color)] text-[#0033e7] font-black text-[9px] xl:text-[10px] tracking-[3px] uppercase mt-0.5">
                                Solution
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Optimized & Balanced */}
                    <nav className="hidden xl:flex h-full flex-grow items-center justify-center">
                        <ul className="flex h-full items-center gap-1.5 m-0 p-0 list-none">
                            {navLinks.map((link) => {
                                const active = isLinkActive(link);
                                return (
                                    <li key={link.name} className="relative h-full flex items-center group">
                                        <Link
                                            href={link.href}
                                            className={`font-bold px-[8px] 2xl:px-[12px] h-full flex items-center uppercase text-[11px] 2xl:text-[12px] transition-all duration-300 whitespace-nowrap relative group/link hover:text-[#0033e7] ${active
                                                    ? 'text-[#0033e7] after:content-[""] after:absolute after:bottom-[30%] after:left-[8px] after:right-[8px] after:h-[3px] after:bg-[#0033e7] after:rounded-full after:shadow-[0_2px_8px_rgba(0,51,231,0.4)]'
                                                    : 'text-[#1a1a1b] after:content-[""] after:absolute after:bottom-[30%] after:left-[8px] after:w-0 after:h-[3px] after:bg-[#0033e7] after:rounded-full after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]'
                                                }`}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                {link.tKey ? t(link.tKey) : link.name}
                                                {link.dropdown && (
                                                    <FaAngleDown className={`ml-1 text-[9px] transition-all ${active ? 'text-[#0033e7] opacity-100' : 'opacity-40 group-hover:text-[#0033e7] group-hover:opacity-100'}`} />
                                                )}
                                            </span>
                                        </Link>

                                        {/* Dropdown Menu - Light Theme */}
                                        {link.dropdown && (
                                            <ul className="absolute top-[85%] left-1/2 -translate-x-1/2 bg-white min-w-[280px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] py-[20px] rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[80%] transition-all duration-300 z-[1100]">
                                                {link.dropdown.map((subLink) => {
                                                    const subActive = pathname === subLink.href;
                                                    return (
                                                        <li key={subLink.name}>
                                                            <Link
                                                                href={subLink.href}
                                                                className={`block py-[10px] px-[25px] text-[12px] font-bold border-b border-slate-50 last:border-0 transition-all duration-300 hover:bg-blue-50 hover:text-[#0033e7] hover:pl-[30px] no-underline uppercase ${subActive ? 'text-[#0033e7] bg-blue-50/50 pl-[30px] border-l-4 border-l-[#0033e7]' : 'text-slate-600'
                                                                    }`}
                                                            >
                                                                {subLink.tKey ? t(subLink.tKey) : subLink.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Action Section / Mobile Toggle */}
                    <div className="flex items-center ml-auto gap-2 xl:gap-4">
                        {showLanguageToggle && <LanguageSwitcher />}
                        <button
                            className="w-10 h-10 xl:w-12 xl:h-12 bg-[#0033e7] hover:bg-blue-800 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#0033e7]/20 xl:hidden"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Desktop action button removed as requested - nav items are already visible */}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Light Theme */}
            {isOpen && (
                <div
                    className="xl:hidden absolute top-full left-0 right-0 bg-white p-[30px] shadow-2xl z-[1001] border-b border-slate-100 max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300"
                >
                    <ul className="flex flex-col gap-[20px] p-0 m-0 list-none">
                        {navLinks.map((link) => {
                            const active = isLinkActive(link);
                            return (
                                <li
                                    key={link.name}
                                >
                                    {link.dropdown ? (
                                        <>
                                            <span className={`text-[12px] font-black uppercase tracking-[2px] block mb-3 ${active ? 'text-[#0033e7]' : 'text-slate-900'}`}>
                                                {link.tKey ? t(link.tKey) : link.name}
                                            </span>
                                            <ul className="mt-[10px] mb-[10px] flex flex-col gap-[12px] border-l-2 border-slate-100 ml-2">
                                                {link.dropdown.map(subLink => {
                                                    const subActive = pathname === subLink.href;
                                                    return (
                                                        <li key={subLink.name}>
                                                            <Link
                                                                href={subLink.href}
                                                                className={`text-[11px] font-bold block pl-[20px] uppercase no-underline transition-colors ${subActive ? 'text-[#0033e7]' : 'text-slate-500 hover:text-[#0033e7]'}`}
                                                                onClick={toggleMenu}
                                                            >
                                                                {subLink.tKey ? t(subLink.tKey) : subLink.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`text-[12px] font-black block uppercase tracking-[2px] no-underline transition-colors ${active ? 'text-[#0033e7]' : 'text-slate-900 hover:text-[#0033e7]'}`}
                                            onClick={toggleMenu}
                                        >
                                            {link.tKey ? t(link.tKey) : link.name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
