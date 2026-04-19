'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  useEffect(() => {
    // Log 404 to the backend
    const logError = async () => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/error-logs/report`, {
          url: window.location.href,
          referer: document.referrer,
          userAgent: navigator.userAgent,
          statusCode: 404
        });
      } catch (err) {
        // Silent fail
      }
    };
    logError();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <span className="text-[120px] font-black text-slate-100 leading-none">404</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
            Page Not Found
          </h1>
          <p className="text-slate-500 font-bold mb-12 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-[#0033E7] text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[2px] text-xs hover:scale-105 transition-all shadow-xl shadow-[#0033E7]/20 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
