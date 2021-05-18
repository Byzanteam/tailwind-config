const plugin = require('tailwindcss/plugin')

/* https://github.com/tailwindlabs/tailwindcss/discussions/2394 */
module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    '.no-scrollbar': {
      // IE and Edge
      '-ms-overflow-style': 'none',
      // Firefox
      'scrollbar-width': 'none',

      // Chrome, Safari and Opera
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
})
