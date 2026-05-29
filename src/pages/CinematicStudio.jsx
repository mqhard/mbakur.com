import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import HeroCinematic from '../components/cinematic/HeroCinematic';
import ProjectTracker from '../components/cinematic/ProjectTracker';
import VisualManipulation from '../components/cinematic/VisualManipulation';
import CinematicPhilosophy from '../components/cinematic/CinematicPhilosophy';
import DirectorPortfolio from '../components/cinematic/DirectorPortfolio';
import Footer from '../components/Footer';

const CinematicStudio = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const toggleLanguage = () => {
    const newLang = isRTL ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="cinematic-theme" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="noise-overlay"></div>
      
      {/* Navbar/Header matching ExpertisePage */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, background: 'linear-gradient(to bottom, rgba(3,3,3,0.8), transparent)', zIndex: 100 }}>
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="interactive"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', color: 'var(--color-gray-light)', cursor: 'pointer', fontFamily: 'var(--font-secondary)', fontSize: '1.1rem' }}
        >
          {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {t('expertisePage.back_btn')}
        </button>

        {/* Section Title */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 800,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-primary)',
          opacity: 0.9,
          display: 'none', // Hidden on very small screens if needed, but flex takes care of it usually
          '@media (min-width: 768px)': { display: 'block' }
        }} className="desktop-only-title">
          {isRTL ? 'الإدارة الإبداعية' : 'Creative Direction'}
        </div>

        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="interactive"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '0.4rem 1.2rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-primary)',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
        >
          {isRTL ? 'EN' : 'عربي'}
        </button>
      </nav>

      {/* Basic CSS for title visibility */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only-title { display: none !important; }
        }
        @media (min-width: 769px) {
          .desktop-only-title { display: block !important; }
        }
      `}</style>

      <VisualManipulation />
      <HeroCinematic />
      <ProjectTracker />
      <CinematicPhilosophy />
      <DirectorPortfolio />
      <Footer />
    </div>
  );
};

export default CinematicStudio;
