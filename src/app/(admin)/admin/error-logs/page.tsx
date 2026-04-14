'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaExclamationTriangle, FaTrash, FaLink, FaGlobe, FaSearch, FaHistory } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ErrorLogs() {
    const [logs, setLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState({ type: '', message: '' });

    const fetchLogs = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/error-logs`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setLogs(res.data.data);
        } catch (err) {
            console.error('Error fetching logs:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    const clearLogs = async () => {
        if (!confirm('Clear all logs?')) return;
        try {
            const token = localStorage.getItem('adminToken');
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/error-logs`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setLogs([]);
            setStatus({ type: 'success', message: 'Logs cleared' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Failed to clear logs' });
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 rounded-xl mb-4">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Surveillance Active</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">404 Monitoring</h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">Track and resolve broken links in real-time</p>
                </div>
                <button 
                    onClick={clearLogs}
                    className="bg-white text-red-500 px-8 py-4 rounded-2xl font-black flex items-center gap-3 border border-slate-200 hover:bg-red-50 transition-all uppercase tracking-[2px] text-[10px]"
                >
                    <FaTrash size={12} /> Clear History
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-red-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {logs.length > 0 ? (
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[3px] text-slate-400">Timestamp</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[3px] text-slate-400">Broken URL</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[3px] text-slate-400">Referer</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[3px] text-slate-400">Visitor Info</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {logs.map((log) => (
                                        <tr key={log._id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><FaHistory size={12} /></div>
                                                    <span className="text-xs font-bold text-slate-600">{new Date(log.timestamp).toLocaleString()}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col max-w-md">
                                                    <span className="text-sm font-black text-slate-900 truncate">{log.url}</span>
                                                    <span className="text-[9px] font-black text-[var(--primary-color)] uppercase tracking-widest mt-1 flex items-center gap-2">
                                                        <FaLink /> HTTP 404
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-xs font-bold text-slate-400 truncate max-w-[200px] block italic">
                                                    {log.referer || 'Direct Access'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-slate-500">{log.ip}</span>
                                                    <span className="text-[9px] text-slate-300 font-medium truncate max-w-[150px]">{log.userAgent}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-40 bg-white rounded-[3rem] border border-slate-200 shadow-inner">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                                <FaGlobe className="text-emerald-300" size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Perfect Connectivity</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[3px] mt-4">No broken links detected in the last 100 requests</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
