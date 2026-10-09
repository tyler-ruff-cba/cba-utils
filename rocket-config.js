/** @type {import('@rocket/js/types.js').RocketConfig} */
export default {
  includeGlobs: ['docs/pages/**/*.rocket.{md,js}', 'src/**/*.rocket.{md,js}'],
  siteOrigin: "https://www.cbautils.com",
  siteHeadMetadata: {
    siteName: "CBA Utils",
    defaultDescription: "CBA Utils website",
    language: "en",
    icons: {
      ico: "/favicon.ico",
      svg: "/favicon.svg",
      appleTouchIcon: "/apple-touch-icon.png"
    },
    themeColor: '#ffffff',
    socialPreview: {
        template({ site, page }) {
          return `<!doctype html>
        <html lang="${site.language}">
          <head>
            <meta charset="utf-8">
            <style>
              html, body { width: 1200px; height: 630px; margin: 0; }
              body { display: grid; place-items: center; font-family: system-ui; }
            </style>
          </head>
          <body>
            <main>
              <p>${site.name}</p>
              <h1>${page.title}</h1>
              <p>${page.description}</p>
            </main>
          </body>
        </html>`;
          },
    }
  }
};
