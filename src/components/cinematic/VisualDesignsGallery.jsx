import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VisualDesignsGallery = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const projectsTranslations = t('creativeDirection.visualDesigns.projects', { returnObjects: true }) || [];
  
  const projects = [
    { 
      id: 1, 
      title: projectsTranslations[0]?.title || 'Abstract Dimensions', 
      category: projectsTranslations[0]?.cat || '3D Design', 
      // Different images from DirectorPortfolio for variety
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: projectsTranslations[1]?.title || 'Neon Typography', 
      category: projectsTranslations[1]?.cat || 'Typography', 
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: projectsTranslations[2]?.title || 'Glassmorphism UI', 
      category: projectsTranslations[2]?.cat || 'Interface', 
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: projectsTranslations[3]?.title || 'Brand Evolution', 
      category: projectsTranslations[3]?.cat || 'Identity', 
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop' 
    },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '10vh 5vw',
      position: 'relative',
      background: 'transparent',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#fff',
              fontWeight: 900,
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-primary)'
            }}
          >
            {t('creativeDirection.visualDesigns.title1')} <br/>
            <span style={isRtl 
              ? { color: 'rgba(0,255,255,0.15)', textShadow: '0 0 20px rgba(0,255,255,0.2)' }
              : { color: 'transparent', WebkitTextStroke: '1px var(--color-cyan)' }}>
              {t('creativeDirection.visualDesigns.title2')}
            </span>
          </motion.h2>
        </div>

        {/* Artistic Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="interactive"
              style={{
                position: 'relative',
                aspectRatio: '4/5', // Slightly different aspect ratio for variety
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: hoveredId === project.id ? '0 20px 40px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'box-shadow 0.4s ease'
              }}
            >
              {/* Background Image with Slow Zoom */}
              <motion.div
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                  filter: hoveredId === project.id ? 'brightness(0.5) contrast(120%)' : 'brightness(0.3) contrast(100%) grayscale(50%)'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />

              {/* Overlay Gradient for Text Readability */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 1
              }} />

              {/* View Icon Indicator (Instead of Play) */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px', height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(0,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--color-cyan)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      zIndex: 2,
                      boxShadow: '0 0 30px rgba(0,255,255,0.4)'
                    }}
                  >
                    <Eye size={24} color="var(--color-cyan)" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Text Content */}
              <motion.div 
                animate={{ y: hoveredId === project.id ? 0 : 20 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0, width: '100%',
                  padding: '2rem',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <p style={{
                  color: 'var(--color-cyan)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  margin: 0,
                  fontFamily: 'var(--font-primary)'
                }}>
                  {project.category}
                </p>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#fff',
                  margin: 0,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-primary)',
                  textShadow: '0 0 10px rgba(0,0,0,0.8)'
                }}>
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualDesignsGallery;
