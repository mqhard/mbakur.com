const fs = require('fs');

let code = fs.readFileSync('src/pages/ExpertisePage.jsx', 'utf8');

// 1. Add isEmbedded prop
code = code.replace(/const ExpertisePage = \(\) => \{/, 'const ExpertisePage = ({ isEmbedded = false }) => {');

// 2. Adjust root div
code = code.replace(/<div style=\{\{ background: 'var\(--color-bg\)', minHeight: '100vh', color: 'var\(--color-text\)', paddingBottom: '100px' \}\}>/, 
  `<div style={{ background: isEmbedded ? 'transparent' : 'var(--color-bg)', minHeight: isEmbedded ? 'auto' : '100vh', color: 'var(--color-text)', paddingBottom: isEmbedded ? '0' : '100px', paddingTop: isEmbedded ? '5rem' : '0' }}>`);

// 3. Hide nav
code = code.replace(/<nav style=\{\{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba\(10,10,10,0\.8\)', backdropFilter: 'blur\(10px\)', zIndex: 100 \}\}>/, 
  `{!isEmbedded && (<nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>`);
code = code.replace(/<\/nav>/, `</nav>)}`);

// 4. Add "Brand Universe" button inside the Hero (Wait, it's missing in the Git version! Wait, did it have it?)
// Let's check: the git version I just restored does NOT have the Brand Universe button in the Hero.
// I need to add it back if it's missing. Let's see if the hero has the button.
// The user said: "اترك هاذي فقط واحذ الباقي" (Brand Universe).
// It means I need to add the Brand Universe button inside the hero.
