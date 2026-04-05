'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const pricingModels = [
  {
    title: "Performance-Based Pricing (Per Claim / Collection)",
    desc: "A flexible, scalable model where you pay based on actual performance.",
    bestFor: "Small to mid-sized practices",
    points: [
      "Pay per claim or percentage of collections",
      "Scales as your volume grows",
      "No fixed overhead",
      "Fully performance-driven"
    ],
    footer: "This is one of the most common pricing strategy types used in growing businesses."
  },
  {
    title: "Dedicated Billing Team Model",
    desc: "A complete team working only for your practice.",
    bestFor: "Mid to large practices",
    points: [
      "Dedicated billing experts",
      "Smooth, consistent workflows",
      "Full control over operations",
      "Predictable monthly cost"
    ],
    footer: "Similar to structured pricing methods and strategies used in long-term operations."
  },
  {
    title: "Enterprise RCM Partnership Model",
    desc: "Fully customized pricing for complex and high-volume setups.",
    bestFor: "Multi-location or enterprise providers",
    points: [
      "Custom pricing based on complexity",
      "Multi-specialty support",
      "System integration",
      "Performance-focused optimization"
    ],
    footer: "This reflects advanced pricing strategies with examples used by large organizations."
  }
];

const includedBenefits = [
  { title: "Complete Revenue Cycle Management", desc: "End-to-end support" },
  { title: "Eligibility & Benefits Verification", desc: "Accurate patient validation" },
  { title: "Medical Billing and Coding", desc: "Clean, error-free workflows" },
  { title: "Claims Submission & Follow-Up", desc: "Faster reimbursements" },
  { title: "Denial Management & Recovery", desc: "Reduced revenue leakage" },
  { title: "Real-Time Reporting", desc: "Clear performance tracking" },
  { title: "Compliance-Aligned Workflows", desc: "Safe and structured processes" }
];

const financialOutcomes = [
  { title: "Higher Net Collections", desc: "You earn what you deserve" },
  { title: "Reduced A/R Days", desc: "Faster cash flow" },
  { title: "Lower Denial Rates", desc: "Fewer errors, better claims" },
  { title: "Improved Efficiency", desc: "Less waste, more output" }
];

const takeaways = [
  "Pricing should align with performance",
  "Flexible models = better growth",
  "ROI matters more than cost",
  "Scalable pricing supports long-term success",
  "Right strategy = stronger revenue"
];

const faqs = [
  { q: "Do you offer customized pricing?", a: "Yes, everything is tailored based on your size, specialty, and workflows." },
  { q: "Is there a long-term contract?", a: "No rigid contracts — we keep things flexible." },
  { q: "How is pricing calculated?", a: "It depends — claim volume, collections, or dedicated team structure." },
  { q: "Will pricing change as we grow?", a: "Yes, but in a way that supports your growth, not hurts it." }
];

export default function PricingPageClient() {
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
                            Transparent Models | Performance-Focused | Scalable Engagement
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Pricing Philosophy Designed for Healthcare Growth
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Let’s be real — pricing should never feel like a burden. It should support your growth, not slow it down.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Overview */}
            <section className="py-20 border-t border-blue-50/50 bg-cover bg-center relative" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#f8faff]/90 pointer-events-none z-0"></div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight mb-8">
                            Flexible Pricing Built Around Your Revenue Performance
                        </h2>
                        <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mb-10">
                            Our pricing philosophy is simple: align costs with performance so you only pay for real outcomes. Whether you're exploring different pricing strategies in marketing or looking for practical models, we focus on what actually works in real healthcare setups.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-[#0033e7] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] transition-all hover:bg-blue-800 hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,51,231,0.2)]">
                            Request Pricing Consultation
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">No One-Size-Fits-All Approach</h3>
                            <p className="text-slate-600 font-medium">Every pricing model is tailored</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Built Around Your Operations</h3>
                            <p className="text-slate-600 font-medium">Aligned with your real workflows</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Focus on ROI</h3>
                            <p className="text-slate-600 font-medium">Not just cost, but actual returns</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Models */}
            <section className="py-20 bg-cover bg-center text-white relative overflow-hidden" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-slate-900/95 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <span className="text-teal-400 font-bold tracking-[3px] uppercase text-xs mb-4 block">Scalable Options</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Choose the Model That Fits Your Operations</h2>
                        <p className="text-slate-300 font-medium max-w-2xl mx-auto">Not every practice needs the same structure. Here are the three models we offer.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingModels.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.15 } } } as any}
                                className="bg-[#0B1F33] p-10 rounded-2xl border border-slate-700/50 shadow-2xl flex flex-col relative group hover:border-[#0033e7]/50 hover:shadow-[0_20px_60px_rgba(0,51,231,0.2)] transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/20 rounded-bl-full -z-0 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-[22px] font-black text-white mb-3 relative z-10">{item.title}</h3>
                                <p className="text-slate-400 font-medium mb-6 relative z-10">{item.desc}</p>
                                
                                <div className="bg-slate-800/50 p-4 rounded-xl mb-8 border border-slate-700 relative z-10">
                                    <span className="text-[11px] uppercase tracking-[2px] text-teal-400 font-bold block mb-1">Best For</span>
                                    <strong className="text-white text-[15px]">{item.bestFor}</strong>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                                    {item.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex gap-3 text-slate-300 font-medium items-start">
                                            <span className="text-teal-400 mt-1">✔</span> {pt}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 border-t border-slate-700/50 text-[12px] text-slate-500 italic relative z-10">
                                    {item.footer}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get & Financial Outcomes Grid */}
            <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-white/90 pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* What You Get */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">What You Get with Every Engagement</h2>
                            <p className="text-slate-600 mb-8 font-medium">No matter which model you choose, some things remain constant in our service architecture.</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {includedBenefits.map((ben, idx) => (
                                    <div key={idx} className="bg-white/80 p-5 rounded-xl border border-blue-50 shadow-sm flex flex-col justify-center transition hover:shadow-md hover:-translate-y-1">
                                        <h4 className="font-extrabold text-[#0033e7] mb-1 leading-snug">{ben.title}</h4>
                                        <p className="text-slate-600 text-sm font-medium">{ben.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Financial Outcomes */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Focused on Financial Outcomes, Not Just Costs</h2>
                            <p className="text-slate-600 mb-8 font-medium">
                                Let’s be honest — pricing only matters if it delivers results. Our pricing philosophy is built around improving your financial performance, not just reducing expenses.
                            </p>

                            <div className="space-y-4">
                                {financialOutcomes.map((out, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                        <div className="w-12 h-12 rounded-full bg-[#0033e7] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                                            $
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-slate-900 text-lg">{out.title}</h4>
                                            <p className="text-slate-600 text-sm font-medium">{out.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-slate-500 italic font-medium">This is what separates good pricing from an average pricing strategy in marketing.</p>
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
                                    <p className="mt-6 text-[13px] text-slate-500 italic font-medium px-4">This flexibility is part of modern 10 types of pricing strategies used today.</p>
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
                                Get a Pricing Model That Actually Works for You
                            </h2>
                            <p className="text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
                                If your pricing model isn’t aligned with your operations, you’re either overpaying… or underperforming. Build a smarter pricing philosophy in business that grows with you.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-teal-500 text-white px-10 py-5 rounded-xl font-black uppercase tracking-[2px] transition-all hover:bg-teal-600 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,184,166,0.3)] shadow-xl">
                                Schedule a Pricing Consultation
                            </Link>
                        </motion.div>
                   </div>
                </section>

        </main>
    );
}
