import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const baseCreativeData = [
  {
    id: 'copywriting',
    number: '01',
    color: '#ff007f', // Magenta
    mainImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    projectsThumb: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80'
    ]
  },
  {
    id: 'art_direction',
    number: '02',
    color: '#00ffff', // Cyan
    mainImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    projectsThumb: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80'
    ]
  },
  {
    id: 'multimedia',
    number: '03',
    color: '#ff4500', // Orange
    mainImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    projectsThumb: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80'
    ]
  },
  {
    id: 'strategy',
    number: '04',
    color: '#8a2be2', // Purple
    mainImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    projectsThumb: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80'
    ]
  }
];

// --- KINETIC OBJECTS --- //

const CopywritingObject = ({ isHovered, isActive }) => {
  const words = ['Emotion', 'Identity', 'Influence', 'Belonging', 'Narrative', 'Perception', 'Action'];
  const scale = isActive ? 1.5 : isHovered ? 1.2 : 0.8;
  
  return (
    <motion.div 
      animate={{ rotateY: 360, rotateX: 180 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'relative', width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transformStyle: 'preserve-3d', perspective: '1000px',
        scale
      }}
    >
      {words.map((w, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            color: '#fff',
            fontSize: isActive ? '3rem' : '2rem',
            fontWeight: 900,
            fontFamily: 'var(--font-primary)',
            textTransform: 'uppercase',
            opacity: 0.8,
            textShadow: '0 0 20px #ff007f'
          }}
          animate={{
            rotateY: i * (360 / words.length),
            translateZ: isActive ? '300px' : isHovered ? '200px' : '100px',
            rotateX: [0, 360]
          }}
          transition={{
            rotateX: { duration: 20 + i * 2, repeat: Infinity, ease: 'linear' }
          }}
        >
          {w}
        </motion.div>
      ))}
    </motion.div>
  );
};

const ArtDirectionObject = ({ isHovered, isActive }) => {
  const scale = isActive ? 1.5 : isHovered ? 1.2 : 0.8;
  
  return (
    <motion.div 
      animate={{ rotateZ: 360, rotateY: [0, 360], rotateX: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'relative', width: '300px', height: '300px',
        transformStyle: 'preserve-3d', perspective: '1000px',
        scale
      }}
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            border: `2px solid ${i % 2 === 0 ? '#00ffff' : 'rgba(255,255,255,0.2)'}`,
            borderRadius: i === 2 ? '50%' : '0%',
            background: i === 1 ? 'rgba(0, 255, 255, 0.05)' : 'transparent'
          }}
          animate={{ rotateX: i * 45, rotateY: i * 45, translateZ: `${i * 50}px` }}
        />
      ))}
    </motion.div>
  );
};

const MultimediaObject = ({ isHovered, isActive }) => {
  const scale = isActive ? 1.5 : isHovered ? 1.2 : 0.8;
  return (
    <motion.div 
      style={{
        position: 'relative', width: '300px', height: '300px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        scale
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '200px', height: '200px', borderRadius: '50%',
          border: '4px dashed #ff4500',
          boxShadow: '0 0 50px rgba(255, 69, 0, 0.5)'
        }}
      />
      <motion.div
        animate={{ scale: [1.5, 1, 1.5], rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '250px', height: '250px', borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: '2px solid #ff4500'
        }}
      />
    </motion.div>
  );
};

const StrategyObject = ({ isHovered, isActive }) => {
  const scale = isActive ? 1.5 : isHovered ? 1.2 : 0.8;
  const nodes = Array.from({ length: 8 });
  return (
    <motion.div 
      animate={{ rotateZ: 360, rotateX: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'relative', width: '300px', height: '300px',
        transformStyle: 'preserve-3d', perspective: '1000px',
        scale
      }}
    >
      {nodes.map((_, i) => (
        <React.Fragment key={i}>
          <motion.div
            style={{
              position: 'absolute',
              width: '15px', height: '15px', borderRadius: '50%',
              background: '#8a2be2',
              boxShadow: '0 0 20px #8a2be2'
            }}
            animate={{
              rotateY: i * (360 / nodes.length),
              translateZ: '120px',
              rotateX: [0, 360]
            }}
            transition={{ rotateX: { duration: 10 + i, repeat: Infinity, ease: 'linear' } }}
          />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
            <motion.line
              x1="150" y1="150" x2="150" y2="30"
              stroke="rgba(138, 43, 226, 0.3)" strokeWidth="1"
              animate={{ transform: `rotate(${i * (360 / nodes.length)}deg) rotateX(45deg)`, transformOrigin: '150px 150px' }}
            />
          </svg>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

const ObjectRenderer = ({ id, isHovered, isActive }) => {
  switch(id) {
    case 'copywriting': return <CopywritingObject isHovered={isHovered} isActive={isActive} />;
    case 'art_direction': return <ArtDirectionObject isHovered={isHovered} isActive={isActive} />;
    case 'multimedia': return <MultimediaObject isHovered={isHovered} isActive={isActive} />;
    case 'strategy': return <StrategyObject isHovered={isHovered} isActive={isActive} />;
    default: return null;
  }
};

// --- MAIN COMPONENT --- //

const CreativeCommandCenter = () => {
  const { t, i18n } = useTranslation();
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [activePanel, setActivePanel] = useState(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const isRTL = i18n.language === 'ar';

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const creativeData = baseCreativeData.map(item => ({
    ...item,
    title: t(`creativeCommandCenter.panels.${item.id}.title`),
    headline: t(`creativeCommandCenter.panels.${item.id}.headline`),
    description: t(`creativeCommandCenter.panels.${item.id}.description`),
    psychologicalFunction: t(`creativeCommandCenter.panels.${item.id}.psychologicalFunction`),
    profile: {
      about: t(`creativeCommandCenter.panels.${item.id}.profile.about`),
      methods: t(`creativeCommandCenter.panels.${item.id}.profile.methods`),
      specializations: t(`creativeCommandCenter.panels.${item.id}.profile.specializations`, { returnObjects: true }),
      executionProcess: t(`creativeCommandCenter.panels.${item.id}.profile.executionProcess`),
    },
    projects: item.projectsThumb.map((thumb, idx) => ({
      thumb,
      name: t(`creativeCommandCenter.panels.${item.id}.projects.${idx}.name`),
      desc: t(`creativeCommandCenter.panels.${item.id}.projects.${idx}.desc`),
    }))
  }));

  // Mouse for interactive background
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#020202',
      overflow: 'hidden'
    }}>
      
      <style>{`
        .futuristic-panel {
          position: relative;
          height: 100%;
          border-radius: 40px;
          background: rgba(10, 10, 12, 0.08);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.5s ease, border-color 0.5s ease;
        }
        
        .futuristic-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 40px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,0,127,0.1), rgba(0,255,0,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.5;
          transition: opacity 0.5s ease;
        }
        
        .futuristic-panel:hover {
          box-shadow: 0 30px 80px rgba(0,0,0,0.9), 0 0 50px rgba(0,255,255,0.15), 0 0 50px rgba(255,0,127,0.15), inset 0 0 20px rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }

        .futuristic-panel:hover::before {
          opacity: 1;
        }

        .panel-chromatic {
          position: absolute;
          inset: 0;
          border-radius: 40px;
          box-shadow: inset 2px 0 8px rgba(0,255,255,0.2), inset -2px 0 8px rgba(255,0,127,0.2);
          pointer-events: none;
        }
      `}</style>
      
      {/* 1. INTERACTIVE GLASS BACKGROUND */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Glow 1: Magenta + Orange (follows cursor) */}
        <motion.div style={{
          position: 'absolute', top: 0, left: 0,
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.4) 0%, rgba(255, 69, 0, 0.3) 50%, transparent 100%)',
          filter: 'blur(250px)',
          x: smoothX, y: smoothY,
          translateX: '-50%', translateY: '-50%'
        }} />
        
        {/* Glow 2: Cyan (moves inversely) */}
        <motion.div style={{
          position: 'absolute', top: 0, left: 0,
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 100%)',
          filter: 'blur(350px)',
          x: useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [typeof window !== 'undefined' ? window.innerWidth : 1000, 0]),
          y: useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [typeof window !== 'undefined' ? window.innerHeight : 1000, 0]),
          translateX: '-50%', translateY: '-50%'
        }} />

        {/* Frosted Glass Layer */}
        <div style={{
          position: 'absolute', inset: 0,
          backdropFilter: 'blur(120px)', WebkitBackdropFilter: 'blur(120px)',
          backgroundColor: 'rgba(0,0,0,0.35)'
        }} />
      </div>

      {/* 2. THE 4 PANELS MAIN EXPERIENCE */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100vh', width: '100vw', padding: isMobile ? '5rem 5vw 2rem 5vw' : '4rem 2vw', gap: isMobile ? '2vh' : '1.5vw' }}>
        {creativeData.map((panel) => {
          const isHovered = hoveredPanel === panel.id;
          const isAnyHovered = hoveredPanel !== null;
          
          // Hover Logic: Expanded panel gets 55%, compressed get 15%. Default is 25%.
          const panelSize = isHovered ? (isMobile ? '50%' : '55%') : (isAnyHovered ? (isMobile ? '15%' : '15%') : '25%');

          return (
            <motion.div
              key={panel.id}
              layoutId={`panel-${panel.id}`}
              onMouseEnter={() => setHoveredPanel(panel.id)}
              onMouseLeave={() => setHoveredPanel(null)}
              animate={isMobile ? { height: panelSize, width: '100%' } : { width: panelSize, height: '100%' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="futuristic-panel"
            >
              {/* IMAGE BACKGROUND WITH LAYOUT ID (Netflix Vertical Poster) */}
              <motion.div 
                animate={{ 
                  top: isMobile ? (isHovered ? '50%' : '50%') : (isHovered ? '50%' : '50%'), 
                  y: '-50%' 
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}
              >
                <motion.img
                  layoutId={`shared-img-${panel.id}`}
                  src={panel.mainImage}
                  animate={{
                    filter: isHovered ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.2)',
                    scale: isHovered ? 1.05 : 1
                  }}
                  transition={{ duration: 0.8 }}
                  style={{
                    height: isMobile ? '100%' : '40vh', width: isMobile ? '100%' : 'auto', aspectRatio: isMobile ? 'auto' : '2/3', objectFit: 'cover', borderRadius: '15px',
                    boxShadow: isHovered ? `0 20px 50px -10px ${panel.color}80` : 'none',
                    opacity: isMobile ? (isHovered ? 1 : 0.3) : 1
                  }}
                />
              </motion.div>

              <div className="panel-chromatic" />
              
              {/* CREATIVE HEADER LOCKUP: NUMBER + TITLE */}
              <motion.div 
                animate={{ 
                  top: isMobile ? (isHovered ? '8%' : '50%') : '8%', 
                  y: isMobile && !isHovered ? '-50%' : '0%',
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ 
                  position: 'absolute', left: 0, width: '100%', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  zIndex: 3, pointerEvents: 'none'
                }}
              >
                {/* Number Behind/Above Title */}
                <motion.div 
                  layoutId={`shared-number-${panel.id}`}
                  animate={{
                    fontSize: isMobile ? '4rem' : (isHovered ? '6rem' : '4rem'),
                    WebkitTextStroke: isHovered ? `2px ${panel.color}80` : '2px rgba(255,255,255,0.1)'
                  }}
                  style={{ 
                    fontFamily: 'var(--font-secondary)', 
                    color: 'transparent',
                    lineHeight: 1,
                    marginBottom: isMobile ? '-10px' : '-20px',
                    zIndex: 0,
                    transition: 'all 0.6s'
                  }}
                >
                  {panel.number}
                </motion.div>
                
                {/* Title */}
                <motion.h2 
                  layoutId={`shared-title-${panel.id}`}
                  animate={{
                    fontSize: isMobile ? (isHovered ? '1.4rem' : '1.2rem') : (isHovered ? '1.8rem' : '1.2rem'),
                    letterSpacing: isHovered ? '6px' : '3px',
                    color: isHovered ? panel.color : '#ffffff',
                    textShadow: isHovered ? `0 0 20px ${panel.color}50` : 'none',
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ 
                    fontFamily: 'var(--font-primary)',
                    textTransform: 'uppercase', margin: 0,
                    whiteSpace: 'nowrap',
                    zIndex: 1
                  }}>
                  {panel.title}
                </motion.h2>
              </motion.div>

              {/* Hover Information Reveal (Below Image) */}
              <AnimatePresence>
                {isHovered && !isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                      position: 'absolute', bottom: '6%', left: '5%', right: '5%',
                      zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem',
                      alignItems: 'center', textAlign: 'center'
                    }}
                  >
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-primary)', margin: 0 }}>{panel.headline}</h3>
                    <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: 1.5, maxWidth: '85%', margin: 0 }}>{panel.description}</p>
                    
                    <button 
                      onClick={() => setActivePanel(panel)}
                      style={{
                        marginTop: '1.5rem', padding: '12px 35px', background: panel.color, color: '#000',
                        border: 'none', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold',
                        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px'
                      }}
                    >
                      {t('creativeCommandCenter.ui.explore')} <ArrowRight size={20} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Mobile CTA (Click anywhere on mobile to expand) */}
              <AnimatePresence>
                {isMobile && isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'absolute', bottom: '10%', left: 0, width: '100%', textAlign: 'center', zIndex: 4 }}
                  >
                    <button 
                      onClick={() => setActivePanel(panel)}
                      style={{
                        padding: '8px 20px', background: panel.color, color: '#000',
                        border: 'none', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold',
                        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px'
                      }}
                    >
                      {t('creativeCommandCenter.ui.explore')} <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

      {/* 3. THE FULL SCREEN DETAIL EXPERIENCE (OVERLAY) */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {activePanel && (
            <motion.div
              layoutId={`panel-${activePanel.id}`}
              style={{
                position: 'fixed', inset: 0, zIndex: 99999,
                background: '#020202',
                display: 'flex', flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Dynamic Active Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  position: 'absolute', inset: 0, zIndex: 0,
                  background: `radial-gradient(circle at center, ${activePanel.color}15 0%, transparent 60%)`,
                  filter: 'blur(100px)'
                }}
              />

              {/* Note: Massive background number is integrated into the title lockup. */}

              {/* Top Bar / Close */}
              <div style={{ position: 'absolute', top: '2rem', right: '5%', zIndex: 2 }}>
                <button 
                  onClick={() => {
                    setActivePanel(null);
                    setActiveProjectIdx(0); // reset
                  }}
                  style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  {t('creativeCommandCenter.ui.close')} <X size={24} />
                </button>
              </div>

              {/* Main Detail Layout */}
              <div style={{ flex: 1, display: 'flex', flexDirection: isMobile ? 'column' : 'row', position: 'relative', zIndex: 1, paddingTop: isMobile ? '10vh' : '10vh', overflowY: isMobile ? 'auto' : 'visible' }}>
                
                {/* LEFT: Creative Header Lockup + Image Below */}
                <div style={{ flex: isMobile ? 'none' : 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 5%', gap: '2rem', marginBottom: isMobile ? '2rem' : 0 }}>
                  
                  {/* Lockup */}
                  <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div
                      layoutId={`shared-number-${activePanel.id}`}
                      style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontFamily: 'var(--font-secondary)',
                        color: 'transparent',
                        WebkitTextStroke: `2px ${activePanel.color}80`,
                        lineHeight: 1,
                        marginBottom: isMobile ? '-15px' : '-30px',
                        zIndex: 0
                      }}
                    >
                      {activePanel.number}
                    </motion.div>
                    <motion.h2 
                      layoutId={`shared-title-${activePanel.id}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      style={{
                        fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                        fontFamily: 'var(--font-primary)',
                        color: activePanel.color,
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        letterSpacing: '8px',
                        textShadow: `0 0 50px ${activePanel.color}50`,
                        margin: 0,
                        whiteSpace: isMobile ? 'normal' : 'nowrap',
                        textAlign: 'center',
                        zIndex: 1
                      }}
                    >
                      {activePanel.title}
                    </motion.h2>
                  </motion.div>

                  {/* Image Below Lockup */}
                  <motion.img
                    layoutId={`shared-img-${activePanel.id}`}
                    src={activePanel.mainImage}
                    style={{
                      height: isMobile ? '40vh' : '50vh', minHeight: isMobile ? '250px' : '350px', width: isMobile ? '100%' : 'auto', aspectRatio: isMobile ? 'auto' : '2/3', objectFit: 'cover', borderRadius: '24px',
                      filter: 'grayscale(0%) opacity(1)',
                      boxShadow: `0 40px 80px -20px ${activePanel.color}90, 0 20px 40px rgba(0,0,0,0.8)`,
                      zIndex: 1
                    }}
                  />
                </div>

                {/* RIGHT: Detailed Info Panel */}
                <div style={{ flex: isMobile ? 'none' : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: isRTL ? (isMobile ? '5%' : 0) : '5%', paddingLeft: isRTL ? '5%' : (isMobile ? '5%' : 0), gap: '2rem', paddingBottom: isMobile ? '5rem' : 0 }}>
                  
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <h4 style={{ color: activePanel.color, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>{t('creativeCommandCenter.ui.about')}</h4>
                    <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1.6 }}>{activePanel.profile.about}</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <h4 style={{ color: activePanel.color, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>{t('creativeCommandCenter.ui.psychRole')}</h4>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>{activePanel.psychologicalFunction}</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                    <h4 style={{ color: activePanel.color, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>{t('creativeCommandCenter.ui.methods')}</h4>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>{activePanel.profile.methods}</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                    <h4 style={{ color: activePanel.color, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>{t('creativeCommandCenter.ui.execution')}</h4>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>{activePanel.profile.executionProcess}</p>
                  </motion.div>
                  
                </div>
              </div>

              {/* BOTTOM: Project Showcase Thumbnail Gallery */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{
                  height: isMobile ? 'auto' : '25vh',
                  minHeight: '20vh',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  padding: isMobile ? '2rem 5%' : '0 5%',
                  gap: '2rem',
                  position: 'relative',
                  zIndex: 2,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                }}
              >
                <div style={{ color: '#fff', fontFamily: 'var(--font-secondary)', marginRight: isRTL ? 0 : '2rem', marginLeft: isRTL ? '2rem' : 0 }}>
                  <span style={{ fontSize: '1.5rem' }}>{t('creativeCommandCenter.ui.featuredProjects')}</span>
                </div>

                {activePanel.projects.map((proj, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveProjectIdx(idx)}
                    style={{
                      position: 'relative',
                      width: activeProjectIdx === idx ? '250px' : '150px',
                      height: '100px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      border: activeProjectIdx === idx ? `1px solid ${activePanel.color}` : '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <img src={proj.thumb} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: activeProjectIdx === idx ? 1 : 0.5, transition: 'opacity 0.4s' }} />
                    {activeProjectIdx === idx && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '10px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                        <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 'bold' }}>{proj.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
};

export default CreativeCommandCenter;
