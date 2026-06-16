# OrahStays — Design Documentation

Design reference for the OrahStays Dubai Holiday Homes website (Next.js + Tailwind CSS).
This documents the visual system, content, and component structure as built.

---

## 1. Brand

**OrahStays** — Dubai's premium holiday home platform. Tone: luxury, trustworthy, warm.
Wordmark: `Orah` (teal) + `Stays` (coral), set in Playfair Display.

---

## 2. Color Palette

| Token            | Hex       | Usage                                            |
| ---------------- | --------- | ------------------------------------------------ |
| `--teal`         | `#0D9488` | Primary brand, buttons, links, logo "Orah"       |
| `--teal-dark`    | `#0F766E` | Button hover, gradient starts                    |
| `--teal-light`   | `#CCFBF1` | Borders, quote marks, step numbers               |
| `--teal-bg`      | `#F0FDFA` | Soft tinted backgrounds, nav-link hover          |
| `--coral`        | `#F97316` | Accent / CTA, logo "Stays", stats bar, search btn|
| `--coral-dark`   | `#EA580C` | Coral hover                                       |
| `--coral-light`  | `#FFEDD5` | Coral tinted backgrounds                          |
| `--gold`         | `#D97706` | Ratings, "Featured" badges                        |
| `--gold-light`   | `#FEF3C7` | Gold tinted backgrounds                           |
| `--ink`          | `#0F172A` | Primary text, footer background                   |
| `--slate`        | `#475569` | Body / secondary text                             |
| `--mid`          | `#94A3B8` | Muted labels, placeholders                        |
| `--mist`         | `#F1F5F9` | Section backgrounds, dividers                     |
| `--white`        | `#FFFFFF` | Surfaces, cards                                   |

Avatar accents: `av1` teal · `av2` coral · `av3` gold · `av4` `#7C3AED` (purple) · `av5` `#DB2777` (pink).

Hero / page-hero gradient: `linear-gradient(135deg, #0F766E → #134E4A → #0C4A6E)`.

---

## 3. Typography

| Role                | Font              | Notes                                  |
| ------------------- | ----------------- | -------------------------------------- |
| Display / headings  | Playfair Display  | 400 / 700 — h1, section titles, logo   |
| Body / UI           | Inter             | 300–700 — paragraphs, labels, buttons  |

- Hero h1: `clamp(2.4rem, 5.5vw, 4.2rem)`, weight 700.
- Section title: `clamp(1.7rem, 3vw, 2.5rem)`, weight 700.
- Eyebrow labels (`.sec-label`): 11px, uppercase, letter-spacing `.1em`, teal.

Loaded via `next/font/google` and exposed as `--font-inter` / `--font-playfair`.

---

## 4. Layout & Tokens

- Content max width: **1280px**, centered, 5% side padding.
- Fixed top nav height: **66px** (content offset by `.page-wrap`).
- Section vertical rhythm: `.sec` = `5rem` top/bottom padding.
- Radii: `--radius` = **12px**, `--radius-lg` = **20px**.
- Card hover: lift `translateY(-4px)` + soft shadow; images scale `1.05–1.07`.

### Breakpoints
| Max width | Behavior |
| --------- | -------- |
| 1024px    | Browse / detail / contact / about collapse to single column; footer → 2 cols |
| 768px     | Nav menu hidden; search box → 2 cols; footer → 1 col; amenities → 2 cols |
| 520px     | Search box & contact form → 1 col |

---

## 5. Pages

| Route       | Sections |
| ----------- | -------- |
| `/`         | Hero + search box · stats bar · areas grid · featured properties (tabs) · "OrahStays Difference" (dark) · testimonials · "Own a Property" CTA |
| `/browse`   | Page hero · sticky filter panel (area, type, bedrooms, price slider, amenities) · sort row · property grid · load more |
| `/property` | Breadcrumb · gallery + thumbnails · meta row · description · amenities grid · guest reviews · sticky booking card with price breakdown |
| `/monthly`  | Page hero · benefit perks · audience cards · monthly listings grid |
| `/owners`   | Page hero · 4-step process · earnings calculator · "Everything We Handle" · returns CTA |
| `/about`    | Page hero · story (image + text) · team grid · awards grid |
| `/contact`  | Page hero · message form · contact info card · map placeholder · quick option links |

---

## 6. Components

| Component             | Type    | Responsibility |
| --------------------- | ------- | -------------- |
| `Navbar`              | client  | Logo, nav links with hover mega-dropdowns, active-route highlight, Contact / List Property buttons |
| `Footer`              | server  | Brand blurb, social, Properties / Areas / Company link columns, legal bar |
| `PropertyCard`        | client  | Image, badge, favourite toggle (🤍/❤️), meta, price, rating, Book button, click-through to detail |
| `PropertyGrid`        | server  | Renders a list of `PropertyCard`s |
| `TestimonialCard`     | server  | Star rating, quote, avatar, name, location |
| `FilterTabs`          | client  | Featured-section category tabs (All / Villas / Apartments / Studios / Monthly) |
| `PriceRangeFilter`    | client  | Price-per-night slider with live AED value |
| `DetailGallery`       | client  | Main image + 4 thumbnails, swap on click |
| `EarningsCalculator`  | client  | Revenue estimate = `base × location × occupancy × 30 × 0.8` |

---

## 7. Component Grammar (key styles)

- **Buttons:** `.btn-primary` (teal fill), `.btn-ghost` (outline), `.btn-white` / `.btn-outline-w`
  (on coral CTA), `.search-btn` / `.book-now` (coral fill).
- **Property badges:** `.bp` coral "Popular", `.bf` gold "Featured", `.bn` teal "New".
- **Cards:** 1px `#e2e8f0` border, white surface, radius 12–20px, hover lift.
- **Testimonial cards:** large decorative `"` quote mark in `--teal-light` via `::before`.
- **Dark sections** (`.dark-sec`): teal gradient, translucent white cards (`rgba(255,255,255,.1)`).
- **Stats bar:** solid coral band, 4 white stat figures.

---

## 8. Content Data

- **6 sample properties** (Marina, Downtown, Palm, JBR, Business Bay, Dubai Hills) in
  `src/data/properties.ts` — name, beds/baths/guests, price, rating, badge, image.
- Headline stats: 700+ properties · 12,000+ guests · 35 neighbourhoods · 4.9★ rating.
- Imagery: Unsplash (allow-listed in `next.config.mjs`).

---

_Design preserved 1:1 from the original `dubai_holiday_homes_landing.html`._
