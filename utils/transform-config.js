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

module.exports = function transformConfig(config = {}) {
  const { theme, ...rest } = config
  const colors = transformSettings('color', theme && theme.colors || {})

  return { theme: { ...theme, colors }, ...rest }
}
