import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Selected Works');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ id: null, isVertical: false });

  const categories = [
    { id: 'Selected Works', label: t('portfolio.cat_selected'), color: 'var(--color-orange)' },
    { id: 'Commercial Projects', label: t('portfolio.cat_commercial'), color: 'var(--color-magenta)' },
    { id: 'Brand Identity', label: t('portfolio.cat_brandidentity'), color: '#00ffff' },
    { id: 'Creative Direction', label: t('portfolio.cat_creative'), color: '#FFB800' },
    { id: 'Cinematography', label: t('portfolio.cat_cinematography'), color: 'var(--color-orange)' },
    { id: 'Videography', label: t('portfolio.cat_videography'), color: 'var(--color-magenta)' },
    { id: 'Photography', label: t('portfolio.cat_photography'), color: '#00ffff' },
    { id: 'Post Production', label: t('portfolio.cat_postproduction'), color: '#FFB800' },
    { id: 'AI Production', label: t('portfolio.cat_ai'), color: 'var(--color-orange)' },
    { id: 'Content CRM & Engagement', label: t('portfolio.cat_crm'), color: 'var(--color-magenta)' }
  ];

  const activeColor = categories.find(c => c.id === activeFilter)?.color || 'var(--color-magenta)';

  const projects = [
    { id: 1, title: t('portfolio.proj_global'), categoryId: 'Commercial Projects', catLabel: t('portfolio.cat_commercial'), img: 'https://images.unsplash.com/photo-1616053360216-243ff32fc1b4?auto=format&fit=crop&q=80', youtubeId: '9qWR53Hwdcs' },
    { id: 3, title: t('portfolio.proj_silent'), categoryId: 'Cinematography', catLabel: t('portfolio.cat_cinematography'), img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80', youtubeId: '-06vVCL3Rgk' },
    { id: 5, title: t('portfolio.proj_immersive'), categoryId: 'Videography', catLabel: t('portfolio.cat_videography'), img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80', youtubeId: 'V6LiiLFhEMg' },
    { id: 7, title: t('portfolio.proj_brand'), categoryId: 'Creative Direction', catLabel: t('portfolio.cat_creative'), img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80', youtubeId: '9R7jnqVhAMk' },
    { id: 8, title: t('portfolio.proj_auto'), categoryId: 'Content CRM & Engagement', catLabel: t('portfolio.cat_crm'), img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', youtubeId: 'NK9aRPfZt7w', isVertical: true },
    { id: 9, title: t('portfolio.proj_dummy_photo'), categoryId: 'Photography', catLabel: t('portfolio.cat_photography'), img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80' },
    { id: 10, title: t('portfolio.proj_dummy_cinematic'), categoryId: 'Cinematography', catLabel: t('portfolio.cat_cinematography'), img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80', youtubeId: 'ns5mH_shHLg' },
    { id: 11, title: t('portfolio.proj_dummy_motion'), categoryId: 'Post Production', catLabel: t('portfolio.cat_motion'), img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80', youtubeId: '-EDiA9BTaiA' },

    { id: 13, title: t('portfolio.proj_dummy_photoedit'), categoryId: 'Post Production', catLabel: t('portfolio.cat_photoediting'), img: 'https://images.unsplash.com/photo-1626025345750-62bd0b9ed498?auto=format&fit=crop&q=80' },
    { id: 14, title: t('portfolio.proj_dummy_videoedit'), categoryId: 'Post Production', catLabel: t('portfolio.cat_videoediting'), img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80', youtubeId: 'sp81sFEVpmo' },
    { id: 15, title: t('portfolio.proj_dummy_color'), categoryId: 'Post Production', catLabel: t('portfolio.cat_colorgrading'), img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80' },
    { id: 16, title: t('portfolio.proj_dummy_directing'), categoryId: 'Post Production', catLabel: t('portfolio.cat_directing'), img: 'https://images.unsplash.com/photo-1533422902779-dac15eb1b181?auto=format&fit=crop&q=80', youtubeId: '-mUDQJWxMn4' },
    { id: 17, title: t('portfolio.proj_dummy_ai'), categoryId: 'AI Production', catLabel: t('portfolio.cat_ai'), img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80' },
    { id: 41, title: t('portfolio.proj_brand_1'), categoryId: 'Brand Identity', catLabel: t('portfolio.cat_brandidentity'), img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80' },
    { id: 42, title: t('portfolio.proj_brand_2'), categoryId: 'Brand Identity', catLabel: t('portfolio.cat_brandidentity'), img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80' },
    { id: 4, title: t('portfolio.proj_modern'), categoryId: 'Brand Identity', catLabel: t('portfolio.cat_brandidentity'), img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80' }
  ];

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
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: '8px 16px',
                  background: activeFilter === cat.id ? cat.color : 'transparent',
                  border: `1px solid ${activeFilter === cat.id ? cat.color : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '30px',
                  color: activeFilter === cat.id ? (cat.color === 'var(--color-magenta)' || cat.color === 'var(--color-orange)' ? '#fff' : '#000') : '#aaa',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== cat.id) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
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
                {cat.label}
              </button>
            ))}
          </div>
        </div>


        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                onClick={() => {
                  if (project.youtubeId) {
                    setCurrentVideo({ id: project.youtubeId, isVertical: project.isVertical });
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
                className="dotted-border"
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
                    background: 'rgba(255,0,127,0.3)',
                    border: '1px solid var(--color-magenta)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 2,
                    pointerEvents: 'none',
                    boxShadow: '0 0 30px rgba(255,0,127,0.5)'
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
                  <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            style={{ textAlign: 'center', padding: '5rem 0', color: '#777' }}
          >
            <p style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              More projects coming soon...
            </p>
          </motion.div>
        )}
      </div>
      
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
        youtubeId={currentVideo.id} 
        isVertical={currentVideo.isVertical} 
      />
    </section>
  );
};

export default Portfolio;
