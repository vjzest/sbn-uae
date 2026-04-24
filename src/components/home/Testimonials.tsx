'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    practice: string;
    metric: string;
    metricLabel: string;
    quote: string;
    avatar: string;
    videoUrl: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        title: "Medical Director",
        practice: "Mitchell Family Practice",
        metric: "35%",
        metricLabel: "Reduction in A/R Days",
        quote: "SBN Healthcare transformed our revenue cycle. We saw an immediate impact on our cash flow within the first 90 days. Their automated scrubbing is a game changer.",
        avatar: "/img/avatar1.webp",
        videoUrl: "/img/v2.mp4"
    },
    {
        id: 2,
        name: "James Wilson",
        title: "Practice Administrator",
        practice: "Oakwood Orthopedics",
        metric: "98%",
        metricLabel: "First-Pass Acceptance",
        quote: "The level of transparency SBN provides is unmatched. We finally feel like we have a partner who is as invested in our financial success as we are.",
        avatar: "/img/avatar2.webp",
        videoUrl: "/img/v3.mp4"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        title: "Operations Manager",
        practice: "Sunshine Pediatrics",
        metric: "$1.2M+",
        metricLabel: "Revenue Recovered",
        quote: "Processing denials used to be a nightmare. With SBN, it's seamless. Our staff can finally focus on patient care instead of fighting with payers.",
        avatar: "/img/avatar3.webp",
        videoUrl: "/img/v4.mp4"
    },
    {
        id: 4,
        name: "Dr. Michael Chen",
        title: "Chief Financial Officer",
        practice: "Harmony Health Group",
        metric: "42%",
        metricLabel: "Denial Rate Reduced",
        quote: "Switching to SBN was the best operational decision we made. Their proactive denial management and real-time reporting give us full visibility into our finances.",
        avatar: "/img/avatar4.webp",
        videoUrl: "/img/v5.mp4"
    }
];

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll by 80% of visible width
            const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            className="py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden relative border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            Proof of Success
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2]"
                        >
                            Trusted by High-Performance Practices
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center text-gray-400 hover:text-[#0033e7] hover:bg-white hover:shadow-lg transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center text-gray-400 hover:text-[#0033e7] hover:bg-white hover:shadow-lg transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Manual Slider Wrapper */}
            <div className="relative w-full overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="snap-start px-2 md:px-4 lg:px-5 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 flex"
                            onClick={() => setSelectedVideo(item.videoUrl)}
                        >
                            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] transition-all duration-500 flex flex-col cursor-pointer group overflow-hidden w-full h-full min-h-[450px]">
                                {/* Video Header */}
                                <div className="relative aspect-video w-full bg-black overflow-hidden group">
                                    <video
                                        src={item.videoUrl}
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-[#0033e7] group-hover:border-transparent transition-all duration-300">
                                            <FaPlay className="text-white text-xl ml-1" />
                                        </div>
                                    </div>

                                    {/* Floating Metric */}
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-white font-black text-3xl m-0 tracking-tighter block drop-shadow-md">
                                            {item.metric}
                                        </span>
                                        <span className="text-white/80 text-[9px] font-extrabold uppercase tracking-[2px]">
                                            {item.metricLabel}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 pt-6 flex flex-col flex-grow">
                                    <div className="relative mb-6 flex-grow min-h-[100px]">
                                        <FaQuoteLeft className="text-[#0033e7] opacity-10 text-4xl absolute -top-2 -left-2" />
                                        <p className="text-[17px] leading-relaxed text-gray-600 font-medium italic relative z-10 px-4">
                                            "{item.quote}"
                                        </p>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0033e7] font-black text-sm border border-blue-100 shrink-0">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 tracking-tight text-base">{item.name}</h4>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mt-0.5">
                                                {item.title} <span className="mx-1 text-gray-300">|</span> {item.practice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-md"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 hover:text-[#0033e7] backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
                                onClick={() => setSelectedVideo(null)}
                            >
                                <FaTimes size={18} />
                            </button>
                            <video
                                src={selectedVideo}
                                autoPlay
                                controls
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
