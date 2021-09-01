/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

const flatVariables = require('../utils/flat-variables')

module.exports = plugin(({ addUtilities, theme }) => {
  const rippleBasic = {
    '.ripple': {
      position: 'relative',
      overflow: 'hidden',

      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
        transform: 'scale(11)',
        opacity: 0,
        transition: 'opacity 0.4s, transform 0.3s',
      },

      '&:active::after': {
        transform: 'scale(0)',
        opacity: 0.6,
        transition: '0s',
      },
    },
  }
  const colors = theme('ripple') || theme('colors') || {}
  const utilities = flatVariables('ripple', colors).reduce(
    (acc, cur) => ({
      ...acc,
      [`.${cur.property}::after`]: {
        backgroundImage: `radial-gradient(circle, ${cur.value} 11%, transparent 11%)`,
      },
    }),
    {},
  )

  addUtilities(rippleBasic)
  addUtilities(utilities)
})
