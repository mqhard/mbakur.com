import React from 'react';
import { motion } from 'framer-motion';

const BrandPromotionalPage = ({ project, t, isRTL }) => {
    const primaryColor = project?.visualIdentity?.colorSystem?.[0]?.hex || '#1A1C1D';
    const goldColor = project?.visualIdentity?.colorSystem?.[2]?.hex || '#EBE2D5'; // Cream
    const darkGold = project?.visualIdentity?.colorSystem?.[1]?.hex || '#C6725B'; // Gold
    
    const typography = project?.visualIdentity?.typography;
    const titleFont = typography?.primary?.name || 'sans-serif';
    const subtitleFont = typography?.secondary?.name || 'sans-serif';

    const mockups = [
        {
            id: 'notebook',
            img: '/images/brands/samt/notebook_mockup.jpg',
            title: isRTL ? 'دفتر الملاحظات الجلدي' : 'Premium Sketchbook',
            desc: isRTL ? 'دفتر ملاحظات بغلاف جلدي داكن، شعار سمت مطبوع بصمة غائرة (Blind Deboss) بدون ألوان.' : 'Dark leather notebook with a blind debossed logo on the cover.'
        },
        {
            id: 'totebag',
            img: '/images/brands/samt/tote_bag_mockup.jpg',
            title: isRTL ? 'حقيبة قماشية' : 'Canvas Tote Bag',
            desc: isRTL ? 'حقيبة باللون الكريمي تحمل الشعار بلون داكن، مع إظهار نمط الزخرفة الهندسية كخلفية.' : 'Cream colored canvas bag with the logo and a subtle geometric pattern.'
        },
        {
            id: 'mug',
            img: '/images/brands/samt/mug_mockup.jpg',
            title: isRTL ? 'كوب القهوة' : 'Matte Coffee Mug',
            desc: isRTL ? 'كوب سيراميك مطفي باللون الأسود، شعار سمت مطبوع بلون نحاسي/ذهبي فاخر.' : 'Matte black ceramic mug featuring a metallic copper logo.'
        }
    ];

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: '#F9F9F9',
            color: primaryColor,
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
                <div style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: `"${subtitleFont}", sans-serif` }}>
                    09 / Promotional Materials
                </div>
                <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: `"${titleFont}", sans-serif` }}>
                    {isRTL ? 'المواد الدعائية والهدايا' : 'Promotional Materials'}
                </h1>
                <p style={{ maxWidth: '600px', margin: '1rem auto', fontFamily: `"${subtitleFont}", sans-serif`, opacity: 0.8, lineHeight: 1.6 }}>
                    {isRTL 
                        ? 'تطبيق الهوية على الأدوات المكتبية والهدايا الترويجية بأسلوب يحافظ على الرقي والفخامة المعمارية التي تميز العلامة.'
                        : 'Applying the visual identity to promotional merchandise in a way that maintains the brand\'s architectural luxury.'}
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '3rem', 
                maxWidth: '1400px', 
                margin: '0 auto' 
            }}>
                {mockups.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div style={{ 
                            width: '100%', 
                            aspectRatio: '4/3', 
                            borderRadius: '12px', 
                            overflow: 'hidden', 
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            background: '#FFF'
                        }}>
                            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '0 10px' }}>
                            <h3 style={{ margin: '0 0 10px 0', fontFamily: `"${titleFont}", sans-serif`, fontSize: '1.5rem', color: darkGold }}>
                                {item.title}
                            </h3>
                            <p style={{ margin: 0, fontFamily: `"${subtitleFont}", sans-serif`, fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.6 }}>
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
        </div>
    );
};

export default BrandPromotionalPage;
