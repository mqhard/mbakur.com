import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, Heart, User, Menu, ChevronRight, Bookmark, MapPin, Grid, Briefcase, PhoneCall, PlusSquare, Send } from 'lucide-react';

const PostVisual = ({ item, logoWhiteSrc, titleFont, subtitleFont, darkGold, size, index, isRTL }) => {
    const isSmall = size === 'small';
    const scale = isSmall ? 0.35 : 1;
    const color = item.textColor || '#FFF';

    const pStyle = {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        overflow: 'hidden',
        backgroundImage: `url(${item.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: color,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
    };

    const Idea = () => item.details?.idea ? (
        <div style={{ fontSize: `${0.9 * scale}rem`, fontWeight: 'bold', fontFamily: `"${titleFont}", sans-serif`, marginBottom: `${6 * scale}px`, textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>{item.details.idea}</div>
    ) : null;

    const Desc = ({ style }) => item.details?.desc ? (
        <div style={{ fontSize: `${0.7 * scale}rem`, fontFamily: `"${titleFont}", sans-serif`, opacity: 0.95, lineHeight: 1.6, textShadow: '0px 2px 4px rgba(0,0,0,0.8)', ...style }}>{item.details.desc}</div>
    ) : null;

    const Logo = ({ style }) => item.showLogo !== false ? (
        <div style={{ width: `${60 * scale}px`, height: `${60 * scale}px`, backgroundColor: item.logoColor || color, WebkitMaskImage: `url(${logoWhiteSrc})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${logoWhiteSrc})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', marginBottom: `${15 * scale}px`, filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))', ...style }} />
    ) : null;

    // Overlay to guarantee text clarity (Professional Scrim)
    const overlayStyle = {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)',
        pointerEvents: 'none'
    };

    // Custom Layout Rendering based on index
    const renderCustomLayout = () => {
        const content = (() => {
            // 1: الثلث السفلي الأيسر، استغلال الجدار الفارغ وتجنب ظلال الشجرة العلوية
            if (index === 0) {
                return (
                    <div style={{ position: 'absolute', bottom: `${15*scale}%`, left: `${12*scale}%`, width: `${60*scale}%`, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 2: الشعار كبير جداً وفي المنتصف (دع العمارة تكون البطل)
            if (index === 1) {
                return (
                    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0, right: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Logo style={{ width: `${140 * scale}px`, height: `${140 * scale}px`, marginBottom: `${10*scale}px` }} />
                        <div style={{ fontSize: `${0.6 * scale}rem`, fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.9, textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>{item.details.tags}</div>
                    </div>
                );
            }
            // 3: محاذاة يمنى بمحاذاة القوس، لا تغطِ الشجرة
            if (index === 2) {
                return (
                    <div style={{ position: 'absolute', bottom: `${15*scale}%`, right: `${12*scale}%`, width: `${60*scale}%`, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 4: بمحاذاة الألواح الخشبية اليسرى
            if (index === 3) {
                return (
                    <div style={{ position: 'absolute', top: `${15*scale}%`, left: `${12*scale}%`, width: `${60*scale}%`, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 5: تصميم متماثل. الشعار في الأعلى والعنوان أسفله مباشرة
            if (index === 4) {
                return (
                    <div style={{ position: 'absolute', top: `${15*scale}%`, left: 0, right: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Logo />
                        <Idea />
                        <Desc style={{ maxWidth: '70%', textAlign: 'center' }} />
                    </div>
                );
            }
            // 6: اتبع خطوط المبنى. ضع النص أسفل اليسار
            if (index === 5) {
                return (
                    <div style={{ position: 'absolute', bottom: `${12*scale}%`, left: `${12*scale}%`, width: `${60*scale}%`, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 7: بمحاذاة الشرائح الخشبية
            if (index === 6) {
                return (
                    <div style={{ position: 'absolute', bottom: `${15*scale}%`, right: `${12*scale}%`, width: `${60*scale}%`, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 8: أعلى الكرسي والطاولة
            if (index === 7) {
                return (
                    <div style={{ position: 'absolute', top: `${20*scale}%`, left: `${12*scale}%`, width: `${55*scale}%`, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Idea />
                        <Desc />
                    </div>
                );
            }
            // 9: شعار بالأعلى، نص بالأسفل لعدم تغطية الشجرة
            if (index === 8) {
                return (
                    <div style={{ position: 'absolute', top: `${12*scale}%`, bottom: `${12*scale}%`, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Logo />
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Idea />
                            <Desc style={{ maxWidth: '80%' }} />
                        </div>
                        {item.details?.tags && <div style={{ fontSize: `${0.6 * scale}rem`, fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.9, textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>{item.details.tags}</div>}
                    </div>
                );
            }
            return null;
        })();

        return (
            <>
                <div style={overlayStyle} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
                    {content}
                </div>
            </>
        );
    };

    return (
        <div style={pStyle}>
            {renderCustomLayout()}
        </div>
    );
};

const BrandDigitalApplicationsPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5'; // Light Gold / Cream
    const darkGold = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B'; // Darker Gold / Terracotta
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const [activeTab, setActiveTab] = useState('social');

    const logoWhiteSrc = project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png';

    const tabStyle = (isActive) => ({
        padding: '1rem 2rem',
        cursor: 'pointer',
        borderBottom: `2px solid ${isActive ? goldColor : 'transparent'}`,
        color: isActive ? goldColor : 'rgba(255,255,255,0.5)',
        fontFamily: `"${titleFont}", sans-serif`,
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
    });

    const patternStyle = (opacity) => ({
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url('/images/brands/samt/geometry.png')`,
        backgroundSize: '150px', backgroundPosition: 'center', backgroundRepeat: 'repeat',
        opacity: opacity, zIndex: 0, pointerEvents: 'none'
    });

    const rightGridItems = [
        { 
            bgImage: '/images/brands/samt/social/1.png',
            textColor: '#222222', // Darker grey as requested
            showLogo: false,
            details: {
                idea: 'العمارة غاية وليست بناء',
                desc: 'نحن لا نصمم الجدران، بل نصمم الغاية التي ستعيش داخلها.',
                tags: 'Philosophical Architecture'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/2.png',
            textColor: '#1A1C1D',
            logoColor: '#EBE2D5', // Ivory logo
            showLogo: true,
            details: {
                idea: 'الهوية',
                desc: 'كل مساحة عظيمة تبدأ برؤية.',
                tags: 'Luxury Brand • Heritage'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/3.png',
            textColor: '#1A1C1D',
            showLogo: false,
            details: {
                idea: 'الوضوح والوظيفة',
                desc: 'الجمال الحقيقي يظهر عندما يخدم التصميم الإنسان.',
                tags: 'Honest Design'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/4.png',
            textColor: '#EBE2D5',
            showLogo: false,
            details: {
                idea: 'مساحات تستمر لعقود',
                desc: 'نصمم اليوم ما سيبقى جميلاً غداً.',
                tags: 'Timeless Design'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/5.png',
            textColor: '#1A1C1D',
            logoColor: '#1A1C1D',
            showLogo: true,
            details: {
                idea: 'ارتباط العمارة بالمشاعر',
                desc: 'المساحات العظيمة لا تُرى فقط، بل تُشعر.',
                tags: 'Emotional Design'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/6.png',
            textColor: '#1A1C1D',
            showLogo: false,
            details: {
                idea: 'القوة في البساطة',
                desc: 'إزالة الزائد هي الخطوة الأخيرة للوصول إلى الكمال.',
                tags: 'Minimal Luxury'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/7.png',
            textColor: '#EBE2D5',
            showLogo: false,
            details: {
                idea: 'أهمية التفاصيل الصغيرة',
                desc: 'الفخامة ليست في الحجم، بل في التفاصيل التي لا يلاحظها الجميع.',
                tags: 'Craftsmanship'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/8.png',
            textColor: '#EBE2D5',
            showLogo: false,
            details: {
                idea: 'تصميم يخدم جودة الحياة',
                desc: 'كل قرار تصميمي يجب أن يضيف قيمة للحياة اليومية.',
                tags: 'Mindful Living'
            }
        },
        { 
            bgImage: '/images/brands/samt/social/9.png',
            textColor: '#1A1C1D',
            logoColor: '#C6725B', // Golden logo
            showLogo: true,
            details: {
                idea: 'التجربة قبل الشكل',
                desc: 'الناس لا يتذكرون المباني، بل يتذكرون الشعور.',
                tags: 'Experience Design'
            }
        },
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
            boxSizing: 'border-box',
            direction: isRTL ? 'rtl' : 'ltr'
        }}>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    07 / {isRTL ? 'التطبيقات الرقمية' : 'Digital Applications'}
                </div>
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'منصات العلامة' : 'Brand Platforms'}
                </h1>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                <div style={tabStyle(activeTab === 'social')} onClick={() => setActiveTab('social')}>
                    {isRTL ? 'منصات التواصل' : 'Social Media'}
                </div>
                <div style={tabStyle(activeTab === 'website')} onClick={() => setActiveTab('website')}>
                    {isRTL ? 'الموقع الإلكتروني' : 'Website UI'}
                </div>
                <div style={tabStyle(activeTab === 'app')} onClick={() => setActiveTab('app')}>
                    {isRTL ? 'تطبيق الجوال' : 'Mobile App'}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                    
                    {/* SOCIAL MEDIA SECTION */}
                    {activeTab === 'social' && (
                        <motion.div
                            key="social"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}
                        >
                            {/* LEFT: Phone Frame */}
                            <div style={{ 
                                background: '#1A1C1D', 
                                borderRadius: '40px', 
                                padding: '15px', 
                                border: '4px solid #333', 
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                width: '320px',
                                flexShrink: 0,
                                direction: isRTL ? 'rtl' : 'ltr'
                            }}>
                                <div style={{ background: '#000', borderRadius: '25px', overflow: 'hidden', height: '650px', display: 'flex', flexDirection: 'column', color: '#FFF' }}>
                                    
                                    {/* Top Bar */}
                                    <div style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <ChevronRight size={20} style={{ transform: isRTL ? 'none' : 'rotate(180deg)' }} />
                                        <div style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: `"${titleFont}", sans-serif` }}>samt.arch</div>
                                        <div style={{ display: 'flex', gap: '3px' }}>
                                            <div style={{width:4,height:4,background:'#FFF',borderRadius:'50%'}}></div>
                                            <div style={{width:4,height:4,background:'#FFF',borderRadius:'50%'}}></div>
                                            <div style={{width:4,height:4,background:'#FFF',borderRadius:'50%'}}></div>
                                        </div>
                                    </div>

                                    {/* Profile Info */}
                                    <div style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid #333` }}>
                                            <div style={{ 
                                                width: '40px', height: '40px', 
                                                backgroundColor: darkGold, 
                                                WebkitMaskImage: `url(${logoWhiteSrc})`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskImage: `url(${logoWhiteSrc})`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center'
                                            }} />
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                                            <div><div style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: `"${titleFont}", sans-serif` }}>128</div><div style={{ fontSize: '0.7rem', color: '#999' }}>{isRTL ? 'منشورات' : 'Posts'}</div></div>
                                            <div><div style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: `"${titleFont}", sans-serif` }}>2,354</div><div style={{ fontSize: '0.7rem', color: '#999' }}>{isRTL ? 'متابعون' : 'Followers'}</div></div>
                                            <div><div style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: `"${titleFont}", sans-serif` }}>96</div><div style={{ fontSize: '0.7rem', color: '#999' }}>{isRTL ? 'يتابع' : 'Following'}</div></div>
                                        </div>
                                    </div>
                                    
                                    {/* Bio */}
                                    <div style={{ padding: '10px 20px', fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.8rem', lineHeight: '1.4' }}>
                                        <div style={{ fontWeight: 'bold', fontFamily: `"${titleFont}", sans-serif` }}>SAMT Architecture & Interior</div>
                                        <div style={{ color: '#CCC' }}>Architecture Studio</div>
                                        <div style={{ color: '#CCC' }}>{isRTL ? 'نصمم مساحات تلهم الحياة.' : 'We design spaces that inspire life.'}</div>
                                        <div style={{ color: '#EBE2D5', marginTop: '4px' }}>www.samt-arch.com</div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div style={{ padding: '10px 20px', display: 'flex', gap: '8px' }}>
                                        <div style={{ flex: 1, background: '#EBE2D5', color: '#000', padding: '6px', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>{isRTL ? 'متابعة' : 'Follow'}</div>
                                        <div style={{ flex: 1, background: '#222', color: '#FFF', padding: '6px', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>{isRTL ? 'رسالة' : 'Message'}</div>
                                        <div style={{ flex: 1, background: '#222', color: '#FFF', padding: '6px', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>{isRTL ? 'اتصال' : 'Contact'}</div>
                                        <div style={{ background: '#222', color: '#FFF', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={14} style={{ transform: isRTL ? 'rotate(-90deg)' : 'rotate(90deg)' }} /></div>
                                    </div>

                                    {/* Highlights */}
                                    <div style={{ display: 'flex', padding: '10px 20px', gap: '15px', overflowX: 'hidden' }}>
                                        {isRTL ? 
                                            ['مشاريع', 'نهجنا', 'داخلي', 'تفاصيل'].map((h, i) => (
                                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: `1px solid #333`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <div style={{ width: '20px', height: '20px', backgroundColor: darkGold, WebkitMaskImage: `url(${logoWhiteSrc})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${logoWhiteSrc})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                                                    </div>
                                                    <div style={{ fontSize: '0.65rem', color: '#CCC' }}>{h}</div>
                                                </div>
                                            ))
                                        : 
                                            ['Projects', 'Process', 'Interiors', 'Details'].map((h, i) => (
                                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: `1px solid #333`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <div style={{ width: '20px', height: '20px', backgroundColor: darkGold, WebkitMaskImage: `url(${logoWhiteSrc})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${logoWhiteSrc})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                                                    </div>
                                                    <div style={{ fontSize: '0.65rem', color: '#CCC' }}>{h}</div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {/* Grid Icons */}
                                    <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #222', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px' }}>
                                        <Grid size={20} color={'#FFF'} />
                                        <Briefcase size={20} color="#555" />
                                        <User size={20} color="#555" />
                                    </div>

                                    {/* Image Grid in Phone */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', flex: 1, overflowY: 'hidden', background: '#000' }}>
                                        {rightGridItems.map((item, i) => (
                                            <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                                                <PostVisual 
                                                    item={item} 
                                                    logoWhiteSrc={logoWhiteSrc} 
                                                    titleFont={titleFont} 
                                                    subtitleFont={subtitleFont} 
                                                    darkGold={darkGold} 
                                                    size="small"
                                                    index={i}
                                                    isRTL={isRTL}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Bottom Nav */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', borderTop: '1px solid #222' }}>
                                        <Home size={20} color={'#FFF'} />
                                        <Search size={20} color="#555" />
                                        <PlusSquare size={20} color="#555" />
                                        <Heart size={20} color="#555" />
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #555', background: '#333' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: 3x3 Grid of Posts without Interactive Hover */}
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(3, 1fr)', 
                                gap: '15px', 
                                maxWidth: '650px', 
                                width: '100%',
                                flex: 1,
                                minWidth: '300px'
                            }}>
                                {rightGridItems.map((item, i) => (
                                    <div key={i} style={{ 
                                        aspectRatio: '1', 
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    }}>
                                        <PostVisual 
                                            item={item} 
                                            logoWhiteSrc={logoWhiteSrc}
                                            titleFont={titleFont}
                                            subtitleFont={subtitleFont}
                                            darkGold={darkGold}
                                            primaryColor={primaryColor}
                                            size="large"
                                            isRTL={isRTL}
                                            index={i}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* WEBSITE UI SECTION */}
                    {activeTab === 'website' && (
                        <motion.div
                            key="website"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1000px' }}
                        >
                            {/* Browser Window Frame */}
                            <div style={{ 
                                background: primaryColor, 
                                borderRadius: '12px', 
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {/* Browser Header */}
                                <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '8px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
                                    <div style={{ flex: 1, textAlign: 'center', fontSize: '0.8rem', opacity: 0.5, fontFamily: 'monospace' }}>samt.sa</div>
                                </div>
                                
                                {/* Website Content */}
                                <div style={{ position: 'relative', height: '600px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={patternStyle(0.03)}></div>
                                    
                                    {/* Navbar */}
                                    <div style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                                        <img src={logoWhiteSrc} alt="SAMT" style={{ height: '40px' }} />
                                        <div style={{ display: 'flex', gap: '3rem', fontSize: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                                            <span style={{ cursor: 'pointer', color: goldColor }}>{isRTL ? 'الرئيسية' : 'Home'}</span>
                                            <span style={{ cursor: 'pointer', opacity: 0.7 }}>{isRTL ? 'المشاريع' : 'Projects'}</span>
                                            <span style={{ cursor: 'pointer', opacity: 0.7 }}>{isRTL ? 'من نحن' : 'About Us'}</span>
                                            <span style={{ cursor: 'pointer', opacity: 0.7 }}>{isRTL ? 'اتصل بنا' : 'Contact'}</span>
                                        </div>
                                    </div>

                                    {/* Hero Section */}
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4rem', zIndex: 1, position: 'relative' }}>
                                        <div style={{ position: 'absolute', [isRTL ? 'left' : 'right']: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.1 }}>
                                            <img src={logoWhiteSrc} alt="Watermark" style={{ height: '400px' }} />
                                        </div>
                                        
                                        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, margin: '0 0 1.5rem 0', fontFamily: `"${titleFont}", sans-serif`, maxWidth: '600px' }}>
                                            {isRTL ? 'تصميم' : 'Designing the'} <br/>
                                            <span style={{ color: darkGold }}>{isRTL ? 'مستقبل المساحات' : 'Future of Spaces'}</span>
                                        </h1>
                                        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '500px', lineHeight: 1.6, marginBottom: '3rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                                            {isRTL ? 'استوديو معماري معاصر يصنع تصاميم خالدة تمزج بين الوظيفة والجمال الاستثنائي.' : 'A contemporary architectural studio crafting timeless designs that blend functionality with aesthetic brilliance.'}
                                        </p>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ padding: '1rem 2.5rem', background: darkGold, color: '#FFF', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontFamily: `"${subtitleFont}", sans-serif` }}>
                                                {isRTL ? 'عرض الأعمال' : 'View Portfolio'}
                                            </div>
                                            <div style={{ padding: '1rem 2.5rem', border: `1px solid rgba(255,255,255,0.3)`, color: '#FFF', borderRadius: '4px', cursor: 'pointer', fontFamily: `"${subtitleFont}", sans-serif` }}>
                                                {isRTL ? 'تواصل معنا' : 'Get in Touch'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* MOBILE APP SECTION */}
                    {activeTab === 'app' && (
                        <motion.div
                            key="app"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '400px' }}
                        >
                            {/* Phone Frame */}
                            <div style={{ 
                                background: '#111', 
                                borderRadius: '40px', 
                                padding: '15px', 
                                border: `2px solid #C6725B30`, 
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                overflow: 'hidden'
                            }}>
                                <div style={{ background: primaryColor, borderRadius: '25px', overflow: 'hidden', height: '700px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    
                                    <div style={patternStyle(0.04)}></div>

                                    {/* App Header */}
                                    <div style={{ padding: '40px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                                        <div>
                                            <div style={{ opacity: 0.6, fontSize: '0.9rem', fontFamily: `"${subtitleFont}", sans-serif` }}>{isRTL ? 'صباح الخير،' : 'Good Morning,'}</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: `"${titleFont}", sans-serif`, color: goldColor }}>{isRTL ? 'محمد رحمن' : 'Mohamed Rahman'}</div>
                                        </div>
                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#333', overflow: 'hidden', border: `1px solid ${darkGold}` }}>
                                            <img src="/images/brands/samt/pic_ov.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>

                                    {/* Search Bar */}
                                    <div style={{ padding: '0 20px 20px', zIndex: 1 }}>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', display: 'flex', gap: '15px', alignItems: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <Search size={20} color={goldColor} />
                                            <div style={{ opacity: 0.5, fontFamily: `"${subtitleFont}", sans-serif` }}>{isRTL ? 'البحث عن مشاريع...' : 'Search projects...'}</div>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div style={{ flex: 1, padding: '0 20px', overflowY: 'auto', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        
                                        {/* Featured Card */}
                                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', overflow: 'hidden', border: `1px solid ${goldColor}30` }}>
                                            <div style={{ height: '180px', background: '#333', position: 'relative' }}>
                                                <img src="/images/brands/samt/samt_website_hero_bg_1784474076063.jpg" alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                <div style={{ position: 'absolute', top: '15px', [isRTL ? 'left' : 'right']: '15px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>{isRTL ? 'مستمر' : 'Ongoing'}</div>
                                            </div>
                                            <div style={{ padding: '20px' }}>
                                                <h3 style={{ margin: '0 0 5px 0', fontFamily: `"${titleFont}", sans-serif` }}>{isRTL ? 'مركز روشن للأعمال' : 'Roshn Business Center'}</h3>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.6, fontSize: '0.9rem' }}>
                                                    <MapPin size={14} /> {isRTL ? 'الرياض، السعودية' : 'Riyadh, KSA'}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Categories */}
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                                <Briefcase size={28} color={darkGold} style={{ marginBottom: '10px' }} />
                                                <div style={{ fontFamily: `"${titleFont}", sans-serif` }}>{isRTL ? 'الأعمال' : 'Portfolio'}</div>
                                            </div>
                                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                                <Bookmark size={28} color={darkGold} style={{ marginBottom: '10px' }} />
                                                <div style={{ fontFamily: `"${titleFont}", sans-serif` }}>{isRTL ? 'محفوظة' : 'Saved'}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* App Bottom Nav */}
                                    <div style={{ background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(20px)', padding: '20px 30px', display: 'flex', justifyContent: 'space-between', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        <Home size={24} color={goldColor} />
                                        <Grid size={24} color="rgba(255,255,255,0.4)" />
                                        <PhoneCall size={24} color="rgba(255,255,255,0.4)" />
                                        <User size={24} color="rgba(255,255,255,0.4)" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
        </div>
    );
};

export default BrandDigitalApplicationsPage;
