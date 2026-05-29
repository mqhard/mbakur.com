import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="hero-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Video Background (Place your video in the public folder as hero-bg.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Top Gradient Overlay (for Logo/Language readability) */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '20vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      {/* Bottom Gradient Overlay (for text/buttons readability) */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0, left: 0, width: '100%', height: '40vh',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        
        {/* Top: Name as Logo aligned with Language Button */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'absolute', top: '25px', left: 0, width: '100%', textAlign: 'center', zIndex: 10 }}
        >
          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1, margin: 0, letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span>
          </h1>
        </motion.div>

        {/* Bottom: Subtitle & Buttons */}
        <div style={{ position: 'absolute', bottom: '10vh', left: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontFamily: 'var(--font-secondary)', fontWeight: 400, color: 'var(--color-text)', margin: 0, letterSpacing: '3px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              {t('hero.subtitle')} <span className="text-magenta" style={{ margin: '0 10px' }}>•</span> {t('hero.subtitle_span')}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <button 
              className="btn-primary" 
              style={{ textShadow: 'none' }}
              onClick={() => navigate('/expertise')}
            >
              {t('hero.btn_explore')}
            </button>
            <button style={{ 
              fontFamily: 'var(--font-primary)', textTransform: 'uppercase', 
              fontWeight: 600, letterSpacing: '2px', borderBottom: '1px solid var(--color-magenta)', textShadow: '0 2px 5px rgba(0,0,0,0.5)'
            }}>
              {t('hero.btn_work')}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
      >
        <ChevronDown size={32} color="var(--color-magenta)" style={{ animation: 'bounce 2s infinite' }} />
      </motion.div>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
