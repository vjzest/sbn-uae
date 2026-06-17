'use client';

import React from 'react';

const ProcessFlow = () => {
    const culprits = [
        { title: "Missed claim deadlines" },
        { title: "Incorrect codes" },
        { title: "Denied claims with no follow-up" },
        { title: "Eligibility errors caught too late" }
    ];

    return (
        <section className="bg-slate-50/50 py-24 md:py-32 overflow-hidden relative border-t border-slate-100">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        The Problem We Solve
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Is Your Practice Losing Revenue Without Even Knowing It?
                    </h2>
                    <p className="text-gray-600 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        Many healthcare providers are leaving thousands of dollars on the table every month — not because of poor care, but because of billing gaps that quietly drain their revenue.
                    </p>
                    <p className="text-gray-900 text-lg font-bold mb-8">
                        The culprits are often invisible until it’s too late:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
                    {culprits.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-100 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] hover:-translate-y-2 hover:border-[#0033e7]/30 flex flex-col items-center text-center shadow-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white to-transparent pointer-events-none transition-colors duration-500"></div>
                            <div className="relative z-20 flex flex-col h-full justify-center w-full">
                                <h3 className="text-xl text-gray-900 font-extrabold leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-600 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed font-medium">
                        These are not small problems. They add up fast. That’s where SBN comes in. <br/><br/>
                        <span className="text-gray-900 font-bold">Our fully outsourced billing services are designed to close every one of those gaps</span> — from the moment a patient books an appointment to the day the payment hits your account. No leakage. No guesswork. No surprises.
                    </p>
                </div>
            </div>

            {/* Subtle glow behind the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
};

export default ProcessFlow;
