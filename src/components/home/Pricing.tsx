'use client';

import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    const customPricingModels = [
        { title: "Complete Service Package", description: "Full billing management at one flat rate." },
        { title: "Per Transaction", description: "Pay-as-you-go, starting at $0.75/claim." },
        { title: "FTE Basis", description: "Dedicated staff for high-volume practices." },
        { title: "Custom Plan", description: "Tailored to your exact needs." }
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden border-t border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] px-5 py-2 rounded-full backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Pricing That Works for You
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Flexible Plans Built Around <br className="hidden md:block" /> Your Practice
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium tracking-tight max-w-3xl mx-auto">
                        We understand that every practice is different. That’s why we offer multiple pricing models:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {customPricingModels.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden relative transition-all duration-500 shadow-sm hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] border border-white flex flex-col border-t-4 border-t-[#0033e7]"
                        >
                            <div className="p-8 flex-1 flex flex-col relative z-20">
                                <h3 className="text-xl font-extrabold mb-4 pb-4 border-b border-gray-200 min-h-[60px] flex items-center text-gray-900 tracking-tight leading-[1.3]">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-gray-600 mb-8 flex-grow font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[1.1rem] text-gray-600 leading-relaxed font-bold tracking-tight">
                        No hidden fees. No surprise lock-in clauses. Just straightforward pricing that scales with your practice.
                    </p>
                    <div className="mt-8">
                        <Link 
                            href="/contact-us" 
                            className="inline-block px-10 bg-[#0033e7] hover:bg-blue-800 text-white transform hover:-translate-y-1 transition-all duration-300 font-bold uppercase text-xs tracking-[2px] py-4 rounded-xl shadow-md hover:shadow-lg no-underline"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
