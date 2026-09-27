import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';
import { categoriesData, projectsData } from '../data/portfolioData';

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Selected Works');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ id: null, isVertical: false });

  const categories = categoriesData;
  const projects = projectsData;

  const activeColor = categories.find(c => c.id === activeFilter)?.color || 'var(--color-accent)';

  const filteredProjects = activeFilter === 'Selected Works' 
    ? projects 
    : projects.filter(p => p.categoryId === activeFilter);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '3rem', paddingTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, lineHeight: 1 }}
          >
            {t('portfolio.title1', 'Our ')}<span style={{ color: activeColor, transition: 'color 0.3s ease' }}>{t('portfolio.title2', 'Work')}</span>
          </motion.h2>
          
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.02)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                aria-pressed={activeFilter === cat.id}
                className="portfolio-filter"
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: '8px 16px',
                  background: activeFilter === cat.id ? cat.color : 'transparent',
                  border: `1px solid ${activeFilter === cat.id ? cat.color : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '30px',
                  color: activeFilter === cat.id ? '#000' : '#aaa',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-tight)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== cat.id) {
                    e.currentTarget.style.borderColor = cat.color;
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== cat.id) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#aaa';
                  }
                }}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>


        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.button
                type="button"
                layout
                onClick={() => {
                  if (project.youtubeId) {
                    setCurrentVideo({ 
                      id: project.youtubeId, 
                      isVertical: project.isVertical,
                      titleKey: project.titleKey,
                      descKey: project.descKey 
                    });
                    setVideoModalOpen(true);
                  } else if (project.categoryId === 'Brand Identity') {
                    navigate('/brand-gallery');
                  }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="ui-card portfolio-card"
                style={{
                  position: 'relative',
                  height: '420px',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                  style={{
                    width: '100%', height: '100%',
                    background: `url(${project.img}) center/cover`,
                    filter: 'grayscale(60%)',
                    transition: 'filter 0.5s ease, transform 0.5s ease'
                  }}
                />
                
                {project.youtubeId && (
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '60px', height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.5)',
                    border: `1px solid var(--color-text)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 2,
                    pointerEvents: 'none',
                    boxShadow: `0 0 20px rgba(255,255,255,0.2)`
                  }}>
                    <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
                  </div>
                )}

                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, width: '100%',
                  padding: '2.5rem 2rem 2rem 2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: activeFilter === 'Selected Works' ? 'var(--color-accent)' : activeColor, fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', transition: 'color 0.3s ease' }}>
                    {t(project.catLabelKey)}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    {t(project.titleKey)}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            style={{ textAlign: 'center', padding: '5rem 0', color: '#777' }}
          >
            <p style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
              {t('portfolio.empty', 'More projects coming soon...')}
            </p>
          </motion.div>
        )}
      </div>
      
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
        youtubeId={currentVideo.id} 
        isVertical={currentVideo.isVertical}
        titleKey={currentVideo.titleKey}
        descKey={currentVideo.descKey}
      />
    </section>
  );
};

export default Portfolio;
