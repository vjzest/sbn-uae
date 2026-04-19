'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log 5xx to the backend
    const logError = async () => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/error-logs/report`, {
          url: window.location.href,
          referer: document.referrer,
          userAgent: navigator.userAgent,
          statusCode: 500,
          errorMessage: error.message
        });
      } catch (err) {
        // Silent fail
      }
    };
    logError();
  }, [error]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <span className="text-[120px] font-black text-red-50 text-red-500/10 leading-none">500</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
            Something Went Wrong
          </h1>
          <p className="text-slate-500 font-bold mb-12 leading-relaxed">
            We encountered an unexpected error on our server. Our team has been notified 
            and we're working to fix it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto bg-slate-900 text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[2px] text-xs hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              Try Again
            </button>
            <a
              href="/"
              className="w-full sm:w-auto bg-slate-100 text-slate-900 font-black px-12 py-5 rounded-2xl uppercase tracking-[2px] text-xs hover:bg-slate-200 transition-all active:scale-95 text-center"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
