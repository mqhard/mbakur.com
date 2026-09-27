import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Lenis from '@studio-freight/lenis';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import HeroCinematic from '../components/cinematic/HeroCinematic';
import ProjectTracker from '../components/cinematic/ProjectTracker';
import VisualManipulation from '../components/cinematic/VisualManipulation';
import CinematicPhilosophy from '../components/cinematic/CinematicPhilosophy';
import DirectorPortfolio from '../components/cinematic/DirectorPortfolio';
import VisualDesignsGallery from '../components/cinematic/VisualDesignsGallery';
import CreativeTechInnovation from '../components/cinematic/CreativeTechInnovation';
import GeometricGallery from '../components/cinematic/GeometricGallery';
import CreativeCommandCenter from '../components/cinematic/CreativeCommandCenter';
import Footer from '../components/Footer';

const CinematicStudio = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const toggleLanguage = () => {
    const newLang = isRTL ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const bgRef = React.useRef(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!bgRef.current) return;
      // We want to track relative to the gradient container to match Contact.jsx perfectly
      const rect = bgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      bgRef.current.style.setProperty('--mouse-x', `${x}px`);
      bgRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

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

      {/* Exact replica of Contact.jsx Background but fixed to viewport */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <div
          ref={bgRef}
          style={{
            position: 'absolute',
            inset: '-20%',
            background: `
              radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 69, 0, 0.4) 0%, rgba(255, 0, 127, 0.3) 25%, transparent 50%),
              radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), rgba(0, 255, 255, 0.2) 0%, transparent 40%)
            `,
            transition: 'all 0.1s ease',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Gray Glass Filter overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 15, 15, 0.65)',
          backdropFilter: 'blur(50px)',
          WebkitBackdropFilter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <CreativeCommandCenter />
        <DirectorPortfolio />
        <VisualDesignsGallery />
        <HeroCinematic />
        <CreativeTechInnovation />
        <GeometricGallery />
        <ProjectTracker />
        <CinematicPhilosophy />
        <Footer />
      </div>
    </div>
  );
};

export default CinematicStudio;
