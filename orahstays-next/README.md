# OrahStays — Dubai Holiday Homes (Next.js)

The original single-file `dubai_holiday_homes_landing.html` rebuilt as a Next.js (App Router)
project with separate routes, reusable components, and Tailwind CSS. Design, colors, and content
are preserved exactly.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Routes

The original JS `showPage()` SPA tabs are now real pages:

| Route        | Page                          |
| ------------ | ----------------------------- |
| `/`          | Home (hero, areas, featured)  |
| `/browse`    | Browse Homes (filters + grid) |
| `/property`  | Property detail               |
| `/monthly`   | Monthly Stays                 |
| `/owners`    | Property Owners               |
| `/about`     | About                         |
| `/contact`   | Contact                       |

## Structure

```
src/
  app/
    layout.tsx          # fonts (Inter + Playfair Display), Navbar, Footer, globals
    globals.css         # full design system ported from the original <style> block
    page.tsx            # home
    browse|property|monthly|owners|about|contact/page.tsx
  components/
    Navbar.tsx          # nav + hover dropdowns, active-link highlighting
    Footer.tsx
    PropertyCard.tsx    # client — favourite toggle + click-through
    PropertyGrid.tsx
    FilterTabs.tsx      # client — featured-section tabs
    PriceRangeFilter.tsx# client — price slider
    DetailGallery.tsx   # client — thumbnail gallery swap
    EarningsCalculator.tsx # client — owners revenue calculator
    TestimonialCard.tsx
  data/
    properties.ts       # property listing data
```

## Notes

- The color palette (teal / coral / gold / ink) lives both as CSS variables in `globals.css`
  and in the Tailwind theme (`tailwind.config.ts`).
- Listing/gallery images load from Unsplash (allow-listed in `next.config.mjs`); the original
  `<img>` tags were kept as-is rather than swapped for `next/image` to match the design exactly.
