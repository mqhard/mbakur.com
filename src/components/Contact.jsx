import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section" 
      style={{ 
        position: 'relative',
        backgroundColor: '#050505',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Dynamic Futuristic Gradient Background (under the glass) */}
      <div style={{
        position: 'absolute',
        inset: '-20%',
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 69, 0, 0.4) 0%, rgba(255, 0, 127, 0.3) 25%, transparent 50%),
          radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), rgba(0, 255, 255, 0.2) 0%, transparent 40%)
        `,
        transition: 'all 0.1s ease',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Gray Glass Filter overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(15, 15, 15, 0.65)',
        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)',
        zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        pointerEvents: 'none'
      }} />

      {/* Top Black Gradient Edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to bottom, #030303 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Bottom Black Gradient Edge */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to top, #030303 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              borderLeft: isRtl ? 'none' : '2px solid var(--color-accent)',
              borderRight: isRtl ? '2px solid var(--color-accent)' : 'none',
              paddingLeft: isRtl ? '0' : '2rem',
              paddingRight: isRtl ? '2rem' : '0',
              marginBottom: '4rem'
            }}
          >
            <h2 style={{ fontSize: '3.5rem', margin: 0, textShadow: '0 0 20px rgba(255,0,127,0.3)' }}>
              {t('contact.title')}
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '1rem' }}>
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <input 
                type="text" 
                placeholder={t('contact.ph_name')}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '1rem 0',
                  color: '#fff',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '1.2rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-accent)'}
                onBlur={(e) => e.target.style.borderBottomColor = '#333'}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <input 
                type="email" 
                placeholder={t('contact.ph_email')}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '1rem 0',
                  color: '#fff',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '1.2rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-accent-dark)'}
                onBlur={(e) => e.target.style.borderBottomColor = '#333'}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{ position: 'relative' }}
            >
              <input 
                type="text" 
                placeholder={t('contact.ph_subject')}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '1rem 0',
                  color: '#fff',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '1.2rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-accent)'}
                onBlur={(e) => e.target.style.borderBottomColor = '#333'}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button type="submit" className="btn-luxury">
                {t('contact.btn')}
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
