const theme = require('./theme')
const { getCustomProperties, transformConfig } = require('./utils')

const config = {
  theme,
}

module.exports = {
  config,
  getCustomProperties,
  transformConfig,
}
