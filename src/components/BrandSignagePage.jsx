import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandSignagePage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5'; // Cream
    const darkGold = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B'; // Gold
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const [activeTab, setActiveTab] = useState('indoor'); // 'indoor', 'outdoor', 'brochure'

    const logoWhiteSrc = project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png';

    const tabStyle = (isActive) => ({
        padding: '1rem 2rem',
        cursor: 'pointer',
        borderBottom: `2px solid ${isActive ? goldColor : 'transparent'}`,
        color: isActive ? goldColor : 'rgba(255,255,255,0.7)',
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
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    08 / Publications & Signage
                </div>
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'المطبوعات واللوحات' : 'Publications & Signage'}
                </h1>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                <div style={tabStyle(activeTab === 'indoor')} onClick={() => setActiveTab('indoor')}>
                    {isRTL ? 'اللوحات الداخلية' : 'Indoor Signage'}
                </div>
                <div style={tabStyle(activeTab === 'outdoor')} onClick={() => setActiveTab('outdoor')}>
                    {isRTL ? 'اللوحات الخارجية' : 'Outdoor Signage'}
                </div>
                <div style={tabStyle(activeTab === 'brochure')} onClick={() => setActiveTab('brochure')}>
                    {isRTL ? 'الكتيبات الإعلانية' : 'Brochures'}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                    
                    {/* INDOOR SIGNAGE */}
                    {activeTab === 'indoor' && (
                        <motion.div
                            key="indoor"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <div style={{ 
                                width: '100%', 
                                height: '600px', 
                                borderRadius: '16px', 
                                overflow: 'hidden', 
                                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                                position: 'relative'
                            }}>
                                <img src="/images/brands/samt/reception_mockup.jpg" alt="Indoor Reception" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                
                                {/* Info Box */}
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: '30px', 
                                    left: isRTL ? 'auto' : '30px', 
                                    right: isRTL ? '30px' : 'auto', 
                                    background: 'rgba(20,20,20,0.8)', 
                                    backdropFilter: 'blur(10px)', 
                                    padding: '20px 30px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <h3 style={{ margin: '0 0 10px 0', fontFamily: `"${titleFont}", sans-serif`, color: goldColor }}>Reception Signage</h3>
                                    <div style={{ fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.9rem', opacity: 0.8 }}>
                                        Material: 3D Brushed Brass / Dark Marble<br/>
                                        Lighting: Warm Backlit Halo
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* OUTDOOR SIGNAGE */}
                    {activeTab === 'outdoor' && (
                        <motion.div
                            key="outdoor"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <div style={{ 
                                width: '100%', 
                                height: '600px', 
                                borderRadius: '16px', 
                                overflow: 'hidden', 
                                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                                position: 'relative'
                            }}>
                                <img src="/images/brands/samt/building_mockup.jpg" alt="Outdoor Building Signage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                
                                {/* Info Box */}
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: '30px', 
                                    left: isRTL ? 'auto' : '30px', 
                                    right: isRTL ? '30px' : 'auto', 
                                    background: 'rgba(255,255,255,0.9)', 
                                    backdropFilter: 'blur(10px)', 
                                    padding: '20px 30px', 
                                    borderRadius: '12px',
                                    color: '#000'
                                }}>
                                    <h3 style={{ margin: '0 0 10px 0', fontFamily: `"${titleFont}", sans-serif`, color: primaryColor }}>Exterior Building Sign</h3>
                                    <div style={{ fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.9rem', opacity: 0.8 }}>
                                        Material: Dark Matte Metal / Raw Concrete<br/>
                                        Style: Architectural Minimalist
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* BROCHURE LAYOUT */}
                    {activeTab === 'brochure' && (
                        <motion.div
                            key="brochure"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'center' }}
                        >
                            {/* Open Brochure Simulation */}
                            <div style={{ display: 'flex', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                                {/* Left Page */}
                                <div style={{ width: '400px', height: '565px', background: goldColor, position: 'relative', overflow: 'hidden', color: primaryColor, padding: '40px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={patternStyle(0.05)}></div>
                                    <img src={logoWhiteSrc} alt="Logo" style={{ height: '30px', filter: 'invert(1)', alignSelf: 'flex-start', zIndex: 1 }} />
                                    
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
                                        <h2 style={{ fontSize: '2.5rem', fontFamily: `"${titleFont}", sans-serif`, margin: '0 0 20px 0', lineHeight: 1.1 }}>
                                            Spaces that<br/>inspire.
                                        </h2>
                                        <p style={{ fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.8 }}>
                                            At SAMT, we believe that architecture is more than just building walls; it's about crafting experiences, shaping emotions, and leaving a timeless legacy.
                                        </p>
                                    </div>
                                    <div style={{ zIndex: 1, fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        01 — Introduction
                                    </div>
                                </div>
                                {/* Center Fold Shadow */}
                                <div style={{ width: '1px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)', zIndex: 10 }}></div>
                                {/* Right Page */}
                                <div style={{ width: '400px', height: '565px', background: '#FFF', position: 'relative', overflow: 'hidden' }}>
                                    <img src="/images/brands/samt/samt_website_hero_bg_1784474076063.jpg" alt="Project" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                                    <div style={{ padding: '30px', color: primaryColor }}>
                                        <h3 style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif`, margin: '0 0 10px 0' }}>Riyadh Financial Tower</h3>
                                        <p style={{ fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.8rem', lineHeight: 1.6, opacity: 0.7 }}>
                                            A state-of-the-art commercial high-rise combining sustainable design with premium aesthetic finishes.
                                        </p>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '40px', right: '40px', fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.8rem', fontWeight: 'bold', color: primaryColor }}>
                                        02
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

export default BrandSignagePage;
