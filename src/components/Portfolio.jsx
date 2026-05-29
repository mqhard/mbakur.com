import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('Selected Works');

  const categories = [
    { id: 'Selected Works', label: 'Selected Works' },
    { id: 'Commercial Projects', label: 'Commercial Projects' },
    { id: 'Campaigns', label: 'Campaigns' },
    { id: 'Films', label: 'Films' },
    { id: 'Visual Systems', label: 'Visual Systems' },
    { id: 'Creative Direction', label: 'Creative Direction' },
    { id: 'Digital Experiences', label: 'Digital Experiences' },
    { id: 'Content CRM & Engagement', label: 'Content CRM & Engagement' },
    { id: 'Production Process', label: 'Production Process' },
    { id: 'Case Studies', label: 'Case Studies' },
    { id: 'Original Concepts', label: 'Original Concepts' }
  ];

  const projects = [
    { id: 1, title: 'Global Tech Commercial', categoryId: 'Commercial Projects', img: 'https://images.unsplash.com/photo-1616053360216-243ff32fc1b4?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Summer Collection', categoryId: 'Campaigns', img: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80' },
    { id: 3, title: 'The Silent Echo', categoryId: 'Films', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80' },
    { id: 4, title: 'Modern UI Kit', categoryId: 'Visual Systems', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Immersive Web GL', categoryId: 'Digital Experiences', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' },
    { id: 6, title: 'Growth Analysis 2025', categoryId: 'Case Studies', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' },
    { id: 7, title: 'Brand Storytelling', categoryId: 'Creative Direction', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80' },
    { id: 8, title: 'Automated Workflows', categoryId: 'Production Process', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' }
  ];

  const filteredProjects = activeFilter === 'Selected Works' 
    ? projects 
    : projects.filter(p => p.categoryId === activeFilter);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, lineHeight: 1 }}
          >
            {t('portfolio.title1', 'Our ')}<span className="text-magenta">{t('portfolio.title2', 'Work')}</span>
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
                  background: activeFilter === cat.id ? 'var(--color-magenta)' : 'transparent',
                  border: `1px solid ${activeFilter === cat.id ? 'var(--color-magenta)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '30px',
                  color: activeFilter === cat.id ? '#fff' : '#aaa',
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
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, width: '100%',
                  padding: '2.5rem 2rem 2rem 2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: 'var(--color-magenta)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {project.categoryId}
                  </span>
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
    </section>
  );
};

export default Portfolio;
