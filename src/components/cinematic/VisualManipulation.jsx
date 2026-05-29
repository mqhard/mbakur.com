import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VisualManipulation = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="interactive"
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--color-bg)',
        cursor: isHovered && !isMobile ? 'none' : 'default'
      }}
    >
      {/* Base Layer - Dark, B&W, Abstract Noise */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(45deg, #050505, #111)',
        filter: 'grayscale(100%) contrast(120%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: isHovered ? 0.3 : 1,
        transition: 'opacity 1s ease'
      }}>
        {/* Subtle noise pattern for the base layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          opacity: 0.1,
          mixBlendMode: 'overlay'
        }} />
        
        <h2 style={{
          fontSize: 'clamp(3rem, 15vw, 15rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.02)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-primary)'
        }}>
          {t('creativeDirection.manipulation.bg_text')}
        </h2>
      </div>

      {/* Custom Glowing Lens Cursor (Follows mouse instantly) */}
      {!isMobile && isHovered && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255,0,127,0.4)',
            boxShadow: '0 0 40px rgba(255,0,127,0.3), inset 0 0 20px rgba(255,0,127,0.2)',
            pointerEvents: 'none',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Inner targeting crosshair */}
          <div style={{ width: '4px', height: '4px', background: 'rgba(255,0,127,0.8)', borderRadius: '50%' }} />
        </motion.div>
      )}

      {/* Reveal Layer - Flashlight Mask with Glitch Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          zIndex: 5,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, rgba(255,0,127,0.08), rgba(10,10,15,0.9), var(--color-bg))',
          WebkitMaskImage: isMobile 
            ? 'radial-gradient(circle 200px at 50% 50%, black 50%, transparent 100%)' 
            : 'radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, rgba(0,0,0,0.5) 70%, transparent 100%)'
        }}
        onUpdate={(latest) => {
          if(!isMobile && containerRef.current) {
            containerRef.current.style.setProperty('--mouse-x', `${mouseX.get()}px`);
            containerRef.current.style.setProperty('--mouse-y', `${mouseY.get()}px`);
          }
        }}
      >
        <h2 className="glitch-text" style={{
          fontSize: 'clamp(2rem, 5vw, 6rem)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '1rem',
          textAlign: 'center',
          letterSpacing: '2px',
          fontFamily: 'var(--font-primary)',
          position: 'relative'
        }}>
          {t('creativeDirection.manipulation.title1')}<br/>
          <span style={{ color: 'var(--color-magenta)' }}>{t('creativeDirection.manipulation.title2')}</span>
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '600px',
          textAlign: 'center',
          fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
          fontWeight: 300,
          letterSpacing: '1px',
          lineHeight: 1.6,
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          {t('creativeDirection.manipulation.desc')}
        </p>
      </motion.div>

      {/* Indicator */}
      <motion.div 
        animate={{ opacity: isHovered ? 0 : 0.6 }}
        style={{
          position: 'absolute',
          bottom: '10vh',
          color: '#fff',
          letterSpacing: '3px',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div style={{
          width: '20px', height: '30px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', position: 'relative', display: 'flex', justifyContent: 'center'
        }}>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '4px', height: '4px', background: 'var(--color-magenta)', borderRadius: '50%', marginTop: '4px' }}
          />
        </div>
        {t('creativeDirection.manipulation.indicator')}
      </motion.div>

      {/* CSS for Chromatic Aberration / Glitch Effect */}
      <style>{`
        .glitch-text {
          animation: glitch-anim 4s infinite alternate;
        }
        @keyframes glitch-anim {
          0% { text-shadow: 3px 0 0 rgba(255,0,127,0.7), -3px 0 0 rgba(0,255,255,0.7); }
          20% { text-shadow: -3px 0 0 rgba(255,0,127,0.7), 3px 0 0 rgba(0,255,255,0.7); }
          40% { text-shadow: 2px 2px 0 rgba(255,0,127,0.7), -2px -2px 0 rgba(0,255,255,0.7); }
          60% { text-shadow: -2px -2px 0 rgba(255,0,127,0.7), 2px 2px 0 rgba(0,255,255,0.7); }
          80% { text-shadow: 4px 0 0 rgba(255,0,127,0.7), -4px 0 0 rgba(0,255,255,0.7); }
          100% { text-shadow: -4px 0 0 rgba(255,0,127,0.7), 4px 0 0 rgba(0,255,255,0.7); }
        }
      `}</style>
    </section>
  );
};

export default VisualManipulation;
