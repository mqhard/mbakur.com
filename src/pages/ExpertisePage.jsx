import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, Camera, PenTool, Layout, TrendingUp, MonitorPlay } from 'lucide-react';

const ExpertisePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';

  const data = t('expertisePage', { returnObjects: true });
  
  if (!data || typeof data !== 'object' || !data.stats) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', paddingBottom: '100px' }}>
      
      {/* Navbar/Header */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <button 
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', color: 'var(--color-gray-light)', cursor: 'pointer', fontFamily: 'var(--font-secondary)', fontSize: '1.1rem' }}
        >
          {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {data.back_btn}
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Page Hero */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', margin: '10vh 0', position: 'relative' }}
        >
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,0,127,0.15) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(40px)', zIndex: 0
          }} />
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
            {data.title}
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
            {data.hero_subtitle}
          </p>
        </motion.header>

        {/* Stats Row */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '10vh' }}
        >
          {[data.stats.sales, data.stats.partnerships, data.stats.experience, data.stats.execution].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-magenta)', fontWeight: 600 }}>{stat}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* The Technical Matrix */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{data.matrix_title}</h2>
            <p style={{ color: 'var(--color-gray-light)', marginTop: '1rem', fontSize: '1.2rem' }}>{data.matrix_subtitle}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {Array.isArray(data.matrix_items) && data.matrix_items.map((item, i) => {
              const icons = [<PenTool size={30}/>, <Camera size={30}/>, <Layout size={30}/>, <MonitorPlay size={30}/>];
              return (
                <motion.div key={i} variants={itemVariants} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ color: 'var(--color-orange)', background: 'rgba(255,85,0,0.1)', padding: '1rem', borderRadius: '50%' }}>
                    {icons[i % 4]}
                  </div>
                  <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-gray-light)', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Professional Timeline */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ marginBottom: '15vh' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '4rem' }}>{data.timeline_title}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {Array.isArray(data.timeline_items) && data.timeline_items.map((item, i) => (
              <motion.div key={i} variants={itemVariants} style={{ display: 'flex', gap: '2rem', background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '20px', borderLeft: isRTL ? 'none' : '4px solid var(--color-magenta)', borderRight: isRTL ? '4px solid var(--color-magenta)' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-magenta)' }}>
                    <Briefcase size={20} />
                    <span style={{ fontWeight: 600, letterSpacing: '1px' }}>{item.company}</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem' }}>{item.role}</h3>
                  <p style={{ color: 'var(--color-gray-light)', lineHeight: 1.8, fontSize: '1.1rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technological Arsenal */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{data.arsenal_title}</h2>
            <p style={{ color: 'var(--color-gray-light)', marginTop: '1rem', fontSize: '1.2rem' }}>{data.arsenal_desc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {Array.isArray(data.arsenal_items) && data.arsenal_items.map((item, i) => (
              <motion.div key={i} variants={itemVariants} style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: 'var(--color-orange)', marginBottom: '1rem', fontSize: '1.2rem' }}>{item.category}</h3>
                <p style={{ color: 'var(--color-text)', lineHeight: 1.6 }}>{item.tools}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ExpertisePage;
