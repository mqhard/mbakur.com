import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandStationeryBasicPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5'; // Light Gold / Cream
    const darkGold = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B'; // Darker Gold / Terracotta
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const [activeTab, setActiveTab] = useState('card'); // 'card' or 'letters'

    const logoSrc = project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png';
    const logoDarkSrc = '/images/brands/samt/icon_samt.png';
    const mockupSrc = '/images/brands/samt/business_card_mockup.jpg';

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
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/images/brands/samt/geometry.png')`,
        backgroundSize: '150px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        opacity: opacity,
        zIndex: 0,
        pointerEvents: 'none'
    });

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
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    06 / Stationery
                </div>
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'المطبوعات الأساسية' : 'Basic Stationery'}
                </h1>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                <div style={tabStyle(activeTab === 'card')} onClick={() => setActiveTab('card')}>
                    {isRTL ? 'بطاقة العمل' : 'Business Card'}
                </div>
                <div style={tabStyle(activeTab === 'letters')} onClick={() => setActiveTab('letters')}>
                    {isRTL ? 'الخطابات والملاحظات' : 'Letters & Notepad'}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '2000px' }}>
                <AnimatePresence mode="wait">
                    {activeTab === 'card' && (
                        <motion.div
                            key="card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem', width: '100%' }}
                        >
                            {/* Flat Design Showcase (Front & Back Side by Side) */}
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {/* Front of Card (Logo) */}
                                <div style={{
                                    width: '450px', height: '250px', position: 'relative',
                                    background: goldColor,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)', overflow: 'hidden'
                                }}>
                                    <div style={patternStyle(0.04)}></div>
                                    <img src={logoSrc} alt="SAMT Logo" style={{ width: '40%', opacity: 1, zIndex: 1, filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }} />
                                    <div style={{ position: 'absolute', bottom: '15px', right: '20px', fontSize: '0.7rem', color: primaryColor, opacity: 0.5, letterSpacing: '1px', zIndex: 1 }}>
                                        90mm × 50mm (Front)
                                    </div>
                                </div>

                                {/* Back of Card (Details) */}
                                <div style={{
                                    width: '450px', height: '250px', position: 'relative',
                                    background: '#FFFFFF', color: primaryColor,
                                    display: 'flex', flexDirection: 'column', padding: '30px', boxSizing: 'border-box',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)', overflow: 'hidden'
                                }}>
                                    <div style={patternStyle(0.02)}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', zIndex: 1 }}>
                                        <img src={logoDarkSrc} alt="SAMT Logo" style={{ width: '60px' }} />
                                        <div style={{ fontSize: '0.7rem', color: '#999', opacity: 0.8, letterSpacing: '1px' }}>
                                            90mm × 50mm (Back)
                                        </div>
                                    </div>
                                    <div style={{ flex: 1, zIndex: 1 }}>
                                        <h2 style={{ margin: 0, fontSize: '1.4rem', fontFamily: `"${titleFont}", sans-serif` }}>محمد عبدالرحمن</h2>
                                        <div style={{ fontSize: '1.1rem', color: '#666', fontFamily: `"${subtitleFont}", sans-serif`, marginBottom: '5px' }}>Mohamed Rahman</div>
                                        <div style={{ fontSize: '0.9rem', color: darkGold, fontFamily: `"${subtitleFont}", sans-serif` }}>أخصائي علاقات عامة | PR Specialist</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#555', fontFamily: `"${subtitleFont}", sans-serif`, borderTop: `1px solid ${darkGold}40`, paddingTop: '15px', zIndex: 1 }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <span>+966555555555</span>
                                            <span>mahmad@samt.sa</span>
                                            <span>www.samt.sa</span>
                                        </div>
                                        <div style={{ textAlign: 'right', maxWidth: '150px', lineHeight: '1.4' }}>
                                            Roshn Business Front<br/>Airport Road, Riyadh 13413
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photorealistic Mockup */}
                            <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                                <div style={{ fontSize: '1.5rem', fontFamily: `"${titleFont}", sans-serif`, color: goldColor }}>
                                    {isRTL ? 'المحاكاة الواقعية (Mockup)' : 'Photorealistic Mockup'}
                                </div>
                                <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                                    <img src={mockupSrc} alt="Business Card Mockup" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                                </div>
                            </div>

                        </motion.div>
                    )}

                    {activeTab === 'letters' && (
                        <motion.div
                            key="letters"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', gap: '4rem', alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: 'center' }}
                        >
                            {/* A4 Letterhead */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '297px', height: '420px', background: '#FFF', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    padding: '30px', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden'
                                }}>
                                    <div style={patternStyle(0.02)}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}>
                                        <img src={logoDarkSrc} alt="Logo" style={{ width: '50px' }} />
                                    </div>
                                    <div style={{ flex: 1, borderBottom: `1px solid rgba(0,0,0,0.1)`, marginTop: '30px', marginBottom: '20px', zIndex: 1 }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1 }}>
                                        <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}></div>
                                        <div style={{ width: '90%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}></div>
                                        <div style={{ width: '95%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}></div>
                                        <div style={{ width: '80%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}></div>
                                    </div>
                                    <div style={{ marginTop: 'auto', fontSize: '0.6rem', color: '#999', textAlign: 'center', fontFamily: `"${subtitleFont}", sans-serif`, zIndex: 1 }}>
                                        Roshn Business Front, Airport Road, Riyadh 13413 | www.samt.sa
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center', color: goldColor }}>
                                    <div style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>Official Letter</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>A4 (210mm × 297mm)</div>
                                </div>
                            </div>

                            {/* A5 Notepad */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '210px', height: '297px', background: '#F9F9F9', boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                                    padding: '20px', position: 'relative', borderTop: '5px solid #222', overflow: 'hidden'
                                }}>
                                    <div style={patternStyle(0.02)}></div>
                                    <img src={logoDarkSrc} alt="Logo" style={{ width: '40px', marginBottom: '20px', zIndex: 1, position: 'relative' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '100%', zIndex: 1, position: 'relative' }}>
                                        {[...Array(8)].map((_, i) => (
                                            <div key={i} style={{ width: '100%', borderBottom: '1px solid rgba(0,0,0,0.05)' }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center', color: goldColor }}>
                                    <div style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>Notepad</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>A5 (148mm × 210mm)</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
        </div>
    );
};

export default BrandStationeryBasicPage;
