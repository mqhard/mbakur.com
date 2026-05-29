import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DirectorPortfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { t } = useTranslation();

  const projectsTranslations = t('creativeDirection.portfolio.projects', { returnObjects: true }) || [];
  
  const projects = [
    { 
      id: 1, 
      title: projectsTranslations[0]?.title || 'The Silent Brand', 
      category: projectsTranslations[0]?.cat || 'Commercial', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: projectsTranslations[1]?.title || 'Echoes of Neon', 
      category: projectsTranslations[1]?.cat || 'Cinematic', 
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: projectsTranslations[2]?.title || 'Urban Flow', 
      category: projectsTranslations[2]?.cat || 'Documentary', 
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: projectsTranslations[3]?.title || 'Medical Horizons', 
      category: projectsTranslations[3]?.cat || 'Corporate', 
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop' 
    },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '10vh 5vw',
      position: 'relative',
      background: 'var(--color-bg)',
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
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-primary)'
            }}
          >
            {t('creativeDirection.portfolio.title1')} <br/>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gray-light)' }}>
              {t('creativeDirection.portfolio.title2')}
            </span>
          </motion.h2>
        </div>

        {/* Cinematic Grid Layout */}
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
                aspectRatio: '3/4',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Background Image with Slow Zoom */}
              <motion.div
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                  filter: hoveredId === project.id ? 'brightness(0.4) grayscale(50%)' : 'brightness(0.6) grayscale(100%)'
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
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)',
                zIndex: 1
              }} />

              {/* Play Button Indicator */}
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
                      background: 'rgba(255,0,127,0.2)',
                      border: '1px solid var(--color-magenta)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      zIndex: 2,
                      boxShadow: '0 0 30px rgba(255,0,127,0.5)'
                    }}
                  >
                    <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
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
                  color: 'var(--color-magenta)',
                  letterSpacing: '3px',
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
                  fontFamily: 'var(--font-primary)'
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

export default DirectorPortfolio;
