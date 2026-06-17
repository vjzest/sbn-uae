'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice via cookie
        const hasConsent = document.cookie.split('; ').find(row => row.startsWith('sbn_cookie_consent='));

        if (!hasConsent) {
            // Delay appearance for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        // Set cookie for 365 days
        const expires = new Date();
        expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = `sbn_cookie_consent=accepted;expires=${expires.toUTCString()};path=/`;
        setIsVisible(false);
    };

    const handlePreferences = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-6 left-6 md:left-auto md:right-6 lg:bottom-10 lg:right-10 z-[9999] max-w-[340px] w-[calc(100%-48px)] md:w-full"
                >
                    <div className="bg-[#0B1F33]/90 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10 p-6 overflow-hidden relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="flex items-start gap-4 mb-6 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#0033e7]/20 flex items-center justify-center flex-shrink-0 border border-[#0033e7]/30 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                            </div>
                            <div className="text-slate-300 text-[13px] leading-relaxed font-medium mt-1">
                                <p>
                                    We use cookies to enhance your experience and analyze traffic.
                                    <a href="/privacy-policy" className="text-[#60a5fa] ml-1.5 hover:text-white transition-colors font-bold underline decoration-[#60a5fa]/40 underline-offset-2">Policy</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[#0033e7] text-white text-xs font-extrabold py-3.5 rounded-xl transition-all hover:bg-blue-800 hover:shadow-[0_10px_20px_rgba(0,51,231,0.3)] active:scale-95 uppercase tracking-[2px]"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handlePreferences}
                                className="px-5 bg-white/5 text-slate-300 border border-white/10 text-xs font-bold py-3.5 rounded-xl transition-all hover:bg-white/10 hover:text-white active:scale-95"
                            >
                                Settings
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
