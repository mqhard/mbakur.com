import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Play, Pause, SkipForward, SkipBack, MessageSquare, List, Volume2, MoreHorizontal, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { galleryProjects } from '../data/brandGalleryData';

const BrandGallery = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [activeTab, setActiveTab] = useState('Browse');
  const [hoveredProject, setHoveredProject] = useState(galleryProjects[0]);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-primary)' }}>
      
      {/* Navbar Minimal */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, width: '100%', zIndex: 100, mixBlendMode: 'difference' }}>
        <button 
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'var(--font-secondary)', fontSize: '1.1rem', letterSpacing: '1px' }}
        >
          {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {t('brand_gallery.back')}
        </button>
      </nav>

      {/* VisionOS Interactive Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '10vh 2vw 2vh 2vw',
        overflow: 'hidden'
      }}>
        
        {/* Abstract/Room Background to give context to the glass */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(60px) brightness(0.4)',
          zIndex: 0,
          transform: 'scale(1.2)'
        }} />



        {/* Main Container Layer (Glass background + contents) */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '100%', zIndex: 10 }}>
          
          {/* Main Glass Panel (Sits behind the overflowing carousel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '85vh',
              justifyContent: 'center'
            }}
          >

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: isRTL ? 'normal' : '8px', textTransform: 'uppercase', margin: 0 }}>
                {t('brand_gallery.title')}
              </h1>
              <p style={{ color: '#aaa', letterSpacing: isRTL ? 'normal' : '2px', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase' }}>
                {t('brand_gallery.subtitle')}
              </p>
            </div>
            {/* Grid of Projects (Inside Container) */}
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '1rem',
              marginBottom: '3rem',
              zIndex: 20
            }} dir="ltr">
              {galleryProjects.map((project) => (
                    <motion.div 
                      key={project.id}
                      onHoverStart={() => setHoveredProject(project)}
                      onClick={() => navigate(`/brand-project/${project.id}`)}
                      whileHover={{ scale: 1.05, y: -10 }}
                      style={{
                        minWidth: '220px', width: '220px', height: '220px',
                        borderRadius: '24px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                      }}
                    >
                      <img 
                        src={project.visualIdentity.logoScreen} 
                        alt={project.brandName} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} 
                      />
                    </motion.div>
                  ))}
            </div>

            {/* Split Bottom Section: Dynamic Brand Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '0 1rem', minHeight: '200px' }}>
              
              {/* Left: Typography & Technical Details */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`left-${hoveredProject.id}`}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                >
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '2px', color: '#aaa' }}>
                    <List size={16} /> {t('brand_gallery.specifications')}
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Typography */}
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      {hoveredProject.visualIdentity?.typography?.primary && (
                        <div>
                          <p style={{ margin: '0 0 5px 0', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{t('brand_gallery.primary_typeface')}</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '1.2rem', letterSpacing: isRTL ? 'normal' : '1px' }}>{typeof hoveredProject.visualIdentity.typography.primary === 'string' ? hoveredProject.visualIdentity.typography.primary : hoveredProject.visualIdentity.typography.primary.name}</p>
                        </div>
                      )}
                      {hoveredProject.visualIdentity?.typography?.secondary && (
                        <div>
                          <p style={{ margin: '0 0 5px 0', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{t('brand_gallery.secondary_typeface')}</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '1.2rem', fontFamily: 'var(--font-secondary)', letterSpacing: isRTL ? 'normal' : '1px' }}>{typeof hoveredProject.visualIdentity.typography.secondary === 'string' ? hoveredProject.visualIdentity.typography.secondary : hoveredProject.visualIdentity.typography.secondary.name}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Technical details */}
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{t('brand_gallery.industry_year')}</p>
                      <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>{isRTL ? hoveredProject.industryAr || hoveredProject.industry : hoveredProject.industry} &bull; {hoveredProject.year}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right: Color Palette & Statement */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`right-${hoveredProject.id}`}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                >
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '2px', color: '#aaa' }}>
                    <Heart size={16} /> {t('brand_gallery.identity_elements')}
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Color Palette */}
                    <div>
                      <p style={{ margin: '0 0 10px 0', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{t('brand_gallery.color_system')}</p>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {hoveredProject.visualIdentity?.colorSystem?.slice(0, 5).map((color, idx) => (
                          <div 
                            key={idx} 
                            style={{ 
                              width: '40px', height: '40px', borderRadius: '50%', 
                              backgroundColor: color.hex || color, 
                              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                              border: '1px solid rgba(255,255,255,0.1)'
                            }} 
                            title={color.name || color}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Statement Snippet */}
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: isRTL ? 'normal' : '1px' }}>{t('brand_gallery.brand_essence')}</p>
                      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.9, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {isRTL ? (hoveredProject.introAr?.statement || hoveredProject.storyAr?.objective || hoveredProject.intro?.statement) : (hoveredProject.intro?.statement || hoveredProject.story?.objective)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </section>

      {/* The Collection Section (Standard Archive) */}
      <section style={{ minHeight: '100vh', padding: '10vh 5%', position: 'relative', zIndex: 2 }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '8rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
            {t('brand_gallery.explore_archive')}
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {galleryProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} navigate={navigate} isRTL={isRTL} t={t} />
          ))}
        </div>
      </section>

    </div>
  );
};

const ProjectCard = ({ project, index, navigate, isRTL, t }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={() => navigate(`/brand-project/${project.id}`)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        borderRadius: '2px',
        border: '1px solid rgba(255,255,255,0.05)',
        cursor: 'pointer',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.01)',
        group: 'true'
      }}
      className="brand-gallery-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', zIndex: 2 }}>
        <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>{isRTL ? project.brandNameAr || project.brandName : project.brandName}</h3>
        <span style={{ color: '#666', fontSize: '1.2rem', fontWeight: 300, display: window.innerWidth > 768 ? 'block' : 'none' }}>{isRTL ? project.industryAr || project.industry : project.industry}</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', zIndex: 2 }}>
        <span style={{ color: '#666', fontSize: '1.1rem', letterSpacing: isRTL ? 'normal' : '1px' }}>{project.year}</span>
        <span style={{ padding: '8px 16px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', fontSize: '0.9rem', color: '#aaa' }}>{isRTL ? project.typeAr || project.type : project.type}</span>
      </div>

      <div className="bg-reveal" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url(${project.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0,
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transform: 'scale(1.05)',
        zIndex: 0
      }} />
      <div className="bg-overlay" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.6)',
        opacity: 0,
        transition: 'opacity 0.7s ease',
        zIndex: 1
      }} />

    </motion.div>
  );
};

export default BrandGallery;
