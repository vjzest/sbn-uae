
import {
    FaChartPie, FaFileInvoice, FaCoins, FaHandshake, FaChartLine,
    FaChartArea, FaBullhorn, FaList, FaLocationArrow, FaCheckCircle
} from 'react-icons/fa';

export interface ServiceSection {
    title?: string;
    subtitle?: string;
    stage?: string;
    description?: string;
    content?: string | string[]; // String or array of paragraphs
    image?: string;
    imagePosition?: 'left' | 'right';
    list?: string[];
    type?: 'standard' | 'cta' | 'problem-snapshot' | 'workflow' | 'kpi' | 'ai-indicator' | 'compliance-shield';
    data?: any; // For specialized component data
}

export interface ServiceFeature {
    title: string;
    icon: any;
    description?: string;
}

export interface Service {
    slug: string;
    title: string; // Navigation Menu Title
    bannerTitle: string;
    description: string;
    sections: ServiceSection[];
    features?: ServiceFeature[];
    featuresTitle?: string;
    featuresDescription?: string;
    showFeaturesTop?: boolean; // Some pages show features before intro
    metaTitle?: string;
    metaDescription?: string;
}

export const specialtiesList: Service[] = [
    {
        title: "Behavioral Health",
        slug: "behavioral-health",
        bannerTitle: "Specialized RCM for Behavior Health Services",
        description: "Improve behavior health billing with simple workflows. Reduce denials, manage authorizations, and get faster, more reliable payments.",
        metaTitle: "Behavior Health Billing for Faster Payments",
        metaDescription: "Improve behavior health billing with simple workflows. Reduce denials, manage authorizations, and get faster, more reliable payments.",
        sections: [
            {
                type: 'standard',
                content: "Behavior health services need extra care, not just in treatment but also in billing. The process is different from general healthcare. If billing is not handled properly, it can lead to delays, denials, and lost revenue."
            },
            {
                type: 'standard',
                content: "Many people still ask, what is behavior health? It includes mental and emotional health services such as therapy, counseling, and ongoing care. In high-demand areas like Mental Health New York, providers see many patients every day. This makes a fast and accurate billing system very important."
            },
            {
                type: 'standard',
                content: "Patients often search for behavior health near me when they need help. They also want to know how to find behavior health therapists covered by insurance near me. If your billing system is slow or confusing, it can affect both patient trust and your income."
            },
            {
                type: 'problem-snapshot',
                title: 'Challenges in Behavior Health Billing',
                description: "Behavior health billing has many moving parts that can lead to common problems:",
                data: [
                    { title: 'Session Billing', description: 'Repetitive session-based billing that requires constant accuracy.' },
                    { title: 'Strict Approvals', description: 'Rigorous insurance pre-approvals needed before treatment starts.' },
                    { title: 'Case Documentation', description: 'Sensitive and detailed documentation required for every encounter.' },
                    { title: 'Frequent Rejections', description: 'High claim rejection rates due to complex modifier and session rules.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple Billing Approach',
                subtitle: 'Strategic Clarity',
                description: "We make behavior health billing easy, clear, and reliable. Our system is built to reduce stress and save time.",
                data: [
                    { title: 'Verify', description: 'Check insurance and authorizations on time for every single session.' },
                    { title: 'Code', description: 'Use specialized codes for therapy sessions to ensure maximum coverage.' },
                    { title: 'Track', description: 'Actively track payer rules and updates to stay ahead of changes.' },
                    { title: 'Resolve', description: 'Fix denied claims quickly to maintain a steady and predictable income.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Get',
                subtitle: 'Practice Stability',
                data: [
                    { value: 'Fast', label: 'Paid Faster', description: 'Accelerating your reimbursement cycle through audit-ready claims.' },
                    { value: 'Clean', label: 'Compliance', description: 'Staying fully compliant with rules while reducing coding errors.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Stabilize Your Behavior Health Practice?",
                content: "A strong billing process helps your practice grow and keeps your revenue stable. Focus more on patient care while we handle the complexities of your behavior health RCM."
            }
        ]
    },
    {
        title: "DME / Orthopedics",
        slug: "dme-orthopedics",
        bannerTitle: "RCM Built for Orthopedic and DME Billing",
        description: "Improve orthopedic billing with accurate workflows. Reduce denials, manage authorizations, and speed up reimbursements for better cash flow.",
        metaTitle: "Orthopedic Billing Solutions for Faster Revenue",
        metaDescription: "Improve orthopedic billing with accurate workflows. Reduce denials, manage authorizations, and speed up reimbursements for better cash flow.",
        sections: [
            {
                type: 'standard',
                content: "Orthopedic services and Durable Medical Equipment (DME) billing can be complex. Every claim must meet strict rules. Even a small mistake can lead to delays or denials. Orthopedic care often includes surgeries, therapy, and equipment support. Patients searching for an Orthopedic surgeon or even the Best orthopedic in Jersey City expect smooth service from start to finish. Your billing system plays a big role in that experience."
            },
            {
                type: 'standard',
                content: "Many patients also search for terms like Doctor Jersey City, ortho, or even pedic near me medicaid. This shows how important it is to verify insurance and follow payer rules carefully. Large providers like Orthopedic Montefiore already use structured billing systems to manage these challenges."
            },
            {
                type: 'problem-snapshot',
                title: 'Challenges in Orthopedic Billing',
                description: "Orthopedic and DME billing comes with several challenges that can slow down your revenue:",
                data: [
                    { title: 'Strict Documentation', description: 'Detailed clinical documentation needed for every single claim submission.' },
                    { title: 'Prior Authorizations', description: 'Pre-approvals required before treatment or equipment use to ensure payment.' },
                    { title: 'Payer-Specific Rules', description: 'Different billing and coding rules for each individual insurance payer.' },
                    { title: 'High Denial Rates', description: 'Frequent rejections due to missing or incorrect patient and procedure details.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple and Accurate Approach',
                subtitle: 'Precision Process',
                description: "We build billing workflows designed for orthopedic practices and DME providers. Our goal is to make your billing process smooth, fast, and reliable.",
                data: [
                    { title: 'Validate', description: 'Check and validate all documents before the claim is ever submitted.' },
                    { title: 'Track', description: 'Continuously track authorizations before services are provided.' },
                    { title: 'Apply', description: 'Correctly apply payer-specific billing rules to every encounter.' },
                    { title: 'Resolve', description: 'Identify and fix denied claims quickly to maintain a steady cash flow.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Get',
                subtitle: 'Strategic Advantage',
                data: [
                    { value: 'Fewer', label: 'Rejections', description: 'Significantly reducing claim denials through front-end auditing.' },
                    { value: 'Faster', label: 'Approvals', description: 'Speeding up the reimbursement cycle for equipment and surgeries.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Scale Your Orthopedic Practice?",
                content: "A strong billing system helps your orthopedic practice grow and stay efficient in a competitive market. Focus more on patient care while we handle the complexities of your RCM."
            }
        ]
    },
    {
        title: "Urgent Care & Telehealth",
        slug: "urgent-care-telehealth",
        bannerTitle: "Fast, Accurate Billing for Urgent Care Centers",
        description: "Boost urgent care revenue with fast, accurate billing. Reduce denials, verify insurance instantly, and handle high patient volume with ease.",
        metaTitle: "Fast Urgent Care Billing for Better Cash Flow",
        metaDescription: "Boost urgent care revenue with fast, accurate billing. Reduce denials, verify insurance instantly, and handle high patient volume with ease.",
        sections: [
            {
                type: 'standard',
                content: "Urgent care centers and telehealth providers move fast. Patients walk in, get treated, and leave quickly. Because of this, your billing system must work just as fast. If your urgent care billing is slow or full of mistakes, you will face delayed payments and more claim denials. This can hurt your revenue. Many patients searching for urgent care near me or even urgent care near me within 5 mi expect quick service. Your billing process should match that speed."
            },
            {
                type: 'problem-snapshot',
                title: 'Challenges in Urgent Care Billing',
                description: "Urgent care centers deal with a high number of patients every day, which creates common problems:",
                data: [
                    { title: 'Front-End Speed', description: 'Fast patient check-in and check-out often leads to skipped insurance checks.' },
                    { title: 'Documentation Gaps', description: 'Missing or incomplete clinical documentation due to high patient volume.' },
                    { title: 'Eligibility Errors', description: 'High chances of claim errors if eligibility is not verified in real time.' },
                    { title: 'Patient Queries', description: 'Patients often ask about the cost of a visit without insurance or if you accept their plan.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple and Fast Billing Solution',
                subtitle: 'Velocity Verified',
                description: "We create billing workflows that are easy, fast, and accurate. Our system is built for urgent care speed.",
                data: [
                    { title: 'Verify', description: 'Check insurance eligibility in real time before the patient is seen.' },
                    { title: 'Code', description: 'Use clear and accurate coding for high-volume encounters.' },
                    { title: 'Submit', description: 'Submit claims quickly to ensure the fastest possible reimbursement.' },
                    { title: 'Resolve', description: 'Fix denied claims without delay to maintain steady cash flow.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Get',
                subtitle: 'Operational Impact',
                data: [
                    { value: 'Fast', label: 'Paid Faster', description: 'Accelerating your payment cycle through clean claim submissions.' },
                    { value: '99%', label: 'Lower Denials', description: 'Significantly reducing errors to protect your revenue stream.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Grow Your Urgent Care Center?",
                content: "A fast and reliable billing system helps your urgent care center grow. It also improves the experience for your patients. Focus more on patient care while we handle the speed of your RCM."
            }
        ]
    },
    {
        title: "Small–Mid Practices",
        slug: "small-mid-practices",
        bannerTitle: "RCM Solutions for Private Practices and Clinics",
        description: "Optimize RCM for private practices. Reduce denials, improve billing efficiency, and boost cash flow with structured workflows for clinics.",
        metaTitle: "Meta Private Practices RCM Services | Improve Cash Flow Fast",
        metaDescription: "Optimize RCM for private practices. Reduce denials, improve billing efficiency, and boost cash flow with structured workflows for clinics.",
        sections: [
            {
                type: 'standard',
                title: 'Efficient RCM Workflows for Growing Private Practices',
                content: "Running private practices isn't easy. You're not just managing patients, you're also dealing with billing, claims, and constant follow-ups. And honestly, that's where things often start to break down. Many clinics struggle with delayed payments, rising denials, and unclear financial visibility. It's not always about effort, it's usually about systems that aren't structured properly."
            },
            {
                type: 'standard',
                content: "If you've ever searched for private practices near me offering smooth operations, the difference often comes down to how well their revenue cycle is managed."
            },
            {
                type: 'problem-snapshot',
                title: 'Common Challenges Faced by Private Practices',
                description: "These issues are common, especially when clinics don't have access to the right systems or tools:",
                data: [
                    { title: 'Limited Resources', description: 'Small teams handling too many responsibilities at once.' },
                    { title: 'Manual Workflows', description: 'Increased chances of errors and delays due to manual processes.' },
                    { title: 'Inconsistent Coding', description: 'Leads to frequent claim rejections and significant revenue loss.' },
                    { title: 'Zero Visibility', description: 'Difficulty in tracking actual practice performance and financial health.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Approach to Simplifying Billing',
                subtitle: 'Practice Optimization',
                description: "We focus on making things simple, structured, and efficient. Our workflows are designed specifically for private practices.",
                data: [
                    { title: 'Accurate Verification', description: 'Ensuring everything is clear and verified before the patient visit even begins.' },
                    { title: 'Simplified Coding', description: 'Reducing errors and improving accuracy through standardized clinical coding.' },
                    { title: 'Fast Submission', description: 'Quicker turnaround means faster payments and a healthier cash cycle.' },
                    { title: 'Proactive Fixes', description: 'Fixing denial issues before they become bigger problems for your practice.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Better Systems = Better Outcomes',
                subtitle: 'Operational Results',
                description: "When your processes are structured, everything improves. This is what leading companies offer for private practices.",
                data: [
                    { value: 'Better', label: 'Cash Flow', description: 'Increasing your actual collected revenue through clean claims.' },
                    { value: 'Less', label: 'Stress', description: 'Drastic reduction in administrative overhead for your front desk.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Transform Your Practice?",
                content: "At the end of the day, private practices don't need more work, they need better systems. Once that's in place, everything starts running smoother."
            }
        ]
    },
    {
        title: "Multi-Speciality Hospitals",
        slug: "multi-speciality-hospitals",
        bannerTitle: "RCM Solutions for Complex Multi-Specialities Hospital Environments",
        description: "Optimize hospital billing with unified workflows. Reduce denials, improve compliance, and boost revenue across all your medical specialties.",
        metaTitle: "RCM Solutions for Multi-Specialities Hospitals",
        metaDescription: "Optimize billing across hospital specialities with smart RCM solutions. Reduce denials, improve compliance, and boost revenue efficiency.",
        sections: [
            {
                type: 'standard',
                content: "Running a hospital is not easy. There are many moving parts, and billing is one of the most complicated. When multiple specialities are involved, things become even more challenging. Each department works differently. Each payer has its own rules. And even a small mistake can delay payments or cause claim denials. That’s why hospitals need simple, clear, and reliable Revenue Cycle Management (RCM) solutions."
            },
            {
                type: 'standard',
                title: 'Why Multi-Speciality Hospitals Face More Challenges',
                content: "Hospitals handle a wide range of specialities like cardiology, surgery, and mental health. Each one comes with its own billing process. Because of this, many providers find that typical systems can't handle the level of variety required."
            },
            {
                type: 'problem-snapshot',
                title: 'Common Problems Hospitals Face',
                description: "Hospitals struggle with issues that slow down revenue and compliance:",
                data: [
                    { title: 'Variable Rules', description: 'Too many claims, each with different payer and specialty rules.' },
                    { title: 'Department Gaps', description: 'Poor communication between clinical and billing departments.' },
                    { title: 'Slow Submissions', description: 'Large volume of claims leading to slow and late submissions.' },
                    { title: 'Precision Errors', description: 'High denial rates due to small documentation errors in complex cases.' }
                ]
            },
            {
                type: 'workflow',
                title: 'A Simple and Smart Approach to RCM',
                subtitle: 'Structured Clarity',
                data: [
                    { title: 'Centralized', description: 'Patient details are checked before services begin to reduce errors.' },
                    { title: 'Standardized', description: 'All specialities follow clear and consistent coding rules (ICD/CPT).' },
                    { title: 'Real-Time', description: 'Every claim is tracked from start to finish for rapid resolution.' },
                    { title: 'Resolution', description: 'Denials are sorted and fixed fast, regardless of the speciality.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Measurable Outcomes',
                subtitle: 'Performance Proof',
                data: [
                    { value: 'Zero', label: 'Lag', description: 'Eliminating clinical documentation bottlenecks through automated workflows.' },
                    { value: 'Custom', label: 'Reporting', description: 'Detailed insights on how each separate department is performing.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Optimize Your Hospital RCM?",
                content: "The goal is to make billing easier, not harder. Bring structure and clarity to every step of your multi-speciality hospital operations today."
            }
        ]
    },
];

export const servicesList: Service[] = [
    {
        title: "Eligibility Verification",
        slug: "eligibility-verification",
        bannerTitle: "Medical Insurance Verification Services in New York",
        description: "SBN provides medical insurance verification service in New York. Reduce claim denials with real-time checks and accurate eligibility verification.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Hidden Cost of Poor Insurance Verification',
                data: [
                    { title: 'Billed Services', description: 'Treating patients without checking insurance leads to services that cannot be billed.' },
                    { title: 'Claim Denials', description: 'Manual work and poor communication make claim denials even worse.' },
                    { title: 'Loss of Revenue', description: 'Accuracy matters more than location when it comes to Protecting your revenue and reducing extra work.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Simple Verification System',
                subtitle: 'Our Step-by-Step Process',
                data: [
                    { title: 'Step 1: Details', description: 'Collect patient details accurately to initiate the verification process.' },
                    { title: 'Step 2: Eligibility', description: 'Live real-time check of patient eligibility across multiple payers.' },
                    { title: 'Step 3: Authorization', description: 'Check if prior approval or authorization is required for the treatment.' },
                    { title: 'Step 4: Responsibility', description: 'Confirm final payment responsibility, co-pay, and deductible details.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Measurable Impact',
                subtitle: 'Operational Results',
                data: [
                    { value: 'Correct', label: 'First Time', description: 'Ensuring claims are correct the first time with multiple accuracy checks.' },
                    { value: 'Safe', label: 'HIPAA Compliant', description: 'Your data is safe, work is accurate and fully HIPAA compliant.' }
                ]
            },
            {
                type: 'standard',
                title: 'Frequently Asked Questions',
                image: '/Section 4-1.webp',
                imagePosition: 'right',
                list: [
                    'What is insurance verification? It means checking patient insurance before treatment to prevent claim denials.',
                    'Do you work in New York? Yes, we support New York providers remotely with high accuracy.',
                    'How can I contact you? You can get started today by phone or email for a free eligibility audit.',
                    'Does it reduce errors? Yes, it significantly reduces billing errors and improves correct co-pay collection.'
                ]
            },
            {
                title: "Ready to stop losing money?",
                content: "Stop the leakage now. Always check insurance before treatment. Get your free eligibility audit today.",
                type: "cta"
            }
        ],
        showFeaturesTop: true,
        featuresTitle: "Service Highlights",
        featuresDescription: "We check patient insurance before treatment so you can avoid errors and protect your revenue.",
        features: [
            { title: "Real-time checks", icon: FaCheckCircle, description: "Instant verification of patient insurance before the visit." },
            { title: "Fewer claim denials", icon: FaChartArea, description: "Ensure claims are correct the first time to minimize denials." },
            { title: "HIPAA compliant", icon: FaHandshake, description: "Your data is safe and our work is fully compliant with HIPAA rules." },
            { title: "Correct co-pays", icon: FaCoins, description: "We accurately confirm co-pay, deductible, and plan coverage." },
        ],
        metaTitle: "Medical Insurance Verification Service in New York | SBN",
        metaDescription: "SBN provides medical insurance verification service in New York. Reduce claim denials with real-time checks and accurate eligibility verification."
    },
    {
        title: "Benefits Check",
        slug: "benefits-check",
        bannerTitle: "Real-Time Benefits Check & Coverage Confirmation",
        description: "We confirm co-pay, deductible, and coverage details before treatment starts.",
        showFeaturesTop: true,
        metaTitle: "Comprehensive Benefits Check & Coverage Analysis | SBN",
        metaDescription: "Identify patient responsibility early with our real-time benefits check. Get precise co-pay, deductible, and plan coverage details instantly.",
        featuresTitle: "Key Highlights",
        features: [
            { title: "Real-time checks", icon: FaCheckCircle, description: "Instant verification of patient insurance before the visit." },
            { title: "Correct Details", icon: FaList, description: "Providing accurate co-pay and deductible information for patient responsibility." },
            { title: "Fewer Denials", icon: FaHandshake, description: "Reducing errors by checking insurance the right way every time." },
        ],
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Hidden Cost of Poor Insurance Verification',
                data: [
                    { title: 'Service Denials', description: 'Treating patients without checking insurance leads to services that cannot be billed.' },
                    { title: 'Loss of Revenue', description: 'Claim denials and manual work lead to significant financial loss and extra work for staff.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple Verification System',
                subtitle: 'The SBN Process',
                data: [
                    { title: 'Step 1: Collect', description: 'Gathering patient details accurately for initial validation.' },
                    { title: 'Step 2: Check', description: 'Immediate eligibility check to confirm active coverage.' },
                    { title: 'Step 3: Authorize', description: 'Verification of prior authorization requirements for specific services.' },
                    { title: 'Step 4: Confirm', description: 'Final confirmation of patient payment responsibility and deductible status.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Measurable Results',
                subtitle: 'Operational Efficiency',
                data: [
                    { value: '100%', label: 'HIPAA Compliant', description: 'Ensuring your patient data is safe and fully compliant with rules.' },
                    { value: 'Fast', label: 'Processing', description: 'Accelerating front desk work and reducing rework through automation.' }
                ]
            },
            {
                title: "Ready to stop losing money?",
                content: "Always check insurance before treatment. Get your free eligibility audit today.",
                type: "cta"
            }
        ]
    },
    {
        title: "Prior Authorization",
        slug: "prior-authorization",
        bannerTitle: "Streamlined Prior Authorization for Faster Approvals",
        description: "Speed up prior authorization with fewer errors and faster approvals. Reduce delays, avoid denials, and keep your billing process smooth.",
        metaTitle: "Simple Prior Authorization for Faster Approvals",
        metaDescription: "Speed up prior authorization with fewer errors and faster approvals. Reduce delays, avoid denials, and keep your billing process smooth.",
        sections: [
            {
                type: 'standard',
                content: "Prior authorization is an important step in healthcare billing. It makes sure that treatments, services, and medications are approved before they are given. But in many cases, this process becomes slow and difficult to manage. When prior authorization is not handled properly, it can cause serious problems. Claims may get denied. Treatments may get delayed. Revenue can also suffer. This often happens with prior authorization for medication and prior authorization prescription, where timing is very important."
            },
            {
                type: 'standard',
                content: "Many healthcare providers hire a Prior authorization Specialist or build a Prior authorization Department to handle this work. But without a simple and clear system, mistakes can still happen."
            },
            {
                type: 'problem-snapshot',
                title: 'Common Challenges',
                description: "Prior authorization can be challenging because of manual hurdles and complex rules:",
                data: [
                    { title: 'Variable Rules', description: 'Each insurance company has vastly different rules for approval.' },
                    { title: 'Manual Delays', description: 'Heavy manual work slows down the entire submission process.' },
                    { title: 'Missing Info', description: 'Missing or incomplete important documents lead to instant rejections.' },
                    { title: 'Lack of Tracking', description: 'No proper tracking or follow-up system leads to stalled requests.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple and Clear Approach',
                subtitle: 'Authorization Pipeline',
                description: "We make prior authorization easy to manage. Our process is fast, simple, and accurate.",
                data: [
                    { title: 'Verify', description: 'We check payer-specific rules thoroughly before starting the request.' },
                    { title: 'Submit', description: 'We submit all authorization requests quickly through secure channels.' },
                    { title: 'Audit', description: 'We make sure all clinical documents are complete and accurate.' },
                    { title: 'Track', description: 'We track every single request until a final approval is shared.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Can Expect',
                subtitle: 'Operational Excellence',
                description: "With our prior authorization system, you can avoid delays in patient care and keep your revenue cycle healthy.",
                data: [
                    { value: 'Fast', label: 'Approvals', description: 'Accelerating the pre-approval timeline for services and medications.' },
                    { value: 'Lower', label: 'Denials', description: 'Significantly reducing front-end claim denials through clean authorizations.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Streamline Your Authorizations?",
                content: "In the end, a simple and strong prior authorization process helps your practice run smoothly and keeps your patients satisfied. Let us handle the complexity for you."
            }
        ],
        featuresTitle: "Why Choose Authorization Services",
        features: [
            { title: "HIPAA Compliant", icon: FaHandshake, description: "Following all HIPAA rules to keep your data safe and private." },
            { title: "Accurate Work", icon: FaCheckCircle, description: "Ensuring all approvals are correct the first time." },
            { title: "Expert Support", icon: FaLocationArrow, description: "Professional specialists handling your complex authorization needs." },
        ]
    },
    {
        title: "Exclusion Check",
        slug: "exclusion-check",
        bannerTitle: "Comprehensive Exclusion Check for Compliance and Risk Reduction",
        description: "Protect your practice with a reliable exclusion check. Avoid penalties, reduce risk, and stay audit-ready with simple and accurate screening.",
        metaTitle: "Exclusion Check for Safe and Compliant Billing",
        metaDescription: "Protect your practice with a reliable exclusion check. Avoid penalties, reduce risk, and stay audit-ready with simple and accurate screening.",
        sections: [
            {
                type: 'standard',
                content: "An exclusion check is an important step in healthcare. It helps you confirm that your staff, providers, and partners are not listed on federal or insurance exclusion lists. If this step is missed, it can create serious problems. Claims may be denied. Your practice may face financial penalties. Your reputation can also be affected. That is why many providers ask, which companies provide reliable exclusion check services for healthcare providers?"
            },
            {
                type: 'problem-snapshot',
                title: 'Common Risk Areas',
                description: "Exclusion check issues usually happen because of simple mistakes that turn into big risks:",
                data: [
                    { title: 'Irregular Screening', description: 'Screening is not performed on a regular or consistent schedule.' },
                    { title: 'Outdated Lists', description: 'Exclusion lists and databases are not updated in a timely manner.' },
                    { title: 'Poor Record Keeping', description: 'Records are not properly saved or organized for future retrieval.' },
                    { title: 'Manual Error', description: 'Manual checks lead to oversight and critical screening errors.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple Approach',
                subtitle: 'Compliance Shield',
                description: "We make the exclusion check process easy, clear, and reliable. This ensures that every step is handled correctly.",
                data: [
                    { title: 'Monitor', description: 'We monitor federal and payer exclusion lists on a recurring basis.' },
                    { title: 'Automate', description: 'We use automated OIG exclusion monitoring services to reduce manual work.' },
                    { title: 'Record', description: 'We maintain and keep proper electronic records for future audits.' },
                    { title: 'Integrate', description: 'We connect screening protocols with your hiring and onboarding steps.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Can Expect',
                subtitle: 'Risk Management',
                description: "Compliance is a must in healthcare. You cannot take risks with it. It also gives you confidence that your billing and operations are fully compliant.",
                data: [
                    { value: 'Zero', label: 'Penalty Risk', description: 'Avoiding costly federal and State penalties through rigorous screening.' },
                    { value: 'Clean', label: 'Audit Ready', description: 'Staying fully prepared and documented for any healthcare audit.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Protect Your Practice?",
                content: "A simple and reliable exclusion check helps protect your practice and supports long-term success. Stay safe and avoid compliance problems today."
            }
        ],
    },
    {
        title: "Patient Collection & AR Recovery",
        slug: "patient-collections-ar-recovery",
        bannerTitle: "Patient Collections & Revenue Recovery",
        description: "Make collections easy with quick follow-ups and faster A/R recovery. Reduce unpaid balances and improve cash flow with a simple system.",
        metaTitle: "Fast and Simple Patient Collections System",
        metaDescription: "Make collections easy with quick follow-ups and faster A/R recovery. Reduce unpaid balances and improve cash flow with a simple system.",
        sections: [
            {
                type: 'standard',
                content: [
                    "Patient payments are a big part of healthcare today. This is why collections must be clear and easy to manage. When follow-ups are delayed, payments slow down and balances keep growing.",
                    "Many practices deal with increasing collections debt. Even a well-staffed Collections Department can face problems without a simple system. If the process is not organized, payments are missed and accounts stay unpaid for longer.",
                    "Patients also prefer simple communication for collections for medical bills and collections on medical bills. Clear messages and easy payment options help them respond faster."
                ]
            },
            {
                type: 'problem-snapshot',
                title: 'Common Issues',
                description: "Collections often become difficult because of manual hurdles and tracking gaps:",
                data: [
                    { title: 'Delayed Follow-ups', description: 'Follow-ups are late or missed, allowing balances to grow over time.' },
                    { title: 'Patient Confusion', description: 'Patients do not understand their bills or payment responsibility.' },
                    { title: 'Aging AR', description: 'A/R balances keep aging without a proactive recovery plan.' },
                    { title: 'Tracking Gaps', description: 'There is no proper tracking or follow-up system for overdue accounts.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Simple Process',
                subtitle: 'Strategic Recovery',
                description: "We make collections easy and smooth. Our system is built to reduce friction and accelerate payments.",
                data: [
                    { title: 'Follow-up', description: 'We follow up using professional calls, SMS, and secure emails.' },
                    { title: 'Reminders', description: 'We send automated payment reminders to keep patients informed.' },
                    { title: 'Early Action', description: 'We start early follow-ups to avoid long-term collection delays.' },
                    { title: 'AR Recovery', description: 'We recover overdue A/R step by step using a structured approach.' },
                    { title: 'Flexibility', description: 'We offer flexible payment plans to help patients clear balances.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What You Get',
                subtitle: 'Financial Strength',
                description: "A strong collections system helps your practice grow and stay financially healthy.",
                data: [
                    { value: 'Faster', label: 'Payments', description: 'Accelerate your reimbursement cycle from patient responsibilities.' },
                    { value: '99%', label: 'Stability', description: 'Structured systems leading to consistent and predictable cash flow.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Strengthen Your Collections?",
                content: "In the end, a simple collections process helps your practice grow and stay financially strong. Let us handle the complexity for you."
            }
        ]
    },
    {
        title: "Consulting",
        slug: "consulting",
        bannerTitle: "Consulting for Better RCM and Smarter Operations",
        description: "Get practical consulting services to improve your revenue cycle. Fix gaps, reduce errors, and build a smooth, reliable billing process.",
        metaTitle: "RCM Consulting That Helps You Grow Faster",
        metaDescription: "Get practical consulting services to improve your revenue cycle. Fix gaps, reduce errors, and build a smooth, reliable billing process.",
        sections: [
            {
                type: 'standard',
                content: [
                    "Running a healthcare practice today is not easy. Rules keep changing. Payments get delayed. Small mistakes can turn into bigger problems. That’s where consulting really helps.",
                    "Most providers don’t need complicated strategies. They need simple answers. They want to know where money is being lost and how to fix it. That’s exactly what good consulting services are meant to do.",
                    "In some specialties, like consulting ophthalmology, the process can be even more detailed. And when you look at different consulting healthcare companies, it’s clear that not every solution is practical. The goal is not complexity — it’s clarity. That’s what makes the best consulting healthcare support stand out."
                ]
            },
            {
                type: 'problem-snapshot',
                title: 'Where Things Usually Go Wrong',
                description: "In many practices, problems build up slowly due to unclear workflows and fragmented systems:",
                data: [
                    { title: 'Unclear Workflows', description: 'Workflows are not clear, leading to confusion and repeated errors.' },
                    { title: 'Information Gaps', description: 'Tasks get missed between teams because of poor communication.' },
                    { title: 'Disconnected Systems', description: 'Systems don’t talk to each other, creating manual data entry silos.' },
                    { title: 'Lack of Insight', description: 'Reports don’t show the full picture, making it hard to track performance.' }
                ]
            },
            {
                type: 'workflow',
                title: 'How We Actually Help',
                subtitle: 'Operational Clarity',
                description: "We don’t overcomplicate things. We look at what’s happening and fix what’s not working.",
                data: [
                    { title: 'Audit', description: 'We go through your current process step by step to find leakage points.' },
                    { title: 'Identify', description: 'We find where things are slowing down and causing bottlenecks.' },
                    { title: 'Simplify', description: 'We simplify your workflows to make them easy for your team to follow.' },
                    { title: 'Optimize', description: 'We help you choose tools and systems that actually fit your specific needs.' },
                    { title: 'Track', description: 'We track results and provide insights so you can see real improvement over time.' }
                ]
            },
            {
                type: 'kpi',
                title: 'What Changes for You',
                subtitle: 'Practice Growth',
                description: "Once the system is clear, things start to improve quickly with measurable outcomes.",
                data: [
                    { value: 'Fewer', label: 'Errors', description: 'Significant reduction in billing and administrative mistakes.' },
                    { value: 'Faster', label: 'Payments', description: 'Accelerated reimbursement through cleaner claim submissions.' }
                ]
            },
            {
                type: 'cta',
                title: "Ready to Fix Your RCM Gaps?",
                content: "Consulting should make your work easier — not harder. Let us bring clarity and efficiency to your practice today."
            }
        ]
    }
];
