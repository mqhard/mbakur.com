import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Network, Sparkles, LayoutTemplate, Link, Zap, GitCommit } from 'lucide-react';

const GeometricGallery = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const items = t('creativeDirection.geometricGallery.items', { returnObjects: true }) || [];
  
  // Abstract icons and colors for the gallery
  const galleryAssets = [
    { icon: <Sparkles size={40} />, color: 'rgba(255, 0, 127, 0.8)', spanRow: 2, spanCol: 1 },
    { icon: <Zap size={40} />, color: 'rgba(0, 255, 255, 0.8)', spanRow: 1, spanCol: 1 },
    { icon: <LayoutTemplate size={40} />, color: 'rgba(255, 69, 0, 0.8)', spanRow: 1, spanCol: 2 },
    { icon: <Link size={40} />, color: 'rgba(255, 0, 127, 0.8)', spanRow: 1, spanCol: 1 },
    { icon: <GitCommit size={40} />, color: 'rgba(0, 255, 255, 0.8)', spanRow: 2, spanCol: 1 },
    { icon: <Network size={40} />, color: 'rgba(255, 69, 0, 0.8)', spanRow: 1, spanCol: 2 }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '10vh 5vw',
      position: 'relative',
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: '#fff',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {t('creativeDirection.geometricGallery.title')} <br/>
          <span style={{ color: 'var(--color-magenta)', textShadow: '0 0 20px rgba(255,0,127,0.3)' }}>
            {t('creativeDirection.geometricGallery.subtitle')}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '2rem',
            lineHeight: 1.8
          }}
        >
          {t('creativeDirection.geometricGallery.desc')}
        </motion.p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridAutoRows: '250px',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px'
      }} className="geometric-grid">
        {Array.isArray(items) && items.map((item, idx) => {
          const asset = galleryAssets[idx % galleryAssets.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="interactive gallery-card"
              style={{
                background: 'rgba(15, 15, 20, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: isRtl ? 'flex-end' : 'flex-start',
                textAlign: isRtl ? 'right' : 'left',
                position: 'relative',
                overflow: 'hidden',
                gridRow: `span ${asset.spanRow}`,
                gridColumn: `span ${asset.spanCol}`
              }}
            >
              {/* Abstract Background Shape */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                [isRtl ? 'left' : 'right']: '-20%',
                width: '60%',
                height: '60%',
                background: `radial-gradient(circle, ${asset.color} 0%, transparent 70%)`,
                opacity: 0.15,
                filter: 'blur(30px)',
                transition: 'all 0.5s ease'
              }} className="hover-glow" />

              <div style={{ color: asset.color, marginBottom: 'auto', opacity: 0.8 }}>
                {asset.icon}
              </div>

              <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: 'var(--color-gray-light)',
                  marginBottom: '1rem',
                  letterSpacing: '1px'
                }}>
                  {item.cat}
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#fff',
                  fontFamily: 'var(--font-primary)',
                  margin: 0
                }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .gallery-card:hover .hover-glow {
          opacity: 0.4 !important;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .geometric-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 250px !important;
          }
          .gallery-card {
            grid-row: span 1 !important;
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GeometricGallery;
