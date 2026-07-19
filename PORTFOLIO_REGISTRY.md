# 🎬 PORTFOLIO REGISTRY — مرجع أعمال الصفحة الرئيسية

> **الغرض**: هذا الملف هو المرجع لمعرض الأعمال (Portfolio) المعروض في الصفحة الرئيسية للموقع.
> يُستخدم لتتبع المشاريع المختارة، الفئات، وحالة عرض الفيديو/الصور.
> **المسار البرمجي**: `/src/data/portfolioData.js`
> **المكون البرمجي**: `/src/components/Portfolio.jsx`

---

## 🗂 هيكل بيانات العمل القياسي (Template)

```js
{
  id: 1,                           // مُعرّف فريد
  titleKey: 'portfolio.proj_...',  // مفتاح الترجمة لاسم المشروع (من ملف i18n)
  categoryId: '...',               // معرف الفئة (يجب أن يتطابق مع إحدى الفئات أدناه)
  catLabelKey: 'portfolio.cat_...',// مفتاح الترجمة لاسم الفئة
  img: 'URL',                      // رابط الصورة المصغرة للعمل (يفضل 800x600+)
  youtubeId: '...',                // (اختياري) معرف فيديو يوتيوب للتشغيل في Modal
  isVertical: false                // (اختياري) إذا كان الفيديو طولي (Reels/Shorts)
}
```

---

## 🏷 فئات الأعمال (Categories)

| المعرف (id) | مفتاح الترجمة (labelKey) | اللون المخصص |
|---|---|---|
| `Selected Works` | `portfolio.cat_selected` | `var(--color-magenta)` |
| `Commercial Projects` | `portfolio.cat_commercial` | `var(--color-accent)` |
| `Brand Identity` | `portfolio.cat_brandidentity` | `var(--color-cyan)` |
| `Creative Direction` | `portfolio.cat_creative` | `#FFB800` |
| `Cinematography` | `portfolio.cat_cinematography` | `var(--color-magenta)` |
| `Videography` | `portfolio.cat_videography` | `var(--color-accent)` |
| `Photography` | `portfolio.cat_photography` | `var(--color-cyan)` |
| `Post Production` | `portfolio.cat_postproduction` | `#FFB800` |
| `AI Production` | `portfolio.cat_ai` | `var(--color-magenta)` |
| `Content CRM & Engagement` | `portfolio.cat_crm` | `var(--color-accent)` |

---

## 📦 الأعمال الحالية في الصفحة الرئيسية

### 1. الإعلانات والمشاريع التجارية (Commercial)
- **Sumify Launch** (`9qWR53Hwdcs`) - Commercial Projects
- **Savage & SHē - Albarrad** (`-06vVCL3Rgk`) - Commercial Projects
- **Finzey Finance Ad** (`9R7jnqVhAMk`) - Commercial Projects
- **Finzey Finance Narrative Ad** (`V6LiiLFhEMg`) - Commercial Projects
- **Finzey Finance Short Ad** (`ns5mH_shHLg`) - Commercial Projects

### 2. التصوير السينمائي والفيديو (Cinematography & Videography)
- **Shining Tours** (`QS42MD8u1HQ`) - Videography
- **Nupco National Day** (`-mUDQJWxMn4`) - Videography
- **Cafe & Bakery B-roll** (`qI_ZLyrH_30`) - Vertical Video (Reels) / Videography
- **WAY Coffee & Bakery** (`2bKyT6JuVjQ`) - Vertical Video (Reels) / Videography
- **Dar & Emaar Testimonial** (`9ETj9ZmK89M`) - Vertical Video (Reels) / Videography

### 3. الإدارة الإبداعية (Creative Direction)

### 4. محتوى السوشيال ميديا (Content & CRM)
- **Saudi Boxing Federation** (`jX74idisrEI`) - Vertical Video (Reels)
- **Bridal Preparation Reel** (`nPvtkaZAOU4`) - Vertical Video (Reels)
- **CR7 Run Club** (`NK9aRPfZt7w`) - Vertical Video (Reels)
- **Riyadh Marathon - Saudi Boxing Federation** (`wQgCGCDW5J8`) - Vertical Video (Reels)
- **Mike Tyson Visit Coverage** (`G3tW-rWMxiI`) - Vertical Video (Reels)

### 5. تصوير فوتوغرافي (Photography)

### 6. مرحلة ما بعد الإنتاج (Post Production)
- **Dummy Motion Graphics** (`-EDiA9BTaiA`) - Post Production
- **Diman Water Factory** (`sp81sFEVpmo`) - Post Production

### 7. إنتاج الذكاء الاصطناعي (AI Production)
- **Dummy AI Generated** (بدون فيديو) - AI Production

### 8. هويات بصرية (Brand Identity)
- **Brand Project 1** (صورة) - Brand Identity
- **Brand Project 2** (صورة) - Brand Identity
- **Modern Brand Identity** (صورة) - Brand Identity

*(ملاحظة: مشاريع الهوية البصرية عند النقر عليها تقوم بالانتقال إلى صفحة `/brand-gallery` بدلاً من فتح فيديو)*

---

## ✅ Checklist لإضافة عمل جديد للصفحة الرئيسية

```
[ ] التأكد من وجود مفتاح الترجمة (titleKey) في ملف src/i18n.js
[ ] تحديد الفئة الصحيحة من قائمة الفئات (categoryId)
[ ] توفير صورة مصغرة بجودة عالية (يفضل حفظها في /public/images/portfolio/)
[ ] إضافة رابط الفيديو (youtubeId) إذا كان العمل يحتوي على فيديو
[ ] إضافة `isVertical: true` إذا كان الفيديو طولي (Reels/Shorts)
[ ] إضافة الكائن (Object) إلى مصفوفة `projectsData` في `src/data/portfolioData.js`
```
