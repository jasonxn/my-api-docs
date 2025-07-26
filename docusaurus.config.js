// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suppy',
  tagline: 'Fully Customized & Branded e-Commerce Solutions for Retailers',
  favicon: 'static/img/a0AN200000TFqonMAD_org.ico',


  // Future flags for Docusaurus v4 compatibility
  future: {
    v4: true,
  },

  // Production URL and base path
  url: 'https://docs.suppy.com',
  baseUrl: '/',

  // GitHub repo info (update to your org/repo)
  organizationName: 'jasonxn',
  projectName: 'suppy-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
   trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suppyapps/suppy-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/suppyapps/suppy-docs/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/suppy-social-card.png',
      navbar: {
        title: 'Suppy',
        logo: {
          alt: 'Suppy Logo',
          src: 'img/suppyapps_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/suppyapps/suppy',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://suppy.com',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'mailto:support@suppy.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/suppy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/suppyapps',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/suppyapps/suppy',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Suppy, Inc. Built by eCommerce & Tech veterans.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
