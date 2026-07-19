# Brand Guide Template (دليل إضافة البراندات)

هذا الملف هو المرجع الأساسي لإضافة مشاريع هوية بصرية (Brand Identity) جديدة وعرض تفاصيلها بشكل احترافي وديناميكي في صفحة `BrandGuideViewer.jsx`.

## 1. تجهيز الصور (Asset Management)
قبل تعديل الكود، تأكد من الالتزام بالقواعد التالية لملفات الصور:
- **مجلد البراند:** أنشئ مجلداً جديداً داخل `public/images/brands/` باسم البراند (مثلاً: `public/images/brands/brandname`).
- **أسماء الملفات:** يجب أن تكون بـ **أحرف إنجليزية صغيرة (Lowercase) وبدون أي مسافات**. استخدم `_` أو `-` بدلاً من المسافات. (مثال: `hero_image.png` وليس `Hero Image.png`).

الصور المطلوبة بشكل أساسي:
- `hero.png`: الغلاف الرئيسي للمشروع.
- `pic_ov.png`: صورة العرض التي تظهر بجانب المقدمة (Introduction).
- `icon_brand.png`: أيقونة الشعار (تكون شفافة ومفرغة).
- `brand_mark_bg.jpg`: خلفية هندسية أو معمارية لصفحة تفاصيل الشعار (الـ Brand Mark).
- صور التطبيقات الأخرى.

---

## 2. تحديث `brandGalleryData.js`
افتح ملف `src/data/brandGalleryData.js` وأضف الكائن (Object) التالي داخل مصفوفة `galleryProjects`:

```javascript
  {
    id: "brand-name-unique",
    brandName: "Brand Name En",
    brandNameAr: "اسم البراند",
    industryAr: "مجال العمل بالعربي",
    typeAr: "هوية بصرية",
    industry: "Industry in English",
    year: "2026",
    type: "Brand Identity",
    heroImage: "/images/brands/brandname/hero.png",
    introImage: "/images/brands/brandname/pic_ov.png",
    
    // المقدمة القصيرة
    intro: {
      statement: "Short intro in English.",
      logoText: "BRANDNAME"
    },
    introAr: { 
      statement: "مقدمة قصيرة بالعربية حول البراند وتوجهه العام." 
    },

    // النظرة الشاملة والقيم
    overviewAr: {
      vision: "رؤية البراند بالعربية.",
      mission: "رسالة البراند بالعربية.",
      promise: "وعد العلامة التجارية بالعربية.",
      personality: "شخصية العلامة (مثال: احترافي، مبتكر، راقي)."
    },
    overviewEn: {
      vision: "Vision in English.",
      mission: "Mission in English.",
      promise: "Brand Promise in English.",
      personality: "Personality in English."
    },

    // تفاصيل ومعاني الشعار
    brandMark: {
      titleAr: "عنوان قسم الشعار (مثال: أيقونة التميز)",
      titleEn: "Logo Section Title",
      descAr: "وصف طويل وعميق لفلسفة تصميم الشعار باللغة العربية.",
      descEn: "Long philosophical description of the logo design.",
      features: [
        { 
          titleAr: "الهندسة", 
          titleEn: "Geometry", 
          descAr: "شرح القاعدة الهندسية.",
          descEn: "Geometric base description.",
          icon: "📐" // يمكن استخدام إيموجي أو أيقونة
        },
        { 
          titleAr: "الأيقونة", 
          titleEn: "The Icon", 
          descAr: "شرح رمزية الشعار.",
          descEn: "Icon symbolism.",
          icon: "✨"
        },
        { 
          titleAr: "الطباعة", 
          titleEn: "Typography", 
          descAr: "تفاصيل رسم الحروف.",
          descEn: "Lettering details.",
          icon: "✍️"
        },
        { 
          titleAr: "المرونة", 
          titleEn: "Versatility", 
          descAr: "مدى ملاءمة الشعار لمختلف الاستخدامات.",
          descEn: "How versatile the logo is.",
          icon: "🔄"
        }
      ]
    },

    // الهوية البصرية (ألوان وخطوط)
    visualIdentity: {
      logoScreen: "/images/brands/brandname/icon_brand.png", 
      colorSystem: [
        { hex: "#000000", name: "Black", rgb: "0, 0, 0", cmyk: "75, 68, 67, 90", pantone: "Black C", desc: "وصف للون ودلالته." },
        { hex: "#FFFFFF", name: "White", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", pantone: "White", desc: "وصف للون." }
      ],
      typography: {
        primary: { name: "Font Name En/Ar", role: "Primary Typeface", weights: ["Light", "Bold"], desc: "وصف لاستخدام الخط الأساسي." },
        secondary: { name: "Inter", role: "Secondary Typeface", weights: ["Regular"], desc: "وصف للخط الثانوي." }
      }
    },

    // صفحة تفاصيل الشعار الخلفية (Geometry/Architecture)
    geometry: {
      img: "/images/brands/brandname/brand_mark_bg.jpg",
      title: "Title Here",
      desc: "Description Here."
    },

    // التطبيقات (يتم توليد الصفحات الخاصة بها تلقائياً)
    applications: [
      { 
        title: "Stationery System", 
        titleAr: "المطبوعات الورقية", 
        img: "/images/brands/brandname/app1.jpg",
        desc: "Description of the application",
        descAr: "وصف للتطبيق باللغة العربية"
      },
      { 
        title: "Digital UI", 
        titleAr: "التطبيقات الرقمية", 
        img: "/images/brands/brandname/app2.jpg"
      }
    ]
  }
```

## 3. التحقق (Verification)
بمجرد إضافة هذه البيانات، سيقوم مكون `BrandGuideViewer.jsx` ببناء الصفحات تلقائياً ورسم شبكة المعلومات الخاصة (Introduction, Brand Mark, Typography, Colors, Applications) بشكل ديناميكي دون الحاجة لكتابة أي كود React جديد للبراند.
