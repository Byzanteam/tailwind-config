function getProperties(namespace, data) {
  const prefix = namespace.startsWith('--') ? namespace : `--${namespace}`
  const properties = Object.entries(data).reduce((acc, [key, value]) => {
    switch (true) {
      case typeof value === 'object':
        return [
          ...acc,
          getProperties(`${prefix}-${key}`, value),
        ]
      case key === 'DEFAULT':
        return [
          ...acc,
          `${prefix}: ${value};`
        ]
      default:
        return [
          ...acc,
          `${prefix}-${key}: ${value};`
        ]
    }
  }, [])

  return properties.flat()
}

module.exports = function getCustomProperties(config = {}) {
  const { theme } = config
  const colorProperties = getProperties('color', theme && theme.colors || {})

  return `:root{${colorProperties.join('')}}`
}
