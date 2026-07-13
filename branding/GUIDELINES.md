# ProductOS brand guidelines

The visual system for ProductOS: the mark, the wordmark, colour, and the rules that keep them consistent across the site, the repo, and any diagram or article.

## The mark

The ProductOS mark is a square border enclosing a pixel-built "P" figure. It is a clean vector rebuild of the original Pixsoul mark, recoloured to ProductOS blue. The square border is a fixed part of the mark and is always drawn with sharp (non-rounded) corners.

Files (`branding/assets/`):

- **mark.svg** -- primary, blue figure and border on a transparent background. Use on white or light surfaces.
- **mark-reversed.svg** -- white figure and border on a transparent background. Use on dark or blue surfaces.
- **favicon.svg** -- solid blue tile with a white knockout figure. Built for small sizes (browser tab, app icon) where the outline mark loses legibility.

## The wordmark

"ProductOS" set in a bold humanist sans (system UI stack). "Product" is set in ink (#0B1120), "OS" in ProductOS blue. The OS carries the accent so the wordmark and the mark tie together.

Files:

- **lockup-horizontal.svg** -- mark left, wordmark right. Default for site headers and wide placements.
- **lockup-stacked.svg** -- mark above, wordmark below, centred. For square or narrow placements.

## Colour

| Role | Name | Hex |
| --- | --- | --- |
| Primary | ProductOS blue | `#1466F8` |
| Deep | Navy | `#0B2B6B` |
| Ink | Near-black text | `#0B1120` |
| Surface | Off-white | `#F4F6FB` |

ProductOS blue is the single accent. It replaces the previous indigo (`#4f46e5`) everywhere: the site accent, the favicon, links, and primary buttons.

Suggested Starlight accent ramp (replacing the indigo ramp in `src/styles/custom.css`):

- Accent: `#1466F8`
- Dark mode low `#0A1F52`, high `#9EC0FF`
- Light mode low `#DCE8FF`, high `#0B2B6B`

## Clear space and minimum size

- Keep clear space around the mark equal to the width of the square border's stroke on all sides. Nothing else sits inside that margin.
- Minimum mark size: 24px. Below that, use **favicon.svg** (the solid tile), not the outline mark.
- Never redraw, restretch, or re-space the figure. Scale the whole SVG uniformly.

## Do and don't

- Do use the reversed mark on dark and blue backgrounds; do not place the blue outline mark on a dark background.
- Do keep the border square and sharp; do not round the corners of the logo mark. (The favicon tile has a small radius by design; the logo mark does not.)
- Do keep "OS" blue in the wordmark; do not recolour the whole wordmark blue except in the fully reversed (white) treatment.
- Do not recolour the mark outside the palette above.
- Do not add drop shadows, gradients, or outlines to the mark.

## Application

- **Site logo and favicon:** `public/favicon.svg` in each Astro build is the mark. The favicon tile variant is the tab icon.
- **Accent:** `src/styles/custom.css` accent variables use the blue ramp above.
- **Diagrams and article heroes:** ProductOS blue is the accent; follow the existing diagram house style for layout and type scale.
