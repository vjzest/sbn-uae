'use client';

import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { statsData } from '@/data/home';

// Fade-up style identical to AOS / Hero section
const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Counter = ({ value }: { value: string }) => {
    const nodeRef = React.useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    // Parse number and suffix
    const numericMatch = value.match(/\d+/);
    const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
    const suffix = value.replace(numericValue.toString(), '');

    React.useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = `${Math.floor(value)}${suffix}`;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, numericValue, suffix]);

    return (
        <span 
            ref={nodeRef}
            className="text-4xl md:text-5xl font-extrabold mb-2 text-[#0033e7] leading-none"
        >
            0{suffix}
        </span>
    );
};

const Stats = () => {
    const statContext: Record<string, string> = {
        "Revenue Improved": "Average lift for our client network",
        "Costs Reduced": "Operational savings via automation",
        "Patient Experience Transformed": "Patient satisfaction score increase",
        "Years of Experience": "Dedicated healthcare expertise",
        "Millions Processed": "Annually managed revenue volume",
        "Clean Claims Ratio": "First-pass acceptance standard"
    };

    return (
        <section 
            className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient identical to Hero section to maintain high readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Network Performance
                    </motion.div>
                    
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8"
                    >
                        Data-driven outcomes that <br className="hidden md:block" /> define industry leadership.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-white transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] hover:-translate-y-2 overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 } }
                            } as any}
                        >
                            {/* Decorative Corner Element updated to primary color */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/5 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-[1.8] duration-700"></div>

                            <div className="relative z-10">
                                <div className="mb-0 flex items-baseline gap-1">
                                    <Counter value={stat.value} />
                                </div>
                                <h3 className="text-[11px] font-black text-gray-900 mb-4 uppercase tracking-[2px] mt-6">
                                    {stat.label}
                                </h3>
                                <div className="w-8 h-1 bg-[#0033e7] mb-6 rounded-full transition-all group-hover:w-16 duration-500 opacity-80"></div>
                                <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                                    {statContext[stat.label] || "Accelerated financial results through intelligent automation."}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
