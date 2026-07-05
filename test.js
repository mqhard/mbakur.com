const fs = require('fs');
console.log(fs.readFileSync('src/pages/BrandGallery.jsx', 'utf8').split('\n').filter((_, i) => i > 85 && i < 125).join('\n'));
