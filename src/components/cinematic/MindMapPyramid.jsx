import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MindMapPyramid = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Node Definitions
  const nodes = [
    { id: 'idea', key: 'idea', x: 50, y: 15, mx: 50, my: 10 },
    { id: 'strategy', key: 'strategy', x: 20, y: 50, mx: 50, my: 35 },
    { id: 'execution', key: 'execution', x: 80, y: 50, mx: 50, my: 60 },
    { id: 'audience', key: 'audience', x: 50, y: 85, mx: 50, my: 85 }
  ];

  const getPosition = (node) => {
    if (isMobile) {
      return { top: `${node.my}%`, left: `${node.mx}%` };
    }
    return { top: `${node.y}%`, left: `${node.x}%` };
  };

  return (
    <section 
      ref={containerRef}
      style={{
        minHeight: '130vh',
        width: '100vw',
        position: 'relative',
        background: 'var(--color-bg)',
        overflow: 'hidden',
        padding: '10vh 0'
      }}
    >
      {/* Background Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,0,127,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,127,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
      }} />

      {/* Title */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, marginBottom: isMobile ? '5vh' : 0 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: '#fff',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {t('creativeDirection.mindmap.title')}
          <br />
          <span style={{ fontSize: '1rem', color: 'var(--color-magenta)', fontWeight: 400, letterSpacing: '4px' }}>
            {t('creativeDirection.mindmap.subtitle')}
          </span>
        </motion.h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '80vh' : '90vh',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: isMobile ? '2vh' : '5vh'
      }}>
        
        {/* SVG Lines */}
        <svg 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-magenta)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Lines */}
          {isMobile ? (
            <>
              {/* Vertical mobile lines */}
              <motion.line x1="50%" y1="15%" x2="50%" y2="35%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="35%" x2="50%" y2="60%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="60%" x2="50%" y2="85%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
            </>
          ) : (
            <>
              {/* Desktop Pyramid Lines */}
              <motion.line x1="50%" y1="15%" x2="20%" y2="50%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="15%" x2="80%" y2="50%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="20%" y1="50%" x2="80%" y2="50%" stroke="url(#glowLine)" strokeWidth="1" strokeDasharray="5,5" style={{ pathLength }} opacity="0.5" />
              <motion.line x1="20%" y1="50%" x2="50%" y2="85%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="80%" y1="50%" x2="50%" y2="85%" stroke="url(#glowLine)" strokeWidth="2" style={{ pathLength }} filter="url(#glow)" />
              {/* Central hidden core line */}
              <motion.line x1="50%" y1="15%" x2="50%" y2="85%" stroke="rgba(255,0,127,0.3)" strokeWidth="1" strokeDasharray="10,10" style={{ pathLength }} />
            </>
          )}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="interactive"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              position: 'absolute',
              ...getPosition(node),
              transform: 'translate(-50%, -50%)',
              zIndex: activeNode === node.id ? 10 : 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: isMobile ? '80%' : '300px',
              textAlign: 'center',
              cursor: 'crosshair'
            }}
          >
            {/* Glowing Core */}
            <motion.div
              animate={{ 
                scale: activeNode === node.id ? 1.5 : [1, 1.1, 1],
                boxShadow: activeNode === node.id 
                  ? '0 0 40px rgba(255,0,127,0.8), inset 0 0 20px rgba(255,0,127,0.8)' 
                  : '0 0 15px rgba(255,0,127,0.3), inset 0 0 10px rgba(255,0,127,0.3)'
              }}
              transition={{ 
                scale: { duration: activeNode === node.id ? 0.3 : 2, repeat: activeNode === node.id ? 0 : Infinity }
              }}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#111',
                border: '2px solid var(--color-magenta)',
                marginBottom: '1rem',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '6px', height: '6px', borderRadius: '50%', background: '#fff'
              }}/>
            </motion.div>

            {/* Content Box */}
            <motion.div
              animate={{
                y: activeNode === node.id ? 0 : 5,
                opacity: activeNode === node.id ? 1 : 0.7,
                borderColor: activeNode === node.id ? 'rgba(255,0,127,0.5)' : 'rgba(255,255,255,0.05)'
              }}
              style={{
                background: 'rgba(10,10,12,0.8)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'border-color 0.3s ease'
              }}
            >
              <h3 style={{
                color: activeNode === node.id ? '#fff' : 'var(--color-gray-light)',
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-primary)',
                letterSpacing: '1px'
              }}>
                {t(`creativeDirection.mindmap.nodes.${node.key}.title`)}
              </h3>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeNode === node.id || isMobile ? 'auto' : 0, 
                  opacity: activeNode === node.id || isMobile ? 1 : 0 
                }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0,
                  marginTop: '0.5rem'
                }}>
                  {t(`creativeDirection.mindmap.nodes.${node.key}.desc`)}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MindMapPyramid;
