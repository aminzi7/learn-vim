import vimSidebar from './vimSidebar'

export default {
  title: 'learn-vim',
  base: '/learn-vim/',
  description: 'learn-vim',
  themeConfig: {
    siteTitle: 'VIM',
    logo: '/Vim.svg.png',
    nav: [
      { text: 'Vim', link: '/vim/', activeMatch: '/vim/' },
      { text: 'vsCode', link: '/vscode/', activeMatch: '/vscode/' }
    ],

    sidebar: {
      '/vim': vimSidebar,
      '/vscode/': [
        {
          text: 'vscode',
          items: [
            // { text: 'Index', link: '/vscode/' }, // /config/index.md
            { text: 'Three', link: '/vscode/a' }, // /config/three.md
            { text: 'Four', link: '/vscode/b' } // /config/four.md
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aminzi7/learn-vim' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Arminzy'
    }
  }
}
