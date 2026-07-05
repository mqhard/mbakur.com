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

// Conditionally render the rest of the content after the hero
code = code.replace(/\{\/\* Stats Row \*\/\}/, `{!isEmbedded && (<>\n        {/* Stats Row */}`);
code = code.replace(/\{\/\* Technological Arsenal \*\/\}/, `{/* Technological Arsenal */}`);

// At the end, before the closing </div> of container or root
// Actually, let's find the closing tag for the conditional block
// The easiest way is to split by </motion.header> and wrap the rest in {!isEmbedded && ( <> ... </> )}

let parts = code.split(/<\/motion\.header>/);
if (parts.length === 2) {
    let secondPart = parts[1];
    // We need to insert {!isEmbedded && ( <> at the start of secondPart
    // and </> )} before the last two </div>
    
    let lastDivsIndex = secondPart.lastIndexOf('</div>\n    </div>');
    if(lastDivsIndex !== -1) {
        let contentBefore = secondPart.substring(0, lastDivsIndex);
        let contentAfter = secondPart.substring(lastDivsIndex);
        parts[1] = `\n        {!isEmbedded && (\n          <>\n` + contentBefore + `\n          </>\n        )}\n` + contentAfter;
        code = parts.join('</motion.header>');
    }
}

fs.writeFileSync('src/pages/ExpertisePage.jsx', code);
console.log('patched ExpertisePage with isEmbedded wrapper');
