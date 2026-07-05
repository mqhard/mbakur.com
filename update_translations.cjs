const fs = require('fs');

const i18nPath = './src/i18n.js';
let content = fs.readFileSync(i18nPath, 'utf8');

// Add English translations for brand_gallery
const enGallery = `
      "brand_gallery": {
        "title": "Brand Gallery",
        "subtitle": "Explore Our Selected Work",
        "specifications": "Brand Specifications",
        "primary_typeface": "Primary Typeface",
        "secondary_typeface": "Secondary Typeface",
        "industry_year": "Industry / Year",
        "identity_elements": "Identity Elements",
        "color_system": "Color System",
        "brand_essence": "Brand Essence",
        "explore_archive": "Explore The Archive",
        "read_case_study": "Read Case Study",
        "back": "Back"
      },`;
content = content.replace(/("hero": \{)/, enGallery + '\n      $1');

// Add Arabic translations for brand_gallery
const arGallery = `
      "brand_gallery": {
        "title": "معرض العلامات التجارية",
        "subtitle": "استكشف أعمالنا المختارة",
        "specifications": "مواصفات العلامة",
        "primary_typeface": "الخط الأساسي",
        "secondary_typeface": "الخط الثانوي",
        "industry_year": "القطاع / السنة",
        "identity_elements": "عناصر الهوية",
        "color_system": "نظام الألوان",
        "brand_essence": "جوهر العلامة",
        "explore_archive": "استكشف الأرشيف",
        "read_case_study": "اقرأ دراسة الحالة",
        "back": "رجوع"
      },`;
content = content.replace(/(ar: \{\n    translation: \{\n)(      "nav": \{)/, `$1${arGallery}\n$2`);

fs.writeFileSync(i18nPath, content);
console.log('Translations updated.');
