import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BlueprintStrategy = () => {
  const [activeStep, setActiveStep] = useState(null);
  const { t } = useTranslation();

  const steps = t('creativeDirection.blueprint.steps', { returnObjects: true }) || [];

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '15vh 5vw',
      position: 'relative',
      background: 'var(--color-bg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Dynamic Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        backgroundPosition: 'center center',
        zIndex: 0,
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            color: '#fff',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '4rem',
            textTransform: 'uppercase',
            borderLeft: '4px solid var(--color-magenta)',
            paddingLeft: '20px',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {t('creativeDirection.blueprint.title')} <br/>
          <span style={{ color: 'var(--color-gray-light)', fontWeight: 300 }}>
            {t('creativeDirection.blueprint.subtitle')}
          </span>
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {Array.isArray(steps) && steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              className="interactive glass-panel"
              style={{
                position: 'relative',
                padding: '3rem 2rem',
                borderRadius: '16px',
                border: `1px solid ${activeStep === index ? 'rgba(255,0,127,0.3)' : 'rgba(255,255,255,0.05)'}`,
                background: activeStep === index ? 'rgba(255,0,127,0.02)' : 'rgba(20,20,25,0.4)',
                backdropFilter: 'blur(10px)',
                boxShadow: activeStep === index ? '0 10px 40px rgba(255,0,127,0.1)' : '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'all 0.4s ease',
                transform: activeStep === index ? 'translateY(-15px)' : 'none',
                overflow: 'hidden'
              }}
            >
              {/* Animated Glowing Orb inside the card */}
              <motion.div 
                animate={{ 
                  scale: activeStep === index ? 1.5 : 1,
                  opacity: activeStep === index ? 0.8 : 0
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(255,0,127,0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: activeStep === index ? 'var(--color-magenta)' : 'rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: '1.5rem',
                  transition: 'color 0.4s ease'
                }}>
                  0{index + 1}
                </div>
                
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#fff',
                  marginBottom: '1rem',
                  letterSpacing: '1px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-primary)'
                }}>
                  {step.title}
                </h3>
                
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  letterSpacing: '0.5px',
                  lineHeight: 1.6
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Bottom Line Progress effect */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: activeStep === index ? '100%' : '0%' }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '3px',
                  background: 'var(--color-magenta)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintStrategy;
