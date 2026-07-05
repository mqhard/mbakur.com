const fs = require('fs');

let code = fs.readFileSync('src/pages/ExpertisePage.jsx', 'utf8');

// Modify definition to accept isEmbedded prop
code = code.replace(/const ExpertisePage = \(\) => \{/, 'const ExpertisePage = ({ isEmbedded = false }) => {');

// Modify root div background
code = code.replace(/<div style=\{\{ background: 'var\(--color-bg\)', minHeight: '100vh', color: 'var\(--color-text\)', paddingBottom: '100px' \}\}>/, 
  `<div style={{ background: isEmbedded ? 'transparent' : 'var(--color-bg)', minHeight: isEmbedded ? 'auto' : '100vh', color: 'var(--color-text)', paddingBottom: '100px', paddingTop: isEmbedded ? '5rem' : '0' }}>`);

// Hide nav
code = code.replace(/<nav style=\{\{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba\(10,10,10,0\.8\)', backdropFilter: 'blur\(10px\)', zIndex: 100 \}\}>/, 
  `{!isEmbedded && (<nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>`);

code = code.replace(/<\/nav>/, `</nav>)}`);

fs.writeFileSync('src/pages/ExpertisePage.jsx', code);
console.log('patched ExpertisePage');
