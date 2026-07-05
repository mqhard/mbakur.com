import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useTranslation } from 'react-i18next';
import { galleryProjects } from '../data/brandGalleryData';

const EmptySection = ({ number, title, subtitle }) => (
  <section style={{ padding: '15vh 5%', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div style={{ position: 'absolute', right: '5%', top: '10%', fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 700, opacity: 0.02, lineHeight: 0.8, pointerEvents: 'none' }}>{number}</div>
    <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.5, marginBottom: '2rem' }}>
      {number < 10 ? `0${number}` : number}. {title}
    </h2>
    <div style={{ maxWidth: '800px', opacity: 0.6 }}>
      <p style={{ fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
        {subtitle || "Detailed specifications are documented in the complete physical brand guidelines."}
      </p>
    </div>
  </section>
);

const BrandProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = galleryProjects.find(p => p.id === id);
    if (found) setProject(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>Loading...</div>;

  const isEditorial = typeof project.visualIdentity.typography.primary === 'object';
  
  // Theming based on project colors
  const primaryColor = project.visualIdentity.colorSystem[0]?.hex || '#050505';
  const secondaryColor = project.visualIdentity.colorSystem[2]?.hex || '#ffffff';
  
  const bgColor = isEditorial ? primaryColor : '#050505';
  const textColor = isEditorial ? secondaryColor : '#ffffff';
  const sectionBg = isEditorial ? 'rgba(0,0,0,0.1)' : '#0a0a0a';
  const sectionBgDark = isEditorial ? 'rgba(0,0,0,0.3)' : '#111';
  const highlightColor = isEditorial ? project.visualIdentity.colorSystem[1]?.hex || '#ff0000' : '#888';

  const sections = [
    "01. Cover",
    "02. Index",
    "03. About The Brand",
    "04. The Brand (Logo)",
    "05. Color System",
    "06. Typography",
    "07. Visual System",
    "08. Office Applications",
    "09. Digital Applications",
    "10. Prints",
    "11. Signage & Advertising",
    "12. Promotional Materials",
    "13. Final Page"
  ];

  return (
    <div style={{ background: bgColor, minHeight: '100vh', color: textColor, fontFamily: 'var(--font-primary)', transition: 'background 0.5s ease', overflowX: 'hidden' }}>
      
      {/* Navbar Minimal with improved Back Button */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, width: '100%', zIndex: 100, mixBlendMode: 'difference' }}>
        <button 
          onClick={() => navigate('/brand-gallery')}
          style={{ display: 'flex', flexDirection: 'column', alignItems: isRTL ? 'flex-end' : 'flex-start', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'var(--font-secondary)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
            {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            Brand Gallery
          </div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6, paddingLeft: isRTL ? '0' : '30px', paddingRight: isRTL ? '30px' : '0', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
            Explore Our Selected Work
          </div>
        </button>
      </nav>

      {/* 01. Cover */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '20vh', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '2%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>01</div>
        <div style={{ padding: '0 5%', marginBottom: '10vh', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '2rem' }}>01. Cover</h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 300, margin: '0 0 1rem 0', letterSpacing: '-0.02em', lineHeight: 0.9 }}
          >
            {project.brandName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            style={{ fontSize: '1.2rem', opacity: 0.8, fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            Brand Guidelines &bull; V 1.0 &bull; {project.year}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1.5 }}
          style={{ width: '100%', height: '70vh', backgroundImage: `url(${project.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: 'auto', position: 'relative' }}
        >
           <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${bgColor}, transparent)` }} />
        </motion.div>
      </section>

      {/* 02. Index */}
      <section style={{ padding: '15vh 5%', background: sectionBg, position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>02</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '8vh' }}>02. Index</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {sections.map((sec, idx) => (
              <div key={idx} style={{ fontSize: '1.5rem', fontWeight: 300, opacity: 0.8, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', letterSpacing: '1px' }}>
                {sec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. About The Brand */}
      <section style={{ padding: '20vh 5%', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>03</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>03. About The Brand</h2>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15vh' }}>
          
          <div style={{ borderLeft: `2px solid ${highlightColor}`, paddingLeft: '3rem' }}>
            <p style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.4, margin: 0, opacity: 0.9 }}>
              {isRTL ? project.introAr?.statement || project.intro.statement : project.intro.statement}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8vh' }}>
            {['challenge', 'opportunity', 'objective'].map((key) => project.story[key] && (
              <div key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: highlightColor }}>{key}</h3>
                <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 300, lineHeight: 1.6, margin: 0, opacity: 0.8 }}>
                  {project.story[key]}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '5vh' }}>
            {project.strategy.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: highlightColor, margin: '0 0 1rem 0' }}>{item.title}</h3>
                <p style={{ fontSize: '1.3rem', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04. The Brand (Logo) */}
      <section style={{ padding: '20vh 0', background: sectionBgDark, position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>04</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh', padding: '0 5%' }}>04. The Brand (Logo)</h2>
        
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5%', marginBottom: '10vh', background: 'rgba(255,255,255,0.01)' }}>
          <img src={project.visualIdentity.logoScreen} alt="Logo Showcase" style={{ width: '100%', maxWidth: '1000px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }} />
        </div>

        {project.transformation && (
          <div style={{ padding: '0 5%', maxWidth: '1400px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: highlightColor, marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Logo Evolution & Transformation</h3>
            <div style={{ cursor: 'ew-resize', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={project.transformation.beforeImg} alt="Before" style={{ objectFit: 'contain', background: '#050505', padding: '3rem' }} />}
                itemTwo={<ReactCompareSliderImage src={project.transformation.afterImg} alt="After" style={{ objectFit: 'contain', background: '#050505', padding: '3rem' }} />}
                style={{ width: '100%', height: '600px' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* 05. Color System */}
      <section style={{ padding: '20vh 5%', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>05</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>05. Color System</h2>
        
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {project.visualIdentity.colorSystem.map((color, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              >
                <div style={{ width: '100%', height: '350px', backgroundColor: color.hex, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'flex-end', padding: '2rem', boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '2.5rem', margin: 0, color: ['#FAECB9', '#ffffff', '#FFBB4F', '#FFFFF0', '#E0E0E0'].includes(color.hex) ? '#000' : '#fff', fontWeight: 300, letterSpacing: '-1px' }}>{color.name}</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.8 }}>
                  {color.desc && <p style={{ fontSize: '1.2rem', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{color.desc}</p>}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', fontSize: '1rem', fontFamily: 'monospace', opacity: 0.7, padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <span>HEX {color.hex}</span>
                    {color.rgb && <span>RGB {color.rgb}</span>}
                    {color.cmyk && <span>CMYK {color.cmyk}</span>}
                    {color.pantone && <span>PAN {color.pantone}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Typography */}
      <section style={{ padding: '20vh 5%', background: sectionBg, position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>06</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>06. Typography</h2>
        
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20vh' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '20vh' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: highlightColor, marginBottom: '1rem' }}>{isEditorial ? project.visualIdentity.typography.primary.role : 'Primary Typeface'}</h3>
              <h4 style={{ fontSize: '4.5rem', fontWeight: 500, margin: '0 0 2rem 0', letterSpacing: '-1px' }}>{isEditorial ? project.visualIdentity.typography.primary.name : project.visualIdentity.typography.primary}</h4>
              {isEditorial && <p style={{ fontSize: '1.3rem', opacity: 0.8, lineHeight: 1.6, fontWeight: 300 }}>{project.visualIdentity.typography.primary.desc}</p>}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '5rem' }}>
              <div style={{ fontSize: 'clamp(8rem, 20vw, 20rem)', fontWeight: 500, lineHeight: 0.8, letterSpacing: '-0.05em' }}>Aa</div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.5, opacity: 0.9 }}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br/><br/>
                <span style={{ opacity: 0.5 }}>1234567890.,;!@#$%&*()</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '20vh' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: highlightColor, marginBottom: '1rem' }}>{isEditorial ? project.visualIdentity.typography.secondary.role : 'Secondary Typeface'}</h3>
              <h4 style={{ fontSize: '4.5rem', fontWeight: 500, margin: '0 0 2rem 0', fontFamily: 'var(--font-secondary)', letterSpacing: '-1px' }}>{isEditorial ? project.visualIdentity.typography.secondary.name : project.visualIdentity.typography.secondary}</h4>
              {isEditorial && <p style={{ fontSize: '1.3rem', opacity: 0.8, lineHeight: 1.6, fontWeight: 300 }}>{project.visualIdentity.typography.secondary.desc}</p>}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', fontFamily: 'var(--font-secondary)', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '5rem' }}>
              <div style={{ fontSize: 'clamp(8rem, 20vw, 20rem)', fontWeight: 500, lineHeight: 0.8, letterSpacing: '-0.05em' }}>ع ع</div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.5, opacity: 0.9 }}>
                أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي<br/><br/>
                <span style={{ opacity: 0.5 }}>١٢٣٤٥٦٧٨٩٠.,;!@#$%&*()</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 07. Visual System */}
      <section style={{ padding: '20vh 5%', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>07</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>07. Visual System</h2>
        
        {project.geometry && (
          <div style={{ maxWidth: '1600px', margin: '0 auto 10vh auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 300, color: highlightColor, margin: 0 }}>{project.geometry.title}</h3>
              <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.6, opacity: 0.9 }}>
                {project.geometry.desc}
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ width: '100%', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
            >
              <img src={project.geometry.img} alt="Brand Geometry" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
          </div>
        )}

        {project.motion && (
          <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', aspectRatio: '16/9', background: '#000', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            <video 
              src={project.motion.videoUrl} 
              autoPlay loop muted playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            />
          </div>
        )}

        {!project.geometry && !project.motion && (
           <p style={{ fontSize: '1.2rem', opacity: 0.6, fontStyle: 'italic', maxWidth: '800px' }}>
             The visual language, including core patterns, hero icons, and geometric grids, establishes a uniform identity across all touchpoints.
           </p>
        )}
      </section>

      {/* 08. Office Applications */}
      <EmptySection number={8} title="Office Applications" subtitle="Stationery, business cards, folders, and official letterheads are structured securely based on the brand's exact grid system." />

      {/* 09. Digital Applications */}
      <section style={{ padding: '20vh 5%', background: sectionBgDark, position: 'relative' }}>
        <div style={{ position: 'absolute', right: '5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>09</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>09. Digital Applications</h2>
        
        {project.socialMedia ? (
          <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ width: '100%', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
            >
              <img src={project.socialMedia.img} alt="Social Media Mockups" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 300, color: highlightColor, margin: 0 }}>{project.socialMedia.title}</h3>
              <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.6, opacity: 0.9 }}>
                {project.socialMedia.desc}
              </p>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: '1.2rem', opacity: 0.6, fontStyle: 'italic', maxWidth: '800px' }}>
             Digital guidelines covering social media templates, profile avatars, and website UI components are maintained exclusively.
          </p>
        )}
      </section>

      {/* 10. Prints */}
      <section style={{ padding: '20vh 5%', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>10</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '10vh' }}>10. Prints & Applications</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15vh', alignItems: 'center' }}>
          {project.applications && project.applications.length > 0 ? project.applications.map((app, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ width: '100%', maxWidth: '1400px', position: 'relative' }}
            >
              <img src={app.img} alt={app.title} style={{ width: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }} />
              <div style={{ position: 'absolute', bottom: '-4rem', left: '2rem' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 300, opacity: 0.9, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{app.title}</p>
                <div style={{ height: '2px', width: '50px', background: highlightColor, marginTop: '1rem' }} />
              </div>
            </motion.div>
          )) : (
            <p style={{ fontSize: '1.2rem', opacity: 0.6, fontStyle: 'italic', maxWidth: '800px', alignSelf: 'flex-start' }}>
               Comprehensive print applications including brochures, booklets, and roll-ups are crafted with precision.
            </p>
          )}
        </div>
      </section>

      {/* 11. Signage & Advertising */}
      <EmptySection number={11} title="Signage & Advertising" subtitle="Specifications for outdoor billboards, building signages, and interior wayfinding to ensure commanding presence." />

      {/* 12. Promotional Materials */}
      <EmptySection number={12} title="Promotional Materials" subtitle="Design systems applied seamlessly to packaging, corporate gifts, and branded apparel." />

      {/* 13. Final Page */}
      <section style={{ padding: '20vh 5% 10vh 5%', textAlign: 'center', position: 'relative', background: bgColor, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', right: '5%', top: '5%', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 700, opacity: 0.02, lineHeight: 0.8, pointerEvents: 'none' }}>13</div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.5, marginBottom: '10vh' }}>13. The Back Cover</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
            "Thank you for your commitment to applying our brand visual standards."
          </p>
          
          <img src={project.visualIdentity.logoScreen} alt="Logo Silhouette" style={{ width: '150px', opacity: 0.3, filter: 'grayscale(100%) brightness(200%)' }} />

          <div style={{ marginTop: '10vh', paddingTop: '5vh', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '4px', margin: 0, fontWeight: 500 }}>Brand Gallery</h4>
            <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, margin: 0 }}>Explore Our Selected Work</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandProject;
