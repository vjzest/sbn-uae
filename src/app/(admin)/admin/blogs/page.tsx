'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '@/store/slices/blogSlice';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaImage, FaHashtag, FaNewspaper, FaClock, FaSearch, FaShareAlt } from 'react-icons/fa';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => 
    // @ts-ignore
    import('react-quill-new').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-[200px] w-full bg-slate-50 animate-pulse rounded-2xl flex items-center justify-center text-slate-400 font-black uppercase tracking-[3px] text-[10px]">Loading Editor...</div>
}) as any;
// @ts-ignore
import 'react-quill-new/dist/quill.snow.css';

export default function BlogManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);
    const [activeEditTab, setActiveEditTab] = useState('content');
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: '',
        image: '/img/bg1.webp',
        imageAlt: '',
        readTime: '5 Min Read',
        metaTitle: '',
        metaDescription: '',
        focusKeywords: [] as string[],
        canonicalUrl: '',
        robotsIndex: true,
        robotsFollow: true,
        ogTitle: '',
        ogDescription: '',
        ogImage: '',
        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
        twitterImage: '',
        schemaType: 'BlogPosting' as 'Article' | 'BlogPosting' | 'FAQ' | 'HowTo' | 'None',
        author: {
            name: 'SBN Healthcare Team',
            bio: '',
            image: ''
        },
        isPublished: true
    });

    const quillModules = useMemo(() => ({
        toolbar: [
            [{ 'header': [1, 2, 3, false] }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
        ],
    }), []);

    const resetForm = () => {
        setFormData({
            _id: '',
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            category: '',
            image: '/img/bg1.webp',
            imageAlt: '',
            readTime: '5 Min Read',
            metaTitle: '',
            metaDescription: '',
            focusKeywords: [],
            canonicalUrl: '',
            robotsIndex: true,
            robotsFollow: true,
            ogTitle: '',
            ogDescription: '',
            ogImage: '',
            twitterCard: 'summary_large_image',
            twitterTitle: '',
            twitterDescription: '',
            twitterImage: '',
            schemaType: 'BlogPosting',
            author: { name: 'SBN Healthcare Team', bio: '', image: '' },
            isPublished: true,
        });
        setIsEditing(false);
        setActiveEditTab('content');
    };

    const [seoScore, setSeoScore] = useState(0);
    const [isAiGenerating, setIsAiGenerating] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formDataUpload = new FormData();
        formDataUpload.append('image', file);

        setIsUploading(true);
        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formDataUpload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            setFormData(prev => ({ ...prev, image: res.data.url }));
            showStatus('success', 'Image uploaded successfully!');
        } catch (err: any) {
            showStatus('error', err.response?.data?.message || 'Upload failed');
        } finally {
            setIsUploading(false);
        }
    };

    const generateAiSeo = async () => {
        if (!formData.content) return showStatus('error', 'Add content first');
        setIsAiGenerating(true);
        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ai/generate-seo`,
                { title: formData.title, content: formData.content },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const suggestions = res.data.data;
            setFormData({
                ...formData,
                metaTitle: suggestions.metaTitle,
                metaDescription: suggestions.metaDescription,
                focusKeywords: suggestions.keywords,
                slug: formData._id ? formData.slug : (suggestions.slug || formData.slug)
            });
            showStatus('success', 'AI Suggestions Applied!');
        } catch (err) {
            showStatus('error', 'AI Assistant is currently busy');
        } finally {
            setIsAiGenerating(false);
        }
    };

    const calculateSeoScore = () => {
        let score = 0;
        const content = formData.content.toLowerCase();
        const title = formData.title.toLowerCase();
        const primaryKeyword = formData.focusKeywords[0]?.toLowerCase();

        if (formData.title.length > 50 && formData.title.length < 70) score += 10;
        if (primaryKeyword && title.includes(primaryKeyword)) score += 10;
        if (formData.metaDescription.length > 120 && formData.metaDescription.length < 160) score += 10;
        if (primaryKeyword && formData.metaDescription.toLowerCase().includes(primaryKeyword)) score += 10;
        if (formData.content.length > 1500) score += 15;
        else if (formData.content.length > 800) score += 10;
        if (formData.content.includes('<h1') || formData.content.includes('<h2')) score += 15;
        if (formData.imageAlt) score += 10;
        if (formData.focusKeywords.length >= 3) score += 10;
        if (content.includes('href=') || content.includes('/blog/')) score += 10;

        setSeoScore(score);
    };

    useEffect(() => {
        calculateSeoScore();
    }, [formData.title, formData.metaDescription, formData.content, formData.focusKeywords, formData.imageAlt]);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const showStatus = (type: string, message: string) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData._id) {
                await dispatch(updateBlog({ id: formData._id, data: formData })).unwrap();
                showStatus('success', 'Blog updated successfully!');
            } else {
                const { _id, ...newData } = formData;
                await dispatch(createBlog(newData)).unwrap();
                showStatus('success', 'Blog created successfully!');
            }
            resetForm();
        } catch (err: any) {
            const errorMessage = typeof err === 'string' ? err : (err.message || err.error || 'Something went wrong');
            showStatus('error', errorMessage);
        }
    };

    const handleEdit = (blog: any) => {
        setFormData({ ...blog, slug: blog.slug || blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') });
        setIsEditing(true);
        setActiveEditTab('content');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await dispatch(deleteBlog(id)).unwrap();
            showStatus('success', 'Blog deleted successfully!');
        } catch (err: any) {
            showStatus('error', err || 'Failed to delete blog');
        }
    };

    if (loading && blogs.length === 0) return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-[var(--primary-color)]"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Mapping Feed Data...</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Custom Quill Styles */}
            <style jsx global>{`
                .ql-editor { 
                    min-height: 400px; 
                    font-size: 16px; 
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                }
                .ql-editor * {
                    word-break: normal !important;
                }
                .ql-container.ql-snow { border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem; border: 1px solid #e2e8f0 !important; }
                .ql-toolbar.ql-snow { border-top-left-radius: 1rem; border-top-right-radius: 1rem; border: 1px solid #e2e8f0 !important; background: #f8fafc; margin-top: 10px; }
            `}</style>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 rounded-xl mb-4">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">System Online</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">Blog Management</h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">Create and manage your healthcare articles</p>
                </div>
                {!isEditing && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setIsEditing(true)}
                        className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl hover:bg-[var(--primary-color)] transition-all group"
                    >
                        <FaPlus className="text-sm group-hover:rotate-90 transition-transform duration-500" />
                        <span className="text-xs uppercase tracking-[2px]">Add New Blog</span>
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`fixed bottom-10 right-10 z-[100] px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md ${status.type === 'success' ? 'bg-emerald-500/90' : 'bg-red-500/90'}`}
                    >
                        {status.type === 'success' ? <FaCheck /> : <FaTimes />}
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200"
                    >
                        <div className="h-2 w-full bg-gradient-to-r from-[var(--primary-color)] via-indigo-500 to-[var(--primary-color)]" />
                        <div className="p-8 lg:p-12">
                            <div className="flex flex-wrap items-center gap-6 mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[var(--primary-color)] border border-slate-100 shadow-sm">
                                        <FaNewspaper size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                            {formData._id ? 'Edit Blog Post' : 'New Publication'}
                                        </h2>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[2px] mt-2">Publish high-octane RCM content</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-50 rounded-2xl border border-slate-100 ml-auto">
                                    <div className="flex flex-col items-end">
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">SEO Health</span>
                                        <span className={`text-xs font-black uppercase tracking-widest leading-none ${seoScore > 70 ? 'text-emerald-500' : seoScore > 40 ? 'text-amber-500' : 'text-red-500'}`}>{seoScore}% Optimized</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center relative overflow-hidden bg-white">
                                        <motion.div initial={{ height: 0 }} animate={{ height: `${seoScore}%` }} className={`absolute bottom-0 left-0 right-0 ${seoScore > 70 ? 'bg-emerald-500' : seoScore > 40 ? 'bg-amber-500' : 'bg-red-500'} opacity-20`} />
                                        <span className="text-[10px] font-black">{seoScore}</span>
                                    </div>
                                </div>

                                <button onClick={() => setIsEditing(false)} className="w-12 h-12 rounded-2xl bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center border border-slate-100">
                                    <FaTimes size={18} />
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-100 pb-2">
                                {[
                                    { id: 'content', label: 'Primary Content' },
                                    { id: 'seo', label: 'Search Optimization' },
                                    { id: 'social', label: 'Social Graph' },
                                    { id: 'author', label: 'Author & Status' }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveEditTab(tab.id)}
                                        className={`px-6 py-3 rounded-t-xl text-[10px] font-black uppercase tracking-widest transition-all relative ${activeEditTab === tab.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        {tab.label}
                                        {activeEditTab === tab.id && <motion.div layoutId="blogEditTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-color)]" />}
                                    </button>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <AnimatePresence mode="wait">
                                    {activeEditTab === 'content' && (
                                        <motion.div key="content" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-6">
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Blog Title (H1 Display)</label>
                                                        <input
                                                            className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                                            placeholder="Healthcare Transformation 2022"
                                                            value={formData.title}
                                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex justify-between items-center">
                                                            URL Slug
                                                            <span className="text-[8px] text-slate-400 normal-case tracking-normal font-bold">(e.g. why-medical-billing)</span>
                                                        </label>
                                                        <input
                                                            className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                                            placeholder="my-seo-friendly-url"
                                                            value={formData.slug}
                                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Category</label>
                                                        <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800" placeholder="Diagnostics" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Read Time</label>
                                                        <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800" placeholder="5 Minutes" value={formData.readTime} onChange={(e) => setFormData({ ...formData, readTime: e.target.value })} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Featured Image</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                            className="hidden"
                                                            id="blog-image-upload"
                                                        />
                                                        <label
                                                            htmlFor="blog-image-upload"
                                                            className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-slate-100 hover:border-[var(--primary-color)] transition-all cursor-pointer overflow-hidden group/label"
                                                        >
                                                            {isUploading ? (
                                                                <div className="flex flex-col items-center gap-3">
                                                                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-[var(--primary-color)]"></div>
                                                                    <span className="text-[9px] font-black uppercase tracking-[2px] text-slate-400">Uploading to Cloud...</span>
                                                                </div>
                                                            ) : formData.image ? (
                                                                <div className="relative w-full h-full">
                                                                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover/label:scale-105" />
                                                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/label:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                                                                        <div className="flex flex-col items-center gap-2">
                                                                            <FaImage className="text-white text-xl" />
                                                                            <span className="text-[8px] font-black uppercase tracking-widest text-white">Change Image</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="flex flex-col items-center gap-4 p-6">
                                                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-300 group-hover/label:text-[var(--primary-color)] group-hover/label:scale-110 transition-all">
                                                                        <FaImage size={24} />
                                                                    </div>
                                                                    <div className="flex flex-col items-center text-center">
                                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Upload Media Asset</span>
                                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-1.5 leading-relaxed">High Resolution webp, webp, WEBP<br />Optimized for web performance</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Image Alt Text (SEO)</label>
                                                    <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800" placeholder="Medical billing dashboard illustration" value={formData.imageAlt} onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })} />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Short Excerpt</label>
                                                <textarea className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800 resize-none" rows={2} placeholder="Brief summary for indexing..." value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} required />
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Full Content</label>
                                                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 min-h-[500px]">
                                                    <ReactQuill theme="snow" value={formData.content} onChange={(content: string) => setFormData({ ...formData, content })} modules={quillModules} placeholder="Start writing the blog content here..." />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeEditTab === 'seo' && (
                                        <motion.div key="seo" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-12">
                                            <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <div>
                                                    <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-900">AI SEO Assistant</h4>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[2px] mt-1">Generate meta tags automatically using Gemini Intelligence</p>
                                                </div>
                                                <button type="button" onClick={generateAiSeo} disabled={isAiGenerating} className="bg-slate-900 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[2px] hover:bg-[var(--primary-color)] transition-all disabled:opacity-50 flex items-center gap-3">
                                                    {isAiGenerating ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <FaSearch />}
                                                    {isAiGenerating ? 'Analyzing...' : 'Generate AI Meta'}
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex justify-between">Meta Title (Search Engine Title) <span>{formData.metaTitle.length}/60</span></label>
                                                    <input className={`w-full px-7 py-4 rounded-xl bg-slate-50 border transition-all font-bold text-slate-800 ${formData.metaTitle.length > 60 ? 'border-amber-400' : 'border-slate-200'}`} placeholder="Custom SEO Title" value={formData.metaTitle} onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })} />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Focus Keywords</label>
                                                    <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 transition-all font-bold text-slate-800" placeholder="RCM, medical billing, NY hospitals" value={formData.focusKeywords.join(', ')} onChange={(e) => setFormData({ ...formData, focusKeywords: e.target.value.split(',').map(k => k.trim()) })} />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex justify-between">Meta Description <span>{formData.metaDescription.length}/160</span></label>
                                                <textarea className={`w-full px-7 py-4 rounded-2xl bg-slate-50 border transition-all font-bold text-slate-800 resize-none ${formData.metaDescription.length > 160 ? 'border-amber-400' : 'border-slate-200'}`} rows={4} placeholder="SEO Meta Description for search results..." value={formData.metaDescription} onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeEditTab === 'social' && (
                                        <motion.div key="social" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-12">
                                            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
                                                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-slate-400 mb-8 flex items-center gap-3">
                                                    <FaShareAlt className="text-[var(--primary-color)]" /> Social Media Graph & Preview
                                                </h4>
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                    <div className="space-y-6">
                                                        <div className="space-y-3">
                                                            <label className="text-[9px] font-black uppercase text-slate-400 tracking-[2px]">OG Title</label>
                                                            <input className="w-full px-7 py-4 rounded-xl bg-white border border-slate-200 font-bold text-slate-800" value={formData.ogTitle} onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value, twitterTitle: e.target.value })} placeholder="Custom Social Title" />
                                                        </div>
                                                        <div className="space-y-3">
                                                            <label className="text-[9px] font-black uppercase text-slate-400 tracking-[2px]">OG Description</label>
                                                            <textarea className="w-full px-7 py-4 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 resize-none" rows={3} value={formData.ogDescription} onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value, twitterDescription: e.target.value })} placeholder="Short social summary..." />
                                                        </div>
                                                        
                                                        <div className="space-y-3">
                                                            <label className="text-[9px] font-black uppercase text-slate-400 tracking-[2px]">Social Image (OG/Twitter)</label>
                                                            <div className="flex flex-col gap-3">
                                                                <div className="flex gap-3">
                                                                    <input className="flex-1 px-7 py-4 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 text-[10px]" value={formData.ogImage} onChange={(e) => setFormData({ ...formData, ogImage: e.target.value, twitterImage: e.target.value })} placeholder="https://..." />
                                                                    <button type="button" onClick={() => setFormData({ ...formData, ogImage: formData.image, twitterImage: formData.image })} className="px-5 rounded-xl bg-white border border-slate-200 text-slate-600 text-[9px] font-black uppercase tracking-widest hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all">
                                                                        Sync Main
                                                                    </button>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    id="social-image-upload"
                                                                    className="hidden"
                                                                    accept="image/*"
                                                                    onChange={async (e) => {
                                                                        const file = e.target.files?.[0];
                                                                        if (!file) return;

                                                                        const formDataUpload = new FormData();
                                                                        formDataUpload.append('image', file);
                                                                        setIsUploading(true);
                                                                        try {
                                                                            const token = localStorage.getItem('adminToken');
                                                                            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formDataUpload, {
                                                                                headers: {
                                                                                    'Content-Type': 'multipart/form-data',
                                                                                    Authorization: `Bearer ${token}`
                                                                                }
                                                                            });
                                                                            setFormData(prev => ({ ...prev, ogImage: res.data.url, twitterImage: res.data.url }));
                                                                            showStatus('success', 'Social image uploaded!');
                                                                        } catch (err: any) {
                                                                            showStatus('error', err.response?.data?.message || 'Social upload failed');
                                                                        } finally {
                                                                            setIsUploading(false);
                                                                        }
                                                                    }}
                                                                />
                                                                <label
                                                                    htmlFor="social-image-upload"
                                                                    className="w-full py-4 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-[var(--primary-color)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                                                                >
                                                                    {isUploading ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <FaImage />}
                                                                    Upload Social Banner
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-6">
                                                        <div className="w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                                                            <div className="w-full aspect-[1.91/1] relative bg-slate-50 overflow-hidden">
                                                                {formData.ogImage ? (
                                                                    <img src={formData.ogImage} className="w-full h-full object-cover" alt="OG Preview" />
                                                                ) : (
                                                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                                                                        <FaImage size={40} className="mb-4 opacity-10" />
                                                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-30">OG Preview</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="p-5 bg-slate-50 border-t border-slate-100">
                                                                <div className="text-slate-900 text-[13px] font-black truncate mb-1">{formData.ogTitle || formData.title || 'Preview Title'}</div>
                                                                <div className="text-slate-500 text-[10px] line-clamp-1 font-bold">{formData.ogDescription || formData.excerpt || 'Short preview description will appear here...'}</div>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl">
                                                                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center border border-blue-100 shrink-0">
                                                                    <FaShareAlt />
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <h5 className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">X Card</h5>
                                                                    <select className="bg-transparent text-[10px] font-black text-slate-900 border-none p-0 focus:ring-0 w-full cursor-pointer uppercase" value={formData.twitterCard} onChange={(e: any) => setFormData({ ...formData, twitterCard: e.target.value })}>
                                                                        <option value="summary_large_image">Large</option>
                                                                        <option value="summary">Standard</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-4 p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                                                                <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                                                                    <FaCheck />
                                                                </div>
                                                                <div>
                                                                    <h5 className="text-[8px] font-black text-emerald-600 uppercase tracking-widest leading-none mb-1">Status</h5>
                                                                    <span className="text-[10px] font-black text-emerald-600 uppercase">Ready</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeEditTab === 'author' && (
                                        <motion.div key="author" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-12">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800" value={formData.author.name} onChange={(e) => setFormData({ ...formData, author: { ...formData.author, name: e.target.value } })} placeholder="Author Name" />
                                                <input className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800" value={formData.author.image} onChange={(e) => setFormData({ ...formData, author: { ...formData.author, image: e.target.value } })} placeholder="Author Image URL" />
                                            </div>
                                            <div className="p-8 bg-slate-900 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                                                <div className="flex bg-white/10 p-2 rounded-2xl border border-white/10 shrink-0">
                                                    <button type="button" onClick={() => setFormData({ ...formData, isPublished: true })} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.isPublished ? 'bg-emerald-500 text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}>Live</button>
                                                    <button type="button" onClick={() => setFormData({ ...formData, isPublished: false })} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${!formData.isPublished ? 'bg-amber-500 text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}>Draft</button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="flex flex-col md:flex-row gap-4 pt-6">
                                    <button type="submit" className="flex-1 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl hover:bg-[var(--primary-color)] transition-all uppercase tracking-[2px] text-xs">
                                        <FaCheck /> {formData._id ? 'Save Changes' : 'Create Blog'}
                                    </button>
                                    <button type="button" onClick={() => setIsEditing(false)} className="px-10 py-5 rounded-2xl bg-slate-100 text-slate-500 font-black hover:bg-slate-200 transition-all uppercase text-[10px] tracking-[3px]">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`space-y-10 ${isEditing ? 'opacity-20 pointer-events-none scale-[0.98] blur-sm' : 'animate-fadeIn transition-all duration-700'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog: any, index: number) => (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} key={blog._id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-56 overflow-hidden">
                                <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                                <div className="absolute top-5 left-5">
                                    <span className="bg-[var(--primary-color)]/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[2px] px-4 py-1.5 rounded-lg shadow-xl">{blog.category}</span>
                                </div>
                                <div className="absolute bottom-5 right-5 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <button onClick={() => handleEdit(blog)} className="w-12 h-12 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white shadow-2xl transition-all active:scale-95 text-xs"><FaEdit /></button>
                                    <button onClick={() => handleDelete(blog._id)} className="w-12 h-12 bg-white text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white shadow-2xl transition-all active:scale-95 text-xs"><FaTrash /></button>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{new Date(blog.date).toLocaleDateString()}</div>
                                    <div className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${blog.isPublished ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{blog.isPublished ? 'Live' : 'Draft'}</div>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 line-clamp-2">{blog.title}</h3>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed line-clamp-3 opacity-80">{blog.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
