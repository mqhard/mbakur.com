import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Expertise = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState(null);

  const expertiseData = [
    {
      id: 'creative',
      title: t('expertise.creative'),
      subitems: [t('expertise.creative_sub1'), t('expertise.creative_sub2'), t('expertise.creative_sub3')],
      color: 'var(--color-magenta)'
    },
    {
      id: 'production',
      title: t('expertise.production'),
      subitems: [t('expertise.prod_sub1'), t('expertise.prod_sub2'), t('expertise.prod_sub3')],
      color: 'var(--color-orange)'
    },
    {
      id: 'design',
      title: t('expertise.design'),
      subitems: [t('expertise.design_sub1'), t('expertise.design_sub2'), t('expertise.design_sub3')],
      color: '#00ffff'
    },
    {
      id: 'marketing',
      title: t('expertise.marketing'),
      subitems: [t('expertise.mark_sub1'), t('expertise.mark_sub2'), t('expertise.mark_sub3')],
      color: '#ffff00'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
        >
          {t('expertise.title')}
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="dotted-border glass-panel"
              style={{
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                transform: hoveredId === item.id ? 'translateY(-10px)' : 'none',
                borderColor: hoveredId === item.id ? item.color : 'var(--color-glass-border)',
                boxShadow: hoveredId === item.id ? `0 0 20px ${item.color}33` : 'none'
              }}
            >
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '2rem',
                color: hoveredId === item.id ? item.color : '#fff',
                transition: 'color 0.4s'
              }}>
                {item.title}
              </h3>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {item.subitems.map((sub, i) => (
                  <li key={i} style={{ 
                    marginBottom: '1rem', 
                    color: '#aaa',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{ 
                      width: '6px', height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: hoveredId === item.id ? item.color : '#333',
                      transition: 'background-color 0.4s'
                    }} />
                    {sub}
                  </li>
                ))}
              </ul>

              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      backgroundColor: item.color,
                      zIndex: -1
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
