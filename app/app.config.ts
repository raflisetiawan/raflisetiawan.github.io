export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/111565262?v=4',
      light: 'https://avatars.githubusercontent.com/u/111565262?v=4',
      alt: 'Rafli Setiawan'
    },
    meetingLink: 'mailto:raflisetiawan006@mail.com',
    email: 'raflisetiawan006@mail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'fuchsia',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-2xl text-pretty text-3xl sm:text-4xl lg:text-5xl font-bold',
        description: 'mt-4 text-lg mx-auto max-w-2xl text-pretty sm:text-xl text-muted'
      }
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    }
  },
  footer: {
    credits: `Crafted with ❤️ by Rafli Setiawan • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/raflisetiawan',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/rafli-setiawan-820b62227',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:raflisetiawan006@mail.com',
      'target': '_blank',
      'aria-label': 'Email'
    }, {
      'icon': 'i-lucide-phone',
      'to': 'tel:+6281334388233',
      'target': '_blank',
      'aria-label': 'Phone'
    }]
  }
})
