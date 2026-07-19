import React from 'react';
import { motion } from 'framer-motion';
import { Maximize, Palette, AlertTriangle } from 'lucide-react';

const BrandLogoGuidelines = ({ guidelines, isRTL, project }) => {
    if (!guidelines || !project) return null;

    const { logotype, clearSpace, colorVersions, imageryAndPositioning, incorrectUse } = guidelines;

    // Logo & Icon sources
    const iconSrc = project.visualIdentity?.logoScreen || "/images/brands/samt/icon_samt.png";
    const brandNameDisplay = isRTL ? (project.brandNameAr || project.brandName) : project.brandName;

    // Design Tokens (Matching SAMT)
    const charcoal = '#1A1C1D';
    const terracotta = '#C6725B';
    const sand = '#E4D6BA';
    const textLight = '#EBE2D5';

    const sectionStyle = {
        padding: '6vh 0',
        borderBottom: `1px solid rgba(255,255,255,0.05)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    };

    const headerStyle = {
        fontSize: '1.8rem',
        fontWeight: 300,
        color: textLight,
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
    };

    const descStyle = {
        fontSize: '1.05rem',
        lineHeight: 1.8,
        opacity: 0.7,
        fontWeight: 300,
        maxWidth: '800px'
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4vh', marginTop: '4vh' }}>
            
            {/* 1. Logotype & Brandmark */}
            {logotype && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={sectionStyle}>
                    <h3 style={headerStyle}>
                        <span style={{ width: '20px', height: '2px', background: terracotta, display: 'inline-block' }}></span>
                        {isRTL ? logotype.titleAr : logotype.titleEn}
                    </h3>
                    <p style={descStyle}>{isRTL ? logotype.descAr : logotype.descEn}</p>
                    
                    {/* Visual Demo */}
                    <div style={{ width: '100%', height: '300px', background: charcoal, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} 
                            whileInView={{ scale: 1, opacity: 1 }} 
                            transition={{ duration: 1 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                        >
                            <img src={iconSrc} alt="Brand Icon" style={{ height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            <div style={{ color: textLight, fontSize: '1.8rem', letterSpacing: isRTL ? '0px' : '8px', fontWeight: isRTL ? 500 : 300, fontFamily: 'sans-serif' }}>{brandNameDisplay}</div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* 2. Clear Space & Minimum Size */}
            {clearSpace && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={sectionStyle}>
                    <h3 style={headerStyle}>
                        <Maximize size={24} color={terracotta} />
                        {isRTL ? clearSpace.titleAr : clearSpace.titleEn}
                    </h3>
                    <p style={descStyle}>{isRTL ? clearSpace.descAr : clearSpace.descEn}</p>
                    
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {/* Clear Space Demo */}
                        <motion.div whileHover="hover" style={{ flex: '2 1 400px', height: '350px', background: sand, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                            {/* Grid Overlay */}
                            <motion.div 
                                variants={{ hover: { opacity: 1 } }} 
                                initial={{ opacity: 0 }} 
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(198, 114, 91, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(198, 114, 91, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />
                            {/* The Logo */}
                            <div style={{ position: 'relative', padding: '40px', border: `1px dashed ${terracotta}` }}>
                                <img src={iconSrc} alt="Clear Space" style={{ height: '60px', filter: 'brightness(0)' }} />
                                {/* X Indicators */}
                                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', color: terracotta, fontWeight: 'bold' }}>{clearSpace.unit}</motion.div>
                                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', color: terracotta, fontWeight: 'bold' }}>{clearSpace.unit}</motion.div>
                                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} style={{ position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', color: terracotta, fontWeight: 'bold' }}>{clearSpace.unit}</motion.div>
                                <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', color: terracotta, fontWeight: 'bold' }}>{clearSpace.unit}</motion.div>
                            </div>
                        </motion.div>
                        
                        {/* Minimum Size Demo */}
                        <div style={{ flex: '1 1 250px', height: '350px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <img src={iconSrc} alt="Print Min Size" style={{ height: '15px', filter: 'brightness(0) invert(1)' }} />
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, color: textLight }}>Print: 15mm</div>
                            </div>
                            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <img src={iconSrc} alt="Digital Min Size" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, color: textLight }}>Digital: 30px</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* 3. Color Versions */}
            {colorVersions && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={sectionStyle}>
                    <h3 style={headerStyle}>
                        <Palette size={24} color={terracotta} />
                        {isRTL ? colorVersions.titleAr : colorVersions.titleEn}
                    </h3>
                    <p style={descStyle}>{isRTL ? colorVersions.descAr : colorVersions.descEn}</p>

                    {/* Three side-by-side logo version cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {[
                            {
                                bg: charcoal,
                                label: isRTL ? 'إصدار الألوان الكاملة' : 'Full-Color Version',
                                sublabel: isRTL ? 'على الخلفية الداكنة' : 'On Dark Background',
                                logoFilter: 'none',
                                logoBlend: 'screen',
                                textColor: sand,
                                border: '1px solid rgba(198,114,91,0.3)',
                                tagBg: 'rgba(198,114,91,0.15)',
                                tagColor: terracotta
                            },
                            {
                                bg: sand,
                                label: isRTL ? 'الإصدار الفاتح' : 'Light Version',
                                sublabel: isRTL ? 'على الخلفية الفاتحة' : 'On Light Background',
                                logoFilter: 'brightness(0)',
                                logoBlend: 'normal',
                                textColor: charcoal,
                                border: '1px solid rgba(26,28,29,0.1)',
                                tagBg: 'rgba(26,28,29,0.08)',
                                tagColor: charcoal
                            },
                            {
                                bg: '#F0EDE8',
                                label: isRTL ? 'الإصدار الرمادي' : 'Grayscale Version',
                                sublabel: isRTL ? 'للطباعة أبيض وأسود' : 'For B&W Print',
                                logoFilter: 'grayscale(100%) brightness(0.3)',
                                logoBlend: 'normal',
                                textColor: '#444',
                                border: '1px solid rgba(0,0,0,0.08)',
                                tagBg: 'rgba(0,0,0,0.06)',
                                tagColor: '#555'
                            }
                        ].map((version, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12, duration: 0.5 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: version.border,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
                                }}
                            >
                                {/* Logo display area */}
                                <div style={{
                                    background: version.bg,
                                    height: '220px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    padding: '2rem',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={iconSrc}
                                        alt={version.label}
                                        style={{
                                            height: '90px',
                                            objectFit: 'contain',
                                            filter: version.logoFilter,
                                            mixBlendMode: version.logoBlend
                                        }}
                                    />
                                    <div style={{
                                        color: version.textColor,
                                        fontSize: '1.4rem',
                                        letterSpacing: isRTL ? '0px' : '6px',
                                        fontWeight: isRTL ? 500 : 300,
                                        fontFamily: 'sans-serif',
                                        opacity: 0.9
                                    }}>
                                        {brandNameDisplay}
                                    </div>
                                </div>
                                {/* Info bar */}
                                <div style={{
                                    padding: '1rem 1.2rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderTop: '1px solid rgba(255,255,255,0.06)'
                                }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: textLight, marginBottom: '0.2rem' }}>
                                        {version.label}
                                    </div>
                                    <div style={{ fontSize: '0.78rem', opacity: 0.5, color: textLight }}>
                                        {version.sublabel}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Description per version */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {colorVersions.versions.map((v, idx) => (
                            <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: terracotta, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {isRTL ? v.typeAr : v.typeEn}
                                </div>
                                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.65, color: textLight }}>
                                    {isRTL ? v.descAr : v.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* 4. Incorrect Use */}
            {incorrectUse && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={sectionStyle}>
                    <h3 style={headerStyle}>
                        <AlertTriangle size={24} color={terracotta} />
                        {isRTL ? incorrectUse.titleAr : incorrectUse.titleEn}
                    </h3>
                    <p style={descStyle}>{isRTL ? incorrectUse.descAr : incorrectUse.descEn}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { label: isRTL ? 'لا تقم بضغط الشعار' : 'Do not squeeze', transform: 'scaleX(0.6)' },
                            { label: isRTL ? 'لا تغير الألوان' : 'Do not change colors', filter: 'hue-rotate(90deg) brightness(0)' },
                            { label: isRTL ? 'لا تضف ظلالاً مزعجة' : 'Do not add drop shadows', filter: 'brightness(0) drop-shadow(5px 5px 5px rgba(0,0,0,0.8))' },
                            { label: isRTL ? 'لا تقم بإمالة الشعار' : 'Do not rotate', transform: 'rotate(15deg)' }
                        ].map((err, idx) => (
                            <div key={idx} style={{ background: sand, borderRadius: '12px', height: '200px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    <img src={iconSrc} alt="Error" style={{ height: '50px', transform: err.transform, filter: err.filter || 'brightness(0)' }} />
                                    {/* The Elegant Red Diagonal Line */}
                                    <div style={{ position: 'absolute', top: '50%', left: '-20%', width: '140%', height: '2px', background: terracotta, transform: 'translateY(-50%) rotate(-25deg)', opacity: 0.8 }}></div>
                                </div>
                                <div style={{ background: '#fff', padding: '0.8rem', textAlign: 'center', fontSize: '0.85rem', color: charcoal, fontWeight: 500 }}>
                                    {err.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

        </div>
    );
};

export default BrandLogoGuidelines;
