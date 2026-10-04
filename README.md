# CBAUtils

CBAUtils is the internal-first software and documentation portal for CBA.

## Collections

- Web Apps
- Desktop Apps
- Documentation

## Development

Requires Node.js 22+.

```bash
npm install
npm start
```

Build:

```bash
npm run build
```

The production output is written to `dist/`.

## GitHub integration

Desktop application pages fetch GitHub releases and open issues in the browser when the page is opened. This keeps GitHub data current without requiring a CBAUtils rebuild and keeps the deployment fully static/Vercel-compatible. Public repository data works without authentication; a future server-side proxy can be added if higher API limits or a private token are required.

## Deployment

Target production origin: https://www.cbautils.com/

The project includes `vercel.json` for a static `dist/` deployment. GitHub activity is intentionally browser-requested rather than Rocket server-rendered because Rocket's current documented production adapter path does not provide a Vercel adapter.
