var packageJson = require('./package.json')

var fs = require('fs')
var target = {}

switch (packageJson.dependencyTarget) {
  case 'local':
    target = packageJson.publishedDependencies
    packageJson.dependencyTarget = 'published'
    break
  case 'published':
    target = packageJson.localDependencies
    packageJson.dependencyTarget = 'local'
    break
  default:
    throw new Error('incorrect dependencyTarget')
}

for (let name in target) {
  let value = target[name]
  console.info('value', value)
  packageJson.dependencies[name] = value
}

fs.writeFile('./package.json', JSON.stringify(packageJson, null, '  '))
