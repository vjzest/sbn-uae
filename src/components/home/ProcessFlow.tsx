'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/home';

// Fade-up style identical to AOS / Hero section
const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ProcessFlow = () => {
    return (
        <section className="bg-[#050505] py-24 md:py-32 overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-[#0033e7]/10 border border-[#0033e7]/30 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full"
                    >
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Our Process
                    </motion.div>
                    
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-8"
                    >
                        Seamless Integration. <br className="hidden md:block" /> Maximum Revenue Yield.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {processSteps.map((step, index) => {
                        // 1-based index for image matching (feature1, feature2, feature3)
                        const imgIndex = index + 1;

                        return (
                            <motion.div
                                key={index}
                                className="group relative bg-[#0d0d0d] border border-white/10 rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] hover:-translate-y-2 hover:border-[#0033e7]/30 flex flex-col items-start text-left"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.15 } }
                                } as any}
                            >
                                {/* Colorful Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    style={{ backgroundImage: `url('/Phase%20${imgIndex}.png?v=6')` }}
                                ></div>
                                {/* Smooth Gradient to protect text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-[#0d0d0d]/20 to-transparent pointer-events-none transition-colors duration-500"></div>

                                {/* Content */}
                                <div className="relative z-20 flex flex-col h-full justify-end pt-32 w-full">
                                    <div className="mb-6 w-12 h-1 bg-[#0033e7] rounded-full transition-all duration-500 group-hover:w-24"></div>
                                    <span className="text-[#0033e7] text-[11px] font-black tracking-[3px] uppercase mb-4 block">
                                        Phase 0{imgIndex}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl text-white mb-4 font-black uppercase tracking-tight leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* Subtle glow behind the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0033e7]/10 rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
};

export default ProcessFlow;
