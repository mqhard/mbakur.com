import React from 'react';
import { motion } from 'framer-motion';

const BrandColorsPage = ({ data, t, isRTL, project }) => {
    if (!project || !project.visualIdentity || !project.visualIdentity.colorSystem) return null;

    // We take the color system from the project
    // According to the plan, the primary color is the first one
    const primaryColor = project.visualIdentity.colorSystem[0];
    
    // The rest are secondary/sub-secondary. We might need to fill up to 4 rows.
    let secondaryColors = project.visualIdentity.colorSystem.slice(1);
    
    // If we have less than 4 secondary colors, let's pad them to match the editorial layout
    if (secondaryColors.length < 4) {
        secondaryColors = [
            ...secondaryColors,
            { hex: "#D1CFC9", name: "Sand Gray", rgb: "209, 207, 201", cmyk: "20, 15, 20, 0", pantone: "Warm Gray 2 C", desc: "A soft sub-secondary neutral." },
            { hex: "#FFFFFF", name: "Pure White", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", pantone: "White", desc: "Provides necessary negative space." }
        ].slice(0, 4); // Keep it strictly 4 rows
    }

    const containerStyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: isRTL ? 'row-reverse' : 'row',
        background: '#FFFFFF', // The right panel is white
        overflow: 'hidden'
    };

    // Main grid for the color blocks (Left side)
    const colorsGridStyle = {
        flex: '1.2',
        display: 'grid',
        gridTemplateColumns: isRTL ? '15% 15% 20% 50%' : '50% 20% 15% 15%', // Primary | Secondary | 50% | 30%
        height: '100%'
    };

    // Right text panel
    const textPanelStyle = {
        flex: '0.8',
        padding: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#FFFFFF',
        color: '#1A1C1D',
        direction: isRTL ? 'rtl' : 'ltr'
    };

    // Utility to calculate a lighter tint (simulate opacity on white background)
    const hexToRgb = (hex) => {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `${r}, ${g}, ${b}`;
    };

    const renderPrimaryColumn = () => (
        <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
                background: primaryColor.hex, 
                height: '100%', 
                padding: '3rem',
                color: '#FFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', opacity: 0.9, marginTop: '10rem' }}>
                PMS {primaryColor.pantone}<br/>
                C={primaryColor.cmyk.split(',')[0].trim()} M={primaryColor.cmyk.split(',')[1].trim()} Y={primaryColor.cmyk.split(',')[2].trim()} K={primaryColor.cmyk.split(',')[3].trim()}<br/>
                R={primaryColor.rgb.split(',')[0].trim()} G={primaryColor.rgb.split(',')[1].trim()} B={primaryColor.rgb.split(',')[2].trim()}<br/>
                Hex Code {primaryColor.hex.replace('#', '')}
            </div>
        </motion.div>
    );

    const renderSecondaryRows = (percentage, colIndex) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {secondaryColors.map((color, idx) => {
                    let rgbValues = hexToRgb(color.hex).split(',').map(Number);
                    let luma = 0.2126 * rgbValues[0] + 0.7152 * rgbValues[1] + 0.0722 * rgbValues[2];
                    let isLight = luma > 160 || percentage < 100;
                    
                    return (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) + (colIndex * 0.2) }}
                            style={{
                                flex: 1,
                                background: percentage === 100 ? color.hex : `rgba(${hexToRgb(color.hex)}, ${percentage / 100})`,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: percentage === 100 ? 'flex-start' : 'center',
                                alignItems: percentage === 100 ? 'flex-start' : 'center',
                                padding: '1.5rem',
                                color: percentage === 100 ? (isLight ? '#1A1C1D' : '#FFFFFF') : '#FFFFFF'
                            }}
                        >
                            {percentage === 100 ? (
                                <div style={{ fontSize: '0.75rem', lineHeight: '1.6', opacity: 0.9 }}>
                                    PMS {color.pantone}<br/>
                                    C={color.cmyk.split(',')[0].trim()} M={color.cmyk.split(',')[1].trim()} Y={color.cmyk.split(',')[2].trim()} K={color.cmyk.split(',')[3].trim()}<br/>
                                    R={color.rgb.split(',')[0].trim()} G={color.rgb.split(',')[1].trim()} B={color.rgb.split(',')[2].trim()}<br/>
                                    Hex Code {color.hex.replace('#', '')}
                                </div>
                            ) : (
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    %{percentage}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            {/* Color Grid Section */}
            <div style={colorsGridStyle}>
                {isRTL ? (
                    <>
                        {renderSecondaryRows(30, 3)}
                        {renderSecondaryRows(50, 2)}
                        {renderSecondaryRows(100, 1)}
                        {renderPrimaryColumn()}
                    </>
                ) : (
                    <>
                        {renderPrimaryColumn()}
                        {renderSecondaryRows(100, 1)}
                        {renderSecondaryRows(50, 2)}
                        {renderSecondaryRows(30, 3)}
                    </>
                )}
            </div>

            {/* Text Section */}
            <motion.div 
                style={textPanelStyle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div style={{ marginBottom: '3rem', position: 'relative' }}>
                    <h1 style={{ 
                        fontSize: '6rem', 
                        fontWeight: 800, 
                        margin: 0, 
                        color: primaryColor.hex,
                        lineHeight: 1,
                        fontFamily: isRTL ? '"29LT Bukra", sans-serif' : 'inherit'
                    }}>
                        {isRTL ? 'الألـــــوان' : 'COLORS'}
                    </h1>
                    <div style={{ width: '120px', height: '2px', background: primaryColor.hex, margin: '1rem 0', opacity: 0.3 }}></div>
                    <h2 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: 600, 
                        margin: 0, 
                        color: secondaryColors[0].hex, // Terracotta for highlight
                        fontFamily: isRTL ? '"29LT Bukra", sans-serif' : 'inherit'
                    }}>
                        {isRTL ? 'الرئيسية' : 'PALETTE'}
                    </h2>
                    <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 500, 
                        margin: '0.5rem 0 0 0', 
                        color: '#46729B', // Muted Blue from reference
                        fontFamily: isRTL ? '"29LT Bukra", sans-serif' : 'inherit'
                    }}>
                        {isRTL ? 'COLORS PALETTE Primary colors' : 'Primary colors'}
                    </h3>
                </div>

                <div style={{ maxWidth: '500px' }}>
                    <p style={{ 
                        fontSize: '1.3rem', 
                        lineHeight: 1.8, 
                        color: '#444', 
                        marginBottom: '2rem',
                        fontWeight: isRTL ? 500 : 400
                    }}>
                        {isRTL 
                            ? 'يلعب اللون دوراً مهماً في الهوية. حيث يسهم الاستخدام المتسق للألوان في تماسك مظهر الهوية وتناغمه عبر جميع الوسائط ذات الصلة.'
                            : 'Color plays a significant role in identity. The consistent use of color contributes to the cohesion and harmony of the identity\'s appearance across all relevant media.'}
                    </p>
                    {isRTL && (
                        <p style={{ 
                            fontSize: '1.3rem', 
                            lineHeight: 1.8, 
                            color: '#444',
                            fontWeight: 400,
                            fontFamily: 'sans-serif'
                        }}>
                            Color plays a significant role in identity. The consistent use of color contributes to the cohesion and harmony of the identity's appearance across all relevant media.
                        </p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default BrandColorsPage;
