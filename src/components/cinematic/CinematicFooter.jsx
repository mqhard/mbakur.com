import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CinematicFooter = () => {
  const { t } = useTranslation();
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#020202',
      position: 'relative'
    }}>
      {/* Subtle top gradient fade from previous section */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '20vh',
        background: 'linear-gradient(to bottom, var(--color-bg), transparent)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ textAlign: 'center', zIndex: 2 }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 5rem)',
          fontWeight: 900,
          color: '#fff',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          lineHeight: 1.2
        }}>
          {t('creativeDirection.footer.title1')}<br/>
          <span style={{ color: 'var(--color-gray-light)' }}>{t('creativeDirection.footer.title2')}</span>
        </h2>
        
        <a href="mailto:m.6akur@gmail.com" className="interactive" style={{
          display: 'inline-block',
          color: 'var(--color-amber)',
          fontSize: '1.2rem',
          letterSpacing: '3px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontWeight: 600,
          borderBottom: '1px solid rgba(255,69,0,0.3)',
          paddingBottom: '8px',
          transition: 'all 0.4s ease'
        }}>
          {t('creativeDirection.footer.btn')}
        </a>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        color: 'rgba(255,255,255,0.2)',
        fontSize: '0.75rem',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontFamily: 'monospace'
      }}>
        {t('creativeDirection.footer.rights')}
      </div>
    </section>
  );
};

export default CinematicFooter;
