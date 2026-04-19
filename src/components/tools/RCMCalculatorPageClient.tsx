'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';
import RCMCalculator from '@/components/tools/RCMCalculator';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const whatTheseMean = [
  { t: "Denial Impact", p: "Even a small % denial affects total revenue" },
  { t: "Workflow Gaps", p: "Inefficiencies reduce collections" },
  { t: "Optimization Opportunity", p: "Better systems = better revenue" }
];

const whyUse = [
  { t: "Identify Hidden Revenue Leakage", p: "Spot losses you didn’t even know existed" },
  { t: "Understand Denial Impact", p: "See how denials affect your income" },
  { t: "Improve Billing Efficiency", p: "Fix process gaps" },
  { t: "Increase Net Collections", p: "Maximize what you earn" }
];

const takeaways = [
  "Small inefficiencies = big revenue loss",
  "Denials directly impact income",
  "Recovery potential is often higher than expected",
  "Data-driven insights improve decisions",
  "Optimized workflows = higher collections"
];

const faqs = [
  { q: "What is an RCM calculator?", a: "It is a tool that helps estimate revenue, losses, and recovery opportunities in healthcare billing." },
  { q: "How accurate are the results?", a: "They are estimates based on your inputs, but useful for identifying trends." },
  { q: "Can this improve my revenue?", a: "Yes, by identifying gaps and opportunities for optimization." },
  { q: "Is this similar to military pay calculators?", a: "No, tools like military pay calculator deployment or 2026 military pay chart calculator with BAH are unrelated to healthcare." },
  { q: "Do I need technical knowledge to use it?", a: "Not at all — just enter basic details and get results instantly." }
];

export default function RCMCalculatorPageClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        practiceName: '',
        revenue: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending request...' });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                name: formData.name,
                email: formData.email,
                subject: 'RCM Detailed Revenue Analysis Request',
                message: `Practice Name: ${formData.practiceName}\nMonthly Revenue: ${formData.revenue || 'Not provided'}`
            });
            setStatus({ type: 'success', message: 'Request submitted successfully! We will contact you soon.' });
            setFormData({ name: '', email: '', practiceName: '', revenue: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
        }
    };

    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white pb-20">
            {/* Custom Premium Hero */}
            <section className="bg-cover bg-center pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-[#f8faff]/90 pointer-events-none z-0"></div>
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/15 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[100px] mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,231,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            No Obligation | Instant Insights | Data-Driven Estimates
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            RCM Calculator – Estimate Your Revenue Loss & Recovery Potential
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Let’s be honest — most practices don’t even realize how much revenue they’re losing every month. This RCM calculator helps you quickly understand where your money is leaking and how much you can recover with better systems.
                        </p>
                        <p className="text-sm mt-4 text-slate-500 italic">Unlike tools like military pay calculator monthly or military pay calculator 2026, this is built specifically for healthcare revenue cycles.</p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <div className="relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col pt-10 border-t border-blue-50/50" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f8faff] to-transparent z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/80 via-white/70 to-blue-50/60 pointer-events-none"></div>

                <section className="py-20 relative z-10 pb-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-[800px] mx-auto">
                            <span className="bg-white/60 backdrop-blur-md border border-white px-5 py-2 rounded-full text-[11px] font-extrabold text-[#0033e7] uppercase tracking-[3px] mb-6 inline-block shadow-sm">
                                Interactive Tool
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                                Estimate Your Revenue Loss and Recovery Potential
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Add your basic details below and get instant estimates.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-[1100px] mx-auto relative z-10">
                            {/* Original Intact Calculator */}
                            <RCMCalculator />
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* What These Numbers Actually Mean & Why Use Our Calculator */}
            <section className="py-20 bg-cover bg-center text-white relative overflow-hidden" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-slate-900/95 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* What These Numbers Mean */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl font-black mb-6 tracking-tight text-white">What These Numbers Actually Mean</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                These numbers aren’t just estimates — they reflect real issues inside your billing process. High denial rates, delayed reimbursements, and weak verification systems all contribute to revenue loss.
                            </p>
                            
                            <div className="space-y-4 mb-6">
                                {whatTheseMean.map((item, idx) => (
                                    <div key={idx} className="bg-[#0B1F33] p-5 rounded-xl border border-slate-700 shadow-lg flex flex-col transition hover:border-teal-500/50">
                                        <h4 className="font-extrabold text-teal-400 mb-1 flex items-center gap-2">
                                            <span>✔</span> {item.t}
                                        </h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 italic font-medium">Just like tools such as military pay calculator after taxes or military pay projected retirement calculator, insights matter — but action matters more.</p>
                        </motion.div>

                        {/* Why Practices Use Our Calculator */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl font-black mb-6 tracking-tight text-white">Why Practices Use Our RCM Calculator</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {whyUse.map((item, idx) => (
                                    <div key={idx} className="bg-[#0B1F33] p-5 rounded-xl border border-slate-700 shadow-lg flex flex-col transition hover:border-[#0033e7]/50">
                                        <h4 className="font-extrabold text-blue-400 mb-1 flex items-center gap-2">
                                            <span className="text-white">✔</span> {item.t}
                                        </h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 italic font-medium">This is very different from tools like RCM calculator army or RCM calculator military, which are unrelated to healthcare revenue.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Analysis Form View */}
            <section className="py-20 border-b border-blue-50/50 relative bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-10 md:p-14 shadow-xl text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Get a Detailed Revenue Analysis</h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-8">
                            Want more than just estimates? We can give you a deeper breakdown of your revenue cycle and exactly where you’re losing money.
                        </p>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 text-left relative">
                            {status.message && (
                                <div className={`md:col-span-2 p-4 rounded-xl text-sm font-bold border ${status.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' :
                                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                                        'bg-blue-50 text-[#0033e7] border-blue-100'
                                    }`}>
                                    <div className="flex items-center gap-3 justify-center">
                                        {status.type === 'loading' && <span className="w-4 h-4 border-2 border-[#0033e7] border-t-transparent rounded-full animate-spin"></span>}
                                        {status.message}
                                    </div>
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0033e7] transition-shadow shadow-sm" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0033e7] transition-shadow shadow-sm" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Practice Name</label>
                                <input type="text" name="practiceName" value={formData.practiceName} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0033e7] transition-shadow shadow-sm" placeholder="Clinic / Facility Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Revenue (Optional)</label>
                                <input type="text" name="revenue" value={formData.revenue} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0033e7] transition-shadow shadow-sm" placeholder="$ Amount" />
                            </div>
                            <div className="md:col-span-2 text-center mt-4">
                                <button type="submit" disabled={status.type === 'loading'} className="inline-block bg-[#0033e7] text-white px-10 py-5 rounded-xl font-black uppercase tracking-[2px] transition-all hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,51,231,0.3)] shadow-xl w-full md:w-auto disabled:opacity-50">
                                    {status.type === 'loading' ? 'Sending Request...' : 'Request Detailed Report'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

             {/* Takeaways & FAQ Split */}
             <section className="py-20 lg:py-28 relative border-t border-blue-50/50 bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                    <div className="absolute inset-0 bg-[#f8faff]/85 backdrop-blur-sm pointer-events-none z-0"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Quick Takeaways */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="bg-[#0033e7] rounded-3xl p-10 md:p-14 text-white shadow-[0_20px_50px_rgba(0,51,231,0.2)] relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none"></div>
                                    <h3 className="text-3xl font-black mb-8 relative z-10 tracking-tight">Quick Takeaways</h3>
                                    <ul className="space-y-6 relative z-10">
                                        {takeaways.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-lg font-medium">
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* FAQs */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="h-full">
                                    <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h3>
                                    <div className="space-y-6">
                                        {faqs.map((faq, idx) => (
                                            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
                                                <h4 className="text-lg font-extrabold text-slate-900 mb-2">{faq.q}</h4>
                                                <p className="text-slate-600 font-medium">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pt-10 pb-20 relative bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                   <div className="absolute inset-0 bg-[#f8faff]/90 backdrop-blur-sm pointer-events-none z-0"></div>
                   <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-6">
                                Start Understanding Your Revenue Today
                            </h2>
                            <p className="text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
                                If you’re not tracking your revenue loss, you’re already behind. Use this RCM calculator to get clarity — and take the first step toward better financial performance. Better insights = better decisions = better revenue.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-teal-500 text-white px-10 py-5 rounded-xl font-black uppercase tracking-[2px] transition-all hover:bg-teal-600 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,184,166,0.3)] shadow-xl">
                                Start Your Free Analysis
                            </Link>
                        </motion.div>
                   </div>
                </section>

        </main>
    );
}
