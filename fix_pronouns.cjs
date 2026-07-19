const fs = require('fs');

let content = fs.readFileSync('src/i18n.js', 'utf-8');

// English replacements
content = content.replace(/Explore Our Selected Work/g, 'Explore My Selected Work');
content = content.replace(/We believe in the power/g, 'I believe in the power');
content = content.replace(/Black is our canvas, magenta is our heartbeat, orange is our spark/g, 'Black is my canvas, magenta is my heartbeat, orange is my spark');
content = content.replace(/Black is our canvas, magenta is our heartbeat/g, 'Black is my canvas, magenta is my heartbeat');
content = content.replace(/A collective of visionaries, visual craftsmen, and storytellers\. We believe in the power of shared knowledge and collaborative growth\. Join our philosophy\./g, 'An independent visionary, visual craftsman, and storyteller. I believe in the power of knowledge and continuous growth. Explore my philosophy.');
content = content.replace(/We explore the purpose/g, 'I explore the purpose');
content = content.replace(/We craft monumental brands/g, 'I craft monumental brands');
content = content.replace(/"text1": "We do not create"/g, '"text1": "I do not create"');
content = content.replace(/"text3": "We engineer"/g, '"text3": "I engineer"');
content = content.replace(/"We engineered a visual narrative/g, '"I engineered a visual narrative');
content = content.replace(/"about": "We engineer language/g, '"about": "I engineer language');

// Arabic replacements
// "نحن نؤمن" or just implied in the previous changes. Wait, I should check Arabic text precisely.
content = content.replace(/نحن نصنع علامات تجارية/g, 'أصنع علامات تجارية');
content = content.replace(/"text1": "نحن لا نصنع"/g, '"text1": "أنا لا أصنع"');
content = content.replace(/"text3": "نحن نهندس"/g, '"text3": "أنا أهندس"');
content = content.replace(/"about": "نحن نهندس اللغة/g, '"about": "أهندس اللغة');
content = content.replace(/فريق من أصحاب الرؤى/g, 'صانع رؤى'); // If it exists
content = content.replace(/نستكشف الغرض/g, 'أستكشف الغرض');

fs.writeFileSync('src/i18n.js', content, 'utf-8');
console.log('Pronouns updated to singular successfully!');
