const fs = require('fs');

let content = fs.readFileSync('src/data/brandGalleryData.js', 'utf8');

const regex = /transformation:\s*\{\s*beforeImg:\s*"[^"]+",\s*afterImg:\s*"[^"]+"\s*\}/;
content = content.replace(regex, `transformation: {
      beforeImg: "/images/logos/azm_logo.png",
      afterImg: "/images/logos/al_fursan.png"
    }`);

fs.writeFileSync('src/data/brandGalleryData.js', content);
console.log("Transformation updated!");
