import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { galleryProjects } from '../data/brandGalleryData';

// --- Page-level components ---

const PageLayout = ({ children, project }) => {
    const isEditorial = project && typeof project.visualIdentity.typography.primary === 'object';
    const bgColor = isEditorial ? project.visualIdentity.colorSystem[0]?.hex || '#050505' : '#050505';
    const textColor = isEditorial ? project.visualIdentity.colorSystem[2]?.hex || '#ffffff' : '#ffffff';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                background: bgColor,
                color: textColor,
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'var(--font-primary)',
                overflow: 'hidden'
            }}
        >
            {children}
        </motion.div>
    );
};

const CoverPage = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '20vh', position: 'relative' }}>
        <div style={{ padding: '0 5%', position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.6, marginBottom: '2rem' }}>01. Cover</h2>
            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 300, margin: '0 0 1rem 0', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
                {data.brandName}
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase' }}>
                Brand Guidelines &bull; V 1.0 &bull; {data.year}
            </p>
        </div>
        <div style={{ width: '100%', height: '70vh', backgroundImage: `url(${data.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: 'auto', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${data.visualIdentity.colorSystem[0]?.hex || '#050505'}, transparent)` }} />
        </div>
    </div>
);

const SectionDividerPage = ({ data }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', background: 'rgba(0,0,0,0.1)' }}>
        <div style={{ position: 'absolute', fontSize: 'clamp(15rem, 30vw, 30rem)', fontWeight: 700, opacity: 0.05, lineHeight: 0.8, pointerEvents: 'none' }}>{data.number}</div>
        <div style={{ textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, margin: 0 }}>{data.title}</h2>
            <p style={{ fontSize: '1.5rem', opacity: 0.7, letterSpacing: '2px', textTransform: 'uppercase' }}>{data.titleEn}</p>
        </div>
    </div>
);

const ColorPage = ({ data }) => (
    <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, backgroundColor: data.color.hex, display: 'flex', alignItems: 'flex-end', padding: '3rem', position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, color: ['#FAECB9', '#ffffff', '#FFBB4F', '#FFFFF0', '#E0E0E0', '#E4D6BA'].includes(data.color.hex) ? '#000' : '#fff', fontWeight: 300 }}>
                {data.color.name}
            </h2>
             <div style={{ position: 'absolute', top: '3rem', right: '3rem', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'monospace', opacity: 0.5, color: ['#FAECB9', '#ffffff', '#FFBB4F', '#FFFFF0', '#E0E0E0', '#E4D6BA'].includes(data.color.hex) ? '#000' : '#fff' }}>
                {data.sectionTitle}
            </div>
        </div>
        <div style={{ flex: 1, padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '500px' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, margin: 0, opacity: 0.8, fontWeight: 300 }}>{data.color.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.1rem', fontFamily: 'monospace', opacity: 0.7, padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <span>HEX {data.color.hex}</span>
                    {data.color.rgb && <span>RGB {data.color.rgb}</span>}
                    {data.color.cmyk && <span>CMYK {data.color.cmyk}</span>}
                    {data.color.pantone && <span>PAN {data.color.pantone}</span>}
                </div>
            </div>
        </div>
    </div>
);

const LogoPage = ({ data }) => (
     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '2rem' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.5 }}>{data.subtitle}</h2>
        <div style={{ width: '80%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={data.logoUrl} alt={data.subtitle} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }}/>
        </div>
    </div>
);

const ImageWithTextPage = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '5rem', gap: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>{data.title}</h2>
        <div style={{ width: '100%', maxWidth: '1200px', height: '60vh', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)'}}>
            <img src={data.img} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.8, maxWidth: '800px', fontWeight: 300 }}>
            {data.desc}
        </p>
    </div>
);

const PlaceholderPage = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.5, marginBottom: '2rem' }}>
            {data.number ? `${data.number}. ${data.title}` : data.title}
        </h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.6, margin: 0, fontStyle: 'italic', maxWidth: '600px', opacity: 0.6 }}>
            {data.subtitle || "This section is defined in the brand architecture. Detailed content will be populated based on the full brand guide document."}
        </p>
    </div>
);


// --- Data Mapping ---
const createProjectPages = (project) => {
    if (!project) return [];
    
    const pages = [];

    // 01. Cover
    pages.push({ type: 'COVER', data: project });
    
    // 02. Index
    pages.push({ type: 'PLACEHOLDER', data: { number: '02', title: 'Index' } });
    
    // 03. About
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '03', title: 'About The Brand', titleEn: 'The Philosophy' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Introduction', subtitle: project.intro?.statement } });
    if(project.story) pages.push({ type: 'PLACEHOLDER', data: { title: 'Brand Story', subtitle: `Challenge: ${project.story.challenge} Opportunity: ${project.story.opportunity}` } });

    // 04. Logo
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '04', title: 'The Brand Mark', titleEn: 'The Logo' } });
    if (project.visualIdentity?.logoScreen) pages.push({ type: 'LOGO', data: { logoUrl: project.visualIdentity.logoScreen, subtitle: 'Main Logo' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Safe Area' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Minimum Size' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Incorrect Usage' } });

    // 05. Color System
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '05', title: 'Color System', titleEn: 'The Palette' } });
    project.visualIdentity?.colorSystem?.forEach(color => {
        pages.push({ type: 'COLOR', data: { color, sectionTitle: 'Color System' } });
    });

    // 06. Typography
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '06', title: 'Typography', titleEn: 'The Fonts' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Primary Typeface', subtitle: typeof project.visualIdentity?.typography?.primary === 'object' ? project.visualIdentity.typography.primary.name : project.visualIdentity?.typography?.primary } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Secondary Typeface', subtitle: typeof project.visualIdentity?.typography?.secondary === 'object' ? project.visualIdentity.typography.secondary.name : project.visualIdentity?.typography?.secondary } });

    // 07. Visual System
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '07', title: 'Visual System', titleEn: 'The Geometry' } });
    if(project.geometry) pages.push({ type: 'IMAGE_TEXT', data: project.geometry });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Iconography' } });
    pages.push({ type: 'PLACEHOLDER', data: { title: 'Patterns' } });

    // 08. Applications
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '08', title: 'Applications', titleEn: 'The Applications' } });
    if(project.socialMedia) pages.push({ type: 'IMAGE_TEXT', data: project.socialMedia });
    project.applications?.forEach(app => {
         pages.push({ type: 'IMAGE_TEXT', data: app });
    });

    // Final Sections
    pages.push({ type: 'PLACEHOLDER', data: { number: '12', title: 'Promotional Materials' } });
    pages.push({ type: 'SECTION_DIVIDER', data: { number: '13', title: 'Thank You', titleEn: 'The End' } });

    return pages;
};


// --- Main Viewer Component ---
const BrandGuideViewer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const [project, setProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const found = galleryProjects.find(p => p.id === id);
        if (found) {
            setProject(found);
        }
        window.scrollTo(0, 0);
    }, [id]);

    const pages = useMemo(() => createProjectPages(project), [project]);

    const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));
    const handlePrev = () => setCurrentPage(prev => Math.max(0, prev - 1));
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') navigate('/brand-gallery');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pages]);

    if (!project) {
        return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>Loading...</div>;
    }

    const CurrentPageComponent = () => {
        if (!pages || pages.length === 0) return <PlaceholderPage data={{ title: 'Loading...'}} />;
        const pageData = pages[currentPage];
        switch (pageData.type) {
            case 'COVER': return <CoverPage data={pageData.data} />;
            case 'SECTION_DIVIDER': return <SectionDividerPage data={pageData.data} />;
            case 'COLOR': return <ColorPage data={pageData.data} />;
            case 'LOGO': return <LogoPage data={pageData.data} />;
            case 'IMAGE_TEXT': return <ImageWithTextPage data={pageData.data} />;
            case 'PLACEHOLDER':
            default:
                return <PlaceholderPage data={pageData.data} />;
        }
    };

    return (
        <PageLayout project={project}>
            <AnimatePresence mode="wait">
                <motion.div key={currentPage} style={{flexGrow: 1, position: 'relative'}}>
                    <CurrentPageComponent />
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div style={{ position: 'fixed', bottom: '5vh', right: '5vw', zIndex: 100, display: 'flex', gap: '1rem' }}>
                <button onClick={handlePrev} disabled={currentPage === 0} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', opacity: currentPage === 0 ? 0.3 : 1 }}><ArrowLeft /></button>
                <button onClick={handleNext} disabled={currentPage === pages.length - 1} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', opacity: currentPage === pages.length - 1 ? 0.3 : 1 }}><ArrowRight /></button>
            </div>
             {/* Page Number */}
             <div style={{ position: 'fixed', bottom: '5vh', left: '5vw', zIndex: 100, color: 'white', fontFamily: 'monospace', fontSize: '1.2rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                {currentPage + 1} / {pages.length}
            </div>
             {/* Back Button */}
            <button 
                onClick={() => navigate('/brand-gallery')}
                style={{ position: 'fixed', top: '5vh', right: '5vw', zIndex: 100, display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', padding: '1rem', borderRadius: '50%' }}
                >
                <X size={20} />
            </button>
        </PageLayout>
    );
};

export default BrandGuideViewer;
