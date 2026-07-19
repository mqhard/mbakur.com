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
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Replace {isRTL ? <ArrowRight ... /> : <ArrowLeft ... />} with <ArrowLeft ... />
  // Replace {isRTL ? <ArrowLeft ... /> : <ArrowRight ... />} with <ArrowRight ... />
  // Replace {isRtl ? <ArrowLeft ... /> : <ArrowRight ... />} with <ArrowRight ... />

  content = content.replace(/\{isRTL \? <ArrowRight size=\{20\} \/> : <ArrowLeft size=\{20\} \/>\}/g, '<ArrowLeft size={20} />');
  content = content.replace(/\{isRTL \? <ArrowRight \/> : <ArrowLeft \/>\}/g, '<ArrowLeft />');
  content = content.replace(/\{isRTL \? <ArrowLeft \/> : <ArrowRight \/>\}/g, '<ArrowRight />');
  content = content.replace(/\{isRTL \? <ArrowLeft size=\{24\} \/> : <ArrowRight size=\{24\} \/>\}/g, '<ArrowRight size={24} />');
  content = content.replace(/\{isRtl \? <ArrowLeft size=\{20\} \/> : <ArrowRight size=\{20\} \/>\}/g, '<ArrowRight size={20} />');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    count++;
    console.log(`Fixed arrows in: ${file}`);
  }
});

console.log(`Updated arrows in ${count} files.`);
