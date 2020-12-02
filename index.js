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
  backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled'],
  borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled'],
  boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled'],
  cursor: ['responsive', 'disabled'],
  divideColor: ['responsive', 'dark', 'disabled'],
  placeholderColor: ['responsive', 'dark', 'focus', 'disabled'],
  textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled']
}

const config = {
  corePlugins,
  theme,
  variants: {
    extend: variantsExtend,
  },
}

module.exports = {
  config,
  getCustomProperties,
  transformConfig,
}
