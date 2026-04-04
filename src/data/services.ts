
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
        bannerTitle: "Specialized Revenue Solutions for Behavioral Health",
        description: "Optimizing mental health and substance abuse billing with precision and compliance.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'Behavioral Health Billing Hurdles',
                data: [
                    { title: 'Complex Prior Auth', description: 'Mental health services often require multi-layered approvals that slow down care.' },
                    { title: 'Coding Variances', description: 'Unique CPT codes for psychotherapy and group sessions often lead to errors.' },
                    { title: 'Session Tracking', description: 'Difficulties in tracking unit limits per patient per benefit period.' }
                ]
            },
            {
                type: 'workflow',
                title: 'The SBN Behavioral Cycle',
                subtitle: 'Precision Process',
                data: [
                    { title: 'Verify', description: 'Real-time check for mental health benefits and visit limits.' },
                    { title: 'Authorize', description: 'Automated workflow for obtaining prior authorization for intensive outpatient care.' },
                    { title: 'Bill', description: 'Clean claim submission with specialized behavioral health coding.' },
                    { title: 'Optimize', description: 'Continuous audit to ensure session limits are never exceeded.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Behavioral Recovery Metrics',
                subtitle: 'Real Results',
                data: [
                    { value: '25%', label: 'Revenue Increase', description: 'Average lift for mental health clinics within 90 days.' },
                    { value: '99%', label: 'Authorization Success', description: 'Ensuring your services are pre-approved every single time.' }
                ]
            }
        ]
    },
    {
        title: "DME / Orthopedics",
        slug: "dme-orthopedics",
        bannerTitle: "Precision Billing for DME & Orthopedic Practices",
        description: "Specialized RCM for durable medical equipment and surgical orthopedic workflows.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'DME Lifecycle Challenges',
                data: [
                    { title: 'Complex Modifiers', description: 'RR, UE, NU modifiers for rental vs purchase often lead to preventable denials.' },
                    { title: 'Prior Auth Delays', description: 'Equipment delivery stalled by slow payer authorization responses.' },
                    { title: 'Documentation Gaps', description: 'Ensuring medical necessity certificates (CMN) are perfectly executed before billing.' }
                ]
            },
            {
                type: 'workflow',
                title: 'DME Order-to-Cash Workflow',
                subtitle: 'Seamless Logistics',
                data: [
                    { title: 'Intake', description: 'Validation of physician orders and insurance eligibility for specific equipment.' },
                    { title: 'Authorize', description: 'Rapid procurement of prior authorization via direct payer integrations.' },
                    { title: 'Deliver', description: 'Proof of delivery (POD) capture to trigger compliant billing.' },
                    { title: 'Audit', description: 'Continuous surveillance of rental cycles to ensure ongoing reimbursement.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Orthopedic Recovery',
                subtitle: 'Surgical Precision',
                data: [
                    { value: '35%', label: 'Revenue Acceleration', description: 'Speeding up the cash cycle for expensive surgical implants and equipment.' },
                    { value: '97%+', label: 'Audit Acceptance', description: 'Rigorous documentation standards that withstand DME Medicare audits.' }
                ]
            }
        ]
    },
    {
        title: "Urgent Care & Telehealth",
        slug: "urgent-care-telehealth",
        bannerTitle: "Optimized RCM for Urgent Care & Telehealth",
        description: "Accelerating revenue for high-volume urgent care centers and virtual health platforms.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'High-Velocity Billing Challenges',
                data: [
                    { title: 'Real-Time Verification', description: 'Urgent care requires instant insurance validation to prevent front-end revenue leakage.' },
                    { title: 'Telehealth Modifiers', description: 'Navigating frequently changing POS and GT/95 modifier rules for virtual visits.' },
                    { title: 'Volume Management', description: 'Processing high volumes of encounters without sacrificing coding accuracy or speed.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Rapid-Response Billing Cycle',
                subtitle: 'Velocity Verified',
                data: [
                    { title: 'Verify', description: 'Instant, automated eligibility checks before the patient is seen.' },
                    { title: 'Code', description: 'Same-day coding of urgent care encounters with specialized modifier logic.' },
                    { title: 'Submit', description: 'Real-time claim submission to ensure the fastest possible reimbursement.' },
                    { title: 'Monitor', description: '24/7 surveillance of claim status to catch and fix rejections immediately.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Urgent Care Impact',
                subtitle: 'Operational Speed',
                data: [
                    { value: '48h', label: 'Billing Turnaround', description: 'Average time from encounter to clean claim submission.' },
                    { value: '20%', label: 'Efficiency Gain', description: 'Reduction in administrative overhead for clinic staff.' }
                ]
            },
            {
                type: 'ai-indicator',
                stage: 'Virtual Visit Compliance',
                description: 'Our AI engine automatically validates telehealth-specific coding requirements based on the latest state and payer guidelines.',
                data: '100% Compliance Accuracy'
            }
        ]
    },
    {
        title: "Small–Mid Practices",
        slug: "small-mid-practices",
        bannerTitle: "Enterprise-Grade Solutions for Independent Practices",
        description: "Empowering small to mid-sized practices with high-performance revenue cycle management.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'Small Practice Constraints',
                data: [
                    { title: 'Limited Resources', description: 'Staff stretched thin between patient care and administrative billing tasks.' },
                    { title: 'Inconsistent Cash Flow', description: 'Fluctuations in revenue due to delayed billing or high denial rates.' },
                    { title: 'Overhead Pressure', description: 'The high cost of maintaining expert in-house billing and coding teams.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Seamless Integration Workflow',
                subtitle: 'Simplified Management',
                data: [
                    { title: 'Connect', description: 'Direct integration with your existing EMR/EHR system for data flow.' },
                    { title: 'Manage', description: 'Full-service management of charges, payments, and denials.' },
                    { title: 'Report', description: 'Monthly transparency reports on practice performance and financial health.' },
                    { title: 'Consult', description: 'Regular strategy sessions to optimize operations and growth.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Practice Growth',
                subtitle: 'Financial Strength',
                data: [
                    { value: '18%', label: 'Revenue Growth', description: 'Average increase for independent practices in their first year with SBN.' },
                    { value: '100%', label: 'Peace of Mind', description: 'Total focus on patients while we handle the complexities of RCM.' }
                ]
            },
            {
                title: "Ready to Scale Your Practice?",
                content: "Experience the benefits of a full-scale billing department without the overhead. Let's build your financial future together.",
                type: "cta"
            }
        ]
    }
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
                image: '/Section 4-1.png',
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
        bannerTitle: "Prior Authorization Management",
        description: "We check if approval is needed and obtain it before the treatment is provided.",
        metaTitle: "Advanced Prior Authorization Management for Providers | SBN",
        metaDescription: "Streamline your pre-approval process with SBN's automated prior authorization management. Avoid claim denials by capturing approval before care.",
        sections: [
            {
                type: 'ai-indicator',
                stage: 'Smart Approval Check',
                description: 'Our system automatically identifies services that require prior approval from the payer.',
                data: 'Simple Verification System'
            },
            {
                type: 'workflow',
                title: 'Authorization Pipeline',
                subtitle: 'Efficiency at Scale',
                data: [
                    { title: 'Identify', description: 'Step 1: Collecting patient details and service codes.' },
                    { title: 'Verify', description: 'Step 2: Checking authorization requirements against payer rules.' },
                    { title: 'Obtain', description: 'Step 3: Strategic submission of authorization requests to payers.' },
                    { title: 'Confirm', description: 'Step 4: Confirming payment responsibility after approval.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Results & Success',
                subtitle: 'Measured Excellence',
                data: [
                    { value: 'Fewer', label: 'Denials', description: 'Significantly reducing claim denials by ensuring authorization is set.' },
                    { value: 'Better', label: 'Cash Flow', description: 'Less rework and faster reimbursements through precise front-end work.' }
                ]
            },
            {
                type: 'standard',
                title: 'Safe and Compliant',
                content: 'We follow HIPAA rules strictly. Your data is safe, work is accurate, and fully compliant with healthcare regulations.'
            }
        ],
        featuresTitle: "Why Choose Authorization Services",
        features: [
            { title: "HIPAA Compliant", icon: FaHandshake, description: "Following all HIPAA rules to keep your data safe and private." },
            { title: "Accurate Work", icon: FaCheckCircle, description: "Ensuring all approvals are correct the first time." },
            { title: "NY Providers", icon: FaLocationArrow, description: "We support New York providers remotely with precision." },
        ]
    },
    {
        title: "Exclusion Check",
        slug: "exclusion-check",
        bannerTitle: "Identify Policy Exclusions Early",
        description: "We find services that are not covered by the patient's plan to avoid billing errors.",
        metaTitle: "Medical Policy Exclusion Check | HIPAA Compliant | SBN",
        metaDescription: "Reduce billing errors and rework by identifying policy exclusions up front. Our HIPAA compliant platform ensures precision policy mapping.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'Avoid Unbillable Services',
                data: [
                    { title: 'Policy Exclusions', description: 'Hidden exclusions in patient policies can lead to services that cannot be billed.' },
                    { title: 'In-State Rules', description: 'Specific rules for New York providers require accuracy over location.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Exclusion Verification Process',
                subtitle: 'Strategic Analysis',
                data: [
                    { title: 'Gather', description: 'Step 1: Collecting all necessary patient and policy information.' },
                    { title: 'Analyze', description: 'Step 2: Checking policy language for specific service exclusions.' },
                    { title: 'Alert', description: 'Step 3: Notifying the provider of unbillable services before treatment.' },
                    { title: 'Validate', description: 'Step 4: Confirming alternate payment responsibility if excluded.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Performance FAQ',
                subtitle: 'Answers & Insights',
                data: [
                    { value: 'Yes', label: 'NY Support', description: 'We support New York providers with remote, accurate services.' },
                    { value: 'Yes', label: 'Error Reduction', description: 'Significantly reducing billing errors by identifying coverage gaps.' }
                ]
            }
        ],
    }
];
