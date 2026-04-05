'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const securityData = [
  {
    title: "Security Isn’t Added Later — It’s Built In",
    desc: "A lot of systems treat security like an extra layer. That’s usually where problems begin. At SBN Healthcare, compliance & security is already part of the system — from workflows to data handling.",
    points: [
      { t: "Built Into Every Step", p: "Security is part of the process, not an add-on" },
      { t: "Less Risk, More Control", p: "We reduce exposure wherever possible" },
      { t: "Clear Accountability", p: "Everyone knows what they can access and why" }
    ],
    footer: "Real compliance & security examples show that systems fail when security is treated as an afterthought."
  },
  {
    title: "Aligned with HIPAA and Industry Standards",
    desc: "We follow strict security compliance standards so patient data stays protected at every level.",
    points: [
      { t: "PHI Protection Across Workflows", p: "Data stays secure from start to finish" },
      { t: "Proper Safeguards in Place", p: "Both technical and administrative controls" },
      { t: "Secure Record Handling", p: "No unnecessary exposure" },
      { t: "Always Updated", p: "We stay aligned with changing regulations" }
    ],
    footer: "These are practical security compliance examples used in real healthcare systems."
  },
  {
    title: "Secure Cloud Infrastructure (No Loose Ends)",
    desc: "Everything runs in a controlled cloud setup — not open, not exposed.",
    points: [
      { t: "Restricted Access Only", p: "Not everyone gets in" },
      { t: "Separate Environments", p: "Workflows stay isolated and safe" },
      { t: "No Public Exposure", p: "Sensitive data isn’t visible outside" },
      { t: "Continuous Monitoring", p: "We keep an eye on everything" }
    ],
    footer: "A proper security compliance checklist always starts with infrastructure security."
  },
  {
    title: "Access Control That Actually Makes Sense",
    desc: "Not everyone should see everything — simple. We control access based on roles and responsibilities.",
    points: [
      { t: "Role-Based Access (RBAC)", p: "Access depends on your role" },
      { t: "Limited Visibility", p: "Only required data is visible" },
      { t: "Activity Monitoring", p: "We track usage and sessions" },
      { t: "Instant Access Removal", p: "No lingering permissions" }
    ],
    footer: "This is exactly what professionals in security compliance jobs deal with daily."
  },
  {
    title: "Safe Data Handling & Encryption",
    desc: "Data is protected whether it’s being used, stored, or transferred.",
    points: [
      { t: "Encrypted Data Transfer (TLS)", p: "No unsecured movement" },
      { t: "Protected Processing", p: "Everything happens in controlled environments" },
      { t: "No Unsecured Sharing", p: "Strict handling rules" },
      { t: "Structured Workflows", p: "Nothing random, everything defined" }
    ],
    footer: "These are core parts of any security compliance certification."
  },
  {
    title: "No Random Third-Party Access",
    desc: "We don’t allow unnecessary external access — that’s where most risks come from.",
    points: [
      { t: "No Open Data Sharing", p: "Data isn’t exposed to outside systems" },
      { t: "Controlled Integrations Only", p: "APIs are secure and limited" },
      { t: "Vendor Restrictions", p: "Third-party access is tightly controlled" },
      { t: "Need-Based Access Only", p: "No extra permissions" }
    ],
    footer: "Many real-world compliance & security examples fail exactly at this point."
  },
  {
    title: "Monitoring, Logging & Audit Readiness",
    desc: "If something happens, you should be able to track it — clearly.",
    points: [
      { t: "Activity Logs", p: "Everything is recorded" },
      { t: "Access Tracking", p: "Who accessed what and when" },
      { t: "Audit-Ready Data", p: "Prepared for reviews anytime" },
      { t: "Regular Checks", p: "We don’t just set it and forget it" }
    ],
    footer: "This level of tracking is expected in advanced security compliance certification setups."
  },
  {
    title: "Security Isn’t Just Tech — It’s Process Too",
    desc: "Even the best systems fail if processes aren’t strong. We focus on both.",
    points: [
      { t: "Structured Workflows", p: "No guesswork" },
      { t: "Controlled Environments", p: "Safe handling always" },
      { t: "Multi-Level Checks", p: "Errors are caught early" },
      { t: "Standard Processes", p: "Consistency matters" }
    ],
    footer: "This is where many security compliance jobs actually operate."
  },
  {
    title: "Risk Management (Before Problems Happen)",
    desc: "We focus on preventing issues, not just fixing them later.",
    points: [
      { t: "Less Manual Handling", p: "Fewer chances of error" },
      { t: "Controlled Exposure", p: "Data stays protected" },
      { t: "Continuous Monitoring", p: "Always watching for risks" },
      { t: "Ongoing Improvements", p: "System keeps getting better" }
    ],
    footer: "This is why roles linked to Security Compliance Officer salary are high — the responsibility is huge."
  }
];

const takeaways = [
  "Security should be built in, not added later",
  "Strong access control reduces risk",
  "Monitoring = audit readiness",
  "Process + technology = real security",
  "Better systems = safer operations"
];

const faqs = [
  { q: "What is compliance & security in healthcare?", a: "It means protecting patient data while following regulations like HIPAA." },
  { q: "What are security compliance standards?", a: "Rules that ensure systems and data remain secure." },
  { q: "What is included in a security compliance checklist?", a: "Access control, encryption, monitoring, audits, and risk management." },
  { q: "Are security compliance jobs growing?", a: "Yes, demand is increasing due to rising data security needs." },
  { q: "What is a Security Compliance Officer salary?", a: "It depends on experience but is generally high due to the role’s importance." }
];

export default function SecurityClient() {
    return (
        <main className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white">
            {/* Custom Premium Security Hero (Light Theme) */}
            <section className="bg-cover bg-center pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-[#f8faff]/90 pointer-events-none z-0"></div>
                {/* Security Glowing Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/20 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-multiply"></div>
                    {/* Minimal Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,231,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            HIPAA-Aligned | Secure Cloud Setup | Controlled Access
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Compliance & Security Services for Healthcare Systems
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            In healthcare, data security isn’t something you can take lightly. One small gap, and things can go wrong fast.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 lg:py-24 bg-cover bg-center relative border-b border-blue-50/50" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-[#f8faff]/90 pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="bg-white/80 backdrop-blur-xl border border-white p-10 md:p-16 rounded-2xl shadow-[0_20px_60px_rgba(0,51,231,0.06)] max-w-4xl mx-auto text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150 pointer-events-none"></div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-8 tracking-tight relative z-10">
                                Enterprise-Grade Security That Actually Protects Your Data
                            </h2>
                            <div className="mx-auto relative z-10 space-y-6 text-slate-700 text-lg font-medium">
                                <p>
                                    Our compliance & security system is built to keep patient data safe, control who accesses it, and make sure everything stays aligned with healthcare regulations.
                                </p>
                                <p>
                                    Whether you’re trying to understand security compliance standards or just want a safer system, this is where it starts.
                                </p>
                                <div className="mt-8">
                                    <Link href="/contact-us" className="inline-block bg-[#0033e7] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,51,231,0.3)]">
                                        Request Compliance Documentation
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Pillars Grid */}
                <section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                    <div className="absolute inset-0 bg-white/90 pointer-events-none z-0"></div>
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {securityData.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (idx % 3) * 0.1 } } } as any}
                                    className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,51,231,0.08)] flex flex-col h-full"
                                >
                                    <h3 className="text-[22px] font-black text-slate-900 mb-4 tracking-tight leading-[1.3] group-hover:text-[#0033e7] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium mb-6 text-[15px]">
                                        {item.desc}
                                    </p>
                                    <div className="space-y-4 mb-6 flex-grow">
                                        {item.points.map((point, pIdx) => (
                                            <div key={pIdx} className="flex gap-3">
                                                <div className="mt-1 flex-shrink-0 text-teal-500">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                                <div>
                                                    <strong className="block text-slate-800 text-[14px]">{point.t}</strong>
                                                    <span className="text-slate-500 text-[13px]">{point.p}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-5 border-t border-slate-100 text-[13px] text-slate-500 font-medium italic select-none">
                                        {item.footer}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sub-sections Bottom: Takeaways & FAQ */}
                <section className="py-20 lg:py-28 relative border-t border-blue-50/50 bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                    <div className="absolute inset-0 bg-[#f8faff]/85 backdrop-blur-sm pointer-events-none z-0"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            
                            {/* Quick Takeaways */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="bg-[#0033e7] rounded-3xl p-10 md:p-14 text-white shadow-[0_20px_50px_rgba(0,51,231,0.2)] relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none"></div>
                                    <h3 className="text-3xl font-black mb-8 relative z-10 tracking-tight text-white">Quick Takeaways</h3>
                                    <ul className="space-y-6 relative z-10">
                                        {takeaways.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-lg font-medium">
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* FAQs */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="h-full">
                                    <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h3>
                                    <div className="space-y-6">
                                        {faqs.map((faq, idx) => (
                                            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
                                                <h4 className="text-lg font-extrabold text-slate-900 mb-2">{faq.q}</h4>
                                                <p className="text-slate-600 font-medium">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pt-10 pb-20 relative bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                   <div className="absolute inset-0 bg-white/90 backdrop-blur-sm pointer-events-none z-0"></div>
                   <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-6">
                                Work With a Secure and Compliant Partner
                            </h2>
                            <p className="text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
                                If your system isn’t secure, it’s only a matter of time before issues show up. Let’s build something that actually protects your data and keeps you compliant.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-teal-500 text-white px-10 py-5 rounded-xl font-black uppercase tracking-[2px] transition-all hover:bg-teal-600 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,184,166,0.3)] shadow-xl">
                                Schedule a Compliance Review
                            </Link>
                        </motion.div>
                   </div>
                </section>
        </main>
    );
}
