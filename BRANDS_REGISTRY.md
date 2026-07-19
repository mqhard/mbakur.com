# 📚 BRANDS REGISTRY — مرجع البراندات الشامل
### Visual Craftsmanship — Brand Identity Projects

> **الغرض**: هذا الملف هو المرجع الرسمي لكل البراندات الحالية والمستقبلية.  
> يُستخدم لتتبع حالة الأصول (Assets) وما يحتاج تنفيذ.  
> **المسار البرمجي**: `/src/data/brandGalleryData.js`  
> **مسار الشعارات**: `/public/images/logos/`  
> **مسار الصور**: `/public/images/brands/[brand-id]/`

---

## 🗂 هيكل بيانات البراند القياسي (Template)

```js
{
  id: "brand-id",                    // مُعرّف فريد — يُستخدم في URL
  brandName: "BRAND",                // الاسم اللاتيني
  brandNameAr: "اسم البراند",         // الاسم العربي
  industry: "Industry",              // القطاع (إنجليزي)
  industryAr: "القطاع",              // القطاع (عربي)
  type: "Brand Identity",            // نوع العمل (إنجليزي)
  typeAr: "هوية بصرية",              // نوع العمل (عربي)
  year: "2026",
  
  cardBackground: "CSS gradient",    // خلفية بطاقة المعرض
  heroImage: "URL",                  // صورة الغلاف (2000px عرض)
  
  intro:   { statement: "EN", logoText: "BRAND" },
  introAr: { statement: "AR" },
  
  story:   { challenge, opportunity, objective },
  storyAr: { challenge, opportunity, objective },
  
  strategy:   [ { title, text } × 5 ],
  strategyAr: [ { title, text } × 5 ],
  
  visualIdentity: {
    logoScreen: "/images/logos/brand.svg",
    logoFiles: {
      svg:        "/images/logos/brand.svg",
      png_dark:   "/images/logos/brand_dark.png",
      png_light:  "/images/logos/brand_light.png",
      icon:       "/images/logos/brand_icon.svg",
      favicon:    "/images/logos/brand_favicon.png"
    },
    colorSystem: [
      { hex, name, rgb, cmyk, hsb, pantone, desc }
    ],
    typography: {
      primary:   { name, role, weights: [], desc },
      secondary: { name, role, weights: [], desc }
    }
  },
  
  motion:      { videoUrl: "URL" },
  geometry:    { img, title, titleAr, desc, descAr },
  socialMedia: { img, title, titleAr, desc, descAr },
  applications: [ { title, titleAr, img } ],
  
  transformation: {
    beforeImg: "URL",                // اختياري (مقارنة قبل/بعد)
    afterImg: "/images/logos/brand.svg"
  }
}
```

---

## 📦 البراندات الحالية

---

### 1. 🏛 SAMT — سَمْت
**القطاع**: Architecture & Interior | **السنة**: 2026  
**ID**: `samt-architecture`  
**URL**: `/brand-project/samt-architecture`  
**الـ Card Background المقترح**: `linear-gradient(135deg, #1A1C1D 0%, #2a1f1a 100%)`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX | Pantone | RGB | CMYK |
|---|---|---|---|---|---|
| ⬛ | Charcoal Black | `#1A1C1D` | 433 C | 26, 28, 29 | 70, 60, 60, 80 |
| 🟫 | Terracotta | `#C6725B` | 7601 C | 198, 114, 91 | 15, 60, 65, 5 |
| 🟨 | Warm Sand | `#E4D6BA` | 7500 C | 228, 214, 186 | 10, 15, 30, 0 |

| الخط | الدور | الأوزان |
|---|---|---|
| **29LT Bukra** | Primary — Arabic/Latin | Light · Regular · Bold |
| **Inter** | Secondary — Body Text | Regular · Medium |

#### 📁 حالة الأصول

| # | الأصل | الملف المطلوب | الحالة |
|---|---|---|---|
| 1 | الشعار الرئيسي (SVG) | `/images/logos/samt.svg` | ❌ مطلوب |
| 2 | الشعار — نسخة داكنة (PNG) | `/images/logos/samt_dark.png` | ❌ مطلوب |
| 3 | الشعار — نسخة فاتحة (PNG) | `/images/logos/samt_light.png` | ❌ مطلوب |
| 4 | أيقونة الشعار فقط | `/images/logos/samt_icon.svg` | ❌ مطلوب |
| 5 | Favicon (32×32) | `/images/logos/samt_favicon.png` | ❌ مطلوب |
| 6 | صورة الغلاف Hero | `/images/brands/samt/hero.jpg` | ⚠️ Unsplash مؤقت |
| 7 | صورة Grid هندسي | `/images/brands/samt/geometry.jpg` | ⚠️ Unsplash مؤقت |
| 8 | صورة حضور رقمي | `/images/brands/samt/social.jpg` | ⚠️ Unsplash مؤقت |
| 9 | تطبيق: قرطاسية | `/images/brands/samt/stationery.jpg` | ⚠️ Unsplash مؤقت |
| 10 | تطبيق: كتالوج هوية | `/images/brands/samt/lookbook.jpg` | ⚠️ Unsplash مؤقت |

#### 🔲 قائمة الأيقونات المطلوبة (SAMT Icon Set)

| # | الأيقونة | الوصف | الحجم | الأولوية |
|---|---|---|---|---|
| A | **Wordmark عربي** | "سَمْت" طباعي minimalist بـ 29LT Bukra | SVG | 🔴 |
| B | **Wordmark لاتيني** | "SAMT" بحروف هندسية خفيفة | SVG | 🔴 |
| C | **Monogram** | الحرف "س" أو رمز Grid هندسي | SVG | 🔴 |
| D | **Brand Seal** | ختم دائري "SAMT • Architecture • 2026" | SVG | 🟡 |
| E | **Pattern هندسي** | نمط Grid 3:4 بخطوط Terracotta رفيعة | SVG tile | 🟡 |
| F | **Divider / Rule** | خط فاصل برأس هندسي بلون Terracotta | SVG | 🟡 |
| G | **نسخة بيضاء كاملة** | للاستخدام على الخلفيات الداكنة | SVG | 🟡 |
| H | **نسخة أحادية** | للطباعة بحبر واحد / ختم | SVG | 🟢 |
| I-1 | **أيقونة: مبنى** | Architecture Icon | 24px SVG | 🟢 |
| I-2 | **أيقونة: خطة طابق** | Floor Plan Icon | 24px SVG | 🟢 |
| I-3 | **أيقونة: مسطرة تصميم** | Design Ruler Icon | 24px SVG | 🟢 |
| I-4 | **أيقونة: قلم تصميم** | Design Pen Icon | 24px SVG | 🟢 |
| J-1 | **أيقونة: تصميم داخلي** | Interior Design Icon | 24px SVG | 🟢 |
| J-2 | **أيقونة: استشارة** | Consultation Icon | 24px SVG | 🟢 |
| J-3 | **أيقونة: إدارة مشروع** | Project Management Icon | 24px SVG | 🟢 |
| J-4 | **أيقونة: تشييد** | Construction Icon | 24px SVG | 🟢 |
| K-1 | **أيقونة: هاتف** | Phone Contact Icon | 24px SVG | 🟢 |
| K-2 | **أيقونة: بريد** | Email Icon | 24px SVG | 🟢 |
| K-3 | **أيقونة: موقع** | Location Pin Icon | 24px SVG | 🟢 |
| K-4 | **أيقونة: إنستقرام** | Instagram Icon | 24px SVG | 🟢 |

#### 🖼 التصاميم التطبيقية (Mockups)

| # | التصميم | المواصفات | الأولوية |
|---|---|---|---|
| T1 | **بطاقة عمل — وجه** | 85×55mm · خلفية Charcoal `#1A1C1D` · شعار أبيض | 🔴 |
| T2 | **بطاقة عمل — ظهر** | لون Terracotta `#C6725B` · Pattern هندسي | 🔴 |
| T3 | **ورق رسمي (Letterhead)** | A4 · رأسية Charcoal + Terracotta + تذييل | 🟡 |
| T4 | **مغلف** | C4 · شعار + عنوان + Pattern | 🟡 |
| T5 | **ختم مطاطي (Stamp)** | للوثائق الرسمية | 🟡 |
| T6 | **Signage خارجية** | لافتة مبنى على خلفية Charcoal | 🟡 |
| T7 | **كتالوج — غلاف** | A5 Portrait · صورة معمارية + شعار | 🟡 |
| T8 | **Post Instagram (1:1)** | 1080×1080 · قالب قابل للتكرار | 🟢 |
| T9 | **Story Instagram (9:16)** | 1080×1920 · قالب | 🟢 |
| T10 | **غلاف PDF تقرير** | A4 Landscape · للعروض التقديمية | 🟢 |

---

### 2. ⚔️ AL FURSAN — الفرسان
**القطاع**: Martial Arts | **السنة**: 2024  
**ID**: `azm-martial-arts`  
**URL**: `/brand-project/azm-martial-arts`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX | Pantone |
|---|---|---|---|
| 🟢 | Warrior Green | `#286140` | 7734 C |
| 🔴 | Battle Red | `#DA291C` | 485 C |
| 🟡 | Desert Sandlight | `#FAECB9` | P 4-2 C |
| 🟠 | Sunstrike Yellow | `#FFBB4F` | 13-0947 TPX |
| 🟫 | Clay Brown | `#7A3E3A` | 499 C |
| 🌲 | Midnight Pine | `#1E2F28` | 5535 C |

| الخط | الدور | الأوزان |
|---|---|---|
| **Graphie** | Latin Typeface | Light · Book · Regular · Bold |
| **KO Sans** | Arabic Typeface | Light · Regular · Medium · Bold |

#### 📁 حالة الأصول
| الأصل | الملف | الحالة |
|---|---|---|
| الشعار | `/images/logos/al_fursan.png` | ✅ موجود |
| Geometry | `/images/geometry.png` | ✅ موجود |
| Social | `/images/social.png` | ✅ موجود |
| Transformation afterImg | `/images/logos/al_fursan.png` | ✅ |
| شعار SVG | — | ❌ |
| Favicon | — | ❌ |
| Icon Set | — | ❌ |

---

### 3. 🌿 SÈVE
**القطاع**: Luxury Perfume | **السنة**: 2024  
**ID**: `seve-perfume`  
**URL**: `/brand-project/seve-perfume`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| ⬛ | Obsidian Black | `#111111` |
| 🟡 | Liquid Gold | `#D4AF37` |
| ⬜ | Pure White | `#FFFFFF` |

| الخط | الدور |
|---|---|
| **Playfair Display** | Elegance & Tradition |
| **Montserrat** | Modern Clarity |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `seve.png` | ✅ |
| Transformation | ✅ مؤقت |
| colorSystem وصف | ❌ ناقص |
| typography — object format | ⚠️ string فقط |
| geometry / socialMedia | ❌ ناقص |

---

### 4. 🏋️ APEX
**القطاع**: Premium Fitness | **السنة**: 2025  
**ID**: `apex-fitness`  
**URL**: `/brand-project/apex-fitness`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| ⬛ | Charcoal Grey | `#2A2A2A` |
| ⬜ | Metallic Silver | `#E0E0E0` |
| 🔴 | Crimson Red | `#B71C1C` |

| الخط | الدور |
|---|---|
| **Tungsten** | Bold Impact |
| **Inter** | Performance Metrics |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `apex.png` | ✅ |
| Transformation | ✅ مؤقت |
| geometry / socialMedia | ❌ ناقص |

---

### 5. 🏛 CHRONOS
**القطاع**: Cultural Institution | **السنة**: 2023  
**ID**: `chronos-culture`  
**URL**: `/brand-project/chronos-culture`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| 🔵 | Deep Navy | `#0A192F` |
| 🟡 | Warm Cream | `#F5F5DC` |
| 🟫 | Terracotta | `#E27D60` |

| الخط | الدور |
|---|---|
| **Baskerville** | Historical Authority |
| **Helvetica Neue** | Modern Exhibition |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `chronos.png` | ✅ |
| Transformation | ✅ مؤقت |
| geometry / socialMedia | ❌ ناقص |

---

### 6. 🤖 NEXUS
**القطاع**: AI Technology | **السنة**: 2026  
**ID**: `nexus-ai`  
**URL**: `/brand-project/nexus-ai`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| 🔵 | Electric Blue | `#00E5FF` |
| 🟣 | Dark Violet | `#4A148C` |
| ⬛ | Space Black | `#0B0B1A` |

| الخط | الدور |
|---|---|
| **Space Grotesk** | Futuristic Tech |
| **Roboto Mono** | Code & Data |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `nexus.png` | ✅ |
| Transformation | ✅ مؤقت |
| geometry / socialMedia | ❌ ناقص |

---

### 7. 🏨 THE MARMONT
**القطاع**: Boutique Hotel | **السنة**: 2024  
**ID**: `marmont-hotel`  
**URL**: `/brand-project/marmont-hotel`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| 🟢 | Sage Green | `#9CAF88` |
| 🟡 | Ivory | `#FFFFF0` |
| 🟡 | Brushed Brass | `#B5A642` |

| الخط | الدور |
|---|---|
| **Cormorant Garamond** | Classic Refinement |
| **Lato** | Clean Legibility |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `marmont.png` | ✅ |
| Transformation | ✅ مؤقت |
| geometry / socialMedia | ❌ ناقص |

---

### 8. 🏗 ALTIUS
**القطاع**: Real Estate | **السنة**: 2025  
**ID**: `altius-realestate`  
**URL**: `/brand-project/altius-realestate`

#### 🎨 الهوية البصرية
| اللون | الاسم | HEX |
|---|---|---|
| 🔵 | Slate Grey | `#708090` |
| 🟫 | Rich Bronze | `#CD7F32` |
| ⬜ | White Marble | `#FBFBFB` |

| الخط | الدور |
|---|---|
| **Cinzel** | Architectural Authority |
| **Open Sans** | Accessible Details |

#### 📁 حالة الأصول
| الأصل | الحالة |
|---|---|
| الشعار `altius.png` | ✅ |
| Transformation | ✅ مؤقت |
| geometry / socialMedia | ❌ ناقص |

---

## 🗃 هيكل مجلد الملفات المقترح

```
/public/images/
│
├── logos/                          ← شعارات للعرض في الـ Gallery
│   ├── samt.svg                    ❌ مطلوب
│   ├── samt_icon.svg               ❌ مطلوب
│   ├── al_fursan.png               ✅
│   ├── seve.png                    ✅
│   ├── apex.png                    ✅
│   ├── chronos.png                 ✅
│   ├── nexus.png                   ✅
│   ├── marmont.png                 ✅
│   └── altius.png                  ✅
│
├── brands/                         ← صور تطبيقات كل براند
│   ├── samt/
│   │   ├── hero.jpg
│   │   ├── geometry.jpg
│   │   ├── social_post.jpg
│   │   ├── stationery.jpg
│   │   ├── lookbook.jpg
│   │   └── card_mockup.jpg
│   ├── al_fursan/
│   ├── seve/
│   ├── apex/
│   ├── chronos/
│   ├── nexus/
│   ├── marmont/
│   └── altius/
│
├── geometry.png                    ✅ مشترك (الفرسان)
└── social.png                      ✅ مشترك (الفرسان)
```

---

## ✅ Checklist إضافة براند جديد

```
[ ] id فريد في brandGalleryData.js
[ ] brandName + brandNameAr
[ ] industry + industryAr + type + typeAr + year
[ ] cardBackground (CSS gradient)
[ ] heroImage (min 2000px width, WebP مفضل)
[ ] intro.statement (EN) + introAr.statement (AR)
[ ] intro.logoText
[ ] story: challenge + opportunity + objective (EN)
[ ] storyAr: challenge + opportunity + objective (AR)
[ ] strategy: 5 محاور (EN) + strategyAr: 5 محاور (AR)
[ ] visualIdentity.logoScreen ← ملف SVG في /public/images/logos/
[ ] visualIdentity.colorSystem: min 2 ألوان بـ (hex, name, rgb, cmyk, pantone, desc)
[ ] visualIdentity.typography.primary: { name, role, weights[], desc }
[ ] visualIdentity.typography.secondary: { name, role, weights[], desc }
[ ] motion.videoUrl
[ ] geometry: { img, title, titleAr, desc, descAr }
[ ] socialMedia: { img, title, titleAr, desc, descAr }
[ ] applications: [ { title, titleAr, img } ] — min 2 تطبيقات
[ ] transformation.afterImg ← الشعار النهائي أو صورة مقارنة
```

---

## 🔴 أولويات العمل الحالية

| # | المهمة | البراند | الأولوية |
|---|---|---|---|
| 1 | إنشاء شعار SVG + Icon | SAMT | 🔴 عاجل |
| 2 | تحديث `logoScreen` في البيانات | SAMT | 🔴 عاجل |
| 3 | إضافة `transformation.afterImg` | SAMT | 🟡 |
| 4 | إضافة `cardBackground` | كل البراندات | 🟡 |
| 5 | تصاميم T1–T2 (بطاقة عمل) | SAMT | 🟡 |
| 6 | تصاميم T3–T7 (ورق + مغلف + Signage) | SAMT | 🟢 |
| 7 | Icon Set A–K | SAMT | 🟢 |
| 8 | توسيع colorSystem مع وصف | SÈVE · APEX · CHRONOS · NEXUS · MARMONT · ALTIUS | 🟢 |
| 9 | إضافة geometry + socialMedia | APEX · CHRONOS · NEXUS · MARMONT · ALTIUS | 🟢 |
