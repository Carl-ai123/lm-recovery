---
name: industrial-service-web-design
description: Visual and UX design guidance for LM Recovery and similar local UK trade, recovery, towing and industrial service websites. Use when designing, reviewing or modifying website UI.
---

# Industrial Service Web Design

Use this skill for visual UI work on LM Recovery or similar local trade/service websites. The goal is a mature, commercially credible, conversion-focused industrial service website—not a generic AI, v0, SaaS or agency landing page.

## Design direction

The site should feel industrial, utilitarian, credible, direct, automotive, local, professional, operational and high-trust. It should not feel like a SaaS product, AI startup, agency template, Dribbble concept, luxury brand or futuristic technology company.

Preserve the existing LM Recovery navy, recovery blue, white, neutral grey and restrained yellow-accent palette. Do not redesign the information architecture or replace working functionality without a clear reason.

## Core rules

### Density and layout

- Avoid excessive whitespace. Sections should be only as tall as their content requires.
- Keep desktop pages compact and information-rich without becoming cramped.
- Use one consistent content width, approximately 1180–1240px.
- Align section headings, columns, imagery and CTAs to a predictable grid.
- Use desktop width intelligently: two-column layouts, compact service grids, horizontal trust proof and image/text combinations.
- On mobile prioritise Call, WhatsApp, service identification, trust and quick scanning.

### Typography

- Avoid oversized startup-style marketing typography.
- Suggested maximum desktop scale: H1 52–64px, H2 36–44px, H3 24–30px, body 16–18px.
- Suggested mobile scale: H1 38–46px, H2 30–36px.
- Use strong weight, spacing and hierarchy rather than giant text.

### Sections and cards

- Use a limited visual system: white content sections, light neutral sections, navy emphasis/CTA sections and photography-led sections.
- Do not give every section a unique dramatic treatment.
- Do not wrap every item in a card. Prefer typography, dividers, images, columns and lists.
- Limit the site to two or three reusable card styles.
- Use restrained corner radii. Avoid pill-shaped SaaS containers.
- Prefer borders and contrast over heavy shadows.

### Photography

- Genuine LM Recovery photography is a primary design asset.
- Prefer authentic recovery trucks, transported vehicles, roadside recovery, loading/unloading and working environments.
- Do not use generic stock or AI-generated vehicle imagery.
- Audit each crop individually. Use consistent aspect ratios, `object-fit: cover` where appropriate and intentional per-image `object-position`.
- Never distort images or crop out the key vehicle unnecessarily.
- Do not add hero video until genuine LM Recovery footage is supplied.

### CTA and trust system

- Maintain one consistent CTA hierarchy:
  - Primary: Call Now
  - Secondary: WhatsApp / Get Quote
- Keep the persistent mobile Call/WhatsApp CTA where it is useful.
- Use concrete proof: verified Google rating/review count, 24/7 operation, confirmed services, coverage and genuine work photography.
- Never fabricate testimonials, review links, prices, response times, accreditations, insurance claims, locations or service claims.

### Motion and interaction

- Use restrained 150–250ms transitions.
- Buttons may lift 2–3px or move an icon 2–4px.
- Cards/images may lift slightly or scale by no more than approximately 1.02–1.03.
- Provide clear `:focus-visible` states.
- Keep touch interactions normal on mobile.
- Avoid bouncing, parallax, large scaling, constant scroll animation and decorative motion.
- Respect `prefers-reduced-motion`.

### Copy and commercial purpose

- Do not repeat the same eyebrow → giant headline → paragraph → cards pattern in every section.
- Vary information hierarchy naturally while retaining consistency.
- Every design decision should help visitors identify LM Recovery, understand services, establish trust, contact Liam or find useful information.
- Decoration is secondary to clarity and conversion.

## Required review checklist

Before finishing visual work, inspect for:

- unnecessarily giant typography
- excessive whitespace
- repeated card grids
- excessive rounded containers or shadows
- excessive gradients
- unnecessary icon cards
- over-animation
- too many section styles
- weak grid alignment
- random spacing
- generic startup copy
- repetitive eyebrow/headline patterns
- broken or unconvincing image crops
- CTAs hidden by the mobile sticky bar

## Responsive QA

Test at 360px, 390px, 430px, 768px, 1024px and 1440px or wider. Check the header/logo, hero copy wrapping, CTA layout, trust row, image crops, forms, gallery, footer, sticky mobile CTA, buttons and service pages. Confirm no horizontal overflow and that the sticky CTA does not cover forms, footer content or important controls.

## Performance and implementation

- Reuse the existing Next/Image implementation and responsive `sizes` values.
- Lazy-load below-the-fold imagery.
- Prefer optimised image formats where supported.
- Prefer CSS transitions over new JavaScript animation libraries.
- Do not add dependencies for ordinary visual polish.
- Extend existing components, styles and patterns instead of replacing them.

## Definition of done

A finished page should look believable as a site commissioned from a competent UK web design studio for an established local recovery business. It should not immediately look generated by v0 or AI.

After implementation, report:

1. Files changed
2. Main changes made
3. Assumptions
4. Missing assets still required
5. Feedback deliberately not implemented and why
6. Visual areas the owner should manually inspect
