const plugin = require('tailwindcss/plugin')
const theme = require('./theme')
const { getCustomProperties, transformConfig } = require('./utils')

const corePlugins = {
  backgroundOpacity: false,
  borderOpacity: false,
  divideOpacity: false,
  placeholderOpacity: false,
  ringOpacity: false,
  textOpacity: false,
}

const variantsExtend = {
  backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled', 'even', 'odd', 'active'],
  borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled', 'active'],
  boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled', 'active'],
  cursor: ['responsive', 'disabled'],
  divideColor: ['responsive', 'dark', 'disabled'],
  placeholderColor: ['responsive', 'dark', 'focus', 'disabled'],
  textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled', 'active'],
  opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'disabled'],
  ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'active', 'hover', 'disabled'],
  textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'visited'],
  transformOrigin: ['hover', 'responsive'],
  zIndex: ['responsive', 'focus-within', 'focus', 'hover', 'active'],
}

const config = {
  corePlugins,
  theme,
  variants: {
    extend: variantsExtend,
  },
  plugins: [
    plugin(({ config, addBase }) => {
      const h1 = config('theme.fontSize.h1')
      const bold = config('theme.fontWeight.bold')
      addBase({
        h1: {
          fontSize: h1[0],
          lineHeight: h1[1].lineHeight,
          fontWeight: bold,
        },
      })
    }),
  ],
}

module.exports = {
  config,
  getCustomProperties,
  transformConfig,
}
