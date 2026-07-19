# PROJECT RULES

> **Status:** Extracted from the existing codebase on 2026-07-17.  
> **Authority:** This document formalizes observable project conventions only. A rule is an existing, repeatable pattern; an absent implementation is recorded as **not established**, not converted into a future requirement.  
> **Scope:** The React/Vite client application in this repository. Deployment/server configuration and live-site behavior are outside what can be verified here unless present in the repository.

---

## 1. Project constitution

### 1.1 Product identity

The product is a bilingual personal creative portfolio for **Mohammed Bakur**. It presents creative direction, content creation, production, design, brand identity, and selected projects as an immersive digital exhibition.

It is a client-side React application, not a SaaS product or CRM in the implemented application surface. Authentication and a small role-aware dashboard exist as an isolated Supabase-backed area; they do not define the public-site architecture.

### 1.2 Design philosophy

The established experience is **cinematic, dark, experimental, editorial, and premium**. It is built from the following recurring principles:

- A near-black canvas with high-contrast light typography.
- Saturated magenta and orange as the primary emotional accents, with cyan as a technological accent.
- Large type, generous vertical space, restrained copy, and prominent media.
- Glass panels, soft borders, gradients, glow, depth, and blurred translucent layers.
- Motion as an atmospheric and interactive layer: fades, vertical reveals, image zooms, parallax-like cursor response, and animated transitions.
- Asymmetry and oversized decorative numerals for selected editorial/case-study views.
- Content arranged as discovery and visual storytelling rather than as dense utility screens.

### 1.3 Experience principles

1. The visual impression precedes detailed explanation: hero media, large type, and motion establish the page mood.
2. Pages are self-contained experiences. Specialized routes may use their own local header/back control rather than a single shared header.
3. Public navigation is primarily action-led: calls to action use route navigation, portfolio filters open media, and project cards open deeper work views.
4. The site supports two reading directions. Direction, fonts, icon direction, and some alignment change with the selected language.
5. Interactions retain the dark visual system: borders, translucency, gradient fills, accent glows, and animated feedback are preferred to default browser controls.

---

## 2. Technology and application boundaries

### 2.1 Runtime and build

- Use **React 19** rendered with `createRoot` inside `StrictMode`.
- Use **Vite** as the development and production build tool.
- Use `BrowserRouter` and React Router route elements for client-side routing.
- Use JavaScript/JSX (`.js`, `.jsx`), not TypeScript.
- Use `react-i18next` / `i18next` for public copy and direction-aware rendering.
- Use `framer-motion` for visual motion.
- Use `lucide-react` for standard interface icons.
- Use `@studio-freight/lenis` only in the cinematic-studio route for smooth scrolling.
- Use `react-compare-slider` for before/after visual comparison in brand project presentations.
- Use Supabase only through `src/lib/supabase.js` for the implemented login/dashboard flow.

### 2.2 Entry-point rules

- `src/main.jsx` is the application entry point. It loads global CSS, localization setup, strict mode, browser routing, and `App`.
- `src/App.jsx` owns application-wide concerns: language direction (`html[dir]` and `html[lang]`), scroll-to-top on pathname changes, the fixed language toggle, the fixed login trigger/modal, and route declarations.
- Global styles begin in `src/index.css`. `src/App.css` is present but is not imported from `main.jsx` or `App.jsx`; it is therefore not an active global style dependency.
- The HTML shell is minimal: viewport, favicon, and a static `MOHAMMED BAKUR` title are supplied in `index.html`.

### 2.3 Route contract

The active route table is defined only in `src/App.jsx`:

| Path | Rendered view | Role in the experience |
|---|---|---|
| `/` | `Home` | Main exhibition landing page |
| `/expertise` | `ExpertisePage` | Dedicated expertise/services narrative |
| `/creative-direction` | `CinematicStudio` | Cinematic creative-direction experience |
| `/brand-identity` | `BrandIdentity` | Interactive brand-identity paths and journey |
| `/legacy` | `ProudProjects` | Projects, tools, community narrative |
| `/login` | `Login` | Authentication view |
| `/dashboard` | `Dashboard` | Authenticated user dashboard |
| `/brand-gallery` | `BrandGallery` | Brand-gallery hub |
| `/brand-project/:id` | `BrandGuideViewer` | Paginated brand-project guide |

The route table does **not** include a catch-all/not-found route, `/contact`, or `/tool/:id`. Existing controls that point to those paths are not an established routable-page pattern.

### 2.4 Public page composition

- `Home` composes `Hero`, `Portfolio`, embedded `ExpertisePage`, `Contact`, and `Footer`, in that order.
- `CinematicStudio` composes several components from `components/cinematic/` with a page-local back control, followed by the shared `Footer`.
- `ProudProjects` includes the `Community` component. `About`, `CustomCursor`, `Expertise`, `SciFiHub`, `BrandProject`, `CinematicFooter`, `BlueprintStrategy`, `EndToEndPyramid`, and `MindMapPyramid` exist in source but are not mounted by the active route composition. They are not required parts of the current public experience.

---

## 3. Repository, folders, and naming

### 3.1 Current source map

```text
/
├── public/
│   ├── hero-background.mp4
│   ├── personal-banner.jpg, 1.jpg, favicon.svg, icons.svg
│   └── images/
│       ├── logos/
│       └── ushaq/
├── src/
│   ├── assets/                 # starter/template assets currently retained
│   ├── components/             # reusable public-site sections and controls
│   │   └── cinematic/          # cinematic-studio-specific sections
│   ├── data/                   # structured brand-gallery records
│   ├── lib/                    # third-party client setup
│   ├── pages/                  # route-level views
│   ├── App.jsx                 # global shell and routes
│   ├── i18n.js                 # English/Arabic translation resources
│   ├── index.css               # active global system styles
│   └── main.jsx                # bootstrapping
├── scripts at repository root  # deployment, FTP, inspection, and patch utilities
├── index.html
├── vite.config.js
├── package.json
└── public/.htaccess            # SPA fallback rewrite
```

### 3.2 Organization rules

- Route-level modules live in `src/pages/` and are named in PascalCase, e.g. `BrandGallery.jsx`.
- Reusable presentation modules live in `src/components/` and are named in PascalCase.
- A route-specific component family may be grouped in a descriptive nested directory, as `src/components/cinematic/` is for the cinematic studio.
- Data that drives multiple instances of the same experience lives in `src/data/`; `brandGalleryData.js` is the current example.
- External-service initialization lives in `src/lib/`.
- Publicly addressed static assets live under `public/` and are referenced with root-relative URLs such as `/hero-background.mp4`.
- Component-local external visual media is currently stored as URL strings inside component/data modules, especially Unsplash and Mixkit URLs.
- The repository uses relative imports. Parent imports (`../`) are normal; no path-alias convention exists.
- The component convention is one default-exported component per module. Helper components can be declared in the same module when they belong only to that view.

### 3.3 Naming rules visible in code

- React component names use PascalCase.
- Local handlers use `handle…` names, e.g. `handleMouseMove`, `handleNext`, `handlePrev`.
- Local boolean state uses `is…`, e.g. `isRTL`, `isLoginOpen`, `isMobile`.
- Page configuration/data arrays use descriptive camelCase names, e.g. `galleryProjects`, `pathsConfig`, `journeyPhasesConfig`.
- CSS custom properties use `--color-*`, `--font-*`, and `--transition` prefixes.
- Translation keys are grouped by page/feature namespace and use nested camelCase or snake_case keys according to the existing namespace. New keys must preserve the namespace style they extend rather than normalize unrelated existing keys.

### 3.4 Script boundary

Root-level `.js`/`.cjs` utilities are operational or one-off maintenance scripts, not browser application modules. They include deployment/FTP scripts and patch/update scripts. Public application code must remain under `src/`; deployment-oriented behavior must remain outside it.

---

## 4. Global visual system

### 4.1 Color tokens

The active global palette is declared in `src/index.css` and is the highest-level color contract:

| Token | Value | Observed role |
|---|---:|---|
| `--color-bg` | `#030303` | Primary page canvas |
| `--color-text` | `#f5f5f5` | Primary foreground text |
| `--color-magenta` | `#ff007f` | Primary neon/brand accent |
| `--color-orange` | `#ff4500` | Warm action/energy accent |
| `--color-cyan` | `#00ffff` | Technology/future accent |
| `--color-gray` | `#1a1a1a` | Dark neutral surface |
| `--color-gray-light` | `#333333` | Light dark-neutral/border use |
| `--color-glass` | `rgba(255,255,255,0.03)` | Glass surface fill |
| `--color-glass-border` | `rgba(255,255,255,0.1)` | Glass border |
| `--color-neon-glow` | magenta/orange shadow | Interactive neon glow |

Rules:

- The default page background is near-black; light sections are not an established site-level pattern.
- Accent color is semantic by mood, not by a formal status-token system: magenta is prominent branding/interaction, orange is action/heat, cyan signals technical or futuristic content.
- Gradients commonly move from magenta to orange at 45° or 90°.
- Glass surfaces use very low white alpha, blur, and a faint white border.
- Page-specific brand-guide views may use colors stored in an individual brand record. Those colors belong to the showcased brand, not the global portfolio palette.
- There is no established success/error/warning/disabled color token system.

### 4.2 Typography

| Context | Primary / display | Secondary / body |
|---|---|---|
| LTR | Outfit | Space Grotesk |
| RTL | Cairo | Tajawal |

Rules:

- Fonts are imported from Google Fonts in `src/index.css`.
- `--font-primary` is reserved for headings, buttons, labels, and display treatments. `--font-secondary` is the body default.
- Global headings are bold (`font-weight: 800`), uppercase, and use `letter-spacing: 1px` by default.
- Arabic direction changes the CSS variables to Cairo/Tajawal and components selectively remove Latin-style letter spacing, increase selected Arabic weights, and reverse directional icons.
- Typography scale is view-specific and usually fluid through `clamp()`. Repeated ranges include large page titles around `clamp(3rem, 6–7vw, 5–6rem)`, section titles around `clamp(2rem, 4–5vw, 3–4.5rem)`, and display/case-study titles up to `clamp(4rem, 10vw, 8–10rem)`.
- Body/descriptive copy commonly uses `line-height` from `1.5` to `1.7`, light-to-normal weight, opacity or gray for hierarchy, and constrained widths of roughly 600–800px.
- English display copy frequently uses uppercase and 2–4px tracking. Arabic uses normal tracking where the component supplies an RTL branch.

### 4.3 Layout, grid, and spacing

- `.container` is the general horizontal wrapper: full width, `max-width: 1400px`, centered, with `0 5vw` inline padding.
- Individual pages may narrow the container to 1200px, 1000px, or 800px based on reading density. Cinematic galleries may widen to 1600px.
- `.section` supplies `padding: 10rem 0` and `position: relative` for standard long-form sections.
- `.asymmetrical-grid` provides the declared base grid: 12 equal columns with a `2rem` gap.
- Many view-specific layouts use CSS grid with `auto-fit/minmax`, flex wrapping, or inlined `gridTemplateColumns`; there is no single universal card grid implementation.
- Vertical space is intentionally generous: page sections commonly use 10–20vh / 10rem padding and multi-rem gaps. This is part of the cinematic editorial rhythm.
- Editorial project pages use large, low-opacity, absolutely positioned section numbers as background composition.
- Rounded corners vary by object class: compact media/card corners are typically 4–12px; major glass/contact surfaces use 20–30px; circular controls use `50%`.

### 4.4 Shared utility classes

The active global utilities are `.text-magenta`, `.text-orange`, `.gradient-text`, `.dotted-border`, `.glass-panel`, `.container`, `.section`, `.asymmetrical-grid`, `.btn-primary`, `.btn-solid-magenta`, `.btn-orange`, `.hide-scrollbar`, `.hover-bg-glass`, `.hover-white`, `.border-radius-12`, and `.carousel-mask`.

Use an existing utility only for the role its name and current visual behavior establish. The style system otherwise relies heavily on component-level inline style objects; that is the existing implementation convention.

---

## 5. Components and interface rules

### 5.1 Global shell controls

- The language selector is a fixed glass pill in the top-right of the global app shell.
- The login trigger is a fixed circular glass icon in the top-left of the global app shell.
- Both use high z-index positioning and are present above all routed views.
- Path changes scroll the browser window to the top.

### 5.2 Hero and section behavior

- The home hero occupies one viewport height and uses the local `/hero-background.mp4` video as an autoplaying, looped, muted, inline full-bleed background.
- Media backgrounds receive black gradient overlays to protect foreground legibility.
- The hero presents a centered name mark at the top and a centered role/CTA group near the lower viewport.
- Primary hero actions are route navigation buttons, not text links.
- Standard sections use a dark background and may layer radial gradients, glass overlays, shadows, and large media imagery.

### 5.3 Buttons and controls

Three reusable button treatments are established:

| Class/pattern | Appearance | Interaction |
|---|---|---|
| `.btn-primary` | outlined rectangular display button | gradient sweep fill, border removal, neon glow |
| `.btn-orange` | orange-outlined rectangular CTA | orange sweep fill and glow |
| `.btn-solid-magenta` | full-width rounded magenta submit button | orange sweep fill, orange glow, 2px upward lift |

Additional page-local controls are usually translucent or glass-like with thin white borders. Icon-only navigation controls are circular. Buttons inherit the secondary font globally unless a component explicitly applies the primary/display font.

### 5.4 Cards, galleries, and modal rules

- Portfolio cards combine image cover media, dark gradient overlays, hover scale, title/category text, and a Lucide play icon when video is available.
- Brand-gallery cards use a visual background reveal, a hover overlay, prominent brand title, and data-driven accent color.
- Portfolio filtering is local state (`activeFilter`) and filters a local array; it is not a routed filter system.
- `VideoModal` is the reusable overlay for YouTube content. It uses `AnimatePresence`, a dark backdrop, click-outside closing, an explicit close button, and Escape-key closing.
- `BrandGuideViewer` is the reusable presentation shell for records in `galleryProjects`. It creates page types from data: cover, section divider, color, logo, image/text, transformation, and placeholder.
- The before/after interaction uses `ReactCompareSlider` and image alternatives labeled “Before” and “After”.

### 5.5 Icons

- Use `lucide-react` for application UI iconography: navigation arrows, user/authentication, service categories, media controls, status-like checkmarks, and contact symbols.
- Reverse left/right arrow selection when rendering an RTL reading direction.
- Bespoke social icons are implemented as local inline SVG components in `Footer`; this is the existing exception to Lucide.
- Icons are usually paired with text when they clarify a navigational or service action; icon-only controls use `aria-label` where supplied (notably social links).

### 5.6 Forms and auth surface

- The public contact surface is visually a glass panel with text/email/subject inputs and a full-width magenta submission action.
- Input styling is transparent with a single lower border, light text, large spacing, and accent-color focus feedback.
- The implemented contact form has no `onSubmit`, labels, `name`, `required`, validation, or submission integration. No delivery/error-handling rule can be inferred from it.
- Login is visually rendered as a modal or a route. It uses Supabase email/password sign-in/up and a client/freelancer role selection UI.
- Dashboard checks Supabase session state and redirects unauthenticated visitors to `/login`; the rendered dashboard differentiates the selected role visually.

---

## 6. Motion and interaction rules

### 6.1 Motion language

- Framer Motion is the default animation mechanism for entry/exit and viewport animations.
- The dominant entry motion is a subtle fade paired with vertical displacement (often 20–30px).
- `whileInView` animations generally use `viewport: { once: true }`, so reveal motion is introductory rather than continuously replayed.
- `AnimatePresence` with `mode="wait"` is used for swapping gallery details, guide pages, and selected content.
- Hover states are additive and premium: transform lifts, image scaling, opacity changes, gradient reveals, border-color changes, and soft glows.
- The global transition token is `all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`.

### 6.2 Cinematic interactions

- The cinematic route initializes Lenis smooth scrolling and owns its animation loop/cleanup.
- Selected cinematic components react to pointer position using Framer motion values, transforms, spring smoothing, or CSS custom properties.
- `CustomCursor` exists as an optional desktop-only cursor effect; it returns nothing below 768px and is not mounted by the active application shell.
- Mouse-driven visual effects are supplementary. Content remains represented by ordinary React elements rather than canvas-only content.

### 6.3 Responsive interaction thresholds

- 768px is the most common mobile threshold for hiding/reducing desktop effects or changing cinematic layout behavior.
- 1000px is used by the project tracker’s mobile mode.
- 600px is used by the SciFi hub’s mobile condition.
- The visual system also uses fluid `clamp()` typography and wrapping grids/flex layouts rather than a single centralized breakpoint file.

---

## 7. Content and portfolio rules

### 7.1 Voice and composition

- The tone is concise, aspirational, visual, and creative-technology oriented.
- English public copy frequently uses title case or uppercase display labels; Arabic translations adapt the wording and avoid forced Latin letter spacing in RTL-aware components.
- Headings are short and declarative. Supporting copy is usually one compact paragraph rather than long prose.
- Calls to action are action phrases that lead to exploration, a journey, projects, creative management, authentication, or contact.
- Content appears in layered hierarchy: eyebrow/section label, oversized title, short supporting statement, then interactive cards/media/details.

### 7.2 Portfolio data contract

- `src/data/brandGalleryData.js` is the current canonical source for the brand-gallery records.
- Each record is identified by a stable string `id` used in `/brand-project/:id`.
- Records contain English and Arabic brand names and industries where supplied, category/year/type, a hero image, an introduction, strategy, visual identity, motion/video, geometry, social-media application, and physical/digital applications.
- Project presentation is visual-first and structured through color systems, typography, logo imagery, transformations, geometric principles, application imagery, and brand narrative.
- Brand guide pages select `brandNameAr`, `industryAr`, and Arabic intro statement when `i18n.language === 'ar'`, otherwise their English counterparts.

### 7.3 Content boundaries

- Portfolio/media data is split between translated UI strings in `i18n.js`, local component arrays, and `brandGalleryData.js`; no CMS or remote project-data API is implemented.
- Generic media URL strings and local public images are both current content sources. There is no centralized asset manifest.
- Page-local project/tool cards that navigate to absent routes are not a content model to extend as an active path contract.

---

## 8. Localization and bidirectional layout

### 8.1 Localization architecture

- All configured translation resources are co-located in `src/i18n.js` under `en.translation` and `ar.translation`.
- Components access translations via `useTranslation()` and `t()`.
- Object-shaped content uses `t(namespace, { returnObjects: true })`.
- `App` controls the root document language and direction: `ar` produces `dir="rtl"`; every other active language is `ltr`.
- Language switching toggles only between `ar` and `en`.

### 8.2 RTL/LTR rendering rules

- Use `isRTL`/`isRtl` derived from `i18n.language === 'ar'` when a component has directional visual behavior.
- Reverse directional arrows, left/right borders, input icon positions, and selected alignment when the component requires it.
- Arabic typography uses Cairo for display and Tajawal for body through root CSS variables.
- Do not assume translated content has the same word length. Existing layouts use wrapping, `clamp()`, max widths, and some RTL-specific font-size/min-width adjustments.
- Brand data may contain parallel Arabic fields; use these rather than machine-transforming an English brand/industry string.

### 8.3 Existing limitations, recorded as boundaries

- The imported `i18next-browser-languagedetector` package is not initialized in the current localization configuration. Language selection is controlled by the app toggle/current i18n state, not an observable browser-detection rule.
- Several strings in project-guide/brand-project components are hard-coded in English, and `BrandProject.jsx` is not registered as an active route. Full route-by-route translation coverage is therefore not an established project standard.
- There is no locale-prefixed URL strategy or localized media-asset strategy in the codebase.

---

## 9. Media, assets, and visual effects

### 9.1 Asset rules

- Use `public/` for project-owned assets referenced from the browser root.
- Existing owned visual groups include the hero video, personal/banner images, brand logos, and `ushaq` image pages.
- Use `object-fit: cover` for atmospheric/card images and `object-fit: contain` for logos and brand-guide assets.
- Large media surfaces commonly receive an overlaid gradient or dark/translucent layer to preserve text contrast.
- Brand case studies may use unique per-brand color systems and external images/videos as part of the presented identity.
- Site UI visuals use CSS gradients, blur, glow, and simple geometric layout rather than a separate illustration library.

### 9.2 Media behavior

- Hero video is autoplay, looped, muted, and `playsInline`.
- Brand-project visual-system video is muted, looped, autoplaying, and `playsInline`.
- Video portfolio items open an embedded YouTube iframe in `VideoModal`.
- Images generally include an `alt` attribute, but the descriptive quality varies by component.

### 9.3 Optimization boundary

The repository contains no image optimization pipeline, responsive `srcset`/`picture` pattern, lazy image-loading pattern, font self-hosting, or declared caching strategy. These are not current project rules. The 64MB local hero video and external media URLs are implementation facts, not evidence of a media-performance standard.

---

## 10. Performance, SEO, accessibility, and security boundaries

### 10.1 Performance philosophy that is observable

- Build for a static Vite client bundle.
- Keep specialized experiences modular at the source-component level (`components/cinematic/`, data-driven guide pages), even though routes are statically imported today.
- Use CSS and Framer Motion for visual effects rather than heavier canvas/WebGL infrastructure in the active code.
- Use viewport-once reveal patterns to limit repeat animation.

No current implementation establishes code splitting, lazy route loading, image lazy loading, service workers, cache headers, resource hints, asset compression workflow, performance budgets, or Core Web Vitals thresholds. The current production build emits a single main JavaScript bundle; that is the observed bundle topology.

### 10.2 SEO boundary

- `ProudProjects` uses `react-helmet` to set a page title and description.
- The base document title is `MOHAMMED BAKUR`.

No shared metadata component, canonical tags, robots file, XML sitemap, Open Graph tags, Twitter cards, JSON-LD/schema, heading policy, server rendering, or image metadata convention is implemented in the repository. These must remain classified as **not established**, not implied by the dependency on `react-helmet`.

### 10.3 Accessibility boundary

Observable positive patterns:

- Structural elements such as `section`, `footer`, `nav`, `form`, headings, inputs, buttons, and links are used in several views.
- `VideoModal` supports Escape key closing and backdrop click closing.
- Some social icon controls have `aria-label` values.
- Some decorative visual layers explicitly use `pointerEvents: 'none'`.
- The core palette aims for light foreground text on a near-black surface.

Not established consistently across the project:

- Form labels, input `name`/`required` state, and submission feedback.
- A shared visible focus style or `:focus-visible` system (a focus style exists only in inactive `App.css`).
- Keyboard focus trapping/restoration for modals.
- Universal alt-text quality, semantic heading sequence, ARIA patterns, reduced-motion behavior, skip navigation, and automated WCAG testing.

Therefore, accessibility is an implementation-by-component concern in the current project, not a complete centralized compliance system.

### 10.4 Security and deployment boundary

- `public/.htaccess` supplies Apache SPA fallback rewrites to `index.html`.
- Authentication calls are made through the Supabase JavaScript client initialized in `src/lib/supabase.js`.
- The repository contains deployment/FTP utilities and environment files, but their execution configuration and production credentials are not included in this document.

No security-header rules, CSP, rate limiting, server-side input validation, CSP nonce, CSRF policy, or Supabase RLS policy can be verified from the current public application source. These are not project standards documented here.

---

## 11. Future development invariants

Every future implementation must preserve the following established identity and architecture unless the project constitution is explicitly revised:

1. Keep the public experience bilingual (English and Arabic) with runtime direction switching and font substitution at the document level.
2. Keep global public routes declared in `App.jsx` and page-level views in `src/pages/`.
3. Keep reusable, page-independent visual sections in `src/components/`; keep cinematic-route-specific sections in `src/components/cinematic/`.
4. Preserve the near-black, neon-accent, glass-and-depth visual language for global portfolio UI. Project-specific brand colors remain scoped to their showcased brand content.
5. Preserve the LTR font pairing (Outfit/Space Grotesk) and RTL pairing (Cairo/Tajawal) unless both the global CSS variables and bilingual visual behavior are intentionally revised together.
6. Use the established root color tokens and existing button/utility patterns before introducing a competing global visual primitive.
7. Preserve large-scale editorial spacing, max-width containers, fluid display typography, and media-first composition.
8. Use Lucide for normal UI icons and reverse directional iconography in RTL where a direction is conveyed.
9. Keep Framer Motion as the primary motion vocabulary: restrained fades/reveals, hover transforms, and `AnimatePresence` for view swaps. Motion must remain supplementary to readable content.
10. Keep project guide content data-driven from `src/data/` when multiple project instances share the same visual guide structure.
11. Keep translated UI text in `src/i18n.js` and use existing Arabic data fields where a portfolio record supplies them.
12. Keep browser-addressed owned assets under `public/` and preserve the distinction between static assets, page data, source components, and service initialization.
13. Preserve the isolated boundary of the Supabase auth/dashboard flow: public creative pages must not become dependent on authenticated dashboard state unless a route explicitly requires it.
14. Treat unmounted components, unused assets, absent routes, incomplete form delivery, and undocumented SEO/accessibility/security mechanisms as **non-authoritative**. Their existence alone does not create a project standard.

---

## 12. Verification record

This constitution was extracted from the repository’s tracked application source, public assets, root configuration, and deployment rewrite file. No files were changed other than creating this document.

The following cannot be verified from the current project repository:

- Live production domain, hosting behavior, server headers, DNS, or runtime caching.
- Supabase database schema, RLS policies, authentication configuration, or stored user data.
- Real-user performance metrics, Core Web Vitals, accessibility audits, search-indexing state, or analytics.
- Authenticity/ownership/licensing of remote media and the business outcome of displayed projects.

