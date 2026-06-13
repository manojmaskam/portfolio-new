# Maskam Manoj Kumar — Portfolio

A 3D, animated personal portfolio built from scratch with React + Vite, inspired by the structure of a reference portfolio. All content is sourced from the résumé.

## Stack

- **React 18 + Vite** — SPA with lazy-loaded routes
- **React Router** — `/` home + `/myworks` projects page
- **Three.js + react-three-fiber + drei** — interactive 3D hero scene (distorted icosahedron + particle field that follows the pointer)
- **GSAP + ScrollTrigger** — entrance + scroll-reveal animations
- **Lenis** — smooth scrolling synced to GSAP's ticker
- Custom two-part cursor, intro loader, animated marquee

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/npm
npm run preview  # preview the production build
```

## The 3D avatar (Ready Player Me)

The hero centerpiece is a 3D humanoid avatar that **tracks your cursor** and
**leans toward a glowing desk as you scroll** (the avatar + desk live in a fixed
canvas behind the Hero and "What I Do" sections).

To use **your own** avatar:

1. Go to **https://readyplayer.me**, create a free full-body avatar.
2. Copy your avatar's `.glb` URL (looks like `https://models.readyplayer.me/<id>.glb`).
3. Paste it into `avatarUrl` in [`src/data/profile.js`](src/data/profile.js).

If the URL is missing or fails to load, the hero automatically falls back to an
abstract 3D object — so it's never broken. The avatar's arms are posed
procedurally (A-pose → arms down); tweak the rotations in
[`src/three/Avatar.jsx`](src/three/Avatar.jsx) if your model differs.

## Editing content

**All content lives in [`src/data/profile.js`](src/data/profile.js)** — name, roles, about, skills, career timeline, contact links, and projects. Edit that one file to update the whole site.

- Projects with `real: true` come from the résumé.
- Projects with `real: false` are placeholders (shown with a `WIP` badge and dashed border) — replace them with your real builds.
- To add a downloadable résumé, drop the PDF into a `public/` folder and it'll be served at the root (the path is set in `profile.resumeUrl`).

## Structure

```
src/
  data/profile.js        # ← single source of truth for content
  styles/                # index.css (design tokens) + app.css (components)
  hooks/                 # useLenis (smooth scroll), useReveal (scroll animations)
  three/                 # 3D: AvatarStage (fixed canvas + scroll driver),
                         # AvatarCanvas, Avatar (RPM loader), Desk, Blob,
                         # Particles, avatarState (shared scroll/pointer signal)
  components/            # Cursor, Loader, Navbar, SocialRail, ResumeButton,
                         # Hero, WhatIDo, About, Career, Works, Skills,
                         # Contact, icons
  pages/                 # Home, MyWorks
  App.jsx, main.jsx
```

## Sections (mirrors the reference site)

1. **Hero** — name (left) + rotating role (right), 3D avatar behind.
2. **What I Do** — avatar holds while service cards reveal with scanner brackets.
3. **Career** — 3-column timeline (role · big year · description) with a
   scroll-filled center progress line.
4. **Work** — horizontal-scrolling, pinned project gallery.
5. **Skills** — brand-logo grid (simpleicons CDN) with a cursor-following glow.
6. **Contact** — giant name + 3 columns (email/location · social · credit).

Persistent chrome: `MM` logo + centered email + nav (top), social rail (left
edge), `RESUME` button (bottom-right).

## Deploy

Static SPA — deploy `dist/` to Vercel/Netlify. For client-side routing on
`/myworks`, add a rewrite of all routes to `index.html` (Vercel does this
automatically for Vite SPAs; on Netlify add a `_redirects` with `/* /index.html 200`).
