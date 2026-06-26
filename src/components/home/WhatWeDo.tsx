'use client';

import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
    const services = [
        {
            title: "Revenue Cycle Management Services",
            description: "We oversee every phase: patient registration, insurance verification, charge entry, claim submission, payment posting, and reporting."
        },
        {
            title: "Medical Billing Services",
            description: "All claims are submitted within 48 hours of charge receipt. Every claim goes through thorough scrubbing before submission to ensure a high first-pass acceptance rate and faster reimbursements."
        },
        {
            title: "Medical Coding Services",
            description: "Our certified coders apply the most accurate ICD-10, CPT, and HCPCS codes to every claim. Proper coding means fewer denials, better compliance, and maximum reimbursement."
        },
        {
            title: "AR Follow-Up Services",
            description: "Unpaid claims don’t just sit in a queue. Our AR specialists actively track, follow up, and appeal every outstanding claim — keeping your cash flow steady."
        },
        {
            title: "Specialty-Specific Billing",
            description: "Whether you’re in behavioral health, DME, orthopedics, urgent care, telehealth, or running a multi-specialty hospital, our team knows your specialty’s payer rules and compliance requirements."
        }
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-slate-100 bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        What We Do
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Revenue Cycle Solutions for Urgent Care Growth
                    </h2>

                    <p className="text-gray-600 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed font-medium">
                        Specialized solutions designed to improve reimbursement performance, strengthen operational efficiency, and support long-term growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-slate-50/50 rounded-2xl shadow-sm hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-100 flex flex-col h-full p-8"
                        >
                            <h3 className="text-xl mb-4 font-extrabold text-gray-900 group-hover:text-[#0033e7] transition-colors duration-300 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                <Link href="/services" className="text-[#0033e7] font-bold text-xs uppercase tracking-[2px] flex items-center group/link no-underline">
                                    Explore Service
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
