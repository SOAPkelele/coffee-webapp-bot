/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
    },
    container: {
      center: true,
      padding: '0.5rem',
    },
  },
}
