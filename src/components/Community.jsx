import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Community = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'url(https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80) center/cover',
        opacity: 0.15,
        filter: 'blur(5px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem' }}
          >
            {t('community.title1')} <span className="gradient-text">{t('community.title2')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.8, marginBottom: '4rem' }}
          >
            {t('community.desc')}
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {[t('community.item1'), t('community.item2'), t('community.item3'), t('community.item4')].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="glass-panel"
                style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer' }}
                whileHover={{ y: -5, borderColor: 'var(--color-magenta)' }}
              >
                <h4 style={{ fontSize: '1.2rem' }}>{item}</h4>
              </motion.div>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="btn-primary"
            style={{ fontSize: '1.2rem' }}
          >
            {t('community.btn')}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Community;
