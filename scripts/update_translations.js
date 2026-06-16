const fs = require('fs');

function updateTranslations() {
  const filePath = 'c:/Users/User/Desktop/New folder/sbn/sbn-project-demo-frontend/src/data/translations.json';
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // English
  data.en.process_flow = {
    tag: 'The Problem We Solve',
    title: 'Is Your Practice Losing Revenue Without Even Knowing It?',
    desc1: 'Many healthcare providers are leaving thousands of dollars on the table every month — not because of poor care, but because of billing gaps that quietly drain their revenue.',
    desc2: 'The culprits are often invisible until it’s too late:',
    c1: 'Missed claim deadlines',
    c2: 'Incorrect codes',
    c3: 'Denied claims with no follow-up',
    c4: 'Eligibility errors caught too late',
    footer1: 'These are not small problems. They add up fast. That’s where SBN comes in.',
    footer2: 'Our fully outsourced billing services are designed to close every one of those gaps',
    footer3: ' — from the moment a patient books an appointment to the day the payment hits your account. No leakage. No guesswork. No surprises.'
  };

  data.en.office_operations = {
    tag: 'Why Providers Choose SBN',
    title: 'We Treat Your Revenue Like Our Own',
    desc: 'There are many billing companies out there. Here’s why healthcare providers across the USA choose SBN — and stay with us:',
    watermark: 'SBN Global Center',
    r1_t: '14+ Years of Hands-On Experience', r1_d: 'We’ve seen every billing scenario',
    r2_t: '200+ Dedicated Billing Specialists', r2_d: 'Real experts on your claims, not just software',
    r3_t: '98% First-Pass Claim Acceptance Rate', r3_d: 'Fewer rejections, faster payments',
    r4_t: 'Claims Submitted Within 48 Hours', r4_d: 'No delays, no backlogs',
    r5_t: 'Compatible with 50+ EMR/EHR Platforms', r5_d: 'Seamless integration with your systems',
    r6_t: 'Full Transparency and Reporting', r6_d: 'You always know where your money stands',
    r7_t: 'HIPAA-Compliant Operations', r7_d: 'Your patient data is always protected'
  };

  data.en.stats_section = {
    tag: 'Results Our Clients Have Seen',
    title: 'Real Practices. Real Results.',
    desc: 'Our clients don’t just get better billing — they get measurable outcomes:',
    s1_v: '20%', s1_l: 'Average Revenue Improvement', s1_d: 'Increase in overall collected revenue',
    s2_v: '40%', s2_l: 'Reduction in Operational Costs', s2_d: 'Decrease in overhead and administrative expenses',
    s3_v: '35%', s3_l: 'Reduction in A/R Days', s3_d: 'Faster turnaround on accounts receivable',
    s4_v: '$1.2M+', s4_l: 'Revenue Recovered', s4_d: 'Recovered for a single pediatric group'
  };

  data.en.testimonials_section = {
    tag: 'Proof of Success',
    title: 'Trusted by High-Performance Practices',
    t1_name: 'Dr. Sarah Mitchell', t1_title: 'Medical Director', t1_practice: 'Mitchell Family Practice',
    t1_metric: '90 Days', t1_metricLabel: 'To See Impact',
    t1_quote: 'SBN Healthcare transformed our revenue cycle. We saw an immediate impact on cash flow within the first 90 days.',
    t2_name: 'James Wilson', t2_title: 'Practice Administrator', t2_practice: 'Oakwood Orthopedics',
    t2_metric: '100%', t2_metricLabel: 'Transparency',
    t2_quote: 'The level of transparency SBN provides is unmatched. We finally feel like we have a partner who is as invested in our financial success as we are.'
  };

  data.en.faq_section = {
    tag: 'Frequently Asked Questions',
    title: 'Got Questions? We Have Answers.',
    q1: 'What exactly are Medical Billing Services and do I really need them?',
    a1: 'Medical Billing Services handle the entire process of submitting claims and following up until your practice gets paid. Most practices that outsource billing recover 15–25% more revenue within their first quarter.',
    q2: 'How is SBN different from other billing companies?',
    a2: 'Most billing companies process claims and move on. SBN actively monitors every claim, follows up on denials, and provides transparent reporting — with 14+ years of experience and a 98% first-pass acceptance rate.',
    q3: 'What does Revenue Cycle Management include?',
    a3: 'Everything: patient eligibility verification, prior authorization, charge entry, coding, claim submission, payment posting, AR follow-up, and denial management — managed end-to-end.',
    q4: 'Is outsourcing billing safe for my patient data?',
    a4: 'Absolutely. SBN is fully HIPAA-compliant. All patient data is handled with strict security protocols, encrypted storage, and access controls.',
    q5: 'How quickly are claims submitted?',
    a5: 'Within 48 hours of receiving the charge. Every claim goes through our scrubbing process first to catch errors before submission.',
    q6: 'Do you handle old unpaid claims?',
    a6: 'Yes. Our AR team works on both current and aging claims — even ones that have been sitting for months. Many practices recover revenue they’d already written off.',
    q7: 'Which specialties do you cover?',
    a7: 'Behavioral Health, DME/Orthopedics, Urgent Care, Telehealth, and Multi-Specialty Hospitals — among others. Our team is trained in specialty-specific payer rules.',
    q8: 'How much does it cost?',
    a8: 'We offer a complete service package, per-transaction billing starting at $0.75/claim, FTE-based dedicated staff, and fully custom plans. Contact us for a free, no-obligation quote.',
    q9: 'What coding services do you provide?',
    a9: 'Our certified coders handle ICD-10, CPT, and HCPCS coding across all specialties — ensuring fewer denials, full reimbursement, and complete payer compliance.',
    q10: 'How do I get started?',
    a10: 'Book a free consultation. We’ll review your current billing process, identify revenue gaps, and recommend the right solution — with no pressure and no obligation.',
    cta_title: 'Ready to recover more revenue?',
    cta_desc: 'Contact SBN Healthcare Solution today for a free, no-obligation consultation.',
    cta_btn: 'Get Free Consultation'
  };

  // Arabic
  data.ar.process_flow = {
    tag: 'المشكلة التي نحلها',
    title: 'هل تفقد عيادتك إيراداتها دون أن تدري؟',
    desc1: 'يترك العديد من مقدمي الرعاية الصحية آلاف الدولارات على الطاولة كل شهر — ليس بسبب سوء الرعاية، ولكن بسبب فجوات الفوترة التي تستنزف إيراداتهم بهدوء.',
    desc2: 'غالبًا ما تكون الأسباب غير مرئية حتى يفوت الأوان:',
    c1: 'المواعيد النهائية الفائتة للمطالبات',
    c2: 'رموز غير صحيحة',
    c3: 'مطالبات مرفوضة بدون متابعة',
    c4: 'أخطاء الأهلية المكتشفة بعد فوات الأوان',
    footer1: 'هذه ليست مشاكل صغيرة. إنها تتراكم بسرعة. وهنا يأتي دور SBN.',
    footer2: 'تم تصميم خدمات الفوترة الخارجية بالكامل لدينا لسد كل واحدة من تلك الفجوات',
    footer3: ' — من لحظة حجز المريض لموعد إلى اليوم الذي تصل فيه الدفعة إلى حسابك. لا تسرب. لا تخمين. لا مفاجآت.'
  };

  data.ar.office_operations = {
    tag: 'لماذا يختار مقدمو الخدمات SBN',
    title: 'نتعامل مع إيراداتك وكأنها إيراداتنا',
    desc: 'هناك العديد من شركات الفوترة. إليك سبب اختيار مقدمي الرعاية الصحية في جميع أنحاء الولايات المتحدة لـ SBN — والبقاء معنا:',
    watermark: 'المركز العالمي SBN',
    r1_t: 'أكثر من 14 عامًا من الخبرة العملية', r1_d: 'لقد رأينا كل سيناريوهات الفوترة',
    r2_t: 'أكثر من 200 متخصص فواتير متفرغ', r2_d: 'خبراء حقيقيون في مطالباتك، وليس مجرد برنامج',
    r3_t: '98% معدل قبول المطالبات من المرة الأولى', r3_d: 'رفض أقل، مدفوعات أسرع',
    r4_t: 'يتم تقديم المطالبات خلال 48 ساعة', r4_d: 'لا تأخير، لا تراكمات',
    r5_t: 'متوافق مع أكثر من 50 منصة EMR/EHR', r5_d: 'تكامل سلس مع أنظمتك',
    r6_t: 'شفافية وإبلاغ كامل', r6_d: 'أنت تعرف دائمًا أين تقف أموالك',
    r7_t: 'عمليات متوافقة مع HIPAA', r7_d: 'بيانات مرضاك محمية دائمًا'
  };

  data.ar.stats_section = {
    tag: 'نتائج رأى عملاؤنا',
    title: 'ممارسات حقيقية. نتائج حقيقية.',
    desc: 'لا يحصل عملاؤنا على فوترة أفضل فحسب — بل يحصلون على نتائج قابلة للقياس:',
    s1_v: '20%', s1_l: 'متوسط تحسن الإيرادات', s1_d: 'زيادة في إجمالي الإيرادات المحصلة',
    s2_v: '40%', s2_l: 'انخفاض في التكاليف التشغيلية', s2_d: 'انخفاض في النفقات العامة والإدارية',
    s3_v: '35%', s3_l: 'انخفاض في أيام الذمم المدينة (A/R)', s3_d: 'تحول أسرع في حسابات القبض',
    s4_v: '$1.2M+', s4_l: 'الإيرادات المستردة', s4_d: 'مستردة لمجموعة طب أطفال واحدة'
  };

  data.ar.testimonials_section = {
    tag: 'دليل النجاح',
    title: 'موثوق بها من قبل العيادات عالية الأداء',
    t1_name: 'د. سارة ميتشل', t1_title: 'المدير الطبي', t1_practice: 'ميتشل فاميلي براكتيس',
    t1_metric: '90 يومًا', t1_metricLabel: 'لرؤية التأثير',
    t1_quote: 'حولت SBN Healthcare دورة إيراداتنا. رأينا تأثيرًا فوريًا على التدفق النقدي خلال أول 90 يومًا.',
    t2_name: 'جيمس ويلسون', t2_title: 'مدير العيادة', t2_practice: 'أوكوود لجراحة العظام',
    t2_metric: '100%', t2_metricLabel: 'شفافية',
    t2_quote: 'مستوى الشفافية الذي توفره SBN لا مثيل له. نشعر أخيرًا أن لدينا شريكًا مستثمرًا في نجاحنا المالي بقدر ما نحن كذلك.'
  };

  data.ar.faq_section = {
    tag: 'أسئلة مكررة',
    title: 'هل لديك أسئلة؟ لدينا إجابات.',
    q1: 'ما هي خدمات الفوترة الطبية بالضبط وهل أحتاجها حقًا؟',
    a1: 'تتعامل خدمات الفوترة الطبية مع العملية الكاملة لتقديم المطالبات والمتابعة حتى تحصل عيادتك على أموالها. تسترد معظم العيادات التي تستعين بمصادر خارجية للفوترة 15-25٪ من الإيرادات الإضافية خلال ربعها الأول.',
    q2: 'كيف تختلف SBN عن شركات الفوترة الأخرى؟',
    a2: 'معظم شركات الفوترة تعالج المطالبات وتمضي قدمًا. تقوم SBN بمراقبة كل مطالبة بنشاط، وتتابع حالات الرفض، وتوفر تقارير شفافة — مع أكثر من 14 عامًا من الخبرة ومعدل قبول من المرة الأولى يبلغ 98٪.',
    q3: 'ماذا تشمل إدارة دورة الإيرادات؟',
    a3: 'كل شيء: التحقق من أهلية المريض، والتفويض المسبق، وإدخال الرسوم، والترميز، وتقديم المطالبات، وترحيل المدفوعات، ومتابعة حسابات القبض، وإدارة الرفض — تُدار من البداية إلى النهاية.',
    q4: 'هل الاستعانة بمصادر خارجية للفوترة آمن لبيانات مرضاي؟',
    a4: 'بالتأكيد. SBN متوافقة تمامًا مع HIPAA. يتم التعامل مع جميع بيانات المرضى ببروتوكولات أمان صارمة وتخزين مشفر وعناصر تحكم في الوصول.',
    q5: 'ما مدى سرعة تقديم المطالبات؟',
    a5: 'خلال 48 ساعة من تلقي الرسوم. تمر كل مطالبة بعملية التنظيف الخاصة بنا أولاً لاكتشاف الأخطاء قبل تقديمها.',
    q6: 'هل تتعاملون مع المطالبات القديمة غير المدفوعة؟',
    a6: 'نعم. يعمل فريق AR لدينا على كل من المطالبات الحالية والمتقادمة - حتى تلك التي كانت معلقة لأشهر. تسترد العديد من العيادات الإيرادات التي كانت قد شطبتها بالفعل.',
    q7: 'ما هي التخصصات التي تغطونها؟',
    a7: 'الصحة السلوكية، المعدات الطبية/جراحة العظام، الرعاية العاجلة، الرعاية الصحية عن بعد، ومستشفيات التخصصات المتعددة - من بين أمور أخرى. تم تدريب فريقنا على قواعد الدافع الخاصة بالتخصص.',
    q8: 'كم يكلف ذلك؟',
    a8: 'نقدم حزمة خدمات كاملة، وفوترة لكل معاملة تبدأ من 0.75 دولار/مطالبة، وموظفين مخصصين بناءً على FTE، وخطط مخصصة بالكامل. اتصل بنا للحصول على عرض أسعار مجاني بدون التزام.',
    q9: 'ما هي خدمات الترميز التي تقدمونها؟',
    a9: 'يتعامل مبرمجونا المعتمدون مع ترميز ICD-10 و CPT و HCPCS عبر جميع التخصصات — مما يضمن عددًا أقل من حالات الرفض، وسدادًا كاملاً، وامتثالاً تامًا للدافع.',
    q10: 'كيف أبدأ؟',
    a10: 'احجز استشارة مجانية. سنراجع عملية الفوترة الحالية لديك، ونحدد فجوات الإيرادات، ونوصي بالحل المناسب — بدون ضغط وبدون التزام.',
    cta_title: 'هل أنت مستعد لاسترداد المزيد من الإيرادات؟',
    cta_desc: 'اتصل بـ SBN Healthcare Solution اليوم للحصول على استشارة مجانية بدون التزام.',
    cta_btn: 'احصل على استشارة مجانية'
  };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

updateTranslations();
