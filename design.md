# Beamvox — Design System

Corporate website for **Beamvox**, a professional stage lighting manufacturer.
Audience priority: (1) customers/buyers, (2) partners & resellers. Markets: Europe, Americas, Africa.

Architecture: trust-led B2B manufacturer structure with product-led product presentation.

## Voice

**Premium and understated.** Minimal, quietly expensive. Specifications carry the persuasion, not adjectives.

- Short declarative sentences. No exclamation marks. No ALL-CAPS shouting in body copy.
- Never: "revolutionary", "amazing", "best in the world", "cutting-edge".
- Prefer: measured claims with a number attached — "17° to 42° zoom", "48-month warranty", "IP65 rated".
- Deliberately counter-positioned against loud competitors (e.g. MEANReal): fewer claims, more precision, more whitespace.
- All copy is placeholder — written in final voice, marked for replacement.

## Color

Near-black base, single saturated ember accent inherited from the logo. Light is the only bright thing on the page.

| Token | Value | Use |
|---|---|---|
| `--bv-void` | `#08080A` | page background |
| `--bv-surface` | `#0F1013` | sections, cards |
| `--bv-elevated` | `#16181D` | hovered cards, spec tables |
| `--bv-ember` | `#FF6A1A` | primary accent, CTAs, active states |
| `--bv-ember-soft` | `#FF9A5C` | hover, gradient stops |
| `--bv-beam` | `#7FD8FF` | cool beam highlight — sparingly, glows only |
| `--bv-text` | `#F6F5F3` | primary text |
| `--bv-muted` | `#A2A3AA` | body text, secondary |
| `--bv-faint` | `#6A6B73` | labels, meta, captions |
| `--bv-line` | `rgba(255,255,255,0.08)` | hairline borders |

Rules:
- Ember is for emphasis and interaction only — never large filled areas, never body text.
- Every section sits on void or surface; alternate to create rhythm without introducing light backgrounds.
- Glows are radial gradients at low opacity, never `box-shadow` colored blurs on cards.

## Typography

- **Display:** Sora — 600/700, tracking `-0.03em`, tight leading (0.95–1.05) at large sizes.
- **Body:** Manrope — 400/500, `1.65` line height, max measure `68ch`.
- **Data:** IBM Plex Mono — 400/500, uppercase labels with `0.18em` tracking for eyebrows, spec tables, model codes.

Scale (clamped, fluid): display `clamp(2.6rem, 6vw, 5.6rem)` / h2 `clamp(2rem, 3.6vw, 3.2rem)` / h3 `1.35rem` / body `1.0625rem` / meta `0.8125rem`.

Headlines are sentence case or small-caps eyebrows — no full-sentence uppercase.

## Layout

- Container `max-w-[1240px]`, gutter `clamp(1.25rem, 4vw, 3rem)`.
- Section rhythm: `py-28` desktop / `py-20` mobile.
- Asymmetric editorial grids: 7/5 and 8/4 splits rather than centered 50/50. Product rows alternate side.
- Hairline dividers and thin ember rules instead of heavy cards. Radius stays small (`4px`–`10px`) — hardware, not consumer app.
- Spec data always in mono, right-aligned values, hairline row separators.

## Backgrounds & texture

- Layered radial "beam" gradients from top and edges, 6–14% opacity.
- Subtle SVG film grain overlay at 3% for depth on large dark areas.
- Thin 1px vertical light streaks in heroes to imply fixtures overhead.

## Motion

- One orchestrated page-load: staggered fade-and-rise (`14px`, 60ms stagger), CSS-driven.
- Scroll reveals via a shared `IntersectionObserver` hook, `once: true`.
- Hover: ember hairline grows, image scales `1.03`, 400ms `cubic-bezier(.2,.7,.2,1)`.
- No parallax, no bouncing, no autoplay carousels.

## Components

Header (sticky, blur, ember underline on active), footer (4-column + region selector placeholder), eyebrow label, section heading, product card (image on void, mono model code, spec chips), spec table, application card, proof stat, certification row, download row, distributor region list, form field (dark input, hairline focus ember), primary/ghost button, quote CTA band.

## Pages

Home / Products / Product detail (2 built) / Applications / Why Beamvox / Partners / Support & Downloads / About / Contact

## Accessibility

Body text on void ≥ 7:1. Ember on void = 6.2:1 for large text only; never ember text below 18px on void. Focus rings visible in ember at 2px offset. All form fields labelled.
