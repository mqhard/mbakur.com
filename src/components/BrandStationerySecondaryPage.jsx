import React from 'react';
import { motion } from 'framer-motion';

const BrandStationerySecondaryPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5'; 
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const logoSrc = project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt.png';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

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
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'المطبوعات الثانوية' : 'Secondary Stationery'}
                </h1>
                <div style={{ fontSize: '1.2rem', opacity: 0.6, marginTop: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    {isRTL ? 'الأظرف والملفات' : 'Envelopes & Folders'}
                </div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}
            >
                {/* DL Envelope (228 x 113) */}
                <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '342px', height: '169px', // Scaled 1.5x (228x113)
                        background: '#FFF', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        position: 'relative', overflow: 'hidden',
                        display: 'flex', padding: '20px', boxSizing: 'border-box'
                    }}>
                        <img src={logoSrc} alt="SAMT Logo" style={{ width: '40px', height: 'auto', alignSelf: 'flex-start' }} />
                        {/* Flap lines suggestion */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <path d="M 0,0 L 171,70 L 342,0" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                            <path d="M 0,169 L 171,70 L 342,169" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                        </svg>
                    </div>
                    <div style={{ textAlign: 'center', color: goldColor }}>
                        <div style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>DL Envelope</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>228mm × 113mm</div>
                    </div>
                </motion.div>

                {/* C4 Envelope (324 x 229) */}
                <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '324px', height: '229px', // 1:1 scale in px
                        background: '#FFF', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        position: 'relative', overflow: 'hidden',
                        display: 'flex', padding: '20px', boxSizing: 'border-box'
                    }}>
                        <img src={logoSrc} alt="SAMT Logo" style={{ width: '50px', height: 'auto', alignSelf: 'flex-start' }} />
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <path d="M 0,0 L 162,80 L 324,0" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        </svg>
                    </div>
                    <div style={{ textAlign: 'center', color: goldColor }}>
                        <div style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>C4 Envelope</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>324mm × 229mm</div>
                    </div>
                </motion.div>

                {/* Paper Folder (324 x 458 - closed is approx 229x324) */}
                <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '229px', height: '324px', // Closed size representation
                        background: primaryColor, border: `1px solid ${goldColor}50`, 
                        boxShadow: '20px 20px 40px rgba(0,0,0,0.5)',
                        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
                        overflow: 'hidden'
                    }}>
                        <img src={project?.visualIdentity?.logoScreen || '/images/brands/samt/icon_samt_white.png'} alt="SAMT Logo" style={{ width: '40%', opacity: 0.8 }} />
                        {/* Left edge binding line */}
                        <div style={{ position: 'absolute', left: '10px', top: 0, bottom: 0, width: '1px', background: `${goldColor}30` }}></div>
                    </div>
                    <div style={{ textAlign: 'center', color: goldColor }}>
                        <div style={{ fontSize: '1.2rem', fontFamily: `"${titleFont}", sans-serif` }}>Paper Folder</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Open: 458mm × 324mm</div>
                    </div>
                </motion.div>
                
            </motion.div>
        </div>
    );
};

export default BrandStationerySecondaryPage;
