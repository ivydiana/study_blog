# Ivy Ding Blog

A minimal editorial personal blog built with Next.js and Tailwind CSS.

## Preview

[Open GitHub Pages](https://ivydiana.github.io/study_blog/)

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Structure

- `app/page.js`: homepage composition and mock content
- `components/`: reusable homepage cards and navbar
- `public/`: local placeholder illustrations and avatar
- `app/globals.css`: global tokens and shared utility styles

## Deploy To GitHub Pages

This repository is configured to deploy automatically with GitHub Actions.

1. Push to the `main` branch.
2. In GitHub, open `Settings > Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Wait for the workflow to finish, then open the preview link above.
