import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EndToEndPyramid = () => {
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

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // Node Definitions
  const nodes = [
    { id: 'n1', key: 'n1', x: 50, y: 10, mx: 50, my: 8 },
    { id: 'n2', key: 'n2', x: 25, y: 35, mx: 50, my: 28 },
    { id: 'n3', key: 'n3', x: 75, y: 35, mx: 50, my: 48 },
    { id: 'n4', key: 'n4', x: 50, y: 65, mx: 50, my: 68 },
    { id: 'n5', key: 'n5', x: 50, y: 92, mx: 50, my: 88 }
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
        minHeight: '160vh',
        width: '100vw',
        position: 'relative',
        background: 'var(--color-bg)',
        overflow: 'hidden',
        padding: '10vh 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Dynamic Background Grid */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,0,127,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,127,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.6,
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, marginBottom: '5vh' }}>
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
          {t('creativeDirection.endToEnd.title')}
          <br />
          <span style={{ fontSize: '1rem', color: 'var(--color-magenta)', fontWeight: 400, letterSpacing: '4px' }}>
            {t('creativeDirection.endToEnd.subtitle')}
          </span>
        </motion.h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '120vh' : '120vh',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        
        {/* SVG Drawing Layer */}
        <svg 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-magenta)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {isMobile ? (
            <>
              {/* Vertical mobile timeline */}
              <motion.line x1="50%" y1="8%" x2="50%" y2="28%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="28%" x2="50%" y2="48%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="48%" x2="50%" y2="68%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="68%" x2="50%" y2="88%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
            </>
          ) : (
            <>
              {/* Desktop Complex Pyramid Connections */}
              {/* Level 1 to 2 */}
              <motion.line x1="50%" y1="10%" x2="25%" y2="35%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="50%" y1="10%" x2="75%" y2="35%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              
              {/* Level 2 Crosslink */}
              <motion.line x1="25%" y1="35%" x2="75%" y2="35%" stroke="var(--color-magenta)" strokeWidth="1" strokeDasharray="6,6" style={{ pathLength }} opacity="0.4" />
              
              {/* Level 2 to 3 */}
              <motion.line x1="25%" y1="35%" x2="50%" y2="65%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              <motion.line x1="75%" y1="35%" x2="50%" y2="65%" stroke="url(#glowLine)" strokeWidth="3" style={{ pathLength }} filter="url(#glow)" />
              
              {/* Level 3 to 4 */}
              <motion.line x1="50%" y1="65%" x2="50%" y2="92%" stroke="url(#glowLine)" strokeWidth="4" style={{ pathLength }} filter="url(#glow)" />

              {/* Central hidden core line */}
              <motion.line x1="50%" y1="10%" x2="50%" y2="92%" stroke="rgba(255,0,127,0.3)" strokeWidth="1" strokeDasharray="10,10" style={{ pathLength }} />
            </>
          )}
        </svg>

        {/* Nodes rendering */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="interactive"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              position: 'absolute',
              ...getPosition(node),
              transform: 'translate(-50%, -50%)',
              zIndex: activeNode === node.id ? 20 : 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: isMobile ? '85%' : '350px',
              textAlign: 'center',
              cursor: 'crosshair'
            }}
          >
            {/* The Orb */}
            <motion.div
              animate={{ 
                scale: activeNode === node.id ? 1.4 : [1, 1.1, 1],
                boxShadow: activeNode === node.id 
                  ? '0 0 50px rgba(255,0,127,0.9), inset 0 0 20px rgba(255,0,127,0.9)' 
                  : '0 0 20px rgba(255,0,127,0.4), inset 0 0 10px rgba(255,0,127,0.4)'
              }}
              transition={{ 
                scale: { duration: activeNode === node.id ? 0.3 : 2, repeat: activeNode === node.id ? 0 : Infinity }
              }}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#050505',
                border: '2px solid var(--color-magenta)',
                marginBottom: '1rem',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '8px', height: '8px', borderRadius: '50%', background: '#fff'
              }}/>
            </motion.div>

            {/* Glassmorphism Details Box */}
            <motion.div
              animate={{
                y: activeNode === node.id ? 0 : 5,
                opacity: activeNode === node.id ? 1 : 0.8,
                borderColor: activeNode === node.id ? 'rgba(255,0,127,0.6)' : 'rgba(255,255,255,0.05)'
              }}
              style={{
                background: activeNode === node.id ? 'rgba(20,20,25,0.95)' : 'rgba(10,10,12,0.8)',
                backdropFilter: 'blur(15px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid',
                boxShadow: activeNode === node.id ? '0 20px 40px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: activeNode === node.id ? 'var(--color-magenta)' : 'rgba(255,255,255,0.1)',
                fontFamily: 'var(--font-primary)',
                marginBottom: '0.5rem',
                transition: 'color 0.4s ease'
              }}>
                0{index + 1}
              </div>

              <h3 style={{
                color: activeNode === node.id ? '#fff' : 'var(--color-gray-light)',
                fontSize: '1.3rem',
                fontWeight: 800,
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-primary)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {t(`creativeDirection.endToEnd.nodes.${node.key}.title`)}
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
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0,
                  marginTop: '0.8rem',
                  fontWeight: 300
                }}>
                  {t(`creativeDirection.endToEnd.nodes.${node.key}.desc`)}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EndToEndPyramid;
