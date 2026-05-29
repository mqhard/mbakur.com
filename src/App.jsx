import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ExpertisePage from './pages/ExpertisePage';
import CinematicStudio from './pages/CinematicStudio';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const { i18n, t } = useTranslation();
  const location = useLocation();

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
      <button 
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '20px',
          right: i18n.language === 'ar' ? 'auto' : '20px',
          left: i18n.language === 'ar' ? '20px' : 'auto',
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
          letterSpacing: '1px'
        }}
      >
        {t('nav.switch_lang')}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/creative-direction" element={<CinematicStudio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
