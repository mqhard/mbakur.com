import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CinematicPhilosophy = () => {
  const { t } = useTranslation();

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '15vh 5vw',
      position: 'relative',
      background: 'var(--color-bg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Dynamic Background Noise */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.03,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{
            color: 'var(--color-magenta)',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            fontSize: '1rem',
            marginBottom: '4rem',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {t('creativeDirection.philosophy.title')}
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            color: '#fff',
            fontWeight: 900,
            lineHeight: 1.2,
            fontFamily: 'var(--font-primary)',
            marginBottom: '4rem'
          }}
        >
          {t('creativeDirection.philosophy.quote1')} <br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            {t('creativeDirection.philosophy.quote1_span')}
          </span>
          <br/><br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            {t('creativeDirection.philosophy.quote2')}
          </span> <br/>
          <span style={{ color: 'var(--color-magenta)' }}>
            {t('creativeDirection.philosophy.quote2_span')}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            width: '1px',
            height: '100px',
            background: 'linear-gradient(to bottom, var(--color-magenta), transparent)',
            margin: '0 auto 4rem auto'
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            maxWidth: '700px',
            margin: '0 auto',
            letterSpacing: '1px',
            lineHeight: 1.8
          }}
        >
          {t('creativeDirection.philosophy.desc')}
        </motion.p>
      </div>
    </section>
  );
};

export default CinematicPhilosophy;
