import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroCinematic = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configurations for smooth parallax
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background Parallax constraints
  const bgX = useTransform(smoothX, [-0.5, 0.5], ['-2%', '2%']);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ['-2%', '2%']);
  
  // Foreground Parallax constraints (moves in opposite direction)
  const fgX = useTransform(smoothX, [-0.5, 0.5], ['2%', '-2%']);
  const fgY = useTransform(smoothY, [-0.5, 0.5], ['2%', '-2%']);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    mouseX.set(x);
    mouseY.set(y);
  };

  // Glitch variants
  const glitchVariants = {
    hidden: { opacity: 0, filter: 'blur(20px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: "easeOut" }
    },
    glitch: {
      x: [0, -5, 5, -2, 2, 0],
      y: [0, 2, -2, 1, -1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: { duration: 0.4, repeat: Infinity, repeatDelay: 5 }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.02)'
      }}
    >
      {/* Background Parallax Layer */}
      <motion.div style={{
        position: 'absolute',
        top: '-5%', left: '-5%', right: '-5%', bottom: '-5%', // Overflow slightly to prevent edge cutoff during parallax
        background: 'radial-gradient(circle at center, rgba(20,20,25,1) 0%, rgba(7,7,9,1) 80%)',
        zIndex: 0,
        x: bgX,
        y: bgY
      }}>
         {/* Floating lights */}
         <motion.div 
           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           style={{
             position: 'absolute', top: '10%', left: '20%', width: '40vw', height: '40vw',
             background: 'radial-gradient(circle, rgba(255,0,127,0.05) 0%, transparent 70%)',
             filter: 'blur(40px)'
           }}
         />
         <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           style={{
             position: 'absolute', bottom: '10%', right: '10%', width: '50vw', height: '50vw',
             background: 'radial-gradient(circle, rgba(255,0,127,0.03) 0%, transparent 70%)',
             filter: 'blur(60px)'
           }}
         />
      </motion.div>

      {/* Foreground Content with Reverse Parallax */}
      <motion.div 
        style={{ zIndex: 2, textAlign: 'center', maxWidth: '90vw', x: fgX, y: fgY }}
      >
        <motion.h1
          variants={glitchVariants}
          initial="hidden"
          animate={["visible", "glitch"]}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '1px',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {t('creativeDirection.hero.text1')} <br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gray-light)' }}>
            {t('creativeDirection.hero.text2')}
          </span><br/>
          {t('creativeDirection.hero.text3')} <br/>
          <span style={{ color: 'var(--color-magenta)', textShadow: '0 0 40px rgba(255,0,127,0.5)' }}>
            {t('creativeDirection.hero.text4')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 300,
            maxWidth: '600px',
            margin: '0 auto',
            letterSpacing: '2px',
            lineHeight: 1.8
          }}
        >
          {t('creativeDirection.hero.desc')} <br/>
          <span style={{ color: '#fff' }}>{t('creativeDirection.hero.desc_span')}</span>
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '5vh',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{t('creativeDirection.hero.desc_btn')}</span>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} color="rgba(255,255,255,0.4)" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroCinematic;
