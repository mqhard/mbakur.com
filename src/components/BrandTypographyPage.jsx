import React from 'react';
import { motion } from 'framer-motion';

const BrandTypographyPage = ({ project, t, isRTL }) => {
    const typography = project?.visualIdentity?.typography;
    if (!typography) return null;

    const bgColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const textColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5';
    const accentColor = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B';

    const arabicLetters = "أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي";
    const englishLetters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    const englishNumbers = "0 1 2 3 4 5 6 7 8 9";
    const arabicNumbers = "٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩";

    const marketingWordsAr = ["الهدوء", "الفخامة", "المساحة", "الرقي"];
    const marketingWordsEn = ["Timeless", "Minimalist", "Space", "Premium"];

    const primaryTypeface = typography.primary;
    const secondaryTypeface = typography.secondary;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: bgColor,
            color: textColor,
            display: 'flex',
            overflow: 'hidden'
        }}>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '8vh 8vw 12vh 8vw', // Increased bottom padding from 8vh to 12vh
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid rgba(255,255,255,0.1)`, paddingBottom: '2rem' }}>
                    <div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0, letterSpacing: isRTL ? '0' : '-1px', fontFamily: `"${primaryTypeface.name}", sans-serif` }}>
                            {isRTL ? 'الخطوط الطباعية' : 'Typography System'}
                        </h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.6, marginTop: '1rem', maxWidth: '600px', fontFamily: `"${secondaryTypeface.name}", sans-serif` }}>
                            {isRTL ? 'تجسد الخطوط المستخدمة هوية العلامة التجارية عبر تقديم التوازن المثالي بين الحداثة والأصالة، مما يوفر تجربة قراءة مريحة وفاخرة.' : 'The typefaces embody the brand identity by offering a perfect balance between modernity and heritage, ensuring a comfortable and premium reading experience.'}
                        </p>
                    </div>
                </motion.div>

                {/* Main Content Area */}
                <div style={{ display: 'flex', gap: '4rem', flexGrow: 1, marginTop: '4rem' }}>
                    
                    {/* Primary Typeface */}
                    <motion.div variants={itemVariants} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Primary Typeface / {primaryTypeface.role}
                            </div>
                            <h2 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${primaryTypeface.name}", sans-serif` }}>{primaryTypeface.name}</h2>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem' }}>
                                {primaryTypeface.weights.map(w => <span key={w}>{w}</span>)}
                            </div>
                        </div>

                        <div style={{ fontSize: '1.5rem', lineHeight: '2.5', fontFamily: `"${primaryTypeface.name}", sans-serif`, color: accentColor, wordSpacing: '8px' }}>
                            {isRTL ? arabicLetters : englishLetters}
                        </div>
                        <div style={{ fontSize: '2rem', letterSpacing: '4px', fontFamily: `"${primaryTypeface.name}", sans-serif` }}>
                            {isRTL ? arabicNumbers : englishNumbers}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: 'auto' }}>
                            {(isRTL ? marketingWordsAr : marketingWordsEn).map((word, idx) => (
                                <span key={idx} style={{ 
                                    fontSize: '1.8rem', 
                                    fontFamily: `"${primaryTypeface.name}", sans-serif`,
                                    padding: '0.5rem 1.5rem',
                                    border: `1px solid rgba(255,255,255,0.2)`,
                                    borderRadius: '50px'
                                }}>
                                    {word}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Secondary Typeface */}
                    <motion.div variants={itemVariants} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem', borderLeft: isRTL ? 'none' : '1px solid rgba(255,255,255,0.1)', borderRight: isRTL ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: isRTL ? 0 : '4rem', paddingRight: isRTL ? '4rem' : 0 }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Secondary Typeface / {secondaryTypeface.role}
                            </div>
                            <h2 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${secondaryTypeface.name}", sans-serif` }}>{secondaryTypeface.name}</h2>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem' }}>
                                {secondaryTypeface.weights.map(w => <span key={w}>{w}</span>)}
                            </div>
                        </div>

                        <div style={{ fontSize: '1.5rem', lineHeight: '2.5', fontFamily: `"${secondaryTypeface.name}", sans-serif`, opacity: 0.8, wordSpacing: '8px' }}>
                            {!isRTL ? arabicLetters : englishLetters}
                        </div>
                        <div style={{ fontSize: '2rem', letterSpacing: '4px', fontFamily: `"${secondaryTypeface.name}", sans-serif`, opacity: 0.8 }}>
                            {!isRTL ? arabicNumbers : englishNumbers}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: 'auto' }}>
                            {(!isRTL ? marketingWordsAr : marketingWordsEn).map((word, idx) => (
                                <span key={idx} style={{ 
                                    fontSize: '1.8rem', 
                                    fontFamily: `"${secondaryTypeface.name}", sans-serif`,
                                    padding: '0.5rem 1.5rem',
                                    border: `1px solid rgba(255,255,255,0.1)`,
                                    borderRadius: '50px',
                                    opacity: 0.6
                                }}>
                                    {word}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default BrandTypographyPage;
