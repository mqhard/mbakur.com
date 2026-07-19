const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Update CSS Variables
cssContent = cssContent.replace(/--color-bg: #030303;/g, '--color-bg: #070707;');
cssContent = cssContent.replace(/--color-text: #f5f5f5;/g, '--color-text: #EAEAEA;');
cssContent = cssContent.replace(/--color-magenta: #ff007f;/g, '--color-accent: #C5A059;');
cssContent = cssContent.replace(/--color-orange: #ff4500;/g, '--color-accent-dark: #8C7335;');
cssContent = cssContent.replace(/--color-cyan: #00ffff;/g, '--color-accent-light: #E8D3A2;');
cssContent = cssContent.replace(/--color-gray: #1a1a1a;/g, '--color-gray: #151515;');
cssContent = cssContent.replace(/--color-gray-light: #333333;/g, '--color-gray-light: #2A2A2A;');
cssContent = cssContent.replace(/--color-glass: rgba\(255, 255, 255, 0.03\);/g, '--color-glass: rgba(255, 255, 255, 0.02);');
cssContent = cssContent.replace(/--color-glass-border: rgba\(255, 255, 255, 0.1\);/g, '--color-glass-border: rgba(255, 255, 255, 0.06);');
cssContent = cssContent.replace(/--color-neon-glow: 0 0 10px rgba\(255, 0, 127, 0.5\), 0 0 20px rgba\(255, 69, 0, 0.3\);/g, '--color-neon-glow: 0 10px 30px rgba(0, 0, 0, 0.5);');

// Update cinematic theme overrides
cssContent = cssContent.replace(/--color-bg: #030303;/g, '--color-bg: #050505;');
cssContent = cssContent.replace(/--color-amber: #ff4500;/g, '--color-amber: #C5A059;');

// Replace utility classes
cssContent = cssContent.replace(/\.text-magenta/g, '.text-accent');
cssContent = cssContent.replace(/\.text-orange/g, '.text-accent-dark');
cssContent = cssContent.replace(/var\(--color-magenta\)/g, 'var(--color-accent)');
cssContent = cssContent.replace(/var\(--color-orange\)/g, 'var(--color-accent-dark)');

// Replace btn-solid-magenta with btn-luxury
cssContent = cssContent.replace(/\.btn-solid-magenta \{([\s\S]*?)\}/g, `.btn-luxury {
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2.5rem;
  font-size: 1rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  backdrop-filter: blur(5px);
  transition: all 0.4s ease;
}`);

cssContent = cssContent.replace(/\.btn-solid-magenta:hover \{([\s\S]*?)\}/g, `.btn-luxury:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`);

fs.writeFileSync(cssPath, cssContent, 'utf8');

// Now walk through all .jsx files and replace
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/var\(--color-magenta\)/g, 'var(--color-accent)');
  content = content.replace(/var\(--color-orange\)/g, 'var(--color-accent-dark)');
  content = content.replace(/text-magenta/g, 'text-accent');
  content = content.replace(/btn-solid-magenta/g, 'btn-luxury');
  
  // Hardcoded colors
  content = content.replace(/#ff007f/g, '#C5A059');
  content = content.replace(/#ff4500/g, '#8C7335');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log('Updated: ' + file);
  }
});

console.log(`Identity update complete across ${count} JS/JSX files and index.css`);
