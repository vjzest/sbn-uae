'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactDetails() {
    return (
        <div className="flex flex-col justify-center">
            <div className="max-w-[500px]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                    viewport={{ once: true }}
                >
                    <div className="space-y-6 text-center lg:text-left">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-blue-50 text-[#0033e7] font-black text-[11px] tracking-[4px] uppercase px-4 py-1.5 rounded-full inline-block"
                        >
                            Professional Advisory
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1] tracking-tighter">
                            Bridging the Gap to <br className="hidden md:block"/> <span className="text-[#0033e7]">Financial Stability.</span>
                        </h2>
                        <p className="text-slate-600 font-bold leading-[1.7] text-[17px] md:text-[19px] tracking-tight">
                            Our RCM specialists don't just process billing; we architect resilient financial systems. Unlock the secrets to reducing leakage and stabilizing your practice's income today.
                        </p>
                    </div>

                    <div className="space-y-8 pt-10 border-t border-slate-200">
                        {/* Email */}
                        <div className="group flex items-start gap-6 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Email Address</h4>
                                <p className="text-lg font-black text-slate-900 leading-tight">info@sbnhealthcaresolution.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group flex items-start gap-6 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">US Phone Support</h4>
                                    <p className="text-lg font-black text-slate-900 leading-tight">+1 (805) 426-4609</p>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Middle East Support</h4>
                                    <p className="text-lg font-black text-slate-900 leading-tight">+971 50 923 4437</p>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="group flex items-start gap-6 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">US Headquarters</h4>
                                    <p className="text-[16px] md:text-lg font-bold text-slate-900 leading-snug">
                                        1309 Coffeen Avenue Ste 1200<br />
                                        Sheridan, WY 82801
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Middle East Office</h4>
                                    <p className="text-[15px] font-bold text-slate-900 leading-snug">
                                        Office C1-1F-SF8562, Ajman Free Zone<br />
                                        Makani No. 4442612247, UAE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
