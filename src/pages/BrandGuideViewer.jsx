import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { galleryProjects } from '../data/brandGalleryData';

// --- Page-level components ---

const PageLayout = ({ children, project }) => {
    const isEditorial = project && typeof project.visualIdentity?.typography?.primary === 'object';
    const bgColor = isEditorial ? project.visualIdentity?.colorSystem?.[0]?.hex || '#050505' : '#050505';
    const textColor = isEditorial ? project.visualIdentity?.colorSystem?.[2]?.hex || '#ffffff' : '#ffffff';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                background: bgColor,
                color: textColor,
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'var(--font-primary)',
                overflow: 'hidden'
            }}
        >
            {children}
        </motion.div>
    );
};

const CoverPage = ({ data, t, isRTL }) => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
        
        {/* Full Screen Image Container */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <motion.img 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={data.heroImage} 
                alt="Brand Cover" 
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} 
            />
            {/* Subtle Vignette (No dark gradient blocking the bottom) */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)', pointerEvents: 'none' }} />
        </div>

        {/* Floating Glass Text Box */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
                position: 'absolute', 
                bottom: '10vh', 
                [isRTL ? 'right' : 'left']: '5vw', 
                zIndex: 10, 
                background: 'rgba(5, 5, 5, 0.4)', 
                backdropFilter: 'blur(15px)', 
                WebkitBackdropFilter: 'blur(15px)',
                padding: '2rem 3rem', 
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                maxWidth: '90vw'
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '3px', opacity: 0.7, margin: '0 0 1rem 0', color: '#fff' }}>
                01. {t('brand_guide.cover')}
            </h2>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', lineHeight: 1, color: '#fff' }}>
                {isRTL && data.brandNameAr ? data.brandNameAr : data.brandName}
            </h1>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 300, letterSpacing: isRTL ? 'normal' : '2px', textTransform: 'uppercase', margin: 0, color: '#fff' }}>
                {t('brand_guide.guidelines')} &bull; {t('brand_guide.version')} &bull; {data.year}
            </p>
        </motion.div>
    </div>
);

const SectionDividerPage = ({ data, t, isRTL }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', background: 'rgba(0,0,0,0.1)' }}>
        <div style={{ position: 'absolute', fontSize: 'clamp(15rem, 30vw, 30rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>{data.number}</div>
        <div style={{ textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, margin: 0 }}>{isRTL && data.titleAr ? data.titleAr : data.title}</h2>
            <p style={{ fontSize: '1.5rem', opacity: 0.7, letterSpacing: isRTL ? 'normal' : '2px', textTransform: 'uppercase' }}>{isRTL && data.title ? data.title : data.titleEn}</p>
        </div>
    </div>
);

const IndexPage = ({ t, isRTL }) => {
    const sections = [
        { num: '01', title: isRTL ? 'المقدمة' : 'Introduction', subtitle: isRTL ? 'الرؤية، الرسالة، والقيم' : 'Overview, Vision & Values' },
        { num: '02', title: isRTL ? 'العلامة التجارية' : 'Brand Mark', subtitle: isRTL ? 'عناصر الشعار وقواعد الاستخدام' : 'Logo Elements & Usage Rules' },
        { num: '03', title: isRTL ? 'الألوان' : 'Color Palette', subtitle: isRTL ? 'الألوان الرئيسية والثانوية' : 'Primary & Secondary Colors' },
        { num: '04', title: isRTL ? 'الخطوط' : 'Typography', subtitle: isRTL ? 'أنواع الخطوط والتسلسل الهرمي' : 'Typefaces & Hierarchy' },
        { num: '05', title: isRTL ? 'النظام البصري' : 'Visual System', subtitle: isRTL ? 'الشبكات والأنماط البصرية' : 'Grids & Patterns' },
        { num: '06', title: isRTL ? 'التطبيقات المكتبية' : 'Stationery', subtitle: isRTL ? 'المطبوعات الورقية' : 'Corporate Printings' },
        { num: '07', title: isRTL ? 'التطبيقات الرقمية' : 'Digital', subtitle: isRTL ? 'السوشيال ميديا والموقع' : 'Social Media & Website' },
        { num: '08', title: isRTL ? 'المطبوعات واللوحات' : 'Publications & Signage', subtitle: isRTL ? 'الكتيبات واللوحات الإعلانية' : 'Brochures & Signs' },
        { num: '09', title: isRTL ? 'المواد الدعائية' : 'Promotional Materials', subtitle: isRTL ? 'الهدايا والأدوات الترويجية' : 'Merchandises & Gifts' },
    ];

    return (
        <div style={{ display: 'flex', height: '100%', padding: '10vh 5%', position: 'relative', overflow: 'hidden' }}>
            {/* Left side: Huge Title */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div style={{ fontSize: 'clamp(12rem, 25vw, 30rem)', fontWeight: 700, opacity: 0.02, position: 'absolute', [isRTL ? 'right' : 'left']: '-5%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', lineHeight: 0.8 }}>
                    {isRTL ? 'فهرس' : 'INDEX'}
                </div>
                <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '5px', opacity: 0.5, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                    {t('brand_guide.index')}
                </h2>
                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 300, margin: 0, position: 'relative', zIndex: 1, lineHeight: 1.1 }}>
                    {isRTL ? 'محتويات' : 'Table of'}<br/>{isRTL ? 'الدليل' : 'Contents'}
                </h1>
            </div>

            {/* Right side: List of sections in Grid */}
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isRTL ? '0 5% 0 0' : '0 0 0 5%', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem 4rem', maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }}>
                    {sections.map((sec, i) => (
                        <motion.div 
                            key={sec.num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 + 0.3, duration: 0.4, ease: "easeOut" }}
                            style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1.5rem',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                paddingBottom: '1.5rem'
                            }}
                        >
                            <span style={{ fontSize: '1.8rem', fontWeight: 300, opacity: 0.3, fontFamily: 'monospace', marginTop: '-0.3rem' }}>{sec.num}.</span>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 400, margin: '0 0 0.4rem 0', color: '#fff' }}>{sec.title}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.6, margin: 0, textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{sec.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const IntroductionPage = ({ data, t, isRTL }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '8vh 8vw 14vh 8vw', position: 'relative' }}>
            {/* Glass Container matching the gallery */}
            <div style={{ 
                display: 'flex', 
                width: '100%', 
                height: '100%', 
                background: 'rgba(20, 20, 20, 0.65)', 
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderRadius: '24px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                color: '#EBE2D5',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                {/* Image/Logo Side */}
                <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBE2D5', borderRight: isRTL ? 'none' : '1px solid rgba(255,255,255,0.05)', borderLeft: isRTL ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        src={data.introImage || data.visualIdentity?.logoScreen || data.heroImage} 
                        style={{ 
                            width: data.introImage ? '100%' : '70%', 
                            height: data.introImage ? '100%' : '70%', 
                            objectFit: data.introImage ? 'cover' : 'contain', 
                            filter: data.introImage ? 'none' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' 
                        }} 
                        alt="Brand Intro" 
                    />
                </div>
                
                {/* Content Side */}
                <div style={{ flex: 1.2, padding: '6vh 6%', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
                    <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '3px', opacity: 0.4, marginBottom: '2rem' }}>
                        01. {isRTL ? 'المقدمة' : 'Introduction'}
                    </h2>
                    
                    {/* Brand Overview */}
                    <motion.div initial={{ opacity: 0, x: isRTL ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3.5rem' }}>
                        <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '1.5rem', color: '#EBE2D5' }}>
                            {isRTL ? 'التعريف الشامل للعلامة' : 'Brand Overview'}
                        </h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.8, fontWeight: 300, maxWidth: '800px' }}>
                            {isRTL ? 
                                '«سَمْت» ليست مجرد علامة تجارية في قطاع العقار؛ بل هي فلسفة تجمع بين "السمت الحسن" (الذي يعكس الرزانة، الثقة، والأصالة المعمارية) وبين السرعة والدقة التي تفرضها تقنيات التحول الرقمي. نحن نعيد صياغة التجربة العقارية في المملكة، عبر تقديم حلول متكاملة تغطي تطوير وإدارة الأملاك والمنصات الذكية.'
                                : (data.intro?.statement || 'Redefining luxury through profound simplicity...')}
                        </p>
                    </motion.div>

                    {/* Grid for Vision, Mission, Values, Personality */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 3rem' }}>
                        {[
                            { 
                                title: isRTL ? 'الرؤية' : 'Vision', 
                                desc: isRTL ? 'سَمْت: وجهتك نحو مستقبل العقار الذكي، والمنظومة الرقمية التي ترتقي بجودة الحياة وتواكب تطلعات مدن المستقبل.' : 'To be the ultimate destination for smart real estate and digital transformation in the region.',
                                delay: 0.2
                            },
                            { 
                                title: isRTL ? 'الرسالة' : 'Mission', 
                                desc: isRTL ? 'تمكين قطاع العقار بحلول رقمية متطورة وتصاميم مستدامة، لنسهل على المستثمرين والأفراد اتخاذ قرارات ذكية وموثوقة.' : 'Empowering the real estate sector with advanced digital solutions and sustainable designs.',
                                delay: 0.3
                            },
                            { 
                                title: isRTL ? 'الوعد' : 'Brand Promise', 
                                desc: isRTL ? 'أن نجعل من تعقيدات السوق العقاري تجربة رقمية تتسم بالهدوء، الوضوح، والفعالية.' : 'Making the complexities of the real estate market a calm, clear, and effective digital experience.',
                                delay: 0.4
                            },
                            { 
                                title: isRTL ? 'شخصية العلامة' : 'Personality', 
                                desc: isRTL ? 'الموثوقية الراسخة، الابتكار التقني، البساطة العميقة، والشفافية.' : 'Trustworthy, innovative, profoundly simple, and highly transparent.',
                                delay: 0.5
                            }
                        ].map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: item.delay }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.8rem', color: '#EBE2D5', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '15px', height: '2px', background: '#C6725B', display: 'inline-block' }}></span>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.7, fontWeight: 300 }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const BrandMarkPage = ({ data, t, isRTL }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#0A0A0A', color: '#fff', overflow: 'hidden' }}>
            
            {/* Background 3D Image */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <motion.img 
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    src="/images/brands/samt/brand-mark-3d.jpg" 
                    alt="SAMT 3D Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Gradient overlay to make text readable */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: isRTL ? 'linear-gradient(to right, rgba(10,10,10,0) 20%, rgba(10,10,10,0.95) 70%, #0A0A0A 100%)' : 'linear-gradient(to left, rgba(10,10,10,0) 20%, rgba(10,10,10,0.95) 70%, #0A0A0A 100%)' }} />
            </div>

            {/* Content Panel */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '10vh 8vw', width: '50%', marginLeft: isRTL ? 'auto' : '0', marginRight: isRTL ? '0' : 'auto' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '3px', opacity: 0.5, marginBottom: '2rem', color: '#D4AF37' }}>
                        02. {isRTL ? 'العلامة التجارية' : 'The Brand Mark'}
                    </h2>
                    
                    <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        {isRTL ? 'أيقونة التميز العقاري' : 'The Icon of Real Estate Excellence'}
                    </h3>
                    
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '600px' }}>
                        {isRTL ? 
                            'الشعار ليس مجرد رمز، بل هو تجسيد بصري لفلسفة "سَمْت". يجمع التصميم بين الخطوط الحادة التي تمثل الدقة الهندسية والتحول الرقمي، والانحناءات المتزنة التي تعبر عن الاستقرار والاستدامة. اللون الذهبي يعكس الفخامة والأصالة العقارية.'
                            : "The logo is not just a symbol; it is a visual embodiment of SAMT's philosophy. The design combines sharp lines representing engineering precision with balanced curves expressing stability and sustainability."}
                    </p>

                    {/* Features Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {[
                            { 
                                title: isRTL ? 'الهندسة (Geometry)' : 'Geometry', 
                                desc: isRTL ? 'مبني على شبكة هندسية دقيقة تضمن التوازن البصري والنسب الذهبية في كافة الاستخدامات.' : 'Built on a precise geometric grid ensuring visual balance and golden ratios.',
                                icon: '📐'
                            },
                            { 
                                title: isRTL ? 'الأيقونة (The Icon)' : 'The Icon', 
                                desc: isRTL ? 'يمكن استخدامها بشكل مستقل في المنصات الرقمية والتطبيقات كرمز سريع التعرف.' : 'Can be used independently across digital platforms as a highly recognizable symbol.',
                                icon: '✨'
                            },
                            { 
                                title: isRTL ? 'الألوان (Colors)' : 'Colors', 
                                desc: isRTL ? 'تدرجات الذهب والنحاس تعكس الفخامة المرتبطة بالعقار المتميز والتقنية المتقدمة.' : 'Gold and copper gradients reflect the luxury associated with premium real estate.',
                                icon: '🎨'
                            },
                            { 
                                title: isRTL ? 'المرونة (Flexibility)' : 'Flexibility', 
                                desc: isRTL ? 'مصمم ليتكيف مع كافة الخلفيات، من الواجهات الزجاجية للمباني وحتى الشاشات الذكية.' : 'Designed to adapt across all backgrounds, from building facades to smart screens.',
                                icon: '🔄'
                            }
                        ].map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: isRTL ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem', color: '#fff' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.6, margin: 0, fontWeight: 300 }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const ColorPage = ({ data, t, isRTL }) => (
    <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, backgroundColor: data.color.hex, display: 'flex', alignItems: 'flex-end', padding: '3rem', position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, color: ['#FAECB9', '#ffffff', '#FFBB4F', '#FFFFF0', '#E0E0E0', '#E4D6BA'].includes(data.color.hex) ? '#000' : '#fff', fontWeight: 300 }}>
                {data.color.name}
            </h2>
             <div style={{ position: 'absolute', top: '3rem', right: isRTL ? 'auto' : '3rem', left: isRTL ? '3rem' : 'auto', writingMode: 'vertical-rl', transform: isRTL ? 'rotate(0deg)' : 'rotate(180deg)', fontFamily: 'monospace', opacity: 0.5, color: ['#FAECB9', '#ffffff', '#FFBB4F', '#FFFFF0', '#E0E0E0', '#E4D6BA'].includes(data.color.hex) ? '#000' : '#fff' }}>
                {data.sectionTitle}
            </div>
        </div>
        <div style={{ flex: 1, padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '500px' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, margin: 0, opacity: 0.8, fontWeight: 300 }}>{data.color.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.1rem', fontFamily: 'monospace', opacity: 0.7, padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <span>HEX {data.color.hex}</span>
                    {data.color.rgb && <span>RGB {data.color.rgb}</span>}
                    {data.color.cmyk && <span>CMYK {data.color.cmyk}</span>}
                    {data.color.pantone && <span>PAN {data.color.pantone}</span>}
                </div>
            </div>
        </div>
    </div>
);

const LogoPage = ({ data, t, isRTL }) => (
     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '2rem' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '3px', opacity: 0.5 }}>{data.subtitle}</h2>
        <div style={{ width: '80%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={data.logoUrl} alt={data.subtitle} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }}/>
        </div>
    </div>
);

const ImageWithTextPage = ({ data, t, isRTL }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '5rem', gap: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>{isRTL && data.titleAr ? data.titleAr : data.title}</h2>
        <div style={{ width: '100%', maxWidth: '1200px', height: '60vh', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)'}}>
            <img src={data.img} alt={isRTL && data.titleAr ? data.titleAr : data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.8, maxWidth: '800px', fontWeight: 300 }}>
            {isRTL && data.descAr ? data.descAr : data.desc}
        </p>
    </div>
);

const TransformationPage = ({ data, projectPrimaryColor, t, isRTL }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '5rem', gap: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>{t('brand_guide.evolution')}</h2>
        <div style={{ cursor: 'ew-resize', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', width: '100%', maxWidth: '1200px' }}>
            {data.beforeImg ? (
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={data.beforeImg} alt="Before" style={{ objectFit: 'contain', background: projectPrimaryColor, padding: '3rem' }} />}
                    itemTwo={<ReactCompareSliderImage src={data.afterImg} alt="After" style={{ objectFit: 'contain', background: projectPrimaryColor, padding: '3rem' }} />}
                    style={{ width: '100%', height: '600px' }}
                />
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '600px', background: projectPrimaryColor, gap: '2rem' }}>
                    <p style={{ fontSize: '1.5rem', opacity: 0.7 }}>{t('brand_guide.final_logo')}</p>
                    <img src={data.afterImg} alt="After" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                </div>
            )}
        </div>
        {data.desc && <p style={{ fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.8, maxWidth: '800px', fontWeight: 300, textAlign: 'center' }}>{isRTL && data.descAr ? data.descAr : data.desc}</p>}
    </div>
);


const PlaceholderPage = ({ data, t, isRTL }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '3px', opacity: 0.5, marginBottom: '2rem' }}>
            {data.number ? `${data.number}. ${data.title}` : data.title}
        </h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.6, margin: 0, fontStyle: 'italic', maxWidth: '600px', opacity: 0.6 }}>
            {data.subtitle || t('brand_guide.placeholder_desc')}
        </p>
    </div>
);


// --- Data Mapping ---
const createProjectPages = (project, t, isRTL) => {
    if (!project) return [];
    
    const pages = [];

    // 00. Cover (Unnumbered)
    pages.push({ type: 'COVER', data: project });
    
    // 00. Index (Unnumbered)
    pages.push({ type: 'INDEX', data: { number: '' } });
    
    // 01. Introduction
    pages.push({ type: 'INTRODUCTION', data: project });

    // 02. Brand Mark
    pages.push({ type: 'BRAND_MARK', data: project });

    // 03. Colors Palette
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '03', title: isRTL ? 'الألوان' : 'Colors Palette', titleEn: 'Colors Palette' } });
    project.visualIdentity?.colorSystem?.forEach(color => {
        pages.push({ type: 'COLOR', data: { color, sectionTitle: isRTL ? 'الألوان' : 'Colors Palette' } });
    });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'الألوان والتطبيق' : 'Colors & Usage Ratios', subtitle: isRTL ? 'الألوان الثانوية ونسب الاستخدام' : 'Secondary Colors & Usage Ratios' } });

    // 04. Typography
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '04', title: isRTL ? 'الخطوط' : 'Typography', titleEn: 'Typography' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'أنواع الخطوط' : 'Typefaces', subtitle: isRTL ? 'الخط الأساسي والثانوي (عربي/إنجليزي)' : 'Primary & Secondary Typefaces' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'التسلسل الهرمي' : 'Hierarchy', subtitle: 'Heading, Subheading, Body Text, Buttons' } });

    // 05. Visual System
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '05', title: isRTL ? 'النظام البصري' : 'Visual System', titleEn: 'Visual System' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'التكوين البصري والشبكات' : 'Grids & Layout', subtitle: 'Grid, Layout, Margins, Spacing' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'الأيقونات والأنماط' : 'Iconography & Patterns', subtitle: 'Icon Style, Patterns, Scaling' } });

    // 06. Stationery
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '06', title: isRTL ? 'التطبيقات المكتبية' : 'Stationery', titleEn: 'Stationery' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'المطبوعات الأساسية' : 'Basic Stationery', subtitle: 'Business Cards, Letterhead, Envelopes' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'المطبوعات الثانوية' : 'Secondary Stationery', subtitle: 'A4, A5, Folders, Notes' } });

    // 07. Digital
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '07', title: isRTL ? 'التطبيقات الرقمية' : 'Digital', titleEn: 'Digital' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'السوشيال ميديا' : 'Social Media Platforms', subtitle: 'Covers, Posts, Stories, Highlights, Templates' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'الموقع الإلكتروني' : 'Website', subtitle: 'Homepage, UI Elements, Icons, Forms' } });

    // 08. Publications & Signage
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '08', title: isRTL ? 'المطبوعات واللوحات' : 'Publications & Signage', titleEn: 'Publications & Signage' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'الكتيبات واللوحات الإعلانية' : 'Brochures & Banners', subtitle: 'Tri-fold, Roll-up, Pop-up Banner' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'اللوحات الخارجية والداخلية' : 'Outdoor & Indoor Signage', subtitle: 'Building Signs, Reception, Wayfinding' } });

    // 09. Promotional Materials
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '09', title: isRTL ? 'المواد الدعائية' : 'Promotional Materials', titleEn: 'Promotional' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'أدوات الترويج والهدايا' : 'Merchandises & Gifts', subtitle: 'Mugs, Pens, Shirts, Packaging, Stickers' } });

    // 10. Brand Systems
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '10', title: isRTL ? 'أنظمة العلامة' : 'Brand Systems', titleEn: 'Brand Systems' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: isRTL ? 'ملحقات احترافية' : 'Professional Extensions', subtitle: 'Strategy, Voice, UI Components, Motion' } });

    // 11. End
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '11', title: isRTL ? 'النهاية' : 'Thank You', titleEn: 'The End' } });

    return pages;
};


// --- Main Viewer Component ---
const BrandGuideViewer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const [project, setProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const found = galleryProjects.find(p => p.id === id);
        if (found) {
            setProject(found);
        }
        window.scrollTo(0, 0);
    }, [id]);

    const pages = useMemo(() => createProjectPages(project, t, isRTL), [project, t, isRTL]);

    const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));
    const handlePrev = () => setCurrentPage(prev => Math.max(0, prev - 1));
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') navigate('/brand-gallery');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pages]);

    if (!project) {
        return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>{t('brand_guide.loading')}</div>;
    }

    const CurrentPageComponent = () => {
        if (!pages || pages.length === 0) return <PlaceholderPage data={{ title: t('brand_guide.loading')}} t={t} isRTL={isRTL} />;
        const pageData = pages[currentPage];
        switch (pageData.type) {
            case 'COVER': return <CoverPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'INDEX': return <IndexPage t={t} isRTL={isRTL} />;
            case 'INTRODUCTION': return <IntroductionPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'BRAND_MARK': return <BrandMarkPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'SECTION_DIVIDER': return <SectionDividerPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'COLOR': return <ColorPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'LOGO': return <LogoPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'IMAGE_TEXT': return <ImageWithTextPage data={pageData.data} t={t} isRTL={isRTL} />;
            case 'TRANSFORMATION': return <TransformationPage data={pageData.data} projectPrimaryColor={pageData.projectPrimaryColor} t={t} isRTL={isRTL} />;
            case 'PLACEHOLDER':
            default:
                return <PlaceholderPage data={pageData.data} t={t} isRTL={isRTL} />;
        }
    };

    return (
        <PageLayout project={project}>
            <AnimatePresence mode="wait">
                <motion.div key={currentPage} style={{flexGrow: 1, position: 'relative'}}>
                    <CurrentPageComponent />
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div dir="ltr" style={{ position: 'fixed', bottom: '5vh', right: '5vw', zIndex: 100, display: 'flex', gap: '1rem' }}>
                <button onClick={handlePrev} disabled={currentPage === 0} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', opacity: currentPage === 0 ? 0.3 : 1 }}>
                    <ArrowLeft />
                </button>
                <button onClick={handleNext} disabled={currentPage === pages.length - 1} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', opacity: currentPage === pages.length - 1 ? 0.3 : 1 }}>
                    <ArrowRight />
                </button>
            </div>
             {/* Page Number */}
             <div style={{ position: 'fixed', bottom: '5vh', left: '5vw', zIndex: 100, color: 'white', fontFamily: 'monospace', fontSize: '1.2rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                {currentPage + 1} / {pages.length}
            </div>

        </PageLayout>
    );
};

export default BrandGuideViewer;
