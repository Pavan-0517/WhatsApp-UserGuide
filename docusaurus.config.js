// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WhatsApp User Guide',
  tagline: 'Complete WhatsApp documentation and user guide',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages settings
  url: 'https://Pavan-0517.github.io',
  baseUrl: '/WhatsApp-UserGuide/',

  // GitHub repository information
  organizationName: 'Pavan-0517',
  projectName: 'WhatsApp-UserGuide',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Language settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Docusaurus plugins/presets
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Documentation
        docs: {
          sidebarPath: './sidebars.js',

          // GitHub "Edit this page" link
          editUrl:
            'https://github.com/Pavan-0517/WhatsApp-UserGuide/tree/main/',
        },

        // Blog
        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl:
            'https://github.com/Pavan-0517/WhatsApp-UserGuide/tree/main/',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        // Custom CSS
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Website appearance and navigation
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social sharing image
      image: 'img/docusaurus-social-card.jpg',

      // Light/Dark mode
      colorMode: {
        respectPrefersColorScheme: true,
      },

      // Navigation bar
      navbar: {
        title: 'WhatsApp User Guide',

        logo: {
          alt: 'WhatsApp User Guide Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },

          {
            href: 'https://github.com/Pavan-0517/WhatsApp-UserGuide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // Footer
      footer: {
        style: 'dark',

        links: [
          {
            title: 'Documentation',

            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },

              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },

              {
                label: 'Best Practices',
                to: '/docs/best-practices',
              },

              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting',
              },
            ],
          },

          {
            title: 'Installation',

            items: [
              {
                label: 'Android',
                to: '/docs/installation-android',
              },

              {
                label: 'iOS',
                to: '/docs/installation-ios',
              },

              {
                label: 'Desktop',
                to: '/docs/installation-desktop',
              },
            ],
          },

          {
            title: 'More',

            items: [
              {
                label: 'Administration',
                to: '/docs/administration',
              },

              {
                label: 'UPI',
                to: '/docs/UPI',
              },

              {
                label: 'GitHub',
                href: 'https://github.com/Pavan-0517/WhatsApp-UserGuide',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} WhatsApp User Guide`,
      },

      // Code syntax highlighting
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;