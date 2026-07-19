import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const XIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM9.9 15.5l6.4-3.5-6.4-3.5v7z"/>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const BehanceIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M22 7h-7v2h7v-2zM5.5 13.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5h-5.5v7h5.5zm-3.5-5h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3.5v-3zM7 14h-7v7h7c2.8 0 5-2.2 5-5s-2.2-2-5-2zm-5 5v-3h5c1.7 0 3 1.3 3 3s-1.3 3-3 3h-5zM17.5 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5h-2.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.5 0 .9.1 1.3.4l1.3-1.8c-1-.8-2.1-1.1-3.1-1.1z"/>
  </svg>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <footer style={{ backgroundColor: '#020202', paddingTop: '0.5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Top Gradient Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '5%',
        right: '5%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 0, 127, 0.3), rgba(0, 255, 255, 0.3), transparent)',
      }} />

      {/* Subtle Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(255, 0, 127, 0.03) 0%, rgba(255, 69, 0, 0.02) 30%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '0 3%', width: '100%' }}>
        
        {/* MAIN ROW: QUICK LINKS, NAME, SOCIAL/CONTACT */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 0'
        }}>
          
          {/* LEFT: QUICK LINKS */}
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '4rem' }}>
            <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontFamily: 'var(--font-primary)' }}>{t('footer.quick')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
              {['q1', 'q2', 'q3', 'q4'].map((item, i) => (
                <motion.li key={i} whileHover={{ y: -3 }}>
                  <a href="#" style={{ color: '#aaa', fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-cyan)'} onMouseOut={e => e.target.style.color = '#aaa'}>
                    {t(`footer.${item}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CENTER: NAME & DESCRIPTION */}
          <div style={{ flex: '1 1 350px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', fontFamily: 'var(--font-primary)' }}>
              <span style={{ color: '#fff', textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>{t('footer.name')}</span>
              <span style={{ color: '#fff', textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>{t('footer.name_span')}</span>
            </h3>
            <p style={{ color: 'var(--color-accent-dark)', fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>{t('footer.desc')}</p>
          </div>

          {/* RIGHT: SOCIAL & CONTACT */}
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '2.5rem', textAlign: 'center', marginTop: '4rem' }}>
            
            {/* SOCIAL */}
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontFamily: 'var(--font-primary)' }}>{t('footer.social')}</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#" aria-label="X (Twitter)" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => {e.currentTarget.style.background='#000'; e.currentTarget.style.borderColor='#333'; e.currentTarget.style.transform='translateY(-5px)'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='none'}}>
                  <XIcon size={18} />
                </a>
                <a href="#" aria-label="YouTube" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => {e.currentTarget.style.background='#FF0000'; e.currentTarget.style.borderColor='#FF0000'; e.currentTarget.style.transform='translateY(-5px)'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='none'}}>
                  <YoutubeIcon size={22} />
                </a>
                <a href="#" aria-label="Instagram" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => {e.currentTarget.style.background='var(--color-accent)'; e.currentTarget.style.borderColor='var(--color-accent)'; e.currentTarget.style.transform='translateY(-5px)'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='none'}}>
                  <InstagramIcon size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => {e.currentTarget.style.background='#0077b5'; e.currentTarget.style.borderColor='#0077b5'; e.currentTarget.style.transform='translateY(-5px)'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='none'}}>
                  <LinkedinIcon size={20} />
                </a>
                <a href="#" aria-label="Behance" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => {e.currentTarget.style.background='#1769ff'; e.currentTarget.style.borderColor='#1769ff'; e.currentTarget.style.transform='translateY(-5px)'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='none'}}>
                  <BehanceIcon size={20} />
                </a>
              </div>
            </div>
            
            {/* CONTACT */}
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontFamily: 'var(--font-primary)' }}>{t('footer.contact')}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
                <a href="mailto:hello@mohammedbakur.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#aaa', fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#aaa'}>
                  <Mail size={18} />
                  hello@mohammedbakur.com
                </a>
                <a href="tel:+966500000000" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#aaa', fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#aaa'}>
                  <Phone size={18} />
                  +966 XX XXX XXXX
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Rights Section */}
        <div style={{ 
          marginTop: '0.2rem', 
          padding: '0.5rem 0', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '0.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>
            Designed by <span style={{ color: 'var(--color-accent)' }}>Visual Craftsmanship</span>
          </p>
          <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
