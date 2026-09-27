# Naif Albanaqi — Portfolio

Personal portfolio of Naif Albanaqi, Information Technology Professional. Built with Next.js, TypeScript and
Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Editing content

All text, skills and project details live in `src/content/portfolio.ts`; the components in `src/components/`
only handle layout.

### Contact links

The GitHub, LinkedIn and Email rows in the Contact section come from `contactLinks` in the same file. To
change one, edit its `value` (the text shown) and `href` (the link; use `mailto:` for an email address).

### Adding project screenshots

1. Put the image in `public/projects/`.
2. Add an entry to that project's `screenshots` array with its `src`, `alt`, a short `label`, an optional
   one-sentence `caption` and the image's real pixel `width` and `height`.

A project with at least one screenshot shows the screenshot gallery; a project without screenshots shows its
`overview` panel instead. Screenshots are displayed at or below their native size, so capture them at the
resolution you want them to look sharp at (around 1200–1400 px wide works well on high-density screens).
