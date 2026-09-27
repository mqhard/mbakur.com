import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import { MotionConfig } from 'framer-motion';
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
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="app-container">
      <SiteHeader key={location.pathname} onLogin={() => setIsLoginOpen(true)} />
      {isLoginOpen && <Login isModal={true} onClose={() => setIsLoginOpen(false)} />}

      <main id="main-content">
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
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
