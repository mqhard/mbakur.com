import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "switch_lang": "عربي",
        "expertise": "Expertise",
        "portfolio": "Portfolio",
        "community": "Community",
        "contact": "Contact"
      },
      "hero": {
        "title1": "MOHAMMED",
        "title2": "BAKUR",
        "subtitle": "CREATIVE DIRECTOR",
        "subtitle_span": "CONTENT CREATOR",
        "btn_explore": "Explore My Expertise",
        "btn_work": "Projects I'm Proud Of"
      },
      "about": {
        "title": "About",
        "title_span": "Q",
        "story_title": "The Story:",
        "story_text": "Visual craftsmanship is not just about making things look good. It's about storytelling that touches the soul, creating a philosophical and poetic narrative through the lens of modern design.",
        "vision_title": "The Vision:",
        "vision_text": "Bridging the gap between raw emotion and digital perfection. Every frame, every pixel, every transition is meticulously calculated to deliver an unforgettable cinematic experience.",
        "experience": "Experience",
        "philosophy_title": "Working Philosophy",
        "philosophy_text": "\"We believe in the power of asymmetrical beauty. Perfection lies in the careful balance of chaos and order. Black is our canvas, magenta is our heartbeat, orange is our spark.\""
      },
      "expertise": {
        "title": "EXPERTISE",
        "creative": "Creative Direction",
        "creative_sub1": "Strategy",
        "creative_sub2": "Storytelling",
        "creative_sub3": "Campaign Direction",
        "production": "Production",
        "prod_sub1": "Pre-production",
        "prod_sub2": "Production",
        "prod_sub3": "Post-production",
        "design": "Design",
        "design_sub1": "Brand Identity",
        "design_sub2": "Motion Design",
        "design_sub3": "Social Design",
        "marketing": "Marketing",
        "mark_sub1": "Content Strategy",
        "mark_sub2": "Social Media",
        "mark_sub3": "Campaigns"
      },
      "portfolio": {
        "title1": "PORT",
        "title2": "FOLIO",
        "cat_all": "All",
        "cat_commercial": "Commercial",
        "cat_social": "Social Media",
        "cat_branding": "Branding",
        "cat_bts": "Behind The Scenes",
        "cat_case": "Case Studies",
        "proj1": "Neon Nights",
        "proj2": "Urban Flow",
        "proj3": "Echo Brand",
        "proj4": "The Making",
        "proj5": "Tech Rev",
        "proj6": "Growth ROI"
      },
      "community": {
        "title1": "THE",
        "title2": "COMMUNITY",
        "desc": "A collective of visionaries, visual craftsmen, and storytellers. We believe in the power of shared knowledge and collaborative growth. Join our philosophy.",
        "item1": "Vision",
        "item2": "Membership",
        "item3": "Benefits",
        "item4": "Resources",
        "btn": "Join The Movement"
      },
      "contact": {
        "title": "LET'S TALK",
        "subtitle": "Project Request • Collaboration • Coffee",
        "ph_name": "YOUR NAME",
        "ph_email": "EMAIL ADDRESS",
        "btn": "SEND MESSAGE"
      },

      "expertisePage": {
        "title": "Expertise",
        "hero_subtitle": "Transforming ideas into high-impact visual experiences through 8+ years of expertise in storytelling and strategic production.",
        "stats": {
          "sales": "23% Sales Growth",
          "partnerships": "Strategic Partnerships",
          "experience": "8+ Years Experience",
          "execution": "End-to-End Execution"
        },
        "matrix_title": "The Technical Matrix",
        "matrix_subtitle": "A Multi-Dimensional Approach to Visual Excellence",
        "matrix_items": [
          { "title": "Creative Direction", "desc": "Leading visual strategies and narrative development to transform concepts into high-impact experiences." },
          { "title": "Cinematography", "desc": "Expert film direction and storytelling with a focus on cinematic quality." },
          { "title": "UI/UX Design", "desc": "Craft modern, scalable digital products for web & mobile with strong usability principles." },
          { "title": "Content Strategy", "desc": "Specialized content for sports, broadcast, medical sector, and market influencers." }
        ],
        "timeline_title": "Professional Path",
        "timeline_items": [
          {
            "role": "Cinematic Sports Broadcast",
            "company": "SSC & Shahid Platform",
            "desc": "Directed high-end cinematic content and developed visual identities aligned with global broadcast standards. Led production teams to ensure world-class output."
          },
          {
            "role": "Production Leadership",
            "company": "Al Athab Media",
            "desc": "Led the full-cycle production from concept to final delivery. Managed diverse creative teams and high-profile advertising campaigns for major global brands like Al Jazeera."
          },
          {
            "role": "Digital Innovation",
            "company": "Somefy Tech Company",
            "desc": "Designed intuitive interfaces for web and mobile. Translated business requirements into scalable, visually engaging digital products with performance-driven UI decisions."
          },
          {
            "role": "Strategic Marketing",
            "company": "Takaful Arabia",
            "desc": "Led market strategies that achieved 23% sales growth in the first year. Built partnerships with 25+ major organizations and developed specialized content for the medical sector."
          },
          {
            "role": "Commercial Photography",
            "company": "Global Brands",
            "desc": "Captured the essence of global brands (Al Arabiya, NCB) using high-end cinematic visuals and advanced post-processing with Sony, RED, and Canon systems."
          }
        ],
        "arsenal_title": "Technological Arsenal",
        "arsenal_desc": "Mastering the tools of creative trade",
        "arsenal_items": [
          { "category": "Post-Production", "tools": "Premiere, After Effects, DaVinci Resolve" },
          { "category": "Design & UI/UX", "tools": "Photoshop, Illustrator, Figma" },
          { "category": "Cinematic Hardware", "tools": "RED Digital Cinema, Sony, Canon" },
          { "category": "Strategy & Management", "tools": "Project Management, Narrative Development" }
        ],
        "footer_title": "Let's build the future of visuals together",
        "back_btn": "Back to Home"
      },
      "creativeDirection": {
        "hero": {
          "text1": "We do not create",
          "text2": "content.",
          "text3": "We engineer",
          "text4": "attention.",
          "desc": "Step into the control room of perception.",
          "desc_span": "Everything you see is calculated.",
          "desc2": "Scroll to initiate sequence.",
          "desc_btn": "Descend"
        },
        "blueprint": {
          "title": "PRE-PRODUCTION",
          "subtitle": "SYSTEM ARCHITECTURE",
          "steps": [
            { "title": "COGNITIVE MAPPING", "desc": "Analyzing target psychology and visual triggers." },
            { "title": "NARRATIVE GEOMETRY", "desc": "Structuring the emotional arc through composition." },
            { "title": "CINEMATIC SYNTHESIS", "desc": "Fusing lighting, motion, and sound into a single weapon." }
          ]
        },
        "projectTracker": {
          "title": "AGILE WORKFLOW",
          "subtitle": "OPERATIONAL TRANSPARENCY & FLEXIBILITY",
          "nodes": {
            "n1": { "title": "IDEA BACKLOG", "status": "INITIATED", "desc": "Capturing the raw spark and defining the project scope." },
            "n2": { "title": "BLUEPRINT STRATEGY", "status": "IN PROGRESS", "desc": "Structuring the narrative into a psychological wireframe." },
            "n3": { "title": "AGILE PRODUCTION", "status": "SPRINTING", "desc": "Iterative cycles of filming, lighting, and synthesis." },
            "n4": { "title": "QUALITY REVIEW", "status": "FEEDBACK LOOP", "desc": "Rigorous filtering and refinement based on visual impact." },
            "n5": { "title": "DEPLOYMENT", "status": "READY FOR LAUNCH", "desc": "Delivering the final cinematic experience to the audience." }
          }
        },
        "manipulation": {
          "bg_text": "PERCEPTION",
          "title1": "MASS",
          "title2": "PSYCHOLOGY",
          "desc": "How design controls focus, emotion, and perception. Every shadow, color shift, and transition is meticulously calculated.",
          "indicator": "[ Hover to Reveal Reality ]"
        },
        "philosophy": {
          "title": "THE PHILOSOPHY",
          "quote1": "Silence speaks",
          "quote1_span": "louder than noise.",
          "quote2": "Darkness defines",
          "quote2_span": "the light.",
          "desc": "We believe in the power of asymmetrical beauty. Perfection lies in the careful balance of chaos and order. Black is our canvas, magenta is our heartbeat."
        },
        "portfolio": {
          "title1": "Director's",
          "title2": "Cut",
          "conflict": "THE CONFLICT",
          "conflict_desc": "In a saturated market, attention is the rarest commodity. The brand needed to break through the noise without compromising its luxury heritage.",
          "vision": "THE VISION",
          "vision_desc": "We engineered a visual narrative built on psychological tension—using darkness to frame the light, and silence to amplify the message.",
          "result": "THE RESULT",
          "result_desc": "A 300% increase in engagement and a redefined brand perception in the digital landscape.",
          "projects": [
            { "title": "The Silent Brand", "cat": "Commercial" },
            { "title": "Echoes of Neon", "cat": "Cinematic" },
            { "title": "Urban Flow", "cat": "Documentary" },
            { "title": "Medical Horizons", "cat": "Corporate" }
          ]
        },
        "footer": {
          "title1": "Now it's your turn",
          "title2": "to step into the frame.",
          "btn": "Initiate Contact",
          "rights": "© 2026 Cinematic Studio Operations"
        }
      },
      "footer": {
        "name": "MOHAMMED",
        "name_span": "BAKUR",
        "desc": "Visual Craftsmanship & Creative Direction",
        "quick": "QUICK LINKS",
        "q1": "Hero Experience",
        "q2": "About Q",
        "q3": "Expertise",
        "q4": "Portfolio",
        "social": "SOCIAL MEDIA",
        "contact": "CONTACT INFO",
        "rights": "© 2026 Mohammed Bakur. All Rights Reserved."
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "switch_lang": "EN",
        "expertise": "الخبرات",
        "portfolio": "الأعمال",
        "community": "المجتمع",
        "contact": "التواصل"
      },
      "hero": {
        "title1": "محمد",
        "title2": "بكر",
        "subtitle": "مخرج إبداعي",
        "subtitle_span": "صانع محتوى",
        "btn_explore": "استكشف خبراتي",
        "btn_work": "مشاريع أفتخر بها"
      },
      "about": {
        "title": "عن",
        "title_span": "Q",
        "story_title": "القصة:",
        "story_text": "الحرفة المرئية لا تقتصر على جعل الأشياء تبدو جيدة فقط. إنها سرد قصصي يلامس الروح، ويخلق رواية فلسفية وشاعرية من خلال عدسة التصميم الحديث.",
        "vision_title": "الرؤية:",
        "vision_text": "سد الفجوة بين المشاعر الخام والكمال الرقمي. كل إطار، كل بكسل، كل انتقال محسوب بدقة لتقديم تجربة سينمائية لا تُنسى.",
        "experience": "الخبرة",
        "philosophy_title": "فلسفة العمل",
        "philosophy_text": "نؤمن بقوة الجمال غير المتماثل. الكمال يكمن في التوازن الدقيق بين الفوضى والنظام. الأسود هو لوحتنا، الماجنتا هو نبضنا، والبرتقالي هو شرارتنا."
      },
      "expertise": {
        "title": "الخبرات",
        "creative": "الإدارة الإبداعية",
        "creative_sub1": "استراتيجية",
        "creative_sub2": "سرد قصصي",
        "creative_sub3": "إدارة الحملات",
        "production": "الإنتاج",
        "prod_sub1": "ما قبل الإنتاج",
        "prod_sub2": "الإنتاج",
        "prod_sub3": "ما بعد الإنتاج",
        "design": "التصميم",
        "design_sub1": "هوية العلامة",
        "design_sub2": "تصميم متحرك",
        "design_sub3": "تصميم سوشيال",
        "marketing": "التسويق",
        "mark_sub1": "استراتيجية المحتوى",
        "mark_sub2": "السوشيال ميديا",
        "mark_sub3": "الحملات الإعلانية"
      },
      "portfolio": {
        "title1": "معرض",
        "title2": "الأعمال",
        "cat_all": "الكل",
        "cat_commercial": "تجاري",
        "cat_social": "سوشيال ميديا",
        "cat_branding": "علامات تجارية",
        "cat_bts": "خلف الكواليس",
        "cat_case": "دراسات حالة",
        "proj1": "ليالي النيون",
        "proj2": "التدفق الحضري",
        "proj3": "علامة إيكو",
        "proj4": "كواليس العمل",
        "proj5": "ثورة التقنية",
        "proj6": "عائد النمو"
      },
      "community": {
        "title1": "الـ",
        "title2": "مُجتمع",
        "desc": "مجموعة من أصحاب الرؤى، وصناع البصريات، ورواة القصص. نؤمن بقوة المعرفة المشتركة والنمو الجماعي. انضم إلى فلسفتنا.",
        "item1": "الرؤية",
        "item2": "العضوية",
        "item3": "الفوائد",
        "item4": "الموارد",
        "btn": "انضم للحركة"
      },
      "contact": {
        "title": "لنتحدث",
        "subtitle": "طلب مشروع • تعاون • قهوة",
        "ph_name": "الاسم الكريم",
        "ph_email": "البريد الإلكتروني",
        "btn": "إرسال الرسالة"
      },

      "expertisePage": {
        "title": "الخبرات",
        "hero_subtitle": "تحويل الأفكار إلى تجارب بصرية عالية التأثير من خلال خبرة تمتد لأكثر من 8 سنوات في السرد القصصي والإنتاج الاستراتيجي.",
        "stats": {
          "sales": "نمو مبيعات بنسبة 23%",
          "partnerships": "شراكات استراتيجية",
          "experience": "+8 سنوات خبرة",
          "execution": "تنفيذ متكامل (End-to-End)"
        },
        "matrix_title": "المصفوفة الفنية",
        "matrix_subtitle": "نهج متعدد الأبعاد لتحقيق التميز البصري",
        "matrix_items": [
          { "title": "الإدارة الإبداعية", "desc": "قيادة الاستراتيجيات البصرية وتطوير السرد القصصي لتحويل المفاهيم إلى تجارب ذات تأثير عالٍ." },
          { "title": "التصوير السينمائي", "desc": "إخراج أفلام احترافي وسرد قصصي مع التركيز على الجودة السينمائية." },
          { "title": "تصميم UI/UX", "desc": "صياغة منتجات رقمية حديثة وقابلة للتطوير لتطبيقات الويب والموبايل مع تطبيق مبادئ سهولة الاستخدام." },
          { "title": "استراتيجية المحتوى", "desc": "محتوى متخصص للرياضة، البث التلفزيوني، القطاع الطبي، والمؤثرين في السوق." }
        ],
        "timeline_title": "المسار المهني",
        "timeline_items": [
          {
            "role": "البث الرياضي السينمائي",
            "company": "قنوات SSC ومنصة شاهد",
            "desc": "إخراج محتوى سينمائي عالي الجودة وتطوير هويات بصرية تتماشى مع معايير البث العالمية، مع الإشراف على فرق الإنتاج لضمان مخرجات عالمية المستوى."
          },
          {
            "role": "قيادة الإنتاج",
            "company": "شركة العذب للإنتاج الإعلامي",
            "desc": "إدارة دورة الإنتاج الكاملة من الفكرة إلى التسليم النهائي لكبرى العلامات التجارية. قيادة فرق إبداعية متنوعة وحملات إعلانية بارزة لعملاء مثل شبكة الجزيرة."
          },
          {
            "role": "الابتكار الرقمي",
            "company": "Somefy Tech Company",
            "desc": "تصميم بنية UI/UX تفاعلية للويب والموبايل وتطوير أنظمة قابلة للتوسع. بناء تصميمات مبنية على الأداء لتعزيز رحلة وتفاعل المستخدم."
          },
          {
            "role": "التسويق والمحتوى المتخصص",
            "company": "تكافل العربية",
            "desc": "قيادة استراتيجيات سوق حققت 23% نمو بالمبيعات خلال العام الأول، بناء وإدارة شراكات مع أكثر من 25 مؤسسة، وتطوير محتوى متخصص للقطاع الطبي."
          },
          {
            "role": "التصوير التجاري",
            "company": "العلامات التجارية العالمية",
            "desc": "التقاط جوهر العلامات التجارية الكبرى (العربية، NCB) بتقنيات متقدمة (Sony, RED, Canon) وإخراج سينمائي في مواقع التصوير والاستوديوهات."
          }
        ],
        "arsenal_title": "الترسانة التكنولوجية",
        "arsenal_desc": "إتقان أدوات المهنة الإبداعية",
        "arsenal_items": [
          { "category": "ما بعد الإنتاج", "tools": "Premiere, After Effects, DaVinci Resolve" },
          { "category": "تصميم UI/UX", "tools": "Photoshop, Illustrator, Figma" },
          { "category": "المعدات السينمائية", "tools": "RED Digital Cinema, Sony, Canon" },
          { "category": "الاستراتيجية والإدارة", "tools": "إدارة المشاريع، تطوير السرد القصصي" }
        ],
        "footer_title": "دعنا نبني مستقبل البصريات معاً",
        "back_btn": "العودة للرئيسية"
      },
      "creativeDirection": {
        "hero": {
          "text1": "نحن لا نصنع",
          "text2": "المحتوى.",
          "text3": "نحن نهندس",
          "text4": "الانتباه.",
          "desc": "ادخل إلى غرفة التحكم بالإدراك.",
          "desc_span": "كل ما تراه هنا محسوب بدقة.",
          "desc2": "مرر للأسفل لبدء التسلسل.",
          "desc_btn": "النزول"
        },
        "blueprint": {
          "title": "ما قبل الإنتاج",
          "subtitle": "هندسة النظام",
          "steps": [
            { "title": "الخريطة المعرفية", "desc": "تحليل سيكولوجية الجمهور والمحفزات البصرية." },
            { "title": "هندسة السرد", "desc": "بناء القوس العاطفي من خلال التكوين المرئي." },
            { "title": "التوليف السينمائي", "desc": "دمج الإضاءة، الحركة، والصوت في سلاح واحد." }
          ]
        },
        "projectTracker": {
          "title": "مسار العمل المرن",
          "subtitle": "شفافية التشغيل ومرونة التنفيذ",
          "nodes": {
            "n1": { "title": "تكوين الفكرة", "status": "تم البدء", "desc": "التقاط الشرارة الأولى وتحديد نطاق المشروع بدقة." },
            "n2": { "title": "هندسة الاستراتيجية", "status": "قيد التشغيل", "desc": "بناء الهيكل الأولي والسرد القصصي السيكولوجي." },
            "n3": { "title": "التنفيذ المرن", "status": "دورات متكررة", "desc": "عمليات إنتاج مرنة تدمج التصوير والإضاءة بشكل متكرر." },
            "n4": { "title": "المراجعة والفلترة", "status": "تغذية راجعة", "desc": "صقل وتنقيح العمل بناءً على تقييم التأثير البصري." },
            "n5": { "title": "الإطلاق والوصول", "status": "جاهز للإطلاق", "desc": "تسليم التجربة السينمائية النهائية للجمهور المستهدف." }
          }
        },
        "manipulation": {
          "bg_text": "الإدراك",
          "title1": "سيكولوجية",
          "title2": "الجماهير",
          "desc": "كيف يتحكم التصميم في التركيز، المشاعر، والإدراك. كل ظل، كل انتقال لوني، محسوب ومدروس بعناية.",
          "indicator": "[ مرر الماوس لكشف الحقيقة ]"
        },
        "philosophy": {
          "title": "الفلسفة الفنية",
          "quote1": "الصمت أعلى صوتاً",
          "quote1_span": "من الضجيج.",
          "quote2": "الظلام هو من",
          "quote2_span": "يُعرّف الضوء.",
          "desc": "نؤمن بقوة الجمال غير المتماثل. الكمال يكمن في التوازن الدقيق بين الفوضى والنظام. اللون الأسود هو لوحتنا، والماجنتا هو نبضنا."
        },
        "portfolio": {
          "title1": "نسخة",
          "title2": "المخرج",
          "conflict": "الصراع",
          "conflict_desc": "في سوق مشبع، الانتباه هو العملة الأندر. احتاجت العلامة التجارية لاختراق الضجيج دون المساس بتراثها الفاخر.",
          "vision": "الرؤية",
          "vision_desc": "صممنا سرداً بصرياً مبنياً على التوتر النفسي - استخدمنا الظلام لإبراز النور، والصمت لتضخيم الرسالة.",
          "result": "النتيجة",
          "result_desc": "زيادة بنسبة 300٪ في التفاعل وإعادة تعريف لمكانة العلامة التجارية في المشهد الرقمي.",
          "projects": [
            { "title": "العلامة الصامتة", "cat": "تجاري" },
            { "title": "أصداء النيون", "cat": "سينمائي" },
            { "title": "التدفق الحضري", "cat": "وثائقي" },
            { "title": "آفاق طبية", "cat": "مؤسسي" }
          ]
        },
        "footer": {
          "title1": "الآن حان دورك",
          "title2": "للدخول إلى الإطار.",
          "btn": "بدء الاتصال",
          "rights": "© 2026 عمليات الاستوديو السينمائي"
        }
      },
      "footer": {
        "name": "محمد",
        "name_span": "بكر",
        "desc": "الحرفة المرئية والإدارة الإبداعية",
        "quick": "روابط سريعة",
        "q1": "الرئيسية",
        "q2": "عن Q",
        "q3": "الخبرات",
        "q4": "الأعمال",
        "social": "السوشيال ميديا",
        "contact": "معلومات التواصل",
        "rights": "© 2026 محمد بكر. جميع الحقوق محفوظة."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
