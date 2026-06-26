'use client';

import { FaUsers, FaCalendarAlt, FaShieldAlt, FaCode, FaRegClock, FaChartLine } from 'react-icons/fa';

const ProcessFlow = () => {
    const culprits = [
        { icon: FaUsers, title: "Eligibility & Coverage Errors", description: "Inaccurate eligibility leads to avoidable denials and delayed payments." },
        { icon: FaCalendarAlt, title: "Patient Registration Errors", description: "Small data entry mistakes cause big claim rejections later in the cycle." },
        { icon: FaShieldAlt, title: "Prior Authorization Delays", description: "Missing or delayed authorizations mean missed revenue." },
        { icon: FaCode, title: "Coding & Documentation Variations", description: "Variations in coding impact reimbursement and compliance." },
        { icon: FaRegClock, title: "Timely Filing Risks", description: "Deadlines are strict. Missed filings mean lost dollars." },
        { icon: FaChartLine, title: "Unresolved Denials & Aging AR", description: "Old AR grows quietly—while cash flow gets tighter." }
    ];

    return (
        <section className="bg-slate-50/50 py-24 md:py-32 overflow-hidden relative border-t border-slate-100">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        THE PROBLEM WE SOLVE
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Revenue Leakage Often Starts Before Billing
                    </h2>
                    <p className="text-gray-600 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        In urgent care, small breakdowns create big financial impact. Here are the most common places we see revenue slip away.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
                    {culprits.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-100 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] hover:-translate-y-2 hover:border-[#0033e7]/30 flex flex-col text-left shadow-sm items-start"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white to-transparent pointer-events-none transition-colors duration-500"></div>
                            <div className="relative z-20 flex flex-col h-full justify-start w-full">
                                <div className="w-12 h-12 bg-blue-50 text-[#0033e7] rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl text-gray-900 font-extrabold leading-tight tracking-tight mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle glow behind the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
};

export default ProcessFlow;
