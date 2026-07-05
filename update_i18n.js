const fs = require('fs');

const data = fs.readFileSync('./src/i18n.js', 'utf8');

// We'll just replace the whole file since we need to insert objects into the deeply nested structures.
// Wait, actually I can just use a regex or string replacement if I am careful.

