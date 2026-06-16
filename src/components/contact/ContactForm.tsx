'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        practiceName: '',
        claimVolume: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Generating access...' });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                name: formData.name,
                email: formData.email,
                subject: 'High Conversion Lead - Guide Access',
                message: `Lead details from Optimized Contact Funnel:\n- Practice Name: ${formData.practiceName}\n- Monthly Claim Volume: ${formData.claimVolume || 'Not provided'}`
            });
            setStatus({ type: 'success', message: 'Success! Your guide access has been sent to your email.' });
            setFormData({ name: '', email: '', practiceName: '', claimVolume: '' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Submission failed. Please check your connection or try again.' });
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group"
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0033e7] to-blue-400"></div>

            <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tighter">
                    {t('contact_form.title_1')} <span className="text-[#0033e7]">{t('contact_form.title_2')}</span>
                </h3>
                <p className="text-slate-600 font-bold text-lg leading-relaxed mb-8 tracking-tight">
                    {t('contact_form.desc')}
                </p>

                {/* 3 Quick Benefit Bullets */}
                <div className="space-y-4 mb-4">
                    {[
                        t('contact_form.benefit_1'),
                        t('contact_form.benefit_2'),
                        t('contact_form.benefit_3')
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 text-slate-900 font-extrabold text-[15px] tracking-tight">
                            <div className="w-5 h-5 rounded-lg bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-300">
                                <FaCheckCircle size={11} />
                            </div>
                            {benefit}
                        </div>
                    ))}
                </div>
            </div>

            {status.message && (
                <div className={`mb-10 p-6 rounded-2xl text-[15px] font-black border transition-all animate-in fade-in slide-in-from-top-4 ${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' :
                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-blue-50 text-[#0033e7] border-blue-100'
                    }`}>
                    <div className="flex items-center gap-4">
                        {status.type === 'loading' && <span className="w-5 h-5 border-[3px] border-[#0033e7] border-t-transparent rounded-full animate-spin"></span>}
                        {status.message}
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Full Name */}
                <div className="space-y-3">
                    <label htmlFor="name" className="block text-[12px] font-black uppercase text-[#0033e7]/60 tracking-[3px] ml-1">{t('contact_form.fullname')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 bg-slate-50/50 border border-slate-100 rounded-xl transition-all focus:outline-none focus:border-[#0033e7]/30 focus:bg-white focus:ring-4 focus:ring-blue-50 font-bold text-slate-800 text-[16px] placeholder:text-slate-300"
                    />
                </div>

                {/* 2. Work Email */}
                <div className="space-y-3">
                    <label htmlFor="email" className="block text-[12px] font-black uppercase text-[#0033e7]/60 tracking-[3px] ml-1">{t('contact_form.work_email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@hospital.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 bg-slate-50/50 border border-slate-100 rounded-xl transition-all focus:outline-none focus:border-[#0033e7]/30 focus:bg-white focus:ring-4 focus:ring-blue-50 font-bold text-slate-800 text-[16px] placeholder:text-slate-300"
                    />
                </div>

                {/* 3. Practice Name */}
                <div className="space-y-3">
                    <label htmlFor="practiceName" className="block text-[12px] font-black uppercase text-[#0033e7]/60 tracking-[3px] ml-1">{t('contact_form.practice_name')}</label>
                    <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        placeholder="Premier Healthcare LLC"
                        value={formData.practiceName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 bg-slate-50/50 border border-slate-100 rounded-xl transition-all focus:outline-none focus:border-[#0033e7]/30 focus:bg-white focus:ring-4 focus:ring-blue-50 font-bold text-slate-800 text-[16px] placeholder:text-slate-300"
                    />
                </div>

                {/* 4. Monthly Claim Volume (Optional) */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center ml-1">
                        <label htmlFor="claimVolume" className="block text-[12px] font-black uppercase text-[#0033e7]/60 tracking-[3px]">{t('contact_form.claim_volume')}</label>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact_form.optional')}</span>
                    </div>
                    <input
                        type="text"
                        id="claimVolume"
                        name="claimVolume"
                        placeholder="e.g. 500+ claims"
                        value={formData.claimVolume}
                        onChange={handleChange}
                        className="w-full px-6 py-5 bg-slate-50/50 border border-slate-100 rounded-xl transition-all focus:outline-none focus:border-[#0033e7]/30 focus:bg-white focus:ring-4 focus:ring-blue-50 font-bold text-slate-800 text-[16px] placeholder:text-slate-300"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status.type === 'loading'}
                        className="w-full flex items-center justify-center gap-3 bg-[#0033e7] text-white font-black py-6 rounded-xl uppercase tracking-[4px] text-[13px] transition-all hover:bg-blue-800 hover:shadow-[0_10px_25px_rgba(0,51,231,0.2)] hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-50 group no-underline"
                    >
                        {status.type === 'loading' ? t('contact_form.btn_loading') : t('contact_form.btn_submit')}
                        {!status.type && (
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                        )}
                    </button>
                    
                    {/* Advanced Trust Line */}
                    <p className="mt-8 text-center text-slate-400 font-bold text-[12px] tracking-tight">
                        {t('contact_form.trust_1')} <br />
                        <span className="opacity-50 font-medium">{t('contact_form.trust_2')}</span>
                    </p>
                </div>
            </form>
        </motion.div>
    );
}
