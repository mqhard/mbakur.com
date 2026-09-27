import React from 'react';
import { motion } from 'framer-motion';

const BrandGridsPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const accentColor = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B';
    const lightColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#E4D6BA';
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const columns = Array.from({ length: 12 });
    const gridLines = Array.from({ length: 13 }); // 12 columns mean 13 lines
    
    const lineVariants = {
        hidden: { scaleY: 0, opacity: 0 },
        visible: { 
            scaleY: 1, 
            opacity: 0.1, 
            transition: { duration: 1.5, ease: "easeInOut" } 
        }
    };

    const horizontalLineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: { 
            scaleX: 1, 
            opacity: 0.1, 
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } 
        }
    };

    const blockVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } }
    };

    const spacingScales = [
        { label: '8px', size: 8 },
        { label: '16px', size: 16 },
        { label: '24px', size: 24 },
        { label: '32px', size: 32 },
        { label: '64px', size: 64 },
    ];

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: primaryColor,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF'
        }}>
            {/* Background Grid Drawing Animation */}
            <div style={{
                position: 'absolute',
                top: '5vh',
                bottom: '5vh',
                left: '5vw',
                right: '5vw',
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                {gridLines.map((_, idx) => (
                    <motion.div 
                        key={`v-${idx}`}
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            width: '1px',
                            height: '100%',
                            background: '#FFFFFF',
                            transformOrigin: 'top'
                        }}
                    />
                ))}

                {/* Horizontal Baseline Grid */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <motion.div 
                            key={`h-${idx}`}
                            variants={horizontalLineVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                height: '1px',
                                width: '100%',
                                background: '#FFFFFF',
                                transformOrigin: isRTL ? 'right' : 'left'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                padding: '8vh 8vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ 
                        maxWidth: '600px', 
                        alignSelf: isRTL ? 'flex-end' : 'flex-start',
                        textAlign: isRTL ? 'right' : 'left'
                    }}
                >
                    <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                        05 / Visual System
                    </div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0, letterSpacing: isRTL ? '0' : '-1px', fontFamily: `"${titleFont}", sans-serif` }}>
                        {isRTL ? 'التكوين البصري' : 'Grids & Layout'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.6, marginTop: '1.5rem', lineHeight: 1.6, fontFamily: `"${subtitleFont}", sans-serif` }}>
                        {isRTL 
                            ? project?.geometry?.desc || 'تعتمد الهوية على شبكة معمارية دقيقة تفصل المساحات بأناقة وتضمن توازناً بصرياً بين الفراغ والمحتوى.'
                            : 'The brand utilizes a strict architectural grid with fine lines to divide space elegantly, ensuring a perfect balance between negative space and content.'}
                    </p>
                </motion.div>

                {/* Bottom Section: Margins & Spacing */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    
                    {/* Spacing Scale */}
                    <motion.div 
                        variants={blockVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', fontFamily: `"${titleFont}", sans-serif` }}>
                                {isRTL ? 'نظام المسافات' : 'Spacing System'}
                            </h3>
                            <div style={{ fontSize: '0.9rem', opacity: 0.5, fontFamily: `"${subtitleFont}", sans-serif` }}>Base 8px Scale</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}>
                            {spacingScales.map((scale, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: scale.size }}
                                        transition={{ duration: 0.8, delay: 1.5 + (idx * 0.1) }}
                                        style={{
                                            width: scale.size,
                                            background: accentColor,
                                            opacity: 0.8
                                        }}
                                    />
                                    <div style={{ fontSize: '0.8rem', opacity: 0.6, fontFamily: `"${subtitleFont}", sans-serif` }}>
                                        {scale.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Margins Info Box */}
                    <motion.div 
                        variants={blockVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            padding: '2rem',
                            border: `1px solid rgba(255,255,255,0.1)`,
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(10px)',
                            textAlign: isRTL ? 'right' : 'left',
                            maxWidth: '300px'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', fontFamily: `"${titleFont}", sans-serif` }}>
                            {isRTL ? 'الهوامش الثابتة' : 'Global Margins'}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8, fontFamily: `"${subtitleFont}", sans-serif` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                <span>{isRTL ? 'أفقي (Horizontal)' : 'Horizontal'}</span>
                                <span>8vw</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem' }}>
                                <span>{isRTL ? 'عمودي (Vertical)' : 'Vertical'}</span>
                                <span>8vh</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
            
            {/* Annotation Lines indicating margins */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 2 }}
                style={{
                    position: 'absolute',
                    top: '5vh',
                    left: '5vw',
                    width: '3vw', // The gap between left edge and grid start is 5vw. 
                    borderTop: `1px solid ${accentColor}`,
                    borderLeft: `1px solid ${accentColor}`,
                    height: '10px',
                    zIndex: 3
                }}
            />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 2 }}
                style={{
                    position: 'absolute',
                    top: '2.5vh',
                    left: '2.5vw',
                    fontSize: '0.8rem',
                    color: accentColor,
                    fontFamily: `"${subtitleFont}", sans-serif`,
                    zIndex: 3
                }}
            >
                5vw / 5vh
            </motion.div>

        </div>
    );
};

export default BrandGridsPage;
