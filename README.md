# Thomas Larson Group — Real Estate Landing Page

A one-page real estate marketing site in a beige / white / brown "modern
elegance" style, recreated as a React + Vite app from a Canva design.

## Sections

1. **Hero** — full-screen interior photo, brand, headline and two calls to action
2. **Intro** — agent photo with a headline and *Get Started* button
3. **Featured Property** — large photo, details and an illustrated floor plan
4. **Featured Listings** — three-up grid of property cards
5. **Open Houses** — three-up grid of property cards
6. **Client Reviews** — three testimonials
7. **Footer** — contact details, office hours, socials and a photo

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
npm run lint     # run eslint
```

## Customising

Almost everything you'll want to tweak lives in two files:

| What | Where |
| --- | --- |
| Text, listings, reviews, contact info, **image URLs** | `src/data/content.js` |
| Colours, fonts, spacing (design tokens) | the `:root` block in `src/index.css` |

### Content

Edit `src/data/content.js`. Listings and open houses are plain arrays of
objects — add, remove or reorder cards freely. Each card has a `status`,
`title`, `beds`, `baths`, `cars`, an `accessible` flag, and an `image`.

### Images

The photos come from [Unsplash](https://unsplash.com) (loaded by the visitor's
browser). To use your own, drop files into `public/` and point the `image`
fields in `content.js` at e.g. `/my-photo.jpg`. Any image that fails to load
falls back to a tasteful labelled placeholder, so the layout never breaks.

### Colours & type

All colours and the two fonts (Playfair Display + Jost) are defined as CSS
variables at the top of `src/index.css`. Change them there to restyle the whole
site at once.

## Tech

React 19 · Vite · plain CSS (no UI framework). Inline SVGs for icons and the
floor plan, so there are no icon-library or image dependencies.
