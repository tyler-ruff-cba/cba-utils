import { html } from 'lit';
import { atlasDocComponents, atlasDocLayout } from '@rocket/js/layouts/atlasDoc.js';
import { siteData } from './siteData.js';

const githubAppDataFile = new URL('../../src/github-app-data.js', import.meta.url).href;

export const components = {
  ...atlasDocComponents,
  'github-app-data': { file: githubAppDataFile, className: 'GithubAppData', loading: 'client' },
};

export const layout = pageData =>
  atlasDocLayout(pageData, {
    headerData: {
      logo: ['/brand/cbautils-mark.svg'],
      homeLink: '/',
      navLinks: siteData.navigation,
      socials: [],
    },
    footerData: [
      html`<span>CBAUtils</span>`,
      html`<span>Internal software portal</span>`,
    ],
    stylesheets: ['/cbautils.css'],
    headContent: () => html`
      <meta name="theme-color" content="#0f172a" />
    `,
  });
