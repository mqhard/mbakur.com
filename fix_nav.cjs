const fs = require('fs');

const filesToFix = [
  'src/pages/BrandProject.jsx',
  'src/pages/CinematicStudio.jsx',
  'src/pages/ExpertisePage.jsx',
  'src/pages/ProudProjects.jsx',
  'src/pages/BrandIdentity.jsx'
];

filesToFix.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  // We want to target the nav that wraps the back button. 
  // It usually looks like <nav style={{ padding: '2rem 5%', display: 'flex'
  // Or <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between'
  content = content.replace(/<nav style=\{\{\s*padding:\s*['"]2rem 5%['"],\s*display:\s*['"]flex['"]/g, '<nav dir="ltr" style={{ padding: \'2rem 5%\', display: \'flex\'');
  
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Fixed ' + file);
});
