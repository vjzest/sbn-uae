'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const focusAreas = [
    { t: "Fixing inefficiencies in billing" },
    { t: "Reducing denial rates" },
    { t: "Improving cash flow visibility" },
    { t: "Keeping everything compliant" }
];

const operationsLookLike = [
    { t: "Standard workflows" },
    { t: "Multiple quality checks" },
    { t: "Controlled data access" },
    { t: "Continuous performance tracking" }
];

const makesUsDifferent = [
    { t: "We focus on systems, not just tasks" },
    { t: "Everything is performance-driven" },
    { t: "Compliance is built in" },
    { t: "Models are scalable" },
    { t: "Work is transparent" }
];

const takeaways = [
    "Most billing issues come from weak systems",
    "Structured workflows improve results",
    "Leadership = strategy + execution",
    "Better systems = better revenue",
    "Simplicity + structure = long-term growth"
];

const faqs = [
    { q: "What services does SBN Healthcare offer?", a: "Complete revenue cycle support — billing, coding, denial management, and workflow optimization." },
    { q: "How can I book an appointment with SBN Healthcare online?", a: "You can easily schedule a consultation through the website." },
    { q: "What insurance plans are accepted by SBN Healthcare providers?", a: "We work with multiple payer systems based on client needs." },
    { q: "Where is the nearest SBN Healthcare facility located?", a: "We operate globally and provide services remotely with structured systems." }
];

export default function AboutClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white pb-20">
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center py-[120px] text-center overflow-hidden"
                style={{ backgroundImage: "url('/About.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0033e7]/90 to-[#0B1F33]/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold uppercase text-[11px] tracking-[4px] mb-6 px-5 py-2 rounded-full backdrop-blur-md"
                    >
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                        About SBN Healthcare
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
                        } as any}
                        className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold m-0 text-white drop-shadow-lg tracking-tight leading-[1.1]"
                    >
                        Building Better Revenue Systems
                        <br />for Modern Healthcare
                    </motion.h1>
                </div>
            </div>

            {/* Introductory text & Strategy + Ground Reality */}
            <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 to-white/90 pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <p className="text-[19px] text-slate-700 font-medium leading-[1.8] mb-8">
                            Let’s be honest — most healthcare billing systems are messy. Too many gaps, too many delays, and way too many denials. That’s exactly why About SBN Healthcare matters. We’re not here just to “do billing.” We focus on building proper, structured revenue systems that actually work in real life.
                        </p>
                        <p className="text-[17px] text-slate-600 font-medium italic">
                            So if you’re wondering what services does SBN Healthcare offer, it’s not just services — it’s a complete system.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="bg-white/80 backdrop-blur-xl border border-blue-50 p-10 md:p-14 rounded-2xl shadow-[0_15px_40px_rgba(0,51,231,0.06)] flex flex-col md:flex-row items-center gap-10">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-[#0033e7] flex-shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#0033e7]/10 animate-pulse"></div>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">A Team That Understands Both Strategy & Ground Reality</h2>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Good strategy is important. But execution? That’s where most things break. Our leadership team focuses on both — making sure the plan works on paper and in day-to-day operations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-cover bg-center text-white relative overflow-hidden" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-slate-900/95 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5 mix-blend-overlay z-0"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">Leadership That Keeps Things Running Smoothly</h2>
                        <div className="w-20 h-1 bg-[#0033e7] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0B1F33] border border-slate-700/50 p-10 rounded-2xl hover:border-[#0033e7]/50 transition-colors shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0033e7]/20 rounded-full blur-[50px] group-hover:bg-[#0033e7]/40 transition-all"></div>
                            <h3 className="text-2xl font-extrabold mb-2 relative z-10 text-white">Iftikhar Ali Khan</h3>
                            <span className="text-teal-400 font-bold uppercase text-[12px] tracking-[2px] mb-6 block relative z-10">Founder & CEO</span>
                            <p className="text-slate-400 font-medium leading-relaxed relative z-10">
                                Iftikhar Ali Khan leads SBN Healthcare with a clear vision — build systems that are scalable, structured, and actually deliver results. He looks after the bigger picture — strategy, growth, and making sure everything stays aligned with performance and compliance.
                            </p>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0B1F33] border border-slate-700/50 p-10 rounded-2xl hover:border-teal-500/50 transition-colors shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/20 rounded-full blur-[50px] group-hover:bg-teal-500/40 transition-all"></div>
                            <h3 className="text-2xl font-extrabold mb-2 relative z-10 text-white">Md Nematullah</h3>
                            <span className="text-teal-400 font-bold uppercase text-[12px] tracking-[2px] mb-6 block relative z-10">Head of Operations (COO)</span>
                            <p className="text-slate-400 font-medium leading-relaxed relative z-10">
                                Md Nematullah handles what happens behind the scenes — operations, teams, and workflows. His focus is simple: everything should run smoothly, efficiently, and without unnecessary errors.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why We Focus on Systems / Mission Vision */}
            <section className="py-20 lg:py-28 bg-cover bg-center relative" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-white/90 pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                            Why We Focus on Systems (Not Just Services)
                        </motion.h2>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[17px] text-slate-600 font-medium leading-[1.8] mb-6">
                            Here’s the truth — most billing problems don’t come from effort. They come from poor systems. SBN Healthcare was built to fix exactly that. We create structured workflows that reduce confusion, improve accuracy, and make the entire revenue cycle more predictable.
                        </motion.p>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[16px] text-[#0033e7] font-bold italic">
                            That’s why when people ask what services does SBN Healthcare offer, the answer always comes back to systems.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUp}
                        className="bg-[#0B1F33]/85 backdrop-blur-xl rounded-2xl p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden shadow-[0_40px_80px_rgba(0,51,231,0.25)] border border-[#2D3F54]"
                    >

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/40 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none z-0 mix-blend-screen"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none z-0 mix-blend-screen"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className="pt-8 md:pt-0 pb-8 md:pb-0 md:pr-10 text-left">
                                <span className="text-teal-400 font-bold uppercase text-[12px] tracking-[5px] mb-4 block">Our Target</span>
                                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Mission</h2>
                                <p className="text-[17px] font-medium text-slate-300 leading-[1.8]">
                                    To help healthcare providers run financially stable and efficient operations through structured revenue systems.
                                </p>
                            </div>
                            <div className="pt-8 md:pt-0 md:pl-10 text-left">
                                <span className="text-teal-400 font-bold uppercase text-[12px] tracking-[5px] mb-4 block">Our Future</span>
                                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Vision</h2>
                                <p className="text-[17px] font-medium text-slate-300 leading-[1.8]">
                                    To become a long-term, trusted RCM partner known for consistency, transparency, and real results.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Middle Grid Sections: What We Do + How We Work + Why Choose Us */}
            <section className="py-20 relative bg-cover bg-center border-y border-blue-50/50" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-[#f8faff]/95 pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* What We Actually Do */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#f8faff] p-10 rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-[0_20px_40px_rgba(0,51,231,0.08)] flex flex-col h-full">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">What We Actually Do</h3>
                            <p className="text-slate-600 font-medium mb-8 text-[15px]">We connect the full revenue cycle — not just one part of it.</p>
                            <span className="text-[11px] font-bold text-[#0033e7] uppercase tracking-[2px] block mb-4 border-b border-blue-200 pb-2">Our Focus Areas</span>
                            <ul className="space-y-4 mb-6">
                                {focusAreas.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 font-medium items-start">
                                        <span className="text-[#0033e7] font-bold">✔</span> {item.t}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-grow"></div>
                            <p className="text-[12px] text-slate-500 italic mt-6">Everything is designed in a way that even basic questions like how can I book an appointment with SBN Healthcare online feel simple and clear.</p>
                        </motion.div>

                        {/* How We Work */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#f8faff] p-10 rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-[0_20px_40px_rgba(0,51,231,0.08)] flex flex-col h-full">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">How We Work</h3>
                            <p className="text-slate-600 font-medium mb-8 text-[15px]">No chaos. No guesswork. Just a clear system.</p>
                            <span className="text-[11px] font-bold text-[#0033e7] uppercase tracking-[2px] block mb-4 border-b border-blue-200 pb-2">What Our Operations Look Like</span>
                            <ul className="space-y-4 mb-6">
                                {operationsLookLike.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 font-medium items-start">
                                        <span className="text-[#0033e7] font-bold">✔</span> {item.t}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-grow"></div>
                            <p className="text-[12px] text-slate-500 italic mt-6">This structure also helps answer queries like what insurance plans are accepted by SBN Healthcare providers — because processes are already organized.</p>
                        </motion.div>

                        {/* Why Practices Choose Us */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#f8faff] p-10 rounded-2xl border border-blue-100 shadow-sm transition-all hover:shadow-[0_20px_40px_rgba(0,51,231,0.08)] flex flex-col h-full">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Why Practices Choose Us</h3>
                            <p className="text-slate-600 font-medium mb-8 text-[15px]">There are a lot of billing providers out there. But not all of them work the same way.</p>
                            <span className="text-[11px] font-bold text-[#0033e7] uppercase tracking-[2px] block mb-4 border-b border-blue-200 pb-2">What Makes Us Different</span>
                            <ul className="space-y-4 mb-6">
                                {makesUsDifferent.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 font-medium items-start">
                                        <span className="text-[#0033e7] font-bold">✔</span> {item.t}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-grow"></div>
                            <p className="text-[12px] text-slate-500 italic mt-6">Many people searching where is the nearest SBN Healthcare facility located realize that we work globally — without compromising structure.</p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Takeaways & FAQ Split */}
            <section className="py-20 lg:py-28 relative border-t border-blue-50/50 bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-[#f8faff]/85 backdrop-blur-sm pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Quick Takeaways */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="bg-[#0033e7]/90 backdrop-blur-md rounded-3xl p-10 md:p-14 text-white shadow-[0_20px_50px_rgba(0,51,231,0.2)] border border-[#0033e7]/20 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none"></div>
                                <h3 className="text-3xl font-black mb-8 relative z-10 tracking-tight text-white">Quick Takeaways</h3>
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
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-4xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-6">
                            Let’s Build Something That Actually Works
                        </h2>
                        <p className="text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
                            If your current billing setup feels confusing, slow, or inconsistent — you’re not alone. But it can be fixed. That’s what About SBN Healthcare is really about — making your revenue cycle simpler, stronger, and more reliable.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-teal-500 text-white px-10 py-5 rounded-xl font-black uppercase tracking-[2px] transition-all hover:bg-teal-600 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,184,166,0.3)] shadow-xl">
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
