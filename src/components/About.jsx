import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="asymmetrical-grid">
          <div style={{ gridColumn: 'span 5' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel dotted-border"
              style={{ padding: '3rem', height: '100%' }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{t('about.title')} <span className="text-magenta">{t('about.title_span')}</span></h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem', color: '#aaa' }}>
                <strong style={{ color: '#fff', marginInlineEnd: '5px' }}>{t('about.story_title')}</strong> {t('about.story_text')}
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#aaa' }}>
                <strong style={{ color: '#fff', marginInlineEnd: '5px' }}>{t('about.vision_title')}</strong> {t('about.vision_text')}
              </p>
            </motion.div>
          </div>
          
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                height: '400px', 
                background: 'url(https://images.unsplash.com/photo-1600257375171-460d3fc8b150?auto=format&fit=crop&q=80) center/cover',
                filter: 'grayscale(100%)',
                borderRadius: '12px',
                position: 'relative'
              }}
              className="dotted-border"
            >
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                <h3 style={{ fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{t('about.experience')}</h3>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel dotted-border"
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('about.philosophy_title')}</h3>
              <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                {t('about.philosophy_text')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
