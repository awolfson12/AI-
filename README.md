# Living Self — Minimal Deploy Package

This is a **clean, working starter** for Render (or any Node host). It serves a static site and a couple of JSON endpoints.

## Quick Start
```bash
npm install
npm start
# open http://localhost:3000
```

## Deploy to Render
- Build Command: `npm ci --omit=dev --no-audit --no-fund`
- Start Command: `node server.js`
- Health Check Path: `/health`

## Files
- `server.js` — Express server (ESM) + static hosting + `/health`, `/api/state`
- `index.html`, `style.css`, `app.js` — client files
- `math.js` — safe math helpers (ESM)
- `render.yaml` — Render service config
- `package.json` — Node 20, ESM, start script
