import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, RotateCw, PlayCircle, Loader2, Target } from 'lucide-react';

const ProjectTracker = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const nodes = [
    { id: 'n1', key: 'n1', icon: <PlayCircle size={20} />, y: 10, side: 'right' },
    { id: 'n2', key: 'n2', icon: <Target size={20} />, y: 30, side: 'left' },
    { id: 'n3', key: 'n3', icon: <RotateCw size={20} className="spin" />, y: 50, side: 'right' },
    { id: 'n4', key: 'n4', icon: <Loader2 size={20} className="spin" />, y: 70, side: 'left' },
    { id: 'n5', key: 'n5', icon: <CheckCircle2 size={20} />, y: 90, side: 'center' }
  ];

  return (
    <section 
      ref={containerRef}
      style={{
        minHeight: '180vh',
        width: '100vw',
        position: 'relative',
        background: 'var(--color-bg)',
        overflow: 'hidden',
        padding: '10vh 0',
      }}
    >
      {/* Tech Grid Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 2px, transparent 2px), 
          linear-gradient(90deg, rgba(255,255,255,0.02) 2px, transparent 2px)
        `,
        backgroundSize: '100px 100px',
        opacity: 0.5,
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
          {t('creativeDirection.projectTracker.title')}
          <br />
          <span style={{ fontSize: '1rem', color: 'var(--color-magenta)', fontWeight: 400, letterSpacing: '4px' }}>
            {t('creativeDirection.projectTracker.subtitle')}
          </span>
        </motion.h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '150vh',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        
        {/* SVG Drawing Layer (The Pipeline) */}
        <svg 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flowGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-magenta)" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.5" />
            </linearGradient>
            <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Vertical Timeline */}
          {/* Base muted line */}
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          
          {/* Glowing animated path drawing over it */}
          <motion.line 
            x1="50%" y1="10%" x2="50%" y2="90%"
            stroke="url(#flowGlow)" 
            strokeWidth="4" 
            style={{ pathLength }} 
            filter="url(#neonBlur)"
            strokeLinecap="round"
          />

          {/* Data Flow animation (Marching ants) */}
          <motion.line 
            className="data-flow"
            x1="50%" y1="10%" x2="50%" y2="90%"
            stroke="#fff" 
            strokeWidth="2" 
            strokeDasharray="4, 16"
            opacity="0.7"
          />
        </svg>

        {/* Nodes (Agile Cards) */}
        {nodes.map((node, index) => {
          // Determine visual placement considering RTL
          let visualSide = node.side;
          if (isRTL && !isMobile && node.side !== 'center') {
             visualSide = node.side === 'right' ? 'left' : 'right';
          }

          return (
            <motion.div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                position: 'absolute',
                top: `${node.y}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: activeNode === node.id ? 20 : 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Central Connection Orb */}
              <motion.div
                className="interactive"
                animate={{ 
                  scale: activeNode === node.id ? 1.3 : 1,
                  boxShadow: activeNode === node.id 
                    ? '0 0 30px rgba(255,0,127,1)' 
                    : '0 0 15px rgba(255,0,127,0.3)'
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#050505',
                  border: '3px solid var(--color-magenta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-magenta)',
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'crosshair'
                }}
              >
                {node.icon}
              </motion.div>

              {/* Kanban Card */}
              <motion.div
                animate={{
                  x: isMobile || visualSide === 'center' ? 0 : (visualSide === 'right' ? (activeNode === node.id ? 5 : 0) : (activeNode === node.id ? -5 : 0)),
                  y: isMobile || visualSide === 'center' ? (activeNode === node.id ? 5 : 0) : 0,
                  borderColor: activeNode === node.id ? 'var(--color-magenta)' : 'rgba(255,255,255,0.1)'
                }}
                style={{
                  position: 'absolute',
                  // Positioning Logic
                  ...(isMobile || visualSide === 'center'
                    ? { top: '60px', left: '50%', transform: 'translateX(-50%)' }
                    : visualSide === 'right'
                      ? { left: '60px', top: '50%', transform: 'translateY(-50%)' }
                      : { right: '60px', top: '50%', transform: 'translateY(-50%)' }
                  ),
                  width: isMobile ? '85vw' : '400px',
                  background: 'rgba(15,15,18,0.95)',
                  backdropFilter: 'blur(20px)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                  transition: 'border-color 0.4s ease',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                {/* Horizontal Connector Line for Desktop */}
                {!isMobile && visualSide !== 'center' && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    [visualSide === 'right' ? 'left' : 'right']: '-60px',
                    width: '60px',
                    height: '2px',
                    background: activeNode === node.id ? 'var(--color-magenta)' : 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-50%)',
                    zIndex: -1,
                    transition: 'background 0.4s ease'
                  }} />
                )}

                {/* Status Tag */}
                <div style={{
                  display: 'inline-block',
                  background: activeNode === node.id ? 'rgba(255,0,127,0.15)' : 'rgba(255,255,255,0.05)',
                  color: activeNode === node.id ? 'var(--color-magenta)' : 'rgba(255,255,255,0.5)',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  {t(`creativeDirection.projectTracker.nodes.${node.key}.status`)}
                </div>

                <h3 style={{
                  color: '#fff',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  marginBottom: '0.8rem',
                  fontFamily: 'var(--font-primary)',
                  letterSpacing: '1px'
                }}>
                  {t(`creativeDirection.projectTracker.nodes.${node.key}.title`)}
                </h3>
                
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  margin: 0,
                  fontWeight: 300
                }}>
                  {t(`creativeDirection.projectTracker.nodes.${node.key}.desc`)}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Global CSS for spin and flow animations */}
      <style>{`
        .spin {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .data-flow {
          animation: dataFlow 1.5s linear infinite;
        }
        @keyframes dataFlow {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </section>
  );
};

export default ProjectTracker;
