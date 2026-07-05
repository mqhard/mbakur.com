const fs = require('fs');

let content = fs.readFileSync('src/data/brandGalleryData.js', 'utf8');

const arTranslations = {
  "azm-martial-arts": {
    brandNameAr: "الفرسان",
    industryAr: "فنون قتالية",
    typeAr: "هوية بصرية",
    introAr: { statement: "هوية قوية متجذرة ثقافياً لعلامة تجارية سعودية للفنون القتالية. أكثر من مجرد قوة، إنها فن." }
  },
  "seve-perfume": {
    brandNameAr: "سيف",
    industryAr: "عطور فاخرة",
    typeAr: "هوية بصرية",
    introAr: { statement: "هوية راقية لعلامة عطور باريسية فاخرة، تمزج بين الأناقة الخالدة والبساطة الحديثة." }
  },
  "apex-fitness": {
    brandNameAr: "أبيكس",
    industryAr: "نادي لياقة فاخر",
    typeAr: "نظام علامة تجارية",
    introAr: { statement: "هوية ديناميكية عالية الطاقة لنادي لياقة بدنية حصري مصمم للأداء العالي." }
  },
  "chronos-culture": {
    brandNameAr: "كرونوس",
    industryAr: "مؤسسة ثقافية",
    typeAr: "هوية بصرية",
    introAr: { statement: "هوية فكرية خالدة لمتحف حديث يسد الفجوة بين التاريخ والمستقبل." }
  },
  "nexus-ai": {
    brandNameAr: "نيكسوس",
    industryAr: "ذكاء اصطناعي",
    typeAr: "هوية رقمية",
    introAr: { statement: "هوية متطورة وتقنية لشركة ذكاء اصطناعي من الجيل القادم." }
  },
  "marmont-hotel": {
    brandNameAr: "ذا مارمونت",
    industryAr: "فندق بوتيك",
    typeAr: "تصميم تجربة",
    introAr: { statement: "هوية راقية وهادئة لفندق بوتيك فاخر، تجسد جوهر الملاذ الخاص." }
  },
  "altius-realestate": {
    brandNameAr: "ألتيوس",
    industryAr: "عقارات",
    typeAr: "هوية بصرية",
    introAr: { statement: "هوية معمارية قوية لعلامة تجارية راقية في مجال التطوير العقاري تشكل أفق المدينة." }
  }
};

for (const [id, t] of Object.entries(arTranslations)) {
  const regex = new RegExp(`(id:\\s*"${id}",\\s*\\n\\s*brandName:\\s*"[^"]+",\\s*\\n)`);
  content = content.replace(regex, `$1    brandNameAr: "${t.brandNameAr}",\n    industryAr: "${t.industryAr}",\n    typeAr: "${t.typeAr}",\n`);
  
  const introRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?intro:\\s*\\{\\s*\\n\\s*statement:\\s*"[^"]+",\\s*\\n\\s*logoText:\\s*"[^"]+"\\s*\\n\\s*\\},\\s*\\n)`);
  content = content.replace(introRegex, `$1    introAr: { statement: "${t.introAr.statement}" },\n`);
}

fs.writeFileSync('src/data/brandGalleryData.js', content);
console.log('Arabic data added to brandGalleryData.js');
