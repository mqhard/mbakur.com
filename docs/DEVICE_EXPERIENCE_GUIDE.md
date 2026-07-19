# DEVICE_EXPERIENCE_GUIDE.md

## Document Purpose

This document defines the official device experience strategy for the project.

Its purpose is to ensure that every visitor receives the best possible experience according to the capabilities of their device while preserving one unified brand identity.

This document is mandatory for all developers and AI coding agents.

---

# Core Philosophy

The project does **NOT** use responsive design as a method of shrinking or stretching layouts.

Instead, it follows an **Adaptive Experience Strategy**.

The content, identity and business goals remain consistent across all devices, while the presentation, interactions and performance are optimized for each device category.

Every screen should feel intentionally designed rather than automatically resized.

---

# Supported Devices

## Mobile

Primary Goal

Fast.

Focused.

Minimal.

Immediate.

The visitor should understand who we are and what we do within seconds.

Priority:

* Speed
* Readability
* Easy navigation
* Fast contact
* Portfolio discovery

---

## Tablet

Primary Goal

Immersive browsing.

Balanced interaction.

Portfolio exploration.

The tablet experience should emphasize visual storytelling and touch-friendly interaction.

Priority:

* Larger galleries
* Richer layouts
* Interactive media
* Comfortable reading
* Multi-column content

---

## Desktop / Laptop

Primary Goal

Premium digital exhibition.

This is the flagship experience.

Desktop users should experience the complete creative vision.

Priority:

* Cinematic presentation
* Rich motion
* Advanced layouts
* Interactive storytelling
* Full portfolio experience

---

# Experience Strategy

The website must never display exactly the same layout across all devices.

Instead:

Same Content

↓

Different Presentation

↓

Same Brand Identity

---

# Mobile Experience

Objectives

* Load as fast as possible.
* Minimize cognitive load.
* Present the most important information first.
* Encourage immediate engagement.

Hero

* Lightweight background.
* Optimized media.
* Short headline.
* One primary CTA.

Navigation

* Compact navigation.
* Large touch targets.
* Sticky navigation.

Portfolio

* Vertical scrolling.
* Large preview cards.
* Fast loading.

Animations

* Minimal.
* GPU-friendly.
* Never block scrolling.

Images

* Mobile optimized.
* Responsive sizes.
* Lazy loading.

Video

* Lightweight.
* Deferred loading.
* Thumbnail-first approach whenever appropriate.

---

# Tablet Experience

Objectives

* Encourage exploration.
* Improve visual storytelling.
* Increase interaction.

Hero

* Larger media.
* More supporting content.
* Improved composition.

Portfolio

* Two-column layouts where appropriate.
* Swipe-friendly galleries.

Navigation

* Expanded navigation.
* Larger spacing.

Animations

* Moderate.
* Smooth.
* Touch optimized.

---

# Desktop Experience

Objectives

Create a memorable digital gallery.

Hero

* Full cinematic experience.
* Rich motion.
* Advanced typography.
* Layered layouts.

Portfolio

* Full visual storytelling.
* Rich galleries.
* Videos.
* Case studies.

Animations

* Advanced.
* Scroll-triggered.
* Micro interactions.
* Smooth transitions.

Navigation

* Complete navigation.
* Rich mega sections where appropriate.

---

# Responsive Principles

The project uses flexible layouts.

Never design based on fixed pixel values.

Prefer:

* Fluid layouts
* Flexible grids
* Relative spacing
* Adaptive media

---

# Breakpoint Strategy

The exact breakpoint values should be centralized within the design system.

All components must inherit those values instead of defining their own.

Never hardcode inconsistent breakpoints.

---

# Typography Strategy

Typography must scale smoothly.

Headings

Paragraphs

Spacing

Buttons

Cards

Forms

All typography should adapt proportionally across devices.

Never simply reduce font size.

Rebalance hierarchy instead.

---

# Image Strategy

Serve different image sizes depending on the device.

Guidelines

* Responsive images
* Modern formats
* Lazy loading
* Proper aspect ratios
* Optimized compression

Large desktop images must never be delivered to small mobile devices.

---

# Video Strategy

Videos must not block page rendering.

Rules

* Lazy loading
* Poster image first
* Device-appropriate quality
* Responsive dimensions

Hero videos should prioritize perceived performance.

---

# Motion Strategy

Motion should support storytelling.

Never distract.

Mobile

Minimal motion.

Tablet

Moderate motion.

Desktop

Full motion language.

Animations should never reduce usability.

---

# Performance Budget

Performance has higher priority than visual effects.

Every feature must justify its performance cost.

If an animation negatively affects performance, simplify or remove it.

Core Web Vitals must remain a primary success metric.

---

# Accessibility

All experiences must maintain:

* Keyboard navigation
* Screen reader compatibility
* Focus visibility
* Sufficient contrast
* Semantic HTML
* Touch-friendly targets

Accessibility cannot be sacrificed for aesthetics.

---

# Localization

Arabic and English experiences must remain equivalent.

Rules

* Same quality
* Same visual hierarchy
* Same interaction quality
* Proper RTL/LTR behavior
* Localized typography
* Localized media when necessary

---

# Design Consistency

Although layouts may differ between devices, the following elements must remain consistent:

* Brand identity
* Typography system
* Color system
* Component language
* Tone of voice
* User journey
* Navigation logic

---

# AI Agent Rules

Before implementing any UI changes, every AI coding agent must verify:

* Device behavior
* Responsive behavior
* Performance impact
* Accessibility impact
* Localization compatibility
* Design system consistency

No feature should be considered complete until it has been validated across Mobile, Tablet and Desktop experiences.

---

# Success Criteria

A successful implementation means:

* The website feels intentionally designed for every device.
* Performance remains excellent.
* Brand identity remains consistent.
* Navigation is intuitive.
* Portfolio presentation is premium.
* The experience feels natural rather than resized.

The objective is not responsive design.

The objective is a premium adaptive digital experience.
