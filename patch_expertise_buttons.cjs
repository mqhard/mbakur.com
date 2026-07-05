const fs = require('fs');

let code = fs.readFileSync('src/pages/ExpertisePage.jsx', 'utf8');

const oldDiv = `<motion.div style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
            <button
              onClick={() => navigate('/brand-identity')}
              style={{
                background: 'rgba(255,184,0,0.1)',
                border: '1px solid var(--color-orange)',
                color: 'var(--color-orange)',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <PenTool size={18} />
              {t('brandIdentity.hero.title2', 'Brand Universe')}
            </button>
          </motion.div>`;

const newDiv = `<motion.div style={{ position: 'relative', zIndex: 1, marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/brand-identity')}
              style={{
                background: 'rgba(255,184,0,0.1)',
                border: '1px solid var(--color-orange)',
                color: 'var(--color-orange)',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <PenTool size={18} />
              {t('brandIdentity.hero.title2', 'Brand Universe')}
            </button>
            <button
              onClick={() => navigate('/creative-direction')}
              style={{
                background: 'rgba(255,0,127,0.1)',
                border: '1px solid var(--color-magenta)',
                color: 'var(--color-magenta)',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <MonitorPlay size={18} />
              {t('hero.btn_explore', 'Creative Direction')}
            </button>
            <button
              onClick={() => navigate('/legacy')}
              style={{
                background: 'rgba(0,255,255,0.1)',
                border: '1px solid #00ffff',
                color: '#00ffff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <Briefcase size={18} />
              {t('hero.btn_work', 'Proud Projects')}
            </button>
          </motion.div>`;

code = code.replace(oldDiv, newDiv);
fs.writeFileSync('src/pages/ExpertisePage.jsx', code);
console.log('patched expertise buttons');
