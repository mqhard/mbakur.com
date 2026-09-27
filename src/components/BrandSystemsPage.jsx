import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Maximize, Layers, Briefcase, Ruler, Compass, PenTool, Lightbulb, Minimize2, Map, Camera, CheckCircle2, XCircle } from 'lucide-react';

const BrandSystemsPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5';
    const darkGold = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B';
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const [activeTab, setActiveTab] = useState('icons'); // 'icons', 'photography'

    const tabStyle = (isActive) => ({
        padding: '1rem 2rem',
        cursor: 'pointer',
        borderBottom: `2px solid ${isActive ? goldColor : 'transparent'}`,
        color: isActive ? goldColor : 'rgba(255,255,255,0.7)',
        fontFamily: `"${titleFont}", sans-serif`,
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
    });

    const iconsList = [
        { icon: Hexagon, label: isRTL ? 'هندسة' : 'Architecture' },
        { icon: Maximize, label: isRTL ? 'مساحة' : 'Space' },
        { icon: Layers, label: isRTL ? 'هيكل' : 'Structure' },
        { icon: Briefcase, label: isRTL ? 'مشاريع' : 'Portfolio' },
        { icon: Ruler, label: isRTL ? 'دقة' : 'Precision' },
        { icon: Compass, label: isRTL ? 'توجيه' : 'Direction' },
        { icon: PenTool, label: isRTL ? 'تصميم' : 'Design' },
        { icon: Lightbulb, label: isRTL ? 'ابتكار' : 'Innovation' },
        { icon: Minimize2, label: isRTL ? 'بساطة' : 'Minimalism' },
        { icon: Map, label: isRTL ? 'مخطط' : 'Masterplan' }
    ];

    const moodboardImages = [
        '/images/brands/samt/samt_abstract_digital_wallpaper_1784473166017.jpg',
        '/images/brands/samt/building_mockup.jpg',
        '/images/brands/samt/premium_digital_infrastructure_bg_1784473466107.jpg',
        '/images/brands/samt/reception_mockup.jpg',
        '/images/brands/samt/samt_website_hero_bg_1784474076063.jpg'
    ];

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: primaryColor,
            color: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            padding: '5vh 5vw',
            boxSizing: 'border-box'
        }}>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    10 / Brand Systems
                </div>
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'أنظمة العلامة' : 'Brand Systems'}
                </h1>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                <div style={tabStyle(activeTab === 'icons')} onClick={() => setActiveTab('icons')}>
                    {isRTL ? 'نظام الأيقونات' : 'Iconography'}
                </div>
                <div style={tabStyle(activeTab === 'photography')} onClick={() => setActiveTab('photography')}>
                    {isRTL ? 'النمط التصويري' : 'Photography Style'}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                    
                    {/* ICONOGRAPHY SECTION */}
                    {activeTab === 'icons' && (
                        <motion.div
                            key="icons"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '3rem' }}
                        >
                            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.8, lineHeight: 1.6 }}>
                                {isRTL 
                                    ? 'تتميز أيقونات العلامة بالبساطة والخطوط الرفيعة (1px) لتعكس الدقة المعمارية الهندسية. يتم استخدامها بلون الهوية لتوجيه المستخدم بصرياً دون لفت الانتباه المبالغ فيه.'
                                    : 'Our iconography is characterized by simplicity and thin geometric strokes (1px), reflecting architectural precision. Icons are used in brand colors to guide users visually without overwhelming the layout.'
                                }
                            </div>

                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                                gap: '2rem' 
                            }}>
                                {iconsList.map((item, index) => (
                                    <div key={index} style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        {/* Render Icon with thin strokeWidth */}
                                        <item.icon size={48} color={darkGold} strokeWidth={1} />
                                        <div style={{ fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.9rem', opacity: 0.7 }}>
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* PHOTOGRAPHY STYLE SECTION */}
                    {activeTab === 'photography' && (
                        <motion.div
                            key="photography"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '4rem' }}
                        >
                            {/* Moodboard */}
                            <div>
                                <h3 style={{ fontFamily: `"${titleFont}", sans-serif`, fontSize: '2rem', marginBottom: '1.5rem', color: goldColor }}>
                                    {isRTL ? 'لوحة الإلهام التصويري' : 'Photography Moodboard'}
                                </h3>
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gridTemplateRows: 'repeat(2, 250px)',
                                    gap: '1rem' 
                                }}>
                                    <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '12px', overflow: 'hidden' }}>
                                        <img src={moodboardImages[4]} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        <img src={moodboardImages[0]} alt="Abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        <img src={moodboardImages[2]} alt="Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2', borderRadius: '12px', overflow: 'hidden' }}>
                                        <img src={moodboardImages[1]} alt="Building" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 80%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Do's & Don'ts */}
                            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                                {/* Do's */}
                                <div style={{ flex: 1, minWidth: '300px', background: 'rgba(39, 201, 63, 0.05)', border: '1px solid rgba(39, 201, 63, 0.2)', padding: '2.5rem', borderRadius: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#27C93F' }}>
                                        <CheckCircle2 size={32} />
                                        <h4 style={{ margin: 0, fontFamily: `"${titleFont}", sans-serif`, fontSize: '1.5rem' }}>Do's</h4>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.9, lineHeight: 1.6 }}>
                                        <li>{isRTL ? 'استخدام الإضاءة الطبيعية الناعمة والظلال الحادة لإبراز الكتل.' : 'Use natural soft lighting and sharp shadows to highlight massing.'}</li>
                                        <li>{isRTL ? 'التركيز على تفاصيل الخامات (الخرسانة، الرخام، المعادن).' : 'Focus on macro details of materials (concrete, marble, metals).'}</li>
                                        <li>{isRTL ? 'الحفاظ على زوايا تصوير مستقيمة ومنظور معماري دقيق.' : 'Maintain straight lines and precise architectural perspectives.'}</li>
                                        <li>{isRTL ? 'تضمين مساحات سلبية (فراغ) لتعزيز الشعور بالاتساع.' : 'Include negative space to enhance the feeling of expansiveness.'}</li>
                                    </ul>
                                </div>

                                {/* Don'ts */}
                                <div style={{ flex: 1, minWidth: '300px', background: 'rgba(255, 95, 86, 0.05)', border: '1px solid rgba(255, 95, 86, 0.2)', padding: '2.5rem', borderRadius: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#FF5F56' }}>
                                        <XCircle size={32} />
                                        <h4 style={{ margin: 0, fontFamily: `"${titleFont}", sans-serif`, fontSize: '1.5rem' }}>Don'ts</h4>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.9, lineHeight: 1.6 }}>
                                        <li>{isRTL ? 'تجنب الفلاتر اللونية القوية أو التشبع اللوني المبالغ فيه.' : 'Avoid heavy color filters or over-saturated HDR looks.'}</li>
                                        <li>{isRTL ? 'تجنب الصور المزدحمة التي تشتت الانتباه عن التصميم المعماري.' : 'Avoid cluttered compositions that distract from the architecture.'}</li>
                                        <li>{isRTL ? 'عدم استخدام عدسات عين السمكة (Fisheye) أو العدسات المشوهة للمنظور.' : 'Do not use fisheye or heavy wide-angle distortion lenses.'}</li>
                                        <li>{isRTL ? 'الابتعاد عن الإضاءة الاصطناعية المباشرة (فلاش الكاميرا).' : 'Avoid direct harsh artificial camera flash.'}</li>
                                    </ul>
                                </div>
                            </div>

                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
        </div>
    );
};

export default BrandSystemsPage;
