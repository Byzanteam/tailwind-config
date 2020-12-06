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
  backgroundColor: ['disabled', 'even', 'odd', 'active'],
  borderColor: ['disabled', 'active'],
  boxShadow: ['disabled', 'active'],
  cursor: ['disabled'],
  divideColor: ['disabled'],
  placeholderColor: ['disabled'],
  textColor: ['disabled', 'active'],
  opacity: ['active', 'disabled'],
  ringColor: ['active', 'hover', 'disabled'],
  textDecoration: ['active', 'visited'],
  transformOrigin: ['hover'],
  zIndex: ['hover', 'active'],
  display: ['group-hover'],
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
