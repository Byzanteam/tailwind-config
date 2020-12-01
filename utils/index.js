function transformSettings(namespace, data) {
  const prefix = namespace.startsWith('--') ? namespace : `--${namespace}`

  return Object.entries(data).reduce((acc, [key, value]) => {
    switch (true) {
      case typeof value === 'object':
        return {
          ...acc,
          [key]: transformSettings(`${prefix}-${key}`, value),
        }
      case key === 'DEFAULT':
        return {
          ...acc,
          [key]: `var(${prefix}, ${value})`,
        }
      default:
        return {
          ...acc,
          [key]: `var(${prefix}-${key}, ${value})`,
        }
    }
  }, {})
}

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

function getCustomProperties(config = {}) {
  const { theme } = config
  const colorProperties = getProperties('color', theme && theme.colors || {})

  return `:root{${colorProperties.join('')}}`
}

function transformConfig(config = {}) {
  const { theme, ...rest } = config
  const colors = transformSettings('color', theme && theme.colors || {})

  return { theme: { ...theme, colors }, ...rest }
}

module.exports = {
  getCustomProperties,
  transformConfig,
}
