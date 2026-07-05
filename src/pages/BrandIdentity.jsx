import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, User, Briefcase, Box, Users, Globe,
  Search, Crosshair, Heart, Droplet, BookOpen, Layers, Zap, TrendingUp, CheckCircle2
} from 'lucide-react';

// Data Structures

const pathsConfig = [
  {
    id: 'personal',
    icon: User,
    color: '#ff007f',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'business',
    icon: Briefcase,
    color: '#00ffff',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'product',
    icon: Box,
    color: '#ffb800',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'community',
    icon: Users,
    color: '#9d00ff',
    img: 'https://images.unsplash.com/photo-1511632765486-a01c80cf2644?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'movement',
    icon: Globe,
    color: '#00ff66',
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

const journeyPhasesConfig = [
  { id: '01', icon: Search },
  { id: '02', icon: Crosshair },
  { id: '03', icon: Heart },
  { id: '04', icon: Droplet },
  { id: '05', icon: BookOpen },
  { id: '06', icon: Layers },
  { id: '07', icon: Zap },
  { id: '08', icon: TrendingUp }
];


const BrandIdentity = () => {
  
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const translatedPaths = t('brandIdentity.paths', { returnObjects: true }) || [];
  const paths = pathsConfig.map((config, i) => ({
    ...config,
    ...(translatedPaths[i] || {})
  }));

  const translatedJourney = t('brandIdentity.journeyPhases', { returnObjects: true }) || [];
  const journeyPhases = journeyPhasesConfig.map((config, i) => ({
    ...config,
    ...(translatedJourney[i] || {})
  }));

  const projects = t('brandIdentity.projects', { returnObjects: true }) || [];
  
  const [selectedPath, setSelectedPath] = useState(null);
  const [activeIndex, setActiveIndex] = useState(Math.floor((paths.length - 1) / 2));
  
  const lastMousePos = useRef({ x: -1, y: -1 });
  const lastTransitionTime = useRef(0);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const x = e.clientX;
    const y = e.clientY;
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPath]);

  return (
    <div 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden',
      overflowY: selectedPath ? 'auto' : 'hidden', // Lock scroll when in Hub
      position: 'relative',
      fontFamily: 'var(--font-primary)',
      backgroundColor: '#050505',
      color: '#fff',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      
      {/* Dynamic Futuristic Gradient Background (under the glass) */}
      <div style={{
        position: 'fixed',
        inset: '-20%',
        background: `
          radial-gradient(circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255, 69, 0, 0.4) 0%, rgba(255, 0, 127, 0.3) 25%, transparent 50%),
          radial-gradient(circle at calc(100% - var(--mouse-x, 50vw)) calc(100% - var(--mouse-y, 50vh)), rgba(0, 255, 255, 0.2) 0%, transparent 40%)
        `,
        transition: 'all 0.1s ease',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Gray Glass Filter overlay */}
      <motion.div 
        animate={{ 
          backdropFilter: selectedPath ? 'blur(80px)' : 'blur(50px)',
          background: selectedPath ? 'rgba(5, 5, 5, 0.85)' : 'rgba(15, 15, 15, 0.65)'
        }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'fixed',
          inset: 0,
          WebkitBackdropFilter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none'
        }} 
      />

      {/* Navbar/Header */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <button 
          onClick={() => {
            if (selectedPath) setSelectedPath(null);
            else navigate('/');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontFamily: 'var(--font-secondary)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}
        >
          {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {selectedPath ? t('brandIdentity.hub.changePath', 'Change Path') : t('expertisePage.back_btn', 'العودة')}
        </button>
      </nav>

      {/* MAIN CONTENT AREA */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', minHeight: '100vh' }}>
        <AnimatePresence mode="wait">
          
          {/* STATE 1: THE HUB (Choosing a Path - PS5 Style) */}
          {!selectedPath && (
            <motion.div 
              key="hub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', height: '100vh', position: 'relative' }}
            >
              {/* Removed Full Screen Cinematic Backgrounds and Vignette to show global gradient */}

              {/* PS5 Content Overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, padding: '10vh 5%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'start' }}>
                
                {/* Header Title */}
                <h1 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', width: '100%', textAlign: 'center' }}>{t('brandIdentity.hub.title', 'What Are You Building?')}</h1>

                {/* The PS5 Ribbon (Small Tiles) */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                  {paths.map((path, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <motion.button
                        key={`tile-${path.id}`}
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => setActiveIndex(i)}
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          y: isActive ? -10 : 0,
                          opacity: isActive ? 1 : 0.6
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '24px',
                          background: isActive ? `${path.color}22` : 'rgba(255,255,255,0.05)',
                          border: `2px solid ${isActive ? path.color : 'rgba(255,255,255,0.1)'}`,
                          cursor: 'pointer',
                          boxShadow: isActive ? `0 15px 30px rgba(0,0,0,0.3), 0 0 20px ${path.color}66` : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          padding: 0
                        }}
                      >
                        <path.icon size={32} color={isActive ? path.color : '#fff'} style={{ filter: isActive ? `drop-shadow(0 0 8px ${path.color})` : 'none', transition: 'all 0.3s ease' }} />
                      </motion.button>
                    );
                  })}
                </div>

                {/* The Content Area (Game Details & Examples Viewer) */}
                <div style={{ flex: 1, position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '4rem' }}>
                  
                  {/* Left Side: Text Panel */}
                  <div style={{ flex: 1, maxWidth: '750px' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`text-${activeIndex}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'flex-start',
                          background: 'rgba(10, 10, 10, 0.45)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          padding: '3rem',
                          borderRadius: '30px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                          borderLeft: `4px solid ${paths[activeIndex].color}`
                        }}
                      >
                        <motion.h2 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '-1px', color: '#fff' }}
                        >
                          {paths[activeIndex].title}
                        </motion.h2>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                          style={{ fontSize: '1.2rem', color: paths[activeIndex].color, margin: '0 0 1.5rem 0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}
                        >
                          {paths[activeIndex].subtitle}
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                          style={{ fontSize: '1.1rem', color: '#ddd', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}
                        >
                          {paths[activeIndex].desc}
                        </motion.p>

                        {/* Outcomes Badges */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem', maxWidth: '650px', justifyContent: 'flex-start' }}
                        >
                          {paths[activeIndex].outcomes.map((outcome, idx) => (
                            <span key={idx} style={{ 
                              padding: '8px 16px', 
                              background: 'rgba(255,255,255,0.05)', 
                              backdropFilter: 'blur(10px)', 
                              borderRadius: '30px', 
                              fontSize: '0.9rem', 
                              color: '#fff', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              display: 'flex', alignItems: 'center', gap: '8px'
                            }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: paths[activeIndex].color }} />
                              {outcome}
                            </span>
                          ))}
                        </motion.div>

                        {/* PS5 Play Button */}
                        <motion.button 
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                          onClick={() => setSelectedPath(paths[activeIndex])}
                          style={{ 
                            background: '#fff', 
                            color: '#000', 
                            border: 'none', 
                            padding: '1.2rem 3rem', 
                            borderRadius: '40px', 
                            fontSize: '1.2rem', 
                            fontWeight: 'bold', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '15px',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s, background 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = paths[activeIndex].color;
                            e.currentTarget.style.color = '#fff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = '#fff';
                            e.currentTarget.style.color = '#000';
                          }}
                        >
                          {t('brandIdentity.hub.startJourney', 'Start Journey')} {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
                        </motion.button>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Side: Examples Viewer */}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', paddingRight: '2rem' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`gallery-${activeIndex}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                        style={{ 
                          display: 'grid', 
                          gridTemplateColumns: '2fr 1fr', 
                          gridTemplateRows: '1fr 1fr', 
                          gap: '15px', 
                          height: '500px', 
                          width: '100%', 
                          maxWidth: '650px',
                          position: 'relative'
                        }}
                      >
                        <div style={{ 
                          gridRow: '1 / 3', gridColumn: '1 / 2', borderRadius: '24px', 
                          background: `url(${paths[activeIndex].examples[0]}) center/cover`, 
                          border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                          position: 'relative', overflow: 'hidden'
                        }}>
                          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px 20px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                             <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', color: paths[activeIndex].color, fontWeight: 'bold' }}>{t('brandIdentity.hub.featuredExample', 'Featured Example')}</span>
                          </div>
                        </div>
                        <div style={{ 
                          gridRow: '1 / 2', gridColumn: '2 / 3', borderRadius: '24px', 
                          background: `url(${paths[activeIndex].examples[1]}) center/cover`, 
                          border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 15px 30px rgba(0,0,0,0.6)' 
                        }} />
                        <div style={{ 
                          gridRow: '2 / 3', gridColumn: '2 / 3', borderRadius: '24px', 
                          background: `url(${paths[activeIndex].examples[2]}) center/cover`, 
                          border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 15px 30px rgba(0,0,0,0.6)' 
                        }} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* STATE 2: THE JOURNEY (Scrollable) */}
          {selectedPath && (
            <motion.div 
              key="journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ width: '100%', padding: '150px 5% 5rem 5%' }}
            >
              
              {/* Selected Path Intro */}
              <div style={{ maxWidth: '800px', margin: '0 auto 100px auto', textAlign: 'center' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', background: `${selectedPath.color}22`, border: `1px solid ${selectedPath.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}
                >
                  <selectedPath.icon size={40} color={selectedPath.color} />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontSize: '3rem', margin: '0 0 1rem 0', textTransform: 'uppercase' }}
                >
                  {selectedPath.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.6 }}
                >
                  {selectedPath.subtitle}
                </motion.p>
              </div>

              {/* The 8 Phases Timeline */}
              <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: isRTL ? 'auto' : '40px', right: isRTL ? '40px' : 'auto', width: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }} />

                {journeyPhases.map((phase, i) => {
                  return (
                    <motion.div 
                      key={phase.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      style={{ display: 'flex', flexDirection: isRTL ? 'row-reverse' : 'row', gap: '3rem', marginBottom: '6rem', position: 'relative', zIndex: 1 }}
                    >
                      {/* Node */}
                      <div style={{ flexShrink: 0, width: '80px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#000', border: `2px solid ${selectedPath.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${selectedPath.color}44` }}>
                          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: selectedPath.color }}>{phase.id}</span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div style={{ 
                        flex: 1, 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.05)', 
                        borderRadius: '24px', 
                        padding: '3rem',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                          <phase.icon size={28} color={selectedPath.color} />
                          <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', color: selectedPath.color, margin: 0 }}>
                            Phase {phase.id} — {phase.title}
                          </h3>
                        </div>
                        <h4 style={{ fontSize: '2rem', margin: '0 0 1rem 0', fontWeight: 600 }}>{phase.headline}</h4>
                        <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: 1.6, marginBottom: '2rem' }}>{phase.desc}</p>
                        
                        <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                          <h5 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#777', margin: '0 0 1rem 0' }}>{t('brandIdentity.journey.deliverables', 'Deliverables')}</h5>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {phase.deliverables.map((item, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '30px', fontSize: '0.9rem' }}>
                                <CheckCircle2 size={14} color={selectedPath.color} />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* PORTFOLIO SECTION */}
              <div style={{ marginTop: '10rem', marginBottom: '10rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h3 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Visual Evidence</h3>
                  <p style={{ color: '#aaa' }}>Explore how we've brought these phases to life for our clients.</p>
                </div>
                <div style={{ display: 'flex', overflowX: 'auto', gap: '2rem', paddingBottom: '2rem', snapType: 'x mandatory' }}>
                  {projects.map((project, i) => (
                    <motion.div 
                      key={project.id || i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      style={{ flexShrink: 0, width: '400px', height: '500px', borderRadius: '20px', overflow: 'hidden', position: 'relative', snapAlign: 'start' }}
                    >
                      <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                        <h4 style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FINAL CTA */}
              <div style={{ textAlign: 'center', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1.5rem 0' }}>Build Something That Lasts</h2>
                <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
                  Names are created every day.<br/>
                  Legacies are built intentionally.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    background: selectedPath.color,
                    color: '#000',
                    border: 'none',
                    padding: '1.2rem 3rem',
                    borderRadius: '40px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    boxShadow: `0 10px 30px ${selectedPath.color}44`,
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Start Your Journey
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default BrandIdentity;
