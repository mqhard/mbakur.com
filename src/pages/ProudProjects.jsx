import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Video, PenTool, Layout, MonitorPlay, Zap, Sparkles, Camera } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Community from '../components/Community';

const ProudProjects = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';

  const data = t('proudProjects', { returnObjects: true });

  if (!data || typeof data !== 'object') {
    return <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', paddingBottom: '100px' }}>
      <Helmet>
        <title>{data.hero_title} | Mohammed Bakur</title>
        <meta name="description" content={data.hero_subtitle} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${data.hero_title}",
              "description": "${data.hero_subtitle}",
              "author": {
                "@type": "Person",
                "name": "Mohammed Bakur"
              },
              "keywords": "Design, UI/UX, Post-Production, Cinematic Hardware, Creative Direction, Digital Transformation, Figma, Premiere Pro, DaVinci Resolve",
              "inLanguage": "${isRTL ? 'ar' : 'en'}"
            }
          `}
        </script>
      </Helmet>

      {/* Navbar */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(3,3,3,0.85)', backdropFilter: 'blur(15px)', zIndex: 100 }}>
        <button 
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', color: 'var(--color-gray-light)', cursor: 'pointer', fontFamily: 'var(--font-secondary)', fontSize: '1.1rem' }}
        >
          {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {t('expertisePage.back_btn', 'Back to Home')}
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* 1. Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', margin: '15vh 0 10vh 0', position: 'relative' }}
        >
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255,69,0,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
          }} />
          
          <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, letterSpacing: '2px' }}>
            {data.hero_title}
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#ccc', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, position: 'relative', zIndex: 1, fontFamily: 'var(--font-secondary)' }}>
            {data.hero_subtitle}
          </p>
        </motion.header>

        {/* 2. Featured Projects Showcase */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.5rem' }}>{data.featured_title}</h2>
              <p style={{ color: 'var(--color-gray-light)', fontSize: '1.2rem' }}>{data.featured_subtitle}</p>
            </div>
            <Sparkles color="var(--color-orange)" size={40} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[1, 2].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-panel" style={{ borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '300px', background: i === 0 ? 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80) center/cover' : 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80) center/cover', transition: 'transform 0.5s ease' }} className="project-img" />
                <div style={{ padding: '2rem' }}>
                  <span style={{ color: 'var(--color-magenta)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {i === 0 ? 'Case Study' : 'Future Work'}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', margin: '1rem 0' }}>{i === 0 ? 'The Silent Brand Evolution' : 'Immersive Digital Experience'}</h3>
                  <p style={{ color: '#aaa', lineHeight: 1.6 }}>Discover how we utilized advanced UI/UX and cinematic hardware to craft this award-winning project.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. The Technological Arsenal */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-orange)' }}>{data.arsenal_title}</h2>
            <p style={{ color: '#ccc', fontSize: '1.2rem', marginTop: '1rem' }}>{data.arsenal_subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {data.categories && data.categories.map((cat, i) => {
              const icons = [<Video size={40}/>, <Layout size={40}/>, <Camera size={40}/>, <Zap size={40}/>];
              const colors = ['var(--color-magenta)', '#00ffff', 'var(--color-orange)', '#ffff00'];
              return (
                <motion.div key={i} variants={itemVariants} className="dotted-border glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: '20px', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = colors[i]; e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ color: colors[i], marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    {icons[i % 4]}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{cat.title}</h3>
                  <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '1.5rem' }}>{cat.desc}</p>
                  
                  {cat.tools && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                      {cat.tools.map((tool, tIndex) => (
                        <span 
                          key={tIndex}
                          onClick={() => navigate(`/tool/${tool.toLowerCase().replace(/\s+/g, '-')}`)}
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: `1px solid ${colors[i]}55`,
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#eee',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.background = `${colors[i]}33`; e.currentTarget.style.borderColor = colors[i]; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = `${colors[i]}55`; }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* 4. Latest Articles */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh' }}
        >
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{data.blog_title}</h2>
              <p style={{ color: 'var(--color-gray-light)', fontSize: '1.2rem' }}>{data.blog_subtitle}</p>
            </div>
            <PenTool color="var(--color-magenta)" size={40} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.blog_items && data.blog_items.map((item, i) => (
              <motion.div key={i} variants={itemVariants} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{item.title}</h3>
                <span style={{ color: 'var(--color-orange)', fontSize: '1rem', fontFamily: 'var(--font-secondary)' }}>{item.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4.5 The Sandbox */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh', background: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80) center/cover', padding: '4rem 2rem', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)' }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#00ffff' }}>{data.sandbox_title || 'THE SANDBOX'}</h2>
            <p style={{ color: '#ccc', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '3rem' }}>{data.sandbox_subtitle || 'Daily experiments, code snippets, and behind the scenes.'}</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ width: '220px', height: '160px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(0,255,255,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <Zap color="#00ffff" size={32} style={{ marginBottom: '10px' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600 }}>Figma UI Kit</span>
              </div>
              <div style={{ width: '220px', height: '160px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(255,0,127,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <MonitorPlay color="var(--color-magenta)" size={32} style={{ marginBottom: '10px' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600 }}>After Effects Script</span>
              </div>
              <div style={{ width: '220px', height: '160px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(255,69,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <Camera color="var(--color-orange)" size={32} style={{ marginBottom: '10px' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600 }}>Lighting LUTs</span>
              </div>
            </div>
            
            <button 
              style={{ marginTop: '3rem', background: 'transparent', border: '1px solid #00ffff', color: '#00ffff', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s' }} 
              onClick={() => window.open('https://instagram.com/mbakur', '_blank')}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,255,255,0.1)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,255,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {data.sandbox_btn || 'Follow my experiments'}
            </button>
          </div>
        </motion.section>

        {/* 5. Community Section */}
      </div>
      
      <Community />

    </div>
  );
};

export default ProudProjects;
