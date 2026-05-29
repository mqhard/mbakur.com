import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: '#020202', padding: '4rem 0', borderTop: '1px solid var(--color-glass-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('footer.name')} <span className="text-magenta">{t('footer.name_span')}</span></h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{t('footer.desc')}</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#aaa', fontSize: '0.9rem', letterSpacing: '1px' }}>{t('footer.quick')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>{t('footer.q1')}</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>{t('footer.q2')}</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>{t('footer.q3')}</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>{t('footer.q4')}</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#aaa', fontSize: '0.9rem', letterSpacing: '1px' }}>{t('footer.social')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>Instagram</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>Behance</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>Vimeo</a></li>
              <li><a href="#" style={{ color: '#fff', fontSize: '0.9rem' }}>LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#aaa', fontSize: '0.9rem', letterSpacing: '1px' }}>{t('footer.contact')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ color: '#fff', fontSize: '0.9rem' }}>hello@mohammedbakur.com</li>
              <li style={{ color: '#fff', fontSize: '0.9rem' }}>+966 XX XXX XXXX</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#666', fontSize: '0.8rem' }}>{t('footer.rights')}</p>
          <p style={{ color: '#666', fontSize: '0.8rem' }}>Visual Craftsmanship</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
