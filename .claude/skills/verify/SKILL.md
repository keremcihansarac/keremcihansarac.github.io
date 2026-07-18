---
name: verify
description: Build, serve, and observe this portfolio site headlessly to verify changes end-to-end.
---

# Verify the portfolio site

## Build and serve

```bash
npm run lint && npm run build
npm run preview -- --port 4173 --strictPort   # serves dist/ (run in background)
```

## Drive it (headless Chrome, no extra deps)

Dump the fully rendered DOM (React executed, GitHub fetch completed):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --virtual-time-budget=8000 \
  --dump-dom http://localhost:4173 > /tmp/dom.html
```

Screenshot the whole page:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --virtual-time-budget=8000 \
  --window-size=1280,2400 --screenshot=/tmp/site.png http://localhost:4173
```

## Flows worth checking

- Projects section shows real repo cards (grep the DOM for repo names).
- GitHub API failure fallback: add
  `--host-resolver-rules="MAP api.github.com 127.0.0.1"` to the Chrome
  command — the Projects section must show the "Couldn't load projects"
  message, not a blank or stuck-loading state.

## Gotchas

- `--virtual-time-budget=8000` is what lets the GitHub fetch finish
  before `--dump-dom`/`--screenshot` fires; without it you capture the
  loading state.
- Kill the preview server afterwards: `lsof -ti:4173 | xargs kill`.
