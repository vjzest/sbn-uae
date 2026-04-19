'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Footer = () => {
    const pathname = usePathname();

    // Hide footer on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    const fadeUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <footer
            className="relative pt-[1px] pb-[40px] text-gray-900 overflow-hidden bg-cover bg-center bg-no-repeat border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient identical to other sections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-blue-100/70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-[80px]">
                    {/* Brand Info */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-8"
                        >
                            <Link href="/" className="flex items-center gap-4 no-underline group">
                                <div className="p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white transition-transform group-hover:scale-105">
                                    <img
                                        src="/Logo.png"
                                        alt="SBN Healthcare Solution"
                                        className="h-[50px] md:h-[60px] w-auto mix-blend-multiply"
                                    />
                                </div>
                                <div className="flex flex-col justify-center leading-none">
                                    <span className="text-[#010614] font-black text-[18px] md:text-[22px] tracking-tight uppercase">
                                        SBN Healthcare
                                    </span>
                                    <span className="text-[#0033e7] font-black text-[10px] md:text-[12px] tracking-[4px] uppercase mt-0.5">
                                        Solution
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-gray-600 text-[16px] leading-[1.8] mb-10 max-w-[340px] font-medium tracking-tight"
                        >
                            Next-generation RCM infrastructure engineered to accelerate cash flow and eliminate administrative friction for modern medical practices.
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="flex gap-4"
                        >
                            {[
                                { icon: <FaFacebook />, href: "https://www.facebook.com/BillingGiant/" },
                                { icon: <FaTwitter />, href: "https://twitter.com/sbnhealthcare" },
                                { icon: <FaLinkedin />, href: "https://in.linkedin.com/company/sbn-healthcare-solution-llc" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="w-11 h-11 bg-white/50 backdrop-blur-sm border border-white flex items-center justify-center rounded-2xl text-gray-400 hover:bg-[#0033e7] hover:text-white hover:border-[#0033e7] hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-500 active:scale-95 shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <motion.h4
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]"
                        >
                            Platform Solutions
                        </motion.h4>
                        <ul className="flex flex-col gap-5 p-0 list-none">
                            {[
                                { name: 'Eligibility Verification', href: '/services/eligibility-verification' },
                                { name: 'Benefits Check', href: '/services/benefits-check' },
                                { name: 'Prior Authorization', href: '/services/prior-authorization' },
                                { name: 'Exclusion Check', href: '/services/exclusion-check' },
                                { name: 'Privacy & Security', href: '/security' }
                            ].map((item, idx) => (
                                <motion.li
                                    key={item.name}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0, transition: { delay: idx * 0.05 + 0.2 } }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 text-[15px] font-bold hover:text-[#0033e7] transition-all flex items-center gap-3 group no-underline hover:translate-x-1"
                                    >
                                        <span className="w-1 h-4 rounded-full bg-blue-600/0 group-hover:bg-[#0033e7] transition-all"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <motion.h4
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]"
                        >
                            Company
                        </motion.h4>
                        <ul className="flex flex-col gap-5 p-0 list-none">
                            {[
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Insights', href: '/blog' },
                                { name: 'RCM Tool', href: '/rcm-calculator' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Contact Us', href: '/contact-us' }
                            ].map((item, idx) => (
                                <motion.li
                                    key={item.name}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0, transition: { delay: idx * 0.05 + 0.2 } }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 text-[15px] font-bold hover:text-[#0033e7] transition-all flex items-center gap-3 group no-underline hover:translate-x-1"
                                    >
                                        <span className="w-1 h-4 rounded-full bg-blue-600/0 group-hover:bg-[#0033e7] transition-all"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* HQ */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <motion.h4
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]"
                        >
                            Get In Touch
                        </motion.h4>
                        <div className="space-y-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-gray-600 text-[16px] leading-[1.8] font-medium"
                            >
                                1309 Coffeen Avenue Ste 1200<br />
                                Sheridan, WY 82801
                            </motion.div>
                            <div className="space-y-4">
                                <motion.a
                                    href="tel:8054264609"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="text-gray-600 text-[15px] flex items-center gap-4 transition-all hover:text-[#0033e7] group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all">
                                        <FaPhoneAlt size={12} />
                                    </div>
                                    <span className="font-bold">+1 (805) 426-4609</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:info@sbnhealthcaresolution.com"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="text-gray-600 text-[15px] flex items-center gap-4 transition-all hover:text-[#0033e7] group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all">
                                        <FaEnvelope size={12} />
                                    </div>
                                    <span className="font-bold break-all">info@sbnhealthcaresolution.com</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200/50 pt-10 pb-10 text-center relative z-10 bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <p className="text-slate-500 text-[11px] font-black uppercase tracking-[3px] mb-2">
                        &copy; 2026 SBN Healthcare Solution. All Rights Reserved.
                    </p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[2px]">
                        ENGINEERED FOR EXCELLENCE IN HEALTHCARE REVENUE CYCLE MANAGEMENT
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
