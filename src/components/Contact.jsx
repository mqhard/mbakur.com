import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className="section" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              borderLeft: isRtl ? 'none' : '2px solid var(--color-magenta)',
              borderRight: isRtl ? '2px solid var(--color-magenta)' : 'none',
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
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-magenta)'}
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
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-orange)'}
                onBlur={(e) => e.target.style.borderBottomColor = '#333'}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {t('contact.btn')}
                {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
