import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import Home from './pages/Home';
import ExpertisePage from './pages/ExpertisePage';
import CinematicStudio from './pages/CinematicStudio';
import ProudProjects from './pages/ProudProjects';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BrandIdentity from './pages/BrandIdentity';
import BrandGallery from './pages/BrandGallery';
import BrandGuideViewer from './pages/BrandGuideViewer';

function App() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="app-container">
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'var(--color-glass)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--color-glass-border)',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '20px',
          fontFamily: 'var(--font-primary)',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {t('nav.switch_lang')}
      </button>

      {/* Global Login Icon */}
      <button 
        onClick={() => setIsLoginOpen(true)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          background: 'var(--color-glass)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--color-glass-border)',
          color: '#fff',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <User size={20} />
      </button>

      {isLoginOpen && <Login isModal={true} onClose={() => setIsLoginOpen(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/creative-direction" element={<CinematicStudio />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/legacy" element={<ProudProjects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brand-gallery" element={<BrandGallery />} />
        <Route path="/brand-project/:id" element={<BrandGuideViewer />} />
      </Routes>
    </div>
  );
}

export default App;
