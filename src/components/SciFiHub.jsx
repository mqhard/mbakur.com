import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Video, Layout, TrendingUp } from 'lucide-react';

const SciFiHub = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const isMobile = window.innerWidth < 600;

  const rawItems = t('expertisePage.matrix_items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const nodesData = [
    { id: 'creative', icon: <Lightbulb size={isMobile ? 24 : 32} />, title: items[0] ? items[0].title : 'Creative Direction', path: '/creative-direction' },
    { id: 'cinematography', icon: <Video size={isMobile ? 24 : 32} />, title: items[1] ? items[1].title : 'Cinematography', path: '/expertise' },
    { id: 'uiux', icon: <Layout size={isMobile ? 24 : 32} />, title: items[2] ? items[2].title : 'UI/UX Design', path: '/expertise' },
    { id: 'content', icon: <TrendingUp size={isMobile ? 24 : 32} />, title: items[3] ? items[3].title : 'Content Strategy', path: '/expertise' },
  ];

  return (
    <section 
      style={{ 
        minHeight: '60vh', 
        padding: '100px 20px',
        position: 'relative', 
        background: 'var(--color-bg)', // Removed personal-banner.jpg
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        zIndex: 2,
      }}>
        <h2 style={{ fontSize: '2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>
          Expertise & Services
        </h2>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        maxWidth: '1000px',
        width: '100%',
        zIndex: 2
      }}>
        {nodesData.map((node) => (
          <div 
            key={node.id}
            onClick={() => {
              if (node.path.startsWith('/')) navigate(node.path);
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              padding: '30px',
              background: 'rgba(20, 20, 20, 0.7)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              cursor: 'pointer',
              width: isMobile ? '130px' : '180px',
              height: isMobile ? '130px' : '180px',
              textAlign: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 0, 128, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 0, 128, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 20, 20, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            }}
          >
            <div style={{ color: '#fff' }}>
              {node.icon}
            </div>
            <span style={{
              color: '#fff',
              fontSize: isMobile ? '0.8rem' : '0.95rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              {node.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SciFiHub;
