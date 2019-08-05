module.exports = {
    title: 'VuePress 시작!',
    description: 'Hello World',
    themeConfig: {
      nav: [
        {
          text: 'Total',
          items: [
             { text: 'Home', link: '/' },
             { text: 'Home hello', link: '/hello.md' },
             { text: 'About README', link: '/about/' },
             {
                 text: 'About Blog',
                 items: [
                    { text: 'About Blog', link: '/about/me' }
                 ]
             }
          ]
        }
      ]
    }
}