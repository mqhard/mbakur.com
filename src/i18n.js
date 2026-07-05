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
      
      "brand_gallery": {
        "title": "Brand Gallery",
        "subtitle": "Explore Our Selected Work",
        "specifications": "Brand Specifications",
        "primary_typeface": "Primary Typeface",
        "secondary_typeface": "Secondary Typeface",
        "industry_year": "Industry / Year",
        "identity_elements": "Identity Elements",
        "color_system": "Color System",
        "brand_essence": "Brand Essence",
        "explore_archive": "Explore The Archive",
        "read_case_study": "Read Case Study",
        "back": "Back"
      },
      "hero": {
        "title1": "MOHAMMED",
        "title2": "BAKUR",
        "subtitle": "CREATIVE DIRECTOR",
        "subtitle_span": "CONTENT CREATOR",
        "btn_explore": "Creative Management",
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
        "cat_selected": "Selected Works",
        "cat_commercial": "Commercial Projects",
        "cat_photography": "Photography",
        "cat_videography": "Videography",
        "cat_cinematography": "Cinematography",
        "cat_brandidentity": "Design & Branding",
        "cat_creative": "Creative Direction",
        "cat_postproduction": "Post Production",
        "cat_campaigns": "Campaigns",
        "cat_crm": "Content CRM & Engagement",
        "cat_case": "Case Studies",
        "cat_ai": "AI Production",
        "cat_motion": "Motion Graphics",
        "cat_photoediting": "Photo Editing",
        "cat_videoediting": "Video Editing",
        "cat_colorgrading": "Color Grading",
        "cat_directing": "Directing",
        "proj_global": "Global Tech Commercial",
        "proj_summer": "Summer Collection",
        "proj_silent": "The Silent Echo",
        "proj_modern": "Web & App Design",
        "proj_immersive": "Immersive Web GL",
        "proj_growth": "Growth Analysis 2025",
        "proj_brand": "Brand Storytelling",
        "proj_auto": "Automated Workflows",
        "proj_dummy_photo": "Photography Excellence",
        "proj_dummy_cinematic": "Cinematic Vision",
        "proj_dummy_motion": "Motion Graphics Project",
        "proj_dummy_web": "Modern Web Interface",
        "proj_dummy_photoedit": "Photo Editing Project",
        "proj_dummy_videoedit": "Video Editing Project",
        "proj_dummy_color": "Color Grading Project",
        "proj_dummy_directing": "Directing Project",
        "proj_dummy_ai": "AI Generated Worlds",
        "proj_brand_1": "Brand Identity Design",
        "proj_brand_2": "Advertising & Digital Design",
        "proj_brand_3": "3D Visualization & Modeling"
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
        "ph_subject": "SUBJECT SUMMARY",
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
      
            "brandIdentity": {
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
        ],
        "hero": {
          "title1": "Enter the",
          "title2": "Brand Universe.",
          "subtitle": "Where identities are not drawn, but engineered for civilization.",
          "scroll": "Explore the Cosmos"
        },
        "intro": {
          "text": "In a market shifting at the speed of light, an identity must be a gravitational force. We craft monumental brands that echo through time, deeply rooted in the heritage of the Saudi civilization yet soaring into the future of global innovation."
        },
        "projects": [
          {
            "id": "vision",
            "client": "Visionary Tech 2030",
            "category": "Technology & AI",
            "desc": "A dynamic identity for a national AI initiative. The logo is a living entity, constantly shifting to represent continuous data flow and the Kingdom's leap into future technologies.",
            "img": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          },
          {
            "id": "realestate",
            "client": "Najd Luxury Residences",
            "category": "Luxury Real Estate",
            "desc": "Blending the timeless geometry of Najdi architecture with ultra-modern minimalism. An identity that speaks of prestige, vast spaces, and structural supremacy in Riyadh.",
            "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          },
          {
            "id": "tourism",
            "client": "Red Sea Horizons",
            "category": "Tourism & Hospitality",
            "desc": "An organic, fluid identity inspired by the pristine waves of the Red Sea and the warmth of Arabian hospitality. Designed to attract global wanderers.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ,
          {
            "id": "sports",
            "client": "Saudi Sports Federation",
            "category": "Sports & Events",
            "desc": "A vibrant, energetic brand identity capturing the momentum and passion of local and international sports events hosted in the Kingdom.",
            "img": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
          },
          {
            "id": "finance",
            "client": "FinTech Capital",
            "category": "Finance & Banking",
            "desc": "A sleek, trustworthy identity for a leading financial institution. Merging traditional banking security with modern digital agility.",
            "img": "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80"
          },
          {
            "id": "culture",
            "client": "Diriyah Cultural Hub",
            "category": "Arts & Culture",
            "desc": "An identity that celebrates the rich historical roots of Diriyah, utilizing traditional patterns with a contemporary minimalist approach.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ,
          {
            "id": "sports",
            "client": "الاتحاد السعودي للرياضة",
            "category": "الرياضة والفعاليات",
            "desc": "هوية نابضة بالحياة تعكس الزخم والشغف للفعاليات الرياضية المحلية والدولية التي تستضيفها المملكة.",
            "img": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
          },
          {
            "id": "finance",
            "client": "فينتك كابيتال",
            "category": "المالية والبنوك",
            "desc": "هوية أنيقة وموثوقة لمؤسسة مالية رائدة، تدمج بين الأمان المصرفي التقليدي والمرونة الرقمية الحديثة.",
            "img": "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80"
          },
          {
            "id": "culture",
            "client": "مركز الدرعية الثقافي",
            "category": "الفنون والثقافة",
            "desc": "هوية تحتفي بالجذور التاريخية الغنية للدرعية، باستخدام الأنماط التقليدية مع نهج عصري مبسط.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ],
        "footer": {
          "title": "Ready to launch your universe?",
          "btn": "Initiate Sequence",
          "back": "Return to Portfolio"
        }
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
        "visualDesigns": {
          "title1": "Creative",
          "title2": "Visuals",
          "projects": [
            { "title": "Abstract Dimensions", "cat": "3D Design" },
            { "title": "Neon Typography", "cat": "Typography" },
            { "title": "Glassmorphism UI", "cat": "Interface" },
            { "title": "Brand Evolution", "cat": "Identity" }
          ]
        },
        "creativeTech": {
          "title": "CREATIVE & TECH",
          "subtitle": "INNOVATION",
          "desc": "Fusing visual artistry with technological precision to build digital identities that live, breathe, and evolve.",
          "f1_title": "Visual Innovation",
          "f1_desc": "Creating dynamic aesthetics that push the boundaries of modern design.",
          "f2_title": "Technical Innovation",
          "f2_desc": "Architecting scalable, high-performance systems that bring designs to life.",
          "f3_title": "Creative Identity",
          "f3_desc": "Forging a unique DNA for brands through cohesive storytelling and engineering."
        },
        "geometricGallery": {
          "title": "INNOVATION",
          "subtitle": "FROM & TO",
          "desc": "A diverse exhibition of technical and visual breakthroughs, structured in a comfortable geometric flow.",
          "items": [
            { "title": "Fluid Gradients", "cat": "Visual" },
            { "title": "Physics Animations", "cat": "Technical" },
            { "title": "Asymmetric Grids", "cat": "Visual" },
            { "title": "Dynamic Routing", "cat": "Technical" },
            { "title": "Brand DNA", "cat": "Identity" },
            { "title": "Data Visualization", "cat": "Technical" }
          ]
        },
        "footer": {
          "title1": "Now it's your turn",
          "title2": "to step into the frame.",
          "btn": "Initiate Contact",
          "rights": "© 2026 Cinematic Studio Operations"
        }
      },
      "proudProjects": {
        "hero_title": "TECHNOLOGICAL ARSENAL",
        "hero_subtitle": "Mastering the tools of creative trade",
        "featured_title": "FEATURED PROJECTS",
        "featured_subtitle": "A showcase of future works and digital innovations.",
        "arsenal_title": "THE ARSENAL",
        "arsenal_subtitle": "Core categories driving the creative process.",
        "categories": [
          { "title": "Post-Production", "desc": "Reviews, advanced tutorials, and case studies.", "tools": ["Premiere Pro", "After Effects", "DaVinci Resolve"] },
          { "title": "Design & UI/UX", "desc": "Design principles, trends, and UI/UX tutorials.", "tools": ["Photoshop", "Illustrator", "Figma"] },
          { "title": "Cinematic Hardware", "desc": "Camera reviews, gear comparisons, and lighting techniques.", "tools": ["RED", "Sony", "Canon"] },
          { "title": "Strategy & Management", "desc": "Creative project management and narrative development.", "tools": ["Project Management", "Narrative Development"] }
        ],
        "blog_title": "LATEST ARTICLES",
        "blog_subtitle": "Deep dives, analyses, and industry trends.",
        "blog_items": [
          { "title": "The Future of AI in Video Editing", "date": "Oct 24, 2026" },
          { "title": "Mastering UI/UX Micro-Interactions", "date": "Nov 12, 2026" },
          { "title": "Cinematic Lighting on a Budget", "date": "Dec 05, 2026" }
        ],
        "sandbox_title": "THE SANDBOX",
        "sandbox_subtitle": "Daily experiments, code snippets, and behind the scenes.",
        "sandbox_btn": "Follow my experiments",
        "cta_title": "READY TO EXPLORE?",
        "cta_subtitle": "Join the community and master the creative trade.",
        "cta_btn": "SUBSCRIBE NOW"
      },
      "footer": {
        "name": "MOHAMMED",
        "name_span": "BAKUR",
        "desc": "Visual Art & Creative Direction",
        "quick": "QUICK LINKS",
        "q1": "Hero Experience",
        "q2": "About Q",
        "q3": "Expertise",
        "q4": "Portfolio",
        "social": "SOCIAL MEDIA",
        "contact": "CONTACT INFO",
        "rights": "© 2026 Mohammed Bakur. All Rights Reserved."
      },
      "creativeCommandCenter": {
        "panels": {
          "copywriting": {
            "title": "COPYWRITING",
            "headline": "Words Create Movements",
            "description": "Crafting contagious messages that shape perception and behavior.",
            "psychologicalFunction": "Transforming ideas into memorable narratives.",
            "profile": {
              "about": "We engineer language to bypass rational defense mechanisms.",
              "methods": "Linguistic Anchoring, Narrative Framing, Cognitive Dissonance",
              "specializations": ["Brand Voice", "Scriptwriting", "Conversion Copy"],
              "executionProcess": "Research -> Insight -> Ideation -> Refinement -> Impact",
              "audienceImpact": "High retention and organic sharing."
            },
            "projects": [
              { "name": "The Silent Brand", "desc": "A purely visual narrative." },
              { "name": "Medical Horizons", "desc": "Complex systems simplified." }
            ]
          },
          "art_direction": {
            "title": "ART DIRECTION",
            "headline": "People Think In Images",
            "description": "Designing visual systems that influence attention and emotion.",
            "psychologicalFunction": "Guiding perception through visual language.",
            "profile": {
              "about": "Translating strategic intent into visceral visual systems.",
              "methods": "Visual Hierarchy, Color Psychology, Gestalt Principles",
              "specializations": ["Brand Identity", "UI/UX Design", "Visual Strategy"],
              "executionProcess": "Concept -> Moodboard -> Prototyping -> Refinement",
              "audienceImpact": "Immediate emotional resonance."
            },
            "projects": [
              { "name": "Echoes of Neon", "desc": "Cyberpunk aesthetic system." },
              { "name": "Glassmorphism UI", "desc": "Next-gen interfaces." }
            ]
          },
          "multimedia": {
            "title": "MULTIMEDIA PRODUCTION",
            "headline": "Emotion Travels Faster Than Logic",
            "description": "Using motion, sound and storytelling to shape emotional response.",
            "psychologicalFunction": "Controlling emotional rhythm.",
            "profile": {
              "about": "Combining sensory inputs to create immersive realities.",
              "methods": "Rhythmic Editing, Sound Design, Motion Dynamics",
              "specializations": ["Film Production", "Motion Graphics", "Audio Engineering"],
              "executionProcess": "Pre-production -> Production -> Post -> Mastering",
              "audienceImpact": "Visceral physiological response."
            },
            "projects": [
              { "name": "Urban Flow", "desc": "Documentary motion." },
              { "name": "Sonic Landscapes", "desc": "Audio-visual synchronization." }
            ]
          },
          "strategy": {
            "title": "CREATIVE STRATEGY",
            "headline": "Influence Is Designed",
            "description": "Building systems that transform attention into action.",
            "psychologicalFunction": "Creating collective movement and engagement.",
            "profile": {
              "about": "Architecting the invisible systems that drive human behavior.",
              "methods": "Behavioral Economics, Data Modeling, Cultural Mapping",
              "specializations": ["Campaign Strategy", "Growth Architecture", "Community Design"],
              "executionProcess": "Audit -> Hypothesis -> Testing -> Scaling",
              "audienceImpact": "Sustainable behavioral shifts."
            },
            "projects": [
              { "name": "Brand Evolution", "desc": "Systemic reinvention." },
              { "name": "Market Penetration", "desc": "Calculated growth." }
            ]
          }
        },
        "ui": {
          "close": "CLOSE",
          "explore": "Explore Experience",
          "about": "ABOUT",
          "psychRole": "PSYCHOLOGICAL ROLE",
          "methods": "METHODS",
          "execution": "EXECUTION",
          "featuredProjects": "FEATURED PROJECTS",
          "psychFunctionLabel": "Psychological Function"
        }
      }
    }
  },
  ar: {
    translation: {

      "brand_gallery": {
        "title": "معرض العلامات التجارية",
        "subtitle": "استكشف أعمالنا المختارة",
        "specifications": "مواصفات العلامة",
        "primary_typeface": "الخط الأساسي",
        "secondary_typeface": "الخط الثانوي",
        "industry_year": "القطاع / السنة",
        "identity_elements": "عناصر الهوية",
        "color_system": "نظام الألوان",
        "brand_essence": "جوهر العلامة",
        "explore_archive": "استكشف الأرشيف",
        "read_case_study": "اقرأ دراسة الحالة",
        "back": "رجوع"
      },
      "nav": {
        "switch_lang": "EN",
        "expertise": "الخبرات",
        "portfolio": "الأعمال",
        "community": "المجتمع",
        "contact": "التواصل"
      },
      "hero": {
        "title1": "مــحــمــد",
        "title2": "بـــكـــر",
        "subtitle": "مخرج إبداعي",
        "subtitle_span": "صانع محتوى",
        "btn_explore": "الإدارة الإبداعية",
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
        "title1": "معرض ",
        "title2": "الأعمال",
        "cat_all": "الكل",
        "cat_selected": "الأعمال المختارة",
        "cat_commercial": "مشاريع تجارية",
        "cat_photography": "التصوير الفوتغرافي",
        "cat_videography": "تصوير الفيديو",
        "cat_cinematography": "التصوير السينمائي",
        "cat_brandidentity": "Design & Branding",
        "cat_creative": "الإدارة الإبداعية",
        "cat_postproduction": "ما بعد الإنتاج",
        "cat_campaigns": "الحملات الإعلانية",
        "cat_crm": "محتوى التفاعل وعلاقات العملاء",
        "cat_case": "دراسات الحالة",
        "cat_ai": "الإنتاج بالذكاء الاصطناعي",
        "cat_motion": "الموشن جرافيك",
        "cat_photoediting": "تعديل الصور",
        "cat_videoediting": "تعديل الفيديو",
        "cat_colorgrading": "تعديل الألوان",
        "cat_directing": "الإخراج",
        "proj_global": "إعلان تقني عالمي",
        "proj_summer": "المجموعة الصيفية",
        "proj_silent": "الصدى الصامت",
        "proj_modern": "تصميم مواقع وتطبيقات",
        "proj_immersive": "تجربة ويب غامرة",
        "proj_growth": "تحليل النمو ٢٠٢٥",
        "proj_brand": "السرد القصصي للعلامة",
        "proj_auto": "سير العمل المؤتمت",
        "proj_dummy_photo": "تميز فوتوغرافي",
        "proj_dummy_cinematic": "رؤية سينمائية",
        "proj_dummy_motion": "مشروع الموشن جرافيك",
        "proj_dummy_web": "واجهة ويب حديثة",
        "proj_dummy_photoedit": "مشروع تعديل الصور",
        "proj_dummy_videoedit": "مشروع تعديل الفيديو",
        "proj_dummy_color": "مشروع تعديل الألوان",
        "proj_dummy_directing": "مشروع الإخراج",
        "proj_dummy_ai": "عوالم بالذكاء الاصطناعي",
        "proj_brand_1": "تصميم الهوية التجارية",
        "proj_brand_2": "التصميم الإعلاني والرقمي",
        "proj_brand_3": "التجسيد والنمذجة ثلاثية الأبعاد"
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
        "ph_subject": "ملخص الموضوع",
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
      
      "brandIdentity": {
        "hero": {
          "title1": "Enter the",
          "title2": "Brand Universe.",
          "subtitle": "Where identities are not drawn, but engineered for civilization.",
          "scroll": "Explore the Cosmos"
        },
        "intro": {
          "text": "In a market shifting at the speed of light, an identity must be a gravitational force. We craft monumental brands that echo through time, deeply rooted in the heritage of the Saudi civilization yet soaring into the future of global innovation."
        },
        "projects": [
          {
            "id": "vision",
            "client": "Visionary Tech 2030",
            "category": "Technology & AI",
            "desc": "A dynamic identity for a national AI initiative. The logo is a living entity, constantly shifting to represent continuous data flow and the Kingdom's leap into future technologies.",
            "img": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          },
          {
            "id": "realestate",
            "client": "Najd Luxury Residences",
            "category": "Luxury Real Estate",
            "desc": "Blending the timeless geometry of Najdi architecture with ultra-modern minimalism. An identity that speaks of prestige, vast spaces, and structural supremacy in Riyadh.",
            "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          },
          {
            "id": "tourism",
            "client": "Red Sea Horizons",
            "category": "Tourism & Hospitality",
            "desc": "An organic, fluid identity inspired by the pristine waves of the Red Sea and the warmth of Arabian hospitality. Designed to attract global wanderers.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ],
        "footer": {
          "title": "Ready to launch your universe?",
          "btn": "Initiate Sequence",
          "back": "Return to Portfolio"
        }
      },
      
            "brandIdentity": {
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
        ],
        "hero": {
          "title1": "ادخل إلى",
          "title2": "عالم الهوية.",
          "subtitle": "حيث لا تُرسم الهويات، بل تُهندس لتكون إرثاً حضارياً.",
          "scroll": "استكشف الفضاء"
        },
        "intro": {
          "text": "في سوق يتغير بسرعة الضوء، يجب أن تكون هويتك قوة جاذبية لا تقاوم. نحن نصنع علامات تجارية أيقونية يتردد صداها عبر الزمن، متجذرة في تراث الحضارة السعودية ومحلقة نحو أفق الابتكار العالمي."
        },
        "projects": [
          {
            "id": "vision",
            "client": "رؤية للتقنيات 2030",
            "category": "التقنية والذكاء الاصطناعي",
            "desc": "هوية ديناميكية لمبادرة وطنية للذكاء الاصطناعي. الشعار هو كيان حي يتغير باستمرار ليعكس تدفق البيانات وقفزة المملكة نحو تكنولوجيا المستقبل.",
            "img": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          },
          {
            "id": "realestate",
            "client": "نجد للإقامات الفاخرة",
            "category": "العقارات الفاخرة",
            "desc": "دمج الهندسة المعمارية النجدية الخالدة مع بساطة الحداثة المطلقة. هوية تتحدث عن الهيبة، المساحات الشاسعة، والسيادة الهيكلية في قلب الرياض.",
            "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          },
          {
            "id": "tourism",
            "client": "آفاق البحر الأحمر",
            "category": "السياحة والضيافة",
            "desc": "هوية عضوية وانسيابية مستوحاة من الأمواج البكر للبحر الأحمر ودفء الضيافة العربية. صُممت خصيصاً لجذب المسافرين من جميع أنحاء العالم.",
            "img": "https://images.unsplash.com/photo-1596395219415-9c32145e6eb1?auto=format&fit=crop&q=80"
          }
        ],
        "footer": {
          "title": "جاهز لإطلاق عالمك؟",
          "btn": "بدء التسلسل",
          "back": "العودة للأعمال"
        }
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
        "visualDesigns": {
          "title1": "تصاميم",
          "title2": "مرئية إبداعية",
          "projects": [
            { "title": "أبعاد مجردة", "cat": "تصميم ثلاثي الأبعاد" },
            { "title": "طباعة نيون", "cat": "فن الطباعة" },
            { "title": "واجهة زجاجية", "cat": "واجهة مستخدم" },
            { "title": "تطور العلامة", "cat": "هوية بصرية" }
          ]
        },
        "creativeTech": {
          "title": "الإبداع البصري",
          "subtitle": "والتقني",
          "desc": "دمج الفن البصري بالدقة التكنولوجية لبناء هويات رقمية حية تتنفس وتتطور باستمرار.",
          "f1_title": "الابتكار البصري",
          "f1_desc": "خلق جماليات تفاعلية تدفع حدود التصميم الحديث وتكسر القواعد التقليدية.",
          "f2_title": "الابتكار التقني",
          "f2_desc": "هندسة أنظمة رقمية عالية الأداء وقابلة للتوسع تبث الحياة في التصاميم.",
          "f3_title": "بناء الهوية الإبداعية",
          "f3_desc": "صياغة حمض نووي (DNA) فريد للعلامات التجارية عبر دمج السرد القصصي بالبرمجة المتقدمة."
        },
        "geometricGallery": {
          "title": "الإبداع",
          "subtitle": "من وإلى",
          "desc": "معرض متنوع للإبداعات الفنية والتقنية، مبني على نسق هندسي يوفر تجربة مستخدم في غاية الراحة.",
          "items": [
            { "title": "تدرجات لونية مرنة", "cat": "بصري" },
            { "title": "فيزياء حركية", "cat": "تقني" },
            { "title": "شبكات لا متماثلة", "cat": "بصري" },
            { "title": "توجيه ديناميكي", "cat": "تقني" },
            { "title": "بصمة العلامة", "cat": "هوية" },
            { "title": "تصور البيانات", "cat": "تقني" }
          ]
        },
        "footer": {
          "title1": "الآن حان دورك",
          "title2": "للدخول إلى الإطار.",
          "btn": "بدء الاتصال",
          "rights": "© 2026 عمليات الاستوديو السينمائي"
        }
      },
      "proudProjects": {
        "hero_title": "الترسانة التقنية",
        "hero_subtitle": "إتقان أدوات التجارة الإبداعية",
        "featured_title": "مشاريع مميزة",
        "featured_subtitle": "عرض لأعمال مستقبلية وابتكارات رقمية.",
        "arsenal_title": "الترسانة التقنية",
        "arsenal_subtitle": "الفئات الأساسية التي تقود العملية الإبداعية.",
        "categories": [
          { "title": "ما بعد الإنتاج", "desc": "مراجعات، دروس متقدمة، ودراسات حالة.", "tools": ["Premiere Pro", "After Effects", "DaVinci Resolve"] },
          { "title": "التصميم وتجربة المستخدم", "desc": "مبادئ التصميم، الاتجاهات، ودروس UI/UX.", "tools": ["Photoshop", "Illustrator", "Figma"] },
          { "title": "الأجهزة السينمائية", "desc": "مراجعات الكاميرات، مقارنات المعدات، وتقنيات الإضاءة.", "tools": ["RED", "Sony", "Canon"] },
          { "title": "الاستراتيجية والإدارة", "desc": "إدارة المشاريع الإبداعية وتطوير السرد القصصي.", "tools": ["Project Management", "Narrative Development"] }
        ],
        "blog_title": "أحدث المقالات",
        "blog_subtitle": "تحليلات معمقة، آراء، واتجاهات الصناعة.",
        "blog_items": [
          { "title": "مستقبل الذكاء الاصطناعي في تحرير الفيديو", "date": "٢٤ أكتوبر ٢٠٢٦" },
          { "title": "إتقان التفاعلات الدقيقة في UI/UX", "date": "١٢ نوفمبر ٢٠٢٦" },
          { "title": "الإضاءة السينمائية بميزانية محدودة", "date": "٠٥ ديسمبر ٢٠٢٦" }
        ],
        "sandbox_title": "مختبر التجارب",
        "sandbox_subtitle": "تجارب يومية، لقطات سريعة، وما وراء الكواليس.",
        "sandbox_btn": "تابع تجاربي",
        "cta_title": "مستعد للاستكشاف؟",
        "cta_subtitle": "انضم للمجتمع وأتقن المهنة الإبداعية.",
        "cta_btn": "اشترك الآن"
      },
      "footer": {
        "name": "مــحــمــد",
        "name_span": "بـــكـــر",
        "desc": "فن بصري وإدارة إبداعية",
        "quick": "روابط سريعة",
        "q1": "الرئيسية",
        "q2": "عن Q",
        "q3": "الخبرات",
        "q4": "الأعمال",
        "social": "السوشيال ميديا",
        "contact": "معلومات التواصل",
        "rights": "© 2026 مــحــمــد بـــكـــر. جميع الحقوق محفوظة."
      },
      "creativeCommandCenter": {
        "panels": {
          "copywriting": {
            "title": "المحتوى الإعلاني",
            "headline": "الكلمات تصنع الحركات",
            "description": "صياغة رسائل معدية تشكل الإدراك والسلوك.",
            "psychologicalFunction": "تحويل الأفكار إلى روايات لا تُنسى.",
            "profile": {
              "about": "نحن نهندس اللغة لتجاوز آليات الدفاع العقلانية.",
              "methods": "الارتساء اللغوي، التأطير السردي، التنافر المعرفي",
              "specializations": ["صوت العلامة", "كتابة السيناريو", "نصوص التحويل"],
              "executionProcess": "بحث -> رؤية -> عصف ذهني -> تنقيح -> تأثير",
              "audienceImpact": "احتفاظ عالٍ ومشاركة عضوية."
            },
            "projects": [
              { "name": "العلامة الصامتة", "desc": "سرد بصري بحت." },
              { "name": "آفاق طبية", "desc": "تبسيط الأنظمة المعقدة." }
            ]
          },
          "art_direction": {
            "title": "الإدارة الفنية",
            "headline": "الناس تفكر بالصور",
            "description": "تصميم أنظمة بصرية تؤثر على الانتباه والمشاعر.",
            "psychologicalFunction": "توجيه الإدراك عبر اللغة البصرية.",
            "profile": {
              "about": "ترجمة النوايا الاستراتيجية إلى أنظمة بصرية غريزية.",
              "methods": "التسلسل الهرمي البصري، سيكولوجية الألوان، مبادئ جشطالت",
              "specializations": ["هوية العلامة", "تصميم UI/UX", "الاستراتيجية البصرية"],
              "executionProcess": "فكرة -> لوحة مزاج -> نمذجة -> تنقيح",
              "audienceImpact": "صدى عاطفي فوري."
            },
            "projects": [
              { "name": "أصداء النيون", "desc": "نظام سايبربانك جمالي." },
              { "name": "واجهة زجاجية", "desc": "واجهات الجيل القادم." }
            ]
          },
          "multimedia": {
            "title": "متعدد الوسائط",
            "headline": "المشاعر تسافر أسرع من المنطق",
            "description": "استخدام الحركة، الصوت والسرد القصصي لتشكيل استجابة عاطفية.",
            "psychologicalFunction": "التحكم في الإيقاع العاطفي.",
            "profile": {
              "about": "دمج المدخلات الحسية لخلق حقائق غامرة.",
              "methods": "المونتاج الإيقاعي، تصميم الصوت، ديناميكيات الحركة",
              "specializations": ["الإنتاج السينمائي", "الموشن جرافيك", "هندسة الصوت"],
              "executionProcess": "ما قبل الإنتاج -> الإنتاج -> ما بعد الإنتاج -> الماسترينج",
              "audienceImpact": "استجابة فسيولوجية غريزية."
            },
            "projects": [
              { "name": "التدفق الحضري", "desc": "حركة وثائقية." },
              { "name": "مناظر صوتية", "desc": "مزامنة بصرية صوتية." }
            ]
          },
          "strategy": {
            "title": "استراتيجية إبداعية",
            "headline": "التأثير مصمم",
            "description": "بناء أنظمة تحول الانتباه إلى فعل.",
            "psychologicalFunction": "خلق حركة وتفاعل جماعي.",
            "profile": {
              "about": "هندسة الأنظمة الخفية التي تدفع السلوك البشري.",
              "methods": "الاقتصاد السلوكي، نمذجة البيانات، التعيين الثقافي",
              "specializations": ["استراتيجية الحملات", "هندسة النمو", "تصميم المجتمعات"],
              "executionProcess": "تدقيق -> فرضية -> اختبار -> توسيع",
              "audienceImpact": "تغيرات سلوكية مستدامة."
            },
            "projects": [
              { "name": "تطور العلامة", "desc": "إعادة ابتكار نظامية." },
              { "name": "اختراق السوق", "desc": "نمو محسوب." }
            ]
          }
        },
        "ui": {
          "close": "إغلاق",
          "explore": "استكشف التجربة",
          "about": "نبذة",
          "psychRole": "الدور النفسي",
          "methods": "الأساليب",
          "execution": "التنفيذ",
          "featuredProjects": "مشاريع مميزة",
          "psychFunctionLabel": "الوظيفة النفسية"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
