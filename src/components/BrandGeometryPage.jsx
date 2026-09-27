import React from 'react';
import { motion } from 'framer-motion';

const BrandGeometryPage = ({ project, t, isRTL }) => {
    // Colors based on the SAMT reference image
    const bgColor = '#111111'; // Very dark background like the reference
    const goldColor = '#C18A58'; // The bronze/gold color from the reference
    const lightGoldColor = 'rgba(193, 138, 88, 0.4)';
    const veryLightGoldColor = 'rgba(193, 138, 88, 0.1)';

    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 0.3, transition: { duration: 2, ease: "easeInOut" } }
    };

    // Sub-components for repeated blocks
    const SectionBlock = ({ title, children }) => (
        <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
                color: goldColor, 
                fontSize: '1rem', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                marginBottom: '1rem',
                fontFamily: `"${subtitleFont}", sans-serif`,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                {title}
            </h3>
            <div style={{
                height: '1px',
                width: '100%',
                background: veryLightGoldColor,
                marginBottom: '1rem'
            }} />
            <div style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: `"${subtitleFont}", sans-serif` }}>
                {children}
            </div>
        </motion.div>
    );

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: bgColor,
            color: '#FFFFFF',
            display: 'flex',
            padding: '5vh 5vw',
            overflow: 'hidden',
            flexDirection: isRTL ? 'row-reverse' : 'row',
            gap: '2vw'
        }}>
            
            {/* Left Column */}
            <div style={{ flex: '0 0 20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                <SectionBlock title={isRTL ? "النسبة الذهبية" : "GOLDEN RATIO"}>
                    <div style={{ color: goldColor, fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: `"${titleFont}", sans-serif` }}>3 : 4</div>
                    <p>{isRTL ? 'تم بناء الشعار بناءً على النسبة الذهبية 3:4 لتحقيق التوازن البصري والانسجام المثالي.' : 'The logo is built upon the golden ratio 3:4 to achieve visual balance and perfect harmony.'}</p>
                </SectionBlock>

                <SectionBlock title={isRTL ? "الشبكة الهندسية" : "GEOMETRIC GRID"}>
                    <div style={{ 
                        width: '100%', 
                        height: '120px', 
                        border: `1px solid ${lightGoldColor}`,
                        position: 'relative',
                        marginBottom: '1rem'
                    }}>
                        {/* Mini Grid Drawing */}
                        <svg width="100%" height="100%" style={{ position: 'absolute', zIndex: 2 }}>
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke={lightGoldColor} strokeWidth="0.5" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke={lightGoldColor} strokeWidth="0.5" />
                            <circle cx="50%" cy="50%" r="30%" stroke={lightGoldColor} strokeWidth="0.5" fill="none" />
                            <line x1="50%" y1="0" x2="50%" y2="100%" stroke={lightGoldColor} strokeWidth="0.5" />
                            <line x1="0" y1="50%" x2="100%" y2="50%" stroke={lightGoldColor} strokeWidth="0.5" />
                        </svg>
                        {/* The Mini Logo */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                            <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} style={{ width: '40%', height: '40%', objectFit: 'contain', filter: 'brightness(1) sepia(1) hue-rotate(-30deg) saturate(2) contrast(1.2)', opacity: 0.8 }} alt="Brand Logo Mini" />
                        </div>
                    </div>
                    <p>{isRTL ? 'تم تصميم الشعار باستخدام أشكال هندسية دقيقة تعتمد على النسبة الذهبية.' : 'The logo is designed using precise geometric shapes based on the golden ratio.'}</p>
                </SectionBlock>

                <SectionBlock title={isRTL ? "مبادئ التصميم" : "DESIGN PRINCIPLES"}>
                    <ul style={{ paddingLeft: isRTL ? 0 : '1.2rem', paddingRight: isRTL ? '1.2rem' : 0, margin: 0, listStyleType: 'disc', color: '#AAAAAA' }}>
                        <li>{isRTL ? 'البناء المتناظر' : 'Symmetrical construction'}</li>
                        <li>{isRTL ? 'سماكة خط ثابتة' : 'Consistent stroke thickness'}</li>
                        <li>{isRTL ? 'التوازن البصري' : 'Optical balance'}</li>
                        <li>{isRTL ? 'مساحات سلبية متساوية' : 'Equal negative space'}</li>
                        <li>{isRTL ? 'تناظر دوراني مثالي' : 'Perfect rotational symmetry'}</li>
                    </ul>
                </SectionBlock>
            </div>

            {/* Center Column (Hero Logo Construction) */}
            <motion.div 
                initial="hidden"
                animate="visible"
                style={{ flex: '0 0 56%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
            >
                {/* Title */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <div style={{ color: goldColor, fontSize: '0.9rem', letterSpacing: '2px', opacity: 0.8, fontFamily: `"${subtitleFont}", sans-serif`, textTransform: 'uppercase' }}>
                        05 / Visual System
                    </div>
                    <h1 style={{ color: '#FFFFFF', fontSize: '3rem', margin: '0.5rem 0 0 0', fontFamily: `"${titleFont}", sans-serif` }}>
                        {isRTL ? 'النظام البصري' : 'Visual System'}
                    </h1>
                </motion.div>

                <div style={{ position: 'relative', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    
                    {/* Architectural Grid SVG Overlay */}
                    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, overflow: 'visible' }}>
                        {/* Outer Box */}
                        <motion.rect x="10%" y="10%" width="80%" height="80%" stroke={lightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />
                        {/* Diagonals */}
                        <motion.line x1="10%" y1="10%" x2="90%" y2="90%" stroke={lightGoldColor} strokeWidth="1" variants={lineVariants} />
                        <motion.line x1="90%" y1="10%" x2="10%" y2="90%" stroke={lightGoldColor} strokeWidth="1" variants={lineVariants} />
                        {/* Cross */}
                        <motion.line x1="50%" y1="0%" x2="50%" y2="100%" stroke={lightGoldColor} strokeWidth="1" strokeDasharray="5,5" variants={lineVariants} />
                        <motion.line x1="0%" y1="50%" x2="100%" y2="50%" stroke={lightGoldColor} strokeWidth="1" strokeDasharray="5,5" variants={lineVariants} />
                        {/* Circles */}
                        <motion.circle cx="50%" cy="50%" r="40%" stroke={lightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />
                        <motion.circle cx="50%" cy="50%" r="20%" stroke={lightGoldColor} strokeWidth="1" fill="none" strokeDasharray="5,5" variants={lineVariants} />
                        <motion.circle cx="30%" cy="30%" r="28%" stroke={veryLightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />
                        <motion.circle cx="70%" cy="70%" r="28%" stroke={veryLightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />
                        <motion.circle cx="30%" cy="70%" r="28%" stroke={veryLightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />
                        <motion.circle cx="70%" cy="30%" r="28%" stroke={veryLightGoldColor} strokeWidth="1" fill="none" variants={lineVariants} />

                        {/* Dimensions markers */}
                        <text x="50%" y="5%" fill={goldColor} fontSize="12" textAnchor="middle" fontFamily={`"${subtitleFont}", sans-serif`}>3x</text>
                        <text x="95%" y="50%" fill={goldColor} fontSize="12" dominantBaseline="middle" fontFamily={`"${subtitleFont}", sans-serif`}>4x</text>
                    </svg>

                    {/* The Logo */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, filter: 'brightness(0)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'brightness(1) sepia(1) hue-rotate(-30deg) saturate(2) contrast(1.2)' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        style={{ width: '100%', height: '100%', zIndex: 2 }}
                    >
                        {/* We use the logo icon from the project data, tinted to look gold via CSS filter above */}
                        <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Brand Logo" />
                    </motion.div>
                </div>

                {/* Bottom Logo Text */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ textAlign: 'center', marginTop: '2rem', zIndex: 2 }}
                >
                    <div style={{ color: goldColor, fontSize: '3rem', fontFamily: `"${titleFont}", sans-serif`, letterSpacing: '4px' }}>
                        سمت
                    </div>
                    <div style={{ color: goldColor, fontSize: '2.5rem', fontFamily: `"${titleFont}", sans-serif`, letterSpacing: '10px', marginTop: '-0.5rem' }}>
                        SAMT
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                        <div style={{ width: '40px', height: '1px', background: lightGoldColor }} />
                        <div style={{ color: goldColor, fontSize: '0.8rem', letterSpacing: '4px', fontFamily: `"${subtitleFont}", sans-serif` }}>
                            ARCHITECTURE & INTERIOR
                        </div>
                        <div style={{ width: '40px', height: '1px', background: lightGoldColor }} />
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Column */}
            <div style={{ flex: '0 0 20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                <SectionBlock title={isRTL ? "بناء الشعار" : "LOGO CONSTRUCTION"}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', margin: '2rem 0' }}>
                        {/* Diamond */}
                        <div style={{ width: '20px', height: '20px', background: goldColor, transform: 'rotate(45deg)' }} />
                        <div style={{ color: goldColor }}>+</div>
                        {/* Chevron */}
                        <div style={{ width: '20px', height: '20px', borderTop: `4px solid ${goldColor}`, borderRight: `4px solid ${goldColor}`, transform: 'rotate(-45deg)' }} />
                        <div style={{ color: goldColor }}>+</div>
                        {/* Arc */}
                        <div style={{ width: '30px', height: '15px', borderTop: `4px solid ${goldColor}`, borderLeft: `4px solid ${goldColor}`, borderRight: `4px solid ${goldColor}`, borderRadius: '15px 15px 0 0' }} />
                        <div style={{ color: goldColor }}>=</div>
                        {/* Final Logo Mini */}
                        <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} style={{ width: '40px', filter: 'brightness(0) sepia(1) hue-rotate(-30deg) saturate(3) contrast(1.2)' }} alt="Logo mini" />
                    </div>
                </SectionBlock>

                <SectionBlock title={isRTL ? "النسب والمقاسات" : "PROPORTIONS"}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ 
                            width: '40px', 
                            height: '40px', 
                            border: `1px solid ${goldColor}`, 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: 'rotate(45deg)'
                        }}>
                            <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} style={{ width: '60%', height: '60%', filter: 'brightness(0) sepia(1) hue-rotate(-30deg) saturate(3) contrast(1.2)', transform: 'rotate(-45deg)' }} alt="Logo Proportion" />
                        </div>
                        <span style={{ color: goldColor }}>= X</span>
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>Width : Height</div>
                    <div style={{ color: goldColor, fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>3x : 4x</div>
                </SectionBlock>

                <SectionBlock title={isRTL ? "المساحة الآمنة" : "CLEAR SPACE"}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            border: `1px dashed ${lightGoldColor}`, 
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{ width: '40px', height: '40px', border: `1px solid ${goldColor}` }}>
                                <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} style={{ width: '100%', height: '100%', filter: 'brightness(0) sepia(1) hue-rotate(-30deg) saturate(3)' }} alt="Logo clear space" />
                            </div>
                            <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', color: goldColor, fontSize: '0.7rem' }}>X</span>
                            <span style={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', color: goldColor, fontSize: '0.7rem' }}>X</span>
                            <span style={{ position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)', color: goldColor, fontSize: '0.7rem' }}>X</span>
                            <span style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', color: goldColor, fontSize: '0.7rem' }}>X</span>
                        </div>
                        <div style={{ flex: 1, fontSize: '0.8rem' }}>
                            {isRTL ? 'المساحة الآمنة حول الشعار تساوي (X) وهو عرض شكل المعين.' : 'Minimum clear space around the logo is equal to X (the width of the diamond).'}
                        </div>
                    </div>
                </SectionBlock>
            </div>

        </div>
    );
};

export default BrandGeometryPage;
