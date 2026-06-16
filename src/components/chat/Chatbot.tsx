'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaBolt } from 'react-icons/fa';
import axios from 'axios';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();
        setMessage('');
        setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ai/chat`, {
                message: userMessage,
                history: chatHistory.map(m => ({
                    role: m.role,
                    parts: [{ text: m.text }]
                }))
            });

            if (response.data.success) {
                setChatHistory(prev => [...prev, { role: 'model', text: response.data.data }]);
            }
        } catch (error) {
            setChatHistory(prev => [...prev, { role: 'model', text: "I'm experiencing a temporary connectivity anomaly. Please try again or contact our team directly." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#0B1F33] text-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,51,231,0.2)] flex items-center justify-center border border-white/10 backdrop-blur-md relative group transition-all"
            >
                {isOpen ? <FaTimes size={24} /> : (
                    <div className="flex items-center gap-3">
                        <FaRobot size={26} className="text-[#60a5fa] group-hover:text-white transition-colors" />
                        <span className="text-[11px] font-black uppercase tracking-[3px] pr-2 hidden md:block">{language === 'ar' ? 'مساعد الذكاء الاصطناعي' : 'AI Assistant'}</span>
                    </div>
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0033e7] rounded-full animate-pulse border-2 border-[#0B1F33]"></span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="absolute bottom-24 right-0 w-[calc(100vw-3rem)] md:w-[420px] max-h-[calc(100vh-160px)] h-[600px] bg-[#f8faff]/95 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#0B1F33] p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0033e7]/30 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                                    <FaRobot size={24} className="text-[#60a5fa]" />
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-extrabold tracking-tight leading-tight text-white">SBN Intelligence Core</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[2px]">{language === 'ar' ? 'الأنظمة متصلة' : 'Systems Online'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-transparent flex flex-col gap-6 scroll-smooth">
                            {chatHistory.length === 0 && (
                                <div className="text-center mt-8 bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm">
                                    <div className="w-16 h-16 bg-[#0033e7]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#0033e7]/20">
                                        <FaBolt size={24} className="text-[#0033e7]" />
                                    </div>
                                    <p className="text-slate-900 font-extrabold text-[17px] mb-2 tracking-tight">Enterprise RCM AI</p>
                                    <p className="text-slate-600 text-[14px] font-medium leading-[1.7]">
                                        {language === 'ar' ? 'كيف يمكنني مساعدة عيادتك في إدارة دورة الإيرادات عالية الأوكتان اليوم؟' : 'How can I assist your practice with high-octane revenue cycle management today?'}
                                    </p>
                                </div>
                            )}
                            {chatHistory.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] font-medium leading-[1.7] shadow-sm transition-all whitespace-pre-wrap ${m.role === 'user'
                                        ? 'bg-[#0033e7] text-white rounded-tr-none shadow-[0_10px_20px_rgba(0,51,231,0.2)]'
                                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-3 bg-white w-fit p-3.5 rounded-2xl border border-slate-100 shadow-sm rounded-tl-none">
                                    <div className="flex gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-[#0033e7] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-[#0033e7] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-[#0033e7] rounded-full animate-bounce"></span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">{language === 'ar' ? 'جاري المعالجة' : 'Processing'}</span>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-5 bg-white border-t border-slate-100">
                            <form onSubmit={handleSendMessage} className="flex gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200 focus-within:border-[#0033e7]/50 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(0,51,231,0.05)] transition-all">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={language === 'ar' ? 'اكتب استفسارك...' : 'Type your inquiry...'}
                                    className={`flex-grow px-3 py-2 bg-transparent text-[14px] focus:outline-none font-medium text-slate-800 placeholder:text-slate-400 ${language === 'ar' ? 'text-right' : ''}`}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !message.trim()}
                                    className="bg-[#0033e7] text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-800 transition-all shadow-sm disabled:opacity-30 disabled:grayscale disabled:hover:bg-[#0033e7]"
                                >
                                    <FaPaperPlane size={14} className="ml-0.5" />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-[2px] mt-4 flex items-center justify-center gap-1.5">
                                <FaBolt className="text-[#0033e7]/50" /> {language === 'ar' ? 'بيئة متوافقة مع HIPAA' : 'HIPAA Compliant Environment'}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
