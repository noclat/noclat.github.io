const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontFamily: {
      sans: ['Figtree', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#E2E8EB',
      black: '#0C0E10',
    },
    extend: {
      minWidth: defaultTheme.spacing,
      maxWidth: defaultTheme.spacing,
      minHeight: defaultTheme.spacing,
      maxHeight: defaultTheme.spacing,
      // adding some values to handle relative z-index between elements
      // keeping 10-based z-index for absolute z-index layers
      zIndex: {
        '-1': -1,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      },
    },
  },
  plugins: [
    // hide scrollbar
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-none': {
          'scrollbarWidth': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        },
      })
    }),

    // animation delay
    plugin(({ addUtilities, matchUtilities, theme }) => {
      matchUtilities({
        'after': (value) => ({
          'animation-delay': value,
        }),
      }, {
        values: theme('transitionDelay'),
      });
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
        '.play': {
          'animation-play-state': 'running',
        },
      });
    }),
  ],
};
