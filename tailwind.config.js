/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          background: '#040404',
          'background-purpose': '#12141D',
          'perk-gradient-light': 'rgba(4, 6, 14, 0.9)',
          'perk-gradient-dark': '#04060E',
        },
        gold: {
          dark: '#FA6641',
          light: '#EAE100',
        },
        telegram: {
          bg: 'var(--telegram-bg-color)',
          text: 'var(--telegram-text-color)',
          hint: 'var(--telegram-hint-color)',
          link: 'var(--telegram-link-color)',
          button: 'var(--telegram-button-color)',
          button_text: 'var(--telegram-button-text-color)',
          secondary_bg: 'var(--telegram-secondary-bg-color)',
        },
      },
      borderRadius: {
        avatar: '6rem',
      },
      width: {
        chart: '108px',
        time: '95px',
        glass: '107px',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
