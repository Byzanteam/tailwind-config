module.exports = function flatVariables(namespace, variables) {
  return Object.entries(variables)
    .map(([key, value]) => {
      switch (true) {
        case typeof value === 'object':
          return flatVariables(`${namespace}-${key}`, value)
        case key === 'DEFAULT':
          return {
            property: `${namespace}`,
            value,
          }
        default:
          return {
            property: `${namespace}-${key}`,
            value,
          }
      }
    })
    .flat()
}
