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
      black: '#000',
      white: '#fff',
      accent: {
        '50': '#fffceb',
        '100': '#fef6c7',
        '200': '#fcec8b',
        '300': '#fbdc4e',
        '400': '#faca25',
        '500': '#eca50b',
        '600': '#d88307',
        '700': '#b35d0a',
        '800': '#91470f',
        '900': '#773b10',
        '950': '#451e03',
      },
      gray: {
        '50': '#f4f6f7',
        '100': '#e2e8eb',
        '200': '#c9d4d8',
        '300': '#a3b4bd',
        '400': '#768e9a',
        '500': '#5a7280',
        '600': '#4e606c',
        '700': '#43515b',
        '800': '#3c464e',
        '900': '#363d43',
        '950': '#0c0e10',
      },
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
      animation: {
        'type-in': 'type-in .5s cubic-bezier(0.68,-0.55,0.27,1.55) both',
      },
      keyframes: {
        'type-in': {
          '0%': {
            'opacity': 0,
            'color': 'inherit',
            'text-shadow': '0 0 1px rgba(255,255,255,0.5)',
            'transform': 'scale(1) translateY(100%) rotate(15deg)',
          },
          '70%': {
            'color': 'inherit',
          },
          '90%': {
            'text-shadow': '0 0 1px rgba(255,255,255,0.5)',
          },
          '100%': {
            'opacity': 100,
            'color': '#e2e8eb',
            'text-shadow': 'none',
            'transform': 'none',
            'text-shadow': '2px 2px 0 #0c0e10, 4px 4px 0 rgba(255,255,255,0.2)',
          },
        },
      },
    },
  },
  plugins: [
    // grid background
    plugin(({ addBase }) => {
      addBase({
        'body': {
          'background-size': '100vw calc(var(--unit) + 1px)',
          'background-image': 'linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px)',
          'background-position': 'top center',
        },
        'main': {
          'border-right': '1px solid transparent',
          'background-size': '33.33% calc(var(--unit) + 1px)',
          'background-image': `
            linear-gradient(to right, rgba(255,255,255,.03) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,255,255,.03) 1px, transparent 1px),
            radial-gradient(at top left, rgba(255,255,255,.2) 1px, rgba(255,255,255,0) 1px)
          `,
          'background-position': 'top left',
        },
      });
    }),

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
