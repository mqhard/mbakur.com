import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cpu, Eye, Fingerprint } from 'lucide-react';

const CreativeTechInnovation = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const features = [
    { key: 'f1', icon: <Eye size={32} /> },
    { key: 'f2', icon: <Cpu size={32} /> },
    { key: 'f3', icon: <Fingerprint size={32} /> }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '15vh 5vw',
      position: 'relative',
      background: 'transparent',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#fff',
              fontWeight: 900,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-primary)',
              textShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}
          >
            {t('creativeDirection.creativeTech.title')} <br/>
            <span style={{ color: 'var(--color-cyan)', textShadow: '0 0 20px rgba(0,255,255,0.3)' }}>
              {t('creativeDirection.creativeTech.subtitle')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '800px',
              margin: '2rem auto 0',
              lineHeight: 1.8
            }}
          >
            {t('creativeDirection.creativeTech.desc')}
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {features.map((feature, idx) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="interactive"
              style={{
                background: 'rgba(20,20,25,0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                textAlign: isRtl ? 'right' : 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle hover glow */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                [isRtl ? 'left' : 'right']: '-50px',
                width: '150px',
                height: '150px',
                background: idx === 1 ? 'rgba(0,255,255,0.1)' : 'rgba(255,0,127,0.1)',
                filter: 'blur(40px)',
                borderRadius: '50%',
                zIndex: 0
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  color: idx === 1 ? 'var(--color-cyan)' : 'var(--color-magenta)',
                  marginBottom: '2rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#fff',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-primary)'
                }}>
                  {t(`creativeDirection.creativeTech.${feature.key}_title`)}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {t(`creativeDirection.creativeTech.${feature.key}_desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeTechInnovation;
