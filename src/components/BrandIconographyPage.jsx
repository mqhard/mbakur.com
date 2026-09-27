import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const BrandIconographyPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const secondaryColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5';
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    // Get 120 unique icons from Lucide for the grid
    const iconsList = useMemo(() => {
        return Object.keys(LucideIcons)
            .filter(key => typeof LucideIcons[key] === 'object' || typeof LucideIcons[key] === 'function')
            .filter(key => key !== 'createLucideIcon' && key !== 'default' && key !== 'LucideProps' && key !== 'Icon')
            .slice(150, 406); // get 256 icons (16x16 grid)
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.02 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const textVariants = {
        hidden: { opacity: 0, x: isRTL ? -30 : 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
    };

    const flexDirection = isRTL ? 'row-reverse' : 'row';

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: flexDirection,
            overflow: 'hidden',
            background: primaryColor // Default background
        }}>
            
            {/* Icons Grid Section (65%) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    flex: '0 0 65%',
                    background: '#FFFFFF',
                    padding: '5vh 4vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isRTL ? '-20px 0 50px rgba(0,0,0,0.1)' : '20px 0 50px rgba(0,0,0,0.1)',
                    zIndex: 2
                }}
            >
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(16, 1fr)',
                        gap: '1.2vw',
                        width: '100%',
                        maxWidth: '1200px',
                        justifyItems: 'center',
                        alignItems: 'center'
                    }}
                >
                    {iconsList.map((iconName, index) => {
                        const IconComponent = LucideIcons[iconName];
                        if (!IconComponent) return null;
                        return (
                            <motion.div key={index} variants={itemVariants} style={{ color: primaryColor, opacity: 0.9 }}>
                                <IconComponent size={20} strokeWidth={1} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Title & Pattern Section (35%) */}
            <div style={{
                flex: '0 0 35%',
                background: primaryColor,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5vw',
                zIndex: 1
            }}>
                {/* Background Pattern */}
                {project?.geometry?.img && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.08 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            left: 0,
                            height: '60%',
                            backgroundImage: `url(${project.geometry.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom center',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
                            pointerEvents: 'none'
                        }}
                    />
                )}

                {/* Text Content */}
                <motion.div 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <h2 style={{ 
                        color: '#FFFFFF', 
                        fontSize: '3.5rem', 
                        margin: 0, 
                        lineHeight: 1.2,
                        fontFamily: `"${titleFont}", sans-serif`,
                        marginBottom: '1rem'
                    }}>
                        {isRTL ? 'استخدامات الرموز' : 'System Icons Usage'}
                    </h2>
                    <p style={{ 
                        color: secondaryColor, 
                        fontSize: '1.5rem', 
                        margin: 0, 
                        opacity: 0.9,
                        fontFamily: `"${subtitleFont}", sans-serif`
                    }}>
                        {isRTL ? 'System Icons Usage' : 'استخدامات الرموز'}
                    </p>
                </motion.div>
            </div>

        </div>
    );
};

export default BrandIconographyPage;
