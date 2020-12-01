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

const config = {
  corePlugins,
  theme,
}

module.exports = {
  config,
  getCustomProperties,
  transformConfig,
}
