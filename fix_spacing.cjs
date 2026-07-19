const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(directory);

let totalReplaced = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // We are looking for letterSpacing: 'Xpx' or "Xpx"
  // E.g., letterSpacing: '1px' => letterSpacing: 'var(--tracking-tight)'
  // E.g., letterSpacing: '2px' => letterSpacing: 'var(--tracking-wide)'
  // E.g., letterSpacing: '3px' => letterSpacing: 'var(--tracking-wider)'
  // E.g., letterSpacing: '4px' => letterSpacing: 'var(--tracking-widest)'
  // E.g., letterSpacing: '5px' => letterSpacing: 'var(--tracking-max)'
  // E.g., letterSpacing: '8px' => letterSpacing: 'var(--tracking-max)'

  content = content.replace(/letterSpacing:\s*['"]0\.5px['"]/g, "letterSpacing: 'var(--tracking-tighter)'");
  content = content.replace(/letterSpacing:\s*['"]1px['"]/g, "letterSpacing: 'var(--tracking-tight)'");
  content = content.replace(/letterSpacing:\s*['"]2px['"]/g, "letterSpacing: 'var(--tracking-wide)'");
  content = content.replace(/letterSpacing:\s*['"]3px['"]/g, "letterSpacing: 'var(--tracking-wider)'");
  content = content.replace(/letterSpacing:\s*['"]4px['"]/g, "letterSpacing: 'var(--tracking-widest)'");
  content = content.replace(/letterSpacing:\s*['"]5px['"]/g, "letterSpacing: 'var(--tracking-max)'");
  content = content.replace(/letterSpacing:\s*['"]6px['"]/g, "letterSpacing: 'var(--tracking-max)'");
  content = content.replace(/letterSpacing:\s*['"]8px['"]/g, "letterSpacing: 'var(--tracking-max)'");
  content = content.replace(/letterSpacing:\s*['"]10px['"]/g, "letterSpacing: 'var(--tracking-max)'");

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated letterSpacing in ${file}`);
    totalReplaced++;
  }
});

console.log(`Done. Updated ${totalReplaced} files.`);
