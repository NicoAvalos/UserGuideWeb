// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Annapurna™ Resource',
  tagline: 'Wellcome to User Guide',
  favicon: 'https://www.apmodtech.com/static/images/apmt/APMT_H_tablet.png',
  
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'NicolasAvalos', // GitHub user/org name
  projectName: 'User Guide', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // ex blog block
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'General Introduction',
        logo: {
          alt: 'My Site Logo',
          src: 'img/apmt.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'workflowsSidebar', // Sidebar para Workflows
            position: 'left',
            label: 'Workflows',
          },
          {
            type: 'docSidebar',
            sidebarId: 'elementsSidebar', // Sidebar para Elements
            position: 'left',
            label: 'Elements',
          },
          {
            type: 'docSidebar',
            sidebarId: 'analisysSidebar', // Sidebar para Analysis
            position: 'left',
            label: 'Analysis',
          },
          {
            type: 'docSidebar',
            sidebarId: 'visualizationSidebar', // Sidebar para Visualization
            position: 'left',
            label: 'Visualization',
          },
          {
            to: '/docs/General_Introduction/support',
            position: 'right',
            label: 'Support',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Lectur More', to: 'https://www.apmodtech.com/Publications/Articles' },
              { label: 'Specific Reading', href: 'https://julianmortiz.com/articles' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Web Site', href: 'https://www.apmodtech.com/' },
              { label: 'Platform', href: 'https://app.apmodtech.com/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Annapurna™ Resources.`,
      },      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
