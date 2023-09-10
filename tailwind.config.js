const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const inlineSVG = (svg) => {
  const encodedSVG = encodeURIComponent(
    svg.trim()
      .replace(/[\n\r]+/g, ' ')
      .replace(/>[\s]+</g, '><')
      .replace(/"/g, '\'')
      .replace(/\s+(\/?>)/g, '$1')
  ).replace(/%20/g, ' ').replace(/%3D/g, '=');
  return `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
};

const holoPattern = inlineSVG(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" style="background-color:#fff">
    <path fill="#040607" fill-opacity="0.5" fill-rule="evenodd" d="M0 0h35v35H0V0Zm5 5h25v25H5V5Zm5 5h15v15H10V10Zm5 5h5v5h-5v-5ZM40 5h25v25H40V5Zm5 5h15v15H45V10Zm5 5h5v5h-5v-5Zm20 20H35v35h35V35Zm-5 5H40v25h25V40Zm-5 5H45v15h15V45Zm-5 5h-5v5h5v-5ZM30 40H5v25h25V40Zm-5 5H10v15h15V45Zm-5 5h-5v5h5v-5Z" />
  </svg>
`);

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
      light: '#848B8D',
      dark: '#0C0E10',
      black: '#040607',
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
        'slide-in': 'slide-in 1s cubic-bezier(0.68,-0.55,0.27,1.55) backwards',
        'type-in': 'type-in .5s cubic-bezier(0.68,-0.55,0.27,1.55) both',
      },
      keyframes: {
        'slide-in': {
          '0%': { 'opacity': 0, 'transform': 'translateX(200%)' },
          '100%': { 'opacity': 1, 'transform': 'none' },
        },
        'type-in': {
          '0%': {
            'opacity': 0,
            'color': 'inherit',
            'text-shadow': '0 0 1px rgb(226,232,235)',
            'transform': 'scale(1) translateY(100%) rotate(15deg)',
          },
          '70%': {
            'color': 'inherit',
          },
          '90%': {
            'text-shadow': '0 0 1px rgb(226,232,235)',
          },
          '100%': {
            'opacity': 100,
            'color': '#e2e8eb',
            'text-shadow': 'none',
            'transform': 'none',
            'text-shadow': '2px 2px 0 #0c0e10, 4px 4px 0 rgba(226,232,235,0.2)',
          },
        },
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

    // grid background
    plugin(({ addBase, theme }) => {
      addBase({
        'body': {
          'background-size': '100vw calc(var(--unit) + 1px)',
          'background-image': 'linear-gradient(to bottom, rgba(226,232,235,.02) 1px, transparent 1px)',
          'background-position': 'top center',
        },
        'main': {
          'border-right': '1px solid transparent',
          'background-size': '100% calc(var(--unit) + 1px)',
          'background-image': `
            linear-gradient(to right, rgba(226,232,235,.03) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(226,232,235,.03) 1px, transparent 1px),
            radial-gradient(at top left, rgba(226,232,235,.2) 1px, rgba(226,232,235,0) 1px)
          `,
          'background-position': 'top left',
          
          [`@media (min-width: ${theme('screens.lg')})`]: {
            'background-size': '33.33% calc(var(--unit) + 1px)',
          },
        },
      });
    }),

    // holographic, thanks https://css-tricks.com/holographic-trading-card-effect/
    plugin(({ addComponents }) => {
      addComponents({
        '.holo': {
          'opacity': .6,
          'background-position': 'center, 0 var(--py), var(--px) var(--py)',
          'pointer-events': 'none',
          'user=select': 'none',

          '&, &::after': {
            'position': 'absolute',
            'inset': 0,
            'background-image': `
              url("${holoPattern}"),
              repeating-linear-gradient(0deg, hsl(309,80%,80%) 0%, hsl(204,80%,60%) 50%, hsl(51,80%,60%) 100%),
              repeating-linear-gradient(135deg, hsl(204,29%,10%) 45%, hsl(204,29%,90%) 50%, hsl(204,29%,10%) 55%)
            `,
            'background-size': '20px auto, 100% 700%, 700%',
            'background-blend-mode': 'exclusion, hue, hard-light',
            'mix-blend-mode': 'color-dodge',
            'filter': 'brightness(0.5) contrast(2) saturate(1.5)',
          },

          '&::after': {
            'content': '""',
            'background-position': 'center, 0 var(--py), calc(var(--px) * -1) calc(var(--py) * -1)',
          },
        },
      });
    }),
  ],
};
