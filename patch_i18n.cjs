const fs = require('fs');
let code = fs.readFileSync('src/i18n.js', 'utf8');

const enInsert = `      "brandIdentity": {
        "hub": {
          "title": "What Are You Building?",
          "featuredExample": "Featured Example",
          "startJourney": "Start Journey",
          "changePath": "Change Path"
        },
        "journey": {
          "stage": "STAGE",
          "deliverables": "Deliverables",
          "initiate": "Initiate Identity System"
        },
        "paths": [
          { "title": "A Personal Legacy", "subtitle": "Build a name people trust, remember, and follow.", "desc": "For founders, creators, executives, consultants, speakers, artists, and visionaries.", "outcomes": ["Personal Positioning", "Authority Building", "Thought Leadership", "Content Ecosystem", "Reputation Development", "Legacy Strategy"] },
          { "title": "A Business Brand", "subtitle": "Build a business people recognize, trust, and choose.", "desc": "For startups, companies, agencies, and organizations.", "outcomes": ["Market Positioning", "Brand Strategy", "Visual Identity", "Customer Experience", "Brand Communication", "Growth Framework"] },
          { "title": "A Product Brand", "subtitle": "Transform a product into a category leader.", "desc": "For physical products, digital platforms, apps, and solutions.", "outcomes": ["Product Positioning", "Brand Identity", "Packaging System", "Product Story", "Launch Strategy", "Customer Adoption"] },
          { "title": "A Community", "subtitle": "Create belonging around a shared vision.", "desc": "For educational platforms, memberships, networks, and clubs.", "outcomes": ["Community Identity", "Culture Design", "Member Experience", "Engagement Systems", "Community Growth", "Long-Term Sustainability"] },
          { "title": "A Movement", "subtitle": "Build something larger than a company.", "desc": "For ambitious initiatives, social projects, and transformative ideas.", "outcomes": ["Vision Architecture", "Purpose Framework", "Narrative Development", "Cultural Impact Strategy", "Influence Ecosystem", "Global Expansion Framework"] }
        ],
        "journeyPhases": [
          { "title": "DISCOVER", "headline": "Understand What Must Be Built", "desc": "We explore the purpose, vision, audience, market, and opportunities behind the idea.", "deliverables": ["Discovery Workshop", "Research Framework", "Strategic Foundation"] },
          { "title": "POSITION", "headline": "Define Your Place In The World", "desc": "A powerful brand is not everything to everyone. It owns a specific position in people's minds.", "deliverables": ["Market Positioning", "Audience Mapping", "Competitive Analysis", "Differentiation Strategy"] },
          { "title": "PERSONALITY", "headline": "Give The Brand A Soul", "desc": "Before people remember logos, they remember how a brand makes them feel.", "deliverables": ["Brand Personality", "Voice & Tone", "Messaging System", "Communication Principles"] },
          { "title": "IDENTITY", "headline": "Create A Visual Language", "desc": "Strategy becomes visible.", "deliverables": ["Identity System", "Logo Architecture", "Typography System", "Color System", "Motion Principles"] },
          { "title": "NARRATIVE", "headline": "Tell A Story Worth Following", "desc": "Every influential brand is powered by a meaningful story.", "deliverables": ["Brand Story", "Origin Story", "Mission Narrative", "Content Narrative Framework"] },
          { "title": "EXPERIENCE", "headline": "Design Every Interaction", "desc": "A brand lives through experiences, not assets.", "deliverables": ["Customer Journey", "Digital Experience", "Community Experience", "Touchpoint Strategy"] },
          { "title": "ACTIVATE", "headline": "Bring The Brand To Life", "desc": "Launch the brand across every platform and interaction.", "deliverables": ["Launch Strategy", "Brand Rollout", "Marketing Framework", "Content Direction"] },
          { "title": "EVOLVE", "headline": "Build For Long-Term Growth", "desc": "The strongest brands are designed to evolve.", "deliverables": ["Governance System", "Brand Management", "Expansion Strategy", "Long-Term Growth Framework"] }
        ],`;

const arInsert = `      "brandIdentity": {
        "hub": {
          "title": "ماذا تبني؟",
          "featuredExample": "مثال مميز",
          "startJourney": "ابدأ الرحلة",
          "changePath": "تغيير المسار"
        },
        "journey": {
          "stage": "المرحلة",
          "deliverables": "المخرجات",
          "initiate": "بدء نظام الهوية"
        },
        "paths": [
          { "title": "إرث شخصي", "subtitle": "ابنِ اسماً يثق به الناس ويتذكرونه ويتبعونه.", "desc": "للمؤسسين، المبدعين، المدراء التنفيذيين، المستشارين، المتحدثين، الفنانين، وأصحاب الرؤى.", "outcomes": ["التمركز الشخصي", "بناء المرجعية", "القيادة الفكرية", "نظام المحتوى", "تطوير السمعة", "استراتيجية الإرث"] },
          { "title": "علامة تجارية للأعمال", "subtitle": "ابنِ عملاً تجارياً يعرفه الناس، يثقون به، ويختارونه.", "desc": "للشركات الناشئة، الشركات، الوكالات، والمنظمات.", "outcomes": ["التمركز في السوق", "استراتيجية العلامة", "الهوية البصرية", "تجربة العميل", "تواصل العلامة", "هيكل النمو"] },
          { "title": "علامة منتج", "subtitle": "حوّل منتجك إلى قائد في فئته.", "desc": "للمنتجات الملموسة، المنصات الرقمية، التطبيقات، والحلول.", "outcomes": ["تمركز المنتج", "هوية العلامة", "نظام التغليف", "قصة المنتج", "استراتيجية الإطلاق", "تبني العملاء"] },
          { "title": "مجتمع", "subtitle": "اخلق الانتماء حول رؤية مشتركة.", "desc": "للمنصات التعليمية، العضويات، الشبكات، والنوادي.", "outcomes": ["هوية المجتمع", "تصميم الثقافة", "تجربة الأعضاء", "أنظمة التفاعل", "نمو المجتمع", "الاستدامة طويلة الأمد"] },
          { "title": "حركة", "subtitle": "ابنِ شيئاً أكبر من مجرد شركة.", "desc": "للمبادرات الطموحة، المشاريع الاجتماعية، والأفكار التحويلية.", "outcomes": ["هندسة الرؤية", "إطار الهدف", "تطوير السرد", "استراتيجية التأثير الثقافي", "نظام التأثير", "إطار التوسع العالمي"] }
        ],
        "journeyPhases": [
          { "title": "الاكتشاف", "headline": "فهم ما يجب بناؤه", "desc": "نستكشف الغرض، الرؤية، الجمهور، السوق، والفرص الكامنة وراء الفكرة.", "deliverables": ["ورشة عمل الاكتشاف", "إطار البحث", "الأساس الاستراتيجي"] },
          { "title": "التمركز", "headline": "حدد مكانتك في العالم", "desc": "العلامة التجارية القوية لا تعني كل شيء للجميع. إنها تمتلك مكانة محددة في أذهان الناس.", "deliverables": ["التمركز في السوق", "تخطيط الجمهور", "التحليل التنافسي", "استراتيجية التميز"] },
          { "title": "الشخصية", "headline": "امنح العلامة روحاً", "desc": "قبل أن يتذكر الناس الشعارات، يتذكرون كيف جعلتهم العلامة يشعرون.", "deliverables": ["شخصية العلامة", "الصوت والنبرة", "نظام الرسائل", "مبادئ التواصل"] },
          { "title": "الهوية", "headline": "ابتكر لغة بصرية", "desc": "الاستراتيجية تصبح مرئية.", "deliverables": ["نظام الهوية", "هندسة الشعار", "نظام الطباعة", "نظام الألوان", "مبادئ الحركة"] },
          { "title": "السرد", "headline": "اروِ قصة تستحق المتابعة", "desc": "كل علامة مؤثرة مدعومة بقصة ذات معنى.", "deliverables": ["قصة العلامة", "قصة المنشأ", "سرد المهمة", "إطار السرد للمحتوى"] },
          { "title": "التجربة", "headline": "تصميم كل تفاعل", "desc": "العلامة التجارية تعيش من خلال التجارب، وليس الأصول.", "deliverables": ["رحلة العميل", "التجربة الرقمية", "تجربة المجتمع", "استراتيجية نقاط الاتصال"] },
          { "title": "التفعيل", "headline": "إحياء العلامة", "desc": "إطلاق العلامة التجارية عبر كل منصة وتفاعل.", "deliverables": ["استراتيجية الإطلاق", "نشر العلامة", "الإطار التسويقي", "توجيه المحتوى"] },
          { "title": "التطور", "headline": "البناء لنمو طويل الأمد", "desc": "أقوى العلامات التجارية مصممة لتتطور.", "deliverables": ["نظام الحوكمة", "إدارة العلامة", "استراتيجية التوسع", "إطار النمو طويل الأمد"] }
        ],`;

// We have two brandIdentity blocks. 
// The first one is at line 171 (English).
code = code.replace(/"brandIdentity": \{/, enInsert);

// Now for Arabic. There's a duplicate brandIdentity at lines 646 and 686. 
// We should remove the one at 646.
// Let's just remove lines 646 to 684. Or simply replace the second matching one.
let arIndex = code.lastIndexOf('"brandIdentity": {');
code = code.substring(0, arIndex) + arInsert + code.substring(arIndex + `"brandIdentity": {`.length);

fs.writeFileSync('src/i18n.js', code);
console.log('patched');
